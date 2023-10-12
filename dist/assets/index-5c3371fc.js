(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=window,q=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),Z=new WeakMap;let lt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(q&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Z.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Z.set(t,e))}return e}toString(){return this.cssText}};const $t=e=>new lt(typeof e=="string"?e:e+"",void 0,K),ft=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]);return new lt(i,e,K)},_t=(e,t)=>{q?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{const s=document.createElement("style"),r=O.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=i.cssText,e.appendChild(s)})},F=q?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return $t(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var R;const N=window,G=N.trustedTypes,mt=G?G.emptyScript:"",Q=N.reactiveElementPolyfillSupport,I={toAttribute(e,t){switch(t){case Boolean:e=e?mt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},ht=(e,t)=>t!==e&&(t==t||e==e),M={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:ht},V="finalized";let g=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=M){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||M}static finalize(){if(this.hasOwnProperty(V))return!1;this[V]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(F(s))}else e!==void 0&&t.push(F(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return _t(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=M){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:I).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:I;this._$El=r,this[r]=n.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||ht)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};g[V]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},Q==null||Q({ReactiveElement:g}),((R=N.reactiveElementVersions)!==null&&R!==void 0?R:N.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const T=window,y=T.trustedTypes,X=y?y.createPolicy("lit-html",{createHTML:e=>e}):void 0,W="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,at="?"+$,gt=`<${at}>`,m=document,C=()=>m.createComment(""),x=e=>e===null||typeof e!="object"&&typeof e!="function",ct=Array.isArray,yt=e=>ct(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",z=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,tt=/>/g,f=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,it=/"/g,dt=/^(?:script|style|textarea|title)$/i,At=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),st=At(1),A=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),rt=new WeakMap,_=m.createTreeWalker(m,129,null,!1);function ut(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(t):t}const bt=(e,t)=>{const i=e.length-1,s=[];let r,o=t===2?"<svg>":"",n=S;for(let a=0;a<i;a++){const l=e[a];let h,c,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,c=n.exec(l),c!==null);)p=n.lastIndex,n===S?c[1]==="!--"?n=Y:c[1]!==void 0?n=tt:c[2]!==void 0?(dt.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=f):c[3]!==void 0&&(n=f):n===f?c[0]===">"?(n=r??S,d=-1):c[1]===void 0?d=-2:(d=n.lastIndex-c[2].length,h=c[1],n=c[3]===void 0?f:c[3]==='"'?it:et):n===it||n===et?n=f:n===Y||n===tt?n=S:(n=f,r=void 0);const v=n===f&&e[a+1].startsWith("/>")?" ":"";o+=n===S?l+gt:d>=0?(s.push(h),l.slice(0,d)+W+l.slice(d)+$+v):l+$+(d===-2?(s.push(void 0),a):v)}return[ut(e,o+(e[i]||"<?>")+(t===2?"</svg>":"")),s]};class P{constructor({strings:t,_$litType$:i},s){let r;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[h,c]=bt(t,i);if(this.el=P.createElement(h,s),_.currentNode=this.el.content,i===2){const d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(r=_.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes()){const d=[];for(const p of r.getAttributeNames())if(p.endsWith(W)||p.startsWith($)){const v=c[n++];if(d.push(p),v!==void 0){const vt=r.getAttribute(v.toLowerCase()+W).split($),H=/([.?@])?(.*)/.exec(v);l.push({type:1,index:o,name:H[2],strings:vt,ctor:H[1]==="."?St:H[1]==="?"?Ct:H[1]==="@"?xt:k})}else l.push({type:6,index:o})}for(const p of d)r.removeAttribute(p)}if(dt.test(r.tagName)){const d=r.textContent.split($),p=d.length-1;if(p>0){r.textContent=y?y.emptyScript:"";for(let v=0;v<p;v++)r.append(d[v],C()),_.nextNode(),l.push({type:2,index:++o});r.append(d[p],C())}}}else if(r.nodeType===8)if(r.data===at)l.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf($,d+1))!==-1;)l.push({type:7,index:o}),d+=$.length-1}o++}}static createElement(t,i){const s=m.createElement("template");return s.innerHTML=t,s}}function b(e,t,i=e,s){var r,o,n,a;if(t===A)return t;let l=s!==void 0?(r=i._$Co)===null||r===void 0?void 0:r[s]:i._$Cl;const h=x(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),h===void 0?l=void 0:(l=new h(e),l._$AT(e,i,s)),s!==void 0?((n=(a=i)._$Co)!==null&&n!==void 0?n:a._$Co=[])[s]=l:i._$Cl=l),l!==void 0&&(t=b(e,l._$AS(e,t.values),l,s)),t}class Et{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:r}=this._$AD,o=((i=t==null?void 0:t.creationScope)!==null&&i!==void 0?i:m).importNode(s,!0);_.currentNode=o;let n=_.nextNode(),a=0,l=0,h=r[0];for(;h!==void 0;){if(a===h.index){let c;h.type===2?c=new U(n,n.nextSibling,this,t):h.type===1?c=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(c=new Pt(n,this,t)),this._$AV.push(c),h=r[++l]}a!==(h==null?void 0:h.index)&&(n=_.nextNode(),a++)}return _.currentNode=m,o}v(t){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class U{constructor(t,i,s,r){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=r,this._$Cp=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=b(this,t,i),x(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):yt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&x(this._$AH)?this._$AA.nextSibling.data=t:this.$(m.createTextNode(t)),this._$AH=t}g(t){var i;const{values:s,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=P.createElement(ut(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===o)this._$AH.v(s);else{const n=new Et(o,this),a=n.u(this.options);n.v(s),this.$(a),this._$AH=n}}_$AC(t){let i=rt.get(t.strings);return i===void 0&&rt.set(t.strings,i=new P(t)),i}T(t){ct(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,r=0;for(const o of t)r===i.length?i.push(s=new U(this.k(C()),this.k(C()),this,this.options)):s=i[r],s._$AI(o),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,i);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cp=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}}class k{constructor(t,i,s,r,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,r){const o=this.strings;let n=!1;if(o===void 0)t=b(this,t,i,0),n=!x(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{const a=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=b(this,a[s+l],i,l),h===A&&(h=this._$AH[l]),n||(n=!x(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+o[l+1]),this._$AH[l]=h}n&&!r&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class St extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const wt=y?y.emptyScript:"";class Ct extends k{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,wt):this.element.removeAttribute(this.name)}}class xt extends k{constructor(t,i,s,r,o){super(t,i,s,r,o),this.type=5}_$AI(t,i=this){var s;if((t=(s=b(this,t,i,0))!==null&&s!==void 0?s:u)===A)return;const r=this._$AH,o=t===u&&r!==u||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==u&&(r===u||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;typeof this._$AH=="function"?this._$AH.call((s=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Pt{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const ot=T.litHtmlPolyfillSupport;ot==null||ot(P,U),((L=T.litHtmlVersions)!==null&&L!==void 0?L:T.litHtmlVersions=[]).push("2.8.0");const Ut=(e,t,i)=>{var s,r;const o=(s=i==null?void 0:i.renderBefore)!==null&&s!==void 0?s:t;let n=o._$litPart$;if(n===void 0){const a=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=n=new U(t.insertBefore(C(),a),a,void 0,i??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j,B;class w extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return(t=(i=this.renderOptions).renderBefore)!==null&&t!==void 0||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ut(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return A}}w.finalized=!0,w._$litElement$=!0,(j=globalThis.litElementHydrateSupport)===null||j===void 0||j.call(globalThis,{LitElement:w});const nt=globalThis.litElementPolyfillSupport;nt==null||nt({LitElement:w});((B=globalThis.litElementVersions)!==null&&B!==void 0?B:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=e=>t=>typeof t=="function"?((i,s)=>(customElements.define(i,s),s))(e,t):((i,s)=>{const{kind:r,elements:o}=s;return{kind:r,elements:o,finisher(n){customElements.define(i,n)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}},Nt=(e,t,i)=>{t.constructor.createProperty(i,e)};function pt(e){return(t,i)=>i!==void 0?Nt(e,t,i):Ot(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var D;((D=window.HTMLSlotElement)===null||D===void 0?void 0:D.prototype.assignedElements)!=null;var Tt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,J=(e,t,i,s)=>{for(var r=s>1?void 0:s?kt(t,i):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(r=(s?n(t,i,r):n(r))||r);return s&&r&&Tt(t,i,r),r};let E=class extends w{constructor(){super(...arguments),this.docsHint="Click on the Vite and Lit logos to learn more",this.count=0}static get items(){return[{label:"Trang chủ",url:"/"},{label:"Giới thiệu",url:"/gioi-thieu"},{label:"Sản phẩm",url:"/san-pham"},{label:"Liên hệ",url:"/lien-he"}]}render(){return st`<nav class="top-menu">
			<ul>
				${E.items.map(e=>st`
						<li>
							<a href="${e.url}">${e.label}</a>
						</li>
					`)}
			</ul>
		</nav>`}};E.styles=ft`
		:host {
			max-width: 1280px;
			margin: 0 auto;
			padding: 2rem;
			text-align: center;
		}

		.logo {
			height: 6em;
			padding: 1.5em;
			will-change: filter;
			transition: filter 300ms;
		}
		.logo:hover {
			filter: drop-shadow(0 0 2em #646cffaa);
		}
		.logo.lit:hover {
			filter: drop-shadow(0 0 2em #325cffaa);
		}

		.card {
			padding: 2em;
		}

		.read-the-docs {
			color: #888;
		}

		::slotted(h1) {
			font-size: 3.2em;
			line-height: 1.1;
		}

		a {
			font-weight: 500;
			color: #646cff;
			text-decoration: inherit;
		}
		a:hover {
			color: #535bf2;
		}

		button {
			border-radius: 8px;
			border: 1px solid transparent;
			padding: 0.6em 1.2em;
			font-size: 1em;
			font-weight: 500;
			font-family: inherit;
			background-color: #1a1a1a;
			cursor: pointer;
			transition: border-color 0.25s;
		}
		button:hover {
			border-color: #646cff;
		}
		button:focus,
		button:focus-visible {
			outline: 4px auto -webkit-focus-ring-color;
		}

		@media (prefers-color-scheme: light) {
			a:hover {
				color: #747bff;
			}
			button {
				background-color: #f9f9f9;
			}
		}
	`;J([pt()],E.prototype,"docsHint",2);J([pt({type:Number})],E.prototype,"count",2);E=J([Ht("my-element")],E);
