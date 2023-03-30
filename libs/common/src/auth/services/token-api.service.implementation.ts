import { ApiHelperService } from "../../abstractions/api-helper.service.abstraction";
import { AppIdService } from "../../abstractions/appId.service";
import { EnvironmentService } from "../../abstractions/environment.service";
import { PlatformUtilsService } from "../../abstractions/platformUtils.service";
import { Utils } from "../../misc/utils";
import { ErrorResponse } from "../../models/response/error.response";
import { TokenApiService as TokenApiServiceAbstraction } from "../abstractions/token-api.service.abstraction";
import { TokenService } from "../abstractions/token.service";
import { DeviceRequest } from "../models/request/identity-token/device.request";
import { PasswordTokenRequest } from "../models/request/identity-token/password-token.request";
import { SsoTokenRequest } from "../models/request/identity-token/sso-token.request";
import { TokenTwoFactorRequest } from "../models/request/identity-token/token-two-factor.request";
import { UserApiTokenRequest } from "../models/request/identity-token/user-api-token.request";
import { IdentityCaptchaResponse } from "../models/response/identity-captcha.response";
import { IdentityTokenResponse } from "../models/response/identity-token.response";
import { IdentityTwoFactorResponse } from "../models/response/identity-two-factor.response";

/**
 * Service for interacting with the Bitwarden Identity API for token management.
 */
export class TokenApiServiceImplementation implements TokenApiServiceAbstraction {
  constructor(
    private platformUtilsService: PlatformUtilsService,
    private environmentService: EnvironmentService,
    private tokenService: TokenService,
    private appIdService: AppIdService,
    private apiHelperService: ApiHelperService
  ) {}

  async getActiveAccessToken(): Promise<string> {
    let accessToken = await this.tokenService.getAccessToken();
    if (await this.tokenService.accessTokenNeedsRefresh()) {
      await this.refreshAccessToken();
      accessToken = await this.tokenService.getAccessToken();
    }
    return accessToken;
  }

  /**
   * Authenticate with the Identity API using the provided request.
   * Exchanges the id token for an access token.
   */
  async postIdentityToken(
    request: UserApiTokenRequest | PasswordTokenRequest | SsoTokenRequest
  ): Promise<IdentityTokenResponse | IdentityTwoFactorResponse | IdentityCaptchaResponse> {
    const identityToken =
      request instanceof UserApiTokenRequest
        ? request.toIdentityToken()
        : request.toIdentityToken(this.platformUtilsService.getClientType());

    const fetchReq = await this.apiHelperService.createRequest(
      "POST",
      `${this.environmentService.getIdentityUrl()}/connect/token`,
      this.apiHelperService.qsStringify(identityToken),
      true,
      // Create an arrow function so that the alterIdentityTokenHeaders will be
      // be called with the correct context for "this" and email will be defined in the method.
      (headers) => request.alterIdentityTokenHeaders(headers)
    );

    const response = await this.apiHelperService.fetch(fetchReq);

    let responseJson: any = null;
    if (this.apiHelperService.isJsonResponse(response)) {
      responseJson = await response.json();
    }

    if (responseJson != null) {
      if (response.status === 200) {
        return new IdentityTokenResponse(responseJson);
      } else if (
        response.status === 400 &&
        responseJson.TwoFactorProviders2 &&
        Object.keys(responseJson.TwoFactorProviders2).length
      ) {
        await this.tokenService.clearTwoFactorToken();
        return new IdentityTwoFactorResponse(responseJson);
      } else if (
        response.status === 400 &&
        responseJson.HCaptcha_SiteKey &&
        Object.keys(responseJson.HCaptcha_SiteKey).length
      ) {
        return new IdentityCaptchaResponse(responseJson);
      }
    }

    return Promise.reject(new ErrorResponse(responseJson, response.status, true));
  }

  async refreshAccessToken(): Promise<any> {
    try {
      await this._refreshAccessToken();
    } catch (e) {
      return Promise.reject(null);
    }
  }

  private async _refreshAccessToken(): Promise<void> {
    // if we have a refresh token, use it to get a new access token and refresh token
    const refreshToken = await this.tokenService.getRefreshToken();
    if (refreshToken != null && refreshToken !== "") {
      return this.refreshAccessTokenViaRefreshToken();
    }

    // if we have client creds, use them to get a new access token and refresh token
    const clientId = await this.tokenService.getClientId();
    const clientSecret = await this.tokenService.getClientSecret();
    if (!Utils.isNullOrWhitespace(clientId) && !Utils.isNullOrWhitespace(clientSecret)) {
      return this.refreshAccessTokenViaClientCredentials(clientId, clientSecret);
    }

    throw new Error("Cannot refresh token, no refresh token or api keys are stored");
  }

  private async refreshAccessTokenViaRefreshToken(): Promise<void> {
    const refreshToken = await this.tokenService.getRefreshToken();
    if (refreshToken == null || refreshToken === "") {
      throw new Error();
    }

    const decodedToken = await this.tokenService.decodeAccessToken();

    const requestBody = this.apiHelperService.qsStringify({
      grant_type: "refresh_token",
      client_id: decodedToken.client_id,
      refresh_token: refreshToken,
    });

    const fetchReq = await this.apiHelperService.createRequest(
      "POST",
      `${this.environmentService.getIdentityUrl()}/connect/token`,
      requestBody,
      true
    );

    const response = await this.apiHelperService.fetch(fetchReq);

    if (response.status === 200) {
      const responseJson = await response.json();
      const tokenResponse = new IdentityTokenResponse(responseJson);
      await this.tokenService.setTokens(
        tokenResponse.accessToken,
        tokenResponse.refreshToken,
        null
      );
    } else {
      const error = await this.apiHelperService.handleError(response, true, true);
      return Promise.reject(error);
    }
  }

  private async refreshAccessTokenViaClientCredentials(
    clientId: string,
    clientSecret: string
  ): Promise<void> {
    const appId = await this.appIdService.getAppId();
    const deviceRequest = new DeviceRequest(appId, this.platformUtilsService);
    const tokenRequest = new UserApiTokenRequest(
      clientId,
      clientSecret,
      new TokenTwoFactorRequest(),
      deviceRequest
    );

    const response = await this.postIdentityToken(tokenRequest);
    if (!(response instanceof IdentityTokenResponse)) {
      throw new Error(
        "Invalid response received when refreshing access token via client credentials"
      );
    }

    await this.tokenService.setAccessToken(response.accessToken);
  }
}