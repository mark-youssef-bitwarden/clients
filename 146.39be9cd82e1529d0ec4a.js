"use strict";(self.webpackChunk_bitwarden_web_vault=self.webpackChunk_bitwarden_web_vault||[]).push([[146],{7146:(e,t,i)=>{i.r(t),i.d(t,{MigrateFromLegacyEncryptionComponent:()=>R});var r=i(98645),n=i(71146),s=i(99042),o=i(58691),c=i(82558),a=i(32275),y=i(50667),d=i(11581),u=i(27646),p=i(81399),l=i(41412),h=i(79971),v=i(24852),f=i(97360),m=i(47244),g=i(55602),S=i(76528),w=i(85540),b=i(4871),U=i(92236),A=i(23031),_=i(92649),K=i(58172),Z=function(e,t,i,r){return new(i||(i=Promise))((function(n,s){function o(e){try{a(r.next(e))}catch(t){s(t)}}function c(e){try{a(r.throw(e))}catch(t){s(t)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,c)}a((r=r.apply(e,t||[])).next())}))};class k{constructor(e,t,i,r,n,s,o,c,a,y,d){this.organizationService=e,this.organizationApiService=t,this.organizationUserService=i,this.apiService=r,this.cryptoService=n,this.encryptService=s,this.syncService=o,this.cipherService=c,this.folderService=a,this.sendService=y,this.stateService=d}createNewUserKey(e){return Z(this,void 0,void 0,(function*(){const t=yield this.cryptoService.makeMasterKey(e,yield this.stateService.getEmail(),yield this.stateService.getKdfType(),yield this.stateService.getKdfConfig());if(!t)throw new Error("Invalid master password");if(!(yield this.cryptoService.isLegacyUser(t)))throw new Error("Invalid master password or user may not be legacy");return yield this.cryptoService.setMasterKey(t),yield this.cryptoService.makeUserKey(t)}))}updateKeysAndEncryptedData(e,t,i){return Z(this,void 0,void 0,(function*(){const r=new d.n;return r.key=i.encryptedString,r.masterPasswordHash=yield this.cryptoService.hashMasterKey(e,yield this.cryptoService.getOrDeriveMasterKey(e)),yield this.syncService.fullSync(!0),r.privateKey=yield this.encryptPrivateKey(t),r.folders=yield this.encryptFolders(t),r.ciphers=yield this.encryptCiphers(t),r.sends=yield this.encryptSends(t),this.apiService.postAccountKey(r)}))}updateEmergencyAccesses(e){return Z(this,void 0,void 0,(function*(){const t=yield this.apiService.getEmergencyAccessTrusted(),i=new Set([a.L.Confirmed,a.L.RecoveryInitiated,a.L.RecoveryApproved]),r=t.data.filter((e=>i.has(e.status)));for(const n of r){const t=yield this.apiService.getUserPublicKey(n.granteeId),i=u.c.fromB64ToArray(t.publicKey),r=yield this.cryptoService.rsaEncrypt(e.key,i),s=new y.u;s.type=n.type,s.waitTimeDays=n.waitTimeDays,s.keyEncrypted=r.encryptedString,yield this.apiService.putEmergencyAccess(n.id,s)}}))}updateAllAdminRecoveryKeys(e,t){return Z(this,void 0,void 0,(function*(){const i=yield this.organizationService.getAll();for(const r of i){if(!r.resetPasswordEnrolled)continue;const i=yield this.organizationApiService.getKeys(r.id),n=u.c.fromB64ToArray(null==i?void 0:i.publicKey),s=yield this.cryptoService.rsaEncrypt(t.key,n),o=new c.w;o.resetPasswordKey=s.encryptedString,o.masterPasswordHash=yield this.cryptoService.hashMasterKey(e,yield this.cryptoService.getOrDeriveMasterKey(e)),yield this.organizationUserService.putOrganizationUserResetPasswordEnrollment(r.id,r.userId,o)}}))}encryptPrivateKey(e){return Z(this,void 0,void 0,(function*(){const t=yield this.cryptoService.getPrivateKey();if(t)return(yield this.encryptService.encrypt(t,e)).encryptedString}))}encryptFolders(e){return Z(this,void 0,void 0,(function*(){const t=yield(0,s.z)(this.folderService.folderViews$);if(t)return yield Promise.all(t.map((t=>Z(this,void 0,void 0,(function*(){const i=yield this.folderService.encrypt(t,e);return new h.C(i)})))))}))}encryptCiphers(e){return Z(this,void 0,void 0,(function*(){const t=yield this.cipherService.getAllDecrypted();if(t)return yield Promise.all(t.map((t=>Z(this,void 0,void 0,(function*(){const i=yield this.cipherService.encrypt(t,e);return new l.K(i)})))))}))}encryptSends(e){return Z(this,void 0,void 0,(function*(){const t=yield(0,s.z)(this.sendService.sends$);if(t)return yield Promise.all(t.map((t=>Z(this,void 0,void 0,(function*(){var i;const r=yield this.encryptService.decryptToBytes(t.key,null);return t.key=null!==(i=yield this.encryptService.encrypt(r,e))&&void 0!==i?i:t.key,new p.N(t)})))))}))}}k.ɵfac=function(e){return new(e||k)(v.LFG(o.Mn),v.LFG(f.M),v.LFG(m.t),v.LFG(g.s),v.LFG(S.$),v.LFG(w.U),v.LFG(b._),v.LFG(U.u),v.LFG(A.s),v.LFG(_.N),v.LFG(K.b))},k.ɵprov=v.Yz7({token:k,factory:k.ɵfac});var T=i(78627),L=i(99721),P=i(34961),E=i(66459),G=i(62374),q=i(46246),x=i(36338),F=i(81974),z=i(24083),I=i(24637),C=i(11512),D=i(54666),M=i(1e4),O=i(36179),B=i(21656),Y=i(28315),N=i(82933),j=function(e,t,i,r){return new(i||(i=Promise))((function(n,s){function o(e){try{a(r.next(e))}catch(t){s(t)}}function c(e){try{a(r.throw(e))}catch(t){s(t)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,c)}a((r=r.apply(e,t||[])).next())}))};class R{constructor(e,t,i,n,s,o){this.i18nService=e,this.platformUtilsService=t,this.migrationService=i,this.cryptoService=n,this.messagingService=s,this.logService=o,this.formGroup=new r.cw({masterPassword:new r.NI("",[r.kI.required])}),this.submit=()=>j(this,void 0,void 0,(function*(){if(this.formGroup.markAsTouched(),this.formGroup.invalid)return;if(yield this.cryptoService.hasUserKey())throw this.messagingService.send("logout"),new Error("User key already exists, cannot migrate legacy encryption.");const e=this.formGroup.value.masterPassword;try{const[t,i]=yield this.migrationService.createNewUserKey(e);yield this.migrationService.updateAllAdminRecoveryKeys(e,t),yield this.migrationService.updateEmergencyAccesses(t),yield this.migrationService.updateKeysAndEncryptedData(e,t,i),this.platformUtilsService.showToast("success",this.i18nService.t("keyUpdated"),this.i18nService.t("logBackInOthersToo"),{timeout:15e3}),this.messagingService.send("logout")}catch(t){throw this.logService.error(t),t}}))}}R.ɵfac=function(e){return new(e||R)(v.Y36(T.D),v.Y36(L.P),v.Y36(k),v.Y36(S.$),v.Y36(P.o),v.Y36(E.$))},R.ɵcmp=v.Xpm({type:R,selectors:[["ng-component"]],standalone:!0,features:[v._Bn([k]),v.jDz],decls:43,vars:20,consts:[[3,"formGroup","bitSubmit"],[1,"tw-mt-12","tw-flex","tw-justify-center"],[1,"tw-max-w-xl"],["bitTypography","h1",1,"tw-mb-4","tw-text-center"],[1,"tw-block","tw-rounded","tw-border","tw-border-solid","tw-border-secondary-300","tw-bg-background","tw-p-8"],["href","https://bitwarden.com/help/account-encryption-key/#rotate-your-encryption-key","target","_blank","rel","noopener"],["type","warning"],["id","masterPassword","bitInput","","type","password","formControlName","masterPassword","appAutofocus",""],["type","button","bitIconButton","","bitSuffix","","bitPasswordInputToggle",""],["type","submit","bitButton","","bitFormButton","","buttonType","primary","block",""]],template:function(e,t){1&e&&(v.TgZ(0,"form",0),v._uU(1,"\n  "),v.TgZ(2,"div",1),v._uU(3,"\n    "),v.TgZ(4,"div",2),v._uU(5,"\n      "),v.TgZ(6,"h1",3),v._uU(7),v.ALo(8,"i18n"),v.qZA(),v._uU(9,"\n      "),v.TgZ(10,"div",4),v._uU(11,"\n        "),v.TgZ(12,"p"),v._uU(13),v.ALo(14,"i18n"),v.TgZ(15,"a",5),v._uU(16),v.ALo(17,"i18n"),v.qZA(),v._uU(18,"\n        "),v.qZA(),v._uU(19,"\n        "),v.TgZ(20,"bit-callout",6),v._uU(21),v.ALo(22,"i18n"),v.qZA(),v._uU(23,"\n\n        "),v.TgZ(24,"bit-form-field"),v._uU(25,"\n          "),v.TgZ(26,"bit-label"),v._uU(27),v.ALo(28,"i18n"),v.qZA(),v._uU(29,"\n          "),v._UZ(30,"input",7),v._uU(31,"\n          "),v._UZ(32,"button",8),v._uU(33,"\n        "),v.qZA(),v._uU(34,"\n        "),v.TgZ(35,"button",9),v._uU(36),v.ALo(37,"i18n"),v.qZA(),v._uU(38,"\n      "),v.qZA(),v._uU(39,"\n    "),v.qZA(),v._uU(40,"\n  "),v.qZA(),v._uU(41,"\n"),v.qZA(),v._uU(42,"\n")),2&e&&(v.Q6J("formGroup",t.formGroup)("bitSubmit",t.submit),v.xp6(7),v.Oqu(v.lcZ(8,8,"updateEncryptionKey")),v.xp6(6),v.hij("\n          ",v.lcZ(14,10,"updateEncryptionSchemeDesc"),"\n          "),v.xp6(3),v.Oqu(v.lcZ(17,12,"learnMore")),v.xp6(5),v.Oqu(v.lcZ(22,14,"updateEncryptionKeyWarning")),v.xp6(6),v.Oqu(v.lcZ(28,16,"masterPass")),v.xp6(9),v.hij("\n          ",v.lcZ(37,18,"updateEncryptionKey"),"\n        "))},dependencies:[n.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,G.U,q.b,x.u,F.r,z.O,I.d,C.G,D.w,M.e,O.u,B.Q,Y.t,N.C],encapsulation:2})}}]);
//# sourceMappingURL=146.39be9cd82e1529d0ec4a.js.map