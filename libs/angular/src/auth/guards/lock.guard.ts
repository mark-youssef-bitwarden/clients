import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

import { AuthService } from "@bitwarden/common/auth/abstractions/auth.service";
import { DeviceTrustCryptoServiceAbstraction } from "@bitwarden/common/auth/abstractions/device-trust-crypto.service.abstraction";
import { AuthenticationStatus } from "@bitwarden/common/auth/enums/authentication-status";
import { CryptoService } from "@bitwarden/common/platform/abstractions/crypto.service";

/**
 * Only allow access to this route if the vault is locked.
 * If TDE is enabled then the user must also have had a user key at some point.
 * Otherwise redirect to root.
 */
export function lockGuard(): CanActivateFn {
  return async () => {
    const authService = inject(AuthService);
    const cryptoService = inject(CryptoService);
    const deviceTrustCryptoService = inject(DeviceTrustCryptoServiceAbstraction);
    const router = inject(Router);

    const authStatus = await authService.getAuthStatus();
    if (authStatus !== AuthenticationStatus.Locked) {
      return router.createUrlTree(["/"]);
    }

    const tdeEnabled = await deviceTrustCryptoService.supportsDeviceTrust();
    const everHadUserKey = await cryptoService.getEverHadUserKey();
    if (tdeEnabled && !everHadUserKey) {
      return router.createUrlTree(["/"]);
    }

    return true;
  };
}
