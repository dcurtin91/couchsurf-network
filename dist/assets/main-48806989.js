function RS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Nu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var n0={exports:{}},Au={},r0={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),NS=Symbol.for("react.portal"),AS=Symbol.for("react.fragment"),DS=Symbol.for("react.strict_mode"),PS=Symbol.for("react.profiler"),OS=Symbol.for("react.provider"),LS=Symbol.for("react.context"),$S=Symbol.for("react.forward_ref"),MS=Symbol.for("react.suspense"),bS=Symbol.for("react.memo"),US=Symbol.for("react.lazy"),tg=Symbol.iterator;function FS(t){return t===null||typeof t!="object"?null:(t=tg&&t[tg]||t["@@iterator"],typeof t=="function"?t:null)}var i0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s0=Object.assign,o0={};function vs(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||i0}vs.prototype.isReactComponent={};vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function a0(){}a0.prototype=vs.prototype;function kf(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||i0}var If=kf.prototype=new a0;If.constructor=kf;s0(If,vs.prototype);If.isPureReactComponent=!0;var ng=Array.isArray,l0=Object.prototype.hasOwnProperty,xf={current:null},u0={key:!0,ref:!0,__self:!0,__source:!0};function c0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)l0.call(e,r)&&!u0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ra,type:t,key:s,ref:o,props:i,_owner:xf.current}}function jS(t,e){return{$$typeof:ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ra}function BS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rg=/\/+/g;function bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BS(""+t.key):e.toString(36)}function hl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ra:case NS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bc(o,0):r,ng(i)?(n="",t!=null&&(n=t.replace(rg,"$&/")+"/"),hl(i,e,n,"",function(u){return u})):i!=null&&(Rf(i)&&(i=jS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(rg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ng(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+bc(s,a);o+=hl(s,e,n,l,i)}else if(l=FS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+bc(s,a++),o+=hl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $a(t,e,n){if(t==null)return t;var r=[],i=0;return hl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function VS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},dl={transition:null},zS={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:dl,ReactCurrentOwner:xf};K.Children={map:$a,forEach:function(t,e,n){$a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $a(t,function(){e++}),e},toArray:function(t){return $a(t,function(e){return e})||[]},only:function(t){if(!Rf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=vs;K.Fragment=AS;K.Profiler=PS;K.PureComponent=kf;K.StrictMode=DS;K.Suspense=MS;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zS;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=s0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)l0.call(e,l)&&!u0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ra,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:LS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:OS,_context:t},t.Consumer=t};K.createElement=c0;K.createFactory=function(t){var e=c0.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:$S,render:t}};K.isValidElement=Rf;K.lazy=function(t){return{$$typeof:US,_payload:{_status:-1,_result:t},_init:VS}};K.memo=function(t,e){return{$$typeof:bS,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=dl.transition;dl.transition={};try{t()}finally{dl.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return ut.current.useCallback(t,e)};K.useContext=function(t){return ut.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};K.useEffect=function(t,e){return ut.current.useEffect(t,e)};K.useId=function(){return ut.current.useId()};K.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return ut.current.useMemo(t,e)};K.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};K.useRef=function(t){return ut.current.useRef(t)};K.useState=function(t){return ut.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return ut.current.useTransition()};K.version="18.2.0";r0.exports=K;var y=r0.exports;const qt=Nu(y),ig=RS({__proto__:null,default:qt},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HS=y,WS=Symbol.for("react.element"),KS=Symbol.for("react.fragment"),qS=Object.prototype.hasOwnProperty,GS=HS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QS={key:!0,ref:!0,__self:!0,__source:!0};function h0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)qS.call(e,r)&&!QS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:WS,type:t,key:s,ref:o,props:i,_owner:GS.current}}Au.Fragment=KS;Au.jsx=h0;Au.jsxs=h0;n0.exports=Au;var w=n0.exports,Bh={},d0={exports:{}},Rt={},f0={exports:{}},p0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,b){var B=R.length;R.push(b);e:for(;0<B;){var J=B-1>>>1,ne=R[J];if(0<i(ne,b))R[J]=b,R[B]=ne,B=J;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var b=R[0],B=R.pop();if(B!==b){R[0]=B;e:for(var J=0,ne=R.length,Et=ne>>>1;J<Et;){var nt=2*(J+1)-1,_e=R[nt],G=nt+1,Dt=R[G];if(0>i(_e,B))G<ne&&0>i(Dt,_e)?(R[J]=Dt,R[G]=B,J=G):(R[J]=_e,R[nt]=B,J=nt);else if(G<ne&&0>i(Dt,B))R[J]=Dt,R[G]=B,J=G;else break e}}return b}function i(R,b){var B=R.sortIndex-b.sortIndex;return B!==0?B:R.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,v=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=R)r(u),b.sortIndex=b.expirationTime,e(l,b);else break;b=n(u)}}function T(R){if(E=!1,g(R),!v)if(n(l)!==null)v=!0,ht(k);else{var b=n(u);b!==null&&wt(T,b.startTime-R)}}function k(R,b){v=!1,E&&(E=!1,p(D),D=-1),m=!0;var B=d;try{for(g(b),h=n(l);h!==null&&(!(h.expirationTime>b)||R&&!Ae());){var J=h.callback;if(typeof J=="function"){h.callback=null,d=h.priorityLevel;var ne=J(h.expirationTime<=b);b=t.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(l)&&r(l),g(b)}else r(l);h=n(l)}if(h!==null)var Et=!0;else{var nt=n(u);nt!==null&&wt(T,nt.startTime-b),Et=!1}return Et}finally{h=null,d=B,m=!1}}var C=!1,N=null,D=-1,H=5,j=-1;function Ae(){return!(t.unstable_now()-j<H)}function Bt(){if(N!==null){var R=t.unstable_now();j=R;var b=!0;try{b=N(!0,R)}finally{b?vt():(C=!1,N=null)}}else C=!1}var vt;if(typeof f=="function")vt=function(){f(Bt)};else if(typeof MessageChannel<"u"){var En=new MessageChannel,Hn=En.port2;En.port1.onmessage=Bt,vt=function(){Hn.postMessage(null)}}else vt=function(){_(Bt,0)};function ht(R){N=R,C||(C=!0,vt())}function wt(R,b){D=_(function(){R(t.unstable_now())},b)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,ht(k))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var b=3;break;default:b=d}var B=d;d=b;try{return R()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,b){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var B=d;d=R;try{return b()}finally{d=B}},t.unstable_scheduleCallback=function(R,b,B){var J=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?J+B:J):B=J,R){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=B+ne,R={id:c++,callback:b,priorityLevel:R,startTime:B,expirationTime:ne,sortIndex:-1},B>J?(R.sortIndex=B,e(u,R),n(l)===null&&R===n(u)&&(E?(p(D),D=-1):E=!0,wt(T,B-J))):(R.sortIndex=ne,e(l,R),v||m||(v=!0,ht(k))),R},t.unstable_shouldYield=Ae,t.unstable_wrapCallback=function(R){var b=d;return function(){var B=d;d=b;try{return R.apply(this,arguments)}finally{d=B}}}})(p0);f0.exports=p0;var YS=f0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0=y,It=YS;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g0=new Set,vo={};function ci(t,e){ns(t,e),ns(t+"Capture",e)}function ns(t,e){for(vo[t]=e,t=0;t<e.length;t++)g0.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vh=Object.prototype.hasOwnProperty,XS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sg={},og={};function JS(t){return Vh.call(og,t)?!0:Vh.call(sg,t)?!1:XS.test(t)?og[t]=!0:(sg[t]=!0,!1)}function ZS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function eC(t,e,n,r){if(e===null||typeof e>"u"||ZS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ve[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ve[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ve[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ve[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ve[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ve[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ve[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ve[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ve[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nf=/[\-:]([a-z])/g;function Af(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nf,Af);Ve[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nf,Af);Ve[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nf,Af);Ve[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ve[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ve[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Df(t,e,n,r){var i=Ve.hasOwnProperty(e)?Ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(eC(e,n,i,r)&&(n=null),r||i===null?JS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vn=m0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ma=Symbol.for("react.element"),Ri=Symbol.for("react.portal"),Ni=Symbol.for("react.fragment"),Pf=Symbol.for("react.strict_mode"),zh=Symbol.for("react.profiler"),y0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),Of=Symbol.for("react.forward_ref"),Hh=Symbol.for("react.suspense"),Wh=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),w0=Symbol.for("react.offscreen"),ag=Symbol.iterator;function Ns(t){return t===null||typeof t!="object"?null:(t=ag&&t[ag]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,Uc;function Bs(t){if(Uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uc=e&&e[1]||""}return`
`+Uc+t}var Fc=!1;function jc(t,e){if(!t||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bs(t):""}function tC(t){switch(t.tag){case 5:return Bs(t.type);case 16:return Bs("Lazy");case 13:return Bs("Suspense");case 19:return Bs("SuspenseList");case 0:case 2:case 15:return t=jc(t.type,!1),t;case 11:return t=jc(t.type.render,!1),t;case 1:return t=jc(t.type,!0),t;default:return""}}function Kh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ni:return"Fragment";case Ri:return"Portal";case zh:return"Profiler";case Pf:return"StrictMode";case Hh:return"Suspense";case Wh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v0:return(t.displayName||"Context")+".Consumer";case y0:return(t._context.displayName||"Context")+".Provider";case Of:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lf:return e=t.displayName||null,e!==null?e:Kh(t.type)||"Memo";case Gn:e=t._payload,t=t._init;try{return Kh(t(e))}catch{}}return null}function nC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kh(e);case 8:return e===Pf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function E0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rC(t){var e=E0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ba(t){t._valueTracker||(t._valueTracker=rC(t))}function _0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=E0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qh(t,e){var n=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function T0(t,e){e=e.checked,e!=null&&Df(t,"checked",e,!1)}function Gh(t,e){T0(t,e);var n=Er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qh(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ug(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qh(t,e,n){(e!=="number"||Dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vs=Array.isArray;function Hi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Yh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Vs(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function S0(t,e){var n=Er(e.value),r=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function C0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?C0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ua,k0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ua=Ua||document.createElement("div"),Ua.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ua.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iC=["Webkit","ms","Moz","O"];Object.keys(Zs).forEach(function(t){iC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zs[e]=Zs[t]})});function I0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zs.hasOwnProperty(t)&&Zs[t]?(""+e).trim():e+"px"}function x0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=I0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var sC=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jh(t,e){if(e){if(sC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Zh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ed=null;function $f(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var td=null,Wi=null,Ki=null;function dg(t){if(t=oa(t)){if(typeof td!="function")throw Error(I(280));var e=t.stateNode;e&&(e=$u(e),td(t.stateNode,t.type,e))}}function R0(t){Wi?Ki?Ki.push(t):Ki=[t]:Wi=t}function N0(){if(Wi){var t=Wi,e=Ki;if(Ki=Wi=null,dg(t),e)for(t=0;t<e.length;t++)dg(e[t])}}function A0(t,e){return t(e)}function D0(){}var Bc=!1;function P0(t,e,n){if(Bc)return t(e,n);Bc=!0;try{return A0(t,e,n)}finally{Bc=!1,(Wi!==null||Ki!==null)&&(D0(),N0())}}function Eo(t,e){var n=t.stateNode;if(n===null)return null;var r=$u(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var nd=!1;if(On)try{var As={};Object.defineProperty(As,"passive",{get:function(){nd=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{nd=!1}function oC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var eo=!1,Pl=null,Ol=!1,rd=null,aC={onError:function(t){eo=!0,Pl=t}};function lC(t,e,n,r,i,s,o,a,l){eo=!1,Pl=null,oC.apply(aC,arguments)}function uC(t,e,n,r,i,s,o,a,l){if(lC.apply(this,arguments),eo){if(eo){var u=Pl;eo=!1,Pl=null}else throw Error(I(198));Ol||(Ol=!0,rd=u)}}function hi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function O0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fg(t){if(hi(t)!==t)throw Error(I(188))}function cC(t){var e=t.alternate;if(!e){if(e=hi(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fg(i),t;if(s===r)return fg(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function L0(t){return t=cC(t),t!==null?$0(t):null}function $0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$0(t);if(e!==null)return e;t=t.sibling}return null}var M0=It.unstable_scheduleCallback,pg=It.unstable_cancelCallback,hC=It.unstable_shouldYield,dC=It.unstable_requestPaint,Ee=It.unstable_now,fC=It.unstable_getCurrentPriorityLevel,Mf=It.unstable_ImmediatePriority,b0=It.unstable_UserBlockingPriority,Ll=It.unstable_NormalPriority,pC=It.unstable_LowPriority,U0=It.unstable_IdlePriority,Du=null,cn=null;function mC(t){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Du,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:vC,gC=Math.log,yC=Math.LN2;function vC(t){return t>>>=0,t===0?32:31-(gC(t)/yC|0)|0}var Fa=64,ja=4194304;function zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $l(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=zs(a):(s&=o,s!==0&&(r=zs(s)))}else o=n&~i,o!==0?r=zs(o):s!==0&&(r=zs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gt(e),i=1<<n,r|=t[n],e&=~i;return r}function wC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function EC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=wC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function F0(){var t=Fa;return Fa<<=1,!(Fa&4194240)&&(Fa=64),t}function Vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ia(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gt(e),t[e]=n}function _C(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Gt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Z=0;function j0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var B0,Uf,V0,z0,H0,sd=!1,Ba=[],lr=null,ur=null,cr=null,_o=new Map,To=new Map,Xn=[],TC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mg(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":_o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(e.pointerId)}}function Ds(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=oa(e),e!==null&&Uf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function SC(t,e,n,r,i){switch(e){case"focusin":return lr=Ds(lr,t,e,n,r,i),!0;case"dragenter":return ur=Ds(ur,t,e,n,r,i),!0;case"mouseover":return cr=Ds(cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return _o.set(s,Ds(_o.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,To.set(s,Ds(To.get(s)||null,t,e,n,r,i)),!0}return!1}function W0(t){var e=Ur(t.target);if(e!==null){var n=hi(e);if(n!==null){if(e=n.tag,e===13){if(e=O0(n),e!==null){t.blockedOn=e,H0(t.priority,function(){V0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ed=r,n.target.dispatchEvent(r),ed=null}else return e=oa(n),e!==null&&Uf(e),t.blockedOn=n,!1;e.shift()}return!0}function gg(t,e,n){fl(t)&&n.delete(e)}function CC(){sd=!1,lr!==null&&fl(lr)&&(lr=null),ur!==null&&fl(ur)&&(ur=null),cr!==null&&fl(cr)&&(cr=null),_o.forEach(gg),To.forEach(gg)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,sd||(sd=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,CC)))}function So(t){function e(i){return Ps(i,t)}if(0<Ba.length){Ps(Ba[0],t);for(var n=1;n<Ba.length;n++){var r=Ba[n];r.blockedOn===t&&(r.blockedOn=null)}}for(lr!==null&&Ps(lr,t),ur!==null&&Ps(ur,t),cr!==null&&Ps(cr,t),_o.forEach(e),To.forEach(e),n=0;n<Xn.length;n++)r=Xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)W0(n),n.blockedOn===null&&Xn.shift()}var qi=Vn.ReactCurrentBatchConfig,Ml=!0;function kC(t,e,n,r){var i=Z,s=qi.transition;qi.transition=null;try{Z=1,Ff(t,e,n,r)}finally{Z=i,qi.transition=s}}function IC(t,e,n,r){var i=Z,s=qi.transition;qi.transition=null;try{Z=4,Ff(t,e,n,r)}finally{Z=i,qi.transition=s}}function Ff(t,e,n,r){if(Ml){var i=od(t,e,n,r);if(i===null)Jc(t,e,r,bl,n),mg(t,r);else if(SC(i,t,e,n,r))r.stopPropagation();else if(mg(t,r),e&4&&-1<TC.indexOf(t)){for(;i!==null;){var s=oa(i);if(s!==null&&B0(s),s=od(t,e,n,r),s===null&&Jc(t,e,r,bl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Jc(t,e,r,null,n)}}var bl=null;function od(t,e,n,r){if(bl=null,t=$f(r),t=Ur(t),t!==null)if(e=hi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=O0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bl=t,null}function K0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fC()){case Mf:return 1;case b0:return 4;case Ll:case pC:return 16;case U0:return 536870912;default:return 16}default:return 16}}var ir=null,jf=null,pl=null;function q0(){if(pl)return pl;var t,e=jf,n=e.length,r,i="value"in ir?ir.value:ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return pl=i.slice(t,1<r?1-r:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Va(){return!0}function yg(){return!1}function Nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Va:yg,this.isPropagationStopped=yg,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),e}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bf=Nt(ws),sa=de({},ws,{view:0,detail:0}),xC=Nt(sa),zc,Hc,Os,Pu=de({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Os&&(Os&&t.type==="mousemove"?(zc=t.screenX-Os.screenX,Hc=t.screenY-Os.screenY):Hc=zc=0,Os=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),vg=Nt(Pu),RC=de({},Pu,{dataTransfer:0}),NC=Nt(RC),AC=de({},sa,{relatedTarget:0}),Wc=Nt(AC),DC=de({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),PC=Nt(DC),OC=de({},ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LC=Nt(OC),$C=de({},ws,{data:0}),wg=Nt($C),MC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UC[t])?!!e[t]:!1}function Vf(){return FC}var jC=de({},sa,{key:function(t){if(t.key){var e=MC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vf,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BC=Nt(jC),VC=de({},Pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eg=Nt(VC),zC=de({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vf}),HC=Nt(zC),WC=de({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),KC=Nt(WC),qC=de({},Pu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),GC=Nt(qC),QC=[9,13,27,32],zf=On&&"CompositionEvent"in window,to=null;On&&"documentMode"in document&&(to=document.documentMode);var YC=On&&"TextEvent"in window&&!to,G0=On&&(!zf||to&&8<to&&11>=to),_g=String.fromCharCode(32),Tg=!1;function Q0(t,e){switch(t){case"keyup":return QC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ai=!1;function XC(t,e){switch(t){case"compositionend":return Y0(e);case"keypress":return e.which!==32?null:(Tg=!0,_g);case"textInput":return t=e.data,t===_g&&Tg?null:t;default:return null}}function JC(t,e){if(Ai)return t==="compositionend"||!zf&&Q0(t,e)?(t=q0(),pl=jf=ir=null,Ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return G0&&e.locale!=="ko"?null:e.data;default:return null}}var ZC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ZC[t.type]:e==="textarea"}function X0(t,e,n,r){R0(r),e=Ul(e,"onChange"),0<e.length&&(n=new Bf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var no=null,Co=null;function ek(t){lw(t,0)}function Ou(t){var e=Oi(t);if(_0(e))return t}function tk(t,e){if(t==="change")return e}var J0=!1;if(On){var Kc;if(On){var qc="oninput"in document;if(!qc){var Cg=document.createElement("div");Cg.setAttribute("oninput","return;"),qc=typeof Cg.oninput=="function"}Kc=qc}else Kc=!1;J0=Kc&&(!document.documentMode||9<document.documentMode)}function kg(){no&&(no.detachEvent("onpropertychange",Z0),Co=no=null)}function Z0(t){if(t.propertyName==="value"&&Ou(Co)){var e=[];X0(e,Co,t,$f(t)),P0(ek,e)}}function nk(t,e,n){t==="focusin"?(kg(),no=e,Co=n,no.attachEvent("onpropertychange",Z0)):t==="focusout"&&kg()}function rk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ou(Co)}function ik(t,e){if(t==="click")return Ou(e)}function sk(t,e){if(t==="input"||t==="change")return Ou(e)}function ok(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xt=typeof Object.is=="function"?Object.is:ok;function ko(t,e){if(Xt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vh.call(e,i)||!Xt(t[i],e[i]))return!1}return!0}function Ig(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xg(t,e){var n=Ig(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ig(n)}}function ew(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ew(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tw(){for(var t=window,e=Dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dl(t.document)}return e}function Hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ak(t){var e=tw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ew(n.ownerDocument.documentElement,n)){if(r!==null&&Hf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=xg(n,s);var o=xg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lk=On&&"documentMode"in document&&11>=document.documentMode,Di=null,ad=null,ro=null,ld=!1;function Rg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ld||Di==null||Di!==Dl(r)||(r=Di,"selectionStart"in r&&Hf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ro&&ko(ro,r)||(ro=r,r=Ul(ad,"onSelect"),0<r.length&&(e=new Bf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Di)))}function za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Pi={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionend:za("Transition","TransitionEnd")},Gc={},nw={};On&&(nw=document.createElement("div").style,"AnimationEvent"in window||(delete Pi.animationend.animation,delete Pi.animationiteration.animation,delete Pi.animationstart.animation),"TransitionEvent"in window||delete Pi.transitionend.transition);function Lu(t){if(Gc[t])return Gc[t];if(!Pi[t])return t;var e=Pi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in nw)return Gc[t]=e[n];return t}var rw=Lu("animationend"),iw=Lu("animationiteration"),sw=Lu("animationstart"),ow=Lu("transitionend"),aw=new Map,Ng="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){aw.set(t,e),ci(e,[t])}for(var Qc=0;Qc<Ng.length;Qc++){var Yc=Ng[Qc],uk=Yc.toLowerCase(),ck=Yc[0].toUpperCase()+Yc.slice(1);xr(uk,"on"+ck)}xr(rw,"onAnimationEnd");xr(iw,"onAnimationIteration");xr(sw,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(ow,"onTransitionEnd");ns("onMouseEnter",["mouseout","mouseover"]);ns("onMouseLeave",["mouseout","mouseover"]);ns("onPointerEnter",["pointerout","pointerover"]);ns("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hs));function Ag(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,uC(r,e,void 0,t),t.currentTarget=null}function lw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ag(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ag(i,a,u),s=l}}}if(Ol)throw t=rd,Ol=!1,rd=null,t}function re(t,e){var n=e[fd];n===void 0&&(n=e[fd]=new Set);var r=t+"__bubble";n.has(r)||(uw(e,t,2,!1),n.add(r))}function Xc(t,e,n){var r=0;e&&(r|=4),uw(n,t,r,e)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[Ha]){t[Ha]=!0,g0.forEach(function(n){n!=="selectionchange"&&(hk.has(n)||Xc(n,!1,t),Xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ha]||(e[Ha]=!0,Xc("selectionchange",!1,e))}}function uw(t,e,n,r){switch(K0(e)){case 1:var i=kC;break;case 4:i=IC;break;default:i=Ff}n=i.bind(null,e,n,t),i=void 0,!nd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ur(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}P0(function(){var u=s,c=$f(n),h=[];e:{var d=aw.get(t);if(d!==void 0){var m=Bf,v=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":m=BC;break;case"focusin":v="focus",m=Wc;break;case"focusout":v="blur",m=Wc;break;case"beforeblur":case"afterblur":m=Wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=vg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=NC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=HC;break;case rw:case iw:case sw:m=PC;break;case ow:m=KC;break;case"scroll":m=xC;break;case"wheel":m=GC;break;case"copy":case"cut":case"paste":m=LC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Eg}var E=(e&4)!==0,_=!E&&t==="scroll",p=E?d!==null?d+"Capture":null:d;E=[];for(var f=u,g;f!==null;){g=f;var T=g.stateNode;if(g.tag===5&&T!==null&&(g=T,p!==null&&(T=Eo(f,p),T!=null&&E.push(xo(f,T,g)))),_)break;f=f.return}0<E.length&&(d=new m(d,v,null,n,c),h.push({event:d,listeners:E}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==ed&&(v=n.relatedTarget||n.fromElement)&&(Ur(v)||v[Ln]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Ur(v):null,v!==null&&(_=hi(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(E=vg,T="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(E=Eg,T="onPointerLeave",p="onPointerEnter",f="pointer"),_=m==null?d:Oi(m),g=v==null?d:Oi(v),d=new E(T,f+"leave",m,n,c),d.target=_,d.relatedTarget=g,T=null,Ur(c)===u&&(E=new E(p,f+"enter",v,n,c),E.target=g,E.relatedTarget=_,T=E),_=T,m&&v)t:{for(E=m,p=v,f=0,g=E;g;g=_i(g))f++;for(g=0,T=p;T;T=_i(T))g++;for(;0<f-g;)E=_i(E),f--;for(;0<g-f;)p=_i(p),g--;for(;f--;){if(E===p||p!==null&&E===p.alternate)break t;E=_i(E),p=_i(p)}E=null}else E=null;m!==null&&Dg(h,d,m,E,!1),v!==null&&_!==null&&Dg(h,_,v,E,!0)}}e:{if(d=u?Oi(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var k=tk;else if(Sg(d))if(J0)k=sk;else{k=rk;var C=nk}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=ik);if(k&&(k=k(t,u))){X0(h,k,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Qh(d,"number",d.value)}switch(C=u?Oi(u):window,t){case"focusin":(Sg(C)||C.contentEditable==="true")&&(Di=C,ad=u,ro=null);break;case"focusout":ro=ad=Di=null;break;case"mousedown":ld=!0;break;case"contextmenu":case"mouseup":case"dragend":ld=!1,Rg(h,n,c);break;case"selectionchange":if(lk)break;case"keydown":case"keyup":Rg(h,n,c)}var N;if(zf)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Ai?Q0(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(G0&&n.locale!=="ko"&&(Ai||D!=="onCompositionStart"?D==="onCompositionEnd"&&Ai&&(N=q0()):(ir=c,jf="value"in ir?ir.value:ir.textContent,Ai=!0)),C=Ul(u,D),0<C.length&&(D=new wg(D,t,null,n,c),h.push({event:D,listeners:C}),N?D.data=N:(N=Y0(n),N!==null&&(D.data=N)))),(N=YC?XC(t,n):JC(t,n))&&(u=Ul(u,"onBeforeInput"),0<u.length&&(c=new wg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}lw(h,e)})}function xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ul(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Eo(t,n),s!=null&&r.unshift(xo(t,s,i)),s=Eo(t,e),s!=null&&r.push(xo(t,s,i))),t=t.return}return r}function _i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Eo(n,s),l!=null&&o.unshift(xo(n,l,a))):i||(l=Eo(n,s),l!=null&&o.push(xo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var dk=/\r\n?/g,fk=/\u0000|\uFFFD/g;function Pg(t){return(typeof t=="string"?t:""+t).replace(dk,`
`).replace(fk,"")}function Wa(t,e,n){if(e=Pg(e),Pg(t)!==e&&n)throw Error(I(425))}function Fl(){}var ud=null,cd=null;function hd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dd=typeof setTimeout=="function"?setTimeout:void 0,pk=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,mk=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(t){return Og.resolve(null).then(t).catch(gk)}:dd;function gk(t){setTimeout(function(){throw t})}function Zc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),So(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);So(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Es=Math.random().toString(36).slice(2),rn="__reactFiber$"+Es,Ro="__reactProps$"+Es,Ln="__reactContainer$"+Es,fd="__reactEvents$"+Es,yk="__reactListeners$"+Es,vk="__reactHandles$"+Es;function Ur(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lg(t);t!==null;){if(n=t[rn])return n;t=Lg(t)}return e}t=n,n=t.parentNode}return null}function oa(t){return t=t[rn]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function $u(t){return t[Ro]||null}var pd=[],Li=-1;function Rr(t){return{current:t}}function se(t){0>Li||(t.current=pd[Li],pd[Li]=null,Li--)}function te(t,e){Li++,pd[Li]=t.current,t.current=e}var _r={},Ze=Rr(_r),mt=Rr(!1),Yr=_r;function rs(t,e){var n=t.type.contextTypes;if(!n)return _r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function jl(){se(mt),se(Ze)}function $g(t,e,n){if(Ze.current!==_r)throw Error(I(168));te(Ze,e),te(mt,n)}function cw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,nC(t)||"Unknown",i));return de({},n,r)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Yr=Ze.current,te(Ze,t),te(mt,mt.current),!0}function Mg(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=cw(t,e,Yr),r.__reactInternalMemoizedMergedChildContext=t,se(mt),se(Ze),te(Ze,t)):se(mt),te(mt,n)}var Sn=null,Mu=!1,eh=!1;function hw(t){Sn===null?Sn=[t]:Sn.push(t)}function wk(t){Mu=!0,hw(t)}function Nr(){if(!eh&&Sn!==null){eh=!0;var t=0,e=Z;try{var n=Sn;for(Z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sn=null,Mu=!1}catch(i){throw Sn!==null&&(Sn=Sn.slice(t+1)),M0(Mf,Nr),i}finally{Z=e,eh=!1}}return null}var $i=[],Mi=0,Vl=null,zl=0,Pt=[],Ot=0,Xr=null,kn=1,In="";function $r(t,e){$i[Mi++]=zl,$i[Mi++]=Vl,Vl=t,zl=e}function dw(t,e,n){Pt[Ot++]=kn,Pt[Ot++]=In,Pt[Ot++]=Xr,Xr=t;var r=kn;t=In;var i=32-Gt(r)-1;r&=~(1<<i),n+=1;var s=32-Gt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kn=1<<32-Gt(e)+i|n<<i|r,In=s+t}else kn=1<<s|n<<i|r,In=t}function Wf(t){t.return!==null&&($r(t,1),dw(t,1,0))}function Kf(t){for(;t===Vl;)Vl=$i[--Mi],$i[Mi]=null,zl=$i[--Mi],$i[Mi]=null;for(;t===Xr;)Xr=Pt[--Ot],Pt[Ot]=null,In=Pt[--Ot],Pt[Ot]=null,kn=Pt[--Ot],Pt[Ot]=null}var Ct=null,Tt=null,ae=!1,Wt=null;function fw(t,e){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,Tt=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,Tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:kn,overflow:In}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,Tt=null,!0):!1;default:return!1}}function md(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gd(t){if(ae){var e=Tt;if(e){var n=e;if(!bg(t,e)){if(md(t))throw Error(I(418));e=hr(n.nextSibling);var r=Ct;e&&bg(t,e)?fw(r,n):(t.flags=t.flags&-4097|2,ae=!1,Ct=t)}}else{if(md(t))throw Error(I(418));t.flags=t.flags&-4097|2,ae=!1,Ct=t}}}function Ug(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function Ka(t){if(t!==Ct)return!1;if(!ae)return Ug(t),ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hd(t.type,t.memoizedProps)),e&&(e=Tt)){if(md(t))throw pw(),Error(I(418));for(;e;)fw(t,e),e=hr(e.nextSibling)}if(Ug(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tt=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tt=null}}else Tt=Ct?hr(t.stateNode.nextSibling):null;return!0}function pw(){for(var t=Tt;t;)t=hr(t.nextSibling)}function is(){Tt=Ct=null,ae=!1}function qf(t){Wt===null?Wt=[t]:Wt.push(t)}var Ek=Vn.ReactCurrentBatchConfig;function zt(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Hl=Rr(null),Wl=null,bi=null,Gf=null;function Qf(){Gf=bi=Wl=null}function Yf(t){var e=Hl.current;se(Hl),t._currentValue=e}function yd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gi(t,e){Wl=t,Gf=bi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Ut(t){var e=t._currentValue;if(Gf!==t)if(t={context:t,memoizedValue:e,next:null},bi===null){if(Wl===null)throw Error(I(308));bi=t,Wl.dependencies={lanes:0,firstContext:t}}else bi=bi.next=t;return e}var Fr=null;function Xf(t){Fr===null?Fr=[t]:Fr.push(t)}function mw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xf(e)):(n.next=i.next,i.next=n),e.interleaved=n,$n(t,r)}function $n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qn=!1;function Jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$n(t,n)}return i=r.interleaved,i===null?(e.next=e,Xf(r)):(e.next=i.next,i.next=e),r.interleaved=e,$n(t,n)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bf(t,n)}}function Fg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Kl(t,e,n,r){var i=t.updateQueue;Qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,E=a;switch(d=e,m=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=de({},h,d);break e;case 2:Qn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=h}}function jg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var yw=new m0.Component().refs;function vd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:de({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bu={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=pr(t),s=An(r,i);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Qt(e,t,i,r),gl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=pr(t),s=An(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Qt(e,t,i,r),gl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=pr(t),i=An(n,r);i.tag=2,e!=null&&(i.callback=e),e=dr(t,i,r),e!==null&&(Qt(e,t,r,n),gl(e,t,r))}};function Bg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ko(n,r)||!ko(i,s):!0}function vw(t,e,n){var r=!1,i=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=Ut(s):(i=gt(e)?Yr:Ze.current,r=e.contextTypes,s=(r=r!=null)?rs(t,i):_r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bu.enqueueReplaceState(e,e.state,null)}function wd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=yw,Jf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ut(s):(s=gt(e)?Yr:Ze.current,i.context=rs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bu.enqueueReplaceState(i,i.state,null),Kl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===yw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function qa(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zg(t){var e=t._init;return e(t._payload)}function ww(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=mr(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,T){return f===null||f.tag!==6?(f=ah(g,p.mode,T),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,T){var k=g.type;return k===Ni?c(p,f,g.props.children,T,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Gn&&zg(k)===f.type)?(T=i(f,g.props),T.ref=Ls(p,f,g),T.return=p,T):(T=Tl(g.type,g.key,g.props,null,p.mode,T),T.ref=Ls(p,f,g),T.return=p,T)}function u(p,f,g,T){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=lh(g,p.mode,T),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,T,k){return f===null||f.tag!==7?(f=Wr(g,p.mode,T,k),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ah(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ma:return g=Tl(f.type,f.key,f.props,null,p.mode,g),g.ref=Ls(p,null,f),g.return=p,g;case Ri:return f=lh(f,p.mode,g),f.return=p,f;case Gn:var T=f._init;return h(p,T(f._payload),g)}if(Vs(f)||Ns(f))return f=Wr(f,p.mode,g,null),f.return=p,f;qa(p,f)}return null}function d(p,f,g,T){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(p,f,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ma:return g.key===k?l(p,f,g,T):null;case Ri:return g.key===k?u(p,f,g,T):null;case Gn:return k=g._init,d(p,f,k(g._payload),T)}if(Vs(g)||Ns(g))return k!==null?null:c(p,f,g,T,null);qa(p,g)}return null}function m(p,f,g,T,k){if(typeof T=="string"&&T!==""||typeof T=="number")return p=p.get(g)||null,a(f,p,""+T,k);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ma:return p=p.get(T.key===null?g:T.key)||null,l(f,p,T,k);case Ri:return p=p.get(T.key===null?g:T.key)||null,u(f,p,T,k);case Gn:var C=T._init;return m(p,f,g,C(T._payload),k)}if(Vs(T)||Ns(T))return p=p.get(g)||null,c(f,p,T,k,null);qa(f,T)}return null}function v(p,f,g,T){for(var k=null,C=null,N=f,D=f=0,H=null;N!==null&&D<g.length;D++){N.index>D?(H=N,N=null):H=N.sibling;var j=d(p,N,g[D],T);if(j===null){N===null&&(N=H);break}t&&N&&j.alternate===null&&e(p,N),f=s(j,f,D),C===null?k=j:C.sibling=j,C=j,N=H}if(D===g.length)return n(p,N),ae&&$r(p,D),k;if(N===null){for(;D<g.length;D++)N=h(p,g[D],T),N!==null&&(f=s(N,f,D),C===null?k=N:C.sibling=N,C=N);return ae&&$r(p,D),k}for(N=r(p,N);D<g.length;D++)H=m(N,p,D,g[D],T),H!==null&&(t&&H.alternate!==null&&N.delete(H.key===null?D:H.key),f=s(H,f,D),C===null?k=H:C.sibling=H,C=H);return t&&N.forEach(function(Ae){return e(p,Ae)}),ae&&$r(p,D),k}function E(p,f,g,T){var k=Ns(g);if(typeof k!="function")throw Error(I(150));if(g=k.call(g),g==null)throw Error(I(151));for(var C=k=null,N=f,D=f=0,H=null,j=g.next();N!==null&&!j.done;D++,j=g.next()){N.index>D?(H=N,N=null):H=N.sibling;var Ae=d(p,N,j.value,T);if(Ae===null){N===null&&(N=H);break}t&&N&&Ae.alternate===null&&e(p,N),f=s(Ae,f,D),C===null?k=Ae:C.sibling=Ae,C=Ae,N=H}if(j.done)return n(p,N),ae&&$r(p,D),k;if(N===null){for(;!j.done;D++,j=g.next())j=h(p,j.value,T),j!==null&&(f=s(j,f,D),C===null?k=j:C.sibling=j,C=j);return ae&&$r(p,D),k}for(N=r(p,N);!j.done;D++,j=g.next())j=m(N,p,D,j.value,T),j!==null&&(t&&j.alternate!==null&&N.delete(j.key===null?D:j.key),f=s(j,f,D),C===null?k=j:C.sibling=j,C=j);return t&&N.forEach(function(Bt){return e(p,Bt)}),ae&&$r(p,D),k}function _(p,f,g,T){if(typeof g=="object"&&g!==null&&g.type===Ni&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ma:e:{for(var k=g.key,C=f;C!==null;){if(C.key===k){if(k=g.type,k===Ni){if(C.tag===7){n(p,C.sibling),f=i(C,g.props.children),f.return=p,p=f;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Gn&&zg(k)===C.type){n(p,C.sibling),f=i(C,g.props),f.ref=Ls(p,C,g),f.return=p,p=f;break e}n(p,C);break}else e(p,C);C=C.sibling}g.type===Ni?(f=Wr(g.props.children,p.mode,T,g.key),f.return=p,p=f):(T=Tl(g.type,g.key,g.props,null,p.mode,T),T.ref=Ls(p,f,g),T.return=p,p=T)}return o(p);case Ri:e:{for(C=g.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=lh(g,p.mode,T),f.return=p,p=f}return o(p);case Gn:return C=g._init,_(p,f,C(g._payload),T)}if(Vs(g))return v(p,f,g,T);if(Ns(g))return E(p,f,g,T);qa(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=ah(g,p.mode,T),f.return=p,p=f),o(p)):n(p,f)}return _}var ss=ww(!0),Ew=ww(!1),aa={},hn=Rr(aa),No=Rr(aa),Ao=Rr(aa);function jr(t){if(t===aa)throw Error(I(174));return t}function Zf(t,e){switch(te(Ao,e),te(No,t),te(hn,aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xh(e,t)}se(hn),te(hn,e)}function os(){se(hn),se(No),se(Ao)}function _w(t){jr(Ao.current);var e=jr(hn.current),n=Xh(e,t.type);e!==n&&(te(No,t),te(hn,n))}function ep(t){No.current===t&&(se(hn),se(No))}var ce=Rr(0);function ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var th=[];function tp(){for(var t=0;t<th.length;t++)th[t]._workInProgressVersionPrimary=null;th.length=0}var yl=Vn.ReactCurrentDispatcher,nh=Vn.ReactCurrentBatchConfig,Jr=0,he=null,Ie=null,Pe=null,Gl=!1,io=!1,Do=0,_k=0;function ze(){throw Error(I(321))}function np(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xt(t[n],e[n]))return!1;return!0}function rp(t,e,n,r,i,s){if(Jr=s,he=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yl.current=t===null||t.memoizedState===null?kk:Ik,t=n(r,i),io){s=0;do{if(io=!1,Do=0,25<=s)throw Error(I(301));s+=1,Pe=Ie=null,e.updateQueue=null,yl.current=xk,t=n(r,i)}while(io)}if(yl.current=Ql,e=Ie!==null&&Ie.next!==null,Jr=0,Pe=Ie=he=null,Gl=!1,e)throw Error(I(300));return t}function ip(){var t=Do!==0;return Do=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?he.memoizedState=Pe=t:Pe=Pe.next=t,Pe}function Ft(){if(Ie===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=Pe===null?he.memoizedState:Pe.next;if(e!==null)Pe=e,Ie=t;else{if(t===null)throw Error(I(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Pe===null?he.memoizedState=Pe=t:Pe=Pe.next=t}return Pe}function Po(t,e){return typeof e=="function"?e(t):e}function rh(t){var e=Ft(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Jr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,he.lanes|=c,Zr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Xt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,he.lanes|=s,Zr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ih(t){var e=Ft(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Xt(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Tw(){}function Sw(t,e){var n=he,r=Ft(),i=e(),s=!Xt(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,sp(Iw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Oo(9,kw.bind(null,n,r,i,e),void 0,null),Oe===null)throw Error(I(349));Jr&30||Cw(n,e,i)}return i}function Cw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kw(t,e,n,r){e.value=n,e.getSnapshot=r,xw(e)&&Rw(t)}function Iw(t,e,n){return n(function(){xw(e)&&Rw(t)})}function xw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xt(t,n)}catch{return!0}}function Rw(t){var e=$n(t,1);e!==null&&Qt(e,t,1,-1)}function Hg(t){var e=nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},e.queue=t,t=t.dispatch=Ck.bind(null,he,t),[e.memoizedState,t]}function Oo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Nw(){return Ft().memoizedState}function vl(t,e,n,r){var i=nn();he.flags|=t,i.memoizedState=Oo(1|e,n,void 0,r===void 0?null:r)}function Uu(t,e,n,r){var i=Ft();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&np(r,o.deps)){i.memoizedState=Oo(e,n,s,r);return}}he.flags|=t,i.memoizedState=Oo(1|e,n,s,r)}function Wg(t,e){return vl(8390656,8,t,e)}function sp(t,e){return Uu(2048,8,t,e)}function Aw(t,e){return Uu(4,2,t,e)}function Dw(t,e){return Uu(4,4,t,e)}function Pw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ow(t,e,n){return n=n!=null?n.concat([t]):null,Uu(4,4,Pw.bind(null,e,t),n)}function op(){}function Lw(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&np(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $w(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&np(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Mw(t,e,n){return Jr&21?(Xt(n,e)||(n=F0(),he.lanes|=n,Zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function Tk(t,e){var n=Z;Z=n!==0&&4>n?n:4,t(!0);var r=nh.transition;nh.transition={};try{t(!1),e()}finally{Z=n,nh.transition=r}}function bw(){return Ft().memoizedState}function Sk(t,e,n){var r=pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Uw(t))Fw(e,n);else if(n=mw(t,e,n,r),n!==null){var i=at();Qt(n,t,r,i),jw(n,e,r)}}function Ck(t,e,n){var r=pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uw(t))Fw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Xt(a,o)){var l=e.interleaved;l===null?(i.next=i,Xf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=mw(t,e,i,r),n!==null&&(i=at(),Qt(n,t,r,i),jw(n,e,r))}}function Uw(t){var e=t.alternate;return t===he||e!==null&&e===he}function Fw(t,e){io=Gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bf(t,n)}}var Ql={readContext:Ut,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},kk={readContext:Ut,useCallback:function(t,e){return nn().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:Wg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vl(4194308,4,Pw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return vl(4,2,t,e)},useMemo:function(t,e){var n=nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Sk.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var e=nn();return t={current:t},e.memoizedState=t},useState:Hg,useDebugValue:op,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=Hg(!1),e=t[0];return t=Tk.bind(null,t[1]),nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=he,i=nn();if(ae){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Oe===null)throw Error(I(349));Jr&30||Cw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Wg(Iw.bind(null,r,s,t),[t]),r.flags|=2048,Oo(9,kw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=nn(),e=Oe.identifierPrefix;if(ae){var n=In,r=kn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Do++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_k++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ik={readContext:Ut,useCallback:Lw,useContext:Ut,useEffect:sp,useImperativeHandle:Ow,useInsertionEffect:Aw,useLayoutEffect:Dw,useMemo:$w,useReducer:rh,useRef:Nw,useState:function(){return rh(Po)},useDebugValue:op,useDeferredValue:function(t){var e=Ft();return Mw(e,Ie.memoizedState,t)},useTransition:function(){var t=rh(Po)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:Tw,useSyncExternalStore:Sw,useId:bw,unstable_isNewReconciler:!1},xk={readContext:Ut,useCallback:Lw,useContext:Ut,useEffect:sp,useImperativeHandle:Ow,useInsertionEffect:Aw,useLayoutEffect:Dw,useMemo:$w,useReducer:ih,useRef:Nw,useState:function(){return ih(Po)},useDebugValue:op,useDeferredValue:function(t){var e=Ft();return Ie===null?e.memoizedState=t:Mw(e,Ie.memoizedState,t)},useTransition:function(){var t=ih(Po)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:Tw,useSyncExternalStore:Sw,useId:bw,unstable_isNewReconciler:!1};function as(t,e){try{var n="",r=e;do n+=tC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function sh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Rk=typeof WeakMap=="function"?WeakMap:Map;function Bw(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Xl||(Xl=!0,Ad=r),Ed(t,e)},n}function Vw(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ed(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ed(t,e),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Kg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Rk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Vk.bind(null,t,e,n),e.then(t,t))}function qg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var Nk=Vn.ReactCurrentOwner,pt=!1;function it(t,e,n,r){e.child=t===null?Ew(e,null,n,r):ss(e,t.child,n,r)}function Qg(t,e,n,r,i){n=n.render;var s=e.ref;return Gi(e,i),r=rp(t,e,n,r,s,i),n=ip(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(ae&&n&&Wf(e),e.flags|=1,it(t,e,r,i),e.child)}function Yg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!pp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,zw(t,e,s,r,i)):(t=Tl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ko,n(o,r)&&t.ref===e.ref)return Mn(t,e,i)}return e.flags|=1,t=mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function zw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ko(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,Mn(t,e,i)}return _d(t,e,n,r,i)}function Hw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Fi,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,te(Fi,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,te(Fi,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,te(Fi,_t),_t|=r;return it(t,e,i,n),e.child}function Ww(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _d(t,e,n,r,i){var s=gt(n)?Yr:Ze.current;return s=rs(e,s),Gi(e,i),n=rp(t,e,n,r,s,i),r=ip(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(ae&&r&&Wf(e),e.flags|=1,it(t,e,n,i),e.child)}function Xg(t,e,n,r,i){if(gt(n)){var s=!0;Bl(e)}else s=!1;if(Gi(e,i),e.stateNode===null)wl(t,e),vw(e,n,r),wd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ut(u):(u=gt(n)?Yr:Ze.current,u=rs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Vg(e,o,r,u),Qn=!1;var d=e.memoizedState;o.state=d,Kl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||mt.current||Qn?(typeof c=="function"&&(vd(e,n,c,r),l=e.memoizedState),(a=Qn||Bg(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,gw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ut(l):(l=gt(n)?Yr:Ze.current,l=rs(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Vg(e,o,r,l),Qn=!1,d=e.memoizedState,o.state=d,Kl(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||mt.current||Qn?(typeof m=="function"&&(vd(e,n,m,r),v=e.memoizedState),(u=Qn||Bg(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Td(t,e,n,r,s,i)}function Td(t,e,n,r,i,s){Ww(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Mg(e,n,!1),Mn(t,e,s);r=e.stateNode,Nk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ss(e,t.child,null,s),e.child=ss(e,null,a,s)):it(t,e,a,s),e.memoizedState=r.state,i&&Mg(e,n,!0),e.child}function Kw(t){var e=t.stateNode;e.pendingContext?$g(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$g(t,e.context,!1),Zf(t,e.containerInfo)}function Jg(t,e,n,r,i){return is(),qf(i),e.flags|=256,it(t,e,n,r),e.child}var Sd={dehydrated:null,treeContext:null,retryLane:0};function Cd(t){return{baseLanes:t,cachePool:null,transitions:null}}function qw(t,e,n){var r=e.pendingProps,i=ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),te(ce,i&1),t===null)return gd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bu(o,r,0,null),t=Wr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cd(n),e.memoizedState=Sd,t):ap(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ak(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=mr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=mr(a,s):(s=Wr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Cd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sd,r}return s=t.child,t=s.sibling,r=mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ap(t,e){return e=Bu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ga(t,e,n,r){return r!==null&&qf(r),ss(e,t.child,null,n),t=ap(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ak(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=sh(Error(I(422))),Ga(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Bu({mode:"visible",children:r.children},i,0,null),s=Wr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ss(e,t.child,null,o),e.child.memoizedState=Cd(o),e.memoizedState=Sd,s);if(!(e.mode&1))return Ga(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=sh(s,r,void 0),Ga(t,e,o,r)}if(a=(o&t.childLanes)!==0,pt||a){if(r=Oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(t,i),Qt(r,t,i,-1))}return fp(),r=sh(Error(I(421))),Ga(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=zk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Tt=hr(i.nextSibling),Ct=e,ae=!0,Wt=null,t!==null&&(Pt[Ot++]=kn,Pt[Ot++]=In,Pt[Ot++]=Xr,kn=t.id,In=t.overflow,Xr=e),e=ap(e,r.children),e.flags|=4096,e)}function Zg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yd(t.return,e,n)}function oh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Gw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zg(t,n,e);else if(t.tag===19)Zg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(te(ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ql(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),oh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ql(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}oh(e,!0,n,null,s);break;case"together":oh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Dk(t,e,n){switch(e.tag){case 3:Kw(e),is();break;case 5:_w(e);break;case 1:gt(e.type)&&Bl(e);break;case 4:Zf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;te(Hl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(te(ce,ce.current&1),e.flags|=128,null):n&e.child.childLanes?qw(t,e,n):(te(ce,ce.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);te(ce,ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Gw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(ce,ce.current),r)break;return null;case 22:case 23:return e.lanes=0,Hw(t,e,n)}return Mn(t,e,n)}var Qw,kd,Yw,Xw;Qw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kd=function(){};Yw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,jr(hn.current);var s=null;switch(n){case"input":i=qh(t,i),r=qh(t,r),s=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),s=[];break;case"textarea":i=Yh(t,i),r=Yh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Fl)}Jh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&re("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Xw=function(t,e,n,r){n!==r&&(e.flags|=4)};function $s(t,e){if(!ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function He(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Pk(t,e,n){var r=e.pendingProps;switch(Kf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(e),null;case 1:return gt(e.type)&&jl(),He(e),null;case 3:return r=e.stateNode,os(),se(mt),se(Ze),tp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(Od(Wt),Wt=null))),kd(t,e),He(e),null;case 5:ep(e);var i=jr(Ao.current);if(n=e.type,t!==null&&e.stateNode!=null)Yw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return He(e),null}if(t=jr(hn.current),Ka(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rn]=e,r[Ro]=s,t=(e.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Hs.length;i++)re(Hs[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":lg(r,s),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},re("invalid",r);break;case"textarea":cg(r,s),re("invalid",r)}Jh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wa(r.textContent,a,t),i=["children",""+a]):vo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":ba(r),ug(r,s,!0);break;case"textarea":ba(r),hg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Fl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=C0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[Ro]=r,Qw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zh(n,r),n){case"dialog":re("cancel",t),re("close",t),i=r;break;case"iframe":case"object":case"embed":re("load",t),i=r;break;case"video":case"audio":for(i=0;i<Hs.length;i++)re(Hs[i],t);i=r;break;case"source":re("error",t),i=r;break;case"img":case"image":case"link":re("error",t),re("load",t),i=r;break;case"details":re("toggle",t),i=r;break;case"input":lg(t,r),i=qh(t,r),re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),re("invalid",t);break;case"textarea":cg(t,r),i=Yh(t,r),re("invalid",t);break;default:i=r}Jh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?x0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&k0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wo(t,l):typeof l=="number"&&wo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&re("scroll",t):l!=null&&Df(t,s,l,o))}switch(n){case"input":ba(t),ug(t,r,!1);break;case"textarea":ba(t),hg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Er(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Hi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Hi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return He(e),null;case 6:if(t&&e.stateNode!=null)Xw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=jr(Ao.current),jr(hn.current),Ka(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(s=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:Wa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return He(e),null;case 13:if(se(ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ae&&Tt!==null&&e.mode&1&&!(e.flags&128))pw(),is(),e.flags|=98560,s=!1;else if(s=Ka(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[rn]=e}else is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;He(e),s=!1}else Wt!==null&&(Od(Wt),Wt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ce.current&1?Re===0&&(Re=3):fp())),e.updateQueue!==null&&(e.flags|=4),He(e),null);case 4:return os(),kd(t,e),t===null&&Io(e.stateNode.containerInfo),He(e),null;case 10:return Yf(e.type._context),He(e),null;case 17:return gt(e.type)&&jl(),He(e),null;case 19:if(se(ce),s=e.memoizedState,s===null)return He(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)$s(s,!1);else{if(Re!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ql(t),o!==null){for(e.flags|=128,$s(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return te(ce,ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ee()>ls&&(e.flags|=128,r=!0,$s(s,!1),e.lanes=4194304)}else{if(!r)if(t=ql(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ae)return He(e),null}else 2*Ee()-s.renderingStartTime>ls&&n!==1073741824&&(e.flags|=128,r=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ee(),e.sibling=null,n=ce.current,te(ce,r?n&1|2:n&1),e):(He(e),null);case 22:case 23:return dp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(He(e),e.subtreeFlags&6&&(e.flags|=8192)):He(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function Ok(t,e){switch(Kf(e),e.tag){case 1:return gt(e.type)&&jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return os(),se(mt),se(Ze),tp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ep(e),null;case 13:if(se(ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return se(ce),null;case 4:return os(),null;case 10:return Yf(e.type._context),null;case 22:case 23:return dp(),null;case 24:return null;default:return null}}var Qa=!1,qe=!1,Lk=typeof WeakSet=="function"?WeakSet:Set,P=null;function Ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(t,e,r)}else n.current=null}function Id(t,e,n){try{n()}catch(r){pe(t,e,r)}}var ey=!1;function $k(t,e){if(ud=Ml,t=tw(),Hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cd={focusedElem:t,selectionRange:n},Ml=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,_=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?E:zt(e.type,E),_);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(T){pe(e,e.return,T)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return v=ey,ey=!1,v}function so(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Id(e,n,s)}i=i.next}while(i!==r)}}function Fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jw(t){var e=t.alternate;e!==null&&(t.alternate=null,Jw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[Ro],delete e[fd],delete e[yk],delete e[vk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zw(t){return t.tag===5||t.tag===3||t.tag===4}function ty(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fl));else if(r!==4&&(t=t.child,t!==null))for(Rd(t,e,n),t=t.sibling;t!==null;)Rd(t,e,n),t=t.sibling}function Nd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nd(t,e,n),t=t.sibling;t!==null;)Nd(t,e,n),t=t.sibling}var be=null,Ht=!1;function Wn(t,e,n){for(n=n.child;n!==null;)e1(t,e,n),n=n.sibling}function e1(t,e,n){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Du,n)}catch{}switch(n.tag){case 5:qe||Ui(n,e);case 6:var r=be,i=Ht;be=null,Wn(t,e,n),be=r,Ht=i,be!==null&&(Ht?(t=be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(Ht?(t=be,n=n.stateNode,t.nodeType===8?Zc(t.parentNode,n):t.nodeType===1&&Zc(t,n),So(t)):Zc(be,n.stateNode));break;case 4:r=be,i=Ht,be=n.stateNode.containerInfo,Ht=!0,Wn(t,e,n),be=r,Ht=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Id(n,e,o),i=i.next}while(i!==r)}Wn(t,e,n);break;case 1:if(!qe&&(Ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){pe(n,e,a)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,Wn(t,e,n),qe=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function ny(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Lk),e.forEach(function(r){var i=Hk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:be=a.stateNode,Ht=!1;break e;case 3:be=a.stateNode.containerInfo,Ht=!0;break e;case 4:be=a.stateNode.containerInfo,Ht=!0;break e}a=a.return}if(be===null)throw Error(I(160));e1(s,o,i),be=null,Ht=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){pe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)t1(e,t),e=e.sibling}function t1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),tn(t),r&4){try{so(3,t,t.return),Fu(3,t)}catch(E){pe(t,t.return,E)}try{so(5,t,t.return)}catch(E){pe(t,t.return,E)}}break;case 1:Vt(e,t),tn(t),r&512&&n!==null&&Ui(n,n.return);break;case 5:if(Vt(e,t),tn(t),r&512&&n!==null&&Ui(n,n.return),t.flags&32){var i=t.stateNode;try{wo(i,"")}catch(E){pe(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&T0(i,s),Zh(a,o);var u=Zh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?x0(i,h):c==="dangerouslySetInnerHTML"?k0(i,h):c==="children"?wo(i,h):Df(i,c,h,u)}switch(a){case"input":Gh(i,s);break;case"textarea":S0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Hi(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Hi(i,!!s.multiple,s.defaultValue,!0):Hi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ro]=s}catch(E){pe(t,t.return,E)}}break;case 6:if(Vt(e,t),tn(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){pe(t,t.return,E)}}break;case 3:if(Vt(e,t),tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{So(e.containerInfo)}catch(E){pe(t,t.return,E)}break;case 4:Vt(e,t),tn(t);break;case 13:Vt(e,t),tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(cp=Ee())),r&4&&ny(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(qe=(u=qe)||c,Vt(e,t),qe=u):Vt(e,t),tn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(P=t,c=t.child;c!==null;){for(h=P=c;P!==null;){switch(d=P,m=d.child,d.tag){case 0:case 11:case 14:case 15:so(4,d,d.return);break;case 1:Ui(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){pe(r,n,E)}}break;case 5:Ui(d,d.return);break;case 22:if(d.memoizedState!==null){iy(h);continue}}m!==null?(m.return=d,P=m):iy(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=I0("display",o))}catch(E){pe(t,t.return,E)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(E){pe(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Vt(e,t),tn(t),r&4&&ny(t);break;case 21:break;default:Vt(e,t),tn(t)}}function tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Zw(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wo(i,""),r.flags&=-33);var s=ty(t);Nd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ty(t);Rd(t,a,o);break;default:throw Error(I(161))}}catch(l){pe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Mk(t,e,n){P=t,n1(t)}function n1(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Qa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||qe;a=Qa;var u=qe;if(Qa=o,(qe=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?sy(i):l!==null?(l.return=o,P=l):sy(i);for(;s!==null;)P=s,n1(s),s=s.sibling;P=i,Qa=a,qe=u}ry(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):ry(t)}}function ry(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qe||Fu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&So(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}qe||e.flags&512&&xd(e)}catch(d){pe(e,e.return,d)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function iy(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function sy(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fu(4,e)}catch(l){pe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){pe(e,i,l)}}var s=e.return;try{xd(e)}catch(l){pe(e,s,l)}break;case 5:var o=e.return;try{xd(e)}catch(l){pe(e,o,l)}}}catch(l){pe(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var bk=Math.ceil,Yl=Vn.ReactCurrentDispatcher,lp=Vn.ReactCurrentOwner,Mt=Vn.ReactCurrentBatchConfig,Q=0,Oe=null,Ce=null,je=0,_t=0,Fi=Rr(0),Re=0,Lo=null,Zr=0,ju=0,up=0,oo=null,dt=null,cp=0,ls=1/0,Tn=null,Xl=!1,Ad=null,fr=null,Ya=!1,sr=null,Jl=0,ao=0,Dd=null,El=-1,_l=0;function at(){return Q&6?Ee():El!==-1?El:El=Ee()}function pr(t){return t.mode&1?Q&2&&je!==0?je&-je:Ek.transition!==null?(_l===0&&(_l=F0()),_l):(t=Z,t!==0||(t=window.event,t=t===void 0?16:K0(t.type)),t):1}function Qt(t,e,n,r){if(50<ao)throw ao=0,Dd=null,Error(I(185));ia(t,n,r),(!(Q&2)||t!==Oe)&&(t===Oe&&(!(Q&2)&&(ju|=n),Re===4&&Jn(t,je)),yt(t,r),n===1&&Q===0&&!(e.mode&1)&&(ls=Ee()+500,Mu&&Nr()))}function yt(t,e){var n=t.callbackNode;EC(t,e);var r=$l(t,t===Oe?je:0);if(r===0)n!==null&&pg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pg(n),e===1)t.tag===0?wk(oy.bind(null,t)):hw(oy.bind(null,t)),mk(function(){!(Q&6)&&Nr()}),n=null;else{switch(j0(r)){case 1:n=Mf;break;case 4:n=b0;break;case 16:n=Ll;break;case 536870912:n=U0;break;default:n=Ll}n=c1(n,r1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function r1(t,e){if(El=-1,_l=0,Q&6)throw Error(I(327));var n=t.callbackNode;if(Qi()&&t.callbackNode!==n)return null;var r=$l(t,t===Oe?je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Zl(t,r);else{e=r;var i=Q;Q|=2;var s=s1();(Oe!==t||je!==e)&&(Tn=null,ls=Ee()+500,Hr(t,e));do try{jk();break}catch(a){i1(t,a)}while(1);Qf(),Yl.current=s,Q=i,Ce!==null?e=0:(Oe=null,je=0,e=Re)}if(e!==0){if(e===2&&(i=id(t),i!==0&&(r=i,e=Pd(t,i))),e===1)throw n=Lo,Hr(t,0),Jn(t,r),yt(t,Ee()),n;if(e===6)Jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Uk(i)&&(e=Zl(t,r),e===2&&(s=id(t),s!==0&&(r=s,e=Pd(t,s))),e===1))throw n=Lo,Hr(t,0),Jn(t,r),yt(t,Ee()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Mr(t,dt,Tn);break;case 3:if(Jn(t,r),(r&130023424)===r&&(e=cp+500-Ee(),10<e)){if($l(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=dd(Mr.bind(null,t,dt,Tn),e);break}Mr(t,dt,Tn);break;case 4:if(Jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Gt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bk(r/1960))-r,10<r){t.timeoutHandle=dd(Mr.bind(null,t,dt,Tn),r);break}Mr(t,dt,Tn);break;case 5:Mr(t,dt,Tn);break;default:throw Error(I(329))}}}return yt(t,Ee()),t.callbackNode===n?r1.bind(null,t):null}function Pd(t,e){var n=oo;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=Zl(t,e),t!==2&&(e=dt,dt=n,e!==null&&Od(e)),t}function Od(t){dt===null?dt=t:dt.push.apply(dt,t)}function Uk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Xt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jn(t,e){for(e&=~up,e&=~ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gt(e),r=1<<n;t[n]=-1,e&=~r}}function oy(t){if(Q&6)throw Error(I(327));Qi();var e=$l(t,0);if(!(e&1))return yt(t,Ee()),null;var n=Zl(t,e);if(t.tag!==0&&n===2){var r=id(t);r!==0&&(e=r,n=Pd(t,r))}if(n===1)throw n=Lo,Hr(t,0),Jn(t,e),yt(t,Ee()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,dt,Tn),yt(t,Ee()),null}function hp(t,e){var n=Q;Q|=1;try{return t(e)}finally{Q=n,Q===0&&(ls=Ee()+500,Mu&&Nr())}}function ei(t){sr!==null&&sr.tag===0&&!(Q&6)&&Qi();var e=Q;Q|=1;var n=Mt.transition,r=Z;try{if(Mt.transition=null,Z=1,t)return t()}finally{Z=r,Mt.transition=n,Q=e,!(Q&6)&&Nr()}}function dp(){_t=Fi.current,se(Fi)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,pk(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Kf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jl();break;case 3:os(),se(mt),se(Ze),tp();break;case 5:ep(r);break;case 4:os();break;case 13:se(ce);break;case 19:se(ce);break;case 10:Yf(r.type._context);break;case 22:case 23:dp()}n=n.return}if(Oe=t,Ce=t=mr(t.current,null),je=_t=e,Re=0,Lo=null,up=ju=Zr=0,dt=oo=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fr=null}return t}function i1(t,e){do{var n=Ce;try{if(Qf(),yl.current=Ql,Gl){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gl=!1}if(Jr=0,Pe=Ie=he=null,io=!1,Do=0,lp.current=null,n===null||n.return===null){Re=1,Lo=e,Ce=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=qg(o);if(m!==null){m.flags&=-257,Gg(m,o,a,s,e),m.mode&1&&Kg(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var E=new Set;E.add(l),e.updateQueue=E}else v.add(l);break e}else{if(!(e&1)){Kg(s,u,e),fp();break e}l=Error(I(426))}}else if(ae&&a.mode&1){var _=qg(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Gg(_,o,a,s,e),qf(as(l,a));break e}}s=l=as(l,a),Re!==4&&(Re=2),oo===null?oo=[s]:oo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Bw(s,l,e);Fg(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(fr===null||!fr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var T=Vw(s,a,e);Fg(s,T);break e}}s=s.return}while(s!==null)}a1(n)}catch(k){e=k,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function s1(){var t=Yl.current;return Yl.current=Ql,t===null?Ql:t}function fp(){(Re===0||Re===3||Re===2)&&(Re=4),Oe===null||!(Zr&268435455)&&!(ju&268435455)||Jn(Oe,je)}function Zl(t,e){var n=Q;Q|=2;var r=s1();(Oe!==t||je!==e)&&(Tn=null,Hr(t,e));do try{Fk();break}catch(i){i1(t,i)}while(1);if(Qf(),Q=n,Yl.current=r,Ce!==null)throw Error(I(261));return Oe=null,je=0,Re}function Fk(){for(;Ce!==null;)o1(Ce)}function jk(){for(;Ce!==null&&!hC();)o1(Ce)}function o1(t){var e=u1(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?a1(t):Ce=e,lp.current=null}function a1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ok(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Re=6,Ce=null;return}}else if(n=Pk(n,e,_t),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);Re===0&&(Re=5)}function Mr(t,e,n){var r=Z,i=Mt.transition;try{Mt.transition=null,Z=1,Bk(t,e,n,r)}finally{Mt.transition=i,Z=r}return null}function Bk(t,e,n,r){do Qi();while(sr!==null);if(Q&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_C(t,s),t===Oe&&(Ce=Oe=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ya||(Ya=!0,c1(Ll,function(){return Qi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mt.transition,Mt.transition=null;var o=Z;Z=1;var a=Q;Q|=4,lp.current=null,$k(t,n),t1(n,t),ak(cd),Ml=!!ud,cd=ud=null,t.current=n,Mk(n),dC(),Q=a,Z=o,Mt.transition=s}else t.current=n;if(Ya&&(Ya=!1,sr=t,Jl=i),s=t.pendingLanes,s===0&&(fr=null),mC(n.stateNode),yt(t,Ee()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xl)throw Xl=!1,t=Ad,Ad=null,t;return Jl&1&&t.tag!==0&&Qi(),s=t.pendingLanes,s&1?t===Dd?ao++:(ao=0,Dd=t):ao=0,Nr(),null}function Qi(){if(sr!==null){var t=j0(Jl),e=Mt.transition,n=Z;try{if(Mt.transition=null,Z=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,Jl=0,Q&6)throw Error(I(331));var i=Q;for(Q|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:so(8,c,s)}var h=c.child;if(h!==null)h.return=c,P=h;else for(;P!==null;){c=P;var d=c.sibling,m=c.return;if(Jw(c),c===u){P=null;break}if(d!==null){d.return=m,P=d;break}P=m}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var _=E.sibling;E.sibling=null,E=_}while(E!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:so(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,P=p;break e}P=s.return}}var f=t.current;for(P=f;P!==null;){o=P;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,P=g;else e:for(o=f;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fu(9,a)}}catch(k){pe(a,a.return,k)}if(a===o){P=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,P=T;break e}P=a.return}}if(Q=i,Nr(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Du,t)}catch{}r=!0}return r}finally{Z=n,Mt.transition=e}}return!1}function ay(t,e,n){e=as(n,e),e=Bw(t,e,1),t=dr(t,e,1),e=at(),t!==null&&(ia(t,1,e),yt(t,e))}function pe(t,e,n){if(t.tag===3)ay(t,t,n);else for(;e!==null;){if(e.tag===3){ay(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){t=as(n,t),t=Vw(e,t,1),e=dr(e,t,1),t=at(),e!==null&&(ia(e,1,t),yt(e,t));break}}e=e.return}}function Vk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,Oe===t&&(je&n)===n&&(Re===4||Re===3&&(je&130023424)===je&&500>Ee()-cp?Hr(t,0):up|=n),yt(t,e)}function l1(t,e){e===0&&(t.mode&1?(e=ja,ja<<=1,!(ja&130023424)&&(ja=4194304)):e=1);var n=at();t=$n(t,e),t!==null&&(ia(t,e,n),yt(t,n))}function zk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),l1(t,n)}function Hk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),l1(t,n)}var u1;u1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,Dk(t,e,n);pt=!!(t.flags&131072)}else pt=!1,ae&&e.flags&1048576&&dw(e,zl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wl(t,e),t=e.pendingProps;var i=rs(e,Ze.current);Gi(e,n),i=rp(null,e,r,t,i,n);var s=ip();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,Bl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jf(e),i.updater=bu,e.stateNode=i,i._reactInternals=e,wd(e,r,t,n),e=Td(null,e,r,!0,s,n)):(e.tag=0,ae&&s&&Wf(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(wl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Kk(r),t=zt(r,t),i){case 0:e=_d(null,e,r,t,n);break e;case 1:e=Xg(null,e,r,t,n);break e;case 11:e=Qg(null,e,r,t,n);break e;case 14:e=Yg(null,e,r,zt(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),_d(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Xg(t,e,r,i,n);case 3:e:{if(Kw(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,gw(t,e),Kl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=as(Error(I(423)),e),e=Jg(t,e,r,n,i);break e}else if(r!==i){i=as(Error(I(424)),e),e=Jg(t,e,r,n,i);break e}else for(Tt=hr(e.stateNode.containerInfo.firstChild),Ct=e,ae=!0,Wt=null,n=Ew(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(is(),r===i){e=Mn(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return _w(e),t===null&&gd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,hd(r,i)?o=null:s!==null&&hd(r,s)&&(e.flags|=32),Ww(t,e),it(t,e,o,n),e.child;case 6:return t===null&&gd(e),null;case 13:return qw(t,e,n);case 4:return Zf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ss(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Qg(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,te(Hl,r._currentValue),r._currentValue=o,s!==null)if(Xt(s.value,o)){if(s.children===i.children&&!mt.current){e=Mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=An(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),yd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gi(e,n),i=Ut(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=zt(r,e.pendingProps),i=zt(r.type,i),Yg(t,e,r,i,n);case 15:return zw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),wl(t,e),e.tag=1,gt(r)?(t=!0,Bl(e)):t=!1,Gi(e,n),vw(e,r,i),wd(e,r,i,n),Td(null,e,r,!0,t,n);case 19:return Gw(t,e,n);case 22:return Hw(t,e,n)}throw Error(I(156,e.tag))};function c1(t,e){return M0(t,e)}function Wk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,n,r){return new Wk(t,e,n,r)}function pp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Kk(t){if(typeof t=="function")return pp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Of)return 11;if(t===Lf)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=$t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")pp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ni:return Wr(n.children,i,s,e);case Pf:o=8,i|=8;break;case zh:return t=$t(12,n,e,i|2),t.elementType=zh,t.lanes=s,t;case Hh:return t=$t(13,n,e,i),t.elementType=Hh,t.lanes=s,t;case Wh:return t=$t(19,n,e,i),t.elementType=Wh,t.lanes=s,t;case w0:return Bu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y0:o=10;break e;case v0:o=9;break e;case Of:o=11;break e;case Lf:o=14;break e;case Gn:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=$t(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wr(t,e,n,r){return t=$t(7,t,r,e),t.lanes=n,t}function Bu(t,e,n,r){return t=$t(22,t,r,e),t.elementType=w0,t.lanes=n,t.stateNode={isHidden:!1},t}function ah(t,e,n){return t=$t(6,t,null,e),t.lanes=n,t}function lh(t,e,n){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vc(0),this.expirationTimes=Vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mp(t,e,n,r,i,s,o,a,l){return t=new qk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$t(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jf(s),t}function Gk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function h1(t){if(!t)return _r;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(gt(n))return cw(t,n,e)}return e}function d1(t,e,n,r,i,s,o,a,l){return t=mp(n,r,!0,t,i,s,o,a,l),t.context=h1(null),n=t.current,r=at(),i=pr(n),s=An(r,i),s.callback=e??null,dr(n,s,i),t.current.lanes=i,ia(t,i,r),yt(t,r),t}function Vu(t,e,n,r){var i=e.current,s=at(),o=pr(i);return n=h1(n),e.context===null?e.context=n:e.pendingContext=n,e=An(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=dr(i,e,o),t!==null&&(Qt(t,i,o,s),gl(t,i,o)),o}function eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ly(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gp(t,e){ly(t,e),(t=t.alternate)&&ly(t,e)}function Qk(){return null}var f1=typeof reportError=="function"?reportError:function(t){console.error(t)};function yp(t){this._internalRoot=t}zu.prototype.render=yp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Vu(t,e,null,null)};zu.prototype.unmount=yp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ei(function(){Vu(null,t,null,null)}),e[Ln]=null}};function zu(t){this._internalRoot=t}zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=z0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xn.length&&e!==0&&e<Xn[n].priority;n++);Xn.splice(n,0,t),n===0&&W0(t)}};function vp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uy(){}function Yk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=eu(o);s.call(u)}}var o=d1(e,r,t,0,null,!1,!1,"",uy);return t._reactRootContainer=o,t[Ln]=o.current,Io(t.nodeType===8?t.parentNode:t),ei(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=eu(l);a.call(u)}}var l=mp(t,0,!1,null,null,!1,!1,"",uy);return t._reactRootContainer=l,t[Ln]=l.current,Io(t.nodeType===8?t.parentNode:t),ei(function(){Vu(e,l,n,r)}),l}function Wu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=eu(o);a.call(l)}}Vu(e,o,t,i)}else o=Yk(n,e,t,i,r);return eu(o)}B0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zs(e.pendingLanes);n!==0&&(bf(e,n|1),yt(e,Ee()),!(Q&6)&&(ls=Ee()+500,Nr()))}break;case 13:ei(function(){var r=$n(t,1);if(r!==null){var i=at();Qt(r,t,1,i)}}),gp(t,1)}};Uf=function(t){if(t.tag===13){var e=$n(t,134217728);if(e!==null){var n=at();Qt(e,t,134217728,n)}gp(t,134217728)}};V0=function(t){if(t.tag===13){var e=pr(t),n=$n(t,e);if(n!==null){var r=at();Qt(n,t,e,r)}gp(t,e)}};z0=function(){return Z};H0=function(t,e){var n=Z;try{return Z=t,e()}finally{Z=n}};td=function(t,e,n){switch(e){case"input":if(Gh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=$u(r);if(!i)throw Error(I(90));_0(r),Gh(r,i)}}}break;case"textarea":S0(t,n);break;case"select":e=n.value,e!=null&&Hi(t,!!n.multiple,e,!1)}};A0=hp;D0=ei;var Xk={usingClientEntryPoint:!1,Events:[oa,Oi,$u,R0,N0,hp]},Ms={findFiberByHostInstance:Ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Jk={bundleType:Ms.bundleType,version:Ms.version,rendererPackageName:Ms.rendererPackageName,rendererConfig:Ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=L0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ms.findFiberByHostInstance||Qk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{Du=Xa.inject(Jk),cn=Xa}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xk;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vp(e))throw Error(I(200));return Gk(t,e,null,n)};Rt.createRoot=function(t,e){if(!vp(t))throw Error(I(299));var n=!1,r="",i=f1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=mp(t,1,!1,null,null,n,!1,r,i),t[Ln]=e.current,Io(t.nodeType===8?t.parentNode:t),new yp(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=L0(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return ei(t)};Rt.hydrate=function(t,e,n){if(!Hu(e))throw Error(I(200));return Wu(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!vp(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=f1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=d1(e,null,t,1,n??null,i,!1,s,o),t[Ln]=e.current,Io(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new zu(e)};Rt.render=function(t,e,n){if(!Hu(e))throw Error(I(200));return Wu(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!Hu(t))throw Error(I(40));return t._reactRootContainer?(ei(function(){Wu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};Rt.unstable_batchedUpdates=hp;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hu(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Wu(t,e,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";function p1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p1)}catch(t){console.error(t)}}p1(),d0.exports=Rt;var m1=d0.exports;const ji=Nu(m1);var cy=m1;Bh.createRoot=cy.createRoot,Bh.hydrateRoot=cy.hydrateRoot;/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$o.apply(this,arguments)}var or;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(or||(or={}));const hy="popstate";function Zk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Ld("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:tu(i)}return tI(e,n,null,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function wp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function eI(){return Math.random().toString(36).substr(2,8)}function dy(t,e){return{usr:t.state,key:t.key,idx:e}}function Ld(t,e,n,r){return n===void 0&&(n=null),$o({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_s(e):e,{state:n,key:e&&e.key||r||eI()})}function tu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _s(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function tI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=or.Pop,l=null,u=c();u==null&&(u=0,o.replaceState($o({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=or.Pop;let _=c(),p=_==null?null:_-u;u=_,l&&l({action:a,location:E.location,delta:p})}function d(_,p){a=or.Push;let f=Ld(E.location,_,p);n&&n(f,_),u=c()+1;let g=dy(f,u),T=E.createHref(f);try{o.pushState(g,"",T)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(T)}s&&l&&l({action:a,location:E.location,delta:1})}function m(_,p){a=or.Replace;let f=Ld(E.location,_,p);n&&n(f,_),u=c();let g=dy(f,u),T=E.createHref(f);o.replaceState(g,"",T),s&&l&&l({action:a,location:E.location,delta:0})}function v(_){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof _=="string"?_:tu(_);return ke(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let E={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(hy,h),l=_,()=>{i.removeEventListener(hy,h),l=null}},createHref(_){return e(i,_)},createURL:v,encodeLocation(_){let p=v(_);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(_){return o.go(_)}};return E}var fy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(fy||(fy={}));function nI(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?_s(e):e,i=Ep(r.pathname||"/",n);if(i==null)return null;let s=g1(t);rI(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=dI(s[a],mI(i));return o}function g1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ke(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=gr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),g1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:cI(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of y1(s.path))i(s,o,l)}),e}function y1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=y1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function rI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:hI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const iI=/^:\w+$/,sI=3,oI=2,aI=1,lI=10,uI=-2,py=t=>t==="*";function cI(t,e){let n=t.split("/"),r=n.length;return n.some(py)&&(r+=uI),e&&(r+=oI),n.filter(i=>!py(i)).reduce((i,s)=>i+(iI.test(s)?sI:s===""?aI:lI),r)}function hI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function dI(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=fI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:gr([i,c.pathname]),pathnameBase:wI(gr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=gr([i,c.pathnameBase]))}return s}function fI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=pI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=gI(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function pI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),wp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function mI(t){try{return decodeURI(t)}catch(e){return wp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function gI(t,e){try{return decodeURIComponent(t)}catch(n){return wp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ep(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function yI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?_s(t):t;return{pathname:n?n.startsWith("/")?n:vI(n,e):e,search:EI(r),hash:_I(i)}}function vI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function uh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function v1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function w1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=_s(t):(i=$o({},t),ke(!i.pathname||!i.pathname.includes("?"),uh("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),uh("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),uh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=yI(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const gr=t=>t.join("/").replace(/\/\/+/g,"/"),wI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),EI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_I=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function TI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const E1=["post","put","patch","delete"];new Set(E1);const SI=["get",...E1];new Set(SI);/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nu(){return nu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nu.apply(this,arguments)}const _p=y.createContext(null),CI=y.createContext(null),Ts=y.createContext(null),Ku=y.createContext(null),di=y.createContext({outlet:null,matches:[],isDataRoute:!1}),_1=y.createContext(null);function kI(t,e){let{relative:n}=e===void 0?{}:e;la()||ke(!1);let{basename:r,navigator:i}=y.useContext(Ts),{hash:s,pathname:o,search:a}=S1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:gr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function la(){return y.useContext(Ku)!=null}function ua(){return la()||ke(!1),y.useContext(Ku).location}function T1(t){y.useContext(Ts).static||y.useLayoutEffect(t)}function fi(){let{isDataRoute:t}=y.useContext(di);return t?UI():II()}function II(){la()||ke(!1);let t=y.useContext(_p),{basename:e,navigator:n}=y.useContext(Ts),{matches:r}=y.useContext(di),{pathname:i}=ua(),s=JSON.stringify(v1(r).map(l=>l.pathnameBase)),o=y.useRef(!1);return T1(()=>{o.current=!0}),y.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=w1(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:gr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function S1(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=y.useContext(di),{pathname:i}=ua(),s=JSON.stringify(v1(r).map(o=>o.pathnameBase));return y.useMemo(()=>w1(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function xI(t,e){return RI(t,e)}function RI(t,e,n){la()||ke(!1);let{navigator:r}=y.useContext(Ts),{matches:i}=y.useContext(di),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=ua(),u;if(e){var c;let E=typeof e=="string"?_s(e):e;a==="/"||(c=E.pathname)!=null&&c.startsWith(a)||ke(!1),u=E}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=nI(t,{pathname:d}),v=OI(m&&m.map(E=>Object.assign({},E,{params:Object.assign({},o,E.params),pathname:gr([a,r.encodeLocation?r.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:gr([a,r.encodeLocation?r.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),i,n);return e&&v?y.createElement(Ku.Provider,{value:{location:nu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:or.Pop}},v):v}function NI(){let t=bI(),e=TI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},e),n?y.createElement("pre",{style:i},n):null,s)}const AI=y.createElement(NI,null);class DI extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?y.createElement(di.Provider,{value:this.props.routeContext},y.createElement(_1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function PI(t){let{routeContext:e,match:n,children:r}=t,i=y.useContext(_p);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(di.Provider,{value:e},r)}function OI(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ke(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||AI);let d=e.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=h:l.route.Component?v=y.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,y.createElement(PI,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?y.createElement(DI,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var $d;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})($d||($d={}));var Mo;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Mo||(Mo={}));function LI(t){let e=y.useContext(_p);return e||ke(!1),e}function $I(t){let e=y.useContext(CI);return e||ke(!1),e}function MI(t){let e=y.useContext(di);return e||ke(!1),e}function C1(t){let e=MI(),n=e.matches[e.matches.length-1];return n.route.id||ke(!1),n.route.id}function bI(){var t;let e=y.useContext(_1),n=$I(Mo.UseRouteError),r=C1(Mo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function UI(){let{router:t}=LI($d.UseNavigateStable),e=C1(Mo.UseNavigateStable),n=y.useRef(!1);return T1(()=>{n.current=!0}),y.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,nu({fromRouteId:e},s)))},[t,e])}function qn(t){ke(!1)}function FI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=or.Pop,navigator:s,static:o=!1}=t;la()&&ke(!1);let a=e.replace(/^\/*/,"/"),l=y.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=_s(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,v=y.useMemo(()=>{let E=Ep(u,a);return E==null?null:{location:{pathname:E,search:c,hash:h,state:d,key:m},navigationType:i}},[a,u,c,h,d,m,i]);return v==null?null:y.createElement(Ts.Provider,{value:l},y.createElement(Ku.Provider,{children:n,value:v}))}function jI(t){let{children:e,location:n}=t;return xI(Md(e),n)}var my;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(my||(my={}));new Promise(()=>{});function Md(t,e){e===void 0&&(e=[]);let n=[];return y.Children.forEach(t,(r,i)=>{if(!y.isValidElement(r))return;let s=[...e,i];if(r.type===y.Fragment){n.push.apply(n,Md(r.props.children,s));return}r.type!==qn&&ke(!1),!r.props.index||!r.props.children||ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Md(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bd(){return bd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bd.apply(this,arguments)}function BI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function VI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function zI(t,e){return t.button===0&&(!e||e==="_self")&&!VI(t)}const HI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],gy="startTransition";function WI(t){let{basename:e,children:n,window:r}=t,i=y.useRef();i.current==null&&(i.current=Zk({window:r,v5Compat:!0}));let s=i.current,[o,a]=y.useState({action:s.action,location:s.location}),l=y.useCallback(u=>{gy in ig?ig[gy](()=>a(u)):a(u)},[a]);return y.useLayoutEffect(()=>s.listen(l),[s,l]),y.createElement(FI,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const KI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kr=y.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=BI(e,HI),{basename:d}=y.useContext(Ts),m,v=!1;if(typeof u=="string"&&qI.test(u)&&(m=u,KI))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),T=Ep(g.pathname,d);g.origin===f.origin&&T!=null?u=T+g.search+g.hash:v=!0}catch{}let E=kI(u,{relative:i}),_=GI(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||_(f)}return y.createElement("a",bd({},h,{href:m||E,onClick:v||s?r:p,ref:n,target:l}))});var yy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(yy||(yy={}));var vy;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vy||(vy={}));function GI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=fi(),l=ua(),u=S1(t,{relative:o});return y.useCallback(c=>{if(zI(c,n)){c.preventDefault();let h=r!==void 0?r:tu(l)===tu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},QI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},I1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(k1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new YI;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class YI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XI=function(t){const e=k1(t);return I1.encodeByteArray(e,!0)},ru=function(t){return XI(t).replace(/\./g,"")},x1=function(t){try{return I1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=()=>JI().__FIREBASE_DEFAULTS__,ex=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&x1(t[1]);return e&&JSON.parse(e)},qu=()=>{try{return ZI()||ex()||tx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},R1=t=>{var e,n;return(n=(e=qu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},N1=t=>{const e=R1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},A1=()=>{var t;return(t=qu())===null||t===void 0?void 0:t.config},D1=t=>{var e;return(e=qu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ru(JSON.stringify(n)),ru(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function ix(){var t;const e=(t=qu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ox(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ax(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lx(){try{return typeof indexedDB=="object"}catch{return!1}}function ux(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cx,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ca.prototype.create)}}class ca{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vn(i,a,r)}}function hx(t,e){return t.replace(dx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dx=/\{\$([^}]+)}/g;function fx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function iu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(wy(s)&&wy(o)){if(!iu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function px(t,e){const n=new mx(t,e);return n.subscribe.bind(n)}class mx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ch),i.error===void 0&&(i.error=ch),i.complete===void 0&&(i.complete=ch);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ch(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t){return t&&t._delegate?t._delegate:t}class Tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new nx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wx(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vx(t){return t===br?void 0:t}function wx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const _x={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Tx=Y.INFO,Sx={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Cx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Sx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tp{constructor(e){this.name=e,this._logLevel=Tx,this._logHandler=Cx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_x[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const kx=(t,e)=>e.some(n=>t instanceof n);let Ey,_y;function Ix(){return Ey||(Ey=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xx(){return _y||(_y=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const O1=new WeakMap,Ud=new WeakMap,L1=new WeakMap,hh=new WeakMap,Sp=new WeakMap;function Rx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&O1.set(n,t)}).catch(()=>{}),Sp.set(e,t),e}function Nx(t){if(Ud.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ud.set(t,e)}let Fd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ud.get(t);if(e==="objectStoreNames")return t.objectStoreNames||L1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ax(t){Fd=t(Fd)}function Dx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dh(this),e,...n);return L1.set(r,e.sort?e.sort():[e]),yr(r)}:xx().includes(t)?function(...e){return t.apply(dh(this),e),yr(O1.get(this))}:function(...e){return yr(t.apply(dh(this),e))}}function Px(t){return typeof t=="function"?Dx(t):(t instanceof IDBTransaction&&Nx(t),kx(t,Ix())?new Proxy(t,Fd):t)}function yr(t){if(t instanceof IDBRequest)return Rx(t);if(hh.has(t))return hh.get(t);const e=Px(t);return e!==t&&(hh.set(t,e),Sp.set(e,t)),e}const dh=t=>Sp.get(t);function Ox(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=yr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yr(o.result),l.oldVersion,l.newVersion,yr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Lx=["get","getKey","getAll","getAllKeys","count"],$x=["put","add","delete","clear"],fh=new Map;function Ty(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fh.get(e))return fh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$x.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Lx.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return fh.set(e,s),s}Ax(t=>({...t,get:(e,n,r)=>Ty(e,n)||t.get(e,n,r),has:(e,n)=>!!Ty(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jd="@firebase/app",Sy="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Tp("@firebase/app"),Ux="@firebase/app-compat",Fx="@firebase/analytics-compat",jx="@firebase/analytics",Bx="@firebase/app-check-compat",Vx="@firebase/app-check",zx="@firebase/auth",Hx="@firebase/auth-compat",Wx="@firebase/database",Kx="@firebase/database-compat",qx="@firebase/functions",Gx="@firebase/functions-compat",Qx="@firebase/installations",Yx="@firebase/installations-compat",Xx="@firebase/messaging",Jx="@firebase/messaging-compat",Zx="@firebase/performance",eR="@firebase/performance-compat",tR="@firebase/remote-config",nR="@firebase/remote-config-compat",rR="@firebase/storage",iR="@firebase/storage-compat",sR="@firebase/firestore",oR="@firebase/firestore-compat",aR="firebase",lR="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="[DEFAULT]",uR={[jd]:"fire-core",[Ux]:"fire-core-compat",[jx]:"fire-analytics",[Fx]:"fire-analytics-compat",[Vx]:"fire-app-check",[Bx]:"fire-app-check-compat",[zx]:"fire-auth",[Hx]:"fire-auth-compat",[Wx]:"fire-rtdb",[Kx]:"fire-rtdb-compat",[qx]:"fire-fn",[Gx]:"fire-fn-compat",[Qx]:"fire-iid",[Yx]:"fire-iid-compat",[Xx]:"fire-fcm",[Jx]:"fire-fcm-compat",[Zx]:"fire-perf",[eR]:"fire-perf-compat",[tR]:"fire-rc",[nR]:"fire-rc-compat",[rR]:"fire-gcs",[iR]:"fire-gcs-compat",[sR]:"fire-fst",[oR]:"fire-fst-compat","fire-js":"fire-js",[aR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=new Map,Vd=new Map;function cR(t,e){try{t.container.addComponent(e)}catch(n){ti.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ni(t){const e=t.name;if(Vd.has(e))return ti.debug(`There were multiple attempts to register component ${e}.`),!1;Vd.set(e,t);for(const n of su.values())cR(n,t);return!0}function Gu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vr=new ca("app","Firebase",hR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=lR;function $1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=A1()),!n)throw vr.create("no-options");const s=su.get(i);if(s){if(iu(n,s.options)&&iu(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new Ex(i);for(const l of Vd.values())o.addComponent(l);const a=new dR(n,r,o);return su.set(i,a),a}function Cp(t=Bd){const e=su.get(t);if(!e&&t===Bd&&A1())return $1();if(!e)throw vr.create("no-app",{appName:t});return e}function dn(t,e,n){var r;let i=(r=uR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ti.warn(a.join(" "));return}ni(new Tr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR="firebase-heartbeat-database",pR=1,bo="firebase-heartbeat-store";let ph=null;function M1(){return ph||(ph=Ox(fR,pR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bo)}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),ph}async function mR(t){try{return await(await M1()).transaction(bo).objectStore(bo).get(b1(t))}catch(e){if(e instanceof vn)ti.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ti.warn(n.message)}}}async function Cy(t,e){try{const r=(await M1()).transaction(bo,"readwrite");await r.objectStore(bo).put(e,b1(t)),await r.done}catch(n){if(n instanceof vn)ti.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ti.warn(r.message)}}}function b1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=1024,yR=30*24*60*60*1e3;class vR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ER(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ky();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=yR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ky(),{heartbeatsToSend:n,unsentEntries:r}=wR(this._heartbeatsCache.heartbeats),i=ru(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ky(){return new Date().toISOString().substring(0,10)}function wR(t,e=gR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Iy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Iy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ER{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lx()?ux().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await mR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Iy(t){return ru(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(t){ni(new Tr("platform-logger",e=>new Mx(e),"PRIVATE")),ni(new Tr("heartbeat",e=>new vR(e),"PRIVATE")),dn(jd,Sy,t),dn(jd,Sy,"esm2017"),dn("fire-js","")}_R("");var TR="firebase",SR="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn(TR,SR,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="firebasestorage.googleapis.com",F1="storageBucket",CR=2*60*1e3,kR=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends vn{constructor(e,n,r=0){super(mh(e),`Firebase Storage: ${n} (${mh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return mh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var me;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(me||(me={}));function mh(t){return"storage/"+t}function kp(){const t="An unknown error occurred, please check the error payload for server response.";return new ye(me.UNKNOWN,t)}function IR(t){return new ye(me.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function xR(t){return new ye(me.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function RR(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ye(me.UNAUTHENTICATED,t)}function NR(){return new ye(me.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function AR(t){return new ye(me.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function DR(){return new ye(me.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function PR(){return new ye(me.CANCELED,"User canceled the upload/download.")}function OR(t){return new ye(me.INVALID_URL,"Invalid URL '"+t+"'.")}function LR(t){return new ye(me.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function $R(){return new ye(me.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+F1+"' property when initializing the app?")}function MR(){return new ye(me.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function bR(){return new ye(me.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function UR(t){return new ye(me.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function zd(t){return new ye(me.INVALID_ARGUMENT,t)}function j1(){return new ye(me.APP_DELETED,"The Firebase app was deleted.")}function FR(t){return new ye(me.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function lo(t,e){return new ye(me.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function bs(t){throw new ye(me.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=st.makeFromUrl(e,n)}catch{return new st(e,"")}if(r.path==="")return r;throw LR(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(T){T.path_=decodeURIComponent(T.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},E=n===U1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",p=new RegExp(`^https?://${E}/${i}/${_}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:m,indices:v,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let T=0;T<g.length;T++){const k=g[T],C=k.regex.exec(e);if(C){const N=C[k.indices.bucket];let D=C[k.indices.path];D||(D=""),r=new st(N,D),k.postModify(r);break}}if(r==null)throw OR(e);return r}}class jR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(..._){u||(u=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(m,l())},_)}function d(){s&&clearTimeout(s)}function m(_,...p){if(u){d();return}if(_){d(),c.call(null,_,...p);return}if(l()||o){d(),c.call(null,_,...p);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let v=!1;function E(_){v||(v=!0,d(),!u&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,E(!0)},n),E}function VR(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(t){return t!==void 0}function HR(t){return typeof t=="object"&&!Array.isArray(t)}function Ip(t){return typeof t=="string"||t instanceof String}function xy(t){return xp()&&t instanceof Blob}function xp(){return typeof Blob<"u"&&!ix()}function Hd(t,e,n,r){if(r<e)throw zd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw zd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function B1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(qr||(qr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,v)=>{this.resolve_=m,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ja(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===qr.NO_ERROR,l=s.getStatus();if(!a||WR(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===qr.ABORT;r(!1,new Ja(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ja(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());zR(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=kp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?j1():PR();o(l)}else{const l=DR();o(l)}};this.canceled_?n(!1,new Ja(!1,null,!0)):this.backoffId_=BR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&VR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ja{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function qR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function GR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function QR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function YR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function XR(t,e,n,r,i,s,o=!0){const a=B1(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return QR(u,e),qR(u,n),GR(u,s),YR(u,r),new KR(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ZR(...t){const e=JR();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(xp())return new Blob(t);throw new ye(me.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function eN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(t){if(typeof atob>"u")throw UR("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gh{constructor(e,n){this.data=e,this.contentType=n||null}}function nN(t,e){switch(t){case an.RAW:return new gh(V1(e));case an.BASE64:case an.BASE64URL:return new gh(z1(t,e));case an.DATA_URL:return new gh(iN(e),sN(e))}throw kp()}function V1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function rN(t){let e;try{e=decodeURIComponent(t)}catch{throw lo(an.DATA_URL,"Malformed data URL.")}return V1(e)}function z1(t,e){switch(t){case an.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw lo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case an.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw lo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=tN(e)}catch(i){throw i.message.includes("polyfill")?i:lo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class H1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw lo(an.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=oN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function iN(t){const e=new H1(t);return e.base64?z1(an.BASE64,e.rest):rN(e.rest)}function sN(t){return new H1(t).contentType}function oN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){let r=0,i="";xy(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(xy(this.data_)){const r=this.data_,i=eN(r,e,n);return i===null?null:new Zn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Zn(r,!0)}}static getBlob(...e){if(xp()){const n=e.map(r=>r instanceof Zn?r.data_:r);return new Zn(ZR.apply(null,n))}else{const n=e.map(o=>Ip(o)?nN(an.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Zn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){let e;try{e=JSON.parse(t)}catch{return null}return HR(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function lN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function W1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(t,e){return e}class rt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||uN}}let Za=null;function cN(t){return!Ip(t)||t.length<2?t:W1(t)}function K1(){if(Za)return Za;const t=[];t.push(new rt("bucket")),t.push(new rt("generation")),t.push(new rt("metageneration")),t.push(new rt("name","fullPath",!0));function e(s,o){return cN(o)}const n=new rt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new rt("size");return i.xform=r,t.push(i),t.push(new rt("timeCreated")),t.push(new rt("updated")),t.push(new rt("md5Hash",null,!0)),t.push(new rt("cacheControl",null,!0)),t.push(new rt("contentDisposition",null,!0)),t.push(new rt("contentEncoding",null,!0)),t.push(new rt("contentLanguage",null,!0)),t.push(new rt("contentType",null,!0)),t.push(new rt("metadata","customMetadata",!0)),Za=t,Za}function hN(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new st(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function dN(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return hN(r,t),r}function q1(t,e,n){const r=Rp(e);return r===null?null:dN(t,r,n)}function fN(t,e,n,r){const i=Rp(e);if(i===null||!Ip(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),m=da(d,n,r),v=B1({alt:"media",token:u});return m+v})[0]}function pN(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="prefixes",Ny="items";function mN(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Ry])for(const i of n[Ry]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new st(e,s));r.prefixes.push(o)}if(n[Ny])for(const i of n[Ny]){const s=t._makeStorageReference(new st(e,i.name));r.items.push(s)}return r}function gN(t,e,n){const r=Rp(n);return r===null?null:mN(t,e,r)}class Qu{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t){if(!t)throw kp()}function yN(t,e){function n(r,i){const s=q1(t,i,e);return Np(s!==null),s}return n}function vN(t,e){function n(r,i){const s=gN(t,e,i);return Np(s!==null),s}return n}function wN(t,e){function n(r,i){const s=q1(t,i,e);return Np(s!==null),fN(s,i,t.host,t._protocol)}return n}function Ap(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=NR():i=RR():n.getStatus()===402?i=xR(t.bucket):n.getStatus()===403?i=AR(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function G1(t){const e=Ap(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=IR(t.path)),s.serverResponse=i.serverResponse,s}return n}function EN(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=da(o,t.host,t._protocol),l="GET",u=t.maxOperationRetryTime,c=new Qu(a,l,vN(t,e.bucket),u);return c.urlParams=s,c.errorHandler=Ap(e),c}function _N(t,e,n){const r=e.fullServerUrl(),i=da(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Qu(i,s,wN(t,n),o);return a.errorHandler=G1(e),a}function TN(t,e){const n=e.fullServerUrl(),r=da(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new Qu(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=G1(e),a}function SN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function CN(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=SN(null,e)),r}function kN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let T=0;T<2;T++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=CN(e,r,i),c=pN(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",m=Zn.getBlob(h,r,d);if(m===null)throw MR();const v={name:u.fullPath},E=da(s,t.host,t._protocol),_="POST",p=t.maxUploadRetryTime,f=new Qu(E,_,yN(t,n),p);return f.urlParams=v,f.headers=o,f.body=m.uploadData(),f.errorHandler=Ap(e),f}class IN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=qr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=qr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=qr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw bs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw bs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw bs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw bs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw bs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xN extends IN{initXhr(){this.xhr_.responseType="text"}}function Yu(){return new xN}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this._service=e,n instanceof st?this._location=n:this._location=st.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ri(e,n)}get root(){const e=new st(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return W1(this._location.path)}get storage(){return this._service}get parent(){const e=aN(this._location.path);if(e===null)return null;const n=new st(this._location.bucket,e);return new ri(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw FR(e)}}function RN(t,e,n){t._throwIfRoot("uploadBytes");const r=kN(t.storage,t._location,K1(),new Zn(e,!0),n);return t.storage.makeRequestWithTokens(r,Yu).then(i=>({metadata:i,ref:t}))}function NN(t){const e={prefixes:[],items:[]};return Q1(t,e).then(()=>e)}async function Q1(t,e,n){const i=await AN(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await Q1(t,e,i.nextPageToken)}function AN(t,e){e!=null&&typeof e.maxResults=="number"&&Hd("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=EN(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Yu)}function DN(t){t._throwIfRoot("getDownloadURL");const e=_N(t.storage,t._location,K1());return t.storage.makeRequestWithTokens(e,Yu).then(n=>{if(n===null)throw bR();return n})}function PN(t){t._throwIfRoot("deleteObject");const e=TN(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Yu)}function ON(t,e){const n=lN(t._location.path,e),r=new st(t._location.bucket,n);return new ri(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(t){return/^[A-Za-z]+:\/\//.test(t)}function $N(t,e){return new ri(t,e)}function Y1(t,e){if(t instanceof Dp){const n=t;if(n._bucket==null)throw $R();const r=new ri(n,n._bucket);return e!=null?Y1(r,e):r}else return e!==void 0?ON(t,e):t}function MN(t,e){if(e&&LN(e)){if(t instanceof Dp)return $N(t,e);throw zd("To use ref(service, url), the first argument must be a Storage instance.")}else return Y1(t,e)}function Ay(t,e){const n=e==null?void 0:e[F1];return n==null?null:st.makeFromBucketSpec(n,t)}function bN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:P1(i,t.app.options.projectId))}class Dp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=U1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CR,this._maxUploadRetryTime=kR,this._requests=new Set,i!=null?this._bucket=st.makeFromBucketSpec(i,this._host):this._bucket=Ay(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=st.makeFromBucketSpec(this._url,e):this._bucket=Ay(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ri(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new jR(j1());{const o=XR(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Dy="@firebase/storage",Py="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="storage";function UN(t,e,n){return t=ue(t),RN(t,e,n)}function ou(t){return t=ue(t),NN(t)}function au(t){return t=ue(t),DN(t)}function FN(t){return t=ue(t),PN(t)}function uo(t,e){return t=ue(t),MN(t,e)}function jN(t=Cp(),e){t=ue(t);const r=Gu(t,X1).getImmediate({identifier:e}),i=N1("storage");return i&&BN(r,...i),r}function BN(t,e,n,r={}){bN(t,e,n,r)}function VN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Dp(n,r,i,e,pi)}function zN(){ni(new Tr(X1,VN,"PUBLIC").setMultipleInstances(!0)),dn(Dy,Py,""),dn(Dy,Py,"esm2017")}zN();function Pp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function J1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HN=J1,Z1=new ca("auth","Firebase",J1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=new Tp("@firebase/auth");function WN(t,...e){lu.logLevel<=Y.WARN&&lu.warn(`Auth (${pi}): ${t}`,...e)}function Sl(t,...e){lu.logLevel<=Y.ERROR&&lu.error(`Auth (${pi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw Op(t,...e)}function fn(t,...e){return Op(t,...e)}function KN(t,e,n){const r=Object.assign(Object.assign({},HN()),{[e]:n});return new ca("auth","Firebase",r).create(e,{appName:t.name})}function Op(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Z1.create(t,...e)}function M(t,e,...n){if(!t)throw Op(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sl(e),new Error(e)}function bn(t,e){t||xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qN(){return Oy()==="http:"||Oy()==="https:"}function Oy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qN()||sx()||"connection"in navigator)?navigator.onLine:!0}function QN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=rx()||ox()}get(){return GN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=new fa(3e4,6e4);function mi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gi(t,e,n,r,i={}){return tE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ha(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),eE.fetch()(nE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function tE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},YN),e);try{const i=new JN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw el(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw el(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw el(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw el(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw KN(t,c,u);Jt(t,c)}}catch(i){if(i instanceof vn)throw i;Jt(t,"network-request-failed",{message:String(i)})}}async function pa(t,e,n,r,i={}){const s=await gi(t,e,n,r,i);return"mfaPendingCredential"in s&&Jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function nE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Lp(t.config,i):`${t.config.apiScheme}://${i}`}class JN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),XN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function el(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZN(t,e){return gi(t,"POST","/v1/accounts:delete",e)}async function eA(t,e){return gi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tA(t,e=!1){const n=ue(t),r=await n.getIdToken(e),i=$p(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:co(yh(i.auth_time)),issuedAtTime:co(yh(i.iat)),expirationTime:co(yh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yh(t){return Number(t)*1e3}function $p(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Sl("JWT malformed, contained fewer than 3 sections"),null;try{const i=x1(n);return i?JSON.parse(i):(Sl("Failed to decode base64 JWT payload"),null)}catch(i){return Sl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nA(t){const e=$p(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&rA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=co(this.lastLoginAt),this.creationTime=co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Uo(t,eA(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?aA(s.providerUserInfo):[],a=oA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new rE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function sA(t){const e=ue(t);await uu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function aA(t){return t.map(e=>{var{providerId:n}=e,r=Pp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(t,e){const n=await tE(t,{},async()=>{const r=ha({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=nE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",eE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await lA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Fo;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fo,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Pp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Uo(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tA(this,e)}reload(){return sA(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Uo(this,ZN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:T,isAnonymous:k,providerData:C,stsTokenManager:N}=n;M(g&&N,e,"internal-error");const D=Fo.fromJSON(this.name,N);M(typeof g=="string",e,"internal-error"),Kn(h,e.name),Kn(d,e.name),M(typeof T=="boolean",e,"internal-error"),M(typeof k=="boolean",e,"internal-error"),Kn(m,e.name),Kn(v,e.name),Kn(E,e.name),Kn(_,e.name),Kn(p,e.name),Kn(f,e.name);const H=new Gr({uid:g,auth:e,email:d,emailVerified:T,displayName:h,isAnonymous:k,photoURL:v,phoneNumber:m,tenantId:E,stsTokenManager:D,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(H.providerData=C.map(j=>Object.assign({},j))),_&&(H._redirectEventId=_),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new Fo;i.updateFromServerResponse(n);const s=new Gr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=new Map;function Rn(t){bn(t instanceof Function,"Expected a class definition");let e=Ly.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ly.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iE.type="NONE";const $y=iE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t,e,n){return`firebase:${t}:${e}:${n}`}class Yi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Cl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Cl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yi(Rn($y),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rn($y);const o=Cl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Gr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Yi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Yi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uE(e))return"Blackberry";if(cE(e))return"Webos";if(Mp(e))return"Safari";if((e.includes("chrome/")||oE(e))&&!e.includes("edge/"))return"Chrome";if(lE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sE(t=et()){return/firefox\//i.test(t)}function Mp(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oE(t=et()){return/crios\//i.test(t)}function aE(t=et()){return/iemobile/i.test(t)}function lE(t=et()){return/android/i.test(t)}function uE(t=et()){return/blackberry/i.test(t)}function cE(t=et()){return/webos/i.test(t)}function Xu(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uA(t=et()){var e;return Xu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cA(){return ax()&&document.documentMode===10}function hE(t=et()){return Xu(t)||lE(t)||cE(t)||uE(t)||/windows phone/i.test(t)||aE(t)}function hA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t,e=[]){let n;switch(t){case"Browser":n=My(et());break;case"Worker":n=`${My(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pi}/${r}`}async function fE(t,e){return gi(t,"GET","/v2/recaptchaConfig",mi(t,e))}function by(t){return t!==void 0&&t.enterprise!==void 0}class pE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function mE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=fn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",dA().appendChild(r)})}function fA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const pA="https://www.google.com/recaptcha/enterprise.js?render=",mA="recaptcha-enterprise",gA="NO_RECAPTCHA";class gE{constructor(e){this.type=mA,this.auth=yi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{fE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new pE(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;by(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(gA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&by(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}mE(pA+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function us(t,e,n,r=!1){const i=new gE(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uy(this),this.idTokenSubscription=new Uy(this),this.beforeStateQueue=new yA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Z1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Yi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ue(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}async initializeRecaptchaConfig(){const e=await fE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new pE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new gE(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ca("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Yi.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&WN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yi(t){return ue(t)}class Uy{constructor(e){this.auth=e,this.observer=null,this.addObserver=px(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t,e){const n=Gu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(iu(s,e??{}))return i;Jt(i,"already-initialized")}return n.initialize({options:e})}function EA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _A(t,e,n){const r=yi(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=yE(e),{host:o,port:a}=TA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||SA()}function yE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TA(t){const e=yE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Fy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Fy(o)}}}function Fy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}async function CA(t,e){return gi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vh(t,e){return pa(t,"POST","/v1/accounts:signInWithPassword",mi(t,e))}async function kA(t,e){return gi(t,"POST","/v1/accounts:sendOobCode",mi(t,e))}async function wh(t,e){return kA(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",mi(t,e))}async function xA(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends bp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new jo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new jo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await us(e,r,"signInWithPassword");return vh(e,i)}else return vh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await us(e,r,"signInWithPassword");return vh(e,s)}else return Promise.reject(i)});case"emailLink":return IA(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return CA(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xA(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t,e){return pa(t,"POST","/v1/accounts:signInWithIdp",mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="http://localhost";class ii extends bp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Pp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ii(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xi(e,n)}buildRequest(){const e={requestUri:RA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ha(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AA(t){const e=Ws(Ks(t)).link,n=e?Ws(Ks(e)).deep_link_id:null,r=Ws(Ks(t)).deep_link_id;return(r?Ws(Ks(r)).link:null)||r||n||e||t}class Up{constructor(e){var n,r,i,s,o,a;const l=Ws(Ks(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=NA((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=AA(e);try{return new Up(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,n){return jo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Up.parseLink(n);return M(r,"argument-error"),jo._fromEmailAndCode(e,r.code,r.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends vE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends ma{constructor(){super("facebook.com")}static credential(e){return ii._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ii._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends ma{constructor(){super("github.com")}static credential(e){return ii._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends ma{constructor(){super("twitter.com")}static credential(e,n){return ii._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eh(t,e){return pa(t,"POST","/v1/accounts:signUp",mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Gr._fromIdTokenResponse(e,r,i),o=jy(r);return new si({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=jy(r);return new si({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function jy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends vn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new cu(e,n,r,i)}}function wE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cu._fromErrorAndOperation(t,s,e,r):s})}async function DA(t,e,n=!1){const r=await Uo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return si._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Uo(t,wE(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=$p(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),si._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(t,e,n=!1){const r="signIn",i=await wE(t,r,e),s=await si._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function OA(t,e){return EE(yi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t,e,n){var r;M(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),M(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(M(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(M(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(t,e,n){var r;const i=yi(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await us(i,s,"getOobCode",!0);n&&_h(i,o,n),await wh(i,o)}else n&&_h(i,s,n),await wh(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await us(i,s,"getOobCode",!0);n&&_h(i,a,n),await wh(i,a)}else return Promise.reject(o)})}async function $A(t,e,n){var r;const i=yi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await us(i,s,"signUpPassword");o=Eh(i,u)}else o=Eh(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await us(i,s,"signUpPassword");return Eh(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await si._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function MA(t,e,n){return OA(ue(t),Ss.credential(e,n))}function bA(t,e,n,r){return ue(t).onIdTokenChanged(e,n,r)}function UA(t,e,n){return ue(t).beforeAuthStateChanged(e,n)}function FA(t,e,n,r){return ue(t).onAuthStateChanged(e,n,r)}function jA(t){return ue(t).signOut()}const hu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hu,"1"),this.storage.removeItem(hu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(){const t=et();return Mp(t)||Xu(t)}const VA=1e3,zA=10;class TE extends _E{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=BA()&&hA(),this.fallbackToPolling=hE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);cA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}TE.type="LOCAL";const HA=TE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE extends _E{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}SE.type="SESSION";const CE=SE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ju(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await WA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ju.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Fp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function qA(t){pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function GA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YA(){return kE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="firebaseLocalStorageDb",XA=1,du="firebaseLocalStorage",xE="fbase_key";class ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zu(t,e){return t.transaction([du],e?"readwrite":"readonly").objectStore(du)}function JA(){const t=indexedDB.deleteDatabase(IE);return new ga(t).toPromise()}function Kd(){const t=indexedDB.open(IE,XA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(du,{keyPath:xE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(du)?e(r):(r.close(),await JA(),e(await Kd()))})})}async function By(t,e,n){const r=Zu(t,!0).put({[xE]:e,value:n});return new ga(r).toPromise()}async function ZA(t,e){const n=Zu(t,!1).get(e),r=await new ga(n).toPromise();return r===void 0?null:r.value}function Vy(t,e){const n=Zu(t,!0).delete(e);return new ga(n).toPromise()}const e2=800,t2=3;class RE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>t2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ju._getInstance(YA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await GA(),!this.activeServiceWorker)return;this.sender=new KA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kd();return await By(e,hu,"1"),await Vy(e,hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>By(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ZA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zu(i,!1).getAll();return new ga(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),e2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}RE.type="LOCAL";const n2=RE;new fa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(t,e){return e?Rn(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp extends bp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function i2(t){return EE(t.auth,new jp(t),t.bypassAuthState)}function s2(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),PA(n,new jp(t),t.bypassAuthState)}async function o2(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),DA(n,new jp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return i2;case"linkViaPopup":case"linkViaRedirect":return o2;case"reauthViaPopup":case"reauthViaRedirect":return s2;default:Jt(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2=new fa(2e3,1e4);class Bi extends NE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Bi.currentPopupAction&&Bi.currentPopupAction.cancel(),Bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=Fp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,a2.get())};e()}}Bi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2="pendingRedirect",kl=new Map;class u2 extends NE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=kl.get(this.auth._key());if(!e){try{const r=await c2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}kl.set(this.auth._key(),e)}return this.bypassAuthState||kl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function c2(t,e){const n=f2(e),r=d2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function h2(t,e){kl.set(t._key(),e)}function d2(t){return Rn(t._redirectPersistence)}function f2(t){return Cl(l2,t.config.apiKey,t.name)}async function p2(t,e,n=!1){const r=yi(t),i=r2(r,e),o=await new u2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=10*60*1e3;class g2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!y2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!AE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=m2&&this.cachedEventUids.clear(),this.cachedEventUids.has(zy(e))}saveEventToCache(e){this.cachedEventUids.add(zy(e)),this.lastProcessedEventTime=Date.now()}}function zy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function AE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function y2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v2(t,e={}){return gi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,E2=/^https?/;async function _2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await v2(t);for(const n of e)try{if(T2(n))return}catch{}Jt(t,"unauthorized-domain")}function T2(t){const e=Wd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!E2.test(n))return!1;if(w2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=new fa(3e4,6e4);function Hy(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function C2(t){return new Promise((e,n)=>{var r,i,s;function o(){Hy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hy(),n(fn(t,"network-request-failed"))},timeout:S2.get()})}if(!((i=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=pn().gapi)===null||s===void 0)&&s.load)o();else{const a=fA("iframefcb");return pn()[a]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},mE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Il=null,e})}let Il=null;function k2(t){return Il=Il||C2(t),Il}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=new fa(5e3,15e3),x2="__/auth/iframe",R2="emulator/auth/iframe",N2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},A2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function D2(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lp(e,R2):`https://${t.config.authDomain}/${x2}`,r={apiKey:e.apiKey,appName:t.name,v:pi},i=A2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ha(r).slice(1)}`}async function P2(t){const e=await k2(t),n=pn().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:D2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:N2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),a=pn().setTimeout(()=>{s(o)},I2.get());function l(){pn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},L2=500,$2=600,M2="_blank",b2="http://localhost";class Wy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function U2(t,e,n,r=L2,i=$2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},O2),{width:r.toString(),height:i.toString(),top:s,left:o}),u=et().toLowerCase();n&&(a=oE(u)?M2:n),sE(u)&&(e=e||b2,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(uA(u)&&a!=="_self")return F2(e||"",a),new Wy(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new Wy(h)}function F2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2="__/auth/handler",B2="emulator/auth/handler",V2=encodeURIComponent("fac");async function Ky(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:pi,eventId:i};if(e instanceof vE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof ma){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${V2}=${encodeURIComponent(l)}`:"";return`${z2(t)}?${ha(a).slice(1)}${u}`}function z2({config:t}){return t.emulator?Lp(t,B2):`https://${t.authDomain}/${j2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="webStorageSupport";class H2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=CE,this._completeRedirectFn=p2,this._overrideRedirectResult=h2}async _openPopup(e,n,r,i){var s;bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ky(e,n,r,Wd(),i);return U2(e,o,Fp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ky(e,n,r,Wd(),i);return qA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await P2(e),r=new g2(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Th,{type:Th},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Th];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hE()||Mp()||Xu()}}const W2=H2;var qy="@firebase/auth",Gy="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function G2(t){ni(new Tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dE(t)},u=new vA(r,i,s,l);return EA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ni(new Tr("auth-internal",e=>{const n=yi(e.getProvider("auth").getImmediate());return(r=>new K2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(qy,Gy,q2(t)),dn(qy,Gy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2=5*60,Y2=D1("authIdTokenMaxAge")||Q2;let Qy=null;const X2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Y2)return;const i=n==null?void 0:n.token;Qy!==i&&(Qy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function J2(t=Cp()){const e=Gu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wA(t,{popupRedirectResolver:W2,persistence:[n2,HA,CE]}),r=D1("authTokenSyncURL");if(r){const s=X2(r);UA(n,s,()=>s(n.currentUser)),bA(n,o=>s(o))}const i=R1("auth");return i&&_A(n,`http://${i}`),n}G2("Browser");var Z2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,Bp=Bp||{},F=Z2||self;function ec(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ya(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function eD(t){return Object.prototype.hasOwnProperty.call(t,Sh)&&t[Sh]||(t[Sh]=++tD)}var Sh="closure_uid_"+(1e9*Math.random()>>>0),tD=0;function nD(t,e,n){return t.call.apply(t.bind,arguments)}function rD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ye=nD:Ye=rD,Ye.apply(null,arguments)}function tl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ar(){this.s=this.s,this.o=this.o}var iD=0;Ar.prototype.s=!1;Ar.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),iD!=0)&&eD(this)};Ar.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const DE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Yy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ec(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var sD=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",()=>{},e),F.removeEventListener("test",()=>{},e)}catch{}return t}();function Bo(t){return/^[\s\xa0]*$/.test(t)}function tc(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function sn(t){return tc().indexOf(t)!=-1}function zp(t){return zp[" "](t),t}zp[" "]=function(){};function oD(t,e){var n=JD;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var aD=sn("Opera"),cs=sn("Trident")||sn("MSIE"),PE=sn("Edge"),qd=PE||cs,OE=sn("Gecko")&&!(tc().toLowerCase().indexOf("webkit")!=-1&&!sn("Edge"))&&!(sn("Trident")||sn("MSIE"))&&!sn("Edge"),lD=tc().toLowerCase().indexOf("webkit")!=-1&&!sn("Edge");function LE(){var t=F.document;return t?t.documentMode:void 0}var Gd;e:{var Ch="",kh=function(){var t=tc();if(OE)return/rv:([^\);]+)(\)|;)/.exec(t);if(PE)return/Edge\/([\d\.]+)/.exec(t);if(cs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(lD)return/WebKit\/(\S+)/.exec(t);if(aD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(kh&&(Ch=kh?kh[1]:""),cs){var Ih=LE();if(Ih!=null&&Ih>parseFloat(Ch)){Gd=String(Ih);break e}}Gd=Ch}var Qd;if(F.document&&cs){var Xy=LE();Qd=Xy||parseInt(Gd,10)||void 0}else Qd=void 0;var uD=Qd;function Vo(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(OE){e:{try{zp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:cD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Vo.$.h.call(this)}}Me(Vo,Xe);var cD={2:"touch",3:"pen",4:"mouse"};Vo.prototype.h=function(){Vo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var va="closure_listenable_"+(1e6*Math.random()|0),hD=0;function dD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++hD,this.fa=this.ia=!1}function nc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Hp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function fD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function $E(t){const e={};for(const n in t)e[n]=t[n];return e}const Jy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ME(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Jy.length;s++)n=Jy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function rc(t){this.src=t,this.g={},this.h=0}rc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Xd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new dD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Yd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=DE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(nc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Xd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Wp="closure_lm_"+(1e6*Math.random()|0),xh={};function bE(t,e,n,r,i){if(r&&r.once)return FE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)bE(t,e[s],n,r,i);return null}return n=Gp(n),t&&t[va]?t.O(e,n,ya(r)?!!r.capture:!!r,i):UE(t,e,n,!1,r,i)}function UE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ya(i)?!!i.capture:!!i,a=qp(t);if(a||(t[Wp]=a=new rc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=pD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)sD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(BE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function pD(){function t(n){return e.call(t.src,t.listener,n)}const e=mD;return t}function FE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)FE(t,e[s],n,r,i);return null}return n=Gp(n),t&&t[va]?t.P(e,n,ya(r)?!!r.capture:!!r,i):UE(t,e,n,!0,r,i)}function jE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)jE(t,e[s],n,r,i);else r=ya(r)?!!r.capture:!!r,n=Gp(n),t&&t[va]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Xd(s,n,r,i),-1<n&&(nc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=qp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Xd(e,n,r,i)),(n=-1<t?e[t]:null)&&Kp(n))}function Kp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[va])Yd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(BE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=qp(e))?(Yd(n,t),n.h==0&&(n.src=null,e[Wp]=null)):nc(t)}}}function BE(t){return t in xh?xh[t]:xh[t]="on"+t}function mD(t,e){if(t.fa)t=!0;else{e=new Vo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Kp(t),t=n.call(r,e)}return t}function qp(t){return t=t[Wp],t instanceof rc?t:null}var Rh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gp(t){return typeof t=="function"?t:(t[Rh]||(t[Rh]=function(e){return t.handleEvent(e)}),t[Rh])}function Le(){Ar.call(this),this.i=new rc(this),this.S=this,this.J=null}Me(Le,Ar);Le.prototype[va]=!0;Le.prototype.removeEventListener=function(t,e,n,r){jE(this,t,e,n,r)};function Be(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var i=e;e=new Xe(r,t),ME(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=nl(o,r,!0,e)&&i}if(o=e.g=t,i=nl(o,r,!0,e)&&i,i=nl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=nl(o,r,!1,e)&&i}Le.prototype.N=function(){if(Le.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)nc(n[r]);delete t.g[e],t.h--}}this.J=null};Le.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Le.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function nl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Yd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Qp=F.JSON.stringify;class gD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function yD(){var t=Yp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class vD{constructor(){this.h=this.g=null}add(e,n){const r=VE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var VE=new gD(()=>new wD,t=>t.reset());class wD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ED(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function _D(t){F.setTimeout(()=>{throw t},0)}let zo,Ho=!1,Yp=new vD,zE=()=>{const t=F.Promise.resolve(void 0);zo=()=>{t.then(TD)}};var TD=()=>{for(var t;t=yD();){try{t.h.call(t.g)}catch(n){_D(n)}var e=VE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ho=!1};function ic(t,e){Le.call(this),this.h=t||1,this.g=e||F,this.j=Ye(this.qb,this),this.l=Date.now()}Me(ic,Le);A=ic.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Be(this,"tick"),this.ga&&(Xp(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}A.N=function(){ic.$.N.call(this),Xp(this),delete this.g};function Jp(t,e,n){if(typeof t=="function")n&&(t=Ye(t,n));else if(t&&typeof t.handleEvent=="function")t=Ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function HE(t){t.g=Jp(()=>{t.g=null,t.i&&(t.i=!1,HE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class SD extends Ar{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:HE(this)}N(){super.N(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wo(t){Ar.call(this),this.h=t,this.g={}}Me(Wo,Ar);var Zy=[];function WE(t,e,n,r){Array.isArray(n)||(n&&(Zy[0]=n.toString()),n=Zy);for(var i=0;i<n.length;i++){var s=bE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function KE(t){Hp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Kp(e)},t),t.g={}}Wo.prototype.N=function(){Wo.$.N.call(this),KE(this)};Wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sc(){this.g=!0}sc.prototype.Ea=function(){this.g=!1};function CD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function kD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Vi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xD(t,n)+(r?" "+r:"")})}function ID(t,e){t.info(function(){return"TIMEOUT: "+e})}sc.prototype.info=function(){};function xD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Qp(n)}catch{return e}}var vi={},ev=null;function oc(){return ev=ev||new Le}vi.Ta="serverreachability";function qE(t){Xe.call(this,vi.Ta,t)}Me(qE,Xe);function Ko(t){const e=oc();Be(e,new qE(e))}vi.STAT_EVENT="statevent";function GE(t,e){Xe.call(this,vi.STAT_EVENT,t),this.stat=e}Me(GE,Xe);function ot(t){const e=oc();Be(e,new GE(e,t))}vi.Ua="timingevent";function QE(t,e){Xe.call(this,vi.Ua,t),this.size=e}Me(QE,Xe);function wa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var ac={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},YE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zp(){}Zp.prototype.h=null;function tv(t){return t.h||(t.h=t.i())}function XE(){}var Ea={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function em(){Xe.call(this,"d")}Me(em,Xe);function tm(){Xe.call(this,"c")}Me(tm,Xe);var Jd;function lc(){}Me(lc,Zp);lc.prototype.g=function(){return new XMLHttpRequest};lc.prototype.i=function(){return{}};Jd=new lc;function _a(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Wo(this),this.P=RD,t=qd?125:void 0,this.V=new ic(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new JE}function JE(){this.i=null,this.g="",this.h=!1}var RD=45e3,Zd={},fu={};A=_a.prototype;A.setTimeout=function(t){this.P=t};function ef(t,e,n){t.L=1,t.v=cc(Un(e)),t.s=n,t.S=!0,ZE(t,null)}function ZE(t,e){t.G=Date.now(),Ta(t),t.A=Un(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),a_(n.i,"t",r),t.C=0,n=t.l.J,t.h=new JE,t.g=R_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new SD(Ye(t.Pa,t,t.g),t.O)),WE(t.U,t.g,"readystatechange",t.nb),e=t.I?$E(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ko(),CD(t.j,t.u,t.A,t.m,t.W,t.s)}A.nb=function(t){t=t.target;const e=this.M;e&&ln(t)==3?e.l():this.Pa(t)};A.Pa=function(t){try{if(t==this.g)e:{const c=ln(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||qd||this.g&&(this.h.h||this.g.ja()||sv(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ko(3):Ko(2)),uc(this);var n=this.g.da();this.ca=n;t:if(e_(this)){var r=sv(this.g);t="";var i=r.length,s=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Br(this),ho(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,kD(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bo(a)){var u=a;break t}}u=null}if(n=u)Vi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,tf(this,n);else{this.i=!1,this.o=3,ot(12),Br(this),ho(this);break e}}this.S?(t_(this,c,o),qd&&this.i&&c==3&&(WE(this.U,this.V,"tick",this.mb),this.V.start())):(Vi(this.j,this.m,o,null),tf(this,o)),c==4&&Br(this),this.i&&!this.J&&(c==4?C_(this.l,this):(this.i=!1,Ta(this)))}else QD(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),Br(this),ho(this)}}}catch{}finally{}};function e_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function t_(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=ND(t,n),i==fu){e==4&&(t.o=4,ot(14),r=!1),Vi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Zd){t.o=4,ot(15),Vi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Vi(t.j,t.m,i,null),tf(t,i);e_(t)&&i!=fu&&i!=Zd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ot(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),am(e),e.M=!0,ot(11))):(Vi(t.j,t.m,n,"[Invalid Chunked Response]"),Br(t),ho(t))}A.mb=function(){if(this.g){var t=ln(this.g),e=this.g.ja();this.C<e.length&&(uc(this),t_(this,t,e),this.i&&t!=4&&Ta(this))}};function ND(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?fu:(n=Number(e.substring(n,r)),isNaN(n)?Zd:(r+=1,r+n>e.length?fu:(e=e.slice(r,r+n),t.C=r+n,e)))}A.cancel=function(){this.J=!0,Br(this)};function Ta(t){t.Y=Date.now()+t.P,n_(t,t.P)}function n_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=wa(Ye(t.lb,t),e)}function uc(t){t.B&&(F.clearTimeout(t.B),t.B=null)}A.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ID(this.j,this.A),this.L!=2&&(Ko(),ot(17)),Br(this),this.o=2,ho(this)):n_(this,this.Y-t)};function ho(t){t.l.H==0||t.J||C_(t.l,t)}function Br(t){uc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Xp(t.V),KE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function tf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||nf(n.i,t))){if(!t.K&&nf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)gu(n),fc(n);else break e;om(n),ot(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=wa(Ye(n.ib,n),6e3));if(1>=c_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Vr(n,11)}else if((t.K||n.g==t)&&gu(n),!Bo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(nm(s,s.h),s.h=null))}if(r.F){const E=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,ie(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=x_(r,r.J?r.pa:null,r.Y),o.K){h_(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(uc(a),Ta(a)),r.g=o}else T_(r);0<n.j.length&&pc(n)}else u[0]!="stop"&&u[0]!="close"||Vr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Vr(n,7):sm(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ko(4)}catch{}}function AD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ec(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function DD(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ec(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function r_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ec(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=DD(t),r=AD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var i_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function PD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Qr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Qr){this.h=t.h,pu(this,t.j),this.s=t.s,this.g=t.g,mu(this,t.m),this.l=t.l;var e=t.i,n=new qo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),nv(this,n),this.o=t.o}else t&&(e=String(t).match(i_))?(this.h=!1,pu(this,e[1]||"",!0),this.s=qs(e[2]||""),this.g=qs(e[3]||"",!0),mu(this,e[4]),this.l=qs(e[5]||"",!0),nv(this,e[6]||"",!0),this.o=qs(e[7]||"")):(this.h=!1,this.i=new qo(null,this.h))}Qr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Gs(e,rv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Gs(e,rv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Gs(n,n.charAt(0)=="/"?$D:LD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Gs(n,bD)),t.join("")};function Un(t){return new Qr(t)}function pu(t,e,n){t.j=n?qs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function mu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function nv(t,e,n){e instanceof qo?(t.i=e,UD(t.i,t.h)):(n||(e=Gs(e,MD)),t.i=new qo(e,t.h))}function ie(t,e,n){t.i.set(e,n)}function cc(t){return ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Gs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,OD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function OD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var rv=/[#\/\?@]/g,LD=/[#\?:]/g,$D=/[#\?]/g,MD=/[#\?@]/g,bD=/#/g;function qo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Dr(t){t.g||(t.g=new Map,t.h=0,t.i&&PD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=qo.prototype;A.add=function(t,e){Dr(this),this.i=null,t=Cs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function s_(t,e){Dr(t),e=Cs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function o_(t,e){return Dr(t),e=Cs(t,e),t.g.has(e)}A.forEach=function(t,e){Dr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};A.ta=function(){Dr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};A.Z=function(t){Dr(this);let e=[];if(typeof t=="string")o_(this,t)&&(e=e.concat(this.g.get(Cs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};A.set=function(t,e){return Dr(this),this.i=null,t=Cs(this,t),o_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function a_(t,e,n){s_(t,e),0<n.length&&(t.i=null,t.g.set(Cs(t,e),Vp(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Cs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function UD(t,e){e&&!t.j&&(Dr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(s_(this,r),a_(this,i,n))},t)),t.j=e}var FD=class{constructor(t,e){this.g=t,this.map=e}};function l_(t){this.l=t||jD,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ka&&F.g.Ka()&&F.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jD=10;function u_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function c_(t){return t.h?1:t.g?t.g.size:0}function nf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function nm(t,e){t.g?t.g.add(e):t.h=e}function h_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}l_.prototype.cancel=function(){if(this.i=d_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function d_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Vp(t.i)}var BD=class{stringify(t){return F.JSON.stringify(t,void 0)}parse(t){return F.JSON.parse(t,void 0)}};function VD(){this.g=new BD}function zD(t,e,n){const r=n||"";try{r_(t,function(i,s){let o=i;ya(i)&&(o=Qp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function HD(t,e){const n=new sc;if(F.Image){const r=new Image;r.onload=tl(rl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=tl(rl,n,r,"TestLoadImage: error",!1,e),r.onabort=tl(rl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=tl(rl,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function rl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Sa(t){this.l=t.fc||null,this.j=t.ob||!1}Me(Sa,Zp);Sa.prototype.g=function(){return new hc(this.l,this.j)};Sa.prototype.i=function(t){return function(){return t}}({});function hc(t,e){Le.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=rm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(hc,Le);var rm=0;A=hc.prototype;A.open=function(t,e){if(this.readyState!=rm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Go(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||F).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ca(this)),this.readyState=rm};A.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Go(this)),this.g&&(this.readyState=3,Go(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;f_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function f_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}A.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ca(this):Go(this),this.readyState==3&&f_(this)}};A.Za=function(t){this.g&&(this.response=this.responseText=t,Ca(this))};A.Ya=function(t){this.g&&(this.response=t,Ca(this))};A.ka=function(){this.g&&Ca(this)};function Ca(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Go(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Go(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(hc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var WD=F.JSON.parse;function ge(t){Le.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=p_,this.L=this.M=!1}Me(ge,Le);var p_="",KD=/^https?$/i,qD=["POST","PUT"];A=ge.prototype;A.Oa=function(t){this.M=t};A.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Jd.g(),this.C=this.u?tv(this.u):tv(Jd),this.g.onreadystatechange=Ye(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){iv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=DE(qD,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{y_(this),0<this.B&&((this.L=GD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ye(this.ua,this)):this.A=Jp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){iv(this,s)}};function GD(t){return cs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}A.ua=function(){typeof Bp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))};function iv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,m_(t),dc(t)}function m_(t){t.F||(t.F=!0,Be(t,"complete"),Be(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Be(this,"complete"),Be(this,"abort"),dc(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),dc(this,!0)),ge.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?g_(this):this.kb())};A.kb=function(){g_(this)};function g_(t){if(t.h&&typeof Bp<"u"&&(!t.C[1]||ln(t)!=4||t.da()!=2)){if(t.v&&ln(t)==4)Jp(t.La,0,t);else if(Be(t,"readystatechange"),ln(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(i_)[1]||null;!i&&F.self&&F.self.location&&(i=F.self.location.protocol.slice(0,-1)),r=!KD.test(i?i.toLowerCase():"")}n=r}if(n)Be(t,"complete"),Be(t,"success");else{t.m=6;try{var s=2<ln(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",m_(t)}}finally{dc(t)}}}}function dc(t,e){if(t.g){y_(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Be(t,"ready");try{n.onreadystatechange=r}catch{}}}function y_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}A.isActive=function(){return!!this.g};function ln(t){return t.g?t.g.readyState:0}A.da=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),WD(e)}};function sv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case p_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function QD(t){const e={};t=(t.g&&2<=ln(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Bo(t[r]))continue;var n=ED(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}fD(e,function(r){return r.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function v_(t){let e="";return Hp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function im(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=v_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ie(t,e,n))}function Us(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function w_(t){this.Ga=0,this.j=[],this.l=new sc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Us("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Us("baseRetryDelayMs",5e3,t),this.hb=Us("retryDelaySeedMs",1e4,t),this.eb=Us("forwardChannelMaxRetries",2,t),this.xa=Us("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new l_(t&&t.concurrentRequestLimit),this.Ja=new VD,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=w_.prototype;A.ra=8;A.H=1;function sm(t){if(E_(t),t.H==3){var e=t.W++,n=Un(t.I);if(ie(n,"SID",t.K),ie(n,"RID",e),ie(n,"TYPE","terminate"),ka(t,n),e=new _a(t,t.l,e),e.L=2,e.v=cc(Un(n)),n=!1,F.navigator&&F.navigator.sendBeacon)try{n=F.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=R_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ta(e)}I_(t)}function fc(t){t.g&&(am(t),t.g.cancel(),t.g=null)}function E_(t){fc(t),t.u&&(F.clearTimeout(t.u),t.u=null),gu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function pc(t){if(!u_(t.i)&&!t.m){t.m=!0;var e=t.Na;zo||zE(),Ho||(zo(),Ho=!0),Yp.add(e,t),t.C=0}}function YD(t,e){return c_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=wa(Ye(t.Na,t,e),k_(t,t.C)),t.C++,!0)}A.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new _a(this,this.l,t);let s=this.s;if(this.U&&(s?(s=$E(s),ME(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=__(this,i,e),n=Un(this.I),ie(n,"RID",t),ie(n,"CVER",22),this.F&&ie(n,"X-HTTP-Session-Id",this.F),ka(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(v_(s)))+"&"+e:this.o&&im(n,this.o,s)),nm(this.i,i),this.bb&&ie(n,"TYPE","init"),this.P?(ie(n,"$req",e),ie(n,"SID","null"),i.aa=!0,ef(i,n,null)):ef(i,n,e),this.H=2}}else this.H==3&&(t?ov(this,t):this.j.length==0||u_(this.i)||ov(this))};function ov(t,e){var n;e?n=e.m:n=t.W++;const r=Un(t.I);ie(r,"SID",t.K),ie(r,"RID",n),ie(r,"AID",t.V),ka(t,r),t.o&&t.s&&im(r,t.o,t.s),n=new _a(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=__(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),nm(t.i,n),ef(n,r,e)}function ka(t,e){t.na&&Hp(t.na,function(n,r){ie(e,r,n)}),t.h&&r_({},function(n,r){ie(e,r,n)})}function __(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ye(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{zD(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function T_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;zo||zE(),Ho||(zo(),Ho=!0),Yp.add(e,t),t.A=0}}function om(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=wa(Ye(t.Ma,t),k_(t,t.A)),t.A++,!0)}A.Ma=function(){if(this.u=null,S_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=wa(Ye(this.jb,this),t)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ot(10),fc(this),S_(this))};function am(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function S_(t){t.g=new _a(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Un(t.wa);ie(e,"RID","rpc"),ie(e,"SID",t.K),ie(e,"AID",t.V),ie(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ie(e,"TO",t.qa),ie(e,"TYPE","xmlhttp"),ka(t,e),t.o&&t.s&&im(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=cc(Un(e)),n.s=null,n.S=!0,ZE(n,t)}A.ib=function(){this.v!=null&&(this.v=null,fc(this),om(this),ot(19))};function gu(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function C_(t,e){var n=null;if(t.g==e){gu(t),am(t),t.g=null;var r=2}else if(nf(t.i,e))n=e.F,h_(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=oc(),Be(r,new QE(r,n)),pc(t)}else T_(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&YD(t,e)||r==2&&om(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Vr(t,5);break;case 4:Vr(t,10);break;case 3:Vr(t,6);break;default:Vr(t,2)}}}function k_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Vr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ye(t.pb,t);n||(n=new Qr("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||pu(n,"https"),cc(n)),HD(n.toString(),r)}else ot(2);t.H=0,t.h&&t.h.za(e),I_(t),E_(t)}A.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ot(2)):(this.l.info("Failed to ping google.com"),ot(1))};function I_(t){if(t.H=0,t.ma=[],t.h){const e=d_(t.i);(e.length!=0||t.j.length!=0)&&(Yy(t.ma,e),Yy(t.ma,t.j),t.i.i.length=0,Vp(t.j),t.j.length=0),t.h.ya()}}function x_(t,e,n){var r=n instanceof Qr?Un(n):new Qr(n);if(r.g!="")e&&(r.g=e+"."+r.g),mu(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Qr(null);r&&pu(s,r),e&&(s.g=e),i&&mu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ie(r,n,e),ie(r,"VER",t.ra),ka(t,r),r}function R_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ge(new Sa({ob:!0})):new ge(t.va),e.Oa(t.J),e}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function N_(){}A=N_.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function yu(){if(cs&&!(10<=Number(uD)))throw Error("Environmental error: no available transport.")}yu.prototype.g=function(t,e){return new xt(t,e)};function xt(t,e){Le.call(this),this.g=new w_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Bo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Bo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ks(this)}Me(xt,Le);xt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ot(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=x_(t,null,t.Y),pc(t)};xt.prototype.close=function(){sm(this.g)};xt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qp(t),t=n);e.j.push(new FD(e.fb++,t)),e.H==3&&pc(e)};xt.prototype.N=function(){this.g.h=null,delete this.j,sm(this.g),delete this.g,xt.$.N.call(this)};function A_(t){em.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(A_,em);function D_(){tm.call(this),this.status=1}Me(D_,tm);function ks(t){this.g=t}Me(ks,N_);ks.prototype.Ba=function(){Be(this.g,"a")};ks.prototype.Aa=function(t){Be(this.g,new A_(t))};ks.prototype.za=function(t){Be(this.g,new D_)};ks.prototype.ya=function(){Be(this.g,"b")};function XD(){this.blockSize=-1}function Zt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Me(Zt,XD);Zt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Nh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Zt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Nh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Nh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Nh(this,r),i=0;break}}this.h=i,this.i+=e};Zt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ee(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var JD={};function lm(t){return-128<=t&&128>t?oD(t,function(e){return new ee([e|0],0>e?-1:0)}):new ee([t|0],0>t?-1:0)}function un(t){if(isNaN(t)||!isFinite(t))return Ji;if(0>t)return Fe(un(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=rf;return new ee(e,0)}function P_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Fe(P_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=un(Math.pow(e,8)),r=Ji,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=un(Math.pow(e,s)),r=r.R(s).add(un(o))):(r=r.R(n),r=r.add(un(o)))}return r}var rf=4294967296,Ji=lm(0),sf=lm(1),av=lm(16777216);A=ee.prototype;A.ea=function(){if(Lt(this))return-Fe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:rf+r)*e,e*=rf}return t};A.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Nn(this))return"0";if(Lt(this))return"-"+Fe(this).toString(t);for(var e=un(Math.pow(t,6)),n=this,r="";;){var i=wu(n,e).g;n=vu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Nn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};A.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Nn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Lt(t){return t.h==-1}A.X=function(t){return t=vu(this,t),Lt(t)?-1:Nn(t)?0:1};function Fe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ee(n,~t.h).add(sf)}A.abs=function(){return Lt(this)?Fe(this):this};A.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ee(n,n[n.length-1]&-2147483648?-1:0)};function vu(t,e){return t.add(Fe(e))}A.R=function(t){if(Nn(this)||Nn(t))return Ji;if(Lt(this))return Lt(t)?Fe(this).R(Fe(t)):Fe(Fe(this).R(t));if(Lt(t))return Fe(this.R(Fe(t)));if(0>this.X(av)&&0>t.X(av))return un(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,il(n,2*r+2*i),n[2*r+2*i+1]+=s*l,il(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,il(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,il(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ee(n,0)};function il(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Fs(t,e){this.g=t,this.h=e}function wu(t,e){if(Nn(e))throw Error("division by zero");if(Nn(t))return new Fs(Ji,Ji);if(Lt(t))return e=wu(Fe(t),e),new Fs(Fe(e.g),Fe(e.h));if(Lt(e))return e=wu(t,Fe(e)),new Fs(Fe(e.g),e.h);if(30<t.g.length){if(Lt(t)||Lt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=sf,r=e;0>=r.X(t);)n=lv(n),r=lv(r);var i=Ti(n,1),s=Ti(r,1);for(r=Ti(r,2),n=Ti(n,2);!Nn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ti(r,1),n=Ti(n,1)}return e=vu(t,i.R(e)),new Fs(i,e)}for(i=Ji;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=un(n),o=s.R(e);Lt(o)||0<o.X(t);)n-=r,s=un(n),o=s.R(e);Nn(s)&&(s=sf),i=i.add(s),t=vu(t,o)}return new Fs(i,t)}A.gb=function(t){return wu(this,t).h};A.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ee(n,this.h&t.h)};A.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ee(n,this.h|t.h)};A.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ee(n,this.h^t.h)};function lv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ee(n,t.h)}function Ti(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ee(i,t.h)}yu.prototype.createWebChannel=yu.prototype.g;xt.prototype.send=xt.prototype.u;xt.prototype.open=xt.prototype.m;xt.prototype.close=xt.prototype.close;ac.NO_ERROR=0;ac.TIMEOUT=8;ac.HTTP_ERROR=6;YE.COMPLETE="complete";XE.EventType=Ea;Ea.OPEN="a";Ea.CLOSE="b";Ea.ERROR="c";Ea.MESSAGE="d";Le.prototype.listen=Le.prototype.O;ge.prototype.listenOnce=ge.prototype.P;ge.prototype.getLastError=ge.prototype.Sa;ge.prototype.getLastErrorCode=ge.prototype.Ia;ge.prototype.getStatus=ge.prototype.da;ge.prototype.getResponseJson=ge.prototype.Wa;ge.prototype.getResponseText=ge.prototype.ja;ge.prototype.send=ge.prototype.ha;ge.prototype.setWithCredentials=ge.prototype.Oa;Zt.prototype.digest=Zt.prototype.l;Zt.prototype.reset=Zt.prototype.reset;Zt.prototype.update=Zt.prototype.j;ee.prototype.add=ee.prototype.add;ee.prototype.multiply=ee.prototype.R;ee.prototype.modulo=ee.prototype.gb;ee.prototype.compare=ee.prototype.X;ee.prototype.toNumber=ee.prototype.ea;ee.prototype.toString=ee.prototype.toString;ee.prototype.getBits=ee.prototype.D;ee.fromNumber=un;ee.fromString=P_;var ZD=function(){return new yu},eP=function(){return oc()},Ah=ac,tP=YE,nP=vi,uv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},rP=Sa,sl=XE,iP=ge,sP=Zt,Zi=ee;const cv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is="9.22.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new Tp("@firebase/firestore");function hv(){return oi.logLevel}function O(t,...e){if(oi.logLevel<=Y.DEBUG){const n=e.map(um);oi.debug(`Firestore (${Is}): ${t}`,...n)}}function Fn(t,...e){if(oi.logLevel<=Y.ERROR){const n=e.map(um);oi.error(`Firestore (${Is}): ${t}`,...n)}}function hs(t,...e){if(oi.logLevel<=Y.WARN){const n=e.map(um);oi.warn(`Firestore (${Is}): ${t}`,...n)}}function um(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${Is}) INTERNAL ASSERTION FAILED: `+t;throw Fn(e),new Error(e)}function oe(t,e){t||U()}function z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class aP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lP{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Dn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new O_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Ke(e)}}class uP{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class cP{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new uP(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dP{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.T=n.token,new hP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=fP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function X(t,e){return t<e?-1:t>e?1:0}function ds(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ne(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new Ne(0,0))}static max(){return new V(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends Qo{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const pP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Qo{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return pP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(le.fromString(e))}static fromName(e){return new $(le.fromString(e).popFirst(5))}static empty(){return new $(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new le(e.slice()))}}function mP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=V.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new Sr(i,$.empty(),e)}function gP(t){return new Sr(t.readTime,t.key,-1)}class Sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sr(V.min(),$.empty(),-1)}static max(){return new Sr(V.max(),$.empty(),-1)}}function yP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==vP)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function xa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}cm.ct=-1;function mc(t){return t==null}function Eu(t){return t===0&&1/t==-1/0}function EP(t){return typeof t=="number"&&Number.isInteger(t)&&!Eu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ol(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ol(this.root,e,this.comparator,!1)}getReverseIterator(){return new ol(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ol(this.root,e,this.comparator,!0)}}class ol{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ue(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fv(this.data.getIterator())}getIteratorFrom(e){return new fv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class fv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new St([])}unionWith(e){let n=new Je(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new M_("Invalid base64 string: "+i):i}}(e);return new tt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const _P=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(oe(!!t),typeof t=="string"){let e=0;const n=_P.exec(t);if(oe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ai(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dm(t){const e=t.mapValue.fields.__previous_value__;return hm(e)?dm(e):e}function Yo(t){const e=Cr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Xo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function li(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hm(t)?4:SP(t)?9007199254740991:10:U()}function gn(t,e){if(t===e)return!0;const n=li(t);if(n!==li(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yo(t).isEqual(Yo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Cr(r.timestampValue),o=Cr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ai(r.bytesValue).isEqual(ai(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Se(r.geoPointValue.latitude)===Se(i.geoPointValue.latitude)&&Se(r.geoPointValue.longitude)===Se(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Se(r.integerValue)===Se(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Se(r.doubleValue),o=Se(i.doubleValue);return s===o?Eu(s)===Eu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ds(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(dv(s)!==dv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!gn(s[a],o[a])))return!1;return!0}(t,e);default:return U()}}function Jo(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function fs(t,e){if(t===e)return 0;const n=li(t),r=li(e);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Se(i.integerValue||i.doubleValue),a=Se(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return pv(t.timestampValue,e.timestampValue);case 4:return pv(Yo(t),Yo(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ai(i),a=ai(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=X(o[l],a[l]);if(u!==0)return u}return X(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=X(Se(i.latitude),Se(s.latitude));return o!==0?o:X(Se(i.longitude),Se(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=fs(o[l],a[l]);if(u)return u}return X(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===al.mapValue&&s===al.mapValue)return 0;if(i===al.mapValue)return 1;if(s===al.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=X(a[c],u[c]);if(h!==0)return h;const d=fs(o[a[c]],l[u[c]]);if(d!==0)return d}return X(a.length,u.length)}(t.mapValue,e.mapValue);default:throw U()}}function pv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=Cr(t),r=Cr(e),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function ps(t){return of(t)}function of(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Cr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ai(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=of(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${of(r.fields[a])}`;return s+"}"}(t.mapValue):U();var e,n}function af(t){return!!t&&"integerValue"in t}function fm(t){return!!t&&"arrayValue"in t}function mv(t){return!!t&&"nullValue"in t}function gv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xl(t){return!!t&&"mapValue"in t}function fo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=fo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fo(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=fo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());xl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){wi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ft(fo(this.value))}}function b_(t){const e=[];return wi(t.fields,(n,r)=>{const i=new Qe([n]);if(xl(r)){const s=b_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new St(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ge(e,0,V.min(),V.min(),V.min(),ft.empty(),0)}static newFoundDocument(e,n,r,i){return new Ge(e,1,n,V.min(),r,i,0)}static newNoDocument(e,n){return new Ge(e,2,n,V.min(),V.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,V.min(),V.min(),ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n){this.position=e,this.inclusive=n}}function yv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=fs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function vv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n="asc"){this.field=e,this.dir=n}}function CP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{}class xe extends U_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new IP(e,n,r):n==="array-contains"?new NP(e,r):n==="in"?new AP(e,r):n==="not-in"?new DP(e,r):n==="array-contains-any"?new PP(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xP(e,r):new RP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fs(n,this.value)):n!==null&&li(this.value)===li(n)&&this.matchesComparison(fs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class yn extends U_{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new yn(e,n)}matches(e){return F_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function F_(t){return t.op==="and"}function j_(t){return kP(t)&&F_(t)}function kP(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function lf(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+ps(t.value);if(j_(t))return t.filters.map(e=>lf(e)).join(",");{const e=t.filters.map(n=>lf(n)).join(",");return`${t.op}(${e})`}}function B_(t,e){return t instanceof xe?function(n,r){return r instanceof xe&&n.op===r.op&&n.field.isEqual(r.field)&&gn(n.value,r.value)}(t,e):t instanceof yn?function(n,r){return r instanceof yn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&B_(s,r.filters[o]),!0):!1}(t,e):void U()}function V_(t){return t instanceof xe?function(e){return`${e.field.canonicalString()} ${e.op} ${ps(e.value)}`}(t):t instanceof yn?function(e){return e.op.toString()+" {"+e.getFilters().map(V_).join(" ,")+"}"}(t):"Filter"}class IP extends xe{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class xP extends xe{constructor(e,n){super(e,"in",n),this.keys=z_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class RP extends xe{constructor(e,n){super(e,"not-in",n),this.keys=z_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function z_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class NP extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fm(n)&&Jo(n.arrayValue,this.value)}}class AP extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jo(this.value.arrayValue,n)}}class DP extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jo(this.value.arrayValue,n)}}class PP extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Jo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function wv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new OP(t,e,n,r,i,s,o)}function pm(t){const e=z(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),mc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ps(r)).join(",")),e.dt=n}return e.dt}function mm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!B_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vv(t.startAt,e.startAt)&&vv(t.endAt,e.endAt)}function uf(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function LP(t,e,n,r,i,s,o,a){return new gc(t,e,n,r,i,s,o,a)}function yc(t){return new gc(t)}function Ev(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $P(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function MP(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function bP(t){return t.collectionGroup!==null}function es(t){const e=z(t);if(e.wt===null){e.wt=[];const n=MP(e),r=$P(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new po(n)),e.wt.push(new po(Qe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new po(Qe.keyField(),s))}}}return e.wt}function jn(t){const e=z(t);if(!e._t)if(e.limitType==="F")e._t=wv(e.path,e.collectionGroup,es(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of es(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new po(s.field,o))}const r=e.endAt?new _u(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new _u(e.startAt.position,e.startAt.inclusive):null;e._t=wv(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function cf(t,e,n){return new gc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vc(t,e){return mm(jn(t),jn(e))&&t.limitType===e.limitType}function H_(t){return`${pm(jn(t))}|lt:${t.limitType}`}function hf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>V_(r)).join(", ")}]`),mc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ps(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ps(r)).join(",")),`Target(${n})`}(jn(t))}; limitType=${t.limitType})`}function wc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):$.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of es(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=yv(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,es(n),r)||n.endAt&&!function(i,s,o){const a=yv(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,es(n),r))}(t,e)}function UP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function W_(t){return(e,n)=>{let r=!1;for(const i of es(t)){const s=FP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function FP(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?fs(a,l):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){wi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return $_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=new fe($.comparator);function Bn(){return jP}const K_=new fe($.comparator);function Qs(...t){let e=K_;for(const n of t)e=e.insert(n.key,n);return e}function q_(t){let e=K_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zr(){return mo()}function G_(){return mo()}function mo(){return new xs(t=>t.toString(),(t,e)=>t.isEqual(e))}const BP=new fe($.comparator),VP=new Je($.comparator);function W(...t){let e=VP;for(const n of t)e=e.add(n);return e}const zP=new Je(X);function HP(){return zP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Eu(e)?"-0":e}}function Y_(t){return{integerValue:""+t}}function WP(t,e){return EP(e)?Y_(e):Q_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this._=void 0}}function KP(t,e,n){return t instanceof Zo?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&hm(i)&&(i=dm(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ea?J_(t,e):t instanceof ta?Z_(t,e):function(r,i){const s=X_(r,i),o=_v(s)+_v(r.gt);return af(s)&&af(r.gt)?Y_(o):Q_(r.serializer,o)}(t,e)}function qP(t,e,n){return t instanceof ea?J_(t,e):t instanceof ta?Z_(t,e):n}function X_(t,e){return t instanceof Tu?af(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Zo extends Ec{}class ea extends Ec{constructor(e){super(),this.elements=e}}function J_(t,e){const n=eT(e);for(const r of t.elements)n.some(i=>gn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ta extends Ec{constructor(e){super(),this.elements=e}}function Z_(t,e){let n=eT(e);for(const r of t.elements)n=n.filter(i=>!gn(i,r));return{arrayValue:{values:n}}}class Tu extends Ec{constructor(e,n){super(),this.serializer=e,this.gt=n}}function _v(t){return Se(t.integerValue||t.doubleValue)}function eT(t){return fm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n){this.field=e,this.transform=n}}function QP(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ea&&r instanceof ea||n instanceof ta&&r instanceof ta?ds(n.elements,r.elements,gn):n instanceof Tu&&r instanceof Tu?gn(n.gt,r.gt):n instanceof Zo&&r instanceof Zo}(t.transform,e.transform)}class YP{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _c{}function tT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rT(t.key,Yt.none()):new Ra(t.key,t.data,Yt.none());{const n=t.data,r=ft.empty();let i=new Je(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pr(t.key,r,new St(i.toArray()),Yt.none())}}function XP(t,e,n){t instanceof Ra?function(r,i,s){const o=r.value.clone(),a=Sv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Pr?function(r,i,s){if(!Rl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Sv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(nT(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function go(t,e,n,r){return t instanceof Ra?function(i,s,o,a){if(!Rl(i.precondition,s))return o;const l=i.value.clone(),u=Cv(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pr?function(i,s,o,a){if(!Rl(i.precondition,s))return o;const l=Cv(i.fieldTransforms,a,s),u=s.data;return u.setAll(nT(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Rl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function JP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=X_(r.transform,i||null);s!=null&&(n===null&&(n=ft.empty()),n.set(r.field,s))}return n||null}function Tv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ds(n,r,(i,s)=>QP(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ra extends _c{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pr extends _c{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function nT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Sv(t,e,n){const r=new Map;oe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,qP(o,a,n[i]))}return r}function Cv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,KP(s,o,e))}return r}class rT extends _c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZP extends _c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&XP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=G_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=tT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(V.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,(n,r)=>Tv(n,r))&&ds(this.baseMutations,e.baseMutations,(n,r)=>Tv(n,r))}}class gm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length);let i=BP;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new gm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,q;function rO(t){switch(t){default:return U();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function iT(t){if(t===void 0)return Fn("GRPC error has no .code"),S.UNKNOWN;switch(t){case Te.OK:return S.OK;case Te.CANCELLED:return S.CANCELLED;case Te.UNKNOWN:return S.UNKNOWN;case Te.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Te.INTERNAL:return S.INTERNAL;case Te.UNAVAILABLE:return S.UNAVAILABLE;case Te.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Te.NOT_FOUND:return S.NOT_FOUND;case Te.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Te.ABORTED:return S.ABORTED;case Te.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Te.DATA_LOSS:return S.DATA_LOSS;default:return U()}}(q=Te||(Te={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ll}static getOrCreateInstance(){return ll===null&&(ll=new ym),ll}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ll=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=new Zi([4294967295,4294967295],0);function kv(t){const e=iO().encode(t),n=new sP;return n.update(e),new Uint8Array(n.digest())}function Iv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zi([n,r],0),new Zi([i,s],0)]}class vm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ys(`Invalid padding: ${n}`);if(r<0)throw new Ys(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ys(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ys(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Zi.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Zi.fromNumber(r)));return i.compare(sO)===1&&(i=new Zi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=kv(e),[r,i]=Iv(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new vm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=kv(e),[r,i]=Iv(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ys extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Na.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Tc(V.min(),i,new fe(X),Bn(),W())}}class Na{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Na(r,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class sT{constructor(e,n){this.targetId=e,this.Vt=n}}class oT{constructor(e,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class xv{constructor(){this.St=0,this.Dt=Nv(),this.Ct=tt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=W(),n=W(),r=W();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new Na(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=Nv()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class oO{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Bn(),this.zt=Rv(),this.Wt=new fe(X)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(uf(o))if(i===0){const a=new $(o.path);this.Yt(r,a,Ge.newNoDocument(a,V.min()))}else oe(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=ym.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,m,v,E,_,p;const f={localCacheCount:c,existenceFilterCount:h.count},g=h.unchangedNames;return g&&(f.bloomFilter={applied:u===0,hashCount:(d=g==null?void 0:g.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(E=(v=(m=g==null?void 0:g.bits)===null||m===void 0?void 0:m.bitmap)===null||v===void 0?void 0:v.length)!==null&&E!==void 0?E:0,padding:(p=(_=g==null?void 0:g.bits)===null||_===void 0?void 0:_.padding)!==null&&p!==void 0?p:0}),f}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=ai(s).toUint8Array()}catch(c){if(c instanceof M_)return hs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new vm(l,o,a)}catch(c){return hs(c instanceof Ys?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&uf(a.target)){const l=new $(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Ge.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=W();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Tc(e,n,this.Wt,this.jt,r);return this.jt=Bn(),this.zt=Rv(),this.Wt=new fe(X),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new xv,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Je(X),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new xv),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Rv(){return new fe($.comparator)}function Nv(){return new fe($.comparator)}const aO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),uO=(()=>({and:"AND",or:"OR"}))();class cO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function df(t,e){return t.useProto3Json||mc(e)?e:{value:e}}function Su(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hO(t,e){return Su(t,e.toTimestamp())}function mn(t){return oe(!!t),V.fromTimestamp(function(e){const n=Cr(e);return new Ne(n.seconds,n.nanos)}(t))}function wm(t,e){return function(n){return new le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function lT(t){const e=le.fromString(t);return oe(dT(e)),e}function ff(t,e){return wm(t.databaseId,e.path)}function Dh(t,e){const n=lT(e);if(n.get(1)!==t.databaseId.projectId)throw new L(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(uT(n))}function pf(t,e){return wm(t.databaseId,e)}function dO(t){const e=lT(t);return e.length===4?le.emptyPath():uT(e)}function mf(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function uT(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Av(t,e,n){return{name:ff(t,e),fields:n.value.mapValue.fields}}function fO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(oe(u===void 0||typeof u=="string"),tt.fromBase64String(u||"")):(oe(u===void 0||u instanceof Uint8Array),tt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?S.UNKNOWN:iT(l.code);return new L(u,l.message||"")}(o);n=new oT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Dh(t,r.document.name),s=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):V.min(),a=new ft({mapValue:{fields:r.document.fields}}),l=Ge.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Nl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Dh(t,r.document),s=r.readTime?mn(r.readTime):V.min(),o=Ge.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Nl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Dh(t,r.document),s=r.removedTargetIds||[];n=new Nl([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new nO(i,s),a=r.targetId;n=new sT(a,o)}}return n}function pO(t,e){let n;if(e instanceof Ra)n={update:Av(t,e.key,e.value)};else if(e instanceof rT)n={delete:ff(t,e.key)};else if(e instanceof Pr)n={update:Av(t,e.key,e.data),updateMask:SO(e.fieldMask)};else{if(!(e instanceof ZP))return U();n={verify:ff(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Zo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ea)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ta)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Tu)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:hO(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(t,e.precondition)),n}function mO(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?mn(r.updateTime):mn(i);return s.isEqual(V.min())&&(s=mn(i)),new YP(s,r.transformResults||[])}(n,e))):[]}function gO(t,e){return{documents:[pf(t,e.path)]}}function yO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=pf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=pf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return hT(yn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Ii(c.field),direction:EO(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=df(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function vO(t){let e=dO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=cT(c);return h instanceof yn&&j_(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new po(xi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,mc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new _u(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new _u(d,h)}(n.endAt)),LP(e,i,o,s,a,"F",l,u)}function wO(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function cT(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=xi(e.unaryFilter.field);return xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=xi(e.unaryFilter.field);return xe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xi(e.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=xi(e.unaryFilter.field);return xe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(e){return xe.create(xi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return yn.create(e.compositeFilter.filters.map(n=>cT(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(t):U()}function EO(t){return aO[t]}function _O(t){return lO[t]}function TO(t){return uO[t]}function Ii(t){return{fieldPath:t.canonicalString()}}function xi(t){return Qe.fromServerFormat(t.fieldPath)}function hT(t){return t instanceof xe?function(e){if(e.op==="=="){if(gv(e.value))return{unaryFilter:{field:Ii(e.field),op:"IS_NAN"}};if(mv(e.value))return{unaryFilter:{field:Ii(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(gv(e.value))return{unaryFilter:{field:Ii(e.field),op:"IS_NOT_NAN"}};if(mv(e.value))return{unaryFilter:{field:Ii(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ii(e.field),op:_O(e.op),value:e.value}}}(t):t instanceof yn?function(e){const n=e.getFilters().map(r=>hT(r));return n.length===1?n[0]:{compositeFilter:{op:TO(e.op),filters:n}}}(t):U()}function SO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n,r,i,s=V.min(),o=V.min(),a=tt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e){this.fe=e}}function kO(t){const e=vO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(){this.rn=new xO}addToCollectionParentIndex(e,n){return this.rn.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Sr.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Sr.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class xO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je(le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new ms(0)}static Mn(){return new ms(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(){this.changes=new xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&go(r.mutation,i,St.empty(),Ne.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const i=zr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Qs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Bn();const o=mo(),a=mo();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Pr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),go(c.mutation,u,c.mutation.getFieldMask(),Ne.now())):o.set(u.key,St.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new NO(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=mo();let i=new fe((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||St.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=G_();c.forEach(d=>{if(!s.has(d)){const m=tT(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return $.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(zr());let a=-1,l=s;return o.next(u=>x.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?x.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,W())).next(c=>({batchId:a,changes:q_(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=Qs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Qs();return this.indexManager.getCollectionParents(e,i).next(o=>x.forEach(o,a=>{const l=function(u,c){return new gc(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ge.newInvalidDocument(u)))});let o=Qs();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&go(u.mutation,l,St.empty(),Ne.now()),wc(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return x.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:mn(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:kO(r.bundledQuery),readTime:mn(r.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(){this.overlays=new fe($.comparator),this.ls=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zr();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=zr(),s=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new fe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=zr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=zr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return x.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tO(n,r));let s=this.ls.get(n);s===void 0&&(s=W(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.fs=new Je(De.ds),this.ws=new Je(De._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new De(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new De(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new $(new le([])),r=new De(n,e),i=new De(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new $(new le([])),r=new De(n,e),i=new De(n,e+1);let s=W();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new De(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return $.comparator(e.key,n.key)||X(e.As,n.As)}static _s(e,n){return X(e.As,n.As)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Je(De.ds)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new De(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new De(n,0),i=new De(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(X);return n.forEach(i=>{const s=new De(i,0),o=new De(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),x.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new De(new $(s),0);let a=new Je(X);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),x.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return x.forEach(n.mutations,i=>{const s=new De(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new De(n,0),i=this.Rs.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e){this.Ds=e,this.docs=new fe($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ge.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Bn();const o=n.path,a=new $(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||yP(gP(c),r)<=0||(i.has(c.key)||wc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}Cs(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $O(this)}getSize(e){return x.resolve(this.size)}}class $O extends RO{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e){this.persistence=e,this.xs=new xs(n=>pm(n),mm),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Em,this.targetCount=0,this.Ms=ms.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),x.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new ms(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Fn(n),x.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,n){this.$s={},this.overlays={},this.Os=new cm(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new MO(this),this.indexManager=new IO,this.remoteDocumentCache=function(r){return new LO(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new CO(n),this.qs=new DO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new OO(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new UO(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return x.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class UO extends wP{constructor(e){super(),this.currentSequenceNumber=e}}class _m{constructor(e){this.persistence=e,this.Qs=new Em,this.js=null}static zs(e){return new _m(e)}get Ws(){if(this.js)return this.js;throw U()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),x.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Ws,r=>{const i=$.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,V.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return x.or([()=>x.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Tm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(Ev(n))return x.resolve(null);let r=jn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cf(n,null,"F"),r=jn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,cf(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return Ev(n)||i.isEqual(V.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(hv()<=Y.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hf(n)),this.Wi(e,o,n,mP(i,-1)))})}ji(e,n){let r=new Je(W_(e));return n.forEach((i,s)=>{wc(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return hv()<=Y.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",hf(n)),this.Ui.getDocumentsMatchingQuery(e,n,Sr.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new fe(X),this.Yi=new xs(s=>pm(s),mm),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AO(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function BO(t,e,n,r){return new jO(t,e,n,r)}async function fT(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=W();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function VO(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=x.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(v=>{const E=l.docVersions.get(m);oe(E!==null),v.version.compareTo(E)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=W();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function pT(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function zO(t,e){const n=z(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(tt.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(v,E,_){return v.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,m,c)&&a.push(n.Bs.updateTargetData(s,m))});let l=Bn(),u=W();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(HO(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(V.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function HO(t,e,n){let r=W(),i=W();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(V.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function WO(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function KO(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function gf(t,e,n){const r=z(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!xa(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Dv(t,e,n){const r=z(t);let i=V.min(),s=W();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=z(a),h=c.Yi.get(u);return h!==void 0?x.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,jn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:V.min(),n?s:W())).next(a=>(qO(r,UP(e),a),{documents:a,ir:s})))}function qO(t,e,n){let r=t.Xi.get(e)||V.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class Pv{constructor(){this.activeTargetIds=HP()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GO{constructor(){this.Hr=new Pv,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Pv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ul=null;function Ph(){return ul===null?ul=268435456+Math.round(2147483648*Math.random()):ul++,"0x"+ul.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="WebChannelConnection";class JO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=Ph(),a=this.To(e,n);O("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(O("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw hs("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Is,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=YO[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=Ph();return new Promise((o,a)=>{const l=new iP;l.setWithCredentials(!0),l.listenOnce(tP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ah.NO_ERROR:const c=l.getResponseJson();O(We,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ah.TIMEOUT:O(We,`RPC '${e}' ${s} timed out`),a(new L(S.DEADLINE_EXCEEDED,"Request time out"));break;case Ah.HTTP_ERROR:const h=l.getStatus();if(O(We,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const v=function(E){const _=E.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(_)>=0?_:S.UNKNOWN}(m.status);a(new L(v,m.message))}else a(new L(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(S.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{O(We,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);O(We,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Ph(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ZD(),a=eP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new rP({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");O(We,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,m=!1;const v=new XO({ro:_=>{m?O(We,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(d||(O(We,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),O(We,`RPC '${e}' stream ${i} sending:`,_),h.send(_))},oo:()=>h.close()}),E=(_,p,f)=>{_.listen(p,g=>{try{f(g)}catch(T){setTimeout(()=>{throw T},0)}})};return E(h,sl.EventType.OPEN,()=>{m||O(We,`RPC '${e}' stream ${i} transport opened.`)}),E(h,sl.EventType.CLOSE,()=>{m||(m=!0,O(We,`RPC '${e}' stream ${i} transport closed`),v.wo())}),E(h,sl.EventType.ERROR,_=>{m||(m=!0,hs(We,`RPC '${e}' stream ${i} transport errored:`,_),v.wo(new L(S.UNAVAILABLE,"The operation could not be completed")))}),E(h,sl.EventType.MESSAGE,_=>{var p;if(!m){const f=_.data[0];oe(!!f);const g=f,T=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(T){O(We,`RPC '${e}' stream ${i} received error:`,T);const k=T.status;let C=function(D){const H=Te[D];if(H!==void 0)return iT(H)}(k),N=T.message;C===void 0&&(C=S.INTERNAL,N="Unknown error status: "+k+" with message "+T.message),m=!0,v.wo(new L(C,N)),h.close()}else O(We,`RPC '${e}' stream ${i} received:`,f),v._o(f)}}),E(a,nP.STAT_EVENT,_=>{_.stat===uv.PROXY?O(We,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===uv.NOPROXY&&O(We,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function Oh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t){return new cO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new mT(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new L(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZO extends gT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=fO(this.serializer,e),r=function(i){if(!("targetChange"in i))return V.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?V.min():s.readTime?mn(s.readTime):V.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=mf(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=uf(a)?{documents:gO(i,a)}:{query:yO(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=aT(i,s.resumeToken);const l=df(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(V.min())>0){o.readTime=Su(i,s.snapshotVersion.toTimestamp());const l=df(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=wO(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=mf(this.serializer),n.removeTarget=e,this.Wo(n)}}class eL extends gT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=mO(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.cu(r,n)}return oe(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=mf(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pO(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new L(S.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(S.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(S.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class nL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Fn(n),this.mu=!1):O("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Ei(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=z(a);l.vu.add(4),await Aa(l),l.bu.set("Unknown"),l.vu.delete(4),await Cc(l)}(this))})}),this.bu=new nL(r,i)}}async function Cc(t){if(Ei(t))for(const e of t.Ru)await e(!0)}async function Aa(t){for(const e of t.Ru)await e(!1)}function yT(t,e){const n=z(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),km(n)?Cm(n):Rs(n).Ko()&&Sm(n,e))}function vT(t,e){const n=z(t),r=Rs(n);n.Au.delete(e),r.Ko()&&wT(n,e),n.Au.size===0&&(r.Ko()?r.jo():Ei(n)&&n.bu.set("Unknown"))}function Sm(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(V.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Rs(t).su(e)}function wT(t,e){t.Vu.qt(e),Rs(t).iu(e)}function Cm(t){t.Vu=new oO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Rs(t).start(),t.bu.gu()}function km(t){return Ei(t)&&!Rs(t).Uo()&&t.Au.size>0}function Ei(t){return z(t).vu.size===0}function ET(t){t.Vu=void 0}async function iL(t){t.Au.forEach((e,n)=>{Sm(t,e)})}async function sL(t,e){ET(t),km(t)?(t.bu.Iu(e),Cm(t)):t.bu.set("Unknown")}async function oL(t,e,n){if(t.bu.set("Online"),e instanceof oT&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cu(t,r)}else if(e instanceof Nl?t.Vu.Ht(e):e instanceof sT?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(V.min()))try{const r=await pT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(tt.EMPTY_BYTE_STRING,u.snapshotVersion)),wT(i,a);const c=new ar(u.target,a,l,u.sequenceNumber);Sm(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Cu(t,r)}}async function Cu(t,e,n){if(!xa(e))throw e;t.vu.add(1),await Aa(t),t.bu.set("Offline"),n||(n=()=>pT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Cc(t)})}function _T(t,e){return e().catch(n=>Cu(t,n,e))}async function kc(t){const e=z(t),n=kr(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;aL(e);)try{const i=await WO(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,lL(e,i)}catch(i){await Cu(e,i)}TT(e)&&ST(e)}function aL(t){return Ei(t)&&t.Eu.length<10}function lL(t,e){t.Eu.push(e);const n=kr(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function TT(t){return Ei(t)&&!kr(t).Uo()&&t.Eu.length>0}function ST(t){kr(t).start()}async function uL(t){kr(t).hu()}async function cL(t){const e=kr(t);for(const n of t.Eu)e.uu(n.mutations)}async function hL(t,e,n){const r=t.Eu.shift(),i=gm.from(r,e,n);await _T(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await kc(t)}async function dL(t,e){e&&kr(t).ou&&await async function(n,r){if(i=r.code,rO(i)&&i!==S.ABORTED){const s=n.Eu.shift();kr(n).Qo(),await _T(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await kc(n)}var i}(t,e),TT(t)&&ST(t)}async function Lv(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Ei(n);n.vu.add(3),await Aa(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Cc(n)}async function fL(t,e){const n=z(t);e?(n.vu.delete(2),await Cc(n)):e||(n.vu.add(2),await Aa(n),n.bu.set("Unknown"))}function Rs(t){return t.Su||(t.Su=function(e,n,r){const i=z(e);return i.fu(),new ZO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:iL.bind(null,t),ao:sL.bind(null,t),nu:oL.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),km(t)?Cm(t):t.bu.set("Unknown")):(await t.Su.stop(),ET(t))})),t.Su}function kr(t){return t.Du||(t.Du=function(e,n,r){const i=z(e);return i.fu(),new eL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:uL.bind(null,t),ao:dL.bind(null,t),au:cL.bind(null,t),cu:hL.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await kc(t)):(await t.Du.stop(),t.Eu.length>0&&(O("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Im(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xm(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),xa(t))return new L(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Qs(),this.sortedSet=new fe(this.comparator)}static emptySet(e){return new ts(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ts)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ts;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(){this.Cu=new fe($.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):U():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class gs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new gs(e,n,ts.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{constructor(){this.Nu=void 0,this.listeners=[]}}class mL{constructor(){this.queries=new xs(e=>H_(e),vc),this.onlineState="Unknown",this.ku=new Set}}async function Rm(t,e){const n=z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new pL),i)try{s.Nu=await n.onListen(r)}catch(o){const a=xm(o,`Initialization of query '${hf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&Am(n)}async function Nm(t,e){const n=z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function gL(t,e){const n=z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Am(n)}function yL(t,e,n){const r=z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Am(t){t.ku.forEach(e=>{e.next()})}class Dm{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new gs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.key=e}}class kT{constructor(e){this.key=e}}class vL{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=W(),this.mutatedKeys=W(),this.tc=W_(e),this.ec=new ts(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new $v,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=wc(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),E=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let _=!1;d&&m?d.data.isEqual(m.data)?v!==E&&(r.track({type:3,doc:m}),_=!0):this.rc(d,m)||(r.track({type:2,doc:m}),_=!0,(l&&this.tc(m,l)>0||u&&this.tc(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),_=!0):d&&!m&&(r.track({type:1,doc:d}),_=!0,(l||u)&&(a=!0)),_&&(m?(o=o.add(m),s=E?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,d){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return m(h)-m(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new gs(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new $v,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=W(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new kT(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new CT(r))}),n}hc(e){this.Yu=e.ir,this.Zu=W();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return gs.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class wL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class EL{constructor(e){this.key=e,this.fc=!1}}class _L{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new xs(a=>H_(a),vc),this._c=new Map,this.mc=new Set,this.gc=new fe($.comparator),this.yc=new Map,this.Ic=new Em,this.Tc={},this.Ec=new Map,this.Ac=ms.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function TL(t,e){const n=PL(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await KO(n.localStore,jn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await SL(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&yT(n.remoteStore,o)}return i}async function SL(t,e,n,r,i){t.Rc=(h,d,m)=>async function(v,E,_,p){let f=E.view.sc(_);f.zi&&(f=await Dv(v.localStore,E.query,!1).then(({documents:k})=>E.view.sc(k,f)));const g=p&&p.targetChanges.get(E.targetId),T=E.view.applyChanges(f,v.isPrimaryClient,g);return bv(v,E.targetId,T.cc),T.snapshot}(t,h,d,m);const s=await Dv(t.localStore,e,!0),o=new vL(e,s.ir),a=o.sc(s.documents),l=Na.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);bv(t,n,u.cc);const c=new wL(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function CL(t,e){const n=z(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!vc(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await gf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),vT(n.remoteStore,r.targetId),yf(n,r.targetId)}).catch(Ia)):(yf(n,r.targetId),await gf(n.localStore,r.targetId,!0))}async function kL(t,e,n){const r=OL(t);try{const i=await function(s,o){const a=z(s),l=Ne.now(),u=o.reduce((d,m)=>d.add(m.key),W());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=Bn(),v=W();return a.Zi.getEntries(d,u).next(E=>{m=E,m.forEach((_,p)=>{p.isValidDocument()||(v=v.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(E=>{c=E;const _=[];for(const p of o){const f=JP(p,c.get(p.key).overlayedDocument);f!=null&&_.push(new Pr(p.key,f,b_(f.value.mapValue),Yt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,_,o)}).next(E=>{h=E;const _=E.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(d,E.batchId,_)})}).then(()=>({batchId:h.batchId,changes:q_(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new fe(X)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Da(r,i.changes),await kc(r.remoteStore)}catch(i){const s=xm(i,"Failed to persist write");n.reject(s)}}async function IT(t,e){const n=z(t);try{const r=await zO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?oe(o.fc):i.removedDocuments.size>0&&(oe(o.fc),o.fc=!1))}),await Da(n,r,e)}catch(r){await Ia(r)}}function Mv(t,e,n){const r=z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=z(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&Am(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IL(t,e,n){const r=z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new fe($.comparator);o=o.insert(s,Ge.newNoDocument(s,V.min()));const a=W().add(s),l=new Tc(V.min(),new Map,new fe(X),o,a);await IT(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),Pm(r)}else await gf(r.localStore,e,!1).then(()=>yf(r,e,n)).catch(Ia)}async function xL(t,e){const n=z(t),r=e.batch.batchId;try{const i=await VO(n.localStore,e);RT(n,r,null),xT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Da(n,i)}catch(i){await Ia(i)}}async function RL(t,e,n){const r=z(t);try{const i=await function(s,o){const a=z(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(oe(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);RT(r,e,n),xT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Da(r,i)}catch(i){await Ia(i)}}function xT(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function RT(t,e,n){const r=z(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function yf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||NT(t,r)})}function NT(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(vT(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Pm(t))}function bv(t,e,n){for(const r of n)r instanceof CT?(t.Ic.addReference(r.key,e),NL(t,r)):r instanceof kT?(O("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||NT(t,r.key)):U()}function NL(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(O("SyncEngine","New document in limbo: "+n),t.mc.add(r),Pm(t))}function Pm(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new $(le.fromString(e)),r=t.Ac.next();t.yc.set(r,new EL(n)),t.gc=t.gc.insert(n,r),yT(t.remoteStore,new ar(jn(yc(n.path)),r,"TargetPurposeLimboResolution",cm.ct))}}async function Da(t,e,n){const r=z(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Tm.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=z(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>x.forEach(l,h=>x.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>x.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!xa(c))throw c;O("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),m=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(h,v)}}}(r.localStore,s))}async function AL(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await fT(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new L(S.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Da(n,r.er)}}function DL(t,e){const n=z(t),r=n.yc.get(e);if(r&&r.fc)return W().add(r.key);{let i=W();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function PL(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=IT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IL.bind(null,e),e.dc.nu=gL.bind(null,e.eventManager),e.dc.Pc=yL.bind(null,e.eventManager),e}function OL(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RL.bind(null,e),e}class Uv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Sc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return BO(this.persistence,new FO,e.initialUser,this.serializer)}createPersistence(e){return new bO(_m.zs,this.serializer)}createSharedClientState(e){return new GO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class LL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Mv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AL.bind(null,this.syncEngine),await fL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new mL}createDatastore(e){const n=Sc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new JO(i));var i;return function(s,o,a,l){return new tL(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Mv(this.syncEngine,a,0),o=Ov.D()?new Ov:new QO,new rL(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new _L(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=z(e);O("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Aa(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ke.UNAUTHENTICATED,this.clientId=L_.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lh(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bL(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Lv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Lv(e.remoteStore,s)),t._onlineComponents=e}function ML(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function bL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ML(n))throw n;hs("Error using user provided cache. Falling back to memory cache: "+n),await Lh(t,new Uv)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Lh(t,new Uv);return t._offlineComponents}async function AT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Fv(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Fv(t,new LL))),t._onlineComponents}function UL(t){return AT(t).then(e=>e.syncEngine)}async function ku(t){const e=await AT(t),n=e.eventManager;return n.onListen=TL.bind(null,e.syncEngine),n.onUnlisten=CL.bind(null,e.syncEngine),n}function FL(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Om({next:h=>{s.enqueueAndForget(()=>Nm(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new L(S.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new L(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Dm(yc(o.path),u,{includeMetadataChanges:!0,Ku:!0});return Rm(i,c)}(await ku(t),t.asyncQueue,e,n,r)),r.promise}function jL(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Om({next:h=>{s.enqueueAndForget(()=>Nm(i,c)),h.fromCache&&a.source==="server"?l.reject(new L(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Dm(o,u,{includeMetadataChanges:!0,Ku:!0});return Rm(i,c)}(await ku(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t,e,n){if(!n)throw new L(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BL(t,e,n,r){if(e===!0&&r===!0)throw new L(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Bv(t){if(!$.isDocumentKey(t))throw new L(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vv(t){if($.isDocumentKey(t))throw new L(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Lm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lm(t);throw new L(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=DT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Ic{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new oP;switch(n.type){case"firstParty":return new cP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=jv.get(e);n&&(O("ComponentProvider","Removing Datastore"),jv.delete(e),n.terminate())}(this),Promise.resolve()}}function VL(t,e,n,r={}){var i;const s=(t=kt(t,Ic))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&hs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ke.MOCK_USER;else{a=P1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new L(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ke(u)}t._authCredentials=new aP(new O_(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}}class Pa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pa(this.firestore,e,this._query)}}class wr extends Pa{constructor(e,n,r){super(e,n,yc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new $(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function xc(t,e,...n){if(t=ue(t),PT("collection","path",e),t instanceof Ic){const r=le.fromString(e,...n);return Vv(r),new wr(t,null,r)}{if(!(t instanceof lt||t instanceof wr))throw new L(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return Vv(r),new wr(t.firestore,null,r)}}function Iu(t,e,...n){if(t=ue(t),arguments.length===1&&(e=L_.A()),PT("doc","path",e),t instanceof Ic){const r=le.fromString(e,...n);return Bv(r),new lt(t,null,new $(r))}{if(!(t instanceof lt||t instanceof wr))throw new L(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return Bv(r),new lt(t.firestore,t instanceof wr?t.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new mT(this,"async_queue_retry"),this.Xc=()=>{const n=Oh();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Oh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Oh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Dn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!xa(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=Im.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&U()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function Hv(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ir extends Ic{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new zL,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||OT(this),this._firestoreClient.terminate()}}function HL(t,e){const n=typeof t=="object"?t:Cp(),r=typeof t=="string"?t:e||"(default)",i=Gu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=N1("firestore");s&&VL(i,...s)}return i}function Rc(t){return t._firestoreClient||OT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function OT(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new TP(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,DT(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new $L(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ys(tt.fromBase64String(e))}catch(n){throw new L(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ys(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL=/^__.*__$/;class KL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ra(e,this.data,n,this.fieldTransforms)}}class LT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $T(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Mm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Mm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return xu(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if($T(this.ca)&&WL.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class qL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sc(e)}ya(e,n,r,i=!1){return new Mm({ca:e,methodName:n,ga:r,path:Qe.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bm(t){const e=t._freezeSettings(),n=Sc(t._databaseId);return new qL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function MT(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);Fm("Data must be an object, but it was:",o,r);const a=bT(r,o);let l,u;if(s.merge)l=new St(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=vf(e,h,n);if(!o.contains(d))throw new L(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);FT(c,d)||c.push(d)}l=new St(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new KL(new ft(a),l,u)}class Dc extends Ac{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dc}}class Um extends Ac{_toFieldTransform(e){return new GP(e.path,new Zo)}isEqual(e){return e instanceof Um}}function GL(t,e,n,r){const i=t.ya(1,e,n);Fm("Data must be an object, but it was:",i,r);const s=[],o=ft.empty();wi(r,(l,u)=>{const c=jm(e,l,n);u=ue(u);const h=i.da(c);if(u instanceof Dc)s.push(c);else{const d=Pc(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new St(s);return new LT(o,a,i.fieldTransforms)}function QL(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[vf(e,r,n)],l=[i];if(s.length%2!=0)throw new L(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(vf(e,s[d])),l.push(s[d+1]);const u=[],c=ft.empty();for(let d=a.length-1;d>=0;--d)if(!FT(u,a[d])){const m=a[d];let v=l[d];v=ue(v);const E=o.da(m);if(v instanceof Dc)u.push(m);else{const _=Pc(v,E);_!=null&&(u.push(m),c.set(m,_))}}const h=new St(u);return new LT(c,h,o.fieldTransforms)}function Pc(t,e){if(UT(t=ue(t)))return Fm("Unsupported field value:",e,t),bT(t,e);if(t instanceof Ac)return function(n,r){if(!$T(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Pc(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ue(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return WP(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ne.fromDate(n);return{timestampValue:Su(r.serializer,i)}}if(n instanceof Ne){const i=new Ne(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Su(r.serializer,i)}}if(n instanceof $m)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ys)return{bytesValue:aT(r.serializer,n._byteString)};if(n instanceof lt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Lm(n)}`)}(t,e)}function bT(t,e){const n={};return $_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wi(t,(r,i)=>{const s=Pc(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function UT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof $m||t instanceof ys||t instanceof lt||t instanceof Ac)}function Fm(t,e,n){if(!UT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Lm(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function vf(t,e,n){if((e=ue(e))instanceof Nc)return e._internalPath;if(typeof e=="string")return jm(t,e);throw xu("Field path arguments must be of type string or ",t,!1,void 0,n)}const YL=new RegExp("[~\\*/\\[\\]]");function jm(t,e,n){if(e.search(YL)>=0)throw xu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nc(...e.split("."))._internalPath}catch{throw xu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(S.INVALID_ARGUMENT,a+t+l)}function FT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(BT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XL extends jT{data(){return super.data()}}function BT(t,e){return typeof e=="string"?jm(t,e):e instanceof Nc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class JL{convertValue(e,n="none"){switch(li(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new $m(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=dm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Yo(e));default:return null}}convertTimestamp(e){const n=Cr(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);oe(dT(r));const i=new Xo(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||Fn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class HT extends jT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Al(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(BT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Al extends HT{data(e={}){return super.data(e)}}class WT{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Xs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Al(this._firestore,this._userDataWriter,r.key,r,new Xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Al(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Xs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Al(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Xs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:ZL(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ZL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(t){t=kt(t,lt);const e=kt(t.firestore,Ir);return FL(Rc(e),t._key).then(n=>qT(e,t,n))}class Bm extends JL{constructor(e){super(),this.firestore=e}convertBytes(e){return new ys(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function KT(t){t=kt(t,Pa);const e=kt(t.firestore,Ir),n=Rc(e),r=new Bm(e);return VT(t._query),jL(n,t._query).then(i=>new WT(e,r,t,i))}function e$(t,e,n){t=kt(t,lt);const r=kt(t.firestore,Ir),i=zT(t.converter,e,n);return Vm(r,[MT(bm(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Yt.none())])}function t$(t,e,n,...r){t=kt(t,lt);const i=kt(t.firestore,Ir),s=bm(i);let o;return o=typeof(e=ue(e))=="string"||e instanceof Nc?QL(s,"updateDoc",t._key,e,n,r):GL(s,"updateDoc",t._key,e),Vm(i,[o.toMutation(t._key,Yt.exists(!0))])}function n$(t,e){const n=kt(t.firestore,Ir),r=Iu(t),i=zT(t.converter,e);return Vm(n,[MT(bm(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Yt.exists(!1))]).then(()=>r)}function r$(t,...e){var n,r,i;t=ue(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Hv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Hv(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof lt)u=kt(t.firestore,Ir),c=yc(t._key.path),l={next:h=>{e[o]&&e[o](qT(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=kt(t,Pa);u=kt(h.firestore,Ir),c=h._query;const d=new Bm(u);l={next:m=>{e[o]&&e[o](new WT(u,d,h,m))},error:e[o+1],complete:e[o+2]},VT(t._query)}return function(h,d,m,v){const E=new Om(v),_=new Dm(d,E,m);return h.asyncQueue.enqueueAndForget(async()=>Rm(await ku(h),_)),()=>{E.Dc(),h.asyncQueue.enqueueAndForget(async()=>Nm(await ku(h),_))}}(Rc(u),c,a,l)}function Vm(t,e){return function(n,r){const i=new Dn;return n.asyncQueue.enqueueAndForget(async()=>kL(await UL(n),r,i)),i.promise}(Rc(t),e)}function qT(t,e,n){const r=n.docs.get(e._key),i=new Bm(t);return new HT(t,i,e._key,r,new Xs(n.hasPendingWrites,n.fromCache),e.converter)}function i$(){return new Um("serverTimestamp")}(function(t,e=!0){(function(n){Is=n})(pi),ni(new Tr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ir(new lP(n.getProvider("auth-internal")),new dP(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),dn(cv,"3.12.2",t),dn(cv,"3.12.2","esm2017")})();const GT="AIzaSyC1IqrdEPTT1ZoeKikj2jm04xUteoGHxlk";console.log(GT);const s$={apiKey:GT,authDomain:"member-portal-8a367.firebaseapp.com",projectId:"member-portal-8a367",storageBucket:"member-portal-8a367.appspot.com",messagingSenderId:"389153166875",appId:"1:389153166875:web:a2cde7e4ae132942d74abe",measurementId:"G-4ZCLBGQ773"},zm=$1(s$),jt=J2(zm),ui=HL(zm),yo=jN(zm),Kv=async(t,e)=>{try{await MA(jt,t,e)}catch(n){console.error(n),alert(n.message)}},o$=async(t,e)=>{try{const r=(await $A(jt,t,e)).user;await n$(xc(ui,"users"),{uid:r.uid,authProvider:"local",email:t})}catch(n){console.error(n),alert(n.message)}},a$=async t=>{try{await LA(jt,t),alert("Password reset link sent!")}catch(e){console.error(e),alert(e.message)}},l$=()=>{jA(jt)};async function u$(t,e,n,r,i,s,o){try{const a=t.uid,l=Iu(ui,"properties",a);await e$(l,{uid:t.uid,address:e,name:n,email:r,phone:i,vacancy:s?"Yes":"No",availability:o,timestamp:i$()})}catch(a){console.error(a)}}function QT(t){return r$(xc(ui,"properties"),e=>{const n=e.docs.map(r=>({id:r.id,...r.data()}));typeof t=="function"&&t(n)})}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function c$(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function h$(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var zi=function(){return zi=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},zi.apply(this,arguments)},YT=function(t){return{loading:t==null,value:t}},d$=function(){return function(t,e){switch(e.type){case"error":return zi(zi({},t),{error:e.error,loading:!1,value:void 0});case"reset":return YT(e.defaultValue);case"value":return zi(zi({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},f$=function(t){var e=t?t():void 0,n=y.useReducer(d$(),YT(e)),r=n[0],i=n[1],s=y.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=y.useCallback(function(l){i({type:"error",error:l})},[]),a=y.useCallback(function(l){i({type:"value",value:l})},[]);return y.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},Or=function(t,e){var n=f$(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return y.useEffect(function(){var l=FA(t,function(u){return c$(void 0,void 0,void 0,function(){var c;return h$(this,function(h){switch(h.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return h.sent(),[3,4];case 3:return c=h.sent(),s(c),[3,4];case 4:return o(u),[2]}})})},s);return function(){l()}},[t]),[a,i,r]},XT={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(XT);var p$=XT.exports;const $e=Nu(p$),m$=["xxl","xl","lg","md","sm","xs"],g$="xs",Hm=y.createContext({prefixes:{},breakpoints:m$,minBreakpoint:g$});function At(t,e){const{prefixes:n}=y.useContext(Hm);return t||n[e]||e}function JT(){const{breakpoints:t}=y.useContext(Hm);return t}function ZT(){const{minBreakpoint:t}=y.useContext(Hm);return t}var y$=/-(.)/g;function v$(t){return t.replace(y$,function(e,n){return n.toUpperCase()})}const w$=t=>t[0].toUpperCase()+v$(t).slice(1);function wn(t,{displayName:e=w$(t),Component:n,defaultProps:r}={}){const i=y.forwardRef(({className:s,bsPrefix:o,as:a=n||"div",...l},u)=>{const c={...r,...l},h=At(o,t);return w.jsx(a,{ref:u,className:$e(s,h),...c})});return i.displayName=e,i}const Wm=t=>y.forwardRef((e,n)=>w.jsx("div",{...e,ref:n,className:$e(e.className,t)})),eS=y.forwardRef(({bsPrefix:t,className:e,variant:n,as:r="img",...i},s)=>{const o=At(t,"card-img");return w.jsx(r,{ref:s,className:$e(n?`${o}-${n}`:o,e),...i})});eS.displayName="CardImg";const E$=eS,tS=y.createContext(null);tS.displayName="CardHeaderContext";const _$=tS,nS=y.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=At(t,"card-header"),o=y.useMemo(()=>({cardHeaderBsPrefix:s}),[s]);return w.jsx(_$.Provider,{value:o,children:w.jsx(n,{ref:i,...r,className:$e(e,s)})})});nS.displayName="CardHeader";const T$=nS,S$=Wm("h5"),C$=Wm("h6"),rS=wn("card-body"),k$=wn("card-title",{Component:S$}),I$=wn("card-subtitle",{Component:C$}),x$=wn("card-link",{Component:"a"}),R$=wn("card-text",{Component:"p"}),N$=wn("card-footer"),A$=wn("card-img-overlay"),iS=y.forwardRef(({bsPrefix:t,className:e,bg:n,text:r,border:i,body:s=!1,children:o,as:a="div",...l},u)=>{const c=At(t,"card");return w.jsx(a,{ref:u,...l,className:$e(e,c,n&&`bg-${n}`,r&&`text-${r}`,i&&`border-${i}`),children:s?w.jsx(rS,{children:o}):o})});iS.displayName="Card";const we=Object.assign(iS,{Img:E$,Title:k$,Subtitle:I$,Body:rS,Link:x$,Text:R$,Header:T$,Footer:N$,ImgOverlay:A$}),sS=y.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=At(t,"row"),o=JT(),a=ZT(),l=`${s}-cols`,u=[];return o.forEach(c=>{const h=r[c];delete r[c];let d;h!=null&&typeof h=="object"?{cols:d}=h:d=h;const m=c!==a?`-${c}`:"";d!=null&&u.push(`${l}${m}-${d}`)}),w.jsx(n,{ref:i,...r,className:$e(e,s,...u)})});sS.displayName="Row";const Lr=sS;function D$({as:t,bsPrefix:e,className:n,...r}){e=At(e,"col");const i=JT(),s=ZT(),o=[],a=[];return i.forEach(l=>{const u=r[l];delete r[l];let c,h,d;typeof u=="object"&&u!=null?{span:c,offset:h,order:d}=u:c=u;const m=l!==s?`-${l}`:"";c&&o.push(c===!0?`${e}${m}`:`${e}${m}-${c}`),d!=null&&a.push(`order${m}-${d}`),h!=null&&a.push(`offset${m}-${h}`)}),[{...r,className:$e(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const oS=y.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=D$(t);return w.jsx(i,{...r,ref:e,className:$e(n,!o.length&&s)})});oS.displayName="Col";const bt=oS;function P$(){const[t,e]=y.useState(""),[n,r]=y.useState(""),[i,s]=Or(jt),o=fi();y.useEffect(()=>{i&&(async()=>(await KT(xc(ui,"properties"))).empty?o("/member-portal/signupform"):o("/member-portal/dashboard"))()},[i,s,o]);const a=l=>{l.key==="Enter"&&Kv(t,n)};return w.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:w.jsx(we,{style:{border:"1px solid black",backgroundColor:"lightgrey",display:"flex",alignItems:"center",justifyContent:"center",padding:"2em"},children:w.jsxs(Lr,{children:[w.jsxs(bt,{children:[w.jsx("input",{type:"text",className:"login__textBox",value:t,onChange:l=>e(l.target.value),placeholder:"E-mail Address",onKeyDown:a}),w.jsx("div",{style:{marginTop:"10px",display:"flex"},children:w.jsx(Kr,{className:"navOption2",to:"/member-portal/reset",tabIndex:-1,children:"Forgot Password"})}),w.jsxs("div",{style:{fontSize:"15px",marginTop:"5px",whiteSpace:"nowrap"},children:["Don't have an account?"," ",w.jsx(Kr,{className:"navOption2",to:"/member-portal/register",tabIndex:-1,children:"Register"})," ","now."]})]}),w.jsx(bt,{children:w.jsx("input",{type:"password",className:"login__textBox",value:n,onChange:l=>r(l.target.value),placeholder:"Password",onKeyDown:a})}),w.jsx(bt,{style:{marginTop:"-10px"},children:w.jsx("button",{style:{borderRadius:"8px",width:"80px",display:"flex"},onClick:()=>Kv(t,n),children:"Login"})})]})})})}function O$(){const[t,e]=y.useState(""),[n,r]=y.useState(""),[i,s,o]=Or(jt),a=fi(),l=()=>{o$(t,n)};y.useEffect(()=>{s||i&&a("/member-portal/signupform")},[i,s]);const u=c=>{c.key==="Enter"&&l()};return w.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:w.jsx(we,{style:{border:"1px solid black",backgroundColor:"lightgrey",display:"flex",alignItems:"center",justifyContent:"center",padding:"2em"},children:w.jsxs(Lr,{children:[w.jsxs(bt,{children:[w.jsx("input",{type:"text",className:"login__textBox",value:t,onChange:c=>e(c.target.value),placeholder:"E-mail Address",onKeyDown:u}),w.jsxs("div",{style:{fontSize:"15px",marginTop:"5px"},children:["Already have an account?"," ",w.jsx(Kr,{className:"navOption2",to:"/member-portal/",tabIndex:-1,children:"Login"})," ","now."]})]}),w.jsx(bt,{children:w.jsx("input",{type:"password",className:"login__textBox",value:n,onChange:c=>r(c.target.value),placeholder:"Password",onKeyDown:u})}),w.jsx(bt,{style:{marginTop:"-10px"},children:w.jsx("button",{style:{borderRadius:"8px",width:"80px",display:"flex",justifyContent:"center"},onClick:l,children:"Register"})})]})})})}function L$(){const[t,e]=y.useState(""),[n,r,i]=Or(jt),s=fi();return y.useEffect(()=>{r||n&&s("/member-portal/dashboard")},[n,r]),w.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:w.jsx(we,{style:{border:"1px solid black",backgroundColor:"lightgrey",display:"flex",alignItems:"center",justifyContent:"center",padding:"2em"},children:w.jsx(Lr,{children:w.jsxs(bt,{style:{justifyContent:"center"},children:[w.jsx("input",{type:"text",className:"login__textBox",value:t,onChange:o=>e(o.target.value),placeholder:"E-mail Address"}),w.jsx("button",{style:{borderRadius:"8px",width:"277px",display:"flex",justifyContent:"center",marginTop:"10px"},onClick:()=>a$(t),children:"Send password reset email"}),w.jsxs("div",{style:{fontSize:"15px",marginTop:"5px"},children:["Don't have an account?"," ",w.jsx(Kr,{className:"navOption2",to:"/member-portal/register",children:"Register"})," ","now."]})]})})})})}const $$="/member-portal/assets/hd1080-f21f276b.png";function M$(){const[t,e]=y.useState(null),[n,r]=y.useState([]),[i]=Or(jt),s=uo(yo,`${i.uid}`),o=u=>new Promise(c=>{const h=new FileReader;h.onload=function(d){const m=new Image;m.src=d.target.result,m.onload=function(){const v=document.createElement("canvas"),E=v.getContext("2d"),_=m.width/m.height;let p,f,g,T;_>1?(p=1080,f=1080/_,g=0,T=(1080-f)/2):(p=1080*_,f=1080,g=(1080-p)/2,T=0),v.width=1080,v.height=1080,E.drawImage(m,g,T,p,f,0,0,1080,1080);const k=v.toDataURL(u.type);c(k)}},h.readAsDataURL(u)}),a=async()=>{if(t===null||i===null)return;const u=await o(t),c=uo(yo,`${i.uid}/${t.name}`);UN(c,t).then(h=>{au(h.ref).then(d=>{r(m=>[...m,u])})})},l=async u=>{const c=n.findIndex(h=>h===u);if(c!==-1){const h=[...n];h.splice(c,1),r(h);try{const d=uo(yo,`${i.uid}`);(await ou(d)).items.forEach(async v=>{await FN(v)}),console.log("All images deleted successfully.")}catch(d){console.error("Error deleting images:",d)}}};return y.useEffect(()=>{let u=!0;return ou(s).then(c=>{u&&(r([]),c.items.forEach(h=>{au(h).then(d=>{r(m=>[...m,d])})}))}),()=>{u=!1}},[]),w.jsx(Lr,{children:w.jsxs(bt,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:[w.jsx("input",{style:{marginBottom:"10px",fontSize:"13px",marginTop:"20px",marginLeft:"190px"},type:"file",disabled:n.length>0,onChange:u=>{e(u.target.files[0])}}),w.jsx("button",{style:{borderRadius:"8px",marginBottom:"10px",marginTop:"20px"},onClick:a,disabled:n.length>0,children:"Upload Image"}),n.length===0?w.jsx("img",{style:{border:"1px solid black",marginBottom:"20px",marginTop:"20px"},src:$$,alt:"Placeholder"}):n.map((u,c)=>w.jsxs("div",{style:{position:"relative",display:"inline-block",margin:"20px"},children:[w.jsx("img",{style:{border:"1px solid black",marginBottom:"20px",marginTop:"20px"},src:u,alt:"Uploaded"}),w.jsx("button",{className:"delete-button",onClick:()=>l(u),children:"X"})]},c))]})})}function b$(){const[t,e,n]=Or(jt),[r,i]=y.useState(""),[s,o]=y.useState(""),[a,l]=y.useState(" "),[u,c]=y.useState(" "),[h,d]=y.useState(" "),[m,v]=y.useState(" "),E=fi(),[_,p]=y.useState(!1),[f,g]=y.useState(!1),[T,k]=y.useState(!1),[C,N]=y.useState(!1),[D,H]=y.useState(!1),[j,Ae]=y.useState(!1),Bt=async()=>{try{const G=t.uid,Dt=await Wv(Iu(ui,"properties",G));if(Dt.exists()){const _n=Dt.data();l(_n.address),i(_n.name),o(_n.email),c(_n.phone),d(_n.vacancy),v(_n.availability)}else console.log("User data not found.")}catch(G){console.error(G),alert("An error occurred while fetching user data")}},vt=G=>{l(G.target.value)},En=G=>{i(G.target.value)},Hn=G=>{o(G.target.value)},ht=G=>{c(G.target.value)},wt=G=>{d(G.target.value)},R=G=>{v(G.target.value)},b=()=>{H(!0)},B=()=>{p(!0)},J=()=>{g(!0)},ne=()=>{Ae(!0)},Et=()=>{k(!0)},nt=()=>{N(!0)},_e=async()=>{try{const G=t.uid,Dt=Iu(ui,"properties",G);await t$(Dt,{address:a,name:r,email:s,phone:u,vacancy:h,availability:m});const en=(await Wv(Dt)).data();l(en.address),i(en.name),o(en.email),c(en.phone),d(en.vacancy),v(en.availability),p(!1),g(!1),k(!1),N(!1),H(!1),Ae(!1)}catch(G){console.error(G)}};return y.useEffect(()=>{if(!e){if(!t)return E("/member-portal/");Bt()}},[t,e]),w.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:[w.jsx(we,{style:{border:"1px solid black",backgroundColor:"lightgrey",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"20px"},children:w.jsx(Lr,{children:w.jsxs(bt,{style:{justifyContent:"center",textAlign:"center"},children:[w.jsx(we.Header,{style:{backgroundColor:"lightsteelblue",width:"100%",marginTop:"0px",textAlign:"center",marginBottom:0},children:"Your Property Address and Contact Info"}),w.jsx("div",{className:"dash_item",children:D?w.jsx("input",{type:"text",value:a,onChange:vt}):w.jsxs(w.Fragment,{children:[a," ",w.jsx("span",{className:"edit-icon",onClick:b,children:"✎"})]})}),w.jsx("div",{className:"dash_item",children:_?w.jsx("input",{type:"text",value:r,onChange:En}):w.jsxs(w.Fragment,{children:[r," ",w.jsx("span",{className:"edit-icon",onClick:B,children:"✎"})]})}),w.jsx("div",{className:"dash_item",children:f?w.jsx("input",{type:"text",value:s,onChange:Hn}):w.jsxs(w.Fragment,{children:[s," ",w.jsx("span",{className:"edit-icon",onClick:J,children:"✎"})]})}),w.jsx("div",{className:"dash_item",children:j?w.jsx("input",{type:"tel",value:u,onChange:ht}):w.jsxs(w.Fragment,{children:[u," ",w.jsx("span",{className:"edit-icon",onClick:ne,children:"✎"})]})}),w.jsxs("div",{className:"dash_item",children:["Vacancy:"," ",T?w.jsxs("select",{value:h,onChange:wt,children:[w.jsx("option",{value:"Yes",children:"Yes"}),w.jsx("option",{value:"No",children:"No"})]}):w.jsxs(w.Fragment,{children:[h," ",w.jsx("span",{className:"edit-icon",onClick:Et,children:"✎"})]})]}),w.jsxs("div",{className:"dash_item",children:["Capacity:"," ",C?w.jsx("input",{type:"number",value:m,onChange:R,min:0,max:10}):w.jsxs(w.Fragment,{children:[m," ",w.jsx("span",{className:"edit-icon",onClick:nt,children:"✎"})]})]}),w.jsx("button",{style:{borderRadius:"8px",display:"flex",justifyContent:"center",marginBottom:"10px",marginLeft:"112px"},onClick:_e,children:"Update"})]})})}),w.jsxs(we,{style:{border:"1px solid black",backgroundColor:"lightgrey",display:"flex",alignItems:"center",justifyContent:"center"},children:[w.jsx(we.Header,{style:{backgroundColor:"lightsteelblue",width:"100%",marginTop:"0px",textAlign:"center",marginBottom:0},children:"Upload an Image of Your Space"}),w.jsx(M$,{})]})]})}const U$=()=>{const[t,e]=y.useState([]),[n,r]=y.useState({});return y.useEffect(()=>{const i=QT(s=>{e(s)});return()=>{i()}},[]),y.useEffect(()=>{let i=!0;const s={};return Promise.all(t.map(o=>{const a=uo(yo,`${o.uid}`);return ou(a).then(l=>Promise.all(l.items.map(u=>au(u))).then(u=>{s[o.uid]=u}))})).then(()=>{i&&r(s)}),()=>{i=!1}},[t]),w.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:t.map((i,s)=>s%3===0&&w.jsx(Lr,{children:t.slice(s,s+3).map((o,a)=>w.jsx(bt,{children:w.jsx(we,{style:{border:"1px solid black",backgroundColor:"lightgrey",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"},children:w.jsxs(we.Body,{style:{justifyContent:"center",textAlign:"center",lineHeight:"4px"},children:[w.jsx(we.Title,{children:o.address}),w.jsx(we.Text,{children:o.name}),w.jsx(we.Text,{children:o.email}),w.jsx(we.Text,{children:o.phone}),w.jsxs(we.Text,{children:["Vacancy: ",o.vacancy]}),w.jsxs(we.Text,{children:["Capacity: ",o.availability]}),n[o.uid]&&n[o.uid].map((l,u)=>w.jsx("img",{style:{border:"1px solid black",marginBottom:"20px",marginTop:"20px"},src:l,alt:"Uploaded"},u))]})})},a))},s))})};function F$(){const t=fi(),[e]=Or(jt),[n,r]=y.useState({address:"",name:"",email:"",phone:"",vacancy:!1,availability:""}),i=o=>{const{name:a,value:l,type:u,checked:c}=o.target,h=u==="checkbox"?c:l;r(d=>({...d,[a]:h}))},s=o=>{o.preventDefault(),u$(e,n.address,n.name,n.email,n.phone,n.vacancy,n.availability),r({address:"",name:"",email:"",phone:"",vacancy:!1,availability:""}),t("/member-portal/dashboard")};return w.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:w.jsx(we,{style:{border:"1px solid black",backgroundColor:"lightgrey",display:"flex",alignItems:"center",justifyContent:"center"},children:w.jsx(Lr,{children:w.jsxs(bt,{style:{justifyContent:"center",textAlign:"center"},children:[w.jsx(we.Header,{style:{backgroundColor:"white",width:"100%",marginTop:"0px",textAlign:"center",marginBottom:0},children:"Sign Up as a Host"}),w.jsxs("form",{onSubmit:s,style:{padding:"2em"},children:[w.jsx("input",{type:"text",name:"address",placeholder:"property address",value:n.address,onChange:i,className:"login__textBox",required:!0,minLength:1}),w.jsx("input",{style:{marginTop:"15px"},type:"text",name:"name",placeholder:"contact first and last name",value:n.name,onChange:i,className:"login__textBox",required:!0,minLength:1}),w.jsx("input",{style:{marginTop:"15px"},type:"email",name:"email",placeholder:"contact email",value:n.email,onChange:i,className:"login__textBox",required:!0,minLength:1}),w.jsx("input",{style:{marginTop:"15px"},type:"tel",name:"phone",placeholder:"contact phone",value:n.phone,onChange:i,className:"login__textBox",minLength:1}),w.jsxs("label",{style:{marginTop:"15px",fontSize:"13px"},children:[w.jsx("input",{type:"checkbox",name:"vacancy",checked:n.vacancy,onChange:i,placeholder:"number of rooms available"})," ","Vacancy?"]}),w.jsx("br",{}),w.jsxs("div",{style:{marginTop:"15px",fontSize:"13px"},children:[" ","Capacity"," "]}),w.jsx("input",{style:{marginTop:"5px",fontSize:"13px"},type:"number",name:"availability",placeholder:"1",value:n.availability,onChange:i,min:0,max:10}),w.jsx("br",{}),w.jsx("br",{}),w.jsx("button",{type:"submit",disabled:n.name<1,style:{borderRadius:"8px",marginLeft:"94px",display:"flex",justifyContent:"center"},children:"Submit"})]})]})})})})}function wf(){return wf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wf.apply(this,arguments)}function aS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function qv(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function j$(t){var e=B$(t,"string");return typeof e=="symbol"?e:String(e)}function B$(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function V$(t,e,n){var r=y.useRef(t!==void 0),i=y.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,y.useCallback(function(u){for(var c=arguments.length,h=new Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];n&&n.apply(void 0,[u].concat(h)),o(u)},[n])]}function z$(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[qv(r)],a=s[r],l=aS(s,[qv(r),r].map(j$)),u=e[r],c=V$(a,o,t[u]),h=c[0],d=c[1];return wf({},l,(i={},i[r]=h,i[u]=d,i))},t)}function Ef(t,e){return Ef=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ef(t,e)}function H$(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Ef(t,e)}function Km(t){return t&&t.ownerDocument||document}function W$(t){var e=Km(t);return e&&e.defaultView||window}function K$(t,e){return W$(t).getComputedStyle(t,e)}var q$=/([A-Z])/g;function G$(t){return t.replace(q$,"-$1").toLowerCase()}var Q$=/^ms-/;function cl(t){return G$(t).replace(Q$,"-ms-")}var Y$=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function X$(t){return!!(t&&Y$.test(t))}function Pn(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(cl(e))||K$(t).getPropertyValue(cl(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(cl(i)):X$(i)?r+=i+"("+s+") ":n+=cl(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var lS={exports:{}},J$="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Z$=J$,eM=Z$;function uS(){}function cS(){}cS.resetWarningCache=uS;var tM=function(){function t(r,i,s,o,a,l){if(l!==eM){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:cS,resetWarningCache:uS};return n.PropTypes=n,n};lS.exports=tM();var nM=lS.exports;const $h=Nu(nM),Gv={disabled:!1},hS=qt.createContext(null);var rM=function(e){return e.scrollTop},Js="unmounted",Yn="exited",Kt="entering",Cn="entered",na="exiting",zn=function(t){H$(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=Yn,s.appearStatus=Kt):l=Cn:r.unmountOnExit||r.mountOnEnter?l=Js:l=Yn,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===Js?{status:Yn}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==Kt&&o!==Cn&&(s=Kt):(o===Kt||o===Cn)&&(s=na)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===Kt){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:ji.findDOMNode(this);o&&rM(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Yn&&this.setState({status:Js})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[ji.findDOMNode(this),a],u=l[0],c=l[1],h=this.getTimeouts(),d=a?h.appear:h.enter;if(!i&&!o||Gv.disabled){this.safeSetState({status:Cn},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:Kt},function(){s.props.onEntering(u,c),s.onTransitionEnd(d,function(){s.safeSetState({status:Cn},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:ji.findDOMNode(this);if(!s||Gv.disabled){this.safeSetState({status:Yn},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:na},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Yn},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:ji.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Js)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=aS(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return qt.createElement(hS.Provider,{value:null},typeof o=="function"?o(i,a):qt.cloneElement(qt.Children.only(o),a))},e}(qt.Component);zn.contextType=hS;zn.propTypes={};function Si(){}zn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Si,onEntering:Si,onEntered:Si,onExit:Si,onExiting:Si,onExited:Si};zn.UNMOUNTED=Js;zn.EXITED=Yn;zn.ENTERING=Kt;zn.ENTERED=Cn;zn.EXITING=na;const iM=zn,Oc=!!(typeof window<"u"&&window.document&&window.document.createElement);var _f=!1,Tf=!1;try{var Mh={get passive(){return _f=!0},get once(){return Tf=_f=!0}};Oc&&(window.addEventListener("test",Mh,Mh),window.removeEventListener("test",Mh,!0))}catch{}function sM(t,e,n,r){if(r&&typeof r!="boolean"&&!Tf){var i=r.once,s=r.capture,o=n;!Tf&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,_f?r:s)}t.addEventListener(e,n,r)}function oM(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function Ru(t,e,n,r){return sM(t,e,n,r),function(){oM(t,e,n,r)}}function aM(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function lM(t){var e=Pn(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function uM(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||aM(t,"transitionend",!0)},e+n),s=Ru(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function cM(t,e,n,r){n==null&&(n=lM(t)||0);var i=uM(t,n,r),s=Ru(t,"transitionend",e);return function(){i(),s()}}function Qv(t,e){const n=Pn(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function qm(t,e){const n=Qv(t,"transitionDuration"),r=Qv(t,"transitionDelay"),i=cM(t,s=>{s.target===t&&(i(),e(s))},n+r)}function js(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...i){e.apply(this,i),n.apply(this,i)}},null)}function dS(t){t.offsetHeight}var Yv=function(e){return!e||typeof e=="function"?e:function(n){e.current=n}};function hM(t,e){var n=Yv(t),r=Yv(e);return function(i){n&&n(i),r&&r(i)}}function Gm(t,e){return y.useMemo(function(){return hM(t,e)},[t,e])}function dM(t){return t&&"setState"in t?ji.findDOMNode(t):t??null}const fM=qt.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const h=y.useRef(null),d=Gm(h,l),m=C=>{d(dM(C))},v=C=>N=>{C&&h.current&&C(h.current,N)},E=y.useCallback(v(t),[t]),_=y.useCallback(v(e),[e]),p=y.useCallback(v(n),[n]),f=y.useCallback(v(r),[r]),g=y.useCallback(v(i),[i]),T=y.useCallback(v(s),[s]),k=y.useCallback(v(o),[o]);return w.jsx(iM,{ref:c,...u,onEnter:E,onEntered:p,onEntering:_,onExit:f,onExited:T,onExiting:g,addEndListener:k,nodeRef:h,children:typeof a=="function"?(C,N)=>a(C,{...N,ref:m}):qt.cloneElement(a,{ref:m})})}),Qm=fM,pM={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function mM(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,r=e[n],i=pM[t];return r+parseInt(Pn(e,i[0]),10)+parseInt(Pn(e,i[1]),10)}const gM={[Yn]:"collapse",[na]:"collapsing",[Kt]:"collapsing",[Cn]:"collapse show"},yM=qt.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,className:s,children:o,dimension:a="height",in:l=!1,timeout:u=300,mountOnEnter:c=!1,unmountOnExit:h=!1,appear:d=!1,getDimensionValue:m=mM,...v},E)=>{const _=typeof a=="function"?a():a,p=y.useMemo(()=>js(C=>{C.style[_]="0"},t),[_,t]),f=y.useMemo(()=>js(C=>{const N=`scroll${_[0].toUpperCase()}${_.slice(1)}`;C.style[_]=`${C[N]}px`},e),[_,e]),g=y.useMemo(()=>js(C=>{C.style[_]=null},n),[_,n]),T=y.useMemo(()=>js(C=>{C.style[_]=`${m(_,C)}px`,dS(C)},r),[r,m,_]),k=y.useMemo(()=>js(C=>{C.style[_]=null},i),[_,i]);return w.jsx(Qm,{ref:E,addEndListener:qm,...v,"aria-expanded":v.role?l:null,onEnter:p,onEntering:f,onEntered:g,onExit:T,onExiting:k,childRef:o.ref,in:l,timeout:u,mountOnEnter:c,unmountOnExit:h,appear:d,children:(C,N)=>qt.cloneElement(o,{...N,className:$e(s,o.props.className,gM[C],_==="width"&&"collapse-horizontal")})})}),vM=yM;function wM(t){var e=y.useRef(t);return y.useEffect(function(){e.current=t},[t]),e}function on(t){var e=wM(t);return y.useCallback(function(){return e.current&&e.current.apply(e,arguments)},[e])}function EM(){var t=y.useRef(!0),e=y.useRef(function(){return t.current});return y.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]),e.current}function _M(t){var e=y.useRef(null);return y.useEffect(function(){e.current=t}),e.current}var TM=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",SM=typeof document<"u";const Sf=SM||TM?y.useLayoutEffect:y.useEffect,CM={[Kt]:"show",[Cn]:"show"},fS=y.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=y.useCallback((l,u)=>{dS(l),r==null||r(l,u)},[r]);return w.jsx(Qm,{ref:s,addEndListener:qm,...o,onEnter:a,childRef:e.ref,children:(l,u)=>y.cloneElement(e,{...u,className:$e("fade",t,e.props.className,CM[l],n[l])})})});fS.displayName="Fade";const kM=fS,IM={"aria-label":$h.string,onClick:$h.func,variant:$h.oneOf(["white"])},Ym=y.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>w.jsx("button",{ref:i,type:"button",className:$e("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));Ym.displayName="CloseButton";Ym.propTypes=IM;const xM=Ym;function RM(t){var e=y.useRef(t);return e.current=t,e}function NM(t){var e=RM(t);y.useEffect(function(){return function(){return e.current()}},[])}var AM=Function.prototype.bind.call(Function.prototype.call,[].slice);function Ci(t,e){return AM(t.querySelectorAll(e))}function Xv(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}const DM=y.createContext(null),PM=DM,OM="data-rr-ui-";function LM(t){return`${OM}${t}`}const pS=y.createContext(Oc?window:void 0);pS.Provider;function Xm(){return y.useContext(pS)}const mS=y.createContext(null);mS.displayName="NavbarContext";const Oa=mS;function bh(t){t===void 0&&(t=Km());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function $M(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const Jv=LM("modal-open");class MM{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return $M(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(Pn(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(Jv,""),Pn(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(Jv),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const Jm=MM,Uh=(t,e)=>Oc?t==null?(e||Km()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function bM(t,e){const n=Xm(),[r,i]=y.useState(()=>Uh(t,n==null?void 0:n.document));if(!r){const s=Uh(t);s&&i(s)}return y.useEffect(()=>{e&&r&&e(r)},[e,r]),y.useEffect(()=>{const s=Uh(t);s!==r&&i(s)},[t,r]),r}function UM({children:t,in:e,onExited:n,mountOnEnter:r,unmountOnExit:i}){const s=y.useRef(null),o=y.useRef(e),a=on(n);y.useEffect(()=>{e?o.current=!0:a(s.current)},[e,a]);const l=Gm(s,t.ref),u=y.cloneElement(t,{ref:l});return e?u:i||!o.current&&r?null:u}function FM({in:t,onTransition:e}){const n=y.useRef(null),r=y.useRef(!0),i=on(e);return Sf(()=>{if(!n.current)return;let s=!1;return i({in:t,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[t,i]),Sf(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function jM({children:t,in:e,onExited:n,onEntered:r,transition:i}){const[s,o]=y.useState(!e);e&&s&&o(!1);const a=FM({in:!!e,onTransition:u=>{const c=()=>{u.isStale()||(u.in?r==null||r(u.element,u.initial):(o(!0),n==null||n(u.element)))};Promise.resolve(i(u)).then(c,h=>{throw u.in||o(!0),h})}}),l=Gm(a,t.ref);return s&&!e?null:y.cloneElement(t,{ref:l})}function Zv(t,e,n){return t?w.jsx(t,Object.assign({},n)):e?w.jsx(jM,Object.assign({},n,{transition:e})):w.jsx(UM,Object.assign({},n))}function BM(t){return t.code==="Escape"||t.keyCode===27}const VM=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function zM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let Fh;function HM(t){return Fh||(Fh=new Jm({ownerDocument:t==null?void 0:t.document})),Fh}function WM(t){const e=Xm(),n=t||HM(e),r=y.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:y.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:y.useCallback(i=>{r.current.backdrop=i},[])})}const gS=y.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:c,transition:h,runTransition:d,backdropTransition:m,runBackdropTransition:v,autoFocus:E=!0,enforceFocus:_=!0,restoreFocus:p=!0,restoreFocusOptions:f,renderDialog:g,renderBackdrop:T=ve=>w.jsx("div",Object.assign({},ve)),manager:k,container:C,onShow:N,onHide:D=()=>{},onExit:H,onExited:j,onExiting:Ae,onEnter:Bt,onEntering:vt,onEntered:En}=t,Hn=zM(t,VM);const ht=Xm(),wt=bM(C),R=WM(k),b=EM(),B=_M(n),[J,ne]=y.useState(!n),Et=y.useRef(null);y.useImperativeHandle(e,()=>R,[R]),Oc&&!B&&n&&(Et.current=bh(ht==null?void 0:ht.document)),n&&J&&ne(!1);const nt=on(()=>{if(R.add(),Lc.current=Ru(document,"keydown",_n),en.current=Ru(document,"focus",()=>setTimeout(G),!0),N&&N(),E){var ve,eg;const Mc=bh((ve=(eg=R.dialog)==null?void 0:eg.ownerDocument)!=null?ve:ht==null?void 0:ht.document);R.dialog&&Mc&&!Xv(R.dialog,Mc)&&(Et.current=Mc,R.dialog.focus())}}),_e=on(()=>{if(R.remove(),Lc.current==null||Lc.current(),en.current==null||en.current(),p){var ve;(ve=Et.current)==null||ve.focus==null||ve.focus(f),Et.current=null}});y.useEffect(()=>{!n||!wt||nt()},[n,wt,nt]),y.useEffect(()=>{J&&_e()},[J,_e]),NM(()=>{_e()});const G=on(()=>{if(!_||!b()||!R.isTopModal())return;const ve=bh(ht==null?void 0:ht.document);R.dialog&&ve&&!Xv(R.dialog,ve)&&R.dialog.focus()}),Dt=on(ve=>{ve.target===ve.currentTarget&&(u==null||u(ve),a===!0&&D())}),_n=on(ve=>{l&&BM(ve)&&R.isTopModal()&&(c==null||c(ve),ve.defaultPrevented||D())}),en=y.useRef(),Lc=y.useRef(),xS=(...ve)=>{ne(!0),j==null||j(...ve)};if(!wt)return null;const Zm=Object.assign({role:r,ref:R.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},Hn,{style:s,className:i,tabIndex:-1});let $c=g?g(Zm):w.jsx("div",Object.assign({},Zm,{children:y.cloneElement(o,{role:"document"})}));$c=Zv(h,d,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:H,onExiting:Ae,onExited:xS,onEnter:Bt,onEntering:vt,onEntered:En,children:$c});let La=null;return a&&(La=T({ref:R.setBackdropRef,onClick:Dt}),La=Zv(m,v,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:La})),w.jsx(w.Fragment,{children:ji.createPortal(w.jsxs(w.Fragment,{children:[La,$c]}),wt)})});gS.displayName="Modal";const KM=Object.assign(gS,{Manager:Jm});function qM(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function GM(t,e){t.classList?t.classList.add(e):qM(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function e0(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function QM(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=e0(t.className,e):t.setAttribute("class",e0(t.className&&t.className.baseVal||"",e))}const ki={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class yS extends Jm{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,Pn(n,{[e]:`${parseFloat(Pn(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],Pn(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(GM(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Ci(n,ki.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),Ci(n,ki.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),Ci(n,ki.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();QM(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Ci(n,ki.FIXED_CONTENT).forEach(s=>this.restore(r,s)),Ci(n,ki.STICKY_CONTENT).forEach(s=>this.restore(i,s)),Ci(n,ki.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let jh;function YM(t){return jh||(jh=new yS(t)),jh}const XM=yS,JM=y.createContext({onHide(){}}),vS=JM,ZM=y.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:r,children:i,...s},o)=>{const a=y.useContext(vS),l=on(()=>{a==null||a.onHide(),r==null||r()});return w.jsxs("div",{ref:o,...s,children:[i,n&&w.jsx(xM,{"aria-label":t,variant:e,onClick:l})]})}),eb=ZM,wS=y.forwardRef(({bsPrefix:t,className:e,as:n,...r},i)=>{t=At(t,"navbar-brand");const s=n||(r.href?"a":"span");return w.jsx(s,{...r,ref:i,className:$e(e,t)})});wS.displayName="NavbarBrand";const tb=wS,ES=y.forwardRef(({children:t,bsPrefix:e,...n},r)=>{e=At(e,"navbar-collapse");const i=y.useContext(Oa);return w.jsx(vM,{in:!!(i&&i.expanded),...n,children:w.jsx("div",{ref:r,className:e,children:t})})});ES.displayName="NavbarCollapse";const nb=ES,_S=y.forwardRef(({bsPrefix:t,className:e,children:n,label:r="Toggle navigation",as:i="button",onClick:s,...o},a)=>{t=At(t,"navbar-toggler");const{onToggle:l,expanded:u}=y.useContext(Oa)||{},c=on(h=>{s&&s(h),l&&l()});return i==="button"&&(o.type="button"),w.jsx(i,{...o,ref:a,onClick:c,"aria-label":r,className:$e(e,t,!u&&"collapsed"),children:n||w.jsx("span",{className:`${t}-icon`})})});_S.displayName="NavbarToggle";const rb=_S;var Cf=new WeakMap,t0=function(e,n){if(!(!e||!n)){var r=Cf.get(n)||new Map;Cf.set(n,r);var i=r.get(e);return i||(i=n.matchMedia(e),i.refCount=0,r.set(i.media,i)),i}};function ib(t,e){e===void 0&&(e=typeof window>"u"?void 0:window);var n=t0(t,e),r=y.useState(function(){return n?n.matches:!1}),i=r[0],s=r[1];return Sf(function(){var o=t0(t,e);if(!o)return s(!1);var a=Cf.get(e),l=function(){s(o.matches)};return o.refCount++,o.addListener(l),l(),function(){o.removeListener(l),o.refCount--,o.refCount<=0&&(a==null||a.delete(o.media)),o=void 0}},[t]),i}function sb(t){var e=Object.keys(t);function n(a,l){return a===l?l:a?a+" and "+l:l}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){var l=r(a),u=t[l];return typeof u=="number"?u=u-.2+"px":u="calc("+u+" - 0.2px)","(max-width: "+u+")"}function s(a){var l=t[a];return typeof l=="number"&&(l=l+"px"),"(min-width: "+l+")"}function o(a,l,u){var c;if(typeof a=="object")c=a,u=l,l=!0;else{var h;l=l||!0,c=(h={},h[a]=l,h)}var d=y.useMemo(function(){return Object.entries(c).reduce(function(m,v){var E=v[0],_=v[1];return(_==="up"||_===!0)&&(m=n(m,s(E))),(_==="down"||_===!0)&&(m=n(m,i(E))),m},"")},[JSON.stringify(c)]);return ib(d,u)}return o}var ob=sb({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});const ab=wn("offcanvas-body"),lb={[Kt]:"show",[Cn]:"show"},TS=y.forwardRef(({bsPrefix:t,className:e,children:n,in:r=!1,mountOnEnter:i=!1,unmountOnExit:s=!1,appear:o=!1,...a},l)=>(t=At(t,"offcanvas"),w.jsx(Qm,{ref:l,addEndListener:qm,in:r,mountOnEnter:i,unmountOnExit:s,appear:o,...a,childRef:n.ref,children:(u,c)=>y.cloneElement(n,{...c,className:$e(e,n.props.className,(u===Kt||u===na)&&`${t}-toggling`,lb[u])})})));TS.displayName="OffcanvasToggling";const ub=TS,SS=y.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=At(t,"offcanvas-header"),w.jsx(eb,{ref:s,...i,className:$e(e,t),closeLabel:n,closeButton:r})));SS.displayName="OffcanvasHeader";const cb=SS,hb=Wm("h5"),db=wn("offcanvas-title",{Component:hb});function fb(t){return w.jsx(ub,{...t})}function pb(t){return w.jsx(kM,{...t})}const CS=y.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i="start",responsive:s,show:o=!1,backdrop:a=!0,keyboard:l=!0,scroll:u=!1,onEscapeKeyDown:c,onShow:h,onHide:d,container:m,autoFocus:v=!0,enforceFocus:E=!0,restoreFocus:_=!0,restoreFocusOptions:p,onEntered:f,onExit:g,onExiting:T,onEnter:k,onEntering:C,onExited:N,backdropClassName:D,manager:H,renderStaticNode:j=!1,...Ae},Bt)=>{const vt=y.useRef();t=At(t,"offcanvas");const{onToggle:En}=y.useContext(Oa)||{},[Hn,ht]=y.useState(!1),wt=ob(s||"xs","up");y.useEffect(()=>{ht(s?o&&!wt:o)},[o,s,wt]);const R=on(()=>{En==null||En(),d==null||d()}),b=y.useMemo(()=>({onHide:R}),[R]);function B(){return H||(u?(vt.current||(vt.current=new XM({handleContainerOverflow:!1})),vt.current):YM())}const J=(_e,...G)=>{_e&&(_e.style.visibility="visible"),k==null||k(_e,...G)},ne=(_e,...G)=>{_e&&(_e.style.visibility=""),N==null||N(...G)},Et=y.useCallback(_e=>w.jsx("div",{..._e,className:$e(`${t}-backdrop`,D)}),[D,t]),nt=_e=>w.jsx("div",{..._e,...Ae,className:$e(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return w.jsxs(w.Fragment,{children:[!Hn&&(s||j)&&nt({}),w.jsx(vS.Provider,{value:b,children:w.jsx(KM,{show:Hn,ref:Bt,backdrop:a,container:m,keyboard:l,autoFocus:v,enforceFocus:E&&!u,restoreFocus:_,restoreFocusOptions:p,onEscapeKeyDown:c,onShow:h,onHide:R,onEnter:J,onEntering:C,onEntered:f,onExit:g,onExiting:T,onExited:ne,manager:B(),transition:fb,backdropTransition:pb,renderBackdrop:Et,renderDialog:nt})})]})});CS.displayName="Offcanvas";const mb=Object.assign(CS,{Body:ab,Header:cb,Title:db}),kS=y.forwardRef((t,e)=>{const n=y.useContext(Oa);return w.jsx(mb,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});kS.displayName="NavbarOffcanvas";const gb=kS,yb=wn("navbar-text",{Component:"span"}),IS=y.forwardRef((t,e)=>{const{bsPrefix:n,expand:r=!0,variant:i="light",bg:s,fixed:o,sticky:a,className:l,as:u="nav",expanded:c,onToggle:h,onSelect:d,collapseOnSelect:m=!1,...v}=z$(t,{expanded:"onToggle"}),E=At(n,"navbar"),_=y.useCallback((...g)=>{d==null||d(...g),m&&c&&(h==null||h(!1))},[d,m,c,h]);v.role===void 0&&u!=="nav"&&(v.role="navigation");let p=`${E}-expand`;typeof r=="string"&&(p=`${p}-${r}`);const f=y.useMemo(()=>({onToggle:()=>h==null?void 0:h(!c),bsPrefix:E,expanded:!!c,expand:r}),[E,c,r,h]);return w.jsx(Oa.Provider,{value:f,children:w.jsx(PM.Provider,{value:_,children:w.jsx(u,{ref:e,...v,className:$e(l,E,r&&p,i&&`${E}-${i}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});IS.displayName="Navbar";const vb=Object.assign(IS,{Brand:tb,Collapse:nb,Offcanvas:gb,Text:yb,Toggle:rb});function wb(){const t=ua(),[e]=Or(jt),n=r=>t.pathname===r?"activeLink":"";return w.jsx("div",{children:w.jsxs(vb,{style:{backgroundColor:"white",color:"white",fontWeight:"bold",height:"2rem",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e&&w.jsx("div",{style:{marginLeft:"2rem"},children:w.jsx(Kr,{to:"/member-portal/directory",className:`navOption ${n("/member-portal/directory")}`,children:"Directory"})}),e&&w.jsx("div",{style:{marginLeft:"60rem"},children:w.jsx(Kr,{to:"/member-portal/dashboard",className:`navOption ${n("/member-portal/dashboard")}`,children:"Dashboard"})}),e&&w.jsx("div",{style:{marginRight:"2rem"},children:w.jsx(Kr,{to:"/member-portal",className:"navOption",onClick:l$,children:"Log Out"})})]})})}const Eb=()=>{const[t,e]=y.useState([]),[n,r]=y.useState({}),[i,s]=Or(jt),o=fi();return y.useEffect(()=>{i&&(async()=>(await KT(xc(ui,"properties"))).empty?o("/member-portal/directory-public"):o("/member-portal/directory"))()},[i,s,o]),y.useEffect(()=>{const a=QT(l=>{e(l)});return()=>{a()}},[]),y.useEffect(()=>{let a=!0;const l={};return Promise.all(t.map(u=>{const c=uo(yo,`${u.uid}`);return ou(c).then(h=>Promise.all(h.items.map(d=>au(d))).then(d=>{l[u.uid]=d}))})).then(()=>{a&&r(l)}),()=>{a=!1}},[t]),w.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:t.map((a,l)=>l%3===0&&w.jsx(Lr,{children:t.slice(l,l+3).map((u,c)=>w.jsx(bt,{children:w.jsx(we,{style:{border:"1px solid black",backgroundColor:"lightgrey",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"},children:w.jsxs(we.Body,{style:{justifyContent:"center",textAlign:"center",lineHeight:"4px"},children:[w.jsxs(we.Text,{children:["Vacancy: ",u.vacancy]}),w.jsxs(we.Text,{children:["Capacity: ",u.availability]}),n[u.uid]&&n[u.uid].map((h,d)=>w.jsx("img",{style:{border:"1px solid black",marginBottom:"20px",marginTop:"20px"},src:h,alt:"Uploaded"},d))]})})},c))},l))})};function _b(){return w.jsx("div",{className:"app",children:w.jsxs(WI,{children:[w.jsx(wb,{}),w.jsxs(jI,{children:[w.jsx(qn,{exact:!0,path:"/member-portal/",element:w.jsx(P$,{})}),w.jsx(qn,{exact:!0,path:"/member-portal/register",element:w.jsx(O$,{})}),w.jsx(qn,{exact:!0,path:"/member-portal/reset",element:w.jsx(L$,{})}),w.jsx(qn,{exact:!0,path:"/member-portal/signupform",element:w.jsx(F$,{})}),w.jsx(qn,{exact:!0,path:"/member-portal/dashboard",element:w.jsx(b$,{})}),w.jsx(qn,{exact:!0,path:"/member-portal/directory",element:w.jsx(U$,{})}),w.jsx(qn,{exact:!0,path:"/member-portal/directory-public",element:w.jsx(Eb,{})})]})]})})}const Tb=Bh.createRoot(document.getElementById("root"));Tb.render(w.jsx(qt.StrictMode,{children:w.jsx(_b,{})}));
