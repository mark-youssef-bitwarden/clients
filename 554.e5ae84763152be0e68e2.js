"use strict";(self.webpackChunk_bitwarden_web_vault=self.webpackChunk_bitwarden_web_vault||[]).push([[554],{86554:(i,n,t)=>{t.r(n),t.d(n,{OrganizationSettingsModule:()=>Ji});var e=t(71146),o=t(17854),a=t(45181),r=t(75557),l=t(58691),u=t(47064),c=t(56992),s=t(24852),p=t(98645),g=t(54019),d=t(30359),m=t(33031),f=t(92716),h=t(59260),b=t(68362),_=t(70032),Z=t(77494);class U{}var A=t(53988);class y{}var v=t(59281),x=t(27646),T=t(64447),w=t(45213),I=t(13159),q=t(78627),z=t(99721),O=t(76528),C=t(97360),L=t(73369),S=t(23915),N=t(19419),K=t(46246),Y=t(36338),M=t(14970),k=t(81974),D=t(7172),G=t(24637),J=t(11512),B=t(75734),E=t(36179),Q=t(28315),F=t(82933),j=function(i,n,t,e){return new(t||(t=Promise))((function(o,a){function r(i){try{u(e.next(i))}catch(n){a(n)}}function l(i){try{u(e.throw(i))}catch(n){a(n)}}function u(i){var n;i.done?o(i.value):(n=i.value,n instanceof t?n:new t((function(i){i(n)}))).then(r,l)}u((e=e.apply(i,n||[])).next())}))};const R=["purgeOrganizationTemplate"],P=["apiKeyTemplate"],W=["rotateApiKeyTemplate"];function H(i,n){1&i&&(s.TgZ(0,"div"),s._uU(1,"\n  "),s._UZ(2,"i",9),s.ALo(3,"i18n"),s._uU(4,"\n  "),s.TgZ(5,"span",10),s._uU(6),s.ALo(7,"i18n"),s.qZA(),s._uU(8,"\n"),s.qZA()),2&i&&(s.xp6(2),s.s9C("title",s.lcZ(3,2,"loading")),s.xp6(4),s.Oqu(s.lcZ(7,4,"loading")))}function $(i,n){if(1&i&&(s.TgZ(0,"form",11),s._uU(1,"\n  "),s.TgZ(2,"div",12),s._uU(3,"\n    "),s.TgZ(4,"div"),s._uU(5,"\n      "),s.TgZ(6,"bit-form-field"),s._uU(7,"\n        "),s.TgZ(8,"bit-label"),s._uU(9),s.ALo(10,"i18n"),s.qZA(),s._uU(11,"\n        "),s._UZ(12,"input",13),s._uU(13,"\n      "),s.qZA(),s._uU(14,"\n      "),s.TgZ(15,"bit-form-field"),s._uU(16,"\n        "),s.TgZ(17,"bit-label"),s._uU(18),s.ALo(19,"i18n"),s.qZA(),s._uU(20,"\n        "),s._UZ(21,"input",14),s._uU(22,"\n      "),s.qZA(),s._uU(23,"\n      "),s.TgZ(24,"bit-form-field"),s._uU(25,"\n        "),s.TgZ(26,"bit-label"),s._uU(27),s.ALo(28,"i18n"),s.qZA(),s._uU(29,"\n        "),s._UZ(30,"input",15),s._uU(31,"\n      "),s.qZA(),s._uU(32,"\n    "),s.qZA(),s._uU(33,"\n    "),s.TgZ(34,"div"),s._uU(35,"\n      "),s._UZ(36,"bit-avatar",16),s._uU(37,"\n      "),s.TgZ(38,"app-account-fingerprint",17),s.ALo(39,"i18n"),s._uU(40,"\n      "),s.qZA(),s._uU(41,"\n    "),s.qZA(),s._uU(42,"\n  "),s.qZA(),s._uU(43,"\n  "),s.TgZ(44,"button",18),s._uU(45),s.ALo(46,"i18n"),s.qZA(),s._uU(47,"\n"),s.qZA()),2&i){const i=s.oxw();s.Q6J("bitSubmit",i.submit)("formGroup",i.formGroup),s.xp6(9),s.Oqu(s.lcZ(10,11,"organizationName")),s.xp6(9),s.Oqu(s.lcZ(19,13,"billingEmail")),s.xp6(9),s.Oqu(s.lcZ(28,15,"businessName")),s.xp6(9),s.Q6J("text",i.org.name)("id",i.org.id),s.xp6(2),s.s9C("fingerprintLabel",s.lcZ(39,17,"yourOrganizationsFingerprint")),s.Q6J("fingerprintMaterial",i.organizationId)("publicKeyBuffer",i.publicKeyBuffer),s.xp6(7),s.hij("\n    ",s.lcZ(46,19,"save"),"\n  ")}}function V(i,n){if(1&i){const i=s.EpF();s.ynx(0),s._uU(1,"\n  "),s.TgZ(2,"h1",19),s._uU(3),s.ALo(4,"i18n"),s.qZA(),s._uU(5,"\n  "),s.TgZ(6,"p"),s._uU(7),s.ALo(8,"i18n"),s.TgZ(9,"a",20),s._uU(10),s.ALo(11,"i18n"),s.qZA(),s._uU(12,"\n  "),s.qZA(),s._uU(13,"\n  "),s.TgZ(14,"button",21),s.NdJ("click",(function(){s.CHM(i);const n=s.oxw();return s.KtG(n.viewApiKey())})),s._uU(15),s.ALo(16,"i18n"),s.qZA(),s._uU(17,"\n  "),s.TgZ(18,"button",21),s.NdJ("click",(function(){s.CHM(i);const n=s.oxw();return s.KtG(n.rotateApiKey())})),s._uU(19),s.ALo(20,"i18n"),s.qZA(),s._uU(21,"\n"),s.BQk()}2&i&&(s.xp6(3),s.Oqu(s.lcZ(4,5,"apiKey")),s.xp6(4),s.hij("\n    ",s.lcZ(8,7,"apiKeyDesc"),"\n    "),s.xp6(3),s.hij("\n      ",s.lcZ(11,9,"learnMore"),"\n    "),s.xp6(5),s.hij("\n    ",s.lcZ(16,11,"viewApiKey"),"\n  "),s.xp6(4),s.hij("\n    ",s.lcZ(20,13,"rotateApiKey"),"\n  "))}function X(i,n){1&i&&(s.TgZ(0,"bit-form-control"),s._uU(1,"\n    "),s.TgZ(2,"bit-label"),s._uU(3),s.ALo(4,"i18n"),s.qZA(),s._uU(5,"\n    "),s._UZ(6,"input",24),s._uU(7,"\n  "),s.qZA()),2&i&&(s.xp6(3),s.Oqu(s.lcZ(4,1,"allowAdminAccessToAllCollectionItemsDesc")))}function ii(i,n){1&i&&(s.TgZ(0,"button",25),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.hij("\n    ",s.lcZ(2,1,"save"),"\n  "))}function ni(i,n){if(1&i&&(s.TgZ(0,"form",11),s._uU(1,"\n  "),s.TgZ(2,"h1",19),s._uU(3),s.ALo(4,"i18n"),s.qZA(),s._uU(5,"\n  "),s.TgZ(6,"p"),s._uU(7),s.ALo(8,"i18n"),s.qZA(),s._uU(9,"\n  "),s.YNc(10,X,8,3,"bit-form-control",1),s.ALo(11,"async"),s._uU(12,"\n  "),s.TgZ(13,"bit-form-control"),s._uU(14,"\n    "),s.TgZ(15,"bit-label"),s._uU(16),s.ALo(17,"i18n"),s.qZA(),s._uU(18,"\n    "),s._UZ(19,"input",22),s._uU(20,"\n  "),s.qZA(),s._uU(21,"\n  "),s.YNc(22,ii,3,3,"button",23),s._uU(23,"\n"),s.qZA()),2&i){const i=s.oxw();s.Q6J("bitSubmit",i.submitCollectionManagement)("formGroup",i.collectionManagementFormGroup),s.xp6(3),s.Oqu(s.lcZ(4,7,"collectionManagement")),s.xp6(4),s.Oqu(s.lcZ(8,9,"collectionManagementDesc")),s.xp6(3),s.Q6J("ngIf",s.lcZ(11,11,i.flexibleCollectionsV1Enabled$)),s.xp6(6),s.Oqu(s.lcZ(17,13,"limitCollectionCreationDeletionDesc")),s.xp6(6),s.Q6J("ngIf",!i.selfHosted)}}function ti(i,n){}function ei(i,n){}function oi(i,n){}class ai{constructor(i,n,t,e,o,a,r,l,u,c,s){this.modalService=i,this.i18nService=n,this.route=t,this.platformUtilsService=e,this.cryptoService=o,this.router=a,this.organizationService=r,this.organizationApiService=l,this.dialogService=u,this.formBuilder=c,this.configService=s,this.selfHosted=!1,this.canEditSubscription=!0,this.loading=!0,this.canUseApi=!1,this.flexibleCollectionsEnabled$=this.configService.getFeatureFlag$(v.T.FlexibleCollections,!1),this.flexibleCollectionsV1Enabled$=this.configService.getFeatureFlag$(v.T.FlexibleCollectionsV1,!1),this.formGroup=this.formBuilder.group({orgName:this.formBuilder.control({value:"",disabled:!0},{validators:[p.kI.required,p.kI.maxLength(50)],updateOn:"change"}),billingEmail:this.formBuilder.control({value:"",disabled:!0},{validators:[p.kI.required,p.kI.email,p.kI.maxLength(256)]}),businessName:this.formBuilder.control({value:"",disabled:!0},{validators:[p.kI.maxLength(50)]})}),this.collectionManagementFormGroup=this.formBuilder.group({limitCollectionCreationDeletion:this.formBuilder.control({value:!1,disabled:!0}),allowAdminAccessToAllCollectionItems:this.formBuilder.control({value:!1,disabled:!0})}),this.destroy$=new g.x,this.submit=()=>j(this,void 0,void 0,(function*(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const i=new y;if(i.name=this.formGroup.value.orgName,i.businessName=this.formGroup.value.businessName,i.billingEmail=this.formGroup.value.billingEmail,!this.org.hasPublicAndPrivateKeys){const n=yield this.cryptoService.getOrgKey(this.organizationId),t=yield this.cryptoService.makeKeyPair(n);i.keys=new A.u(t[0],t[1].encryptedString)}yield this.organizationApiService.save(this.organizationId,i),this.platformUtilsService.showToast("success",null,this.i18nService.t("organizationUpdated"))})),this.submitCollectionManagement=()=>j(this,void 0,void 0,(function*(){if(this.selfHosted)return;const i=new U;i.limitCreateDeleteOwnerAdmin=this.collectionManagementFormGroup.value.limitCollectionCreationDeletion,i.allowAdminAccessToAllCollectionItems=this.collectionManagementFormGroup.value.allowAdminAccessToAllCollectionItems,yield this.organizationApiService.updateCollectionManagement(this.organizationId,i),this.platformUtilsService.showToast("success",null,this.i18nService.t("collectionManagementUpdated"))}))}ngOnInit(){return j(this,void 0,void 0,(function*(){this.selfHosted=this.platformUtilsService.isSelfHost(),this.route.params.pipe((0,d.w)((i=>this.organizationService.get$(i.organizationId))),(0,d.w)((i=>(0,m.a)([(0,f.of)(i),(0,h.D)(this.organizationApiService.get(i.id)),(0,h.D)(this.organizationApiService.getKeys(i.id))]))),(0,b.R)(this.destroy$)).subscribe((([i,n,t])=>{this.organizationId=i.id,this.canEditSubscription=i.canEditSubscription,this.canUseApi=i.useApi,this.selfHosted||(this.formGroup.get("orgName").enable(),this.collectionManagementFormGroup.get("limitCollectionCreationDeletion").enable(),this.collectionManagementFormGroup.get("allowAdminAccessToAllCollectionItems").enable()),this.selfHosted&&!this.canEditSubscription||(this.formGroup.get("billingEmail").enable(),this.formGroup.get("businessName").enable()),this.org=n,this.publicKeyBuffer=x.c.fromB64ToArray(null==t?void 0:t.publicKey),this.formGroup.patchValue({orgName:this.org.name,billingEmail:this.org.billingEmail,businessName:this.org.businessName}),this.collectionManagementFormGroup.patchValue({limitCollectionCreationDeletion:this.org.limitCollectionCreationDeletion,allowAdminAccessToAllCollectionItems:this.org.allowAdminAccessToAllCollectionItems}),this.loading=!1}))}))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}deleteOrganization(){return j(this,void 0,void 0,(function*(){const i=(0,I.j1)(this.dialogService,{data:{organizationId:this.organizationId,requestType:"RegularDelete"}});(yield(0,_.n)(i.closed))===I._P.Deleted&&this.router.navigate(["/"])}))}purgeVault(){return j(this,void 0,void 0,(function*(){yield this.modalService.openViewRef(w.$,this.purgeModalRef,(i=>{i.organizationId=this.organizationId}))}))}viewApiKey(){return j(this,void 0,void 0,(function*(){yield this.modalService.openViewRef(T.B,this.apiKeyModalRef,(i=>{i.keyType="organization",i.entityId=this.organizationId,i.postKey=this.organizationApiService.getOrCreateApiKey.bind(this.organizationApiService),i.scope="api.organization",i.grantType="client_credentials",i.apiKeyTitle="apiKey",i.apiKeyWarning="apiKeyWarning",i.apiKeyDescription="apiKeyDesc"}))}))}rotateApiKey(){return j(this,void 0,void 0,(function*(){yield this.modalService.openViewRef(T.B,this.rotateApiKeyModalRef,(i=>{i.keyType="organization",i.isRotation=!0,i.entityId=this.organizationId,i.postKey=this.organizationApiService.rotateApiKey.bind(this.organizationApiService),i.scope="api.organization",i.grantType="client_credentials",i.apiKeyTitle="apiKey",i.apiKeyWarning="apiKeyWarning",i.apiKeyDescription="apiKeyRotateDesc"}))}))}}ai.ɵfac=function(i){return new(i||ai)(s.Y36(Z.Z),s.Y36(q.D),s.Y36(r.gz),s.Y36(z.P),s.Y36(O.$),s.Y36(r.F0),s.Y36(l.Mn),s.Y36(C.M),s.Y36(L.x),s.Y36(p.qu),s.Y36(S.i))},ai.ɵcmp=s.Xpm({type:ai,selectors:[["app-org-account"]],viewQuery:function(i,n){if(1&i&&(s.Gf(R,7,s.s_b),s.Gf(P,7,s.s_b),s.Gf(W,7,s.s_b)),2&i){let i;s.iGM(i=s.CRH())&&(n.purgeModalRef=i.first),s.iGM(i=s.CRH())&&(n.apiKeyModalRef=i.first),s.iGM(i=s.CRH())&&(n.rotateApiKeyModalRef=i.first)}},decls:41,vars:21,consts:[["bitTypography","h1",1,"tw-pb-2.5"],[4,"ngIf"],[3,"bitSubmit","formGroup",4,"ngIf"],["bitTypography","h1",1,"tw-mt-16","tw-pb-2.5","!tw-text-danger"],[1,"tw-rounded","tw-border","tw-border-solid","tw-border-danger-500","tw-bg-background","tw-p-5"],["type","button","bitButton","","buttonType","danger",3,"click"],["purgeOrganizationTemplate",""],["apiKeyTemplate",""],["rotateApiKeyTemplate",""],["aria-hidden","true",1,"bwi","bwi-spinner","bwi-spin","text-muted",3,"title"],[1,"tw-sr-only"],[3,"bitSubmit","formGroup"],[1,"tw-grid","tw-grid-cols-2","tw-gap-5"],["bitInput","","id","orgName","type","text","formControlName","orgName"],["bitInput","","id","billingEmail","formControlName","billingEmail","type","email"],["bitInput","","id","businessName","formControlName","businessName","type","text"],["size","large",3,"text","id"],[3,"fingerprintMaterial","publicKeyBuffer","fingerprintLabel"],["type","submit","bitButton","","bitFormButton","","buttonType","primary"],["bitTypography","h1",1,"tw-mt-16","tw-pb-2.5"],["href","https://docs.bitwarden.com","target","_blank","rel","noopener"],["type","button","bitButton","","buttonType","secondary",3,"click"],["type","checkbox","bitCheckbox","","formControlName","limitCollectionCreationDeletion"],["type","submit","bitButton","","bitFormButton","","buttonType","primary","id","collectionManagementSubmitButton",4,"ngIf"],["type","checkbox","bitCheckbox","","formControlName","allowAdminAccessToAllCollectionItems"],["type","submit","bitButton","","bitFormButton","","buttonType","primary","id","collectionManagementSubmitButton"]],template:function(i,n){1&i&&(s.TgZ(0,"h1",0),s._uU(1),s.ALo(2,"i18n"),s.qZA(),s._uU(3,"\n"),s.YNc(4,H,9,6,"div",1),s._uU(5,"\n"),s.YNc(6,$,48,21,"form",2),s._uU(7,"\n"),s.YNc(8,V,22,15,"ng-container",1),s._uU(9,"\n"),s.YNc(10,ni,24,15,"form",2),s.ALo(11,"async"),s._uU(12,"\n"),s.TgZ(13,"h1",3),s._uU(14),s.ALo(15,"i18n"),s.qZA(),s._uU(16,"\n"),s.TgZ(17,"div",4),s._uU(18,"\n  "),s.TgZ(19,"p"),s._uU(20),s.ALo(21,"i18n"),s.qZA(),s._uU(22,"\n  "),s.TgZ(23,"button",5),s.NdJ("click",(function(){return n.deleteOrganization()})),s._uU(24),s.ALo(25,"i18n"),s.qZA(),s._uU(26,"\n  "),s.TgZ(27,"button",5),s.NdJ("click",(function(){return n.purgeVault()})),s._uU(28),s.ALo(29,"i18n"),s.qZA(),s._uU(30,"\n"),s.qZA(),s._uU(31,"\n"),s.YNc(32,ti,0,0,"ng-template",null,6,s.W1O),s._uU(34,"\n"),s.YNc(35,ei,0,0,"ng-template",null,7,s.W1O),s._uU(37,"\n"),s.YNc(38,oi,0,0,"ng-template",null,8,s.W1O),s._uU(40,"\n")),2&i&&(s.xp6(1),s.Oqu(s.lcZ(2,9,"organizationInfo")),s.xp6(3),s.Q6J("ngIf",n.loading),s.xp6(2),s.Q6J("ngIf",n.org&&!n.loading),s.xp6(2),s.Q6J("ngIf",n.canUseApi),s.xp6(2),s.Q6J("ngIf",n.org&&!n.loading&&s.lcZ(11,11,n.flexibleCollectionsEnabled$)),s.xp6(4),s.Oqu(s.lcZ(15,13,"dangerZone")),s.xp6(6),s.Oqu(s.lcZ(21,15,"dangerZoneDesc")),s.xp6(4),s.hij("\n    ",s.lcZ(25,17,"deleteOrganization"),"\n  "),s.xp6(4),s.hij("\n    ",s.lcZ(29,19,"purgeVault"),"\n  "))},dependencies:[N.O5,p._Y,p.Fj,p.Wl,p.JJ,p.JL,p.sg,p.u,K.b,Y.u,M.A,k.r,D.b,G.d,J.G,B.A,E.u,Q.t,o.V,N.Ov,F.C],encapsulation:2});var ri=t(82664),li=t(59157),ui=t(80060),ci=t(48103),si=t(41648),pi=t(62941),gi=t(55602),di=t(34961),mi=t(83924),fi=t(58172),hi=t(24083),bi=t(55039),_i=function(i,n,t,e){return new(t||(t=Promise))((function(o,a){function r(i){try{u(e.next(i))}catch(n){a(n)}}function l(i){try{u(e.throw(i))}catch(n){a(n)}}function u(i){var n;i.done?o(i.value):(n=i.value,n instanceof t?n:new t((function(i){i(n)}))).then(r,l)}u((e=e.apply(i,n||[])).next())}))};function Zi(i,n){1&i&&(s.TgZ(0,"h1"),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.Oqu(s.lcZ(2,1,"twoStepLogin")))}function Ui(i,n){1&i&&(s.TgZ(0,"h1"),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.Oqu(s.lcZ(2,1,"twoStepLoginEnforcement")))}function Ai(i,n){1&i&&(s.TgZ(0,"p"),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.Oqu(s.lcZ(2,1,"twoStepLoginDesc")))}function yi(i,n){1&i&&(s.ynx(0),s._uU(1),s.ALo(2,"i18n"),s.TgZ(3,"a",13),s._uU(4),s.ALo(5,"i18n"),s.qZA(),s._uU(6,"\n      "),s._UZ(7,"br"),s._uU(8),s.ALo(9,"i18n"),s._UZ(10,"br"),s._uU(11,"\n      "),s._UZ(12,"br"),s._uU(13,"\n      "),s.TgZ(14,"p"),s._uU(15),s.ALo(16,"i18n"),s.qZA(),s._uU(17,"\n    "),s.BQk()),2&i&&(s.xp6(1),s.hij("\n      ",s.lcZ(2,4,"twoStepLoginEnterpriseDescStart"),"\n      "),s.xp6(3),s.hij("",s.lcZ(5,6,"twoStepLoginPolicy"),"."),s.xp6(4),s.hij("\n      ",s.lcZ(9,8,"twoStepLoginOrganizationDuoDesc"),"\n      "),s.xp6(7),s.Oqu(s.lcZ(16,10,"twoStepLoginOrganizationSsoDesc")))}function vi(i,n){1&i&&(s._uU(0),s.ALo(1,"i18n"),s._UZ(2,"br"),s._uU(3),s.ALo(4,"i18n")),2&i&&(s.hij("\n      ",s.lcZ(1,2,"twoStepLoginTeamsDesc"),"\n      "),s.xp6(3),s.hij("\n      ",s.lcZ(4,4,"twoStepLoginOrganizationDuoDesc"),"\n    "))}function xi(i,n){if(1&i&&(s.ynx(0),s._uU(1,"\n  "),s.TgZ(2,"p"),s._uU(3,"\n    "),s.YNc(4,yi,18,12,"ng-container",11),s._uU(5,"\n    "),s.YNc(6,vi,5,6,"ng-template",null,12,s.W1O),s._uU(8,"\n  "),s.qZA(),s._uU(9,"\n"),s.BQk()),2&i){const i=s.MAs(7),n=s.oxw();s.xp6(4),s.Q6J("ngIf",n.isEnterpriseOrg)("ngIfElse",i)}}function Ti(i,n){if(1&i){const i=s.EpF();s.TgZ(0,"bit-callout",14),s._uU(1,"\n  "),s.TgZ(2,"p"),s._uU(3),s.ALo(4,"i18n"),s.qZA(),s._uU(5,"\n  "),s.TgZ(6,"button",15),s.NdJ("click",(function(){s.CHM(i);const n=s.oxw();return s.KtG(n.recoveryCode())})),s._uU(7),s.ALo(8,"i18n"),s.qZA(),s._uU(9,"\n"),s.qZA()}2&i&&(s.xp6(3),s.Oqu(s.lcZ(4,2,"twoStepLoginRecoveryWarning")),s.xp6(4),s.hij("\n    ",s.lcZ(8,4,"viewRecoveryCode"),"\n  "))}function wi(i,n){1&i&&(s.TgZ(0,"small"),s._uU(1,"\n    "),s._UZ(2,"i",16),s.ALo(3,"i18n"),s._uU(4,"\n    "),s.TgZ(5,"span",17),s._uU(6),s.ALo(7,"i18n"),s.qZA(),s._uU(8,"\n  "),s.qZA()),2&i&&(s.xp6(2),s.s9C("title",s.lcZ(3,2,"loading")),s.xp6(4),s.Oqu(s.lcZ(7,4,"loading")))}function Ii(i,n){1&i&&(s.TgZ(0,"bit-callout",14),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.hij("\n  ",s.lcZ(2,1,"twoStepLoginPolicyUserWarning"),"\n"))}function qi(i,n){1&i&&(s.ynx(0),s._uU(1,"\n          "),s._UZ(2,"i",25),s.ALo(3,"i18n"),s._uU(4,"\n          "),s.TgZ(5,"span",17),s._uU(6),s.ALo(7,"i18n"),s.qZA(),s._uU(8,"\n        "),s.BQk()),2&i&&(s.xp6(2),s.s9C("title",s.lcZ(3,2,"enabled")),s.xp6(4),s.Oqu(s.lcZ(7,4,"enabled")))}function zi(i,n){1&i&&s._UZ(0,"app-premium-badge")}function Oi(i,n){if(1&i){const i=s.EpF();s.TgZ(0,"li",18),s._uU(1,"\n    "),s.TgZ(2,"div",19),s._uU(3,"\n      "),s._UZ(4,"img",20),s._uU(5,"\n    "),s.qZA(),s._uU(6,"\n    "),s.TgZ(7,"div",21),s._uU(8,"\n      "),s.TgZ(9,"h3",22),s._uU(10),s.YNc(11,qi,9,6,"ng-container",1),s._uU(12,"\n        "),s.YNc(13,zi,1,0,"app-premium-badge",1),s._uU(14,"\n      "),s.qZA(),s._uU(15),s.qZA(),s._uU(16,"\n    "),s.TgZ(17,"div",23),s._uU(18,"\n      "),s.TgZ(19,"button",24),s.NdJ("click",(function(){const n=s.CHM(i).$implicit,t=s.oxw();return s.KtG(t.manage(n.type))})),s._uU(20),s.ALo(21,"i18n"),s.qZA(),s._uU(22,"\n    "),s.qZA(),s._uU(23,"\n  "),s.qZA()}if(2&i){const i=n.$implicit,t=s.oxw();s.xp6(4),s.Tol("mfaType"+i.type),s.Q6J("alt",i.name+" logo"),s.xp6(6),s.hij("\n        ",i.name,"\n        "),s.xp6(1),s.Q6J("ngIf",i.enabled),s.xp6(2),s.Q6J("ngIf",i.premium),s.xp6(2),s.hij("\n      ",i.description,"\n    "),s.xp6(4),s.Q6J("disabled",!t.canAccessPremium&&i.premium),s.xp6(1),s.hij("\n        ",s.lcZ(21,9,"manage"),"\n      ")}}function Ci(i,n){}function Li(i,n){}function Si(i,n){}function Ni(i,n){}function Ki(i,n){}function Yi(i,n){}const Mi=function(i){return{"mt-5":i}};class ki extends pi.x{constructor(i,n,t,e,o,a,r){super(i,n,t,e,a),this.route=o,this.organizationService=r,this.tabbedHeader=!1}ngOnInit(){const i=Object.create(null,{ngOnInit:{get:()=>super.ngOnInit}});return _i(this,void 0,void 0,(function*(){this.route.params.pipe((0,ui.b)((i=>{this.organizationId=i.organizationId,this.organization=this.organizationService.get(this.organizationId)})),(0,li.b)((()=>_i(this,void 0,void 0,(function*(){return yield i.ngOnInit.call(this)})))),(0,b.R)(this.destroy$)).subscribe()}))}manage(i){return _i(this,void 0,void 0,(function*(){switch(i){case ci.L.OrganizationDuo:{const i=yield this.openModal(this.duoModalRef,si.C);i.type=ci.L.OrganizationDuo,i.organizationId=this.organizationId,i.onUpdated.pipe((0,b.R)(this.destroy$)).subscribe((i=>{this.updateStatus(i,ci.L.OrganizationDuo)}));break}}}))}getTwoFactorProviders(){return this.apiService.getTwoFactorOrganizationProviders(this.organizationId)}filterProvider(i){return i!==ci.L.OrganizationDuo}}ki.ɵfac=function(i){return new(i||ki)(s.Y36(gi.s),s.Y36(Z.Z),s.Y36(di.o),s.Y36(mi.d),s.Y36(r.gz),s.Y36(fi.b),s.Y36(l.Mn))},ki.ɵcmp=s.Xpm({type:ki,selectors:[["app-two-factor-setup"]],features:[s.qOj],decls:44,vars:15,consts:[[3,"ngClass"],[4,"ngIf"],["type","warning",4,"ngIf"],[1,"list-group","list-group-2fa"],["class","list-group-item d-flex align-items-center",4,"ngFor","ngForOf"],["authenticatorTemplate",""],["recoveryTemplate",""],["duoTemplate",""],["emailTemplate",""],["yubikeyTemplate",""],["webAuthnTemplate",""],[4,"ngIf","ngIfElse"],["teamsDescription",""],["routerLink","../policies"],["type","warning"],["type","button","bitButton","","buttonType","secondary",3,"click"],["aria-hidden","true",1,"bwi","bwi-spinner","bwi-spin","bwi-fw","text-muted",3,"title"],[1,"sr-only"],[1,"list-group-item","d-flex","align-items-center"],[1,"logo-2fa","d-flex","justify-content-center"],[3,"alt"],[1,"mx-4"],[1,"mb-0"],[1,"ml-auto"],["type","button","bitButton","","buttonType","secondary",3,"disabled","click"],["aria-hidden","true",1,"bwi","bwi-check","text-success","bwi-fw",3,"title"]],template:function(i,n){1&i&&(s.TgZ(0,"div",0),s._uU(1,"\n  "),s.YNc(2,Zi,3,3,"h1",1),s._uU(3,"\n  "),s.YNc(4,Ui,3,3,"h1",1),s._uU(5,"\n"),s.qZA(),s._uU(6,"\n"),s.YNc(7,Ai,3,3,"p",1),s._uU(8,"\n"),s.YNc(9,xi,10,2,"ng-container",1),s._uU(10,"\n"),s.YNc(11,Ti,10,6,"bit-callout",2),s._uU(12,"\n"),s.TgZ(13,"h2",0),s._uU(14),s.ALo(15,"i18n"),s.YNc(16,wi,9,6,"small",1),s._uU(17,"\n"),s.qZA(),s._uU(18,"\n"),s.YNc(19,Ii,3,3,"bit-callout",2),s._uU(20,"\n"),s.TgZ(21,"ul",3),s._uU(22,"\n  "),s.YNc(23,Oi,24,11,"li",4),s._uU(24,"\n"),s.qZA(),s._uU(25,"\n\n"),s.YNc(26,Ci,0,0,"ng-template",null,5,s.W1O),s._uU(28,"\n"),s.YNc(29,Li,0,0,"ng-template",null,6,s.W1O),s._uU(31,"\n"),s.YNc(32,Si,0,0,"ng-template",null,7,s.W1O),s._uU(34,"\n"),s.YNc(35,Ni,0,0,"ng-template",null,8,s.W1O),s._uU(37,"\n"),s.YNc(38,Ki,0,0,"ng-template",null,9,s.W1O),s._uU(40,"\n"),s.YNc(41,Yi,0,0,"ng-template",null,10,s.W1O),s._uU(43,"\n")),2&i&&(s.Q6J("ngClass",n.tabbedHeader?"tabbed-header":"page-header"),s.xp6(2),s.Q6J("ngIf",!n.organizationId||!n.isEnterpriseOrg),s.xp6(2),s.Q6J("ngIf",n.organizationId&&n.isEnterpriseOrg),s.xp6(3),s.Q6J("ngIf",!n.organizationId),s.xp6(2),s.Q6J("ngIf",n.organizationId),s.xp6(2),s.Q6J("ngIf",!n.organizationId),s.xp6(2),s.Q6J("ngClass",s.VKq(13,Mi,!n.organizationId)),s.xp6(1),s.hij("\n  ",s.lcZ(15,11,"providers"),"\n  "),s.xp6(2),s.Q6J("ngIf",n.loading),s.xp6(3),s.Q6J("ngIf",n.showPolicyWarning),s.xp6(4),s.Q6J("ngForOf",n.providers))},dependencies:[N.mk,N.sg,N.O5,r.rH,k.r,hi.O,bi.R,F.C],encapsulation:2});const Di=[{path:"",component:ri.f,canActivate:[u.G],data:{organizationPermissions:l.DL},children:[{path:"",pathMatch:"full",canActivate:[c.S],data:{autoRedirectCallback:function(i){if(i.isOwner)return"account";if(i.canManagePolicies)return"policies";if(i.canAccessImportExport)return["tools","import"];if(i.canManageSso)return"sso";if(i.canManageScim)return"scim";if(i.canManageDeviceApprovals)return"device-approvals";return}},children:[]},{path:"account",component:ai,data:{titleId:"organizationInfo"}},{path:"two-factor",component:ki,data:{titleId:"twoStepLogin"}},{path:"policies",component:a.K,canActivate:[u.G],data:{organizationPermissions:i=>i.canManagePolicies,titleId:"policies"}},{path:"tools",children:[{path:"import",loadComponent:()=>Promise.all([t.e(395),t.e(677)]).then(t.bind(t,59211)).then((i=>i.ImportWebComponent)),canActivate:[u.G],data:{titleId:"importData",organizationPermissions:i=>i.canAccessImportExport}},{path:"export",loadChildren:()=>Promise.all([t.e(111),t.e(74)]).then(t.bind(t,51074)).then((i=>i.OrganizationVaultExportModule))}]}]}];class Gi{}Gi.ɵfac=function(i){return new(i||Gi)},Gi.ɵmod=s.oAB({type:Gi}),Gi.ɵinj=s.cJS({imports:[r.Bz.forChild(Di),r.Bz]});class Ji{}Ji.ɵfac=function(i){return new(i||Ji)},Ji.ɵmod=s.oAB({type:Ji}),Ji.ɵinj=s.cJS({imports:[e.m,e.f,a.I2,Gi,o.V]})}}]);
//# sourceMappingURL=554.e5ae84763152be0e68e2.js.map