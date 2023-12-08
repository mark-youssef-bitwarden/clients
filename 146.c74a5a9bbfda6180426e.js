"use strict";(self.webpackChunk_bitwarden_web_vault=self.webpackChunk_bitwarden_web_vault||[]).push([[146],{7146:(e,t,i)=>{i.r(t),i.d(t,{MigrateFromLegacyEncryptionComponent:()=>Y});var r=i(98645),n=i(71146),s=i(76736),c=i(99042),o=i(11581),a=i(81399),u=i(41412),y=i(79971),d=i(86277),p=i(24852),l=i(55602),h=i(76528),v=i(85540),f=i(4871),m=i(92236),S=i(23031),w=i(92649),g=i(58172),b=function(e,t,i,r){return new(i||(i=Promise))((function(n,s){function c(e){try{a(r.next(e))}catch(t){s(t)}}function o(e){try{a(r.throw(e))}catch(t){s(t)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(c,o)}a((r=r.apply(e,t||[])).next())}))};class U{constructor(e,t,i,r,n,s,c,o,a,u){this.emergencyAccessService=e,this.accountRecoveryService=t,this.apiService=i,this.cryptoService=r,this.encryptService=n,this.syncService=s,this.cipherService=c,this.folderService=o,this.sendService=a,this.stateService=u}createNewUserKey(e){return b(this,void 0,void 0,(function*(){const t=yield this.cryptoService.makeMasterKey(e,yield this.stateService.getEmail(),yield this.stateService.getKdfType(),yield this.stateService.getKdfConfig());if(!t)throw new Error("Invalid master password");if(!(yield this.cryptoService.isLegacyUser(t)))throw new Error("Invalid master password or user may not be legacy");return yield this.cryptoService.setMasterKey(t),yield this.cryptoService.makeUserKey(t)}))}updateKeysAndEncryptedData(e,t,i){return b(this,void 0,void 0,(function*(){const r=new o.n;return r.key=i.encryptedString,r.masterPasswordHash=yield this.cryptoService.hashMasterKey(e,yield this.cryptoService.getOrDeriveMasterKey(e)),yield this.syncService.fullSync(!0),r.privateKey=yield this.encryptPrivateKey(t),r.folders=yield this.encryptFolders(t),r.ciphers=yield this.encryptCiphers(t),r.sends=yield this.encryptSends(t),this.apiService.postAccountKey(r)}))}updateEmergencyAccesses(e){return this.emergencyAccessService.rotate(e)}updateAllAdminRecoveryKeys(e,t){return b(this,void 0,void 0,(function*(){const i=yield this.cryptoService.hashMasterKey(e,yield this.cryptoService.getOrDeriveMasterKey(e));yield this.accountRecoveryService.rotate(t,i)}))}encryptPrivateKey(e){return b(this,void 0,void 0,(function*(){const t=yield this.cryptoService.getPrivateKey();if(t)return(yield this.encryptService.encrypt(t,e)).encryptedString}))}encryptFolders(e){return b(this,void 0,void 0,(function*(){const t=yield(0,c.z)(this.folderService.folderViews$);if(t)return yield Promise.all(t.map((t=>b(this,void 0,void 0,(function*(){const i=yield this.folderService.encrypt(t,e);return new y.C(i)})))))}))}encryptCiphers(e){return b(this,void 0,void 0,(function*(){const t=yield this.cipherService.getAllDecrypted();if(t)return yield Promise.all(t.map((t=>b(this,void 0,void 0,(function*(){const i=yield this.cipherService.encrypt(t,e);return new u.K(i)})))))}))}encryptSends(e){return b(this,void 0,void 0,(function*(){const t=yield(0,c.z)(this.sendService.sends$);if(t)return yield Promise.all(t.map((t=>b(this,void 0,void 0,(function*(){var i;const r=yield this.encryptService.decryptToBytes(t.key,null);return t.key=null!==(i=yield this.encryptService.encrypt(r,e))&&void 0!==i?i:t.key,new a.N(t)})))))}))}}U.ɵfac=function(e){return new(e||U)(p.LFG(s.d),p.LFG(d.n),p.LFG(l.s),p.LFG(h.$),p.LFG(v.U),p.LFG(f._),p.LFG(m.u),p.LFG(S.s),p.LFG(w.N),p.LFG(g.b))},U.ɵprov=p.Yz7({token:U,factory:U.ɵfac});var _=i(78627),A=i(99721),Z=i(34961),K=i(66459),k=i(62374),L=i(46246),T=i(36338),G=i(81974),x=i(24083),q=i(24637),P=i(11512),F=i(54666),E=i(1e4),C=i(36179),D=i(21656),I=i(28315),M=i(82933),O=function(e,t,i,r){return new(i||(i=Promise))((function(n,s){function c(e){try{a(r.next(e))}catch(t){s(t)}}function o(e){try{a(r.throw(e))}catch(t){s(t)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(c,o)}a((r=r.apply(e,t||[])).next())}))};class Y{constructor(e,t,i,n,s,c){this.i18nService=e,this.platformUtilsService=t,this.migrationService=i,this.cryptoService=n,this.messagingService=s,this.logService=c,this.formGroup=new r.cw({masterPassword:new r.NI("",[r.kI.required])}),this.submit=()=>O(this,void 0,void 0,(function*(){if(this.formGroup.markAsTouched(),this.formGroup.invalid)return;if(yield this.cryptoService.hasUserKey())throw this.messagingService.send("logout"),new Error("User key already exists, cannot migrate legacy encryption.");const e=this.formGroup.value.masterPassword;try{const[t,i]=yield this.migrationService.createNewUserKey(e);yield this.migrationService.updateAllAdminRecoveryKeys(e,t),yield this.migrationService.updateEmergencyAccesses(t),yield this.migrationService.updateKeysAndEncryptedData(e,t,i),this.platformUtilsService.showToast("success",this.i18nService.t("keyUpdated"),this.i18nService.t("logBackInOthersToo"),{timeout:15e3}),this.messagingService.send("logout")}catch(t){throw this.logService.error(t),t}}))}}Y.ɵfac=function(e){return new(e||Y)(p.Y36(_.D),p.Y36(A.P),p.Y36(U),p.Y36(h.$),p.Y36(Z.o),p.Y36(K.$))},Y.ɵcmp=p.Xpm({type:Y,selectors:[["ng-component"]],standalone:!0,features:[p._Bn([U]),p.jDz],decls:43,vars:20,consts:[[3,"formGroup","bitSubmit"],[1,"tw-mt-12","tw-flex","tw-justify-center"],[1,"tw-max-w-xl"],["bitTypography","h1",1,"tw-mb-4","tw-text-center"],[1,"tw-block","tw-rounded","tw-border","tw-border-solid","tw-border-secondary-300","tw-bg-background","tw-p-8"],["href","https://bitwarden.com/help/account-encryption-key/#rotate-your-encryption-key","target","_blank","rel","noopener"],["type","warning"],["id","masterPassword","bitInput","","type","password","formControlName","masterPassword","appAutofocus",""],["type","button","bitIconButton","","bitSuffix","","bitPasswordInputToggle",""],["type","submit","bitButton","","bitFormButton","","buttonType","primary","block",""]],template:function(e,t){1&e&&(p.TgZ(0,"form",0),p._uU(1,"\n  "),p.TgZ(2,"div",1),p._uU(3,"\n    "),p.TgZ(4,"div",2),p._uU(5,"\n      "),p.TgZ(6,"h1",3),p._uU(7),p.ALo(8,"i18n"),p.qZA(),p._uU(9,"\n      "),p.TgZ(10,"div",4),p._uU(11,"\n        "),p.TgZ(12,"p"),p._uU(13),p.ALo(14,"i18n"),p.TgZ(15,"a",5),p._uU(16),p.ALo(17,"i18n"),p.qZA(),p._uU(18,"\n        "),p.qZA(),p._uU(19,"\n        "),p.TgZ(20,"bit-callout",6),p._uU(21),p.ALo(22,"i18n"),p.qZA(),p._uU(23,"\n\n        "),p.TgZ(24,"bit-form-field"),p._uU(25,"\n          "),p.TgZ(26,"bit-label"),p._uU(27),p.ALo(28,"i18n"),p.qZA(),p._uU(29,"\n          "),p._UZ(30,"input",7),p._uU(31,"\n          "),p._UZ(32,"button",8),p._uU(33,"\n        "),p.qZA(),p._uU(34,"\n        "),p.TgZ(35,"button",9),p._uU(36),p.ALo(37,"i18n"),p.qZA(),p._uU(38,"\n      "),p.qZA(),p._uU(39,"\n    "),p.qZA(),p._uU(40,"\n  "),p.qZA(),p._uU(41,"\n"),p.qZA(),p._uU(42,"\n")),2&e&&(p.Q6J("formGroup",t.formGroup)("bitSubmit",t.submit),p.xp6(7),p.Oqu(p.lcZ(8,8,"updateEncryptionKey")),p.xp6(6),p.hij("\n          ",p.lcZ(14,10,"updateEncryptionSchemeDesc"),"\n          "),p.xp6(3),p.Oqu(p.lcZ(17,12,"learnMore")),p.xp6(5),p.Oqu(p.lcZ(22,14,"updateEncryptionKeyWarning")),p.xp6(6),p.Oqu(p.lcZ(28,16,"masterPass")),p.xp6(9),p.hij("\n          ",p.lcZ(37,18,"updateEncryptionKey"),"\n        "))},dependencies:[n.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,k.U,L.b,T.u,G.r,x.O,q.d,P.G,F.w,E.e,C.u,D.Q,I.t,M.C,s.x],encapsulation:2})}}]);
//# sourceMappingURL=146.c74a5a9bbfda6180426e.js.map