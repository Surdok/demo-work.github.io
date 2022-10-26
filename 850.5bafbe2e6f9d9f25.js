"use strict";(self.webpackChunkdemo_work=self.webpackChunkdemo_work||[]).push([[850],{3238:(P,v,d)=>{d.d(v,{BQ:()=>D,wG:()=>H,si:()=>W,pj:()=>B,Kr:()=>V,Id:()=>L});var a=d(4650),m=d(2687),g=d(445),b=d(6895),r=d(3353),p=d(1281);const F=new a.OlP("mat-sanity-checks",{providedIn:"root",factory:function N(){return!0}});let D=(()=>{class n{constructor(e,i,o){this._sanityChecks=i,this._document=o,this._hasDoneGlobalChecks=!1,e._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(e){return!(0,r.Oy)()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[e])}}return n.\u0275fac=function(e){return new(e||n)(a.LFG(m.qm),a.LFG(F,8),a.LFG(b.K0))},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[g.vT,g.vT]}),n})();function L(n){return class extends n{constructor(...t){super(...t),this._disabled=!1}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,p.Ig)(t)}}}function B(n,t){return class extends n{constructor(...e){super(...e),this.defaultColor=t,this.color=t}get color(){return this._color}set color(e){const i=e||this.defaultColor;i!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),i&&this._elementRef.nativeElement.classList.add(`mat-${i}`),this._color=i)}}}function V(n){return class extends n{constructor(...t){super(...t),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=(0,p.Ig)(t)}}}class U{constructor(t,e,i,o=!1){this._renderer=t,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=o,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}}const C={enterDuration:225,exitDuration:150},y=(0,r.i$)({passive:!0}),w=["mousedown","touchstart"],T=["mouseup","mouseleave","touchend","touchcancel"];class z{constructor(t,e,i,o){this._target=t,this._ngZone=e,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,o.isBrowser&&(this._containerElement=(0,p.fI)(i))}fadeInRipple(t,e,i={}){const o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s={...C,...i.animation};i.centered&&(t=o.left+o.width/2,e=o.top+o.height/2);const u=i.radius||function $(n,t,e){const i=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),o=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(i*i+o*o)}(t,e,o),K=t-o.left,Z=e-o.top,x=s.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=K-u+"px",l.style.top=Z-u+"px",l.style.height=2*u+"px",l.style.width=2*u+"px",null!=i.color&&(l.style.backgroundColor=i.color),l.style.transitionDuration=`${x}ms`,this._containerElement.appendChild(l);const A=window.getComputedStyle(l),I=A.transitionDuration,E="none"===A.transitionProperty||"0s"===I||"0s, 0s"===I,h=new U(this,l,i,E);l.style.transform="scale3d(1, 1, 1)",h.state=0,i.persistent||(this._mostRecentTransientRipple=h);let k=null;return!E&&(x||s.exitDuration)&&this._ngZone.runOutsideAngular(()=>{const R=()=>this._finishRippleTransition(h),S=()=>this._destroyRipple(h);l.addEventListener("transitionend",R),l.addEventListener("transitioncancel",S),k={onTransitionEnd:R,onTransitionCancel:S}}),this._activeRipples.set(h,k),(E||!x)&&this._finishRippleTransition(h),h}fadeOutRipple(t){if(2===t.state||3===t.state)return;const e=t.element,i={...C,...t.config.animation};e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",t.state=2,(t._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){const e=(0,p.fI)(t);!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,this._registerEvents(w))}handleEvent(t){"mousedown"===t.type?this._onMousedown(t):"touchstart"===t.type?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._registerEvents(T),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){0===t.state?this._startFadeOutTransition(t):2===t.state&&this._destroyRipple(t)}_startFadeOutTransition(t){const e=t===this._mostRecentTransientRipple,{persistent:i}=t.config;t.state=1,!i&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){const e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=3,null!==e&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel)),t.element.remove()}_onMousedown(t){const e=(0,m.X6)(t),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!(0,m.yG)(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const e=t.changedTouches;for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){!this._isPointerDown||(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{!t.config.persistent&&(1===t.state||t.config.terminateOnPointerUp&&0===t.state)&&t.fadeOut()}))}_registerEvents(t){this._ngZone.runOutsideAngular(()=>{t.forEach(e=>{this._triggerElement.addEventListener(e,this,y)})})}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){this._triggerElement&&(w.forEach(t=>{this._triggerElement.removeEventListener(t,this,y)}),this._pointerUpEventsRegistered&&T.forEach(t=>{this._triggerElement.removeEventListener(t,this,y)}))}}const G=new a.OlP("mat-ripple-global-options");let H=(()=>{class n{constructor(e,i,o,s,u){this._elementRef=e,this._animationMode=u,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=s||{},this._rippleRenderer=new z(this,i,e,o)}get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:{...this._globalOptions.animation,..."NoopAnimations"===this._animationMode?{enterDuration:0,exitDuration:0}:{},...this.animation},terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,o){return"number"==typeof e?this._rippleRenderer.fadeInRipple(e,i,{...this.rippleConfig,...o}):this._rippleRenderer.fadeInRipple(0,0,{...this.rippleConfig,...e})}}return n.\u0275fac=function(e){return new(e||n)(a.Y36(a.SBq),a.Y36(a.R0b),a.Y36(r.t4),a.Y36(G,8),a.Y36(a.QbO,8))},n.\u0275dir=a.lG2({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,i){2&e&&a.ekj("mat-ripple-unbounded",i.unbounded)},inputs:{color:["matRippleColor","color"],unbounded:["matRippleUnbounded","unbounded"],centered:["matRippleCentered","centered"],radius:["matRippleRadius","radius"],animation:["matRippleAnimation","animation"],disabled:["matRippleDisabled","disabled"],trigger:["matRippleTrigger","trigger"]},exportAs:["matRipple"]}),n})(),W=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[D,D]}),n})()},4850:(P,v,d)=>{d.d(v,{d:()=>M,t:()=>b});var a=d(4650),m=d(1281),g=d(3238);let M=(()=>{class r{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(c){this._vertical=(0,m.Ig)(c)}get inset(){return this._inset}set inset(c){this._inset=(0,m.Ig)(c)}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=a.Xpm({type:r,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(c,f){2&c&&(a.uIk("aria-orientation",f.vertical?"vertical":"horizontal"),a.ekj("mat-divider-vertical",f.vertical)("mat-divider-horizontal",!f.vertical)("mat-divider-inset",f.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(c,f){},styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],encapsulation:2,changeDetection:0}),r})(),b=(()=>{class r{}return r.\u0275fac=function(c){return new(c||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[g.BQ,g.BQ]}),r})()}}]);