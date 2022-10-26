"use strict";(self.webpackChunkdemo_work=self.webpackChunkdemo_work||[]).push([[142],{4859:(W,C,u)=>{u.d(C,{lW:()=>g,ot:()=>D});var o=u(4650),b=u(3238),R=u(2687);const y=["mat-button",""],h=["*"],F=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"],w=(0,b.pj)((0,b.Id)((0,b.Kr)(class{constructor(d){this._elementRef=d}})));let g=(()=>{class d extends w{constructor(s,c,_){super(s),this._focusMonitor=c,this._animationMode=_,this.isRoundButton=this._hasHostAttributes("mat-fab","mat-mini-fab"),this.isIconButton=this._hasHostAttributes("mat-icon-button");for(const p of F)this._hasHostAttributes(p)&&this._getHostElement().classList.add(p);s.nativeElement.classList.add("mat-button-base"),this.isRoundButton&&(this.color="accent")}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(s,c){s?this._focusMonitor.focusVia(this._getHostElement(),s,c):this._getHostElement().focus(c)}_getHostElement(){return this._elementRef.nativeElement}_isRippleDisabled(){return this.disableRipple||this.disabled}_hasHostAttributes(...s){return s.some(c=>this._getHostElement().hasAttribute(c))}}return d.\u0275fac=function(s){return new(s||d)(o.Y36(o.SBq),o.Y36(R.tE),o.Y36(o.QbO,8))},d.\u0275cmp=o.Xpm({type:d,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-icon-button",""],["button","mat-fab",""],["button","mat-mini-fab",""],["button","mat-stroked-button",""],["button","mat-flat-button",""]],viewQuery:function(s,c){if(1&s&&o.Gf(b.wG,5),2&s){let _;o.iGM(_=o.CRH())&&(c.ripple=_.first)}},hostAttrs:[1,"mat-focus-indicator"],hostVars:5,hostBindings:function(s,c){2&s&&(o.uIk("disabled",c.disabled||null),o.ekj("_mat-animation-noopable","NoopAnimations"===c._animationMode)("mat-button-disabled",c.disabled))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[o.qOj],attrs:y,ngContentSelectors:h,decls:4,vars:5,consts:[[1,"mat-button-wrapper"],["matRipple","",1,"mat-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-button-focus-overlay"]],template:function(s,c){1&s&&(o.F$t(),o.TgZ(0,"span",0),o.Hsn(1),o.qZA(),o._UZ(2,"span",1)(3,"span",2)),2&s&&(o.xp6(2),o.ekj("mat-button-ripple-round",c.isRoundButton||c.isIconButton),o.Q6J("matRippleDisabled",c._isRippleDisabled())("matRippleCentered",c.isIconButton)("matRippleTrigger",c._getHostElement()))},dependencies:[b.wG],styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}.mat-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.mat-flat-button::before,.mat-raised-button::before,.mat-fab::before,.mat-mini-fab::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-stroked-button::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1)}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}"],encapsulation:2,changeDetection:0}),d})(),D=(()=>{class d{}return d.\u0275fac=function(s){return new(s||d)},d.\u0275mod=o.oAB({type:d}),d.\u0275inj=o.cJS({imports:[b.si,b.BQ,b.BQ]}),d})()},7392:(W,C,u)=>{u.d(C,{Hw:()=>J,Ps:()=>X});var o=u(4650),b=u(3238),R=u(1281),y=u(6895),h=u(9646),O=u(2843),A=u(4128),F=u(727),w=u(8505),g=u(4004),T=u(262),D=u(8746),d=u(3099),f=u(5698),s=u(529),c=u(1481);const _=["*"];let p;function E(a){return function z(){if(void 0===p&&(p=null,typeof window<"u")){const a=window;void 0!==a.trustedTypes&&(p=a.trustedTypes.createPolicy("angular#components",{createHTML:m=>m}))}return p}()?.createHTML(a)||a}function L(a){return Error(`Unable to find icon with the name "${a}"`)}function B(a){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${a}".`)}function P(a){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${a}".`)}class v{constructor(m,t,e){this.url=m,this.svgText=t,this.options=e}}let k=(()=>{class a{constructor(t,e,n,i){this._httpClient=t,this._sanitizer=e,this._errorHandler=i,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,i){return this._addSvgIconConfig(t,e,new v(n,null,i))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,i){const r=this._sanitizer.sanitize(o.q3G.HTML,n);if(!r)throw P(n);const l=E(r);return this._addSvgIconConfig(t,e,new v("",l,i))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new v(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){const i=this._sanitizer.sanitize(o.q3G.HTML,e);if(!i)throw P(e);const r=E(i);return this._addSvgIconSetConfig(t,new v("",r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){const e=this._sanitizer.sanitize(o.q3G.RESOURCE_URL,t);if(!e)throw B(t);const n=this._cachedIconsByUrl.get(e);return n?(0,h.of)(M(n)):this._loadSvgIconFromConfig(new v(t,null)).pipe((0,w.b)(i=>this._cachedIconsByUrl.set(e,i)),(0,g.U)(i=>M(i)))}getNamedSvgIcon(t,e=""){const n=N(e,t);let i=this._svgIconConfigs.get(n);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(e,t),i)return this._svgIconConfigs.set(n,i),this._getSvgFromConfig(i);const r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):(0,O._)(L(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?(0,h.of)(M(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe((0,g.U)(e=>M(e)))}_getSvgFromIconSetConfigs(t,e){const n=this._extractIconWithNameFromAnySet(t,e);if(n)return(0,h.of)(n);const i=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe((0,T.K)(l=>{const x=`Loading icon set URL: ${this._sanitizer.sanitize(o.q3G.RESOURCE_URL,r.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(x)),(0,h.of)(null)})));return(0,A.D)(i).pipe((0,g.U)(()=>{const r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw L(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){const i=e[n];if(i.svgText&&i.svgText.toString().indexOf(t)>-1){const r=this._svgElementFromConfig(i),l=this._extractSvgIconFromSet(r,t,i.options);if(l)return l}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe((0,w.b)(e=>t.svgText=e),(0,g.U)(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?(0,h.of)(null):this._fetchIcon(t).pipe((0,w.b)(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){const i=t.querySelector(`[id="${e}"]`);if(!i)return null;const r=i.cloneNode(!0);if(r.removeAttribute("id"),"svg"===r.nodeName.toLowerCase())return this._setSvgAttributes(r,n);if("symbol"===r.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(r),n);const l=this._svgElementFromString(E("<svg></svg>"));return l.appendChild(r),this._setSvgAttributes(l,n)}_svgElementFromString(t){const e=this._document.createElement("DIV");e.innerHTML=t;const n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){const e=this._svgElementFromString(E("<svg></svg>")),n=t.attributes;for(let i=0;i<n.length;i++){const{name:r,value:l}=n[i];"id"!==r&&e.setAttribute(r,l)}for(let i=0;i<t.childNodes.length;i++)t.childNodes[i].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[i].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){const{url:e,options:n}=t,i=n?.withCredentials??!1;if(!this._httpClient)throw function H(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}();if(null==e)throw Error(`Cannot fetch icon from URL "${e}".`);const r=this._sanitizer.sanitize(o.q3G.RESOURCE_URL,e);if(!r)throw B(e);const l=this._inProgressUrlFetches.get(r);if(l)return l;const I=this._httpClient.get(r,{responseType:"text",withCredentials:i}).pipe((0,g.U)(x=>E(x)),(0,D.x)(()=>this._inProgressUrlFetches.delete(r)),(0,d.B)());return this._inProgressUrlFetches.set(r,I),I}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(N(t,e),n),this}_addSvgIconSetConfig(t,e){const n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){const e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){const i=this._resolvers[n](e,t);if(i)return K(i)?new v(i.url,null,i.options):new v(i,null)}}}return a.\u0275fac=function(t){return new(t||a)(o.LFG(s.eN,8),o.LFG(c.H7),o.LFG(y.K0,8),o.LFG(o.qLn))},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();function M(a){return a.cloneNode(!0)}function N(a,m){return a+":"+m}function K(a){return!(!a.url||!a.options)}const Y=(0,b.pj)(class{constructor(a){this._elementRef=a}}),$=new o.OlP("MAT_ICON_DEFAULT_OPTIONS"),V=new o.OlP("mat-icon-location",{providedIn:"root",factory:function G(){const a=(0,o.f3M)(y.K0),m=a?a.location:null;return{getPathname:()=>m?m.pathname+m.search:""}}}),U=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Z=U.map(a=>`[${a}]`).join(", "),Q=/^url\(['"]?#(.*?)['"]?\)$/;let J=(()=>{class a extends Y{constructor(t,e,n,i,r,l){super(t),this._iconRegistry=e,this._location=i,this._errorHandler=r,this._inline=!1,this._previousFontSetClass=[],this._currentIconFetch=F.w0.EMPTY,l&&(l.color&&(this.color=this.defaultColor=l.color),l.fontSet&&(this.fontSet=l.fontSet)),n||t.nativeElement.setAttribute("aria-hidden","true")}get inline(){return this._inline}set inline(t){this._inline=(0,R.Ig)(t)}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){const e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){const e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_splitIconName(t){if(!t)return["",""];const e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const t=this._elementsWithExternalReferences;if(t&&t.size){const e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();const e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){const t=this._elementRef.nativeElement;let e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){const n=t.childNodes[e];(1!==n.nodeType||"svg"===n.nodeName.toLowerCase())&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return"string"==typeof t?t.trim().split(" ")[0]:t}_prependPathToReferences(t){const e=this._elementsWithExternalReferences;e&&e.forEach((n,i)=>{n.forEach(r=>{i.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){const e=t.querySelectorAll(Z),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<e.length;i++)U.forEach(r=>{const l=e[i],I=l.getAttribute(r),x=I?I.match(Q):null;if(x){let S=n.get(l);S||(S=[],n.set(l,S)),S.push({name:r,value:x[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){const[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe((0,f.q)(1)).subscribe(i=>this._setSvgElement(i),i=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${e}:${n}! ${i.message}`))})}}}return a.\u0275fac=function(t){return new(t||a)(o.Y36(o.SBq),o.Y36(k),o.$8M("aria-hidden"),o.Y36(V),o.Y36(o.qLn),o.Y36($,8))},a.\u0275cmp=o.Xpm({type:a,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:8,hostBindings:function(t,e){2&t&&(o.uIk("data-mat-icon-type",e._usingFontIcon()?"font":"svg")("data-mat-icon-name",e._svgName||e.fontIcon)("data-mat-icon-namespace",e._svgNamespace||e.fontSet)("fontIcon",e._usingFontIcon()?e.fontIcon:null),o.ekj("mat-icon-inline",e.inline)("mat-icon-no-color","primary"!==e.color&&"accent"!==e.color&&"warn"!==e.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[o.qOj],ngContentSelectors:_,decls:1,vars:0,template:function(t,e){1&t&&(o.F$t(),o.Hsn(0))},styles:[".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0}),a})(),X=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[b.BQ,b.BQ]}),a})()}}]);