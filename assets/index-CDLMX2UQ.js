function uS(r,e){for(var i=0;i<e.length;i++){const s=e[i];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in r)){const c=Object.getOwnPropertyDescriptor(s,l);c&&Object.defineProperty(r,l,c.get?c:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function fS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var lh={exports:{}},Io={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function hS(){if(T0)return Io;T0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Io.Fragment=e,Io.jsx=i,Io.jsxs=i,Io}var A0;function dS(){return A0||(A0=1,lh.exports=hS()),lh.exports}var R=dS(),ch={exports:{}},ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function pS(){if(w0)return ot;w0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(E){return E===null||typeof E!="object"?null:(E=v&&E[v]||E["@@iterator"],typeof E=="function"?E:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function y(E,I,ae){this.props=E,this.context=I,this.refs=T,this.updater=ae||b}y.prototype.isReactComponent={},y.prototype.setState=function(E,I){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,I,"setState")},y.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function _(){}_.prototype=y.prototype;function O(E,I,ae){this.props=E,this.context=I,this.refs=T,this.updater=ae||b}var U=O.prototype=new _;U.constructor=O,M(U,y.prototype),U.isPureReactComponent=!0;var N=Array.isArray,X={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function B(E,I,ae,ce,j,fe){return ae=fe.ref,{$$typeof:r,type:E,key:I,ref:ae!==void 0?ae:null,props:fe}}function Z(E,I){return B(E.type,I,void 0,void 0,void 0,E.props)}function L(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function D(E){var I={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ae){return I[ae]})}var G=/\/+/g;function ue(E,I){return typeof E=="object"&&E!==null&&E.key!=null?D(""+E.key):I.toString(36)}function le(){}function ye(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(le,le):(E.status="pending",E.then(function(I){E.status==="pending"&&(E.status="fulfilled",E.value=I)},function(I){E.status==="pending"&&(E.status="rejected",E.reason=I)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function me(E,I,ae,ce,j){var fe=typeof E;(fe==="undefined"||fe==="boolean")&&(E=null);var de=!1;if(E===null)de=!0;else switch(fe){case"bigint":case"string":case"number":de=!0;break;case"object":switch(E.$$typeof){case r:case e:de=!0;break;case g:return de=E._init,me(de(E._payload),I,ae,ce,j)}}if(de)return j=j(E),de=ce===""?"."+ue(E,0):ce,N(j)?(ae="",de!=null&&(ae=de.replace(G,"$&/")+"/"),me(j,I,ae,"",function(Fe){return Fe})):j!=null&&(L(j)&&(j=Z(j,ae+(j.key==null||E&&E.key===j.key?"":(""+j.key).replace(G,"$&/")+"/")+de)),I.push(j)),1;de=0;var ve=ce===""?".":ce+":";if(N(E))for(var Re=0;Re<E.length;Re++)ce=E[Re],fe=ve+ue(ce,Re),de+=me(ce,I,ae,fe,j);else if(Re=x(E),typeof Re=="function")for(E=Re.call(E),Re=0;!(ce=E.next()).done;)ce=ce.value,fe=ve+ue(ce,Re++),de+=me(ce,I,ae,fe,j);else if(fe==="object"){if(typeof E.then=="function")return me(ye(E),I,ae,ce,j);throw I=String(E),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return de}function z(E,I,ae){if(E==null)return E;var ce=[],j=0;return me(E,ce,"","",function(fe){return I.call(ae,fe,j++)}),ce}function K(E){if(E._status===-1){var I=E._result;I=I(),I.then(function(ae){(E._status===0||E._status===-1)&&(E._status=1,E._result=ae)},function(ae){(E._status===0||E._status===-1)&&(E._status=2,E._result=ae)}),E._status===-1&&(E._status=0,E._result=I)}if(E._status===1)return E._result.default;throw E._result}var V=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function Se(){}return ot.Children={map:z,forEach:function(E,I,ae){z(E,function(){I.apply(this,arguments)},ae)},count:function(E){var I=0;return z(E,function(){I++}),I},toArray:function(E){return z(E,function(I){return I})||[]},only:function(E){if(!L(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},ot.Component=y,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=O,ot.StrictMode=s,ot.Suspense=p,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ot.__COMPILER_RUNTIME={__proto__:null,c:function(E){return X.H.useMemoCache(E)}},ot.cache=function(E){return function(){return E.apply(null,arguments)}},ot.cloneElement=function(E,I,ae){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var ce=M({},E.props),j=E.key,fe=void 0;if(I!=null)for(de in I.ref!==void 0&&(fe=void 0),I.key!==void 0&&(j=""+I.key),I)!H.call(I,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&I.ref===void 0||(ce[de]=I[de]);var de=arguments.length-2;if(de===1)ce.children=ae;else if(1<de){for(var ve=Array(de),Re=0;Re<de;Re++)ve[Re]=arguments[Re+2];ce.children=ve}return B(E.type,j,void 0,void 0,fe,ce)},ot.createContext=function(E){return E={$$typeof:f,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:c,_context:E},E},ot.createElement=function(E,I,ae){var ce,j={},fe=null;if(I!=null)for(ce in I.key!==void 0&&(fe=""+I.key),I)H.call(I,ce)&&ce!=="key"&&ce!=="__self"&&ce!=="__source"&&(j[ce]=I[ce]);var de=arguments.length-2;if(de===1)j.children=ae;else if(1<de){for(var ve=Array(de),Re=0;Re<de;Re++)ve[Re]=arguments[Re+2];j.children=ve}if(E&&E.defaultProps)for(ce in de=E.defaultProps,de)j[ce]===void 0&&(j[ce]=de[ce]);return B(E,fe,void 0,void 0,null,j)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(E){return{$$typeof:h,render:E}},ot.isValidElement=L,ot.lazy=function(E){return{$$typeof:g,_payload:{_status:-1,_result:E},_init:K}},ot.memo=function(E,I){return{$$typeof:m,type:E,compare:I===void 0?null:I}},ot.startTransition=function(E){var I=X.T,ae={};X.T=ae;try{var ce=E(),j=X.S;j!==null&&j(ae,ce),typeof ce=="object"&&ce!==null&&typeof ce.then=="function"&&ce.then(Se,V)}catch(fe){V(fe)}finally{X.T=I}},ot.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ot.use=function(E){return X.H.use(E)},ot.useActionState=function(E,I,ae){return X.H.useActionState(E,I,ae)},ot.useCallback=function(E,I){return X.H.useCallback(E,I)},ot.useContext=function(E){return X.H.useContext(E)},ot.useDebugValue=function(){},ot.useDeferredValue=function(E,I){return X.H.useDeferredValue(E,I)},ot.useEffect=function(E,I,ae){var ce=X.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ce.useEffect(E,I)},ot.useId=function(){return X.H.useId()},ot.useImperativeHandle=function(E,I,ae){return X.H.useImperativeHandle(E,I,ae)},ot.useInsertionEffect=function(E,I){return X.H.useInsertionEffect(E,I)},ot.useLayoutEffect=function(E,I){return X.H.useLayoutEffect(E,I)},ot.useMemo=function(E,I){return X.H.useMemo(E,I)},ot.useOptimistic=function(E,I){return X.H.useOptimistic(E,I)},ot.useReducer=function(E,I,ae){return X.H.useReducer(E,I,ae)},ot.useRef=function(E){return X.H.useRef(E)},ot.useState=function(E){return X.H.useState(E)},ot.useSyncExternalStore=function(E,I,ae){return X.H.useSyncExternalStore(E,I,ae)},ot.useTransition=function(){return X.H.useTransition()},ot.version="19.1.0",ot}var R0;function Pd(){return R0||(R0=1,ch.exports=pS()),ch.exports}var he=Pd();const ka=fS(he),mS=uS({__proto__:null,default:ka},[he]);var uh={exports:{}},Bo={},fh={exports:{}},hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function gS(){return C0||(C0=1,function(r){function e(z,K){var V=z.length;z.push(K);e:for(;0<V;){var Se=V-1>>>1,E=z[Se];if(0<l(E,K))z[Se]=K,z[V]=E,V=Se;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var K=z[0],V=z.pop();if(V!==K){z[0]=V;e:for(var Se=0,E=z.length,I=E>>>1;Se<I;){var ae=2*(Se+1)-1,ce=z[ae],j=ae+1,fe=z[j];if(0>l(ce,V))j<E&&0>l(fe,ce)?(z[Se]=fe,z[j]=V,Se=j):(z[Se]=ce,z[ae]=V,Se=ae);else if(j<E&&0>l(fe,V))z[Se]=fe,z[j]=V,Se=j;else break e}}return K}function l(z,K){var V=z.sortIndex-K.sortIndex;return V!==0?V:z.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,v=null,x=3,b=!1,M=!1,T=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function N(z){for(var K=i(m);K!==null;){if(K.callback===null)s(m);else if(K.startTime<=z)s(m),K.sortIndex=K.expirationTime,e(p,K);else break;K=i(m)}}function X(z){if(T=!1,N(z),!M)if(i(p)!==null)M=!0,H||(H=!0,ue());else{var K=i(m);K!==null&&me(X,K.startTime-z)}}var H=!1,B=-1,Z=5,L=-1;function D(){return y?!0:!(r.unstable_now()-L<Z)}function G(){if(y=!1,H){var z=r.unstable_now();L=z;var K=!0;try{e:{M=!1,T&&(T=!1,O(B),B=-1),b=!0;var V=x;try{t:{for(N(z),v=i(p);v!==null&&!(v.expirationTime>z&&D());){var Se=v.callback;if(typeof Se=="function"){v.callback=null,x=v.priorityLevel;var E=Se(v.expirationTime<=z);if(z=r.unstable_now(),typeof E=="function"){v.callback=E,N(z),K=!0;break t}v===i(p)&&s(p),N(z)}else s(p);v=i(p)}if(v!==null)K=!0;else{var I=i(m);I!==null&&me(X,I.startTime-z),K=!1}}break e}finally{v=null,x=V,b=!1}K=void 0}}finally{K?ue():H=!1}}}var ue;if(typeof U=="function")ue=function(){U(G)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ye=le.port2;le.port1.onmessage=G,ue=function(){ye.postMessage(null)}}else ue=function(){_(G,0)};function me(z,K){B=_(function(){z(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(z){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var V=x;x=K;try{return z()}finally{x=V}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var V=x;x=z;try{return K()}finally{x=V}},r.unstable_scheduleCallback=function(z,K,V){var Se=r.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Se+V:Se):V=Se,z){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=V+E,z={id:g++,callback:K,priorityLevel:z,startTime:V,expirationTime:E,sortIndex:-1},V>Se?(z.sortIndex=V,e(m,z),i(p)===null&&z===i(m)&&(T?(O(B),B=-1):T=!0,me(X,V-Se))):(z.sortIndex=E,e(p,z),M||b||(M=!0,H||(H=!0,ue()))),z},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(z){var K=x;return function(){var V=x;x=K;try{return z.apply(this,arguments)}finally{x=V}}}}(hh)),hh}var D0;function vS(){return D0||(D0=1,fh.exports=gS()),fh.exports}var dh={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function _S(){if(N0)return Tn;N0=1;var r=Pd();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Tn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,g)},Tn.flushSync=function(p){var m=f.T,g=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=g,s.d.f()}},Tn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Tn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Tn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,b=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:b}):g==="script"&&s.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:b,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Tn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Tn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Tn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Tn.requestFormReset=function(p){s.d.r(p)},Tn.unstable_batchedUpdates=function(p,m){return p(m)},Tn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Tn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Tn.version="19.1.0",Tn}var U0;function i_(){if(U0)return dh.exports;U0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),dh.exports=_S(),dh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function xS(){if(L0)return Bo;L0=1;var r=vS(),e=Pd(),i=i_();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return h(u),t;if(d===o)return h(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=d;break}if(A===o){S=!0,o=u,a=d;break}A=A.sibling}if(!S){for(A=d.child;A;){if(A===a){S=!0,a=d,o=u;break}if(A===o){S=!0,o=d,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function ye(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case y:return"Profiler";case T:return"StrictMode";case X:return"Suspense";case H:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case U:return(t.displayName||"Context")+".Provider";case O:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:ye(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return ye(t(n))}catch{}}return null}var me=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},Se=[],E=-1;function I(t){return{current:t}}function ae(t){0>E||(t.current=Se[E],Se[E]=null,E--)}function ce(t,n){E++,Se[E]=t.current,t.current=n}var j=I(null),fe=I(null),de=I(null),ve=I(null);function Re(t,n){switch(ce(de,n),ce(fe,t),ce(j,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?$g(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=$g(n),t=e0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ae(j),ce(j,t)}function Fe(){ae(j),ae(fe),ae(de)}function We(t){t.memoizedState!==null&&ce(ve,t);var n=j.current,a=e0(n,t.type);n!==a&&(ce(fe,t),ce(j,a))}function at(t){fe.current===t&&(ae(j),ae(fe)),ve.current===t&&(ae(ve),Uo._currentValue=V)}var rt=Object.prototype.hasOwnProperty,Nt=r.unstable_scheduleCallback,q=r.unstable_cancelCallback,gn=r.unstable_shouldYield,ut=r.unstable_requestPaint,it=r.unstable_now,Ze=r.unstable_getCurrentPriorityLevel,Ut=r.unstable_ImmediatePriority,qe=r.unstable_UserBlockingPriority,P=r.unstable_NormalPriority,w=r.unstable_LowPriority,te=r.unstable_IdlePriority,Ee=r.log,Te=r.unstable_setDisableYieldValue,_e=null,Ie=null;function Ce(t){if(typeof Ee=="function"&&Te(t),Ie&&typeof Ie.setStrictMode=="function")try{Ie.setStrictMode(_e,t)}catch{}}var De=Math.clz32?Math.clz32:Be,gt=Math.log,Ae=Math.LN2;function Be(t){return t>>>=0,t===0?32:31-(gt(t)/Ae|0)|0}var Ye=256,Je=4194304;function Pe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ft(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Pe(o):(S&=A,S!==0?u=Pe(S):a||(a=A&~t,a!==0&&(u=Pe(a))))):(A=o&~d,A!==0?u=Pe(A):S!==0?u=Pe(S):a||(a=o&~t,a!==0&&(u=Pe(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function nt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Lt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var t=Ye;return Ye<<=1,(Ye&4194048)===0&&(Ye=256),t}function Ne(){var t=Je;return Je<<=1,(Je&62914560)===0&&(Je=4194304),t}function pe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function be(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ze(t,n,a,o,u,d){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,F=t.expirationTimes,ee=t.hiddenUpdates;for(a=S&~a;0<a;){var ge=31-De(a),Me=1<<ge;A[ge]=0,F[ge]=-1;var ne=ee[ge];if(ne!==null)for(ee[ge]=null,ge=0;ge<ne.length;ge++){var oe=ne[ge];oe!==null&&(oe.lane&=-536870913)}a&=~Me}o!==0&&Le(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~n))}function Le(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-De(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function st(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-De(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Ht(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $t(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Mt(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:x0(t.type))}function Vn(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var un=Math.random().toString(36).slice(2),rn="__reactFiber$"+un,vn="__reactProps$"+un,zn="__reactContainer$"+un,Qa="__reactEvents$"+un,il="__reactListeners$"+un,al="__reactHandles$"+un,Ja="__reactResources$"+un,ca="__reactMarker$"+un;function ua(t){delete t[rn],delete t[vn],delete t[Qa],delete t[il],delete t[al]}function Oi(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[zn]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=a0(t);t!==null;){if(a=t[rn])return a;t=a0(t)}return n}t=a,a=t.parentNode}return null}function Pi(t){if(t=t[rn]||t[zn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function $a(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function fa(t){var n=t[Ja];return n||(n=t[Ja]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(t){t[ca]=!0}var C=new Set,Y={};function re(t,n){se(t,n),se(t+"Capture",n)}function se(t,n){for(Y[t]=n,t=0;t<n.length;t++)C.add(n[t])}var J=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),we={},Oe={};function ke(t){return rt.call(Oe,t)?!0:rt.call(we,t)?!1:J.test(t)?Oe[t]=!0:(we[t]=!0,!1)}function Ge(t,n,a){if(ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function et(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Ve,vt;function yt(t){if(Ve===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ve=n&&n[1]||"",vt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ve+t+vt}var Rt=!1;function fn(t,n){if(!t||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(oe){var ne=oe}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(oe){ne=oe}t.call(Me.prototype)}}else{try{throw Error()}catch(oe){ne=oe}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(oe){if(oe&&ne&&typeof oe.stack=="string")return[oe.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],A=d[1];if(S&&A){var F=S.split(`
`),ee=A.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===ee.length)for(o=F.length-1,u=ee.length-1;1<=o&&0<=u&&F[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==ee[u]){var ge=`
`+F[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=u);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?yt(a):""}function Et(t){switch(t.tag){case 26:case 27:case 5:return yt(t.type);case 16:return yt("Lazy");case 13:return yt("Suspense");case 19:return yt("SuspenseList");case 0:case 15:return fn(t.type,!1);case 11:return fn(t.type.render,!1);case 1:return fn(t.type,!0);case 31:return yt("Activity");default:return""}}function je(t){try{var n="";do n+=Et(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function qt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function St(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function kn(t){var n=St(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,d.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function hi(t){t._valueTracker||(t._valueTracker=kn(t))}function Mn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=St(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Ei(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Bt=/[\n"\\]/g;function kt(t){return t.replace(Bt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zi(t,n,a,o,u,d,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+qt(n)):t.value!==""+qt(n)&&(t.value=""+qt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?ii(t,S,qt(n)):a!=null?ii(t,S,qt(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+qt(A):t.removeAttribute("name")}function Rn(t,n,a,o,u,d,S,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+qt(a):"",n=n!=null?""+qt(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function ii(t,n,a){n==="number"&&Ei(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Cn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+qt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ks(t,n,a){if(n!=null&&(n=""+qt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+qt(a):""}function Jd(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(me(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=qt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Ur(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var ox=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $d(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||ox.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ep(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&$d(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&$d(t,d,n[d])}function su(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(t){return cx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ou=null;function lu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lr=null,Or=null;function tp(t){var n=Pi(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;e:switch(t=n.stateNode,n.type){case"input":if(zi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[vn]||null;if(!u)throw Error(s(90));zi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Mn(o)}break e;case"textarea":ks(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Cn(t,!!a.multiple,n,!1)}}}var cu=!1;function np(t,n,a){if(cu)return t(n,a);cu=!0;try{var o=t(n);return o}finally{if(cu=!1,(Lr!==null||Or!==null)&&(jl(),Lr&&(n=Lr,t=Or,Or=Lr=null,tp(n),t)))for(n=0;n<t.length;n++)tp(t[n])}}function js(t,n){var a=t.stateNode;if(a===null)return null;var o=a[vn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Ii)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{uu=!1}var ha=null,fu=null,sl=null;function ip(){if(sl)return sl;var t,n=fu,a=n.length,o,u="value"in ha?ha.value:ha.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[d-o];o++);return sl=u.slice(t,1<o?1-o:void 0)}function ol(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function ap(){return!1}function In(t){function n(a,o,u,d,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ll:ap,this.isPropagationStopped=ap,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=In(er),Ws=g({},er,{view:0,detail:0}),ux=In(Ws),hu,du,qs,ul=g({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(hu=t.screenX-qs.screenX,du=t.screenY-qs.screenY):du=hu=0,qs=t),hu)},movementY:function(t){return"movementY"in t?t.movementY:du}}),rp=In(ul),fx=g({},ul,{dataTransfer:0}),hx=In(fx),dx=g({},Ws,{relatedTarget:0}),pu=In(dx),px=g({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),mx=In(px),gx=g({},er,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vx=In(gx),_x=g({},er,{data:0}),sp=In(_x),xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Sx[t])?!!n[t]:!1}function mu(){return bx}var Mx=g({},Ws,{key:function(t){if(t.key){var n=xx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ex=In(Mx),Tx=g({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=In(Tx),Ax=g({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),wx=In(Ax),Rx=g({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cx=In(Rx),Dx=g({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nx=In(Dx),Ux=g({},er,{newState:0,oldState:0}),Lx=In(Ux),Ox=[9,13,27,32],gu=Ii&&"CompositionEvent"in window,Ys=null;Ii&&"documentMode"in document&&(Ys=document.documentMode);var Px=Ii&&"TextEvent"in window&&!Ys,lp=Ii&&(!gu||Ys&&8<Ys&&11>=Ys),cp=" ",up=!1;function fp(t,n){switch(t){case"keyup":return Ox.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pr=!1;function zx(t,n){switch(t){case"compositionend":return hp(n);case"keypress":return n.which!==32?null:(up=!0,cp);case"textInput":return t=n.data,t===cp&&up?null:t;default:return null}}function Ix(t,n){if(Pr)return t==="compositionend"||!gu&&fp(t,n)?(t=ip(),sl=fu=ha=null,Pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return lp&&n.locale!=="ko"?null:n.data;default:return null}}var Bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Bx[t.type]:n==="textarea"}function pp(t,n,a,o){Lr?Or?Or.push(o):Or=[o]:Lr=o,n=Kl(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Zs=null,Ks=null;function Fx(t){Yg(t,0)}function fl(t){var n=$a(t);if(Mn(n))return t}function mp(t,n){if(t==="change")return n}var gp=!1;if(Ii){var vu;if(Ii){var _u="oninput"in document;if(!_u){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),_u=typeof vp.oninput=="function"}vu=_u}else vu=!1;gp=vu&&(!document.documentMode||9<document.documentMode)}function _p(){Zs&&(Zs.detachEvent("onpropertychange",xp),Ks=Zs=null)}function xp(t){if(t.propertyName==="value"&&fl(Ks)){var n=[];pp(n,Ks,t,lu(t)),np(Fx,n)}}function Hx(t,n,a){t==="focusin"?(_p(),Zs=n,Ks=a,Zs.attachEvent("onpropertychange",xp)):t==="focusout"&&_p()}function Gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl(Ks)}function Vx(t,n){if(t==="click")return fl(n)}function kx(t,n){if(t==="input"||t==="change")return fl(n)}function jx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:jx;function Qs(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!rt.call(n,u)||!jn(t[u],n[u]))return!1}return!0}function yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sp(t,n){var a=yp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=yp(a)}}function bp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?bp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Mp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ei(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Ei(t.document)}return n}function xu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Xx=Ii&&"documentMode"in document&&11>=document.documentMode,zr=null,yu=null,Js=null,Su=!1;function Ep(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Su||zr==null||zr!==Ei(o)||(o=zr,"selectionStart"in o&&xu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Js&&Qs(Js,o)||(Js=o,o=Kl(yu,"onSelect"),0<o.length&&(n=new cl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=zr)))}function tr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ir={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},bu={},Tp={};Ii&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function nr(t){if(bu[t])return bu[t];if(!Ir[t])return t;var n=Ir[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Tp)return bu[t]=n[a];return t}var Ap=nr("animationend"),wp=nr("animationiteration"),Rp=nr("animationstart"),Wx=nr("transitionrun"),qx=nr("transitionstart"),Yx=nr("transitioncancel"),Cp=nr("transitionend"),Dp=new Map,Mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mu.push("scrollEnd");function di(t,n){Dp.set(t,n),re(n,[t])}var Np=new WeakMap;function ai(t,n){if(typeof t=="object"&&t!==null){var a=Np.get(t);return a!==void 0?a:(n={value:t,source:n,stack:je(n)},Np.set(t,n),n)}return{value:t,source:n,stack:je(n)}}var ri=[],Br=0,Eu=0;function hl(){for(var t=Br,n=Eu=Br=0;n<t;){var a=ri[n];ri[n++]=null;var o=ri[n];ri[n++]=null;var u=ri[n];ri[n++]=null;var d=ri[n];if(ri[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&Up(a,u,d)}}function dl(t,n,a,o){ri[Br++]=t,ri[Br++]=n,ri[Br++]=a,ri[Br++]=o,Eu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Tu(t,n,a,o){return dl(t,n,a,o),pl(t)}function Fr(t,n){return dl(t,null,null,n),pl(t)}function Up(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-De(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function pl(t){if(50<Eo)throw Eo=0,Uf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Hr={};function Zx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,o){return new Zx(t,n,a,o)}function Au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Lp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ml(t,n,a,o,u,d){var S=0;if(o=t,typeof t=="function")Au(t)&&(S=1);else if(typeof t=="string")S=Qy(t,a,j.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=Xn(31,a,n,u),t.elementType=L,t.lanes=d,t;case M:return ir(a.children,u,d,n);case T:S=8,u|=24;break;case y:return t=Xn(12,a,n,u|2),t.elementType=y,t.lanes=d,t;case X:return t=Xn(13,a,n,u),t.elementType=X,t.lanes=d,t;case H:return t=Xn(19,a,n,u),t.elementType=H,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case U:S=10;break e;case O:S=9;break e;case N:S=11;break e;case B:S=14;break e;case Z:S=16,o=null;break e}S=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Xn(S,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function ir(t,n,a,o){return t=Xn(7,t,o,n),t.lanes=a,t}function wu(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function Ru(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Gr=[],Vr=0,gl=null,vl=0,si=[],oi=0,ar=null,Fi=1,Hi="";function rr(t,n){Gr[Vr++]=vl,Gr[Vr++]=gl,gl=t,vl=n}function Op(t,n,a){si[oi++]=Fi,si[oi++]=Hi,si[oi++]=ar,ar=t;var o=Fi;t=Hi;var u=32-De(o)-1;o&=~(1<<u),a+=1;var d=32-De(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Fi=1<<32-De(n)+u|a<<u|o,Hi=d+t}else Fi=1<<d|a<<u|o,Hi=t}function Cu(t){t.return!==null&&(rr(t,1),Op(t,1,0))}function Du(t){for(;t===gl;)gl=Gr[--Vr],Gr[Vr]=null,vl=Gr[--Vr],Gr[Vr]=null;for(;t===ar;)ar=si[--oi],si[oi]=null,Hi=si[--oi],si[oi]=null,Fi=si[--oi],si[oi]=null}var Dn=null,Yt=null,At=!1,sr=null,Ti=!1,Nu=Error(s(519));function or(t){var n=Error(s(418,""));throw to(ai(n,t)),Nu}function Pp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[rn]=t,n[vn]=o,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)mt(Ao[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Rn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),hi(n);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),Jd(n,o.value,o.defaultValue,o.children),hi(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Jg(n.textContent,a)?(o.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),o.onScroll!=null&&mt("scroll",n),o.onScrollEnd!=null&&mt("scrollend",n),o.onClick!=null&&(n.onclick=Ql),n=!0):n=!1,n||or(t)}function zp(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Dn=Dn.return}}function $s(t){if(t!==Dn)return!1;if(!At)return zp(t),At=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Yf(t.type,t.memoizedProps)),a=!a),a&&Yt&&or(t),zp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Yt=mi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Yt=null}}else n===27?(n=Yt,Ra(t.type)?(t=Jf,Jf=null,Yt=t):Yt=n):Yt=Dn?mi(t.stateNode.nextSibling):null;return!0}function eo(){Yt=Dn=null,At=!1}function Ip(){var t=sr;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),sr=null),t}function to(t){sr===null?sr=[t]:sr.push(t)}var Uu=I(null),lr=null,Gi=null;function da(t,n,a){ce(Uu,n._currentValue),n._currentValue=a}function Vi(t){t._currentValue=Uu.current,ae(Uu)}function Lu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ou(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=u;for(var F=0;F<n.length;F++)if(A.context===n[F]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),Lu(d.return,a,t),o||(S=null);break e}d=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Lu(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function no(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;jn(u.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(u===ve.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Uo):t=[Uo])}u=u.return}t!==null&&Ou(n,t,a,o),n.flags|=262144}function _l(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function cr(t){lr=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return Bp(lr,t)}function xl(t,n){return lr===null&&cr(t),Bp(t,n)}function Bp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(s(308));Gi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Gi=Gi.next=n;return a}var Kx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Qx=r.unstable_scheduleCallback,Jx=r.unstable_NormalPriority,sn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pu(){return{controller:new Kx,data:new Map,refCount:0}}function io(t){t.refCount--,t.refCount===0&&Qx(Jx,function(){t.controller.abort()})}var ao=null,zu=0,kr=0,jr=null;function $x(t,n){if(ao===null){var a=ao=[];zu=0,kr=Ff(),jr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return zu++,n.then(Fp,Fp),n}function Fp(){if(--zu===0&&ao!==null){jr!==null&&(jr.status="fulfilled");var t=ao;ao=null,kr=0,jr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ey(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Hp=z.S;z.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&$x(t,n),Hp!==null&&Hp(t,n)};var ur=I(null);function Iu(){var t=ur.current;return t!==null?t:Gt.pooledCache}function yl(t,n){n===null?ce(ur,ur.current):ce(ur,n.pool)}function Gp(){var t=Iu();return t===null?null:{parent:sn._currentValue,pool:t}}var ro=Error(s(460)),Vp=Error(s(474)),Sl=Error(s(542)),Bu={then:function(){}};function kp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function bl(){}function jp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(bl,bl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Wp(t),t;default:if(typeof n.status=="string")n.then(bl,bl);else{if(t=Gt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Wp(t),t}throw so=n,ro}}var so=null;function Xp(){if(so===null)throw Error(s(459));var t=so;return so=null,t}function Wp(t){if(t===ro||t===Sl)throw Error(s(483))}var pa=!1;function Fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ga(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ct&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=pl(t),Up(t,null,a),n}return dl(t,o,n,a),pl(t)}function oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,st(t,a)}}function Gu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Vu=!1;function lo(){if(Vu){var t=jr;if(t!==null)throw t}}function co(t,n,a,o){Vu=!1;var u=t.updateQueue;pa=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var F=A,ee=F.next;F.next=null,S===null?d=ee:S.next=ee,S=F;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,A=ge.lastBaseUpdate,A!==S&&(A===null?ge.firstBaseUpdate=ee:A.next=ee,ge.lastBaseUpdate=F))}if(d!==null){var Me=u.baseState;S=0,ge=ee=F=null,A=d;do{var ne=A.lane&-536870913,oe=ne!==A.lane;if(oe?(xt&ne)===ne:(o&ne)===ne){ne!==0&&ne===kr&&(Vu=!0),ge!==null&&(ge=ge.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var tt=t,Qe=A;ne=n;var zt=a;switch(Qe.tag){case 1:if(tt=Qe.payload,typeof tt=="function"){Me=tt.call(zt,Me,ne);break e}Me=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=Qe.payload,ne=typeof tt=="function"?tt.call(zt,Me,ne):tt,ne==null)break e;Me=g({},Me,ne);break e;case 2:pa=!0}}ne=A.callback,ne!==null&&(t.flags|=64,oe&&(t.flags|=8192),oe=u.callbacks,oe===null?u.callbacks=[ne]:oe.push(ne))}else oe={lane:ne,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ge===null?(ee=ge=oe,F=Me):ge=ge.next=oe,S|=ne;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;oe=A,A=oe.next,oe.next=null,u.lastBaseUpdate=oe,u.shared.pending=null}}while(!0);ge===null&&(F=Me),u.baseState=F,u.firstBaseUpdate=ee,u.lastBaseUpdate=ge,d===null&&(u.shared.lanes=0),Ea|=S,t.lanes=S,t.memoizedState=Me}}function qp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Yp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)qp(a[t],n)}var Xr=I(null),Ml=I(0);function Zp(t,n){t=Zi,ce(Ml,t),ce(Xr,n),Zi=t|n.baseLanes}function ku(){ce(Ml,Zi),ce(Xr,Xr.current)}function ju(){Zi=Ml.current,ae(Xr),ae(Ml)}var va=0,ht=null,Ot=null,tn=null,El=!1,Wr=!1,fr=!1,Tl=0,uo=0,qr=null,ty=0;function Qt(){throw Error(s(321))}function Xu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function Wu(t,n,a,o,u,d){return va=d,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Um:Lm,fr=!1,d=a(o,u),fr=!1,Wr&&(d=Qp(n,a,o,u)),Kp(t),d}function Kp(t){z.H=Nl;var n=Ot!==null&&Ot.next!==null;if(va=0,tn=Ot=ht=null,El=!1,uo=0,qr=null,n)throw Error(s(300));t===null||hn||(t=t.dependencies,t!==null&&_l(t)&&(hn=!0))}function Qp(t,n,a,o){ht=t;var u=0;do{if(Wr&&(qr=null),uo=0,Wr=!1,25<=u)throw Error(s(301));if(u+=1,tn=Ot=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=ly,d=n(a,o)}while(Wr);return d}function ny(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?fo(n):n,t=t.useState()[0],(Ot!==null?Ot.memoizedState:null)!==t&&(ht.flags|=1024),n}function qu(){var t=Tl!==0;return Tl=0,t}function Yu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Zu(t){if(El){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}El=!1}va=0,tn=Ot=ht=null,Wr=!1,uo=Tl=0,qr=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?ht.memoizedState=tn=t:tn=tn.next=t,tn}function nn(){if(Ot===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var n=tn===null?ht.memoizedState:tn.next;if(n!==null)tn=n,Ot=t;else{if(t===null)throw ht.alternate===null?Error(s(467)):Error(s(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},tn===null?ht.memoizedState=tn=t:tn=tn.next=t}return tn}function Ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(t){var n=uo;return uo+=1,qr===null&&(qr=[]),t=jp(qr,t,n),n=ht,(tn===null?n.memoizedState:tn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Um:Lm),t}function Al(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fo(t);if(t.$$typeof===U)return En(t)}throw Error(s(438,String(t)))}function Qu(t){var n=null,a=ht.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ht.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ku(),ht.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function ki(t,n){return typeof n=="function"?n(t):n}function wl(t){var n=nn();return Ju(n,Ot,t)}function Ju(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var A=S=null,F=null,ee=n,ge=!1;do{var Me=ee.lane&-536870913;if(Me!==ee.lane?(xt&Me)===Me:(va&Me)===Me){var ne=ee.revertLane;if(ne===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),Me===kr&&(ge=!0);else if((va&ne)===ne){ee=ee.next,ne===kr&&(ge=!0);continue}else Me={lane:0,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},F===null?(A=F=Me,S=d):F=F.next=Me,ht.lanes|=ne,Ea|=ne;Me=ee.action,fr&&a(d,Me),d=ee.hasEagerState?ee.eagerState:a(d,Me)}else ne={lane:Me,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},F===null?(A=F=ne,S=d):F=F.next=ne,ht.lanes|=Me,Ea|=Me;ee=ee.next}while(ee!==null&&ee!==n);if(F===null?S=d:F.next=A,!jn(d,t.memoizedState)&&(hn=!0,ge&&(a=jr,a!==null)))throw a;t.memoizedState=d,t.baseState=S,t.baseQueue=F,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function $u(t){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do d=t(d,S.action),S=S.next;while(S!==u);jn(d,n.memoizedState)||(hn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Jp(t,n,a){var o=ht,u=nn(),d=At;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!jn((Ot||u).memoizedState,a);S&&(u.memoizedState=a,hn=!0),u=u.queue;var A=tm.bind(null,o,u,t);if(ho(2048,8,A,[t]),u.getSnapshot!==n||S||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,Yr(9,Rl(),em.bind(null,o,u,a,n),null),Gt===null)throw Error(s(349));d||(va&124)!==0||$p(o,n,a)}return a}function $p(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ht.updateQueue,n===null?(n=Ku(),ht.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function em(t,n,a,o){n.value=a,n.getSnapshot=o,nm(n)&&im(t)}function tm(t,n,a){return a(function(){nm(n)&&im(t)})}function nm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function im(t){var n=Fr(t,2);n!==null&&Kn(n,t,2)}function ef(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),fr){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},n}function am(t,n,a,o){return t.baseState=a,Ju(t,Ot,typeof o=="function"?o:ki)}function iy(t,n,a,o,u){if(Dl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};z.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,rm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function rm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=z.T,S={};z.T=S;try{var A=a(u,o),F=z.S;F!==null&&F(S,A),sm(t,n,A)}catch(ee){tf(t,n,ee)}finally{z.T=d}}else try{d=a(u,o),sm(t,n,d)}catch(ee){tf(t,n,ee)}}function sm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){om(t,n,o)},function(o){return tf(t,n,o)}):om(t,n,a)}function om(t,n,a){n.status="fulfilled",n.value=a,lm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,rm(t,a)))}function tf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,lm(n),n=n.next;while(n!==o)}t.action=null}function lm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function cm(t,n){return n}function um(t,n){if(At){var a=Gt.formState;if(a!==null){e:{var o=ht;if(At){if(Yt){t:{for(var u=Yt,d=Ti;u.nodeType!==8;){if(!d){u=null;break t}if(u=mi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Yt=mi(u.nextSibling),o=u.data==="F!";break e}}or(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cm,lastRenderedState:n},a.queue=o,a=Cm.bind(null,ht,o),o.dispatch=a,o=ef(!1),d=of.bind(null,ht,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=iy.bind(null,ht,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function fm(t){var n=nn();return hm(n,Ot,t)}function hm(t,n,a){if(n=Ju(t,n,cm)[0],t=wl(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=fo(n)}catch(S){throw S===ro?Sl:S}else o=n;n=nn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ht.flags|=2048,Yr(9,Rl(),ay.bind(null,u,a),null)),[o,d,t]}function ay(t,n){t.action=n}function dm(t){var n=nn(),a=Ot;if(a!==null)return hm(n,a,t);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Yr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ht.updateQueue,n===null&&(n=Ku(),ht.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Rl(){return{destroy:void 0,resource:void 0}}function pm(){return nn().memoizedState}function Cl(t,n,a,o){var u=Bn();o=o===void 0?null:o,ht.flags|=t,u.memoizedState=Yr(1|n,Rl(),a,o)}function ho(t,n,a,o){var u=nn();o=o===void 0?null:o;var d=u.memoizedState.inst;Ot!==null&&o!==null&&Xu(o,Ot.memoizedState.deps)?u.memoizedState=Yr(n,d,a,o):(ht.flags|=t,u.memoizedState=Yr(1|n,d,a,o))}function mm(t,n){Cl(8390656,8,t,n)}function gm(t,n){ho(2048,8,t,n)}function vm(t,n){return ho(4,2,t,n)}function _m(t,n){return ho(4,4,t,n)}function xm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ym(t,n,a){a=a!=null?a.concat([t]):null,ho(4,4,xm.bind(null,n,t),a)}function nf(){}function Sm(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Xu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function bm(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Xu(n,o[1]))return o[0];if(o=t(),fr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o}function af(t,n,a){return a===void 0||(va&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Tg(),ht.lanes|=t,Ea|=t,a)}function Mm(t,n,a,o){return jn(a,n)?a:Xr.current!==null?(t=af(t,a,o),jn(t,n)||(hn=!0),t):(va&42)===0?(hn=!0,t.memoizedState=a):(t=Tg(),ht.lanes|=t,Ea|=t,n)}function Em(t,n,a,o,u){var d=K.p;K.p=d!==0&&8>d?d:8;var S=z.T,A={};z.T=A,of(t,!1,n,a);try{var F=u(),ee=z.S;if(ee!==null&&ee(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ge=ey(F,o);po(t,n,ge,Zn(t))}else po(t,n,o,Zn(t))}catch(Me){po(t,n,{then:function(){},status:"rejected",reason:Me},Zn())}finally{K.p=d,z.T=S}}function ry(){}function rf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Tm(t).queue;Em(t,u,n,V,a===null?ry:function(){return Am(t),a(o)})}function Tm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:V},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Am(t){var n=Tm(t).next.queue;po(t,n,{},Zn())}function sf(){return En(Uo)}function wm(){return nn().memoizedState}function Rm(){return nn().memoizedState}function sy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=ma(a);var o=ga(n,t,a);o!==null&&(Kn(o,n,a),oo(o,n,a)),n={cache:Pu()},t.payload=n;return}n=n.return}}function oy(t,n,a){var o=Zn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(t)?Dm(n,a):(a=Tu(t,n,a,o),a!==null&&(Kn(a,t,o),Nm(a,n,o)))}function Cm(t,n,a){var o=Zn();po(t,n,a,o)}function po(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(t))Dm(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,A=d(S,a);if(u.hasEagerState=!0,u.eagerState=A,jn(A,S))return dl(t,n,u,0),Gt===null&&hl(),!1}catch{}finally{}if(a=Tu(t,n,u,o),a!==null)return Kn(a,t,o),Nm(a,n,o),!0}return!1}function of(t,n,a,o){if(o={lane:2,revertLane:Ff(),action:o,hasEagerState:!1,eagerState:null,next:null},Dl(t)){if(n)throw Error(s(479))}else n=Tu(t,a,o,2),n!==null&&Kn(n,t,2)}function Dl(t){var n=t.alternate;return t===ht||n!==null&&n===ht}function Dm(t,n){Wr=El=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Nm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,st(t,a)}}var Nl={readContext:En,use:Al,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useLayoutEffect:Qt,useInsertionEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useSyncExternalStore:Qt,useId:Qt,useHostTransitionStatus:Qt,useFormState:Qt,useActionState:Qt,useOptimistic:Qt,useMemoCache:Qt,useCacheRefresh:Qt},Um={readContext:En,use:Al,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:En,useEffect:mm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cl(4194308,4,xm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var o=t();if(fr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(fr){Ce(!0);try{a(n)}finally{Ce(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=oy.bind(null,ht,t),[o.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=ef(t);var n=t.queue,a=Cm.bind(null,ht,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(t,n){var a=Bn();return af(a,t,n)},useTransition:function(){var t=ef(!1);return t=Em.bind(null,ht,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ht,u=Bn();if(At){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Gt===null)throw Error(s(349));(xt&124)!==0||$p(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,mm(tm.bind(null,o,d,t),[t]),o.flags|=2048,Yr(9,Rl(),em.bind(null,o,d,a,n),null),a},useId:function(){var t=Bn(),n=Gt.identifierPrefix;if(At){var a=Hi,o=Fi;a=(o&~(1<<32-De(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=ty++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:sf,useFormState:um,useActionState:um,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,ht,!0,a),a.dispatch=n,[t,n]},useMemoCache:Qu,useCacheRefresh:function(){return Bn().memoizedState=sy.bind(null,ht)}},Lm={readContext:En,use:Al,useCallback:Sm,useContext:En,useEffect:gm,useImperativeHandle:ym,useInsertionEffect:vm,useLayoutEffect:_m,useMemo:bm,useReducer:wl,useRef:pm,useState:function(){return wl(ki)},useDebugValue:nf,useDeferredValue:function(t,n){var a=nn();return Mm(a,Ot.memoizedState,t,n)},useTransition:function(){var t=wl(ki)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:Jp,useId:wm,useHostTransitionStatus:sf,useFormState:fm,useActionState:fm,useOptimistic:function(t,n){var a=nn();return am(a,Ot,t,n)},useMemoCache:Qu,useCacheRefresh:Rm},ly={readContext:En,use:Al,useCallback:Sm,useContext:En,useEffect:gm,useImperativeHandle:ym,useInsertionEffect:vm,useLayoutEffect:_m,useMemo:bm,useReducer:$u,useRef:pm,useState:function(){return $u(ki)},useDebugValue:nf,useDeferredValue:function(t,n){var a=nn();return Ot===null?af(a,t,n):Mm(a,Ot.memoizedState,t,n)},useTransition:function(){var t=$u(ki)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:Jp,useId:wm,useHostTransitionStatus:sf,useFormState:dm,useActionState:dm,useOptimistic:function(t,n){var a=nn();return Ot!==null?am(a,Ot,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Qu,useCacheRefresh:Rm},Zr=null,mo=0;function Ul(t){var n=mo;return mo+=1,Zr===null&&(Zr=[]),jp(Zr,t,n)}function go(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ll(t,n){throw n.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Om(t){var n=t._init;return n(t._payload)}function Pm(t){function n(Q,k){if(t){var $=Q.deletions;$===null?(Q.deletions=[k],Q.flags|=16):$.push(k)}}function a(Q,k){if(!t)return null;for(;k!==null;)n(Q,k),k=k.sibling;return null}function o(Q){for(var k=new Map;Q!==null;)Q.key!==null?k.set(Q.key,Q):k.set(Q.index,Q),Q=Q.sibling;return k}function u(Q,k){return Q=Bi(Q,k),Q.index=0,Q.sibling=null,Q}function d(Q,k,$){return Q.index=$,t?($=Q.alternate,$!==null?($=$.index,$<k?(Q.flags|=67108866,k):$):(Q.flags|=67108866,k)):(Q.flags|=1048576,k)}function S(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function A(Q,k,$,xe){return k===null||k.tag!==6?(k=wu($,Q.mode,xe),k.return=Q,k):(k=u(k,$),k.return=Q,k)}function F(Q,k,$,xe){var He=$.type;return He===M?ge(Q,k,$.props.children,xe,$.key):k!==null&&(k.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===Z&&Om(He)===k.type)?(k=u(k,$.props),go(k,$),k.return=Q,k):(k=ml($.type,$.key,$.props,null,Q.mode,xe),go(k,$),k.return=Q,k)}function ee(Q,k,$,xe){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Ru($,Q.mode,xe),k.return=Q,k):(k=u(k,$.children||[]),k.return=Q,k)}function ge(Q,k,$,xe,He){return k===null||k.tag!==7?(k=ir($,Q.mode,xe,He),k.return=Q,k):(k=u(k,$),k.return=Q,k)}function Me(Q,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=wu(""+k,Q.mode,$),k.return=Q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return $=ml(k.type,k.key,k.props,null,Q.mode,$),go($,k),$.return=Q,$;case b:return k=Ru(k,Q.mode,$),k.return=Q,k;case Z:var xe=k._init;return k=xe(k._payload),Me(Q,k,$)}if(me(k)||ue(k))return k=ir(k,Q.mode,$,null),k.return=Q,k;if(typeof k.then=="function")return Me(Q,Ul(k),$);if(k.$$typeof===U)return Me(Q,xl(Q,k),$);Ll(Q,k)}return null}function ne(Q,k,$,xe){var He=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return He!==null?null:A(Q,k,""+$,xe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===He?F(Q,k,$,xe):null;case b:return $.key===He?ee(Q,k,$,xe):null;case Z:return He=$._init,$=He($._payload),ne(Q,k,$,xe)}if(me($)||ue($))return He!==null?null:ge(Q,k,$,xe,null);if(typeof $.then=="function")return ne(Q,k,Ul($),xe);if($.$$typeof===U)return ne(Q,k,xl(Q,$),xe);Ll(Q,$)}return null}function oe(Q,k,$,xe,He){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Q=Q.get($)||null,A(k,Q,""+xe,He);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case x:return Q=Q.get(xe.key===null?$:xe.key)||null,F(k,Q,xe,He);case b:return Q=Q.get(xe.key===null?$:xe.key)||null,ee(k,Q,xe,He);case Z:var dt=xe._init;return xe=dt(xe._payload),oe(Q,k,$,xe,He)}if(me(xe)||ue(xe))return Q=Q.get($)||null,ge(k,Q,xe,He,null);if(typeof xe.then=="function")return oe(Q,k,$,Ul(xe),He);if(xe.$$typeof===U)return oe(Q,k,$,xl(k,xe),He);Ll(k,xe)}return null}function tt(Q,k,$,xe){for(var He=null,dt=null,Xe=k,$e=k=0,pn=null;Xe!==null&&$e<$.length;$e++){Xe.index>$e?(pn=Xe,Xe=null):pn=Xe.sibling;var Tt=ne(Q,Xe,$[$e],xe);if(Tt===null){Xe===null&&(Xe=pn);break}t&&Xe&&Tt.alternate===null&&n(Q,Xe),k=d(Tt,k,$e),dt===null?He=Tt:dt.sibling=Tt,dt=Tt,Xe=pn}if($e===$.length)return a(Q,Xe),At&&rr(Q,$e),He;if(Xe===null){for(;$e<$.length;$e++)Xe=Me(Q,$[$e],xe),Xe!==null&&(k=d(Xe,k,$e),dt===null?He=Xe:dt.sibling=Xe,dt=Xe);return At&&rr(Q,$e),He}for(Xe=o(Xe);$e<$.length;$e++)pn=oe(Xe,Q,$e,$[$e],xe),pn!==null&&(t&&pn.alternate!==null&&Xe.delete(pn.key===null?$e:pn.key),k=d(pn,k,$e),dt===null?He=pn:dt.sibling=pn,dt=pn);return t&&Xe.forEach(function(La){return n(Q,La)}),At&&rr(Q,$e),He}function Qe(Q,k,$,xe){if($==null)throw Error(s(151));for(var He=null,dt=null,Xe=k,$e=k=0,pn=null,Tt=$.next();Xe!==null&&!Tt.done;$e++,Tt=$.next()){Xe.index>$e?(pn=Xe,Xe=null):pn=Xe.sibling;var La=ne(Q,Xe,Tt.value,xe);if(La===null){Xe===null&&(Xe=pn);break}t&&Xe&&La.alternate===null&&n(Q,Xe),k=d(La,k,$e),dt===null?He=La:dt.sibling=La,dt=La,Xe=pn}if(Tt.done)return a(Q,Xe),At&&rr(Q,$e),He;if(Xe===null){for(;!Tt.done;$e++,Tt=$.next())Tt=Me(Q,Tt.value,xe),Tt!==null&&(k=d(Tt,k,$e),dt===null?He=Tt:dt.sibling=Tt,dt=Tt);return At&&rr(Q,$e),He}for(Xe=o(Xe);!Tt.done;$e++,Tt=$.next())Tt=oe(Xe,Q,$e,Tt.value,xe),Tt!==null&&(t&&Tt.alternate!==null&&Xe.delete(Tt.key===null?$e:Tt.key),k=d(Tt,k,$e),dt===null?He=Tt:dt.sibling=Tt,dt=Tt);return t&&Xe.forEach(function(cS){return n(Q,cS)}),At&&rr(Q,$e),He}function zt(Q,k,$,xe){if(typeof $=="object"&&$!==null&&$.type===M&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:e:{for(var He=$.key;k!==null;){if(k.key===He){if(He=$.type,He===M){if(k.tag===7){a(Q,k.sibling),xe=u(k,$.props.children),xe.return=Q,Q=xe;break e}}else if(k.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===Z&&Om(He)===k.type){a(Q,k.sibling),xe=u(k,$.props),go(xe,$),xe.return=Q,Q=xe;break e}a(Q,k);break}else n(Q,k);k=k.sibling}$.type===M?(xe=ir($.props.children,Q.mode,xe,$.key),xe.return=Q,Q=xe):(xe=ml($.type,$.key,$.props,null,Q.mode,xe),go(xe,$),xe.return=Q,Q=xe)}return S(Q);case b:e:{for(He=$.key;k!==null;){if(k.key===He)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(Q,k.sibling),xe=u(k,$.children||[]),xe.return=Q,Q=xe;break e}else{a(Q,k);break}else n(Q,k);k=k.sibling}xe=Ru($,Q.mode,xe),xe.return=Q,Q=xe}return S(Q);case Z:return He=$._init,$=He($._payload),zt(Q,k,$,xe)}if(me($))return tt(Q,k,$,xe);if(ue($)){if(He=ue($),typeof He!="function")throw Error(s(150));return $=He.call($),Qe(Q,k,$,xe)}if(typeof $.then=="function")return zt(Q,k,Ul($),xe);if($.$$typeof===U)return zt(Q,k,xl(Q,$),xe);Ll(Q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(Q,k.sibling),xe=u(k,$),xe.return=Q,Q=xe):(a(Q,k),xe=wu($,Q.mode,xe),xe.return=Q,Q=xe),S(Q)):a(Q,k)}return function(Q,k,$,xe){try{mo=0;var He=zt(Q,k,$,xe);return Zr=null,He}catch(Xe){if(Xe===ro||Xe===Sl)throw Xe;var dt=Xn(29,Xe,null,Q.mode);return dt.lanes=xe,dt.return=Q,dt}finally{}}}var Kr=Pm(!0),zm=Pm(!1),li=I(null),Ai=null;function _a(t){var n=t.alternate;ce(on,on.current&1),ce(li,t),Ai===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(Ai=t)}function Im(t){if(t.tag===22){if(ce(on,on.current),ce(li,t),Ai===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ai=t)}}else xa()}function xa(){ce(on,on.current),ce(li,li.current)}function ji(t){ae(li),Ai===t&&(Ai=null),ae(on)}var on=I(0);function Ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Qf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function lf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var cf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Zn(),u=ma(o);u.payload=n,a!=null&&(u.callback=a),n=ga(t,u,o),n!==null&&(Kn(n,t,o),oo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Zn(),u=ma(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ga(t,u,o),n!==null&&(Kn(n,t,o),oo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),o=ma(a);o.tag=2,n!=null&&(o.callback=n),n=ga(t,o,a),n!==null&&(Kn(n,t,a),oo(n,t,a))}};function Bm(t,n,a,o,u,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!Qs(a,o)||!Qs(u,d):!0}function Fm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&cf.enqueueReplaceState(n,n.state,null)}function hr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Pl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Hm(t){Pl(t)}function Gm(t){console.error(t)}function Vm(t){Pl(t)}function zl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function km(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function uf(t,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){zl(t,n)},a}function jm(t){return t=ma(t),t.tag=3,t}function Xm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){km(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){km(n,a,o),typeof u!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function cy(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&no(n,a,u,!0),a=li.current,a!==null){switch(a.tag){case 13:return Ai===null?Of():a.alternate===null&&Zt===0&&(Zt=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Bu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),zf(t,o,u)),!1;case 22:return a.flags|=65536,o===Bu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),zf(t,o,u)),!1}throw Error(s(435,a.tag))}return zf(t,o,u),Of(),!1}if(At)return n=li.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Nu&&(t=Error(s(422),{cause:o}),to(ai(t,a)))):(o!==Nu&&(n=Error(s(423),{cause:o}),to(ai(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ai(o,a),u=uf(t.stateNode,o,u),Gu(t,u),Zt!==4&&(Zt=2)),!1;var d=Error(s(520),{cause:o});if(d=ai(d,a),Mo===null?Mo=[d]:Mo.push(d),Zt!==4&&(Zt=2),n===null)return!0;o=ai(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=uf(a.stateNode,o,t),Gu(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ta===null||!Ta.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=jm(u),Xm(u,t,a,o),Gu(a,u),!1}a=a.return}while(a!==null);return!1}var Wm=Error(s(461)),hn=!1;function _n(t,n,a,o){n.child=t===null?zm(n,null,a,o):Kr(n,t.child,a,o)}function qm(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return cr(n),o=Wu(t,n,a,S,d,u),A=qu(),t!==null&&!hn?(Yu(t,n,u),Xi(t,n,u)):(At&&A&&Cu(n),n.flags|=1,_n(t,n,o,u),n.child)}function Ym(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Au(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Zm(t,n,d,o,u)):(t=ml(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!_f(t,u)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:Qs,a(S,o)&&t.ref===n.ref)return Xi(t,n,u)}return n.flags|=1,t=Bi(d,o),t.ref=n.ref,t.return=n,n.child=t}function Zm(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(Qs(d,o)&&t.ref===n.ref)if(hn=!1,n.pendingProps=o=d,_f(t,u))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,Xi(t,n,u)}return ff(t,n,a,o,u)}function Km(t,n,a){var o=n.pendingProps,u=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,t!==null){for(u=n.child=t.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return Qm(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&yl(n,d!==null?d.cachePool:null),d!==null?Zp(n,d):ku(),Im(n);else return n.lanes=n.childLanes=536870912,Qm(t,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(yl(n,d.cachePool),Zp(n,d),xa(),n.memoizedState=null):(t!==null&&yl(n,null),ku(),xa());return _n(t,n,u,a),n.child}function Qm(t,n,a,o){var u=Iu();return u=u===null?null:{parent:sn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&yl(n,null),ku(),Im(n),t!==null&&no(t,n,o,!0),null}function Il(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ff(t,n,a,o,u){return cr(n),a=Wu(t,n,a,o,void 0,u),o=qu(),t!==null&&!hn?(Yu(t,n,u),Xi(t,n,u)):(At&&o&&Cu(n),n.flags|=1,_n(t,n,a,u),n.child)}function Jm(t,n,a,o,u,d){return cr(n),n.updateQueue=null,a=Qp(n,o,a,u),Kp(t),o=qu(),t!==null&&!hn?(Yu(t,n,d),Xi(t,n,d)):(At&&o&&Cu(n),n.flags|=1,_n(t,n,a,d),n.child)}function $m(t,n,a,o,u){if(cr(n),n.stateNode===null){var d=Hr,S=a.contextType;typeof S=="object"&&S!==null&&(d=En(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=cf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Fu(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?En(S):Hr,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(lf(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&cf.enqueueReplaceState(d,d.state,null),co(n,o,d,u),lo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var A=n.memoizedProps,F=hr(a,A);d.props=F;var ee=d.context,ge=a.contextType;S=Hr,typeof ge=="object"&&ge!==null&&(S=En(ge));var Me=a.getDerivedStateFromProps;ge=typeof Me=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ge||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||ee!==S)&&Fm(n,d,o,S),pa=!1;var ne=n.memoizedState;d.state=ne,co(n,o,d,u),lo(),ee=n.memoizedState,A||ne!==ee||pa?(typeof Me=="function"&&(lf(n,a,Me,o),ee=n.memoizedState),(F=pa||Bm(n,a,F,o,ne,ee,S))?(ge||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),d.props=o,d.state=ee,d.context=S,o=F):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Hu(t,n),S=n.memoizedProps,ge=hr(a,S),d.props=ge,Me=n.pendingProps,ne=d.context,ee=a.contextType,F=Hr,typeof ee=="object"&&ee!==null&&(F=En(ee)),A=a.getDerivedStateFromProps,(ee=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Me||ne!==F)&&Fm(n,d,o,F),pa=!1,ne=n.memoizedState,d.state=ne,co(n,o,d,u),lo();var oe=n.memoizedState;S!==Me||ne!==oe||pa||t!==null&&t.dependencies!==null&&_l(t.dependencies)?(typeof A=="function"&&(lf(n,a,A,o),oe=n.memoizedState),(ge=pa||Bm(n,a,ge,o,ne,oe,F)||t!==null&&t.dependencies!==null&&_l(t.dependencies))?(ee||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,oe,F),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,oe,F)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=oe),d.props=o,d.state=oe,d.context=F,o=ge):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Il(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Kr(n,t.child,null,u),n.child=Kr(n,null,a,u)):_n(t,n,a,u),n.memoizedState=d.state,t=n.child):t=Xi(t,n,u),t}function eg(t,n,a,o){return eo(),n.flags|=256,_n(t,n,a,o),n.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(t){return{baseLanes:t,cachePool:Gp()}}function pf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function tg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(u?_a(n):xa(),At){var A=Yt,F;if(F=A){e:{for(F=A,A=Ti;F.nodeType!==8;){if(!A){A=null;break e}if(F=mi(F.nextSibling),F===null){A=null;break e}}A=F}A!==null?(n.memoizedState={dehydrated:A,treeContext:ar!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},F=Xn(18,null,null,0),F.stateNode=A,F.return=n,n.child=F,Dn=n,Yt=null,F=!0):F=!1}F||or(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Qf(A)?n.lanes=32:n.lanes=536870912,null;ji(n)}return A=o.children,o=o.fallback,u?(xa(),u=n.mode,A=Bl({mode:"hidden",children:A},u),o=ir(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,u=n.child,u.memoizedState=df(a),u.childLanes=pf(t,S,a),n.memoizedState=hf,o):(_a(n),mf(n,A))}if(F=t.memoizedState,F!==null&&(A=F.dehydrated,A!==null)){if(d)n.flags&256?(_a(n),n.flags&=-257,n=gf(t,n,a)):n.memoizedState!==null?(xa(),n.child=t.child,n.flags|=128,n=null):(xa(),u=o.fallback,A=n.mode,o=Bl({mode:"visible",children:o.children},A),u=ir(u,A,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Kr(n,t.child,null,a),o=n.child,o.memoizedState=df(a),o.childLanes=pf(t,S,a),n.memoizedState=hf,n=u);else if(_a(n),Qf(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var ee=S.dgst;S=ee,o=Error(s(419)),o.stack="",o.digest=S,to({value:o,source:null,stack:null}),n=gf(t,n,a)}else if(hn||no(t,n,a,!1),S=(a&t.childLanes)!==0,hn||S){if(S=Gt,S!==null&&(o=a&-a,o=(o&42)!==0?1:Ht(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==F.retryLane))throw F.retryLane=o,Fr(t,o),Kn(S,t,o),Wm;A.data==="$?"||Of(),n=gf(t,n,a)}else A.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Yt=mi(A.nextSibling),Dn=n,At=!0,sr=null,Ti=!1,t!==null&&(si[oi++]=Fi,si[oi++]=Hi,si[oi++]=ar,Fi=t.id,Hi=t.overflow,ar=n),n=mf(n,o.children),n.flags|=4096);return n}return u?(xa(),u=o.fallback,A=n.mode,F=t.child,ee=F.sibling,o=Bi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,ee!==null?u=Bi(ee,u):(u=ir(u,A,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,A=t.child.memoizedState,A===null?A=df(a):(F=A.cachePool,F!==null?(ee=sn._currentValue,F=F.parent!==ee?{parent:ee,pool:ee}:F):F=Gp(),A={baseLanes:A.baseLanes|a,cachePool:F}),u.memoizedState=A,u.childLanes=pf(t,S,a),n.memoizedState=hf,o):(_a(n),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function mf(t,n){return n=Bl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Bl(t,n){return t=Xn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function gf(t,n,a){return Kr(n,t.child,null,a),t=mf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ng(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Lu(t.return,n,a)}function vf(t,n,a,o,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function ig(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(_n(t,n,o.children,a),o=on.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ng(t,a,n);else if(t.tag===19)ng(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(ce(on,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ol(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),vf(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ol(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}vf(n,!0,a,null,d);break;case"together":vf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Xi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(no(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function _f(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&_l(t)))}function uy(t,n,a){switch(n.tag){case 3:Re(n,n.stateNode.containerInfo),da(n,sn,t.memoizedState.cache),eo();break;case 27:case 5:We(n);break;case 4:Re(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(_a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?tg(t,n,a):(_a(n),t=Xi(t,n,a),t!==null?t.sibling:null);_a(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(no(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return ig(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ce(on,on.current),o)break;return null;case 22:case 23:return n.lanes=0,Km(t,n,a);case 24:da(n,sn,t.memoizedState.cache)}return Xi(t,n,a)}function ag(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!_f(t,a)&&(n.flags&128)===0)return hn=!1,uy(t,n,a);hn=(t.flags&131072)!==0}else hn=!1,At&&(n.flags&1048576)!==0&&Op(n,vl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Au(o)?(t=hr(o,t),n.tag=1,n=$m(null,n,o,t,a)):(n.tag=0,n=ff(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===N){n.tag=11,n=qm(null,n,o,t,a);break e}else if(u===B){n.tag=14,n=Ym(null,n,o,t,a);break e}}throw n=ye(o)||o,Error(s(306,n,""))}}return n;case 0:return ff(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=hr(o,n.pendingProps),$m(t,n,o,u,a);case 3:e:{if(Re(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Hu(t,n),co(n,o,null,a);var S=n.memoizedState;if(o=S.cache,da(n,sn,o),o!==d.cache&&Ou(n,[sn],a,!0),lo(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=eg(t,n,o,a);break e}else if(o!==u){u=ai(Error(s(424)),n),to(u),n=eg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Yt=mi(t.firstChild),Dn=n,At=!0,sr=null,Ti=!0,a=zm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(eo(),o===u){n=Xi(t,n,a);break e}_n(t,n,o,a)}n=n.child}return n;case 26:return Il(t,n),t===null?(a=l0(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,t=n.pendingProps,o=Jl(de.current).createElement(a),o[rn]=n,o[vn]=t,yn(o,a,t),en(o),n.stateNode=o):n.memoizedState=l0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return We(n),t===null&&At&&(o=n.stateNode=r0(n.type,n.pendingProps,de.current),Dn=n,Ti=!0,u=Yt,Ra(n.type)?(Jf=u,Yt=mi(o.firstChild)):Yt=u),_n(t,n,n.pendingProps.children,a),Il(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((u=o=Yt)&&(o=By(o,n.type,n.pendingProps,Ti),o!==null?(n.stateNode=o,Dn=n,Yt=mi(o.firstChild),Ti=!1,u=!0):u=!1),u||or(n)),We(n),u=n.type,d=n.pendingProps,S=t!==null?t.memoizedProps:null,o=d.children,Yf(u,d)?o=null:S!==null&&Yf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Wu(t,n,ny,null,null,a),Uo._currentValue=u),Il(t,n),_n(t,n,o,a),n.child;case 6:return t===null&&At&&((t=a=Yt)&&(a=Fy(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,Dn=n,Yt=null,t=!0):t=!1),t||or(n)),null;case 13:return tg(t,n,a);case 4:return Re(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Kr(n,null,o,a):_n(t,n,o,a),n.child;case 11:return qm(t,n,n.type,n.pendingProps,a);case 7:return _n(t,n,n.pendingProps,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,da(n,n.type,o.value),_n(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,cr(n),u=En(u),o=o(u),n.flags|=1,_n(t,n,o,a),n.child;case 14:return Ym(t,n,n.type,n.pendingProps,a);case 15:return Zm(t,n,n.type,n.pendingProps,a);case 19:return ig(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Bl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Bi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Km(t,n,a);case 24:return cr(n),o=En(sn),t===null?(u=Iu(),u===null&&(u=Gt,d=Pu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Fu(n),da(n,sn,u)):((t.lanes&a)!==0&&(Hu(t,n),co(n,null,null,a),lo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),da(n,sn,o)):(o=d.cache,da(n,sn,o),o!==u.cache&&Ou(n,[sn],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Wi(t){t.flags|=4}function rg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!d0(n)){if(n=li.current,n!==null&&((xt&4194048)===xt?Ai!==null:(xt&62914560)!==xt&&(xt&536870912)===0||n!==Ai))throw so=Bu,Vp;t.flags|=8192}}function Fl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,es|=n)}function vo(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function fy(t,n,a){var o=n.pendingProps;switch(Du(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(sn),Fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&($s(n)?Wi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ip())),jt(n),null;case 26:return a=n.memoizedState,t===null?(Wi(n),a!==null?(jt(n),rg(n,a)):(jt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Wi(n),jt(n),rg(n,a)):(jt(n),n.flags&=-16777217):(t.memoizedProps!==o&&Wi(n),jt(n),n.flags&=-16777217),null;case 27:at(n),a=de.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return jt(n),null}t=j.current,$s(n)?Pp(n):(t=r0(u,o,a),n.stateNode=t,Wi(n))}return jt(n),null;case 5:if(at(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return jt(n),null}if(t=j.current,$s(n))Pp(n);else{switch(u=Jl(de.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[rn]=n,t[vn]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(yn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Wi(n)}}return jt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=de.current,$s(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Jg(t.nodeValue,a)),t||or(n)}else t=Jl(t).createTextNode(o),t[rn]=n,n.stateNode=t}return jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=$s(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[rn]=n}else eo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),u=!1}else u=Ip(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ji(n),n):(ji(n),null)}if(ji(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),jt(n),null;case 4:return Fe(),t===null&&kf(n.stateNode.containerInfo),jt(n),null;case 10:return Vi(n.type),jt(n),null;case 19:if(ae(on),u=n.memoizedState,u===null)return jt(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)vo(u,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Ol(t),d!==null){for(n.flags|=128,vo(u,!1),t=d.updateQueue,n.updateQueue=t,Fl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Lp(a,t),a=a.sibling;return ce(on,on.current&1|2),n.child}t=t.sibling}u.tail!==null&&it()>Vl&&(n.flags|=128,o=!0,vo(u,!1),n.lanes=4194304)}else{if(!o)if(t=Ol(d),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Fl(n,t),vo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!At)return jt(n),null}else 2*it()-u.renderingStartTime>Vl&&a!==536870912&&(n.flags|=128,o=!0,vo(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(t=u.last,t!==null?t.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=it(),n.sibling=null,t=on.current,ce(on,o?t&1|2:t&1),n):(jt(n),null);case 22:case 23:return ji(n),ju(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ae(ur),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(sn),jt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function hy(t,n){switch(Du(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Vi(sn),Fe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return at(n),null;case 13:if(ji(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));eo()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ae(on),null;case 4:return Fe(),null;case 10:return Vi(n.type),null;case 22:case 23:return ji(n),ju(),t!==null&&ae(ur),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Vi(sn),null;case 25:return null;default:return null}}function sg(t,n){switch(Du(n),n.tag){case 3:Vi(sn),Fe();break;case 26:case 27:case 5:at(n);break;case 4:Fe();break;case 13:ji(n);break;case 19:ae(on);break;case 10:Vi(n.type);break;case 22:case 23:ji(n),ju(),t!==null&&ae(ur);break;case 24:Vi(sn)}}function _o(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){Ft(n,n.return,A)}}function ya(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var F=a,ee=A;try{ee()}catch(ge){Ft(u,F,ge)}}}o=o.next}while(o!==d)}}catch(ge){Ft(n,n.return,ge)}}function og(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Yp(n,a)}catch(o){Ft(t,t.return,o)}}}function lg(t,n,a){a.props=hr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ft(t,n,o)}}function xo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ft(t,n,u)}}function wi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ft(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ft(t,n,u)}else a.current=null}function cg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ft(t,t.return,u)}}function xf(t,n,a){try{var o=t.stateNode;Ly(o,t.type,a,n),o[vn]=n}catch(u){Ft(t,t.return,u)}}function ug(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ra(t.type)||t.tag===4}function yf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ug(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ra(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ql));else if(o!==4&&(o===27&&Ra(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Sf(t,n,a),t=t.sibling;t!==null;)Sf(t,n,a),t=t.sibling}function Hl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ra(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Hl(t,n,a),t=t.sibling;t!==null;)Hl(t,n,a),t=t.sibling}function fg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);yn(n,o,a),n[rn]=t,n[vn]=a}catch(d){Ft(t,t.return,d)}}var qi=!1,Jt=!1,bf=!1,hg=typeof WeakSet=="function"?WeakSet:Set,dn=null;function dy(t,n){if(t=t.containerInfo,Wf=ac,t=Mp(t),xu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var S=0,A=-1,F=-1,ee=0,ge=0,Me=t,ne=null;t:for(;;){for(var oe;Me!==a||u!==0&&Me.nodeType!==3||(A=S+u),Me!==d||o!==0&&Me.nodeType!==3||(F=S+o),Me.nodeType===3&&(S+=Me.nodeValue.length),(oe=Me.firstChild)!==null;)ne=Me,Me=oe;for(;;){if(Me===t)break t;if(ne===a&&++ee===u&&(A=S),ne===d&&++ge===o&&(F=S),(oe=Me.nextSibling)!==null)break;Me=ne,ne=Me.parentNode}Me=oe}a=A===-1||F===-1?null:{start:A,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(qf={focusedElem:t,selectionRange:a},ac=!1,dn=n;dn!==null;)if(n=dn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,dn=t;else for(;dn!==null;){switch(n=dn,d=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var tt=hr(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(tt,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(Qe){Ft(a,a.return,Qe)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Kf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,dn=t;break}dn=n.return}}function dg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(t,a),o&4&&_o(5,a);break;case 1:if(Sa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Ft(a,a.return,S)}else{var u=hr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ft(a,a.return,S)}}o&64&&og(a),o&512&&xo(a,a.return);break;case 3:if(Sa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Yp(t,n)}catch(S){Ft(a,a.return,S)}}break;case 27:n===null&&o&4&&fg(a);case 26:case 5:Sa(t,a),n===null&&o&4&&cg(a),o&512&&xo(a,a.return);break;case 12:Sa(t,a);break;case 13:Sa(t,a),o&4&&gg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=by.bind(null,a),Hy(t,a))));break;case 22:if(o=a.memoizedState!==null||qi,!o){n=n!==null&&n.memoizedState!==null||Jt,u=qi;var d=Jt;qi=o,(Jt=n)&&!d?ba(t,a,(a.subtreeFlags&8772)!==0):Sa(t,a),qi=u,Jt=d}break;case 30:break;default:Sa(t,a)}}function pg(t){var n=t.alternate;n!==null&&(t.alternate=null,pg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ua(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Vt=null,Fn=!1;function Yi(t,n,a){for(a=a.child;a!==null;)mg(t,n,a),a=a.sibling}function mg(t,n,a){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(_e,a)}catch{}switch(a.tag){case 26:Jt||wi(a,n),Yi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Jt||wi(a,n);var o=Vt,u=Fn;Ra(a.type)&&(Vt=a.stateNode,Fn=!1),Yi(t,n,a),Ro(a.stateNode),Vt=o,Fn=u;break;case 5:Jt||wi(a,n);case 6:if(o=Vt,u=Fn,Vt=null,Yi(t,n,a),Vt=o,Fn=u,Vt!==null)if(Fn)try{(Vt.nodeType===9?Vt.body:Vt.nodeName==="HTML"?Vt.ownerDocument.body:Vt).removeChild(a.stateNode)}catch(d){Ft(a,n,d)}else try{Vt.removeChild(a.stateNode)}catch(d){Ft(a,n,d)}break;case 18:Vt!==null&&(Fn?(t=Vt,i0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),zo(t)):i0(Vt,a.stateNode));break;case 4:o=Vt,u=Fn,Vt=a.stateNode.containerInfo,Fn=!0,Yi(t,n,a),Vt=o,Fn=u;break;case 0:case 11:case 14:case 15:Jt||ya(2,a,n),Jt||ya(4,a,n),Yi(t,n,a);break;case 1:Jt||(wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&lg(a,n,o)),Yi(t,n,a);break;case 21:Yi(t,n,a);break;case 22:Jt=(o=Jt)||a.memoizedState!==null,Yi(t,n,a),Jt=o;break;default:Yi(t,n,a)}}function gg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zo(t)}catch(a){Ft(n,n.return,a)}}function py(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new hg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new hg),n;default:throw Error(s(435,t.tag))}}function Mf(t,n){var a=py(t);n.forEach(function(o){var u=My.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,S=n,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(Ra(A.type)){Vt=A.stateNode,Fn=!1;break e}break;case 5:Vt=A.stateNode,Fn=!1;break e;case 3:case 4:Vt=A.stateNode.containerInfo,Fn=!0;break e}A=A.return}if(Vt===null)throw Error(s(160));mg(d,S,u),Vt=null,Fn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)vg(n,t),n=n.sibling}var pi=null;function vg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),o&4&&(ya(3,t,t.return),_o(3,t),ya(5,t,t.return));break;case 1:Wn(n,t),qn(t),o&512&&(Jt||a===null||wi(a,a.return)),o&64&&qi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=pi;if(Wn(n,t),qn(t),o&512&&(Jt||a===null||wi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ca]||d[rn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),yn(d,o,a),d[rn]=t,en(d),o=d;break e;case"link":var S=f0("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(d=S[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break t}}d=u.createElement(o),yn(d,o,a),u.head.appendChild(d);break;case"meta":if(S=f0("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(d=S[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break t}}d=u.createElement(o),yn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[rn]=t,en(d),o=d}t.stateNode=o}else h0(u,t.type,t.stateNode);else t.stateNode=u0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?h0(u,t.type,t.stateNode):u0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&xf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),o&512&&(Jt||a===null||wi(a,a.return)),a!==null&&o&4&&xf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),o&512&&(Jt||a===null||wi(a,a.return)),t.flags&32){u=t.stateNode;try{Ur(u,"")}catch(oe){Ft(t,t.return,oe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,xf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(bf=!0);break;case 6:if(Wn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(oe){Ft(t,t.return,oe)}}break;case 3:if(tc=null,u=pi,pi=$l(n.containerInfo),Wn(n,t),pi=u,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{zo(n.containerInfo)}catch(oe){Ft(t,t.return,oe)}bf&&(bf=!1,_g(t));break;case 4:o=pi,pi=$l(t.stateNode.containerInfo),Wn(n,t),qn(t),pi=o;break;case 12:Wn(n,t),qn(t);break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cf=it()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Mf(t,o)));break;case 22:u=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,ee=qi,ge=Jt;if(qi=ee||u,Jt=ge||F,Wn(n,t),Jt=ge,qi=ee,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||qi||Jt||dr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(d=F.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=F.stateNode;var Me=F.memoizedProps.style,ne=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;A.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(oe){Ft(F,F.return,oe)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(oe){Ft(F,F.return,oe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Mf(t,a))));break;case 19:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Mf(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(ug(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=yf(t);Hl(t,d,u);break;case 5:var S=a.stateNode;a.flags&32&&(Ur(S,""),a.flags&=-33);var A=yf(t);Hl(t,A,S);break;case 3:case 4:var F=a.stateNode.containerInfo,ee=yf(t);Sf(t,ee,F);break;default:throw Error(s(161))}}catch(ge){Ft(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function _g(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;_g(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)dg(t,n.alternate,n),n=n.sibling}function dr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),dr(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&lg(n,n.return,a),dr(n);break;case 27:Ro(n.stateNode);case 26:case 5:wi(n,n.return),dr(n);break;case 22:n.memoizedState===null&&dr(n);break;case 30:dr(n);break;default:dr(n)}t=t.sibling}}function ba(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:ba(u,d,a),_o(4,d);break;case 1:if(ba(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){Ft(o,o.return,ee)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)qp(F[u],A)}catch(ee){Ft(o,o.return,ee)}}a&&S&64&&og(d),xo(d,d.return);break;case 27:fg(d);case 26:case 5:ba(u,d,a),a&&o===null&&S&4&&cg(d),xo(d,d.return);break;case 12:ba(u,d,a);break;case 13:ba(u,d,a),a&&S&4&&gg(u,d);break;case 22:d.memoizedState===null&&ba(u,d,a),xo(d,d.return);break;case 30:break;default:ba(u,d,a)}n=n.sibling}}function Ef(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&io(a))}function Tf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t))}function Ri(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)xg(t,n,a,o),n=n.sibling}function xg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,o),u&2048&&_o(9,n);break;case 1:Ri(t,n,a,o);break;case 3:Ri(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t)));break;case 12:if(u&2048){Ri(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,S=d.id,A=d.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Ft(n,n.return,F)}}else Ri(t,n,a,o);break;case 13:Ri(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Ri(t,n,a,o):yo(t,n):d._visibility&2?Ri(t,n,a,o):(d._visibility|=2,Qr(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Ef(S,n);break;case 24:Ri(t,n,a,o),u&2048&&Tf(n.alternate,n);break;default:Ri(t,n,a,o)}}function Qr(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=t,S=n,A=a,F=o,ee=S.flags;switch(S.tag){case 0:case 11:case 15:Qr(d,S,A,F,u),_o(8,S);break;case 23:break;case 22:var ge=S.stateNode;S.memoizedState!==null?ge._visibility&2?Qr(d,S,A,F,u):yo(d,S):(ge._visibility|=2,Qr(d,S,A,F,u)),u&&ee&2048&&Ef(S.alternate,S);break;case 24:Qr(d,S,A,F,u),u&&ee&2048&&Tf(S.alternate,S);break;default:Qr(d,S,A,F,u)}n=n.sibling}}function yo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:yo(a,o),u&2048&&Ef(o.alternate,o);break;case 24:yo(a,o),u&2048&&Tf(o.alternate,o);break;default:yo(a,o)}n=n.sibling}}var So=8192;function Jr(t){if(t.subtreeFlags&So)for(t=t.child;t!==null;)yg(t),t=t.sibling}function yg(t){switch(t.tag){case 26:Jr(t),t.flags&So&&t.memoizedState!==null&&$y(pi,t.memoizedState,t.memoizedProps);break;case 5:Jr(t);break;case 3:case 4:var n=pi;pi=$l(t.stateNode.containerInfo),Jr(t),pi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=So,So=16777216,Jr(t),So=n):Jr(t));break;default:Jr(t)}}function Sg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];dn=o,Mg(o,t)}Sg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bg(t),t=t.sibling}function bg(t){switch(t.tag){case 0:case 11:case 15:bo(t),t.flags&2048&&ya(9,t,t.return);break;case 3:bo(t);break;case 12:bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Gl(t)):bo(t);break;default:bo(t)}}function Gl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];dn=o,Mg(o,t)}Sg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Gl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Gl(n));break;default:Gl(n)}t=t.sibling}}function Mg(t,n){for(;dn!==null;){var a=dn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:io(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,dn=o;else e:for(a=t;dn!==null;){o=dn;var u=o.sibling,d=o.return;if(pg(o),o===a){dn=null;break e}if(u!==null){u.return=d,dn=u;break e}dn=d}}}var my={getCacheForType:function(t){var n=En(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},gy=typeof WeakMap=="function"?WeakMap:Map,Ct=0,Gt=null,pt=null,xt=0,Dt=0,Yn=null,Ma=!1,$r=!1,Af=!1,Zi=0,Zt=0,Ea=0,pr=0,wf=0,ci=0,es=0,Mo=null,Hn=null,Rf=!1,Cf=0,Vl=1/0,kl=null,Ta=null,xn=0,Aa=null,ts=null,ns=0,Df=0,Nf=null,Eg=null,Eo=0,Uf=null;function Zn(){if((Ct&2)!==0&&xt!==0)return xt&-xt;if(z.T!==null){var t=kr;return t!==0?t:Ff()}return Mt()}function Tg(){ci===0&&(ci=(xt&536870912)===0||At?W():536870912);var t=li.current;return t!==null&&(t.flags|=32),ci}function Kn(t,n,a){(t===Gt&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)&&(is(t,0),wa(t,xt,ci,!1)),be(t,a),((Ct&2)===0||t!==Gt)&&(t===Gt&&((Ct&2)===0&&(pr|=a),Zt===4&&wa(t,xt,ci,!1)),Ci(t))}function Ag(t,n,a){if((Ct&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||nt(t,n),u=o?xy(t,n):Pf(t,n,!0),d=o;do{if(u===0){$r&&!o&&wa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!vy(a)){u=Pf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var A=t;u=Mo;var F=A.current.memoizedState.isDehydrated;if(F&&(is(A,S).flags|=256),S=Pf(A,S,!1),S!==2){if(Af&&!F){A.errorRecoveryDisabledLanes|=d,pr|=d,u=4;break e}d=Hn,Hn=u,d!==null&&(Hn===null?Hn=d:Hn.push.apply(Hn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){is(t,0),wa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:wa(o,n,ci,!Ma);break e;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Cf+300-it(),10<u)){if(wa(o,n,ci,!Ma),ft(o,0,!0)!==0)break e;o.timeoutHandle=t0(wg.bind(null,o,a,Hn,kl,Rf,n,ci,pr,es,Ma,d,2,-0,0),u);break e}wg(o,a,Hn,kl,Rf,n,ci,pr,es,Ma,d,0,-0,0)}}break}while(!0);Ci(t)}function wg(t,n,a,o,u,d,S,A,F,ee,ge,Me,ne,oe){if(t.timeoutHandle=-1,Me=n.subtreeFlags,(Me&8192||(Me&16785408)===16785408)&&(No={stylesheets:null,count:0,unsuspend:Jy},yg(n),Me=eS(),Me!==null)){t.cancelPendingCommit=Me(Og.bind(null,t,n,d,a,o,u,S,A,F,ge,1,ne,oe)),wa(t,d,S,!ee);return}Og(t,n,d,a,o,u,S,A,F)}function vy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!jn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(t,n,a,o){n&=~wf,n&=~pr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-De(u),S=1<<d;o[d]=-1,u&=~S}a!==0&&Le(t,a,n)}function jl(){return(Ct&6)===0?(To(0),!1):!0}function Lf(){if(pt!==null){if(Dt===0)var t=pt.return;else t=pt,Gi=lr=null,Zu(t),Zr=null,mo=0,t=pt;for(;t!==null;)sg(t.alternate,t),t=t.return;pt=null}}function is(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Py(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Lf(),Gt=t,pt=a=Bi(t.current,null),xt=n,Dt=0,Yn=null,Ma=!1,$r=nt(t,n),Af=!1,es=ci=wf=pr=Ea=Zt=0,Hn=Mo=null,Rf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-De(o),d=1<<u;n|=t[u],o&=~d}return Zi=n,hl(),a}function Rg(t,n){ht=null,z.H=Nl,n===ro||n===Sl?(n=Xp(),Dt=3):n===Vp?(n=Xp(),Dt=4):Dt=n===Wm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,pt===null&&(Zt=1,zl(t,ai(n,t.current)))}function Cg(){var t=z.H;return z.H=Nl,t===null?Nl:t}function Dg(){var t=z.A;return z.A=my,t}function Of(){Zt=4,Ma||(xt&4194048)!==xt&&li.current!==null||($r=!0),(Ea&134217727)===0&&(pr&134217727)===0||Gt===null||wa(Gt,xt,ci,!1)}function Pf(t,n,a){var o=Ct;Ct|=2;var u=Cg(),d=Dg();(Gt!==t||xt!==n)&&(kl=null,is(t,n)),n=!1;var S=Zt;e:do try{if(Dt!==0&&pt!==null){var A=pt,F=Yn;switch(Dt){case 8:Lf(),S=6;break e;case 3:case 2:case 9:case 6:li.current===null&&(n=!0);var ee=Dt;if(Dt=0,Yn=null,as(t,A,F,ee),a&&$r){S=0;break e}break;default:ee=Dt,Dt=0,Yn=null,as(t,A,F,ee)}}_y(),S=Zt;break}catch(ge){Rg(t,ge)}while(!0);return n&&t.shellSuspendCounter++,Gi=lr=null,Ct=o,z.H=u,z.A=d,pt===null&&(Gt=null,xt=0,hl()),S}function _y(){for(;pt!==null;)Ng(pt)}function xy(t,n){var a=Ct;Ct|=2;var o=Cg(),u=Dg();Gt!==t||xt!==n?(kl=null,Vl=it()+500,is(t,n)):$r=nt(t,n);e:do try{if(Dt!==0&&pt!==null){n=pt;var d=Yn;t:switch(Dt){case 1:Dt=0,Yn=null,as(t,n,d,1);break;case 2:case 9:if(kp(d)){Dt=0,Yn=null,Ug(n);break}n=function(){Dt!==2&&Dt!==9||Gt!==t||(Dt=7),Ci(t)},d.then(n,n);break e;case 3:Dt=7;break e;case 4:Dt=5;break e;case 7:kp(d)?(Dt=0,Yn=null,Ug(n)):(Dt=0,Yn=null,as(t,n,d,7));break;case 5:var S=null;switch(pt.tag){case 26:S=pt.memoizedState;case 5:case 27:var A=pt;if(!S||d0(S)){Dt=0,Yn=null;var F=A.sibling;if(F!==null)pt=F;else{var ee=A.return;ee!==null?(pt=ee,Xl(ee)):pt=null}break t}}Dt=0,Yn=null,as(t,n,d,5);break;case 6:Dt=0,Yn=null,as(t,n,d,6);break;case 8:Lf(),Zt=6;break e;default:throw Error(s(462))}}yy();break}catch(ge){Rg(t,ge)}while(!0);return Gi=lr=null,z.H=o,z.A=u,Ct=a,pt!==null?0:(Gt=null,xt=0,hl(),Zt)}function yy(){for(;pt!==null&&!gn();)Ng(pt)}function Ng(t){var n=ag(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,n===null?Xl(t):pt=n}function Ug(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Jm(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=Jm(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:Zu(n);default:sg(a,n),n=pt=Lp(n,Zi),n=ag(a,n,Zi)}t.memoizedProps=t.pendingProps,n===null?Xl(t):pt=n}function as(t,n,a,o){Gi=lr=null,Zu(n),Zr=null,mo=0;var u=n.return;try{if(cy(t,u,n,a,xt)){Zt=1,zl(t,ai(a,t.current)),pt=null;return}}catch(d){if(u!==null)throw pt=u,d;Zt=1,zl(t,ai(a,t.current)),pt=null;return}n.flags&32768?(At||o===1?t=!0:$r||(xt&536870912)!==0?t=!1:(Ma=t=!0,(o===2||o===9||o===3||o===6)&&(o=li.current,o!==null&&o.tag===13&&(o.flags|=16384))),Lg(n,t)):Xl(n)}function Xl(t){var n=t;do{if((n.flags&32768)!==0){Lg(n,Ma);return}t=n.return;var a=fy(n.alternate,n,Zi);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=t}while(n!==null);Zt===0&&(Zt=5)}function Lg(t,n){do{var a=hy(t.alternate,t);if(a!==null){a.flags&=32767,pt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pt=t;return}pt=t=a}while(t!==null);Zt=6,pt=null}function Og(t,n,a,o,u,d,S,A,F){t.cancelPendingCommit=null;do Wl();while(xn!==0);if((Ct&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Eu,ze(t,a,d,S,A,F),t===Gt&&(pt=Gt=null,xt=0),ts=n,Aa=t,ns=a,Df=d,Nf=u,Eg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ey(P,function(){return Fg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=K.p,K.p=2,S=Ct,Ct|=4;try{dy(t,n,a)}finally{Ct=S,K.p=u,z.T=o}}xn=1,Pg(),zg(),Ig()}}function Pg(){if(xn===1){xn=0;var t=Aa,n=ts,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var u=Ct;Ct|=4;try{vg(n,t);var d=qf,S=Mp(t.containerInfo),A=d.focusedElem,F=d.selectionRange;if(S!==A&&A&&A.ownerDocument&&bp(A.ownerDocument.documentElement,A)){if(F!==null&&xu(A)){var ee=F.start,ge=F.end;if(ge===void 0&&(ge=ee),"selectionStart"in A)A.selectionStart=ee,A.selectionEnd=Math.min(ge,A.value.length);else{var Me=A.ownerDocument||document,ne=Me&&Me.defaultView||window;if(ne.getSelection){var oe=ne.getSelection(),tt=A.textContent.length,Qe=Math.min(F.start,tt),zt=F.end===void 0?Qe:Math.min(F.end,tt);!oe.extend&&Qe>zt&&(S=zt,zt=Qe,Qe=S);var Q=Sp(A,Qe),k=Sp(A,zt);if(Q&&k&&(oe.rangeCount!==1||oe.anchorNode!==Q.node||oe.anchorOffset!==Q.offset||oe.focusNode!==k.node||oe.focusOffset!==k.offset)){var $=Me.createRange();$.setStart(Q.node,Q.offset),oe.removeAllRanges(),Qe>zt?(oe.addRange($),oe.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),oe.addRange($))}}}}for(Me=[],oe=A;oe=oe.parentNode;)oe.nodeType===1&&Me.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Me.length;A++){var xe=Me[A];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}ac=!!Wf,qf=Wf=null}finally{Ct=u,K.p=o,z.T=a}}t.current=n,xn=2}}function zg(){if(xn===2){xn=0;var t=Aa,n=ts,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var u=Ct;Ct|=4;try{dg(t,n.alternate,n)}finally{Ct=u,K.p=o,z.T=a}}xn=3}}function Ig(){if(xn===4||xn===3){xn=0,ut();var t=Aa,n=ts,a=ns,o=Eg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,ts=Aa=null,Bg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ta=null),$t(a),n=n.stateNode,Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(_e,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=K.p,K.p=2,z.T=null;try{for(var d=t.onRecoverableError,S=0;S<o.length;S++){var A=o[S];d(A.value,{componentStack:A.stack})}}finally{z.T=n,K.p=u}}(ns&3)!==0&&Wl(),Ci(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Uf?Eo++:(Eo=0,Uf=t):Eo=0,To(0)}}function Bg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,io(n)))}function Wl(t){return Pg(),zg(),Ig(),Fg()}function Fg(){if(xn!==5)return!1;var t=Aa,n=Df;Df=0;var a=$t(ns),o=z.T,u=K.p;try{K.p=32>a?32:a,z.T=null,a=Nf,Nf=null;var d=Aa,S=ns;if(xn=0,ts=Aa=null,ns=0,(Ct&6)!==0)throw Error(s(331));var A=Ct;if(Ct|=4,bg(d.current),xg(d,d.current,S,a),Ct=A,To(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(_e,d)}catch{}return!0}finally{K.p=u,z.T=o,Bg(t,n)}}function Hg(t,n,a){n=ai(a,n),n=uf(t.stateNode,n,2),t=ga(t,n,2),t!==null&&(be(t,2),Ci(t))}function Ft(t,n,a){if(t.tag===3)Hg(t,t,a);else for(;n!==null;){if(n.tag===3){Hg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ta===null||!Ta.has(o))){t=ai(a,t),a=jm(2),o=ga(n,a,2),o!==null&&(Xm(a,o,n,t),be(o,2),Ci(o));break}}n=n.return}}function zf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new gy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Af=!0,u.add(a),t=Sy.bind(null,t,n,a),n.then(t,t))}function Sy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Gt===t&&(xt&a)===a&&(Zt===4||Zt===3&&(xt&62914560)===xt&&300>it()-Cf?(Ct&2)===0&&is(t,0):wf|=a,es===xt&&(es=0)),Ci(t)}function Gg(t,n){n===0&&(n=Ne()),t=Fr(t,n),t!==null&&(be(t,n),Ci(t))}function by(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Gg(t,a)}function My(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Gg(t,a)}function Ey(t,n){return Nt(t,n)}var ql=null,rs=null,If=!1,Yl=!1,Bf=!1,mr=0;function Ci(t){t!==rs&&t.next===null&&(rs===null?ql=rs=t:rs=rs.next=t),Yl=!0,If||(If=!0,Ay())}function To(t,n){if(!Bf&&Yl){Bf=!0;do for(var a=!1,o=ql;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-De(42|t)+1)-1,d&=u&~(S&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Xg(o,d))}else d=xt,d=ft(o,o===Gt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||nt(o,d)||(a=!0,Xg(o,d));o=o.next}while(a);Bf=!1}}function Ty(){Vg()}function Vg(){Yl=If=!1;var t=0;mr!==0&&(Oy()&&(t=mr),mr=0);for(var n=it(),a=null,o=ql;o!==null;){var u=o.next,d=kg(o,n);d===0?(o.next=null,a===null?ql=u:a.next=u,u===null&&(rs=a)):(a=o,(t!==0||(d&3)!==0)&&(Yl=!0)),o=u}To(t)}function kg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-De(d),A=1<<S,F=u[S];F===-1?((A&a)===0||(A&o)!==0)&&(u[S]=Lt(A,n)):F<=n&&(t.expiredLanes|=A),d&=~A}if(n=Gt,a=xt,a=ft(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&q(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||nt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&q(o),$t(a)){case 2:case 8:a=qe;break;case 32:a=P;break;case 268435456:a=te;break;default:a=P}return o=jg.bind(null,t),a=Nt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&q(o),t.callbackPriority=2,t.callbackNode=null,2}function jg(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Wl()&&t.callbackNode!==a)return null;var o=xt;return o=ft(t,t===Gt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Ag(t,o,n),kg(t,it()),t.callbackNode!=null&&t.callbackNode===a?jg.bind(null,t):null)}function Xg(t,n){if(Wl())return null;Ag(t,n,!0)}function Ay(){zy(function(){(Ct&6)!==0?Nt(Ut,Ty):Vg()})}function Ff(){return mr===0&&(mr=W()),mr}function Wg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:rl(""+t)}function qg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function wy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Wg((u[vn]||null).action),S=o.submitter;S&&(n=(n=S[vn]||null)?Wg(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var A=new cl("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(mr!==0){var F=S?qg(u,S):new FormData(u);rf(a,{pending:!0,data:F,method:u.method,action:d},null,F)}}else typeof d=="function"&&(A.preventDefault(),F=S?qg(u,S):new FormData(u),rf(a,{pending:!0,data:F,method:u.method,action:d},d,F))},currentTarget:u}]})}}for(var Hf=0;Hf<Mu.length;Hf++){var Gf=Mu[Hf],Ry=Gf.toLowerCase(),Cy=Gf[0].toUpperCase()+Gf.slice(1);di(Ry,"on"+Cy)}di(Ap,"onAnimationEnd"),di(wp,"onAnimationIteration"),di(Rp,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(Wx,"onTransitionRun"),di(qx,"onTransitionStart"),di(Yx,"onTransitionCancel"),di(Cp,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),re("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),re("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),re("onBeforeInput",["compositionend","keypress","textInput","paste"]),re("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),re("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),re("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function Yg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],F=A.instance,ee=A.currentTarget;if(A=A.listener,F!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=ee;try{d(u)}catch(ge){Pl(ge)}u.currentTarget=null,d=F}else for(S=0;S<o.length;S++){if(A=o[S],F=A.instance,ee=A.currentTarget,A=A.listener,F!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=ee;try{d(u)}catch(ge){Pl(ge)}u.currentTarget=null,d=F}}}}function mt(t,n){var a=n[Qa];a===void 0&&(a=n[Qa]=new Set);var o=t+"__bubble";a.has(o)||(Zg(n,t,2,!1),a.add(o))}function Vf(t,n,a){var o=0;n&&(o|=4),Zg(a,t,o,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function kf(t){if(!t[Zl]){t[Zl]=!0,C.forEach(function(a){a!=="selectionchange"&&(Dy.has(a)||Vf(a,!1,t),Vf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,Vf("selectionchange",!1,n))}}function Zg(t,n,a,o){switch(x0(n)){case 2:var u=iS;break;case 8:u=aS;break;default:u=ih}a=u.bind(null,n,a,t),u=void 0,!uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function jf(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var F=S.tag;if((F===3||F===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=Oi(A),S===null)return;if(F=S.tag,F===5||F===6||F===26||F===27){o=d=S;continue e}A=A.parentNode}}o=o.return}np(function(){var ee=d,ge=lu(a),Me=[];e:{var ne=Dp.get(t);if(ne!==void 0){var oe=cl,tt=t;switch(t){case"keypress":if(ol(a)===0)break e;case"keydown":case"keyup":oe=Ex;break;case"focusin":tt="focus",oe=pu;break;case"focusout":tt="blur",oe=pu;break;case"beforeblur":case"afterblur":oe=pu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=wx;break;case Ap:case wp:case Rp:oe=mx;break;case Cp:oe=Cx;break;case"scroll":case"scrollend":oe=ux;break;case"wheel":oe=Nx;break;case"copy":case"cut":case"paste":oe=vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=op;break;case"toggle":case"beforetoggle":oe=Lx}var Qe=(n&4)!==0,zt=!Qe&&(t==="scroll"||t==="scrollend"),Q=Qe?ne!==null?ne+"Capture":null:ne;Qe=[];for(var k=ee,$;k!==null;){var xe=k;if($=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||$===null||Q===null||(xe=js(k,Q),xe!=null&&Qe.push(wo(k,xe,$))),zt)break;k=k.return}0<Qe.length&&(ne=new oe(ne,tt,null,a,ge),Me.push({event:ne,listeners:Qe}))}}if((n&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",oe=t==="mouseout"||t==="pointerout",ne&&a!==ou&&(tt=a.relatedTarget||a.fromElement)&&(Oi(tt)||tt[zn]))break e;if((oe||ne)&&(ne=ge.window===ge?ge:(ne=ge.ownerDocument)?ne.defaultView||ne.parentWindow:window,oe?(tt=a.relatedTarget||a.toElement,oe=ee,tt=tt?Oi(tt):null,tt!==null&&(zt=c(tt),Qe=tt.tag,tt!==zt||Qe!==5&&Qe!==27&&Qe!==6)&&(tt=null)):(oe=null,tt=ee),oe!==tt)){if(Qe=rp,xe="onMouseLeave",Q="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Qe=op,xe="onPointerLeave",Q="onPointerEnter",k="pointer"),zt=oe==null?ne:$a(oe),$=tt==null?ne:$a(tt),ne=new Qe(xe,k+"leave",oe,a,ge),ne.target=zt,ne.relatedTarget=$,xe=null,Oi(ge)===ee&&(Qe=new Qe(Q,k+"enter",tt,a,ge),Qe.target=$,Qe.relatedTarget=zt,xe=Qe),zt=xe,oe&&tt)t:{for(Qe=oe,Q=tt,k=0,$=Qe;$;$=ss($))k++;for($=0,xe=Q;xe;xe=ss(xe))$++;for(;0<k-$;)Qe=ss(Qe),k--;for(;0<$-k;)Q=ss(Q),$--;for(;k--;){if(Qe===Q||Q!==null&&Qe===Q.alternate)break t;Qe=ss(Qe),Q=ss(Q)}Qe=null}else Qe=null;oe!==null&&Kg(Me,ne,oe,Qe,!1),tt!==null&&zt!==null&&Kg(Me,zt,tt,Qe,!0)}}e:{if(ne=ee?$a(ee):window,oe=ne.nodeName&&ne.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ne.type==="file")var He=mp;else if(dp(ne))if(gp)He=kx;else{He=Gx;var dt=Hx}else oe=ne.nodeName,!oe||oe.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?ee&&su(ee.elementType)&&(He=mp):He=Vx;if(He&&(He=He(t,ee))){pp(Me,He,a,ge);break e}dt&&dt(t,ne,ee),t==="focusout"&&ee&&ne.type==="number"&&ee.memoizedProps.value!=null&&ii(ne,"number",ne.value)}switch(dt=ee?$a(ee):window,t){case"focusin":(dp(dt)||dt.contentEditable==="true")&&(zr=dt,yu=ee,Js=null);break;case"focusout":Js=yu=zr=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Ep(Me,a,ge);break;case"selectionchange":if(Xx)break;case"keydown":case"keyup":Ep(Me,a,ge)}var Xe;if(gu)e:{switch(t){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else Pr?fp(t,a)&&($e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&($e="onCompositionStart");$e&&(lp&&a.locale!=="ko"&&(Pr||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&Pr&&(Xe=ip()):(ha=ge,fu="value"in ha?ha.value:ha.textContent,Pr=!0)),dt=Kl(ee,$e),0<dt.length&&($e=new sp($e,t,null,a,ge),Me.push({event:$e,listeners:dt}),Xe?$e.data=Xe:(Xe=hp(a),Xe!==null&&($e.data=Xe)))),(Xe=Px?zx(t,a):Ix(t,a))&&($e=Kl(ee,"onBeforeInput"),0<$e.length&&(dt=new sp("onBeforeInput","beforeinput",null,a,ge),Me.push({event:dt,listeners:$e}),dt.data=Xe)),wy(Me,t,ee,a,ge)}Yg(Me,n)})}function wo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Kl(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=js(t,a),u!=null&&o.unshift(wo(t,u,d)),u=js(t,n),u!=null&&o.push(wo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Kg(t,n,a,o,u){for(var d=n._reactName,S=[];a!==null&&a!==o;){var A=a,F=A.alternate,ee=A.stateNode;if(A=A.tag,F!==null&&F===o)break;A!==5&&A!==26&&A!==27||ee===null||(F=ee,u?(ee=js(a,d),ee!=null&&S.unshift(wo(a,ee,F))):u||(ee=js(a,d),ee!=null&&S.push(wo(a,ee,F)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var Ny=/\r\n?/g,Uy=/\u0000|\uFFFD/g;function Qg(t){return(typeof t=="string"?t:""+t).replace(Ny,`
`).replace(Uy,"")}function Jg(t,n){return n=Qg(n),Qg(t)===n}function Ql(){}function Pt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ur(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ur(t,""+o);break;case"className":et(t,"class",o);break;case"tabIndex":et(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":et(t,a,o);break;case"style":ep(t,o,d);break;case"data":if(n!=="object"){et(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=rl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Pt(t,n,"name",u.name,u,null),Pt(t,n,"formEncType",u.formEncType,u,null),Pt(t,n,"formMethod",u.formMethod,u,null),Pt(t,n,"formTarget",u.formTarget,u,null)):(Pt(t,n,"encType",u.encType,u,null),Pt(t,n,"method",u.method,u,null),Pt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=rl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ql);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=rl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Ge(t,"popover",o);break;case"xlinkActuate":Ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ge(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=lx.get(a)||a,Ge(t,a,o))}}function Xf(t,n,a,o,u,d){switch(a){case"style":ep(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Ur(t,o):(typeof o=="number"||typeof o=="bigint")&&Ur(t,""+o);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ql);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Y.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[vn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ge(t,a,o)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pt(t,n,d,S,a,null)}}u&&Pt(t,n,"srcSet",a.srcSet,a,null),o&&Pt(t,n,"src",a.src,a,null);return;case"input":mt("invalid",t);var A=d=S=u=null,F=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var ge=a[o];if(ge!=null)switch(o){case"name":u=ge;break;case"type":S=ge;break;case"checked":F=ge;break;case"defaultChecked":ee=ge;break;case"value":d=ge;break;case"defaultValue":A=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:Pt(t,n,o,ge,a,null)}}Rn(t,d,A,F,ee,S,u,!1),hi(t);return;case"select":mt("invalid",t),o=S=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Pt(t,n,u,A,a,null)}n=d,a=S,t.multiple=!!o,n!=null?Cn(t,!!o,n,!1):a!=null&&Cn(t,!!o,a,!0);return;case"textarea":mt("invalid",t),d=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Pt(t,n,S,A,a,null)}Jd(t,o,u,d),hi(t);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Pt(t,n,F,o,a,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(o=0;o<Ao.length;o++)mt(Ao[o],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pt(t,n,ee,o,a,null)}return;default:if(su(n)){for(ge in a)a.hasOwnProperty(ge)&&(o=a[ge],o!==void 0&&Xf(t,n,ge,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Pt(t,n,A,o,a,null))}function Ly(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,A=null,F=null,ee=null,ge=null;for(oe in a){var Me=a[oe];if(a.hasOwnProperty(oe)&&Me!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":F=Me;default:o.hasOwnProperty(oe)||Pt(t,n,oe,null,o,Me)}}for(var ne in o){var oe=o[ne];if(Me=a[ne],o.hasOwnProperty(ne)&&(oe!=null||Me!=null))switch(ne){case"type":d=oe;break;case"name":u=oe;break;case"checked":ee=oe;break;case"defaultChecked":ge=oe;break;case"value":S=oe;break;case"defaultValue":A=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:oe!==Me&&Pt(t,n,ne,oe,o,Me)}}zi(t,S,A,F,ee,ge,d,u);return;case"select":oe=S=A=ne=null;for(d in a)if(F=a[d],a.hasOwnProperty(d)&&F!=null)switch(d){case"value":break;case"multiple":oe=F;default:o.hasOwnProperty(d)||Pt(t,n,d,null,o,F)}for(u in o)if(d=o[u],F=a[u],o.hasOwnProperty(u)&&(d!=null||F!=null))switch(u){case"value":ne=d;break;case"defaultValue":A=d;break;case"multiple":S=d;default:d!==F&&Pt(t,n,u,d,o,F)}n=A,a=S,o=oe,ne!=null?Cn(t,!!a,ne,!1):!!o!=!!a&&(n!=null?Cn(t,!!a,n,!0):Cn(t,!!a,a?[]:"",!1));return;case"textarea":oe=ne=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Pt(t,n,A,null,o,u)}for(S in o)if(u=o[S],d=a[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":ne=u;break;case"defaultValue":oe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Pt(t,n,S,u,o,d)}ks(t,ne,oe);return;case"option":for(var tt in a)if(ne=a[tt],a.hasOwnProperty(tt)&&ne!=null&&!o.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:Pt(t,n,tt,null,o,ne)}for(F in o)if(ne=o[F],oe=a[F],o.hasOwnProperty(F)&&ne!==oe&&(ne!=null||oe!=null))switch(F){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Pt(t,n,F,ne,o,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)ne=a[Qe],a.hasOwnProperty(Qe)&&ne!=null&&!o.hasOwnProperty(Qe)&&Pt(t,n,Qe,null,o,ne);for(ee in o)if(ne=o[ee],oe=a[ee],o.hasOwnProperty(ee)&&ne!==oe&&(ne!=null||oe!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,n));break;default:Pt(t,n,ee,ne,o,oe)}return;default:if(su(n)){for(var zt in a)ne=a[zt],a.hasOwnProperty(zt)&&ne!==void 0&&!o.hasOwnProperty(zt)&&Xf(t,n,zt,void 0,o,ne);for(ge in o)ne=o[ge],oe=a[ge],!o.hasOwnProperty(ge)||ne===oe||ne===void 0&&oe===void 0||Xf(t,n,ge,ne,o,oe);return}}for(var Q in a)ne=a[Q],a.hasOwnProperty(Q)&&ne!=null&&!o.hasOwnProperty(Q)&&Pt(t,n,Q,null,o,ne);for(Me in o)ne=o[Me],oe=a[Me],!o.hasOwnProperty(Me)||ne===oe||ne==null&&oe==null||Pt(t,n,Me,ne,o,oe)}var Wf=null,qf=null;function Jl(t){return t.nodeType===9?t:t.ownerDocument}function $g(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function e0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Yf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function Oy(){var t=window.event;return t&&t.type==="popstate"?t===Zf?!1:(Zf=t,!0):(Zf=null,!1)}var t0=typeof setTimeout=="function"?setTimeout:void 0,Py=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,zy=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(t){return n0.resolve(null).then(t).catch(Iy)}:t0;function Iy(t){setTimeout(function(){throw t})}function Ra(t){return t==="head"}function i0(t,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var S=t.ownerDocument;if(a&1&&Ro(S.documentElement),a&2&&Ro(S.body),a&4)for(a=S.head,Ro(a),S=a.firstChild;S;){var A=S.nextSibling,F=S.nodeName;S[ca]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=A}}if(u===0){t.removeChild(d),zo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);zo(n)}function Kf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),ua(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function By(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ca])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function Fy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=mi(t.nextSibling),t===null))return null;return t}function Qf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Hy(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Jf=null;function a0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function r0(t,n,a){switch(n=Jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ua(t)}var ui=new Map,s0=new Set;function $l(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ki=K.d;K.d={f:Gy,r:Vy,D:ky,C:jy,L:Xy,m:Wy,X:Yy,S:qy,M:Zy};function Gy(){var t=Ki.f(),n=jl();return t||n}function Vy(t){var n=Pi(t);n!==null&&n.tag===5&&n.type==="form"?Am(n):Ki.r(t)}var os=typeof document>"u"?null:document;function o0(t,n,a){var o=os;if(o&&typeof n=="string"&&n){var u=kt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),s0.has(u)||(s0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),yn(n,"link",t),en(n),o.head.appendChild(n)))}}function ky(t){Ki.D(t),o0("dns-prefetch",t,null)}function jy(t,n){Ki.C(t,n),o0("preconnect",t,n)}function Xy(t,n,a){Ki.L(t,n,a);var o=os;if(o&&t&&n){var u='link[rel="preload"][as="'+kt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+kt(a.imageSizes)+'"]')):u+='[href="'+kt(t)+'"]';var d=u;switch(n){case"style":d=ls(t);break;case"script":d=cs(t)}ui.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Co(d))||n==="script"&&o.querySelector(Do(d))||(n=o.createElement("link"),yn(n,"link",t),en(n),o.head.appendChild(n)))}}function Wy(t,n){Ki.m(t,n);var a=os;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+kt(o)+'"][href="'+kt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=cs(t)}if(!ui.has(d)&&(t=g({rel:"modulepreload",href:t},n),ui.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(d)))return}o=a.createElement("link"),yn(o,"link",t),en(o),a.head.appendChild(o)}}}function qy(t,n,a){Ki.S(t,n,a);var o=os;if(o&&t){var u=fa(o).hoistableStyles,d=ls(t);n=n||"default";var S=u.get(d);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Co(d)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(d))&&$f(t,a);var F=S=o.createElement("link");en(F),yn(F,"link",t),F._p=new Promise(function(ee,ge){F.onload=ee,F.onerror=ge}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ec(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(d,S)}}}function Yy(t,n){Ki.X(t,n);var a=os;if(a&&t){var o=fa(a).hoistableScripts,u=cs(t),d=o.get(u);d||(d=a.querySelector(Do(u)),d||(t=g({src:t,async:!0},n),(n=ui.get(u))&&eh(t,n),d=a.createElement("script"),en(d),yn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Zy(t,n){Ki.M(t,n);var a=os;if(a&&t){var o=fa(a).hoistableScripts,u=cs(t),d=o.get(u);d||(d=a.querySelector(Do(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=ui.get(u))&&eh(t,n),d=a.createElement("script"),en(d),yn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function l0(t,n,a,o){var u=(u=de.current)?$l(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ls(a.href),a=fa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ls(a.href);var d=fa(u).hoistableStyles,S=d.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=u.querySelector(Co(t)))&&!d._p&&(S.instance=d,S.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),d||Ky(u,t,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cs(a),a=fa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ls(t){return'href="'+kt(t)+'"'}function Co(t){return'link[rel="stylesheet"]['+t+"]"}function c0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ky(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),yn(n,"link",a),en(n),t.head.appendChild(n))}function cs(t){return'[src="'+kt(t)+'"]'}function Do(t){return"script[async]"+t}function u0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+kt(a.href)+'"]');if(o)return n.instance=o,en(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),en(o),yn(o,"style",u),ec(o,a.precedence,t),n.instance=o;case"stylesheet":u=ls(a.href);var d=t.querySelector(Co(u));if(d)return n.state.loading|=4,n.instance=d,en(d),d;o=c0(a),(u=ui.get(u))&&$f(o,u),d=(t.ownerDocument||t).createElement("link"),en(d);var S=d;return S._p=new Promise(function(A,F){S.onload=A,S.onerror=F}),yn(d,"link",o),n.state.loading|=4,ec(d,a.precedence,t),n.instance=d;case"script":return d=cs(a.src),(u=t.querySelector(Do(d)))?(n.instance=u,en(u),u):(o=a,(u=ui.get(d))&&(o=g({},a),eh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),en(u),yn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ec(o,a.precedence,t));return n.instance}function ec(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function $f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function eh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tc=null;function f0(t,n,a){if(tc===null){var o=new Map,u=tc=new Map;u.set(a,o)}else u=tc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[ca]||d[rn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=t+S;var A=o.get(S);A?A.push(d):o.set(S,[d])}}return o}function h0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Qy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function d0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var No=null;function Jy(){}function $y(t,n,a){if(No===null)throw Error(s(475));var o=No;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ls(a.href),d=t.querySelector(Co(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=nc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=d,en(d);return}d=t.ownerDocument||t,a=c0(a),(u=ui.get(u))&&$f(a,u),d=d.createElement("link"),en(d);var S=d;S._p=new Promise(function(A,F){S.onload=A,S.onerror=F}),yn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=nc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function eS(){if(No===null)throw Error(s(475));var t=No;return t.stylesheets&&t.count===0&&th(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&th(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function nc(){if(this.count--,this.count===0){if(this.stylesheets)th(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ic=null;function th(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ic=new Map,n.forEach(tS,t),ic=null,nc.call(t))}function tS(t,n){if(!(n.state.loading&4)){var a=ic.get(t);if(a)var o=a.get(null);else{a=new Map,ic.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,u),a.set(S,u),this.count++,o=nc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Uo={$$typeof:U,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function nS(t,n,a,o,u,d,S,A){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pe(0),this.hiddenUpdates=pe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function p0(t,n,a,o,u,d,S,A,F,ee,ge,Me){return t=new nS(t,n,a,S,A,F,ee,Me),n=1,d===!0&&(n|=24),d=Xn(3,null,null,n),t.current=d,d.stateNode=t,n=Pu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Fu(d),t}function m0(t){return t?(t=Hr,t):Hr}function g0(t,n,a,o,u,d){u=m0(u),o.context===null?o.context=u:o.pendingContext=u,o=ma(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ga(t,o,n),a!==null&&(Kn(a,t,n),oo(a,t,n))}function v0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function nh(t,n){v0(t,n),(t=t.alternate)&&v0(t,n)}function _0(t){if(t.tag===13){var n=Fr(t,67108864);n!==null&&Kn(n,t,67108864),nh(t,67108864)}}var ac=!0;function iS(t,n,a,o){var u=z.T;z.T=null;var d=K.p;try{K.p=2,ih(t,n,a,o)}finally{K.p=d,z.T=u}}function aS(t,n,a,o){var u=z.T;z.T=null;var d=K.p;try{K.p=8,ih(t,n,a,o)}finally{K.p=d,z.T=u}}function ih(t,n,a,o){if(ac){var u=ah(o);if(u===null)jf(t,n,o,rc,a),y0(t,o);else if(sS(u,t,n,a,o))o.stopPropagation();else if(y0(t,o),n&4&&-1<rS.indexOf(t)){for(;u!==null;){var d=Pi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Pe(d.pendingLanes);if(S!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var F=1<<31-De(S);A.entanglements[1]|=F,S&=~F}Ci(d),(Ct&6)===0&&(Vl=it()+500,To(0))}}break;case 13:A=Fr(d,2),A!==null&&Kn(A,d,2),jl(),nh(d,2)}if(d=ah(o),d===null&&jf(t,n,o,rc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else jf(t,n,o,null,a)}}function ah(t){return t=lu(t),rh(t)}var rc=null;function rh(t){if(rc=null,t=Oi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return rc=t,null}function x0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ze()){case Ut:return 2;case qe:return 8;case P:case w:return 32;case te:return 268435456;default:return 32}default:return 32}}var sh=!1,Ca=null,Da=null,Na=null,Lo=new Map,Oo=new Map,Ua=[],rS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function y0(t,n){switch(t){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Pi(n),n!==null&&_0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function sS(t,n,a,o,u){switch(n){case"focusin":return Ca=Po(Ca,t,n,a,o,u),!0;case"dragenter":return Da=Po(Da,t,n,a,o,u),!0;case"mouseover":return Na=Po(Na,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Lo.set(d,Po(Lo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Oo.set(d,Po(Oo.get(d)||null,t,n,a,o,u)),!0}return!1}function S0(t){var n=Oi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Vn(t.priority,function(){if(a.tag===13){var o=Zn();o=Ht(o);var u=Fr(a,o);u!==null&&Kn(u,a,o),nh(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ah(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);ou=o,a.target.dispatchEvent(o),ou=null}else return n=Pi(a),n!==null&&_0(n),t.blockedOn=a,!1;n.shift()}return!0}function b0(t,n,a){sc(t)&&a.delete(n)}function oS(){sh=!1,Ca!==null&&sc(Ca)&&(Ca=null),Da!==null&&sc(Da)&&(Da=null),Na!==null&&sc(Na)&&(Na=null),Lo.forEach(b0),Oo.forEach(b0)}function oc(t,n){t.blockedOn===n&&(t.blockedOn=null,sh||(sh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,oS)))}var lc=null;function M0(t){lc!==t&&(lc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){lc===t&&(lc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(rh(o||a)===null)continue;break}var d=Pi(a);d!==null&&(t.splice(n,3),n-=3,rf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function zo(t){function n(F){return oc(F,t)}Ca!==null&&oc(Ca,t),Da!==null&&oc(Da,t),Na!==null&&oc(Na,t),Lo.forEach(n),Oo.forEach(n);for(var a=0;a<Ua.length;a++){var o=Ua[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)S0(a),a.blockedOn===null&&Ua.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],S=u[vn]||null;if(typeof d=="function")S||M0(a);else if(S){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[vn]||null)A=S.formAction;else if(rh(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),M0(a)}}}function oh(t){this._internalRoot=t}cc.prototype.render=oh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Zn();g0(a,o,t,n,null,null)},cc.prototype.unmount=oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;g0(t.current,2,null,t,null,null),jl(),n[zn]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Mt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,t),a===0&&S0(t)}};var E0=e.version;if(E0!=="19.1.0")throw Error(s(527,E0,"19.1.0"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var lS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{_e=uc.inject(lS),Ie=uc}catch{}}return Bo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Hm,d=Gm,S=Vm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=p0(t,1,!1,null,null,a,o,u,d,S,A,null),t[zn]=n.current,kf(t),new oh(n)},Bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=Hm,S=Gm,A=Vm,F=null,ee=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(F=a.unstable_transitionCallbacks),a.formState!==void 0&&(ee=a.formState)),n=p0(t,1,!0,n,a??null,o,u,d,S,A,F,ee),n.context=m0(null),a=n.current,o=Zn(),o=Ht(o),u=ma(o),u.callback=null,ga(a,u,o),a=o,n.current.lanes=a,be(n,a),Ci(n),t[zn]=n.current,kf(t),new cc(n)},Bo.version="19.1.0",Bo}var O0;function yS(){if(O0)return uh.exports;O0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),uh.exports=xS(),uh.exports}var SS=yS();i_();/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Zo.apply(this,arguments)}var Va;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Va||(Va={}));const P0="popstate";function bS(r){r===void 0&&(r={});function e(l,c){let{pathname:f="/",search:h="",hash:p=""}=Nr(l.location.hash.substr(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Xh("",{pathname:f,search:h,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let p=l.location.href,m=p.indexOf("#");h=m===-1?p:p.slice(0,m)}return h+"#"+(typeof c=="string"?c:kc(c))}function s(l,c){zd(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(c)+")")}return ES(e,i,s,r)}function Xt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function zd(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function MS(){return Math.random().toString(36).substr(2,8)}function z0(r,e){return{usr:r.state,key:r.key,idx:e}}function Xh(r,e,i,s){return i===void 0&&(i=null),Zo({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Nr(e):e,{state:i,key:e&&e.key||s||MS()})}function kc(r){let{pathname:e="/",search:i="",hash:s=""}=r;return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Nr(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substr(i),r=r.substr(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function ES(r,e,i,s){s===void 0&&(s={});let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,h=Va.Pop,p=null,m=g();m==null&&(m=0,f.replaceState(Zo({},f.state,{idx:m}),""));function g(){return(f.state||{idx:null}).idx}function v(){h=Va.Pop;let y=g(),_=y==null?null:y-m;m=y,p&&p({action:h,location:T.location,delta:_})}function x(y,_){h=Va.Push;let O=Xh(T.location,y,_);i&&i(O,y),m=g()+1;let U=z0(O,m),N=T.createHref(O);try{f.pushState(U,"",N)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;l.location.assign(N)}c&&p&&p({action:h,location:T.location,delta:1})}function b(y,_){h=Va.Replace;let O=Xh(T.location,y,_);i&&i(O,y),m=g();let U=z0(O,m),N=T.createHref(O);f.replaceState(U,"",N),c&&p&&p({action:h,location:T.location,delta:0})}function M(y){let _=l.location.origin!=="null"?l.location.origin:l.location.href,O=typeof y=="string"?y:kc(y);return O=O.replace(/ $/,"%20"),Xt(_,"No window.location.(origin|href) available to create URL for href: "+O),new URL(O,_)}let T={get action(){return h},get location(){return r(l,f)},listen(y){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(P0,v),p=y,()=>{l.removeEventListener(P0,v),p=null}},createHref(y){return e(l,y)},createURL:M,encodeLocation(y){let _=M(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:b,go(y){return f.go(y)}};return T}var I0;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(I0||(I0={}));function TS(r,e,i){return i===void 0&&(i="/"),AS(r,e,i)}function AS(r,e,i,s){let l=typeof e=="string"?Nr(e):e,c=Cs(l.pathname||"/",i);if(c==null)return null;let f=a_(r);wS(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let m=BS(c);h=zS(f[p],m)}return h}function a_(r,e,i,s){e===void 0&&(e=[]),i===void 0&&(i=[]),s===void 0&&(s="");let l=(c,f,h)=>{let p={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};p.relativePath.startsWith("/")&&(Xt(p.relativePath.startsWith(s),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(s.length));let m=ja([s,p.relativePath]),g=i.concat(p);c.children&&c.children.length>0&&(Xt(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),a_(c.children,e,g,m)),!(c.path==null&&!c.index)&&e.push({path:m,score:OS(m,c.index),routesMeta:g})};return r.forEach((c,f)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))l(c,f);else for(let p of r_(c.path))l(c,f,p)}),e}function r_(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=r_(s.join("/")),h=[];return h.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&h.push(...f),h.map(p=>r.startsWith("/")&&p===""?"/":p)}function wS(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:PS(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}const RS=/^:[\w-]+$/,CS=3,DS=2,NS=1,US=10,LS=-2,B0=r=>r==="*";function OS(r,e){let i=r.split("/"),s=i.length;return i.some(B0)&&(s+=LS),e&&(s+=DS),i.filter(l=>!B0(l)).reduce((l,c)=>l+(RS.test(c)?CS:c===""?NS:US),s)}function PS(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function zS(r,e,i){let{routesMeta:s}=r,l={},c="/",f=[];for(let h=0;h<s.length;++h){let p=s[h],m=h===s.length-1,g=c==="/"?e:e.slice(c.length)||"/",v=Wh({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),x=p.route;if(!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:ja([c,v.pathname]),pathnameBase:VS(ja([c,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(c=ja([c,v.pathnameBase]))}return f}function Wh(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=IS(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((m,g,v)=>{let{paramName:x,isOptional:b}=g;if(x==="*"){let T=h[v]||"";f=c.slice(0,c.length-T.length).replace(/(.)\/+$/,"$1")}const M=h[v];return b&&!M?m[x]=void 0:m[x]=(M||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:r}}function IS(r,e,i){e===void 0&&(e=!1),i===void 0&&(i=!0),zd(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p)=>(s.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function BS(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zd(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function Cs(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function FS(r,e){e===void 0&&(e="/");let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Nr(r):r;return{pathname:i?i.startsWith("/")?i:HS(i,e):e,search:kS(s),hash:jS(l)}}function HS(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ph(r,e,i,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function GS(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Id(r,e){let i=GS(r);return e?i.map((s,l)=>l===i.length-1?s.pathname:s.pathnameBase):i.map(s=>s.pathnameBase)}function Bd(r,e,i,s){s===void 0&&(s=!1);let l;typeof r=="string"?l=Nr(r):(l=Zo({},r),Xt(!l.pathname||!l.pathname.includes("?"),ph("?","pathname","search",l)),Xt(!l.pathname||!l.pathname.includes("#"),ph("#","pathname","hash",l)),Xt(!l.search||!l.search.includes("#"),ph("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let v=e.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),v-=1;l.pathname=x.join("/")}h=v>=0?e[v]:"/"}let p=FS(l,h),m=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}const ja=r=>r.join("/").replace(/\/\/+/g,"/"),VS=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),kS=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,jS=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function XS(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const s_=["post","put","patch","delete"];new Set(s_);const WS=["get",...s_];new Set(WS);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Ko.apply(this,arguments)}const Qc=he.createContext(null),o_=he.createContext(null),la=he.createContext(null),Jc=he.createContext(null),Li=he.createContext({outlet:null,matches:[],isDataRoute:!1}),l_=he.createContext(null);function qS(r,e){let{relative:i}=e===void 0?{}:e;Is()||Xt(!1);let{basename:s,navigator:l}=he.useContext(la),{hash:c,pathname:f,search:h}=eu(r,{relative:i}),p=f;return s!=="/"&&(p=f==="/"?s:ja([s,f])),l.createHref({pathname:p,search:h,hash:c})}function Is(){return he.useContext(Jc)!=null}function Ka(){return Is()||Xt(!1),he.useContext(Jc).location}function c_(r){he.useContext(la).static||he.useLayoutEffect(r)}function $c(){let{isDataRoute:r}=he.useContext(Li);return r?c1():YS()}function YS(){Is()||Xt(!1);let r=he.useContext(Qc),{basename:e,future:i,navigator:s}=he.useContext(la),{matches:l}=he.useContext(Li),{pathname:c}=Ka(),f=JSON.stringify(Id(l,i.v7_relativeSplatPath)),h=he.useRef(!1);return c_(()=>{h.current=!0}),he.useCallback(function(m,g){if(g===void 0&&(g={}),!h.current)return;if(typeof m=="number"){s.go(m);return}let v=Bd(m,JSON.parse(f),c,g.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:ja([e,v.pathname])),(g.replace?s.replace:s.push)(v,g.state,g)},[e,s,f,c,r])}const ZS=he.createContext(null);function KS(r){let e=he.useContext(Li).outlet;return e&&he.createElement(ZS.Provider,{value:r},e)}function QS(){let{matches:r}=he.useContext(Li),e=r[r.length-1];return e?e.params:{}}function eu(r,e){let{relative:i}=e===void 0?{}:e,{future:s}=he.useContext(la),{matches:l}=he.useContext(Li),{pathname:c}=Ka(),f=JSON.stringify(Id(l,s.v7_relativeSplatPath));return he.useMemo(()=>Bd(r,JSON.parse(f),c,i==="path"),[r,f,c,i])}function JS(r,e){return $S(r,e)}function $S(r,e,i,s){Is()||Xt(!1);let{navigator:l}=he.useContext(la),{matches:c}=he.useContext(Li),f=c[c.length-1],h=f?f.params:{};f&&f.pathname;let p=f?f.pathnameBase:"/";f&&f.route;let m=Ka(),g;if(e){var v;let y=typeof e=="string"?Nr(e):e;p==="/"||(v=y.pathname)!=null&&v.startsWith(p)||Xt(!1),g=y}else g=m;let x=g.pathname||"/",b=x;if(p!=="/"){let y=p.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(y.length).join("/")}let M=TS(r,{pathname:b}),T=a1(M&&M.map(y=>Object.assign({},y,{params:Object.assign({},h,y.params),pathname:ja([p,l.encodeLocation?l.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?p:ja([p,l.encodeLocation?l.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),c,i,s);return e&&T?he.createElement(Jc.Provider,{value:{location:Ko({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Va.Pop}},T):T}function e1(){let r=l1(),e=XS(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),i?he.createElement("pre",{style:l},i):null,null)}const t1=he.createElement(e1,null);class n1 extends he.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){console.error("React Router caught the following error during render",e,i)}render(){return this.state.error!==void 0?he.createElement(Li.Provider,{value:this.props.routeContext},he.createElement(l_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function i1(r){let{routeContext:e,match:i,children:s}=r,l=he.useContext(Qc);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),he.createElement(Li.Provider,{value:e},s)}function a1(r,e,i,s){var l;if(e===void 0&&(e=[]),i===void 0&&(i=null),s===void 0&&(s=null),r==null){var c;if(!i)return null;if(i.errors)r=i.matches;else if((c=s)!=null&&c.v7_partialHydration&&e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let f=r,h=(l=i)==null?void 0:l.errors;if(h!=null){let g=f.findIndex(v=>v.route.id&&(h==null?void 0:h[v.route.id])!==void 0);g>=0||Xt(!1),f=f.slice(0,Math.min(f.length,g+1))}let p=!1,m=-1;if(i&&s&&s.v7_partialHydration)for(let g=0;g<f.length;g++){let v=f[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=g),v.route.id){let{loaderData:x,errors:b}=i,M=v.route.loader&&x[v.route.id]===void 0&&(!b||b[v.route.id]===void 0);if(v.route.lazy||M){p=!0,m>=0?f=f.slice(0,m+1):f=[f[0]];break}}}return f.reduceRight((g,v,x)=>{let b,M=!1,T=null,y=null;i&&(b=h&&v.route.id?h[v.route.id]:void 0,T=v.route.errorElement||t1,p&&(m<0&&x===0?(u1("route-fallback"),M=!0,y=null):m===x&&(M=!0,y=v.route.hydrateFallbackElement||null)));let _=e.concat(f.slice(0,x+1)),O=()=>{let U;return b?U=T:M?U=y:v.route.Component?U=he.createElement(v.route.Component,null):v.route.element?U=v.route.element:U=g,he.createElement(i1,{match:v,routeContext:{outlet:g,matches:_,isDataRoute:i!=null},children:U})};return i&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?he.createElement(n1,{location:i.location,revalidation:i.revalidation,component:T,error:b,children:O(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):O()},null)}var u_=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(u_||{}),f_=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(f_||{});function r1(r){let e=he.useContext(Qc);return e||Xt(!1),e}function s1(r){let e=he.useContext(o_);return e||Xt(!1),e}function o1(r){let e=he.useContext(Li);return e||Xt(!1),e}function h_(r){let e=o1(),i=e.matches[e.matches.length-1];return i.route.id||Xt(!1),i.route.id}function l1(){var r;let e=he.useContext(l_),i=s1(),s=h_();return e!==void 0?e:(r=i.errors)==null?void 0:r[s]}function c1(){let{router:r}=r1(u_.UseNavigateStable),e=h_(f_.UseNavigateStable),i=he.useRef(!1);return c_(()=>{i.current=!0}),he.useCallback(function(l,c){c===void 0&&(c={}),i.current&&(typeof l=="number"?r.navigate(l):r.navigate(l,Ko({fromRouteId:e},c)))},[r,e])}const F0={};function u1(r,e,i){F0[r]||(F0[r]=!0)}const H0={};function f1(r,e){H0[e]||(H0[e]=!0,console.warn(e))}const G0=(r,e,i)=>f1(r,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+r+"` future flag to opt-in early. ")+("For more information, see "+i+"."));function h1(r,e){r!=null&&r.v7_startTransition||G0("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),r!=null&&r.v7_relativeSplatPath||G0("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function d1(r){let{to:e,replace:i,state:s,relative:l}=r;Is()||Xt(!1);let{future:c,static:f}=he.useContext(la),{matches:h}=he.useContext(Li),{pathname:p}=Ka(),m=$c(),g=Bd(e,Id(h,c.v7_relativeSplatPath),p,l==="path"),v=JSON.stringify(g);return he.useEffect(()=>m(JSON.parse(v),{replace:i,state:s,relative:l}),[m,v,l,i,s]),null}function p1(r){return KS(r.context)}function Ha(r){Xt(!1)}function m1(r){let{basename:e="/",children:i=null,location:s,navigationType:l=Va.Pop,navigator:c,static:f=!1,future:h}=r;Is()&&Xt(!1);let p=e.replace(/^\/*/,"/"),m=he.useMemo(()=>({basename:p,navigator:c,static:f,future:Ko({v7_relativeSplatPath:!1},h)}),[p,h,c,f]);typeof s=="string"&&(s=Nr(s));let{pathname:g="/",search:v="",hash:x="",state:b=null,key:M="default"}=s,T=he.useMemo(()=>{let y=Cs(g,p);return y==null?null:{location:{pathname:y,search:v,hash:x,state:b,key:M},navigationType:l}},[p,g,v,x,b,M,l]);return T==null?null:he.createElement(la.Provider,{value:m},he.createElement(Jc.Provider,{children:i,value:T}))}function g1(r){let{children:e,location:i}=r;return JS(qh(e),i)}new Promise(()=>{});function qh(r,e){e===void 0&&(e=[]);let i=[];return he.Children.forEach(r,(s,l)=>{if(!he.isValidElement(s))return;let c=[...e,l];if(s.type===he.Fragment){i.push.apply(i,qh(s.props.children,c));return}s.type!==Ha&&Xt(!1),!s.props.index||!s.props.children||Xt(!1);let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=qh(s.props.children,c)),i.push(f)}),i}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jc(){return jc=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},jc.apply(this,arguments)}function d_(r,e){if(r==null)return{};var i={},s=Object.keys(r),l,c;for(c=0;c<s.length;c++)l=s[c],!(e.indexOf(l)>=0)&&(i[l]=r[l]);return i}function v1(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function _1(r,e){return r.button===0&&(!e||e==="_self")&&!v1(r)}const x1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],y1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],S1="6";try{window.__reactRouterVersion=S1}catch{}const b1=he.createContext({isTransitioning:!1}),M1="startTransition",V0=mS[M1];function E1(r){let{basename:e,children:i,future:s,window:l}=r,c=he.useRef();c.current==null&&(c.current=bS({window:l,v5Compat:!0}));let f=c.current,[h,p]=he.useState({action:f.action,location:f.location}),{v7_startTransition:m}=s||{},g=he.useCallback(v=>{m&&V0?V0(()=>p(v)):p(v)},[p,m]);return he.useLayoutEffect(()=>f.listen(g),[f,g]),he.useEffect(()=>h1(s),[s]),he.createElement(m1,{basename:e,children:i,location:h.location,navigationType:h.action,navigator:f,future:s})}const T1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",A1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xa=he.forwardRef(function(e,i){let{onClick:s,relative:l,reloadDocument:c,replace:f,state:h,target:p,to:m,preventScrollReset:g,viewTransition:v}=e,x=d_(e,x1),{basename:b}=he.useContext(la),M,T=!1;if(typeof m=="string"&&A1.test(m)&&(M=m,T1))try{let U=new URL(window.location.href),N=m.startsWith("//")?new URL(U.protocol+m):new URL(m),X=Cs(N.pathname,b);N.origin===U.origin&&X!=null?m=X+N.search+N.hash:T=!0}catch{}let y=qS(m,{relative:l}),_=C1(m,{replace:f,state:h,target:p,preventScrollReset:g,relative:l,viewTransition:v});function O(U){s&&s(U),U.defaultPrevented||_(U)}return he.createElement("a",jc({},x,{href:M||y,onClick:T||c?s:O,ref:i,target:p}))}),w1=he.forwardRef(function(e,i){let{"aria-current":s="page",caseSensitive:l=!1,className:c="",end:f=!1,style:h,to:p,viewTransition:m,children:g}=e,v=d_(e,y1),x=eu(p,{relative:v.relative}),b=Ka(),M=he.useContext(o_),{navigator:T,basename:y}=he.useContext(la),_=M!=null&&D1(x)&&m===!0,O=T.encodeLocation?T.encodeLocation(x).pathname:x.pathname,U=b.pathname,N=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;l||(U=U.toLowerCase(),N=N?N.toLowerCase():null,O=O.toLowerCase()),N&&y&&(N=Cs(N,y)||N);const X=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let H=U===O||!f&&U.startsWith(O)&&U.charAt(X)==="/",B=N!=null&&(N===O||!f&&N.startsWith(O)&&N.charAt(O.length)==="/"),Z={isActive:H,isPending:B,isTransitioning:_},L=H?s:void 0,D;typeof c=="function"?D=c(Z):D=[c,H?"active":null,B?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let G=typeof h=="function"?h(Z):h;return he.createElement(Xa,jc({},v,{"aria-current":L,className:D,ref:i,style:G,to:p,viewTransition:m}),typeof g=="function"?g(Z):g)});var Yh;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Yh||(Yh={}));var k0;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(k0||(k0={}));function R1(r){let e=he.useContext(Qc);return e||Xt(!1),e}function C1(r,e){let{target:i,replace:s,state:l,preventScrollReset:c,relative:f,viewTransition:h}=e===void 0?{}:e,p=$c(),m=Ka(),g=eu(r,{relative:f});return he.useCallback(v=>{if(_1(v,i)){v.preventDefault();let x=s!==void 0?s:kc(m)===kc(g);p(r,{replace:x,state:l,preventScrollReset:c,relative:f,viewTransition:h})}},[m,p,g,s,l,i,r,c,f,h])}function D1(r,e){e===void 0&&(e={});let i=he.useContext(b1);i==null&&Xt(!1);let{basename:s}=R1(Yh.useViewTransitionState),l=eu(r,{relative:e.relative});if(!i.isTransitioning)return!1;let c=Cs(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Cs(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Wh(l.pathname,f)!=null||Wh(l.pathname,c)!=null}var p_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},j0=ka.createContext&&ka.createContext(p_),N1=["attr","size","title"];function U1(r,e){if(r==null)return{};var i=L1(r,e),s,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(l=0;l<c.length;l++)s=c[l],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(i[s]=r[s])}return i}function L1(r,e){if(r==null)return{};var i={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(e.indexOf(s)>=0)continue;i[s]=r[s]}return i}function Xc(){return Xc=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Xc.apply(this,arguments)}function X0(r,e){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,s)}return i}function Wc(r){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?X0(Object(i),!0).forEach(function(s){O1(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):X0(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}function O1(r,e,i){return e=P1(e),e in r?Object.defineProperty(r,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[e]=i,r}function P1(r){var e=z1(r,"string");return typeof e=="symbol"?e:e+""}function z1(r,e){if(typeof r!="object"||!r)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var s=i.call(r,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function m_(r){return r&&r.map((e,i)=>ka.createElement(e.tag,Wc({key:i},e.attr),m_(e.child)))}function Pn(r){return e=>ka.createElement(I1,Xc({attr:Wc({},r.attr)},e),m_(r.child))}function I1(r){var e=i=>{var{attr:s,size:l,title:c}=r,f=U1(r,N1),h=l||i.size||"1em",p;return i.className&&(p=i.className),r.className&&(p=(p?p+" ":"")+r.className),ka.createElement("svg",Xc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,s,f,{className:p,style:Wc(Wc({color:r.color||i.color},i.style),r.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),c&&ka.createElement("title",null,c),r.children)};return j0!==void 0?ka.createElement(j0.Consumer,null,i=>e(i)):e(p_)}function g_(r){return Pn({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(r)}function B1(r){return Pn({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"},child:[]}]})(r)}function v_(r){return Pn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(r)}function F1(r){return Pn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(r)}function H1(r){return Pn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(r)}function G1(r){return Pn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(r)}function V1(r){return Pn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(r)}function k1(r){return Pn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(r)}function __(r){return Pn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(r)}function j1(r){return Pn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(r)}function X1(r){return Pn({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(r)}function W1(r){return Pn({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(r)}function q1(r){return Pn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(r)}function Y1(r){return Pn({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(r)}function Z1(r){return Pn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(r)}const K1=()=>{const[r,e]=he.useState(!1),[i,s]=he.useState(!1),l=Ka(),c=$c();he.useEffect(()=>{const g=()=>{window.scrollY>50?s(!0):s(!1)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]);const f=[{name:"About",hash:"#about"},{name:"Skills",hash:"#skills"},{name:"Experience",hash:"#experience"},{name:"Projects",hash:"#projects"},{name:"Contact",hash:"#contact"}],h=he.useCallback(g=>{var M;const v=document.querySelector(g);if(!v)return;const x=((M=document.querySelector("nav"))==null?void 0:M.offsetHeight)??0,b=v.getBoundingClientRect().top+window.scrollY-x;window.scrollTo({top:b,behavior:"smooth"})},[]),p=he.useCallback(g=>{e(!1),l.pathname==="/"||l.pathname===""?h(g):c({pathname:"/",hash:g})},[l.pathname,c,h]),m="font-mono text-white hover:text-cyber-blue transition-colors duration-300";return R.jsxs("nav",{className:`fixed w-full z-50 transition-all duration-300 ${i?"bg-cyber-dark/80 backdrop-blur-md py-2":"bg-transparent py-4"}`,children:[R.jsxs("div",{className:"container mx-auto px-4 flex justify-center  items-center",children:[R.jsxs("div",{className:"hidden md:flex items-center space-x-7",children:[R.jsx(w1,{to:"/",className:({isActive:g})=>`${m} ${g?"text-cyber-blue":""}`,onClick:()=>e(!1),end:!0,children:"Home"}),f.map(g=>R.jsx("button",{type:"button",className:m,onClick:()=>p(g.hash),children:g.name},g.name))]}),R.jsx("button",{className:"md:hidden justify-end text-white focus:outline-none",onClick:()=>e(!r),children:r?R.jsx(Y1,{size:24}):R.jsx(G1,{size:24})})]}),r&&R.jsx("div",{className:"md:hidden bg-cyber-light border-t border-cyber-blue/30",children:R.jsxs("div",{className:"container mx-auto px-4 py-4 flex flex-col space-y-4",children:[R.jsx(Xa,{to:"/",className:m,onClick:()=>e(!1),children:"Home"}),f.map(g=>R.jsx("button",{type:"button",className:m,onClick:()=>p(g.hash),children:g.name},g.name))]})})]})},Q1=()=>{const r=new Date().getFullYear(),e=[{icon:R.jsx(g_,{size:20}),href:"https://github.com/theujwalthakare",label:"GitHub"},{icon:R.jsx(v_,{size:20}),href:"https://www.linkedin.com/in/ujwal-thakare-300b25264/",label:"LinkedIn"},{icon:R.jsx(H1,{size:20}),href:"https://x.com/ujwal55135",label:"X"},{icon:R.jsx(__,{size:20}),href:"mailto:thakare2829@gmail.com",label:"Email"}];return R.jsx("footer",{className:"bg-cyber-dark border-t border-cyber-blue/30 py-8",children:R.jsx("div",{className:"container mx-auto px-4",children:R.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[R.jsxs("div",{className:"mb-4 md:mb-0",children:[R.jsxs("p",{className:"font-cyber text-cyber-blue",children:["© ",R.jsx("span",{className:"animate-glow",children:r}),"   ",R.jsx("span",{className:"animate-glow",children:"UJWAL THAKARE"})]}),R.jsx("p",{className:"text-gray-400 text-sm mt-1",children:"Crafted with code and cyberpunk vibes"})]}),R.jsx("div",{className:"flex space-x-6",children:e.map((i,s)=>R.jsx("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-cyber-blue transition-colors duration-300","aria-label":i.label,children:i.icon},s))})]})})})},J1=()=>{const r=he.useRef(null);return he.useEffect(()=>{const e=r.current;if(!e)return;const i=e.getContext("2d");if(!i)return;e.width=window.innerWidth,e.height=window.innerHeight;const l="アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),c=14,f=Math.floor(e.width/c),h=[];for(let v=0;v<f;v++)h[v]=Math.random()*-100;const m=setInterval(()=>{i.fillStyle="rgba(10, 10, 15, 0.05)",i.fillRect(0,0,e.width,e.height),i.fillStyle="#00f0ff",i.font=`${c}px monospace`;for(let v=0;v<h.length;v++){const x=l[Math.floor(Math.random()*l.length)];i.fillText(x,v*c,h[v]*c),h[v]*c>e.height&&Math.random()>.975&&(h[v]=0),h[v]++}},35),g=()=>{e.width=window.innerWidth,e.height=window.innerHeight;const v=Math.floor(e.width/c);h.length=0;for(let x=0;x<v;x++)h[x]=Math.random()*-100};return window.addEventListener("resize",g),()=>{clearInterval(m),window.removeEventListener("resize",g)}},[]),R.jsx("canvas",{ref:r,className:"absolute top-0 left-0 w-full h-full z-0 opacity-30"})},$1=()=>{const r=Ka();return he.useEffect(()=>{const e=i=>{var f;const s=document.querySelector(i);if(!s)return;const l=((f=document.querySelector("nav"))==null?void 0:f.offsetHeight)??0,c=s.getBoundingClientRect().top+window.scrollY-l-16;window.scrollTo({top:c,behavior:"smooth"})};r.hash?requestAnimationFrame(()=>{e(r.hash)}):window.scrollTo({top:0,behavior:"smooth"})},[r.pathname,r.hash]),R.jsxs("div",{className:"relative min-h-screen",children:[R.jsx(J1,{}),R.jsxs("div",{className:"relative z-10",children:[R.jsx(K1,{}),R.jsx("main",{children:R.jsx(p1,{})}),R.jsx(Q1,{})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fd="170",eb=0,W0=1,tb=2,x_=1,nb=2,na=3,Ya=0,On=1,ia=2,Wa=0,As=1,q0=2,Y0=3,Z0=4,ib=5,Er=100,ab=101,rb=102,sb=103,ob=104,lb=200,cb=201,ub=202,fb=203,Zh=204,Kh=205,hb=206,db=207,pb=208,mb=209,gb=210,vb=211,_b=212,xb=213,yb=214,Qh=0,Jh=1,$h=2,Ds=3,ed=4,td=5,nd=6,id=7,Hd=0,Sb=1,bb=2,qa=0,Mb=1,Eb=2,Tb=3,Ab=4,wb=5,Rb=6,Cb=7,y_=300,Ns=301,Us=302,ad=303,rd=304,tu=306,sd=1e3,Ar=1001,od=1002,bi=1003,Db=1004,fc=1005,Ni=1006,mh=1007,wr=1008,oa=1009,S_=1010,b_=1011,Qo=1012,Gd=1013,Cr=1014,aa=1015,Jo=1016,Vd=1017,kd=1018,Ls=1020,M_=35902,E_=1021,T_=1022,yi=1023,A_=1024,w_=1025,ws=1026,Os=1027,R_=1028,jd=1029,C_=1030,Xd=1031,Wd=1033,Pc=33776,zc=33777,Ic=33778,Bc=33779,ld=35840,cd=35841,ud=35842,fd=35843,hd=36196,dd=37492,pd=37496,md=37808,gd=37809,vd=37810,_d=37811,xd=37812,yd=37813,Sd=37814,bd=37815,Md=37816,Ed=37817,Td=37818,Ad=37819,wd=37820,Rd=37821,Fc=36492,Cd=36494,Dd=36495,D_=36283,Nd=36284,Ud=36285,Ld=36286,Nb=3200,Ub=3201,N_=0,Lb=1,Ga="",$n="srgb",Bs="srgb-linear",nu="linear",It="srgb",us=7680,K0=519,Ob=512,Pb=513,zb=514,U_=515,Ib=516,Bb=517,Fb=518,Hb=519,Q0=35044,J0="300 es",ra=2e3,qc=2001;class Fs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $0=1234567;const Wo=Math.PI/180,Ps=180/Math.PI;function Hs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]).toLowerCase()}function Ln(r,e,i){return Math.max(e,Math.min(i,r))}function qd(r,e){return(r%e+e)%e}function Gb(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function Vb(r,e,i){return r!==e?(i-r)/(e-r):0}function qo(r,e,i){return(1-i)*r+i*e}function kb(r,e,i,s){return qo(r,e,1-Math.exp(-i*s))}function jb(r,e=1){return e-Math.abs(qd(r,e*2)-e)}function Xb(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function Wb(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function qb(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Yb(r,e){return r+Math.random()*(e-r)}function Zb(r){return r*(.5-Math.random())}function Kb(r){r!==void 0&&($0=r);let e=$0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qb(r){return r*Wo}function Jb(r){return r*Ps}function $b(r){return(r&r-1)===0&&r!==0}function eM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function tM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function nM(r,e,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),p=f(i/2),m=c((e+s)/2),g=f((e+s)/2),v=c((e-s)/2),x=f((e-s)/2),b=c((s-e)/2),M=f((s-e)/2);switch(l){case"XYX":r.set(h*g,p*v,p*x,h*m);break;case"YZY":r.set(p*x,h*g,p*v,h*m);break;case"ZXZ":r.set(p*v,p*x,h*g,h*m);break;case"XZX":r.set(h*g,p*M,p*b,h*m);break;case"YXY":r.set(p*b,h*g,p*M,h*m);break;case"ZYZ":r.set(p*M,p*b,h*g,h*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Es(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Hc={DEG2RAD:Wo,RAD2DEG:Ps,generateUUID:Hs,clamp:Ln,euclideanModulo:qd,mapLinear:Gb,inverseLerp:Vb,lerp:qo,damp:kb,pingpong:jb,smoothstep:Xb,smootherstep:Wb,randInt:qb,randFloat:Yb,randFloatSpread:Zb,seededRandom:Kb,degToRad:Qb,radToDeg:Jb,isPowerOfTwo:$b,ceilPowerOfTwo:eM,floorPowerOfTwo:tM,setQuaternionFromProperEuler:nM,normalize:Nn,denormalize:Es};class wt{constructor(e=0,i=0){wt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ln(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,i,s,l,c,f,h,p,m){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,p,m)}set(e,i,s,l,c,f,h,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=p,g[6]=s,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],p=s[6],m=s[1],g=s[4],v=s[7],x=s[2],b=s[5],M=s[8],T=l[0],y=l[3],_=l[6],O=l[1],U=l[4],N=l[7],X=l[2],H=l[5],B=l[8];return c[0]=f*T+h*O+p*X,c[3]=f*y+h*U+p*H,c[6]=f*_+h*N+p*B,c[1]=m*T+g*O+v*X,c[4]=m*y+g*U+v*H,c[7]=m*_+g*N+v*B,c[2]=x*T+b*O+M*X,c[5]=x*y+b*U+M*H,c[8]=x*_+b*N+M*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],g=e[8];return i*f*g-i*h*m-s*c*g+s*h*p+l*c*m-l*f*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],g=e[8],v=g*f-h*m,x=h*p-g*c,b=m*c-f*p,M=i*v+s*x+l*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=v*T,e[1]=(l*m-g*s)*T,e[2]=(h*s-l*f)*T,e[3]=x*T,e[4]=(g*i-l*p)*T,e[5]=(l*c-h*i)*T,e[6]=b*T,e[7]=(s*p-m*i)*T,e[8]=(f*i-s*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*h)+f+e,-l*m,l*p,-l*(-m*f+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(gh.makeScale(e,i)),this}rotate(e){return this.premultiply(gh.makeRotation(-e)),this}translate(e,i){return this.premultiply(gh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gh=new lt;function L_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Yc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function iM(){const r=Yc("canvas");return r.style.display="block",r}const ev={};function jo(r){r in ev||(ev[r]=!0,console.warn(r))}function aM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function rM(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sM(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bt={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(r,e,i){return this.enabled===!1||e===i||!e||!i||(this.spaces[e].transfer===It&&(r.r=sa(r.r),r.g=sa(r.g),r.b=sa(r.b)),this.spaces[e].primaries!==this.spaces[i].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===It&&(r.r=Rs(r.r),r.g=Rs(r.g),r.b=Rs(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ga?nu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,i){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function sa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const tv=[.64,.33,.3,.6,.15,.06],nv=[.2126,.7152,.0722],iv=[.3127,.329],av=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rv=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);bt.define({[Bs]:{primaries:tv,whitePoint:iv,transfer:nu,toXYZ:av,fromXYZ:rv,luminanceCoefficients:nv,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:tv,whitePoint:iv,transfer:It,toXYZ:av,fromXYZ:rv,luminanceCoefficients:nv,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}});let fs;class oM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fs===void 0&&(fs=Yc("canvas")),fs.width=e.width,fs.height=e.height;const s=fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=fs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Yc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=sa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(sa(i[s]/255)*255):i[s]=sa(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lM=0;class O_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Hs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(vh(l[f].image)):c.push(vh(l[f]))}else c=vh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function vh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?oM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cM=0;class Gn extends Fs{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=Ar,l=Ar,c=Ni,f=wr,h=yi,p=oa,m=Gn.DEFAULT_ANISOTROPY,g=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Hs(),this.name="",this.source=new O_(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sd:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sd:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=y_;Gn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,i=0,s=0,l=1){Kt.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const p=e.elements,m=p[0],g=p[4],v=p[8],x=p[1],b=p[5],M=p[9],T=p[2],y=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(v-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+T)<.1&&Math.abs(M+y)<.1&&Math.abs(m+b+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(m+1)/2,N=(b+1)/2,X=(_+1)/2,H=(g+x)/4,B=(v+T)/4,Z=(M+y)/4;return U>N&&U>X?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=H/s,c=B/s):N>X?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=H/l,c=Z/l):X<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(X),s=B/c,l=Z/c),this.set(s,l,c,i),this}let O=Math.sqrt((y-M)*(y-M)+(v-T)*(v-T)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(y-M)/O,this.y=(v-T)/O,this.z=(x-g)/O,this.w=Math.acos((m+b+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uM extends Fs{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Kt(0,0,e,i),this.scissorTest=!1,this.viewport=new Kt(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Gn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new O_(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends uM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class P_ extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fM extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $o{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,h){let p=s[l+0],m=s[l+1],g=s[l+2],v=s[l+3];const x=c[f+0],b=c[f+1],M=c[f+2],T=c[f+3];if(h===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v;return}if(h===1){e[i+0]=x,e[i+1]=b,e[i+2]=M,e[i+3]=T;return}if(v!==T||p!==x||m!==b||g!==M){let y=1-h;const _=p*x+m*b+g*M+v*T,O=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const X=Math.sqrt(U),H=Math.atan2(X,_*O);y=Math.sin(y*H)/X,h=Math.sin(h*H)/X}const N=h*O;if(p=p*y+x*N,m=m*y+b*N,g=g*y+M*N,v=v*y+T*N,y===1-h){const X=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=X,m*=X,g*=X,v*=X}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,f){const h=s[l],p=s[l+1],m=s[l+2],g=s[l+3],v=c[f],x=c[f+1],b=c[f+2],M=c[f+3];return e[i]=h*M+g*v+p*b-m*x,e[i+1]=p*M+g*x+m*v-h*b,e[i+2]=m*M+g*b+h*x-p*v,e[i+3]=g*M-h*v-p*x-m*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,p=Math.sin,m=h(s/2),g=h(l/2),v=h(c/2),x=p(s/2),b=p(l/2),M=p(c/2);switch(f){case"XYZ":this._x=x*g*v+m*b*M,this._y=m*b*v-x*g*M,this._z=m*g*M+x*b*v,this._w=m*g*v-x*b*M;break;case"YXZ":this._x=x*g*v+m*b*M,this._y=m*b*v-x*g*M,this._z=m*g*M-x*b*v,this._w=m*g*v+x*b*M;break;case"ZXY":this._x=x*g*v-m*b*M,this._y=m*b*v+x*g*M,this._z=m*g*M+x*b*v,this._w=m*g*v-x*b*M;break;case"ZYX":this._x=x*g*v-m*b*M,this._y=m*b*v+x*g*M,this._z=m*g*M-x*b*v,this._w=m*g*v+x*b*M;break;case"YZX":this._x=x*g*v+m*b*M,this._y=m*b*v+x*g*M,this._z=m*g*M-x*b*v,this._w=m*g*v-x*b*M;break;case"XZY":this._x=x*g*v-m*b*M,this._y=m*b*v-x*g*M,this._z=m*g*M+x*b*v,this._w=m*g*v+x*b*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],p=i[9],m=i[2],g=i[6],v=i[10],x=s+h+v;if(x>0){const b=.5/Math.sqrt(x+1);this._w=.25/b,this._x=(g-p)*b,this._y=(c-m)*b,this._z=(f-l)*b}else if(s>h&&s>v){const b=2*Math.sqrt(1+s-h-v);this._w=(g-p)/b,this._x=.25*b,this._y=(l+f)/b,this._z=(c+m)/b}else if(h>v){const b=2*Math.sqrt(1+h-s-v);this._w=(c-m)/b,this._x=(l+f)/b,this._y=.25*b,this._z=(p+g)/b}else{const b=2*Math.sqrt(1+v-s-h);this._w=(f-l)/b,this._x=(c+m)/b,this._y=(p+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=s*g+f*h+l*m-c*p,this._y=l*g+f*p+c*h-s*m,this._z=c*g+f*m+s*p-l*h,this._w=f*g-s*h-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,f=this._w;let h=f*e._w+s*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const b=1-i;return this._w=b*f+i*this._w,this._x=b*s+i*this._x,this._y=b*l+i*this._y,this._z=b*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),v=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=f*v+this._w*x,this._x=s*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,i=0,s=0){ie.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(sv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(sv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,p=e.w,m=2*(f*l-h*s),g=2*(h*i-c*l),v=2*(c*s-f*i);return this.x=i+p*m+f*v-h*g,this.y=s+p*g+h*m-c*v,this.z=l+p*v+c*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*f-s*p,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ln(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _h=new ie,sv=new $o;class el{constructor(e=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,gi):gi.fromBufferAttribute(c,f),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),hc.copy(s.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),dc.subVectors(this.max,Fo),hs.subVectors(e.a,Fo),ds.subVectors(e.b,Fo),ps.subVectors(e.c,Fo),Oa.subVectors(ds,hs),Pa.subVectors(ps,ds),gr.subVectors(hs,ps);let i=[0,-Oa.z,Oa.y,0,-Pa.z,Pa.y,0,-gr.z,gr.y,Oa.z,0,-Oa.x,Pa.z,0,-Pa.x,gr.z,0,-gr.x,-Oa.y,Oa.x,0,-Pa.y,Pa.x,0,-gr.y,gr.x,0];return!xh(i,hs,ds,ps,dc)||(i=[1,0,0,0,1,0,0,0,1],!xh(i,hs,ds,ps,dc))?!1:(pc.crossVectors(Oa,Pa),i=[pc.x,pc.y,pc.z],xh(i,hs,ds,ps,dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],gi=new ie,hc=new el,hs=new ie,ds=new ie,ps=new ie,Oa=new ie,Pa=new ie,gr=new ie,Fo=new ie,dc=new ie,pc=new ie,vr=new ie;function xh(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){vr.fromArray(r,c);const h=l.x*Math.abs(vr.x)+l.y*Math.abs(vr.y)+l.z*Math.abs(vr.z),p=e.dot(vr),m=i.dot(vr),g=s.dot(vr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const hM=new el,Ho=new ie,yh=new ie;class iu{constructor(e=new ie,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):hM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ho,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(yh)),this.expandByPoint(Ho.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new ie,Sh=new ie,mc=new ie,za=new ie,bh=new ie,gc=new ie,Mh=new ie;class z_{constructor(e=new ie,i=new ie(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Sh.copy(e).add(i).multiplyScalar(.5),mc.copy(i).sub(e).normalize(),za.copy(this.origin).sub(Sh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(mc),h=za.dot(this.direction),p=-za.dot(mc),m=za.lengthSq(),g=Math.abs(1-f*f);let v,x,b,M;if(g>0)if(v=f*p-h,x=f*h-p,M=c*g,v>=0)if(x>=-M)if(x<=M){const T=1/g;v*=T,x*=T,b=v*(v+f*x+2*h)+x*(f*v+x+2*p)+m}else x=c,v=Math.max(0,-(f*x+h)),b=-v*v+x*(x+2*p)+m;else x=-c,v=Math.max(0,-(f*x+h)),b=-v*v+x*(x+2*p)+m;else x<=-M?(v=Math.max(0,-(-f*c+h)),x=v>0?-c:Math.min(Math.max(-c,-p),c),b=-v*v+x*(x+2*p)+m):x<=M?(v=0,x=Math.min(Math.max(-c,-p),c),b=x*(x+2*p)+m):(v=Math.max(0,-(f*c+h)),x=v>0?c:Math.min(Math.max(-c,-p),c),b=-v*v+x*(x+2*p)+m);else x=f>0?-c:c,v=Math.max(0,-(f*x+h)),b=-v*v+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Sh).addScaledVector(mc,x),b}intersectSphere(e,i){Ji.subVectors(e.center,this.origin);const s=Ji.dot(this.direction),l=Ji.dot(Ji)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,p=s+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(s=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(s=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),g>=0?(c=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(h=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,i,s,l,c){bh.subVectors(i,e),gc.subVectors(s,e),Mh.crossVectors(bh,gc);let f=this.direction.dot(Mh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;za.subVectors(this.origin,e);const p=h*this.direction.dot(gc.crossVectors(za,gc));if(p<0)return null;const m=h*this.direction.dot(bh.cross(za));if(m<0||p+m>f)return null;const g=-h*za.dot(Mh);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,i,s,l,c,f,h,p,m,g,v,x,b,M,T,y){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,p,m,g,v,x,b,M,T,y)}set(e,i,s,l,c,f,h,p,m,g,v,x,b,M,T,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=x,_[3]=b,_[7]=M,_[11]=T,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/ms.setFromMatrixColumn(e,0).length(),c=1/ms.setFromMatrixColumn(e,1).length(),f=1/ms.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=f*g,b=f*v,M=h*g,T=h*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=b+M*m,i[5]=x-T*m,i[9]=-h*p,i[2]=T-x*m,i[6]=M+b*m,i[10]=f*p}else if(e.order==="YXZ"){const x=p*g,b=p*v,M=m*g,T=m*v;i[0]=x+T*h,i[4]=M*h-b,i[8]=f*m,i[1]=f*v,i[5]=f*g,i[9]=-h,i[2]=b*h-M,i[6]=T+x*h,i[10]=f*p}else if(e.order==="ZXY"){const x=p*g,b=p*v,M=m*g,T=m*v;i[0]=x-T*h,i[4]=-f*v,i[8]=M+b*h,i[1]=b+M*h,i[5]=f*g,i[9]=T-x*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(e.order==="ZYX"){const x=f*g,b=f*v,M=h*g,T=h*v;i[0]=p*g,i[4]=M*m-b,i[8]=x*m+T,i[1]=p*v,i[5]=T*m+x,i[9]=b*m-M,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(e.order==="YZX"){const x=f*p,b=f*m,M=h*p,T=h*m;i[0]=p*g,i[4]=T-x*v,i[8]=M*v+b,i[1]=v,i[5]=f*g,i[9]=-h*g,i[2]=-m*g,i[6]=b*v+M,i[10]=x-T*v}else if(e.order==="XZY"){const x=f*p,b=f*m,M=h*p,T=h*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=x*v+T,i[5]=f*g,i[9]=b*v-M,i[2]=M*v-b,i[6]=h*g,i[10]=T*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dM,e,pM)}lookAt(e,i,s){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Ia.crossVectors(s,Qn),Ia.lengthSq()===0&&(Math.abs(s.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Ia.crossVectors(s,Qn)),Ia.normalize(),vc.crossVectors(Qn,Ia),l[0]=Ia.x,l[4]=vc.x,l[8]=Qn.x,l[1]=Ia.y,l[5]=vc.y,l[9]=Qn.y,l[2]=Ia.z,l[6]=vc.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],p=s[8],m=s[12],g=s[1],v=s[5],x=s[9],b=s[13],M=s[2],T=s[6],y=s[10],_=s[14],O=s[3],U=s[7],N=s[11],X=s[15],H=l[0],B=l[4],Z=l[8],L=l[12],D=l[1],G=l[5],ue=l[9],le=l[13],ye=l[2],me=l[6],z=l[10],K=l[14],V=l[3],Se=l[7],E=l[11],I=l[15];return c[0]=f*H+h*D+p*ye+m*V,c[4]=f*B+h*G+p*me+m*Se,c[8]=f*Z+h*ue+p*z+m*E,c[12]=f*L+h*le+p*K+m*I,c[1]=g*H+v*D+x*ye+b*V,c[5]=g*B+v*G+x*me+b*Se,c[9]=g*Z+v*ue+x*z+b*E,c[13]=g*L+v*le+x*K+b*I,c[2]=M*H+T*D+y*ye+_*V,c[6]=M*B+T*G+y*me+_*Se,c[10]=M*Z+T*ue+y*z+_*E,c[14]=M*L+T*le+y*K+_*I,c[3]=O*H+U*D+N*ye+X*V,c[7]=O*B+U*G+N*me+X*Se,c[11]=O*Z+U*ue+N*z+X*E,c[15]=O*L+U*le+N*K+X*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],p=e[9],m=e[13],g=e[2],v=e[6],x=e[10],b=e[14],M=e[3],T=e[7],y=e[11],_=e[15];return M*(+c*p*v-l*m*v-c*h*x+s*m*x+l*h*b-s*p*b)+T*(+i*p*b-i*m*x+c*f*x-l*f*b+l*m*g-c*p*g)+y*(+i*m*v-i*h*b-c*f*v+s*f*b+c*h*g-s*m*g)+_*(-l*h*g-i*p*v+i*h*x+l*f*v-s*f*x+s*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],g=e[8],v=e[9],x=e[10],b=e[11],M=e[12],T=e[13],y=e[14],_=e[15],O=v*y*m-T*x*m+T*p*b-h*y*b-v*p*_+h*x*_,U=M*x*m-g*y*m-M*p*b+f*y*b+g*p*_-f*x*_,N=g*T*m-M*v*m+M*h*b-f*T*b-g*h*_+f*v*_,X=M*v*p-g*T*p-M*h*x+f*T*x+g*h*y-f*v*y,H=i*O+s*U+l*N+c*X;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return e[0]=O*B,e[1]=(T*x*c-v*y*c-T*l*b+s*y*b+v*l*_-s*x*_)*B,e[2]=(h*y*c-T*p*c+T*l*m-s*y*m-h*l*_+s*p*_)*B,e[3]=(v*p*c-h*x*c-v*l*m+s*x*m+h*l*b-s*p*b)*B,e[4]=U*B,e[5]=(g*y*c-M*x*c+M*l*b-i*y*b-g*l*_+i*x*_)*B,e[6]=(M*p*c-f*y*c-M*l*m+i*y*m+f*l*_-i*p*_)*B,e[7]=(f*x*c-g*p*c+g*l*m-i*x*m-f*l*b+i*p*b)*B,e[8]=N*B,e[9]=(M*v*c-g*T*c-M*s*b+i*T*b+g*s*_-i*v*_)*B,e[10]=(f*T*c-M*h*c+M*s*m-i*T*m-f*s*_+i*h*_)*B,e[11]=(g*h*c-f*v*c-g*s*m+i*v*m+f*s*b-i*h*b)*B,e[12]=X*B,e[13]=(g*T*l-M*v*l+M*s*x-i*T*x-g*s*y+i*v*y)*B,e[14]=(M*h*l-f*T*l-M*s*p+i*T*p+f*s*y-i*h*y)*B,e[15]=(f*v*l-g*h*l+g*s*p-i*v*p-f*s*x+i*h*x)*B,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,h=e.y,p=e.z,m=c*f,g=c*h;return this.set(m*f+s,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+s,g*p-l*f,0,m*p-l*h,g*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,p=i._w,m=c+c,g=f+f,v=h+h,x=c*m,b=c*g,M=c*v,T=f*g,y=f*v,_=h*v,O=p*m,U=p*g,N=p*v,X=s.x,H=s.y,B=s.z;return l[0]=(1-(T+_))*X,l[1]=(b+N)*X,l[2]=(M-U)*X,l[3]=0,l[4]=(b-N)*H,l[5]=(1-(x+_))*H,l[6]=(y+O)*H,l[7]=0,l[8]=(M+U)*B,l[9]=(y-O)*B,l[10]=(1-(x+T))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=ms.set(l[0],l[1],l[2]).length();const f=ms.set(l[4],l[5],l[6]).length(),h=ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],vi.copy(this);const m=1/c,g=1/f,v=1/h;return vi.elements[0]*=m,vi.elements[1]*=m,vi.elements[2]*=m,vi.elements[4]*=g,vi.elements[5]*=g,vi.elements[6]*=g,vi.elements[8]*=v,vi.elements[9]*=v,vi.elements[10]*=v,i.setFromRotationMatrix(vi),s.x=c,s.y=f,s.z=h,this}makePerspective(e,i,s,l,c,f,h=ra){const p=this.elements,m=2*c/(i-e),g=2*c/(s-l),v=(i+e)/(i-e),x=(s+l)/(s-l);let b,M;if(h===ra)b=-(f+c)/(f-c),M=-2*f*c/(f-c);else if(h===qc)b=-f/(f-c),M=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=M,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,h=ra){const p=this.elements,m=1/(i-e),g=1/(s-l),v=1/(f-c),x=(i+e)*m,b=(s+l)*g;let M,T;if(h===ra)M=(f+c)*v,T=-2*v;else if(h===qc)M=c*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-b,p[2]=0,p[6]=0,p[10]=T,p[14]=-M,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const ms=new ie,vi=new Wt,dM=new ie(0,0,0),pM=new ie(1,1,1),Ia=new ie,vc=new ie,Qn=new ie,ov=new Wt,lv=new $o;class Ui{constructor(e=0,i=0,s=0,l=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],g=l[9],v=l[2],x=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ln(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,b),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Ln(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-Ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return ov.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ov,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return lv.setFromEuler(this),this.setFromQuaternion(lv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class I_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mM=0;const cv=new ie,gs=new $o,$i=new Wt,_c=new ie,Go=new ie,gM=new ie,vM=new $o,uv=new ie(1,0,0),fv=new ie(0,1,0),hv=new ie(0,0,1),dv={type:"added"},_M={type:"removed"},vs={type:"childadded",child:null},Eh={type:"childremoved",child:null};class bn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new ie,i=new Ui,s=new $o,l=new ie(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Wt},normalMatrix:{value:new lt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return gs.setFromAxisAngle(e,i),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,i){return gs.setFromAxisAngle(e,i),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(uv,e)}rotateY(e){return this.rotateOnAxis(fv,e)}rotateZ(e){return this.rotateOnAxis(hv,e)}translateOnAxis(e,i){return cv.copy(e).applyQuaternion(this.quaternion),this.position.add(cv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(uv,e)}translateY(e){return this.translateOnAxis(fv,e)}translateZ(e){return this.translateOnAxis(hv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?_c.copy(e):_c.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Go,_c,this.up):$i.lookAt(_c,Go,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),gs.setFromRotationMatrix($i),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dv),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(_M),Eh.child=e,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dv),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,gM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,vM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(e.animations,p))}}if(i){const h=f(e.geometries),p=f(e.materials),m=f(e.textures),g=f(e.images),v=f(e.shapes),x=f(e.skeletons),b=f(e.animations),M=f(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),b.length>0&&(s.animations=b),M.length>0&&(s.nodes=M)}return s.object=l,s;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}bn.DEFAULT_UP=new ie(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new ie,ea=new ie,Th=new ie,ta=new ie,_s=new ie,xs=new ie,pv=new ie,Ah=new ie,wh=new ie,Rh=new ie,Ch=new Kt,Dh=new Kt,Nh=new Kt;class xi{constructor(e=new ie,i=new ie,s=new ie){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),_i.subVectors(e,i),l.cross(_i);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){_i.subVectors(l,i),ea.subVectors(s,i),Th.subVectors(e,i);const f=_i.dot(_i),h=_i.dot(ea),p=_i.dot(Th),m=ea.dot(ea),g=ea.dot(Th),v=f*m-h*h;if(v===0)return c.set(0,0,0),null;const x=1/v,b=(m*p-h*g)*x,M=(f*g-h*p)*x;return c.set(1-b-M,M,b)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ta)===null?!1:ta.x>=0&&ta.y>=0&&ta.x+ta.y<=1}static getInterpolation(e,i,s,l,c,f,h,p){return this.getBarycoord(e,i,s,l,ta)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ta.x),p.addScaledVector(f,ta.y),p.addScaledVector(h,ta.z),p)}static getInterpolatedAttribute(e,i,s,l,c,f){return Ch.setScalar(0),Dh.setScalar(0),Nh.setScalar(0),Ch.fromBufferAttribute(e,i),Dh.fromBufferAttribute(e,s),Nh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Ch,c.x),f.addScaledVector(Dh,c.y),f.addScaledVector(Nh,c.z),f}static isFrontFacing(e,i,s,l){return _i.subVectors(s,i),ea.subVectors(e,i),_i.cross(ea).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),_i.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return xi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return xi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,h;_s.subVectors(l,s),xs.subVectors(c,s),Ah.subVectors(e,s);const p=_s.dot(Ah),m=xs.dot(Ah);if(p<=0&&m<=0)return i.copy(s);wh.subVectors(e,l);const g=_s.dot(wh),v=xs.dot(wh);if(g>=0&&v<=g)return i.copy(l);const x=p*v-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(s).addScaledVector(_s,f);Rh.subVectors(e,c);const b=_s.dot(Rh),M=xs.dot(Rh);if(M>=0&&b<=M)return i.copy(c);const T=b*m-p*M;if(T<=0&&m>=0&&M<=0)return h=m/(m-M),i.copy(s).addScaledVector(xs,h);const y=g*M-b*v;if(y<=0&&v-g>=0&&b-M>=0)return pv.subVectors(c,l),h=(v-g)/(v-g+(b-M)),i.copy(l).addScaledVector(pv,h);const _=1/(y+T+x);return f=T*_,h=x*_,i.copy(s).addScaledVector(_s,f).addScaledVector(xs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const B_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Uh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class _t{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=bt.workingColorSpace){return this.r=e,this.g=i,this.b=s,bt.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=bt.workingColorSpace){if(e=qd(e,1),i=Ln(i,0,1),s=Ln(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Uh(f,c,e+1/3),this.g=Uh(f,c,e),this.b=Uh(f,c,e-1/3)}return bt.toWorkingColorSpace(this,l),this}setStyle(e,i=$n){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=$n){const s=B_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return bt.fromWorkingColorSpace(wn.copy(this),e),Math.round(Ln(wn.r*255,0,255))*65536+Math.round(Ln(wn.g*255,0,255))*256+Math.round(Ln(wn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=bt.workingColorSpace){bt.fromWorkingColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,c=wn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const v=f-h;switch(m=g<=.5?v/(f+h):v/(2-f-h),f){case s:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-s)/v+2;break;case c:p=(s-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=bt.workingColorSpace){return bt.fromWorkingColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=$n){bt.fromWorkingColorSpace(wn.copy(this),e);const i=wn.r,s=wn.g,l=wn.b;return e!==$n?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ba),this.setHSL(Ba.h+e,Ba.s+i,Ba.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ba),e.getHSL(xc);const s=qo(Ba.h,xc.h,i),l=qo(Ba.s,xc.s,i),c=qo(Ba.l,xc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new _t;_t.NAMES=B_;let xM=0;class Gs extends Fs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Hs(),this.name="",this.blending=As,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Kh,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=K0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(s.blending=this.blending),this.side!==Ya&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zh&&(s.blendSrc=this.blendSrc),this.blendDst!==Kh&&(s.blendDst=this.blendDst),this.blendEquation!==Er&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==K0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(s.stencilFail=this.stencilFail),this.stencilZFail!==us&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yd extends Gs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new ie,yc=new wt;class Mi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Q0,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(e),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(e),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.transformDirection(e),this.setXYZ(i,an.x,an.y,an.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Es(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Nn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Es(i,this.array)),i}setX(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Es(i,this.array)),i}setY(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Es(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Es(i,this.array)),i}setW(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),s=Nn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),s=Nn(s,this.array),l=Nn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),s=Nn(s,this.array),l=Nn(l,this.array),c=Nn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Q0&&(e.usage=this.usage),e}}class F_ extends Mi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class H_ extends Mi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class ti extends Mi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let yM=0;const fi=new Wt,Lh=new bn,ys=new ie,Jn=new el,Vo=new el,mn=new ie;class ni extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(L_(e)?H_:F_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new lt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,s){return fi.makeTranslation(e,i,s),this.applyMatrix4(fi),this}scale(e,i,s){return fi.makeScale(e,i,s),this.applyMatrix4(fi),this}lookAt(e){return Lh.lookAt(e),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ti(s,3))}else{for(let s=0,l=i.count;s<l;s++){const c=e[s];i.setXYZ(s,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Vo.setFromBufferAttribute(h),this.morphTargetsRelative?(mn.addVectors(Jn.min,Vo.min),Jn.expandByPoint(mn),mn.addVectors(Jn.max,Vo.max),Jn.expandByPoint(mn)):(Jn.expandByPoint(Vo.min),Jn.expandByPoint(Vo.max))}Jn.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)mn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(mn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)mn.fromBufferAttribute(h,m),p&&(ys.fromBufferAttribute(e,m),mn.add(ys)),l=Math.max(l,s.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let Z=0;Z<s.count;Z++)h[Z]=new ie,p[Z]=new ie;const m=new ie,g=new ie,v=new ie,x=new wt,b=new wt,M=new wt,T=new ie,y=new ie;function _(Z,L,D){m.fromBufferAttribute(s,Z),g.fromBufferAttribute(s,L),v.fromBufferAttribute(s,D),x.fromBufferAttribute(c,Z),b.fromBufferAttribute(c,L),M.fromBufferAttribute(c,D),g.sub(m),v.sub(m),b.sub(x),M.sub(x);const G=1/(b.x*M.y-M.x*b.y);isFinite(G)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(v,-b.y).multiplyScalar(G),y.copy(v).multiplyScalar(b.x).addScaledVector(g,-M.x).multiplyScalar(G),h[Z].add(T),h[L].add(T),h[D].add(T),p[Z].add(y),p[L].add(y),p[D].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let Z=0,L=O.length;Z<L;++Z){const D=O[Z],G=D.start,ue=D.count;for(let le=G,ye=G+ue;le<ye;le+=3)_(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const U=new ie,N=new ie,X=new ie,H=new ie;function B(Z){X.fromBufferAttribute(l,Z),H.copy(X);const L=h[Z];U.copy(L),U.sub(X.multiplyScalar(X.dot(L))).normalize(),N.crossVectors(H,L);const G=N.dot(p[Z])<0?-1:1;f.setXYZW(Z,U.x,U.y,U.z,G)}for(let Z=0,L=O.length;Z<L;++Z){const D=O[Z],G=D.start,ue=D.count;for(let le=G,ye=G+ue;le<ye;le+=3)B(e.getX(le+0)),B(e.getX(le+1)),B(e.getX(le+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Mi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,b=s.count;x<b;x++)s.setXYZ(x,0,0,0);const l=new ie,c=new ie,f=new ie,h=new ie,p=new ie,m=new ie,g=new ie,v=new ie;if(e)for(let x=0,b=e.count;x<b;x+=3){const M=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),h.fromBufferAttribute(s,M),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,y),h.add(g),p.add(g),m.add(g),s.setXYZ(M,h.x,h.y,h.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,b=i.count;x<b;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)mn.fromBufferAttribute(e,i),mn.normalize(),e.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function e(h,p){const m=h.array,g=h.itemSize,v=h.normalized,x=new m.constructor(p.length*g);let b=0,M=0;for(let T=0,y=p.length;T<y;T++){h.isInterleavedBufferAttribute?b=p[T]*h.data.stride+h.offset:b=p[T]*g;for(let _=0;_<g;_++)x[M++]=m[b++]}return new Mi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ni,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,s);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,v=m.length;g<v;g++){const x=m[g],b=e(x,s);p.push(b)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,x=m.length;v<x;v++){const b=m[v];g.push(b.toJSON(e.data))}g.length>0&&(l[p]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=e.morphAttributes;for(const m in c){const g=[],v=c[m];for(let x=0,b=v.length;x<b;x++)g.push(v[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mv=new Wt,_r=new z_,Sc=new iu,gv=new ie,bc=new ie,Mc=new ie,Ec=new ie,Oh=new ie,Tc=new ie,vv=new ie,Ac=new ie;class Si extends bn{constructor(e=new ni,i=new Yd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Tc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],v=c[p];g!==0&&(Oh.fromBufferAttribute(v,e),f?Tc.addScaledVector(Oh,g):Tc.addScaledVector(Oh.sub(i),g))}i.add(Tc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(c),_r.copy(e.ray).recast(e.near),!(Sc.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Sc,gv)===null||_r.origin.distanceToSquared(gv)>(e.far-e.near)**2))&&(mv.copy(c).invert(),_r.copy(e.ray).applyMatrix4(mv),!(s.boundingBox!==null&&_r.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,_r)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,b=c.drawRange;if(h!==null)if(Array.isArray(f))for(let M=0,T=x.length;M<T;M++){const y=x[M],_=f[y.materialIndex],O=Math.max(y.start,b.start),U=Math.min(h.count,Math.min(y.start+y.count,b.start+b.count));for(let N=O,X=U;N<X;N+=3){const H=h.getX(N),B=h.getX(N+1),Z=h.getX(N+2);l=wc(this,_,e,s,m,g,v,H,B,Z),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,b.start),T=Math.min(h.count,b.start+b.count);for(let y=M,_=T;y<_;y+=3){const O=h.getX(y),U=h.getX(y+1),N=h.getX(y+2);l=wc(this,f,e,s,m,g,v,O,U,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let M=0,T=x.length;M<T;M++){const y=x[M],_=f[y.materialIndex],O=Math.max(y.start,b.start),U=Math.min(p.count,Math.min(y.start+y.count,b.start+b.count));for(let N=O,X=U;N<X;N+=3){const H=N,B=N+1,Z=N+2;l=wc(this,_,e,s,m,g,v,H,B,Z),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,b.start),T=Math.min(p.count,b.start+b.count);for(let y=M,_=T;y<_;y+=3){const O=y,U=y+1,N=y+2;l=wc(this,f,e,s,m,g,v,O,U,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function SM(r,e,i,s,l,c,f,h){let p;if(e.side===On?p=s.intersectTriangle(f,c,l,!0,h):p=s.intersectTriangle(l,c,f,e.side===Ya,h),p===null)return null;Ac.copy(h),Ac.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Ac);return m<i.near||m>i.far?null:{distance:m,point:Ac.clone(),object:r}}function wc(r,e,i,s,l,c,f,h,p,m){r.getVertexPosition(h,bc),r.getVertexPosition(p,Mc),r.getVertexPosition(m,Ec);const g=SM(r,e,i,s,bc,Mc,Ec,vv);if(g){const v=new ie;xi.getBarycoord(vv,bc,Mc,Ec,v),l&&(g.uv=xi.getInterpolatedAttribute(l,h,p,m,v,new wt)),c&&(g.uv1=xi.getInterpolatedAttribute(c,h,p,m,v,new wt)),f&&(g.normal=xi.getInterpolatedAttribute(f,h,p,m,v,new ie),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:p,c:m,normal:new ie,materialIndex:0};xi.getNormal(bc,Mc,Ec,x.normal),g.face=x,g.barycoord=v}return g}class tl extends ni{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],v=[];let x=0,b=0;M("z","y","x",-1,-1,s,i,e,f,c,0),M("z","y","x",1,-1,s,i,-e,f,c,1),M("x","z","y",1,1,e,s,i,l,f,2),M("x","z","y",1,-1,e,s,-i,l,f,3),M("x","y","z",1,-1,e,i,s,l,c,4),M("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new ti(m,3)),this.setAttribute("normal",new ti(g,3)),this.setAttribute("uv",new ti(v,2));function M(T,y,_,O,U,N,X,H,B,Z,L){const D=N/B,G=X/Z,ue=N/2,le=X/2,ye=H/2,me=B+1,z=Z+1;let K=0,V=0;const Se=new ie;for(let E=0;E<z;E++){const I=E*G-le;for(let ae=0;ae<me;ae++){const ce=ae*D-ue;Se[T]=ce*O,Se[y]=I*U,Se[_]=ye,m.push(Se.x,Se.y,Se.z),Se[T]=0,Se[y]=0,Se[_]=H>0?1:-1,g.push(Se.x,Se.y,Se.z),v.push(ae/B),v.push(1-E/Z),K+=1}}for(let E=0;E<Z;E++)for(let I=0;I<B;I++){const ae=x+I+me*E,ce=x+I+me*(E+1),j=x+(I+1)+me*(E+1),fe=x+(I+1)+me*E;p.push(ae,ce,fe),p.push(ce,j,fe),V+=6}h.addGroup(b,V,L),b+=V,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Un(r){const e={};for(let i=0;i<r.length;i++){const s=zs(r[i]);for(const l in s)e[l]=s[l]}return e}function bM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function G_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const MM={clone:zs,merge:Un};var EM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Za extends Gs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EM,this.fragmentShader=TM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=bM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class V_ extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=ra}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fa=new ie,_v=new wt,xv=new wt;class ei extends V_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z)}getViewSize(e,i){return this.getViewBounds(e,_v,xv),i.subVectors(xv,_v)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Wo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ss=-90,bs=1;class AM extends bn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ei(Ss,bs,e,i);l.layers=this.layers,this.add(l);const c=new ei(Ss,bs,e,i);c.layers=this.layers,this.add(c);const f=new ei(Ss,bs,e,i);f.layers=this.layers,this.add(f);const h=new ei(Ss,bs,e,i);h.layers=this.layers,this.add(h);const p=new ei(Ss,bs,e,i);p.layers=this.layers,this.add(p);const m=new ei(Ss,bs,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,p]=i;for(const m of i)this.remove(m);if(e===ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===qc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(v,x,b),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class k_ extends Gn{constructor(e,i,s,l,c,f,h,p,m,g){e=e!==void 0?e:[],i=i!==void 0?i:Ns,super(e,i,s,l,c,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wM extends Dr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new k_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ni}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new tl(5,5,5),c=new Za({name:"CubemapFromEquirect",uniforms:zs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:On,blending:Wa});c.uniforms.tEquirect.value=i;const f=new Si(l,c),h=i.minFilter;return i.minFilter===wr&&(i.minFilter=Ni),new AM(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i,s,l){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}const Ph=new ie,RM=new ie,CM=new lt;class br{constructor(e=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Ph.subVectors(s,i).cross(RM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Ph),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||CM.getNormalMatrix(e),l=this.coplanarPoint(Ph).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new iu,Rc=new ie;class Zd{constructor(e=new br,i=new br,s=new br,l=new br,c=new br,f=new br){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ra){const s=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],p=l[3],m=l[4],g=l[5],v=l[6],x=l[7],b=l[8],M=l[9],T=l[10],y=l[11],_=l[12],O=l[13],U=l[14],N=l[15];if(s[0].setComponents(p-c,x-m,y-b,N-_).normalize(),s[1].setComponents(p+c,x+m,y+b,N+_).normalize(),s[2].setComponents(p+f,x+g,y+M,N+O).normalize(),s[3].setComponents(p-f,x-g,y-M,N-O).normalize(),s[4].setComponents(p-h,x-v,y-T,N-U).normalize(),i===ra)s[5].setComponents(p+h,x+v,y+T,N+U).normalize();else if(i===qc)s[5].setComponents(h,v,T,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Rc.x=l.normal.x>0?e.max.x:e.min.x,Rc.y=l.normal.y>0?e.max.y:e.min.y,Rc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function j_(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function DM(r){const e=new WeakMap;function i(h,p){const m=h.array,g=h.usage,v=m.byteLength,x=r.createBuffer();r.bindBuffer(p,x),r.bufferData(p,m,g),h.onUploadCallback();let b;if(m instanceof Float32Array)b=r.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=r.SHORT;else if(m instanceof Uint32Array)b=r.UNSIGNED_INT;else if(m instanceof Int32Array)b=r.INT;else if(m instanceof Int8Array)b=r.BYTE;else if(m instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,p,m){const g=p.array,v=p.updateRanges;if(r.bindBuffer(m,h),v.length===0)r.bufferSubData(m,0,g);else{v.sort((b,M)=>b.start-M.start);let x=0;for(let b=1;b<v.length;b++){const M=v[x],T=v[b];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++x,v[x]=T)}v.length=x+1;for(let b=0,M=v.length;b<M;b++){const T=v[b];r.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(r.deleteBuffer(p.buffer),e.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}class au extends ni{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(s),p=Math.floor(l),m=h+1,g=p+1,v=e/h,x=i/p,b=[],M=[],T=[],y=[];for(let _=0;_<g;_++){const O=_*x-f;for(let U=0;U<m;U++){const N=U*v-c;M.push(N,-O,0),T.push(0,0,1),y.push(U/h),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let O=0;O<h;O++){const U=O+m*_,N=O+m*(_+1),X=O+1+m*(_+1),H=O+1+m*_;b.push(U,N,H),b.push(N,X,H)}this.setIndex(b),this.setAttribute("position",new ti(M,3)),this.setAttribute("normal",new ti(T,3)),this.setAttribute("uv",new ti(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.width,e.height,e.widthSegments,e.heightSegments)}}var NM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,BM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,HM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,XM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oE="gl_FragColor = linearToOutputTexel( gl_FragColor );",lE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_E=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ME=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,EE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,CE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ZE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$E=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,e2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,s2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,d2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,p2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,m2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,g2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,y2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,E2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,T2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,A2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,R2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,C2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const D2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,I2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,B2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,F2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,H2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,X2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Z2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Q2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,J2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:NM,alphahash_pars_fragment:UM,alphamap_fragment:LM,alphamap_pars_fragment:OM,alphatest_fragment:PM,alphatest_pars_fragment:zM,aomap_fragment:IM,aomap_pars_fragment:BM,batching_pars_vertex:FM,batching_vertex:HM,begin_vertex:GM,beginnormal_vertex:VM,bsdfs:kM,iridescence_fragment:jM,bumpmap_pars_fragment:XM,clipping_planes_fragment:WM,clipping_planes_pars_fragment:qM,clipping_planes_pars_vertex:YM,clipping_planes_vertex:ZM,color_fragment:KM,color_pars_fragment:QM,color_pars_vertex:JM,color_vertex:$M,common:eE,cube_uv_reflection_fragment:tE,defaultnormal_vertex:nE,displacementmap_pars_vertex:iE,displacementmap_vertex:aE,emissivemap_fragment:rE,emissivemap_pars_fragment:sE,colorspace_fragment:oE,colorspace_pars_fragment:lE,envmap_fragment:cE,envmap_common_pars_fragment:uE,envmap_pars_fragment:fE,envmap_pars_vertex:hE,envmap_physical_pars_fragment:ME,envmap_vertex:dE,fog_vertex:pE,fog_pars_vertex:mE,fog_fragment:gE,fog_pars_fragment:vE,gradientmap_pars_fragment:_E,lightmap_pars_fragment:xE,lights_lambert_fragment:yE,lights_lambert_pars_fragment:SE,lights_pars_begin:bE,lights_toon_fragment:EE,lights_toon_pars_fragment:TE,lights_phong_fragment:AE,lights_phong_pars_fragment:wE,lights_physical_fragment:RE,lights_physical_pars_fragment:CE,lights_fragment_begin:DE,lights_fragment_maps:NE,lights_fragment_end:UE,logdepthbuf_fragment:LE,logdepthbuf_pars_fragment:OE,logdepthbuf_pars_vertex:PE,logdepthbuf_vertex:zE,map_fragment:IE,map_pars_fragment:BE,map_particle_fragment:FE,map_particle_pars_fragment:HE,metalnessmap_fragment:GE,metalnessmap_pars_fragment:VE,morphinstance_vertex:kE,morphcolor_vertex:jE,morphnormal_vertex:XE,morphtarget_pars_vertex:WE,morphtarget_vertex:qE,normal_fragment_begin:YE,normal_fragment_maps:ZE,normal_pars_fragment:KE,normal_pars_vertex:QE,normal_vertex:JE,normalmap_pars_fragment:$E,clearcoat_normal_fragment_begin:e2,clearcoat_normal_fragment_maps:t2,clearcoat_pars_fragment:n2,iridescence_pars_fragment:i2,opaque_fragment:a2,packing:r2,premultiplied_alpha_fragment:s2,project_vertex:o2,dithering_fragment:l2,dithering_pars_fragment:c2,roughnessmap_fragment:u2,roughnessmap_pars_fragment:f2,shadowmap_pars_fragment:h2,shadowmap_pars_vertex:d2,shadowmap_vertex:p2,shadowmask_pars_fragment:m2,skinbase_vertex:g2,skinning_pars_vertex:v2,skinning_vertex:_2,skinnormal_vertex:x2,specularmap_fragment:y2,specularmap_pars_fragment:S2,tonemapping_fragment:b2,tonemapping_pars_fragment:M2,transmission_fragment:E2,transmission_pars_fragment:T2,uv_pars_fragment:A2,uv_pars_vertex:w2,uv_vertex:R2,worldpos_vertex:C2,background_vert:D2,background_frag:N2,backgroundCube_vert:U2,backgroundCube_frag:L2,cube_vert:O2,cube_frag:P2,depth_vert:z2,depth_frag:I2,distanceRGBA_vert:B2,distanceRGBA_frag:F2,equirect_vert:H2,equirect_frag:G2,linedashed_vert:V2,linedashed_frag:k2,meshbasic_vert:j2,meshbasic_frag:X2,meshlambert_vert:W2,meshlambert_frag:q2,meshmatcap_vert:Y2,meshmatcap_frag:Z2,meshnormal_vert:K2,meshnormal_frag:Q2,meshphong_vert:J2,meshphong_frag:$2,meshphysical_vert:eT,meshphysical_frag:tT,meshtoon_vert:nT,meshtoon_frag:iT,points_vert:aT,points_frag:rT,shadow_vert:sT,shadow_frag:oT,sprite_vert:lT,sprite_frag:cT},Ue={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Di={basic:{uniforms:Un([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Un([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Un([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Un([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Un([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Un([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Un([Ue.points,Ue.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Un([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Un([Ue.common,Ue.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Un([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Un([Ue.sprite,Ue.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Un([Ue.common,Ue.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Un([Ue.lights,Ue.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Di.physical={uniforms:Un([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Cc={r:0,b:0,g:0},yr=new Ui,uT=new Wt;function fT(r,e,i,s,l,c,f){const h=new _t(0);let p=c===!0?0:1,m,g,v=null,x=0,b=null;function M(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?i:e).get(U)),U}function T(O){let U=!1;const N=M(O);N===null?_(h,p):N&&N.isColor&&(_(N,1),U=!0);const X=r.xr.getEnvironmentBlendMode();X==="additive"?s.buffers.color.setClear(0,0,0,1,f):X==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(O,U){const N=M(U);N&&(N.isCubeTexture||N.mapping===tu)?(g===void 0&&(g=new Si(new tl(1,1,1),new Za({name:"BackgroundCubeMaterial",uniforms:zs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(X,H,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),yr.copy(U.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(uT.makeRotationFromEuler(yr)),g.material.toneMapped=bt.getTransfer(N.colorSpace)!==It,(v!==N||x!==N.version||b!==r.toneMapping)&&(g.material.needsUpdate=!0,v=N,x=N.version,b=r.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Si(new au(2,2),new Za({name:"BackgroundMaterial",uniforms:zs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=bt.getTransfer(N.colorSpace)!==It,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||x!==N.version||b!==r.toneMapping)&&(m.material.needsUpdate=!0,v=N,x=N.version,b=r.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function _(O,U){O.getRGB(Cc,G_(r)),s.buffers.color.setClear(Cc.r,Cc.g,Cc.b,U,f)}return{getClearColor:function(){return h},setClearColor:function(O,U=1){h.set(O),p=U,_(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,_(h,p)},render:T,addToRenderList:y}}function hT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function h(D,G,ue,le,ye){let me=!1;const z=v(le,ue,G);c!==z&&(c=z,m(c.object)),me=b(D,le,ue,ye),me&&M(D,le,ue,ye),ye!==null&&e.update(ye,r.ELEMENT_ARRAY_BUFFER),(me||f)&&(f=!1,N(D,G,ue,le),ye!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ye).buffer))}function p(){return r.createVertexArray()}function m(D){return r.bindVertexArray(D)}function g(D){return r.deleteVertexArray(D)}function v(D,G,ue){const le=ue.wireframe===!0;let ye=s[D.id];ye===void 0&&(ye={},s[D.id]=ye);let me=ye[G.id];me===void 0&&(me={},ye[G.id]=me);let z=me[le];return z===void 0&&(z=x(p()),me[le]=z),z}function x(D){const G=[],ue=[],le=[];for(let ye=0;ye<i;ye++)G[ye]=0,ue[ye]=0,le[ye]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ue,attributeDivisors:le,object:D,attributes:{},index:null}}function b(D,G,ue,le){const ye=c.attributes,me=G.attributes;let z=0;const K=ue.getAttributes();for(const V in K)if(K[V].location>=0){const E=ye[V];let I=me[V];if(I===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(I=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(I=D.instanceColor)),E===void 0||E.attribute!==I||I&&E.data!==I.data)return!0;z++}return c.attributesNum!==z||c.index!==le}function M(D,G,ue,le){const ye={},me=G.attributes;let z=0;const K=ue.getAttributes();for(const V in K)if(K[V].location>=0){let E=me[V];E===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(E=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(E=D.instanceColor));const I={};I.attribute=E,E&&E.data&&(I.data=E.data),ye[V]=I,z++}c.attributes=ye,c.attributesNum=z,c.index=le}function T(){const D=c.newAttributes;for(let G=0,ue=D.length;G<ue;G++)D[G]=0}function y(D){_(D,0)}function _(D,G){const ue=c.newAttributes,le=c.enabledAttributes,ye=c.attributeDivisors;ue[D]=1,le[D]===0&&(r.enableVertexAttribArray(D),le[D]=1),ye[D]!==G&&(r.vertexAttribDivisor(D,G),ye[D]=G)}function O(){const D=c.newAttributes,G=c.enabledAttributes;for(let ue=0,le=G.length;ue<le;ue++)G[ue]!==D[ue]&&(r.disableVertexAttribArray(ue),G[ue]=0)}function U(D,G,ue,le,ye,me,z){z===!0?r.vertexAttribIPointer(D,G,ue,ye,me):r.vertexAttribPointer(D,G,ue,le,ye,me)}function N(D,G,ue,le){T();const ye=le.attributes,me=ue.getAttributes(),z=G.defaultAttributeValues;for(const K in me){const V=me[K];if(V.location>=0){let Se=ye[K];if(Se===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),Se!==void 0){const E=Se.normalized,I=Se.itemSize,ae=e.get(Se);if(ae===void 0)continue;const ce=ae.buffer,j=ae.type,fe=ae.bytesPerElement,de=j===r.INT||j===r.UNSIGNED_INT||Se.gpuType===Gd;if(Se.isInterleavedBufferAttribute){const ve=Se.data,Re=ve.stride,Fe=Se.offset;if(ve.isInstancedInterleavedBuffer){for(let We=0;We<V.locationSize;We++)_(V.location+We,ve.meshPerAttribute);D.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let We=0;We<V.locationSize;We++)y(V.location+We);r.bindBuffer(r.ARRAY_BUFFER,ce);for(let We=0;We<V.locationSize;We++)U(V.location+We,I/V.locationSize,j,E,Re*fe,(Fe+I/V.locationSize*We)*fe,de)}else{if(Se.isInstancedBufferAttribute){for(let ve=0;ve<V.locationSize;ve++)_(V.location+ve,Se.meshPerAttribute);D.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ve=0;ve<V.locationSize;ve++)y(V.location+ve);r.bindBuffer(r.ARRAY_BUFFER,ce);for(let ve=0;ve<V.locationSize;ve++)U(V.location+ve,I/V.locationSize,j,E,I*fe,I/V.locationSize*ve*fe,de)}}else if(z!==void 0){const E=z[K];if(E!==void 0)switch(E.length){case 2:r.vertexAttrib2fv(V.location,E);break;case 3:r.vertexAttrib3fv(V.location,E);break;case 4:r.vertexAttrib4fv(V.location,E);break;default:r.vertexAttrib1fv(V.location,E)}}}}O()}function X(){Z();for(const D in s){const G=s[D];for(const ue in G){const le=G[ue];for(const ye in le)g(le[ye].object),delete le[ye];delete G[ue]}delete s[D]}}function H(D){if(s[D.id]===void 0)return;const G=s[D.id];for(const ue in G){const le=G[ue];for(const ye in le)g(le[ye].object),delete le[ye];delete G[ue]}delete s[D.id]}function B(D){for(const G in s){const ue=s[G];if(ue[D.id]===void 0)continue;const le=ue[D.id];for(const ye in le)g(le[ye].object),delete le[ye];delete ue[D.id]}}function Z(){L(),f=!0,c!==l&&(c=l,m(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:L,dispose:X,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:y,disableUnusedAttributes:O}}function dT(r,e,i){let s;function l(m){s=m}function c(m,g){r.drawArrays(s,m,g),i.update(g,s,1)}function f(m,g,v){v!==0&&(r.drawArraysInstanced(s,m,g,v),i.update(g,s,v))}function h(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,v);let b=0;for(let M=0;M<v;M++)b+=g[M];i.update(b,s,1)}function p(m,g,v,x){if(v===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let M=0;M<m.length;M++)f(m[M],g[M],x[M]);else{b.multiDrawArraysInstancedWEBGL(s,m,0,g,0,x,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T]*x[T];i.update(M,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function pT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==yi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const Z=B===Jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==oa&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==aa&&!Z)}function p(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),X=M>0,H=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:b,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:N,vertexTextures:X,maxSamples:H}}function mT(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new br,h=new lt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const b=v.length!==0||x||s!==0||l;return l=x,s=v.length,b},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,b){const M=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,_=r.get(v);if(!l||M===null||M.length===0||c&&!y)c?g(null):m();else{const O=c?0:s,U=O*4;let N=_.clippingState||null;p.value=N,N=g(M,x,U,b);for(let X=0;X!==U;++X)N[X]=i[X];_.clippingState=N,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,x,b,M){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=p.value,M!==!0||y===null){const _=b+T*4,O=x.matrixWorldInverse;h.getNormalMatrix(O),(y===null||y.length<_)&&(y=new Float32Array(_));for(let U=0,N=b;U!==T;++U,N+=4)f.copy(v[U]).applyMatrix4(O,h),f.normal.toArray(y,N),y[N+3]=f.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function gT(r){let e=new WeakMap;function i(f,h){return h===ad?f.mapping=Ns:h===rd&&(f.mapping=Us),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===ad||h===rd)if(e.has(f)){const p=e.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new wM(p.height);return m.fromEquirectangularTexture(r,f),e.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}class vT extends V_{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ts=4,yv=[.125,.215,.35,.446,.526,.582],Tr=20,zh=new vT,Sv=new _t;let Ih=null,Bh=0,Fh=0,Hh=!1;const Mr=(1+Math.sqrt(5))/2,Ms=1/Mr,bv=[new ie(-Mr,Ms,0),new ie(Mr,Ms,0),new ie(-Ms,0,Mr),new ie(Ms,0,Mr),new ie(0,Mr,-Ms),new ie(0,Mr,Ms),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)];class Mv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){Ih=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,s,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ih,Bh,Fh),this._renderer.xr.enabled=Hh,e.scissorTest=!1,Dc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ns||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ih=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Jo,format:yi,colorSpace:Bs,depthBuffer:!1},l=Ev(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ev(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_T(c)),this._blurMaterial=xT(c,e,i)}return l}_compileMaterial(e){const i=new Si(this._lodPlanes[0],e);this._renderer.compile(i,zh)}_sceneToCubeUV(e,i,s,l){const h=new ei(90,1,i,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(Sv),g.toneMapping=qa,g.autoClear=!1;const b=new Yd({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),M=new Si(new tl,b);let T=!1;const y=e.background;y?y.isColor&&(b.color.copy(y),e.background=null,T=!0):(b.color.copy(Sv),T=!0);for(let _=0;_<6;_++){const O=_%3;O===0?(h.up.set(0,p[_],0),h.lookAt(m[_],0,0)):O===1?(h.up.set(0,0,p[_]),h.lookAt(0,m[_],0)):(h.up.set(0,p[_],0),h.lookAt(0,0,m[_]));const U=this._cubeSize;Dc(l,O*U,_>2?U:0,U,U),g.setRenderTarget(l),T&&g.render(M,h),g.render(e,h)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=y}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ns||e.mapping===Us;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Av()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Si(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;Dc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,zh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=bv[(l-c-1)%bv.length];this._blur(e,c-1,c,f,h)}i.autoClear=s}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Si(this._lodPlanes[l],m),x=m.uniforms,b=this._sizeLods[s]-1,M=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Tr-1),T=c/M,y=isFinite(c)?1+Math.floor(g*T):Tr;y>Tr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Tr}`);const _=[];let O=0;for(let B=0;B<Tr;++B){const Z=B/T,L=Math.exp(-Z*Z/2);_.push(L),B===0?O+=L:B<y&&(O+=2*L)}for(let B=0;B<_.length;B++)_[B]=_[B]/O;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=M,x.mipInt.value=U-s;const N=this._sizeLods[l],X=3*N*(l>U-Ts?l-U+Ts:0),H=4*(this._cubeSize-N);Dc(i,X,H,3*N,2*N),p.setRenderTarget(i),p.render(v,zh)}}function _T(r){const e=[],i=[],s=[];let l=r;const c=r-Ts+1+yv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let p=1/h;f>r-Ts?p=yv[f-r+Ts-1]:f===0&&(p=0),s.push(p);const m=1/(h-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],b=6,M=6,T=3,y=2,_=1,O=new Float32Array(T*M*b),U=new Float32Array(y*M*b),N=new Float32Array(_*M*b);for(let H=0;H<b;H++){const B=H%3*2/3-1,Z=H>2?0:-1,L=[B,Z,0,B+2/3,Z,0,B+2/3,Z+1,0,B,Z,0,B+2/3,Z+1,0,B,Z+1,0];O.set(L,T*M*H),U.set(x,y*M*H);const D=[H,H,H,H,H,H];N.set(D,_*M*H)}const X=new ni;X.setAttribute("position",new Mi(O,T)),X.setAttribute("uv",new Mi(U,y)),X.setAttribute("faceIndex",new Mi(N,_)),e.push(X),l>Ts&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function Ev(r,e,i){const s=new Dr(r,e,i);return s.texture.mapping=tu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dc(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function xT(r,e,i){const s=new Float32Array(Tr),l=new ie(0,1,0);return new Za({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Tv(){return new Za({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Av(){return new Za({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Kd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yT(r){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const p=h.mapping,m=p===ad||p===rd,g=p===Ns||p===Us;if(m||g){let v=e.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new Mv(r)),v=m?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const b=h.image;return m&&b&&b.height>0||g&&b&&l(b)?(i===null&&(i=new Mv(r)),v=m?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function ST(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&jo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function bT(r,e,i,s){const l={},c=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);for(const M in x.morphAttributes){const T=x.morphAttributes[M];for(let y=0,_=T.length;y<_;y++)e.remove(T[y])}x.removeEventListener("dispose",f),delete l[x.id];const b=c.get(x);b&&(e.remove(b),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function p(v){const x=v.attributes;for(const M in x)e.update(x[M],r.ARRAY_BUFFER);const b=v.morphAttributes;for(const M in b){const T=b[M];for(let y=0,_=T.length;y<_;y++)e.update(T[y],r.ARRAY_BUFFER)}}function m(v){const x=[],b=v.index,M=v.attributes.position;let T=0;if(b!==null){const O=b.array;T=b.version;for(let U=0,N=O.length;U<N;U+=3){const X=O[U+0],H=O[U+1],B=O[U+2];x.push(X,H,H,B,B,X)}}else if(M!==void 0){const O=M.array;T=M.version;for(let U=0,N=O.length/3-1;U<N;U+=3){const X=U+0,H=U+1,B=U+2;x.push(X,H,H,B,B,X)}}else return;const y=new(L_(x)?H_:F_)(x,1);y.version=T;const _=c.get(v);_&&e.remove(_),c.set(v,y)}function g(v){const x=c.get(v);if(x){const b=v.index;b!==null&&x.version<b.version&&m(v)}else m(v);return c.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function MT(r,e,i){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function p(x,b){r.drawElements(s,b,c,x*f),i.update(b,s,1)}function m(x,b,M){M!==0&&(r.drawElementsInstanced(s,b,c,x*f,M),i.update(b,s,M))}function g(x,b,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,c,x,0,M);let y=0;for(let _=0;_<M;_++)y+=b[_];i.update(y,s,1)}function v(x,b,M,T){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)m(x[_]/f,b[_],T[_]);else{y.multiDrawElementsInstancedWEBGL(s,b,0,c,x,0,T,0,M);let _=0;for(let O=0;O<M;O++)_+=b[O]*T[O];i.update(_,s,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function ET(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function TT(r,e,i){const s=new WeakMap,l=new Kt;function c(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==v){let D=function(){Z.dispose(),s.delete(h),h.removeEventListener("dispose",D)};var b=D;x!==void 0&&x.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let N=0;M===!0&&(N=1),T===!0&&(N=2),y===!0&&(N=3);let X=h.attributes.position.count*N,H=1;X>e.maxTextureSize&&(H=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const B=new Float32Array(X*H*4*v),Z=new P_(B,X,H,v);Z.type=aa,Z.needsUpdate=!0;const L=N*4;for(let G=0;G<v;G++){const ue=_[G],le=O[G],ye=U[G],me=X*H*4*G;for(let z=0;z<ue.count;z++){const K=z*L;M===!0&&(l.fromBufferAttribute(ue,z),B[me+K+0]=l.x,B[me+K+1]=l.y,B[me+K+2]=l.z,B[me+K+3]=0),T===!0&&(l.fromBufferAttribute(le,z),B[me+K+4]=l.x,B[me+K+5]=l.y,B[me+K+6]=l.z,B[me+K+7]=0),y===!0&&(l.fromBufferAttribute(ye,z),B[me+K+8]=l.x,B[me+K+9]=l.y,B[me+K+10]=l.z,B[me+K+11]=ye.itemSize===4?l.w:1)}}x={count:v,texture:Z,size:new wt(X,H)},s.set(h,x),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let M=0;for(let y=0;y<m.length;y++)M+=m[y];const T=h.morphTargetsRelative?1:1-M;p.getUniforms().setValue(r,"morphTargetBaseInfluence",T),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function AT(r,e,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,g=p.geometry,v=e.get(p,g);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return v}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}class X_ extends Gn{constructor(e,i,s,l,c,f,h,p,m,g=ws){if(g!==ws&&g!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===ws&&(s=Cr),s===void 0&&g===Os&&(s=Ls),super(null,l,c,f,h,p,g,s,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:bi,this.minFilter=p!==void 0?p:bi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const W_=new Gn,wv=new X_(1,1),q_=new P_,Y_=new fM,Z_=new k_,Rv=[],Cv=[],Dv=new Float32Array(16),Nv=new Float32Array(9),Uv=new Float32Array(4);function Vs(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Rv[l];if(c===void 0&&(c=new Float32Array(l),Rv[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(c,h)}return c}function ln(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function cn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function ru(r,e){let i=Cv[e];i===void 0&&(i=new Int32Array(e),Cv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function wT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function RT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;r.uniform2fv(this.addr,e),cn(i,e)}}function CT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(ln(i,e))return;r.uniform3fv(this.addr,e),cn(i,e)}}function DT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;r.uniform4fv(this.addr,e),cn(i,e)}}function NT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(ln(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,s))return;Uv.set(s),r.uniformMatrix2fv(this.addr,!1,Uv),cn(i,s)}}function UT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(ln(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,s))return;Nv.set(s),r.uniformMatrix3fv(this.addr,!1,Nv),cn(i,s)}}function LT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(ln(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,s))return;Dv.set(s),r.uniformMatrix4fv(this.addr,!1,Dv),cn(i,s)}}function OT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function PT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;r.uniform2iv(this.addr,e),cn(i,e)}}function zT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;r.uniform3iv(this.addr,e),cn(i,e)}}function IT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;r.uniform4iv(this.addr,e),cn(i,e)}}function BT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function FT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;r.uniform2uiv(this.addr,e),cn(i,e)}}function HT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;r.uniform3uiv(this.addr,e),cn(i,e)}}function GT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;r.uniform4uiv(this.addr,e),cn(i,e)}}function VT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(wv.compareFunction=U_,c=wv):c=W_,i.setTexture2D(e||c,l)}function kT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Y_,l)}function jT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Z_,l)}function XT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||q_,l)}function WT(r){switch(r){case 5126:return wT;case 35664:return RT;case 35665:return CT;case 35666:return DT;case 35674:return NT;case 35675:return UT;case 35676:return LT;case 5124:case 35670:return OT;case 35667:case 35671:return PT;case 35668:case 35672:return zT;case 35669:case 35673:return IT;case 5125:return BT;case 36294:return FT;case 36295:return HT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return jT;case 36289:case 36303:case 36311:case 36292:return XT}}function qT(r,e){r.uniform1fv(this.addr,e)}function YT(r,e){const i=Vs(e,this.size,2);r.uniform2fv(this.addr,i)}function ZT(r,e){const i=Vs(e,this.size,3);r.uniform3fv(this.addr,i)}function KT(r,e){const i=Vs(e,this.size,4);r.uniform4fv(this.addr,i)}function QT(r,e){const i=Vs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function JT(r,e){const i=Vs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function $T(r,e){const i=Vs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function eA(r,e){r.uniform1iv(this.addr,e)}function tA(r,e){r.uniform2iv(this.addr,e)}function nA(r,e){r.uniform3iv(this.addr,e)}function iA(r,e){r.uniform4iv(this.addr,e)}function aA(r,e){r.uniform1uiv(this.addr,e)}function rA(r,e){r.uniform2uiv(this.addr,e)}function sA(r,e){r.uniform3uiv(this.addr,e)}function oA(r,e){r.uniform4uiv(this.addr,e)}function lA(r,e,i){const s=this.cache,l=e.length,c=ru(i,l);ln(s,c)||(r.uniform1iv(this.addr,c),cn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||W_,c[f])}function cA(r,e,i){const s=this.cache,l=e.length,c=ru(i,l);ln(s,c)||(r.uniform1iv(this.addr,c),cn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Y_,c[f])}function uA(r,e,i){const s=this.cache,l=e.length,c=ru(i,l);ln(s,c)||(r.uniform1iv(this.addr,c),cn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Z_,c[f])}function fA(r,e,i){const s=this.cache,l=e.length,c=ru(i,l);ln(s,c)||(r.uniform1iv(this.addr,c),cn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||q_,c[f])}function hA(r){switch(r){case 5126:return qT;case 35664:return YT;case 35665:return ZT;case 35666:return KT;case 35674:return QT;case 35675:return JT;case 35676:return $T;case 5124:case 35670:return eA;case 35667:case 35671:return tA;case 35668:case 35672:return nA;case 35669:case 35673:return iA;case 5125:return aA;case 36294:return rA;case 36295:return sA;case 36296:return oA;case 35678:case 36198:case 36298:case 36306:case 35682:return lA;case 35679:case 36299:case 36307:return cA;case 35680:case 36300:case 36308:case 36293:return uA;case 36289:case 36303:case 36311:case 36292:return fA}}class dA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=WT(i.type)}}class pA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=hA(i.type)}}class mA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const Gh=/(\w+)(\])?(\[|\.)?/g;function Lv(r,e){r.seq.push(e),r.map[e.id]=e}function gA(r,e,i){const s=r.name,l=s.length;for(Gh.lastIndex=0;;){const c=Gh.exec(s),f=Gh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){Lv(i,m===void 0?new dA(h,r,e):new pA(h,r,e));break}else{let v=i.map[h];v===void 0&&(v=new mA(h),Lv(i,v)),i=v}}}class Gc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);gA(c,f,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function Ov(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const vA=37297;let _A=0;function xA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const Pv=new lt;function yA(r){bt._getMatrix(Pv,bt.workingColorSpace,r);const e=`mat3( ${Pv.elements.map(i=>i.toFixed(4))} )`;switch(bt.getTransfer(r)){case nu:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function zv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=r.getShaderInfoLog(e).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+xA(r.getShaderSource(e),f)}else return l}function SA(r,e){const i=yA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function bA(r,e){let i;switch(e){case Mb:i="Linear";break;case Eb:i="Reinhard";break;case Tb:i="Cineon";break;case Ab:i="ACESFilmic";break;case Rb:i="AgX";break;case Cb:i="Neutral";break;case wb:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nc=new ie;function MA(){bt.getLuminanceCoefficients(Nc);const r=Nc.x.toFixed(4),e=Nc.y.toFixed(4),i=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function TA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function AA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function Xo(r){return r!==""}function Iv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(r){return r.replace(wA,CA)}const RA=new Map;function CA(r,e){let i=ct[e];if(i===void 0){const s=RA.get(e);if(s!==void 0)i=ct[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Od(i)}const DA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fv(r){return r.replace(DA,NA)}function NA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Hv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===x_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===nb?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===na&&(e="SHADOWMAP_TYPE_VSM"),e}function LA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ns:case Us:e="ENVMAP_TYPE_CUBE";break;case tu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function PA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Hd:e="ENVMAP_BLENDING_MULTIPLY";break;case Sb:e="ENVMAP_BLENDING_MIX";break;case bb:e="ENVMAP_BLENDING_ADD";break}return e}function zA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function IA(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=UA(i),m=LA(i),g=OA(i),v=PA(i),x=zA(i),b=EA(i),M=TA(c),T=l.createProgram();let y,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Xo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Xo).join(`
`),_.length>0&&(_+=`
`)):(y=[Hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),_=[Hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?ct.tonemapping_pars_fragment:"",i.toneMapping!==qa?bA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,SA("linearToOutputTexel",i.outputColorSpace),MA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),f=Od(f),f=Iv(f,i),f=Bv(f,i),h=Od(h),h=Iv(h,i),h=Bv(h,i),f=Fv(f),h=Fv(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===J0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===J0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=O+y+f,N=O+_+h,X=Ov(l,l.VERTEX_SHADER,U),H=Ov(l,l.FRAGMENT_SHADER,N);l.attachShader(T,X),l.attachShader(T,H),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function B(G){if(r.debug.checkShaderErrors){const ue=l.getProgramInfoLog(T).trim(),le=l.getShaderInfoLog(X).trim(),ye=l.getShaderInfoLog(H).trim();let me=!0,z=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(me=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,X,H);else{const K=zv(l,X,"vertex"),V=zv(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ue+`
`+K+`
`+V)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(le===""||ye==="")&&(z=!1);z&&(G.diagnostics={runnable:me,programLog:ue,vertexShader:{log:le,prefix:y},fragmentShader:{log:ye,prefix:_}})}l.deleteShader(X),l.deleteShader(H),Z=new Gc(l,T),L=AA(l,T)}let Z;this.getUniforms=function(){return Z===void 0&&B(this),Z};let L;this.getAttributes=function(){return L===void 0&&B(this),L};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,vA)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=_A++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=X,this.fragmentShader=H,this}let BA=0;class FA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new HA(e),i.set(e,s)),s}}class HA{constructor(e){this.id=BA++,this.code=e,this.usedTimes=0}}function GA(r,e,i,s,l,c,f){const h=new I_,p=new FA,m=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let b=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return m.add(L),L===0?"uv":`uv${L}`}function y(L,D,G,ue,le){const ye=ue.fog,me=le.geometry,z=L.isMeshStandardMaterial?ue.environment:null,K=(L.isMeshStandardMaterial?i:e).get(L.envMap||z),V=K&&K.mapping===tu?K.image.height:null,Se=M[L.type];L.precision!==null&&(b=l.getMaxPrecision(L.precision),b!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",b,"instead."));const E=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,I=E!==void 0?E.length:0;let ae=0;me.morphAttributes.position!==void 0&&(ae=1),me.morphAttributes.normal!==void 0&&(ae=2),me.morphAttributes.color!==void 0&&(ae=3);let ce,j,fe,de;if(Se){const Mt=Di[Se];ce=Mt.vertexShader,j=Mt.fragmentShader}else ce=L.vertexShader,j=L.fragmentShader,p.update(L),fe=p.getVertexShaderID(L),de=p.getFragmentShaderID(L);const ve=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),Fe=le.isInstancedMesh===!0,We=le.isBatchedMesh===!0,at=!!L.map,rt=!!L.matcap,Nt=!!K,q=!!L.aoMap,gn=!!L.lightMap,ut=!!L.bumpMap,it=!!L.normalMap,Ze=!!L.displacementMap,Ut=!!L.emissiveMap,qe=!!L.metalnessMap,P=!!L.roughnessMap,w=L.anisotropy>0,te=L.clearcoat>0,Ee=L.dispersion>0,Te=L.iridescence>0,_e=L.sheen>0,Ie=L.transmission>0,Ce=w&&!!L.anisotropyMap,De=te&&!!L.clearcoatMap,gt=te&&!!L.clearcoatNormalMap,Ae=te&&!!L.clearcoatRoughnessMap,Be=Te&&!!L.iridescenceMap,Ye=Te&&!!L.iridescenceThicknessMap,Je=_e&&!!L.sheenColorMap,Pe=_e&&!!L.sheenRoughnessMap,ft=!!L.specularMap,nt=!!L.specularColorMap,Lt=!!L.specularIntensityMap,W=Ie&&!!L.transmissionMap,Ne=Ie&&!!L.thicknessMap,pe=!!L.gradientMap,be=!!L.alphaMap,ze=L.alphaTest>0,Le=!!L.alphaHash,st=!!L.extensions;let Ht=qa;L.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ht=r.toneMapping);const $t={shaderID:Se,shaderType:L.type,shaderName:L.name,vertexShader:ce,fragmentShader:j,defines:L.defines,customVertexShaderID:fe,customFragmentShaderID:de,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:b,batching:We,batchingColor:We&&le._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&le.instanceColor!==null,instancingMorph:Fe&&le.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?r.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Bs,alphaToCoverage:!!L.alphaToCoverage,map:at,matcap:rt,envMap:Nt,envMapMode:Nt&&K.mapping,envMapCubeUVHeight:V,aoMap:q,lightMap:gn,bumpMap:ut,normalMap:it,displacementMap:x&&Ze,emissiveMap:Ut,normalMapObjectSpace:it&&L.normalMapType===Lb,normalMapTangentSpace:it&&L.normalMapType===N_,metalnessMap:qe,roughnessMap:P,anisotropy:w,anisotropyMap:Ce,clearcoat:te,clearcoatMap:De,clearcoatNormalMap:gt,clearcoatRoughnessMap:Ae,dispersion:Ee,iridescence:Te,iridescenceMap:Be,iridescenceThicknessMap:Ye,sheen:_e,sheenColorMap:Je,sheenRoughnessMap:Pe,specularMap:ft,specularColorMap:nt,specularIntensityMap:Lt,transmission:Ie,transmissionMap:W,thicknessMap:Ne,gradientMap:pe,opaque:L.transparent===!1&&L.blending===As&&L.alphaToCoverage===!1,alphaMap:be,alphaTest:ze,alphaHash:Le,combine:L.combine,mapUv:at&&T(L.map.channel),aoMapUv:q&&T(L.aoMap.channel),lightMapUv:gn&&T(L.lightMap.channel),bumpMapUv:ut&&T(L.bumpMap.channel),normalMapUv:it&&T(L.normalMap.channel),displacementMapUv:Ze&&T(L.displacementMap.channel),emissiveMapUv:Ut&&T(L.emissiveMap.channel),metalnessMapUv:qe&&T(L.metalnessMap.channel),roughnessMapUv:P&&T(L.roughnessMap.channel),anisotropyMapUv:Ce&&T(L.anisotropyMap.channel),clearcoatMapUv:De&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:gt&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&T(L.sheenRoughnessMap.channel),specularMapUv:ft&&T(L.specularMap.channel),specularColorMapUv:nt&&T(L.specularColorMap.channel),specularIntensityMapUv:Lt&&T(L.specularIntensityMap.channel),transmissionMapUv:W&&T(L.transmissionMap.channel),thicknessMapUv:Ne&&T(L.thicknessMap.channel),alphaMapUv:be&&T(L.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(it||w),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!me.attributes.uv&&(at||be),fog:!!ye,useFog:L.fog===!0,fogExp2:!!ye&&ye.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Re,skinning:le.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ae,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:L.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ht,decodeVideoTexture:at&&L.map.isVideoTexture===!0&&bt.getTransfer(L.map.colorSpace)===It,decodeVideoTextureEmissive:Ut&&L.emissiveMap.isVideoTexture===!0&&bt.getTransfer(L.emissiveMap.colorSpace)===It,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===ia,flipSided:L.side===On,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:st&&L.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&L.extensions.multiDraw===!0||We)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return $t.vertexUv1s=m.has(1),$t.vertexUv2s=m.has(2),$t.vertexUv3s=m.has(3),m.clear(),$t}function _(L){const D=[];if(L.shaderID?D.push(L.shaderID):(D.push(L.customVertexShaderID),D.push(L.customFragmentShaderID)),L.defines!==void 0)for(const G in L.defines)D.push(G),D.push(L.defines[G]);return L.isRawShaderMaterial===!1&&(O(D,L),U(D,L),D.push(r.outputColorSpace)),D.push(L.customProgramCacheKey),D.join()}function O(L,D){L.push(D.precision),L.push(D.outputColorSpace),L.push(D.envMapMode),L.push(D.envMapCubeUVHeight),L.push(D.mapUv),L.push(D.alphaMapUv),L.push(D.lightMapUv),L.push(D.aoMapUv),L.push(D.bumpMapUv),L.push(D.normalMapUv),L.push(D.displacementMapUv),L.push(D.emissiveMapUv),L.push(D.metalnessMapUv),L.push(D.roughnessMapUv),L.push(D.anisotropyMapUv),L.push(D.clearcoatMapUv),L.push(D.clearcoatNormalMapUv),L.push(D.clearcoatRoughnessMapUv),L.push(D.iridescenceMapUv),L.push(D.iridescenceThicknessMapUv),L.push(D.sheenColorMapUv),L.push(D.sheenRoughnessMapUv),L.push(D.specularMapUv),L.push(D.specularColorMapUv),L.push(D.specularIntensityMapUv),L.push(D.transmissionMapUv),L.push(D.thicknessMapUv),L.push(D.combine),L.push(D.fogExp2),L.push(D.sizeAttenuation),L.push(D.morphTargetsCount),L.push(D.morphAttributeCount),L.push(D.numDirLights),L.push(D.numPointLights),L.push(D.numSpotLights),L.push(D.numSpotLightMaps),L.push(D.numHemiLights),L.push(D.numRectAreaLights),L.push(D.numDirLightShadows),L.push(D.numPointLightShadows),L.push(D.numSpotLightShadows),L.push(D.numSpotLightShadowsWithMaps),L.push(D.numLightProbes),L.push(D.shadowMapType),L.push(D.toneMapping),L.push(D.numClippingPlanes),L.push(D.numClipIntersection),L.push(D.depthPacking)}function U(L,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),L.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reverseDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),L.push(h.mask)}function N(L){const D=M[L.type];let G;if(D){const ue=Di[D];G=MM.clone(ue.uniforms)}else G=L.uniforms;return G}function X(L,D){let G;for(let ue=0,le=g.length;ue<le;ue++){const ye=g[ue];if(ye.cacheKey===D){G=ye,++G.usedTimes;break}}return G===void 0&&(G=new IA(r,D,L,c),g.push(G)),G}function H(L){if(--L.usedTimes===0){const D=g.indexOf(L);g[D]=g[g.length-1],g.pop(),L.destroy()}}function B(L){p.remove(L)}function Z(){p.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:N,acquireProgram:X,releaseProgram:H,releaseShaderCache:B,programs:g,dispose:Z}}function VA(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,p){r.get(f)[h]=p}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function kA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Gv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Vv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(v,x,b,M,T,y){let _=r[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:b,groupOrder:M,renderOrder:v.renderOrder,z:T,group:y},r[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=b,_.groupOrder=M,_.renderOrder=v.renderOrder,_.z=T,_.group=y),e++,_}function h(v,x,b,M,T,y){const _=f(v,x,b,M,T,y);b.transmission>0?s.push(_):b.transparent===!0?l.push(_):i.push(_)}function p(v,x,b,M,T,y){const _=f(v,x,b,M,T,y);b.transmission>0?s.unshift(_):b.transparent===!0?l.unshift(_):i.unshift(_)}function m(v,x){i.length>1&&i.sort(v||kA),s.length>1&&s.sort(x||Gv),l.length>1&&l.sort(x||Gv)}function g(){for(let v=e,x=r.length;v<x;v++){const b=r[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:p,finish:g,sort:m}}function jA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new Vv,r.set(s,[f])):l>=c.length?(f=new Vv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function XA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ie,color:new _t};break;case"SpotLight":i={position:new ie,direction:new ie,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new _t,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":i={color:new _t,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=i,i}}}function WA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let qA=0;function YA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ZA(r){const e=new XA,i=WA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new ie);const l=new ie,c=new Wt,f=new Wt;function h(m){let g=0,v=0,x=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let b=0,M=0,T=0,y=0,_=0,O=0,U=0,N=0,X=0,H=0,B=0;m.sort(YA);for(let L=0,D=m.length;L<D;L++){const G=m[L],ue=G.color,le=G.intensity,ye=G.distance,me=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=ue.r*le,v+=ue.g*le,x+=ue.b*le;else if(G.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(G.sh.coefficients[z],le);B++}else if(G.isDirectionalLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const K=G.shadow,V=i.get(G);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,s.directionalShadow[b]=V,s.directionalShadowMap[b]=me,s.directionalShadowMatrix[b]=G.shadow.matrix,O++}s.directional[b]=z,b++}else if(G.isSpotLight){const z=e.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(ue).multiplyScalar(le),z.distance=ye,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,s.spot[T]=z;const K=G.shadow;if(G.map&&(s.spotLightMap[X]=G.map,X++,K.updateMatrices(G),G.castShadow&&H++),s.spotLightMatrix[T]=K.matrix,G.castShadow){const V=i.get(G);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,s.spotShadow[T]=V,s.spotShadowMap[T]=me,N++}T++}else if(G.isRectAreaLight){const z=e.get(G);z.color.copy(ue).multiplyScalar(le),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=z,y++}else if(G.isPointLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const K=G.shadow,V=i.get(G);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,s.pointShadow[M]=V,s.pointShadowMap[M]=me,s.pointShadowMatrix[M]=G.shadow.matrix,U++}s.point[M]=z,M++}else if(G.isHemisphereLight){const z=e.get(G);z.skyColor.copy(G.color).multiplyScalar(le),z.groundColor.copy(G.groundColor).multiplyScalar(le),s.hemi[_]=z,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const Z=s.hash;(Z.directionalLength!==b||Z.pointLength!==M||Z.spotLength!==T||Z.rectAreaLength!==y||Z.hemiLength!==_||Z.numDirectionalShadows!==O||Z.numPointShadows!==U||Z.numSpotShadows!==N||Z.numSpotMaps!==X||Z.numLightProbes!==B)&&(s.directional.length=b,s.spot.length=T,s.rectArea.length=y,s.point.length=M,s.hemi.length=_,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=N+X-H,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=B,Z.directionalLength=b,Z.pointLength=M,Z.spotLength=T,Z.rectAreaLength=y,Z.hemiLength=_,Z.numDirectionalShadows=O,Z.numPointShadows=U,Z.numSpotShadows=N,Z.numSpotMaps=X,Z.numLightProbes=B,s.version=qA++)}function p(m,g){let v=0,x=0,b=0,M=0,T=0;const y=g.matrixWorldInverse;for(let _=0,O=m.length;_<O;_++){const U=m[_];if(U.isDirectionalLight){const N=s.directional[v];N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),v++}else if(U.isSpotLight){const N=s.spot[b];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),b++}else if(U.isRectAreaLight){const N=s.rectArea[M];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(y),f.identity(),c.copy(U.matrixWorld),c.premultiply(y),f.extractRotation(c),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),M++}else if(U.isPointLight){const N=s.point[x];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const N=s.hemi[T];N.direction.setFromMatrixPosition(U.matrixWorld),N.direction.transformDirection(y),T++}}}return{setup:h,setupView:p,state:s}}function kv(r){const e=new ZA(r),i=[],s=[];function l(g){m.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function h(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function KA(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new kv(r),e.set(l,[h])):c>=f.length?(h=new kv(r),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}class QA extends Gs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JA extends Gs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function t3(r,e,i){let s=new Zd;const l=new wt,c=new wt,f=new Kt,h=new QA({depthPacking:Ub}),p=new JA,m={},g=i.maxTextureSize,v={[Ya]:On,[On]:Ya,[ia]:ia},x=new Za({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:$A,fragmentShader:e3}),b=x.clone();b.defines.HORIZONTAL_PASS=1;const M=new ni;M.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Si(M,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=x_;let _=this.type;this.render=function(H,B,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const L=r.getRenderTarget(),D=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),ue=r.state;ue.setBlending(Wa),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const le=_!==na&&this.type===na,ye=_===na&&this.type!==na;for(let me=0,z=H.length;me<z;me++){const K=H[me],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const Se=V.getFrameExtents();if(l.multiply(Se),c.copy(V.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Se.x),l.x=c.x*Se.x,V.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Se.y),l.y=c.y*Se.y,V.mapSize.y=c.y)),V.map===null||le===!0||ye===!0){const I=this.type!==na?{minFilter:bi,magFilter:bi}:{};V.map!==null&&V.map.dispose(),V.map=new Dr(l.x,l.y,I),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const E=V.getViewportCount();for(let I=0;I<E;I++){const ae=V.getViewport(I);f.set(c.x*ae.x,c.y*ae.y,c.x*ae.z,c.y*ae.w),ue.viewport(f),V.updateMatrices(K,I),s=V.getFrustum(),N(B,Z,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===na&&O(V,Z),V.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(L,D,G)};function O(H,B){const Z=e.update(T);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,b.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,b.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Dr(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(B,null,Z,x,T,null),b.uniforms.shadow_pass.value=H.mapPass.texture,b.uniforms.resolution.value=H.mapSize,b.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(B,null,Z,b,T,null)}function U(H,B,Z,L){let D=null;const G=Z.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)D=G;else if(D=Z.isPointLight===!0?p:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const ue=D.uuid,le=B.uuid;let ye=m[ue];ye===void 0&&(ye={},m[ue]=ye);let me=ye[le];me===void 0&&(me=D.clone(),ye[le]=me,B.addEventListener("dispose",X)),D=me}if(D.visible=B.visible,D.wireframe=B.wireframe,L===na?D.side=B.shadowSide!==null?B.shadowSide:B.side:D.side=B.shadowSide!==null?B.shadowSide:v[B.side],D.alphaMap=B.alphaMap,D.alphaTest=B.alphaTest,D.map=B.map,D.clipShadows=B.clipShadows,D.clippingPlanes=B.clippingPlanes,D.clipIntersection=B.clipIntersection,D.displacementMap=B.displacementMap,D.displacementScale=B.displacementScale,D.displacementBias=B.displacementBias,D.wireframeLinewidth=B.wireframeLinewidth,D.linewidth=B.linewidth,Z.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ue=r.properties.get(D);ue.light=Z}return D}function N(H,B,Z,L,D){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&D===na)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,H.matrixWorld);const le=e.update(H),ye=H.material;if(Array.isArray(ye)){const me=le.groups;for(let z=0,K=me.length;z<K;z++){const V=me[z],Se=ye[V.materialIndex];if(Se&&Se.visible){const E=U(H,Se,L,D);H.onBeforeShadow(r,H,B,Z,le,E,V),r.renderBufferDirect(Z,null,le,E,H,V),H.onAfterShadow(r,H,B,Z,le,E,V)}}}else if(ye.visible){const me=U(H,ye,L,D);H.onBeforeShadow(r,H,B,Z,le,me,null),r.renderBufferDirect(Z,null,le,me,H,null),H.onAfterShadow(r,H,B,Z,le,me,null)}}const ue=H.children;for(let le=0,ye=ue.length;le<ye;le++)N(ue[le],B,Z,L,D)}function X(H){H.target.removeEventListener("dispose",X);for(const Z in m){const L=m[Z],D=H.target.uuid;D in L&&(L[D].dispose(),delete L[D])}}}const n3={[Qh]:Jh,[$h]:nd,[ed]:id,[Ds]:td,[Jh]:Qh,[nd]:$h,[id]:ed,[td]:Ds};function i3(r,e){function i(){let W=!1;const Ne=new Kt;let pe=null;const be=new Kt(0,0,0,0);return{setMask:function(ze){pe!==ze&&!W&&(r.colorMask(ze,ze,ze,ze),pe=ze)},setLocked:function(ze){W=ze},setClear:function(ze,Le,st,Ht,$t){$t===!0&&(ze*=Ht,Le*=Ht,st*=Ht),Ne.set(ze,Le,st,Ht),be.equals(Ne)===!1&&(r.clearColor(ze,Le,st,Ht),be.copy(Ne))},reset:function(){W=!1,pe=null,be.set(-1,0,0,0)}}}function s(){let W=!1,Ne=!1,pe=null,be=null,ze=null;return{setReversed:function(Le){if(Ne!==Le){const st=e.get("EXT_clip_control");Ne?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Ht=ze;ze=null,this.setClear(Ht)}Ne=Le},getReversed:function(){return Ne},setTest:function(Le){Le?ve(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(Le){pe!==Le&&!W&&(r.depthMask(Le),pe=Le)},setFunc:function(Le){if(Ne&&(Le=n3[Le]),be!==Le){switch(Le){case Qh:r.depthFunc(r.NEVER);break;case Jh:r.depthFunc(r.ALWAYS);break;case $h:r.depthFunc(r.LESS);break;case Ds:r.depthFunc(r.LEQUAL);break;case ed:r.depthFunc(r.EQUAL);break;case td:r.depthFunc(r.GEQUAL);break;case nd:r.depthFunc(r.GREATER);break;case id:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}be=Le}},setLocked:function(Le){W=Le},setClear:function(Le){ze!==Le&&(Ne&&(Le=1-Le),r.clearDepth(Le),ze=Le)},reset:function(){W=!1,pe=null,be=null,ze=null,Ne=!1}}}function l(){let W=!1,Ne=null,pe=null,be=null,ze=null,Le=null,st=null,Ht=null,$t=null;return{setTest:function(Mt){W||(Mt?ve(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(Mt){Ne!==Mt&&!W&&(r.stencilMask(Mt),Ne=Mt)},setFunc:function(Mt,Vn,un){(pe!==Mt||be!==Vn||ze!==un)&&(r.stencilFunc(Mt,Vn,un),pe=Mt,be=Vn,ze=un)},setOp:function(Mt,Vn,un){(Le!==Mt||st!==Vn||Ht!==un)&&(r.stencilOp(Mt,Vn,un),Le=Mt,st=Vn,Ht=un)},setLocked:function(Mt){W=Mt},setClear:function(Mt){$t!==Mt&&(r.clearStencil(Mt),$t=Mt)},reset:function(){W=!1,Ne=null,pe=null,be=null,ze=null,Le=null,st=null,Ht=null,$t=null}}}const c=new i,f=new s,h=new l,p=new WeakMap,m=new WeakMap;let g={},v={},x=new WeakMap,b=[],M=null,T=!1,y=null,_=null,O=null,U=null,N=null,X=null,H=null,B=new _t(0,0,0),Z=0,L=!1,D=null,G=null,ue=null,le=null,ye=null;const me=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=K>=2);let Se=null,E={};const I=r.getParameter(r.SCISSOR_BOX),ae=r.getParameter(r.VIEWPORT),ce=new Kt().fromArray(I),j=new Kt().fromArray(ae);function fe(W,Ne,pe,be){const ze=new Uint8Array(4),Le=r.createTexture();r.bindTexture(W,Le),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<pe;st++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,be,0,r.RGBA,r.UNSIGNED_BYTE,ze):r.texImage2D(Ne+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ze);return Le}const de={};de[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),de[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),de[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ve(r.DEPTH_TEST),f.setFunc(Ds),ut(!1),it(W0),ve(r.CULL_FACE),q(Wa);function ve(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function Re(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Fe(W,Ne){return v[W]!==Ne?(r.bindFramebuffer(W,Ne),v[W]=Ne,W===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ne),W===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function We(W,Ne){let pe=b,be=!1;if(W){pe=x.get(Ne),pe===void 0&&(pe=[],x.set(Ne,pe));const ze=W.textures;if(pe.length!==ze.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let Le=0,st=ze.length;Le<st;Le++)pe[Le]=r.COLOR_ATTACHMENT0+Le;pe.length=ze.length,be=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,be=!0);be&&r.drawBuffers(pe)}function at(W){return M!==W?(r.useProgram(W),M=W,!0):!1}const rt={[Er]:r.FUNC_ADD,[ab]:r.FUNC_SUBTRACT,[rb]:r.FUNC_REVERSE_SUBTRACT};rt[sb]=r.MIN,rt[ob]=r.MAX;const Nt={[lb]:r.ZERO,[cb]:r.ONE,[ub]:r.SRC_COLOR,[Zh]:r.SRC_ALPHA,[gb]:r.SRC_ALPHA_SATURATE,[pb]:r.DST_COLOR,[hb]:r.DST_ALPHA,[fb]:r.ONE_MINUS_SRC_COLOR,[Kh]:r.ONE_MINUS_SRC_ALPHA,[mb]:r.ONE_MINUS_DST_COLOR,[db]:r.ONE_MINUS_DST_ALPHA,[vb]:r.CONSTANT_COLOR,[_b]:r.ONE_MINUS_CONSTANT_COLOR,[xb]:r.CONSTANT_ALPHA,[yb]:r.ONE_MINUS_CONSTANT_ALPHA};function q(W,Ne,pe,be,ze,Le,st,Ht,$t,Mt){if(W===Wa){T===!0&&(Re(r.BLEND),T=!1);return}if(T===!1&&(ve(r.BLEND),T=!0),W!==ib){if(W!==y||Mt!==L){if((_!==Er||N!==Er)&&(r.blendEquation(r.FUNC_ADD),_=Er,N=Er),Mt)switch(W){case As:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case q0:r.blendFunc(r.ONE,r.ONE);break;case Y0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Z0:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case As:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case q0:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Y0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Z0:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}O=null,U=null,X=null,H=null,B.set(0,0,0),Z=0,y=W,L=Mt}return}ze=ze||Ne,Le=Le||pe,st=st||be,(Ne!==_||ze!==N)&&(r.blendEquationSeparate(rt[Ne],rt[ze]),_=Ne,N=ze),(pe!==O||be!==U||Le!==X||st!==H)&&(r.blendFuncSeparate(Nt[pe],Nt[be],Nt[Le],Nt[st]),O=pe,U=be,X=Le,H=st),(Ht.equals(B)===!1||$t!==Z)&&(r.blendColor(Ht.r,Ht.g,Ht.b,$t),B.copy(Ht),Z=$t),y=W,L=!1}function gn(W,Ne){W.side===ia?Re(r.CULL_FACE):ve(r.CULL_FACE);let pe=W.side===On;Ne&&(pe=!pe),ut(pe),W.blending===As&&W.transparent===!1?q(Wa):q(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const be=W.stencilWrite;h.setTest(be),be&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ut(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function ut(W){D!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),D=W)}function it(W){W!==eb?(ve(r.CULL_FACE),W!==G&&(W===W0?r.cullFace(r.BACK):W===tb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),G=W}function Ze(W){W!==ue&&(z&&r.lineWidth(W),ue=W)}function Ut(W,Ne,pe){W?(ve(r.POLYGON_OFFSET_FILL),(le!==Ne||ye!==pe)&&(r.polygonOffset(Ne,pe),le=Ne,ye=pe)):Re(r.POLYGON_OFFSET_FILL)}function qe(W){W?ve(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function P(W){W===void 0&&(W=r.TEXTURE0+me-1),Se!==W&&(r.activeTexture(W),Se=W)}function w(W,Ne,pe){pe===void 0&&(Se===null?pe=r.TEXTURE0+me-1:pe=Se);let be=E[pe];be===void 0&&(be={type:void 0,texture:void 0},E[pe]=be),(be.type!==W||be.texture!==Ne)&&(Se!==pe&&(r.activeTexture(pe),Se=pe),r.bindTexture(W,Ne||de[W]),be.type=W,be.texture=Ne)}function te(){const W=E[Se];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Ee(){try{r.compressedTexImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{r.texSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{r.texSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function De(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function gt(){try{r.texStorage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{r.texStorage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Be(){try{r.texImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ye(){try{r.texImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Je(W){ce.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),ce.copy(W))}function Pe(W){j.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),j.copy(W))}function ft(W,Ne){let pe=m.get(Ne);pe===void 0&&(pe=new WeakMap,m.set(Ne,pe));let be=pe.get(W);be===void 0&&(be=r.getUniformBlockIndex(Ne,W.name),pe.set(W,be))}function nt(W,Ne){const be=m.get(Ne).get(W);p.get(Ne)!==be&&(r.uniformBlockBinding(Ne,be,W.__bindingPointIndex),p.set(Ne,be))}function Lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Se=null,E={},v={},x=new WeakMap,b=[],M=null,T=!1,y=null,_=null,O=null,U=null,N=null,X=null,H=null,B=new _t(0,0,0),Z=0,L=!1,D=null,G=null,ue=null,le=null,ye=null,ce.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ve,disable:Re,bindFramebuffer:Fe,drawBuffers:We,useProgram:at,setBlending:q,setMaterial:gn,setFlipSided:ut,setCullFace:it,setLineWidth:Ze,setPolygonOffset:Ut,setScissorTest:qe,activeTexture:P,bindTexture:w,unbindTexture:te,compressedTexImage2D:Ee,compressedTexImage3D:Te,texImage2D:Be,texImage3D:Ye,updateUBOMapping:ft,uniformBlockBinding:nt,texStorage2D:gt,texStorage3D:Ae,texSubImage2D:_e,texSubImage3D:Ie,compressedTexSubImage2D:Ce,compressedTexSubImage3D:De,scissor:Je,viewport:Pe,reset:Lt}}function jv(r,e,i,s){const l=a3(s);switch(i){case E_:return r*e;case A_:return r*e;case w_:return r*e*2;case R_:return r*e/l.components*l.byteLength;case jd:return r*e/l.components*l.byteLength;case C_:return r*e*2/l.components*l.byteLength;case Xd:return r*e*2/l.components*l.byteLength;case T_:return r*e*3/l.components*l.byteLength;case yi:return r*e*4/l.components*l.byteLength;case Wd:return r*e*4/l.components*l.byteLength;case Pc:case zc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ic:case Bc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cd:case fd:return Math.max(r,16)*Math.max(e,8)/4;case ld:case ud:return Math.max(r,8)*Math.max(e,8)/2;case hd:case dd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case md:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case vd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case _d:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case yd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case bd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Md:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Td:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case wd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Fc:case Cd:case Dd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case D_:case Nd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ud:case Ld:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function a3(r){switch(r){case oa:case S_:return{byteLength:1,components:1};case Qo:case b_:case Jo:return{byteLength:2,components:1};case Vd:case kd:return{byteLength:2,components:4};case Cr:case Gd:case aa:return{byteLength:4,components:1};case M_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function r3(r,e,i,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new wt,g=new WeakMap;let v;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,w){return b?new OffscreenCanvas(P,w):Yc("canvas")}function T(P,w,te){let Ee=1;const Te=qe(P);if((Te.width>te||Te.height>te)&&(Ee=te/Math.max(Te.width,Te.height)),Ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const _e=Math.floor(Ee*Te.width),Ie=Math.floor(Ee*Te.height);v===void 0&&(v=M(_e,Ie));const Ce=w?M(_e,Ie):v;return Ce.width=_e,Ce.height=Ie,Ce.getContext("2d").drawImage(P,0,0,_e,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+_e+"x"+Ie+")."),Ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),P;return P}function y(P){return P.generateMipmaps}function _(P){r.generateMipmap(P)}function O(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(P,w,te,Ee,Te=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let _e=w;if(w===r.RED&&(te===r.FLOAT&&(_e=r.R32F),te===r.HALF_FLOAT&&(_e=r.R16F),te===r.UNSIGNED_BYTE&&(_e=r.R8)),w===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(_e=r.R8UI),te===r.UNSIGNED_SHORT&&(_e=r.R16UI),te===r.UNSIGNED_INT&&(_e=r.R32UI),te===r.BYTE&&(_e=r.R8I),te===r.SHORT&&(_e=r.R16I),te===r.INT&&(_e=r.R32I)),w===r.RG&&(te===r.FLOAT&&(_e=r.RG32F),te===r.HALF_FLOAT&&(_e=r.RG16F),te===r.UNSIGNED_BYTE&&(_e=r.RG8)),w===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(_e=r.RG8UI),te===r.UNSIGNED_SHORT&&(_e=r.RG16UI),te===r.UNSIGNED_INT&&(_e=r.RG32UI),te===r.BYTE&&(_e=r.RG8I),te===r.SHORT&&(_e=r.RG16I),te===r.INT&&(_e=r.RG32I)),w===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(_e=r.RGB8UI),te===r.UNSIGNED_SHORT&&(_e=r.RGB16UI),te===r.UNSIGNED_INT&&(_e=r.RGB32UI),te===r.BYTE&&(_e=r.RGB8I),te===r.SHORT&&(_e=r.RGB16I),te===r.INT&&(_e=r.RGB32I)),w===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(_e=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(_e=r.RGBA16UI),te===r.UNSIGNED_INT&&(_e=r.RGBA32UI),te===r.BYTE&&(_e=r.RGBA8I),te===r.SHORT&&(_e=r.RGBA16I),te===r.INT&&(_e=r.RGBA32I)),w===r.RGB&&te===r.UNSIGNED_INT_5_9_9_9_REV&&(_e=r.RGB9_E5),w===r.RGBA){const Ie=Te?nu:bt.getTransfer(Ee);te===r.FLOAT&&(_e=r.RGBA32F),te===r.HALF_FLOAT&&(_e=r.RGBA16F),te===r.UNSIGNED_BYTE&&(_e=Ie===It?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(_e=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(_e=r.RGB5_A1)}return(_e===r.R16F||_e===r.R32F||_e===r.RG16F||_e===r.RG32F||_e===r.RGBA16F||_e===r.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function N(P,w){let te;return P?w===null||w===Cr||w===Ls?te=r.DEPTH24_STENCIL8:w===aa?te=r.DEPTH32F_STENCIL8:w===Qo&&(te=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Cr||w===Ls?te=r.DEPTH_COMPONENT24:w===aa?te=r.DEPTH_COMPONENT32F:w===Qo&&(te=r.DEPTH_COMPONENT16),te}function X(P,w){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==bi&&P.minFilter!==Ni?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function H(P){const w=P.target;w.removeEventListener("dispose",H),Z(w),w.isVideoTexture&&g.delete(w)}function B(P){const w=P.target;w.removeEventListener("dispose",B),D(w)}function Z(P){const w=s.get(P);if(w.__webglInit===void 0)return;const te=P.source,Ee=x.get(te);if(Ee){const Te=Ee[w.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&L(P),Object.keys(Ee).length===0&&x.delete(te)}s.remove(P)}function L(P){const w=s.get(P);r.deleteTexture(w.__webglTexture);const te=P.source,Ee=x.get(te);delete Ee[w.__cacheKey],f.memory.textures--}function D(P){const w=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(w.__webglFramebuffer[Ee]))for(let Te=0;Te<w.__webglFramebuffer[Ee].length;Te++)r.deleteFramebuffer(w.__webglFramebuffer[Ee][Te]);else r.deleteFramebuffer(w.__webglFramebuffer[Ee]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[Ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let Ee=0;Ee<w.__webglFramebuffer.length;Ee++)r.deleteFramebuffer(w.__webglFramebuffer[Ee]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Ee=0;Ee<w.__webglColorRenderbuffer.length;Ee++)w.__webglColorRenderbuffer[Ee]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[Ee]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const te=P.textures;for(let Ee=0,Te=te.length;Ee<Te;Ee++){const _e=s.get(te[Ee]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),f.memory.textures--),s.remove(te[Ee])}s.remove(P)}let G=0;function ue(){G=0}function le(){const P=G;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),G+=1,P}function ye(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function me(P,w){const te=s.get(P);if(P.isVideoTexture&&Ze(P),P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){const Ee=P.image;if(Ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(te,P,w);return}}i.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+w)}function z(P,w){const te=s.get(P);if(P.version>0&&te.__version!==P.version){j(te,P,w);return}i.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+w)}function K(P,w){const te=s.get(P);if(P.version>0&&te.__version!==P.version){j(te,P,w);return}i.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+w)}function V(P,w){const te=s.get(P);if(P.version>0&&te.__version!==P.version){fe(te,P,w);return}i.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+w)}const Se={[sd]:r.REPEAT,[Ar]:r.CLAMP_TO_EDGE,[od]:r.MIRRORED_REPEAT},E={[bi]:r.NEAREST,[Db]:r.NEAREST_MIPMAP_NEAREST,[fc]:r.NEAREST_MIPMAP_LINEAR,[Ni]:r.LINEAR,[mh]:r.LINEAR_MIPMAP_NEAREST,[wr]:r.LINEAR_MIPMAP_LINEAR},I={[Ob]:r.NEVER,[Hb]:r.ALWAYS,[Pb]:r.LESS,[U_]:r.LEQUAL,[zb]:r.EQUAL,[Fb]:r.GEQUAL,[Ib]:r.GREATER,[Bb]:r.NOTEQUAL};function ae(P,w){if(w.type===aa&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ni||w.magFilter===mh||w.magFilter===fc||w.magFilter===wr||w.minFilter===Ni||w.minFilter===mh||w.minFilter===fc||w.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Se[w.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Se[w.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Se[w.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,E[w.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,E[w.minFilter]),w.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,I[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===bi||w.minFilter!==fc&&w.minFilter!==wr||w.type===aa&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function ce(P,w){let te=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",H));const Ee=w.source;let Te=x.get(Ee);Te===void 0&&(Te={},x.set(Ee,Te));const _e=ye(w);if(_e!==P.__cacheKey){Te[_e]===void 0&&(Te[_e]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,te=!0),Te[_e].usedTimes++;const Ie=Te[P.__cacheKey];Ie!==void 0&&(Te[P.__cacheKey].usedTimes--,Ie.usedTimes===0&&L(w)),P.__cacheKey=_e,P.__webglTexture=Te[_e].texture}return te}function j(P,w,te){let Ee=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Ee=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Ee=r.TEXTURE_3D);const Te=ce(P,w),_e=w.source;i.bindTexture(Ee,P.__webglTexture,r.TEXTURE0+te);const Ie=s.get(_e);if(_e.version!==Ie.__version||Te===!0){i.activeTexture(r.TEXTURE0+te);const Ce=bt.getPrimaries(bt.workingColorSpace),De=w.colorSpace===Ga?null:bt.getPrimaries(w.colorSpace),gt=w.colorSpace===Ga||Ce===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Ae=T(w.image,!1,l.maxTextureSize);Ae=Ut(w,Ae);const Be=c.convert(w.format,w.colorSpace),Ye=c.convert(w.type);let Je=U(w.internalFormat,Be,Ye,w.colorSpace,w.isVideoTexture);ae(Ee,w);let Pe;const ft=w.mipmaps,nt=w.isVideoTexture!==!0,Lt=Ie.__version===void 0||Te===!0,W=_e.dataReady,Ne=X(w,Ae);if(w.isDepthTexture)Je=N(w.format===Os,w.type),Lt&&(nt?i.texStorage2D(r.TEXTURE_2D,1,Je,Ae.width,Ae.height):i.texImage2D(r.TEXTURE_2D,0,Je,Ae.width,Ae.height,0,Be,Ye,null));else if(w.isDataTexture)if(ft.length>0){nt&&Lt&&i.texStorage2D(r.TEXTURE_2D,Ne,Je,ft[0].width,ft[0].height);for(let pe=0,be=ft.length;pe<be;pe++)Pe=ft[pe],nt?W&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,Pe.width,Pe.height,Be,Ye,Pe.data):i.texImage2D(r.TEXTURE_2D,pe,Je,Pe.width,Pe.height,0,Be,Ye,Pe.data);w.generateMipmaps=!1}else nt?(Lt&&i.texStorage2D(r.TEXTURE_2D,Ne,Je,Ae.width,Ae.height),W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Be,Ye,Ae.data)):i.texImage2D(r.TEXTURE_2D,0,Je,Ae.width,Ae.height,0,Be,Ye,Ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Je,ft[0].width,ft[0].height,Ae.depth);for(let pe=0,be=ft.length;pe<be;pe++)if(Pe=ft[pe],w.format!==yi)if(Be!==null)if(nt){if(W)if(w.layerUpdates.size>0){const ze=jv(Pe.width,Pe.height,w.format,w.type);for(const Le of w.layerUpdates){const st=Pe.data.subarray(Le*ze/Pe.data.BYTES_PER_ELEMENT,(Le+1)*ze/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,Le,Pe.width,Pe.height,1,Be,st)}w.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Pe.width,Pe.height,Ae.depth,Be,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,Je,Pe.width,Pe.height,Ae.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?W&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Pe.width,Pe.height,Ae.depth,Be,Ye,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,pe,Je,Pe.width,Pe.height,Ae.depth,0,Be,Ye,Pe.data)}else{nt&&Lt&&i.texStorage2D(r.TEXTURE_2D,Ne,Je,ft[0].width,ft[0].height);for(let pe=0,be=ft.length;pe<be;pe++)Pe=ft[pe],w.format!==yi?Be!==null?nt?W&&i.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,Pe.width,Pe.height,Be,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,pe,Je,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?W&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,Pe.width,Pe.height,Be,Ye,Pe.data):i.texImage2D(r.TEXTURE_2D,pe,Je,Pe.width,Pe.height,0,Be,Ye,Pe.data)}else if(w.isDataArrayTexture)if(nt){if(Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Je,Ae.width,Ae.height,Ae.depth),W)if(w.layerUpdates.size>0){const pe=jv(Ae.width,Ae.height,w.format,w.type);for(const be of w.layerUpdates){const ze=Ae.data.subarray(be*pe/Ae.data.BYTES_PER_ELEMENT,(be+1)*pe/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,be,Ae.width,Ae.height,1,Be,Ye,ze)}w.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Be,Ye,Ae.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Je,Ae.width,Ae.height,Ae.depth,0,Be,Ye,Ae.data);else if(w.isData3DTexture)nt?(Lt&&i.texStorage3D(r.TEXTURE_3D,Ne,Je,Ae.width,Ae.height,Ae.depth),W&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Be,Ye,Ae.data)):i.texImage3D(r.TEXTURE_3D,0,Je,Ae.width,Ae.height,Ae.depth,0,Be,Ye,Ae.data);else if(w.isFramebufferTexture){if(Lt)if(nt)i.texStorage2D(r.TEXTURE_2D,Ne,Je,Ae.width,Ae.height);else{let pe=Ae.width,be=Ae.height;for(let ze=0;ze<Ne;ze++)i.texImage2D(r.TEXTURE_2D,ze,Je,pe,be,0,Be,Ye,null),pe>>=1,be>>=1}}else if(ft.length>0){if(nt&&Lt){const pe=qe(ft[0]);i.texStorage2D(r.TEXTURE_2D,Ne,Je,pe.width,pe.height)}for(let pe=0,be=ft.length;pe<be;pe++)Pe=ft[pe],nt?W&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,Be,Ye,Pe):i.texImage2D(r.TEXTURE_2D,pe,Je,Be,Ye,Pe);w.generateMipmaps=!1}else if(nt){if(Lt){const pe=qe(Ae);i.texStorage2D(r.TEXTURE_2D,Ne,Je,pe.width,pe.height)}W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Be,Ye,Ae)}else i.texImage2D(r.TEXTURE_2D,0,Je,Be,Ye,Ae);y(w)&&_(Ee),Ie.__version=_e.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function fe(P,w,te){if(w.image.length!==6)return;const Ee=ce(P,w),Te=w.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+te);const _e=s.get(Te);if(Te.version!==_e.__version||Ee===!0){i.activeTexture(r.TEXTURE0+te);const Ie=bt.getPrimaries(bt.workingColorSpace),Ce=w.colorSpace===Ga?null:bt.getPrimaries(w.colorSpace),De=w.colorSpace===Ga||Ie===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const gt=w.isCompressedTexture||w.image[0].isCompressedTexture,Ae=w.image[0]&&w.image[0].isDataTexture,Be=[];for(let be=0;be<6;be++)!gt&&!Ae?Be[be]=T(w.image[be],!0,l.maxCubemapSize):Be[be]=Ae?w.image[be].image:w.image[be],Be[be]=Ut(w,Be[be]);const Ye=Be[0],Je=c.convert(w.format,w.colorSpace),Pe=c.convert(w.type),ft=U(w.internalFormat,Je,Pe,w.colorSpace),nt=w.isVideoTexture!==!0,Lt=_e.__version===void 0||Ee===!0,W=Te.dataReady;let Ne=X(w,Ye);ae(r.TEXTURE_CUBE_MAP,w);let pe;if(gt){nt&&Lt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,ft,Ye.width,Ye.height);for(let be=0;be<6;be++){pe=Be[be].mipmaps;for(let ze=0;ze<pe.length;ze++){const Le=pe[ze];w.format!==yi?Je!==null?nt?W&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze,0,0,Le.width,Le.height,Je,Le.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze,ft,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze,0,0,Le.width,Le.height,Je,Pe,Le.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze,ft,Le.width,Le.height,0,Je,Pe,Le.data)}}}else{if(pe=w.mipmaps,nt&&Lt){pe.length>0&&Ne++;const be=qe(Be[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,ft,be.width,be.height)}for(let be=0;be<6;be++)if(Ae){nt?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Be[be].width,Be[be].height,Je,Pe,Be[be].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ft,Be[be].width,Be[be].height,0,Je,Pe,Be[be].data);for(let ze=0;ze<pe.length;ze++){const st=pe[ze].image[be].image;nt?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze+1,0,0,st.width,st.height,Je,Pe,st.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze+1,ft,st.width,st.height,0,Je,Pe,st.data)}}else{nt?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Je,Pe,Be[be]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ft,Je,Pe,Be[be]);for(let ze=0;ze<pe.length;ze++){const Le=pe[ze];nt?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze+1,0,0,Je,Pe,Le.image[be]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,ze+1,ft,Je,Pe,Le.image[be])}}}y(w)&&_(r.TEXTURE_CUBE_MAP),_e.__version=Te.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function de(P,w,te,Ee,Te,_e){const Ie=c.convert(te.format,te.colorSpace),Ce=c.convert(te.type),De=U(te.internalFormat,Ie,Ce,te.colorSpace),gt=s.get(w),Ae=s.get(te);if(Ae.__renderTarget=w,!gt.__hasExternalTextures){const Be=Math.max(1,w.width>>_e),Ye=Math.max(1,w.height>>_e);Te===r.TEXTURE_3D||Te===r.TEXTURE_2D_ARRAY?i.texImage3D(Te,_e,De,Be,Ye,w.depth,0,Ie,Ce,null):i.texImage2D(Te,_e,De,Be,Ye,0,Ie,Ce,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),it(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ee,Te,Ae.__webglTexture,0,ut(w)):(Te===r.TEXTURE_2D||Te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Ee,Te,Ae.__webglTexture,_e),i.bindFramebuffer(r.FRAMEBUFFER,null)}function ve(P,w,te){if(r.bindRenderbuffer(r.RENDERBUFFER,P),w.depthBuffer){const Ee=w.depthTexture,Te=Ee&&Ee.isDepthTexture?Ee.type:null,_e=N(w.stencilBuffer,Te),Ie=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=ut(w);it(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,_e,w.width,w.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,_e,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,_e,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ie,r.RENDERBUFFER,P)}else{const Ee=w.textures;for(let Te=0;Te<Ee.length;Te++){const _e=Ee[Te],Ie=c.convert(_e.format,_e.colorSpace),Ce=c.convert(_e.type),De=U(_e.internalFormat,Ie,Ce,_e.colorSpace),gt=ut(w);te&&it(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,gt,De,w.width,w.height):it(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,gt,De,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,De,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Re(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=s.get(w.depthTexture);Ee.__renderTarget=w,(!Ee.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),me(w.depthTexture,0);const Te=Ee.__webglTexture,_e=ut(w);if(w.depthTexture.format===ws)it(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Te,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Te,0);else if(w.depthTexture.format===Os)it(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Te,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function Fe(P){const w=s.get(P),te=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const Ee=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Ee){const Te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Ee.removeEventListener("dispose",Te)};Ee.addEventListener("dispose",Te),w.__depthDisposeCallback=Te}w.__boundDepthTexture=Ee}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Re(w.__webglFramebuffer,P)}else if(te){w.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(i.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[Ee]),w.__webglDepthbuffer[Ee]===void 0)w.__webglDepthbuffer[Ee]=r.createRenderbuffer(),ve(w.__webglDepthbuffer[Ee],P,!1);else{const Te=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer[Ee];r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,_e)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),ve(w.__webglDepthbuffer,P,!1);else{const Ee=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Te),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,Te)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function We(P,w,te){const Ee=s.get(P);w!==void 0&&de(Ee.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&Fe(P)}function at(P){const w=P.texture,te=s.get(P),Ee=s.get(w);P.addEventListener("dispose",B);const Te=P.textures,_e=P.isWebGLCubeRenderTarget===!0,Ie=Te.length>1;if(Ie||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture()),Ee.__version=w.version,f.memory.textures++),_e){te.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer[Ce]=[];for(let De=0;De<w.mipmaps.length;De++)te.__webglFramebuffer[Ce][De]=r.createFramebuffer()}else te.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)te.__webglFramebuffer[Ce]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Ie)for(let Ce=0,De=Te.length;Ce<De;Ce++){const gt=s.get(Te[Ce]);gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&it(P)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Te.length;Ce++){const De=Te[Ce];te.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[Ce]);const gt=c.convert(De.format,De.colorSpace),Ae=c.convert(De.type),Be=U(De.internalFormat,gt,Ae,De.colorSpace,P.isXRRenderTarget===!0),Ye=ut(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,Be,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,te.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(te.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(_e){i.bindTexture(r.TEXTURE_CUBE_MAP,Ee.__webglTexture),ae(r.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let De=0;De<w.mipmaps.length;De++)de(te.__webglFramebuffer[Ce][De],P,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,De);else de(te.__webglFramebuffer[Ce],P,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(w)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let Ce=0,De=Te.length;Ce<De;Ce++){const gt=Te[Ce],Ae=s.get(gt);i.bindTexture(r.TEXTURE_2D,Ae.__webglTexture),ae(r.TEXTURE_2D,gt),de(te.__webglFramebuffer,P,gt,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),y(gt)&&_(r.TEXTURE_2D)}i.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ce=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ce,Ee.__webglTexture),ae(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let De=0;De<w.mipmaps.length;De++)de(te.__webglFramebuffer[De],P,w,r.COLOR_ATTACHMENT0,Ce,De);else de(te.__webglFramebuffer,P,w,r.COLOR_ATTACHMENT0,Ce,0);y(w)&&_(Ce),i.unbindTexture()}P.depthBuffer&&Fe(P)}function rt(P){const w=P.textures;for(let te=0,Ee=w.length;te<Ee;te++){const Te=w[te];if(y(Te)){const _e=O(P),Ie=s.get(Te).__webglTexture;i.bindTexture(_e,Ie),_(_e),i.unbindTexture()}}}const Nt=[],q=[];function gn(P){if(P.samples>0){if(it(P)===!1){const w=P.textures,te=P.width,Ee=P.height;let Te=r.COLOR_BUFFER_BIT;const _e=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ie=s.get(P),Ce=w.length>1;if(Ce)for(let De=0;De<w.length;De++)i.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let De=0;De<w.length;De++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Te|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Te|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[De]);const gt=s.get(w[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,gt,0)}r.blitFramebuffer(0,0,te,Ee,0,0,te,Ee,Te,r.NEAREST),p===!0&&(Nt.length=0,q.length=0,Nt.push(r.COLOR_ATTACHMENT0+De),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Nt.push(_e),q.push(_e),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,q)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Nt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let De=0;De<w.length;De++){i.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[De]);const gt=s.get(w[De]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,gt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const w=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function ut(P){return Math.min(l.maxSamples,P.samples)}function it(P){const w=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ze(P){const w=f.render.frame;g.get(P)!==w&&(g.set(P,w),P.update())}function Ut(P,w){const te=P.colorSpace,Ee=P.format,Te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||te!==Bs&&te!==Ga&&(bt.getTransfer(te)===It?(Ee!==yi||Te!==oa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),w}function qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=le,this.resetTextureUnits=ue,this.setTexture2D=me,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=We,this.setupRenderTarget=at,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=it}function s3(r,e){function i(s,l=Ga){let c;const f=bt.getTransfer(l);if(s===oa)return r.UNSIGNED_BYTE;if(s===Vd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===kd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===M_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===S_)return r.BYTE;if(s===b_)return r.SHORT;if(s===Qo)return r.UNSIGNED_SHORT;if(s===Gd)return r.INT;if(s===Cr)return r.UNSIGNED_INT;if(s===aa)return r.FLOAT;if(s===Jo)return r.HALF_FLOAT;if(s===E_)return r.ALPHA;if(s===T_)return r.RGB;if(s===yi)return r.RGBA;if(s===A_)return r.LUMINANCE;if(s===w_)return r.LUMINANCE_ALPHA;if(s===ws)return r.DEPTH_COMPONENT;if(s===Os)return r.DEPTH_STENCIL;if(s===R_)return r.RED;if(s===jd)return r.RED_INTEGER;if(s===C_)return r.RG;if(s===Xd)return r.RG_INTEGER;if(s===Wd)return r.RGBA_INTEGER;if(s===Pc||s===zc||s===Ic||s===Bc)if(f===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Pc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Pc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ld||s===cd||s===ud||s===fd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ld)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ud)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hd||s===dd||s===pd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===hd||s===dd)return f===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===pd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===md||s===gd||s===vd||s===_d||s===xd||s===yd||s===Sd||s===bd||s===Md||s===Ed||s===Td||s===Ad||s===wd||s===Rd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===md)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_d)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Md)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ed)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Td)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ad)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fc||s===Cd||s===Dd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Fc)return f===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Dd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===D_||s===Nd||s===Ud||s===Ld)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Fc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Nd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ud)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ld)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ls?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}class o3 extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rr extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l3={type:"move"};class Vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const y=i.getJointPose(T,s),_=this._getHandJoint(m,T);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),b=.02,M=.005;m.inputState.pinching&&x>b+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=b-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(l3)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Rr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const c3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class f3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Gn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Za({vertexShader:c3,fragmentShader:u3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Si(new au(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h3 extends Fs{constructor(e,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,g=null,v=null,x=null,b=null,M=null;const T=new f3,y=i.getContextAttributes();let _=null,O=null;const U=[],N=[],X=new wt;let H=null;const B=new ei;B.viewport=new Kt;const Z=new ei;Z.viewport=new Kt;const L=[B,Z],D=new o3;let G=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let fe=U[j];return fe===void 0&&(fe=new Vh,U[j]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(j){let fe=U[j];return fe===void 0&&(fe=new Vh,U[j]=fe),fe.getGripSpace()},this.getHand=function(j){let fe=U[j];return fe===void 0&&(fe=new Vh,U[j]=fe),fe.getHandSpace()};function le(j){const fe=N.indexOf(j.inputSource);if(fe===-1)return;const de=U[fe];de!==void 0&&(de.update(j.inputSource,j.frame,m||f),de.dispatchEvent({type:j.type,data:j.inputSource}))}function ye(){l.removeEventListener("select",le),l.removeEventListener("selectstart",le),l.removeEventListener("selectend",le),l.removeEventListener("squeeze",le),l.removeEventListener("squeezestart",le),l.removeEventListener("squeezeend",le),l.removeEventListener("end",ye),l.removeEventListener("inputsourceschange",me);for(let j=0;j<U.length;j++){const fe=N[j];fe!==null&&(N[j]=null,U[j].disconnect(fe))}G=null,ue=null,T.reset(),e.setRenderTarget(_),b=null,x=null,v=null,l=null,O=null,ce.stop(),s.isPresenting=!1,e.setPixelRatio(H),e.setSize(X.width,X.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){c=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){h=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(j){m=j},this.getBaseLayer=function(){return x!==null?x:b},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",le),l.addEventListener("selectstart",le),l.addEventListener("selectend",le),l.addEventListener("squeeze",le),l.addEventListener("squeezestart",le),l.addEventListener("squeezeend",le),l.addEventListener("end",ye),l.addEventListener("inputsourceschange",me),y.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(X),l.renderState.layers===void 0){const fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,fe),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),O=new Dr(b.framebufferWidth,b.framebufferHeight,{format:yi,type:oa,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let fe=null,de=null,ve=null;y.depth&&(ve=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,fe=y.stencil?Os:ws,de=y.stencil?Ls:Cr);const Re={colorFormat:i.RGBA8,depthFormat:ve,scaleFactor:c};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(Re),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new Dr(x.textureWidth,x.textureHeight,{format:yi,type:oa,depthTexture:new X_(x.textureWidth,x.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),ce.setContext(l),ce.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function me(j){for(let fe=0;fe<j.removed.length;fe++){const de=j.removed[fe],ve=N.indexOf(de);ve>=0&&(N[ve]=null,U[ve].disconnect(de))}for(let fe=0;fe<j.added.length;fe++){const de=j.added[fe];let ve=N.indexOf(de);if(ve===-1){for(let Fe=0;Fe<U.length;Fe++)if(Fe>=N.length){N.push(de),ve=Fe;break}else if(N[Fe]===null){N[Fe]=de,ve=Fe;break}if(ve===-1)break}const Re=U[ve];Re&&Re.connect(de)}}const z=new ie,K=new ie;function V(j,fe,de){z.setFromMatrixPosition(fe.matrixWorld),K.setFromMatrixPosition(de.matrixWorld);const ve=z.distanceTo(K),Re=fe.projectionMatrix.elements,Fe=de.projectionMatrix.elements,We=Re[14]/(Re[10]-1),at=Re[14]/(Re[10]+1),rt=(Re[9]+1)/Re[5],Nt=(Re[9]-1)/Re[5],q=(Re[8]-1)/Re[0],gn=(Fe[8]+1)/Fe[0],ut=We*q,it=We*gn,Ze=ve/(-q+gn),Ut=Ze*-q;if(fe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ut),j.translateZ(Ze),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Re[10]===-1)j.projectionMatrix.copy(fe.projectionMatrix),j.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const qe=We+Ze,P=at+Ze,w=ut-Ut,te=it+(ve-Ut),Ee=rt*at/P*qe,Te=Nt*at/P*qe;j.projectionMatrix.makePerspective(w,te,Ee,Te,qe,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Se(j,fe){fe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(fe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let fe=j.near,de=j.far;T.texture!==null&&(T.depthNear>0&&(fe=T.depthNear),T.depthFar>0&&(de=T.depthFar)),D.near=Z.near=B.near=fe,D.far=Z.far=B.far=de,(G!==D.near||ue!==D.far)&&(l.updateRenderState({depthNear:D.near,depthFar:D.far}),G=D.near,ue=D.far),B.layers.mask=j.layers.mask|2,Z.layers.mask=j.layers.mask|4,D.layers.mask=B.layers.mask|Z.layers.mask;const ve=j.parent,Re=D.cameras;Se(D,ve);for(let Fe=0;Fe<Re.length;Fe++)Se(Re[Fe],ve);Re.length===2?V(D,B,Z):D.projectionMatrix.copy(B.projectionMatrix),E(j,D,ve)};function E(j,fe,de){de===null?j.matrix.copy(fe.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(fe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(fe.projectionMatrix),j.projectionMatrixInverse.copy(fe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ps*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(x===null&&b===null))return p},this.setFoveation=function(j){p=j,x!==null&&(x.fixedFoveation=j),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=j)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(D)};let I=null;function ae(j,fe){if(g=fe.getViewerPose(m||f),M=fe,g!==null){const de=g.views;b!==null&&(e.setRenderTargetFramebuffer(O,b.framebuffer),e.setRenderTarget(O));let ve=!1;de.length!==D.cameras.length&&(D.cameras.length=0,ve=!0);for(let Fe=0;Fe<de.length;Fe++){const We=de[Fe];let at=null;if(b!==null)at=b.getViewport(We);else{const Nt=v.getViewSubImage(x,We);at=Nt.viewport,Fe===0&&(e.setRenderTargetTextures(O,Nt.colorTexture,x.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(O))}let rt=L[Fe];rt===void 0&&(rt=new ei,rt.layers.enable(Fe),rt.viewport=new Kt,L[Fe]=rt),rt.matrix.fromArray(We.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(We.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(at.x,at.y,at.width,at.height),Fe===0&&(D.matrix.copy(rt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ve===!0&&D.cameras.push(rt)}const Re=l.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Fe=v.getDepthInformation(de[0]);Fe&&Fe.isValid&&Fe.texture&&T.init(e,Fe,l.renderState)}}for(let de=0;de<U.length;de++){const ve=N[de],Re=U[de];ve!==null&&Re!==void 0&&Re.update(ve,fe,m||f)}I&&I(j,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),M=null}const ce=new j_;ce.setAnimationLoop(ae),this.setAnimationLoop=function(j){I=j},this.dispose=function(){}}}const Sr=new Ui,d3=new Wt;function p3(r,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,G_(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,O,U,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),v(y,_)):_.isMeshPhongMaterial?(c(y,_),g(y,_)):_.isMeshStandardMaterial?(c(y,_),x(y,_),_.isMeshPhysicalMaterial&&b(y,_,N)):_.isMeshMatcapMaterial?(c(y,_),M(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),T(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&h(y,_)):_.isPointsMaterial?p(y,_,O,U):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===On&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===On&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const O=e.get(_),U=O.envMap,N=O.envMapRotation;U&&(y.envMap.value=U,Sr.copy(N),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),y.envMapRotation.value.setFromMatrix4(d3.makeRotationFromEuler(Sr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function h(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,O,U){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*O,y.scale.value=U*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function b(y,_,O){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===On&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,_){_.matcap&&(y.matcap.value=_.matcap)}function T(y,_){const O=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function m3(r,e,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,U){const N=U.program;s.uniformBlockBinding(O,N)}function m(O,U){let N=l[O.id];N===void 0&&(M(O),N=g(O),l[O.id]=N,O.addEventListener("dispose",y));const X=U.program;s.updateUBOMapping(O,X);const H=e.render.frame;c[O.id]!==H&&(x(O),c[O.id]=H)}function g(O){const U=v();O.__bindingPointIndex=U;const N=r.createBuffer(),X=O.__size,H=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,X,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,N),N}function v(){for(let O=0;O<h;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const U=l[O.id],N=O.uniforms,X=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let H=0,B=N.length;H<B;H++){const Z=Array.isArray(N[H])?N[H]:[N[H]];for(let L=0,D=Z.length;L<D;L++){const G=Z[L];if(b(G,H,L,X)===!0){const ue=G.__offset,le=Array.isArray(G.value)?G.value:[G.value];let ye=0;for(let me=0;me<le.length;me++){const z=le[me],K=T(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,ue+ye,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,ye),ye+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ue,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(O,U,N,X){const H=O.value,B=U+"_"+N;if(X[B]===void 0)return typeof H=="number"||typeof H=="boolean"?X[B]=H:X[B]=H.clone(),!0;{const Z=X[B];if(typeof H=="number"||typeof H=="boolean"){if(Z!==H)return X[B]=H,!0}else if(Z.equals(H)===!1)return Z.copy(H),!0}return!1}function M(O){const U=O.uniforms;let N=0;const X=16;for(let B=0,Z=U.length;B<Z;B++){const L=Array.isArray(U[B])?U[B]:[U[B]];for(let D=0,G=L.length;D<G;D++){const ue=L[D],le=Array.isArray(ue.value)?ue.value:[ue.value];for(let ye=0,me=le.length;ye<me;ye++){const z=le[ye],K=T(z),V=N%X,Se=V%K.boundary,E=V+Se;N+=Se,E!==0&&X-E<K.storage&&(N+=X-E),ue.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=N,N+=K.storage}}}const H=N%X;return H>0&&(N+=X-H),O.__size=N,O.__cache={},this}function T(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function y(O){const U=O.target;U.removeEventListener("dispose",y);const N=f.indexOf(U.__bindingPointIndex);f.splice(N,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const O in l)r.deleteBuffer(l[O]);f=[],l={},c={}}return{bind:p,update:m,dispose:_}}class g3{constructor(e={}){const{canvas:i=iM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const M=new Uint32Array(4),T=new Int32Array(4);let y=null,_=null;const O=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=qa,this.toneMappingExposure=1;const N=this;let X=!1,H=0,B=0,Z=null,L=-1,D=null;const G=new Kt,ue=new Kt;let le=null;const ye=new _t(0);let me=0,z=i.width,K=i.height,V=1,Se=null,E=null;const I=new Kt(0,0,z,K),ae=new Kt(0,0,z,K);let ce=!1;const j=new Zd;let fe=!1,de=!1;const ve=new Wt,Re=new Wt,Fe=new ie,We=new Kt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Nt(){return Z===null?V:1}let q=s;function gn(C,Y){return i.getContext(C,Y)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fd}`),i.addEventListener("webglcontextlost",be,!1),i.addEventListener("webglcontextrestored",ze,!1),i.addEventListener("webglcontextcreationerror",Le,!1),q===null){const Y="webgl2";if(q=gn(Y,C),q===null)throw gn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ut,it,Ze,Ut,qe,P,w,te,Ee,Te,_e,Ie,Ce,De,gt,Ae,Be,Ye,Je,Pe,ft,nt,Lt,W;function Ne(){ut=new ST(q),ut.init(),nt=new s3(q,ut),it=new pT(q,ut,e,nt),Ze=new i3(q,ut),it.reverseDepthBuffer&&x&&Ze.buffers.depth.setReversed(!0),Ut=new ET(q),qe=new VA,P=new r3(q,ut,Ze,qe,it,nt,Ut),w=new gT(N),te=new yT(N),Ee=new DM(q),Lt=new hT(q,Ee),Te=new bT(q,Ee,Ut,Lt),_e=new AT(q,Te,Ee,Ut),Je=new TT(q,it,P),Ae=new mT(qe),Ie=new GA(N,w,te,ut,it,Lt,Ae),Ce=new p3(N,qe),De=new jA,gt=new KA(ut),Ye=new fT(N,w,te,Ze,_e,b,p),Be=new t3(N,_e,it),W=new m3(q,Ut,it,Ze),Pe=new dT(q,ut,Ut),ft=new MT(q,ut,Ut),Ut.programs=Ie.programs,N.capabilities=it,N.extensions=ut,N.properties=qe,N.renderLists=De,N.shadowMap=Be,N.state=Ze,N.info=Ut}Ne();const pe=new h3(N,q);this.xr=pe,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const C=ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(z,K,!1))},this.getSize=function(C){return C.set(z,K)},this.setSize=function(C,Y,re=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,K=Y,i.width=Math.floor(C*V),i.height=Math.floor(Y*V),re===!0&&(i.style.width=C+"px",i.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(z*V,K*V).floor()},this.setDrawingBufferSize=function(C,Y,re){z=C,K=Y,V=re,i.width=Math.floor(C*re),i.height=Math.floor(Y*re),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(I)},this.setViewport=function(C,Y,re,se){C.isVector4?I.set(C.x,C.y,C.z,C.w):I.set(C,Y,re,se),Ze.viewport(G.copy(I).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(ae)},this.setScissor=function(C,Y,re,se){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,Y,re,se),Ze.scissor(ue.copy(ae).multiplyScalar(V).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(C){Ze.setScissorTest(ce=C)},this.setOpaqueSort=function(C){Se=C},this.setTransparentSort=function(C){E=C},this.getClearColor=function(C){return C.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(C=!0,Y=!0,re=!0){let se=0;if(C){let J=!1;if(Z!==null){const we=Z.texture.format;J=we===Wd||we===Xd||we===jd}if(J){const we=Z.texture.type,Oe=we===oa||we===Cr||we===Qo||we===Ls||we===Vd||we===kd,ke=Ye.getClearColor(),Ge=Ye.getClearAlpha(),et=ke.r,Ke=ke.g,Ve=ke.b;Oe?(M[0]=et,M[1]=Ke,M[2]=Ve,M[3]=Ge,q.clearBufferuiv(q.COLOR,0,M)):(T[0]=et,T[1]=Ke,T[2]=Ve,T[3]=Ge,q.clearBufferiv(q.COLOR,0,T))}else se|=q.COLOR_BUFFER_BIT}Y&&(se|=q.DEPTH_BUFFER_BIT),re&&(se|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",be,!1),i.removeEventListener("webglcontextrestored",ze,!1),i.removeEventListener("webglcontextcreationerror",Le,!1),De.dispose(),gt.dispose(),qe.dispose(),w.dispose(),te.dispose(),_e.dispose(),Lt.dispose(),W.dispose(),Ie.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",rn),pe.removeEventListener("sessionend",vn),zn.stop()};function be(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const C=Ut.autoReset,Y=Be.enabled,re=Be.autoUpdate,se=Be.needsUpdate,J=Be.type;Ne(),Ut.autoReset=C,Be.enabled=Y,Be.autoUpdate=re,Be.needsUpdate=se,Be.type=J}function Le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function st(C){const Y=C.target;Y.removeEventListener("dispose",st),Ht(Y)}function Ht(C){$t(C),qe.remove(C)}function $t(C){const Y=qe.get(C).programs;Y!==void 0&&(Y.forEach(function(re){Ie.releaseProgram(re)}),C.isShaderMaterial&&Ie.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,re,se,J,we){Y===null&&(Y=at);const Oe=J.isMesh&&J.matrixWorld.determinant()<0,ke=$a(C,Y,re,se,J);Ze.setMaterial(se,Oe);let Ge=re.index,et=1;if(se.wireframe===!0){if(Ge=Te.getWireframeAttribute(re),Ge===void 0)return;et=2}const Ke=re.drawRange,Ve=re.attributes.position;let vt=Ke.start*et,yt=(Ke.start+Ke.count)*et;we!==null&&(vt=Math.max(vt,we.start*et),yt=Math.min(yt,(we.start+we.count)*et)),Ge!==null?(vt=Math.max(vt,0),yt=Math.min(yt,Ge.count)):Ve!=null&&(vt=Math.max(vt,0),yt=Math.min(yt,Ve.count));const Rt=yt-vt;if(Rt<0||Rt===1/0)return;Lt.setup(J,se,ke,re,Ge);let fn,Et=Pe;if(Ge!==null&&(fn=Ee.get(Ge),Et=ft,Et.setIndex(fn)),J.isMesh)se.wireframe===!0?(Ze.setLineWidth(se.wireframeLinewidth*Nt()),Et.setMode(q.LINES)):Et.setMode(q.TRIANGLES);else if(J.isLine){let je=se.linewidth;je===void 0&&(je=1),Ze.setLineWidth(je*Nt()),J.isLineSegments?Et.setMode(q.LINES):J.isLineLoop?Et.setMode(q.LINE_LOOP):Et.setMode(q.LINE_STRIP)}else J.isPoints?Et.setMode(q.POINTS):J.isSprite&&Et.setMode(q.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Et.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))Et.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const je=J._multiDrawStarts,qt=J._multiDrawCounts,St=J._multiDrawCount,kn=Ge?Ee.get(Ge).bytesPerElement:1,hi=qe.get(se).currentProgram.getUniforms();for(let Mn=0;Mn<St;Mn++)hi.setValue(q,"_gl_DrawID",Mn),Et.render(je[Mn]/kn,qt[Mn])}else if(J.isInstancedMesh)Et.renderInstances(vt,Rt,J.count);else if(re.isInstancedBufferGeometry){const je=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,qt=Math.min(re.instanceCount,je);Et.renderInstances(vt,Rt,qt)}else Et.render(vt,Rt)};function Mt(C,Y,re){C.transparent===!0&&C.side===ia&&C.forceSinglePass===!1?(C.side=On,C.needsUpdate=!0,ua(C,Y,re),C.side=Ya,C.needsUpdate=!0,ua(C,Y,re),C.side=ia):ua(C,Y,re)}this.compile=function(C,Y,re=null){re===null&&(re=C),_=gt.get(re),_.init(Y),U.push(_),re.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),C!==re&&C.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),_.setupLights();const se=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const we=J.material;if(we)if(Array.isArray(we))for(let Oe=0;Oe<we.length;Oe++){const ke=we[Oe];Mt(ke,re,J),se.add(ke)}else Mt(we,re,J),se.add(we)}),U.pop(),_=null,se},this.compileAsync=function(C,Y,re=null){const se=this.compile(C,Y,re);return new Promise(J=>{function we(){if(se.forEach(function(Oe){qe.get(Oe).currentProgram.isReady()&&se.delete(Oe)}),se.size===0){J(C);return}setTimeout(we,10)}ut.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Vn=null;function un(C){Vn&&Vn(C)}function rn(){zn.stop()}function vn(){zn.start()}const zn=new j_;zn.setAnimationLoop(un),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(C){Vn=C,pe.setAnimationLoop(C),C===null?zn.stop():zn.start()},pe.addEventListener("sessionstart",rn),pe.addEventListener("sessionend",vn),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(Y),Y=pe.getCamera()),C.isScene===!0&&C.onBeforeRender(N,C,Y,Z),_=gt.get(C,U.length),_.init(Y),U.push(_),Re.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),j.setFromProjectionMatrix(Re),de=this.localClippingEnabled,fe=Ae.init(this.clippingPlanes,de),y=De.get(C,O.length),y.init(),O.push(y),pe.enabled===!0&&pe.isPresenting===!0){const we=N.xr.getDepthSensingMesh();we!==null&&Qa(we,Y,-1/0,N.sortObjects)}Qa(C,Y,0,N.sortObjects),y.finish(),N.sortObjects===!0&&y.sort(Se,E),rt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,rt&&Ye.addToRenderList(y,C),this.info.render.frame++,fe===!0&&Ae.beginShadows();const re=_.state.shadowsArray;Be.render(re,C,Y),fe===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=y.opaque,J=y.transmissive;if(_.setupLights(),Y.isArrayCamera){const we=Y.cameras;if(J.length>0)for(let Oe=0,ke=we.length;Oe<ke;Oe++){const Ge=we[Oe];al(se,J,C,Ge)}rt&&Ye.render(C);for(let Oe=0,ke=we.length;Oe<ke;Oe++){const Ge=we[Oe];il(y,C,Ge,Ge.viewport)}}else J.length>0&&al(se,J,C,Y),rt&&Ye.render(C),il(y,C,Y);Z!==null&&(P.updateMultisampleRenderTarget(Z),P.updateRenderTargetMipmap(Z)),C.isScene===!0&&C.onAfterRender(N,C,Y),Lt.resetDefaultState(),L=-1,D=null,U.pop(),U.length>0?(_=U[U.length-1],fe===!0&&Ae.setGlobalState(N.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function Qa(C,Y,re,se){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||j.intersectsSprite(C)){se&&We.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Re);const Oe=_e.update(C),ke=C.material;ke.visible&&y.push(C,Oe,ke,re,We.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||j.intersectsObject(C))){const Oe=_e.update(C),ke=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),We.copy(C.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),We.copy(Oe.boundingSphere.center)),We.applyMatrix4(C.matrixWorld).applyMatrix4(Re)),Array.isArray(ke)){const Ge=Oe.groups;for(let et=0,Ke=Ge.length;et<Ke;et++){const Ve=Ge[et],vt=ke[Ve.materialIndex];vt&&vt.visible&&y.push(C,Oe,vt,re,We.z,Ve)}}else ke.visible&&y.push(C,Oe,ke,re,We.z,null)}}const we=C.children;for(let Oe=0,ke=we.length;Oe<ke;Oe++)Qa(we[Oe],Y,re,se)}function il(C,Y,re,se){const J=C.opaque,we=C.transmissive,Oe=C.transparent;_.setupLightsView(re),fe===!0&&Ae.setGlobalState(N.clippingPlanes,re),se&&Ze.viewport(G.copy(se)),J.length>0&&Ja(J,Y,re),we.length>0&&Ja(we,Y,re),Oe.length>0&&Ja(Oe,Y,re),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function al(C,Y,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[se.id]===void 0&&(_.state.transmissionRenderTarget[se.id]=new Dr(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Jo:oa,minFilter:wr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const we=_.state.transmissionRenderTarget[se.id],Oe=se.viewport||G;we.setSize(Oe.z,Oe.w);const ke=N.getRenderTarget();N.setRenderTarget(we),N.getClearColor(ye),me=N.getClearAlpha(),me<1&&N.setClearColor(16777215,.5),N.clear(),rt&&Ye.render(re);const Ge=N.toneMapping;N.toneMapping=qa;const et=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),_.setupLightsView(se),fe===!0&&Ae.setGlobalState(N.clippingPlanes,se),Ja(C,re,se),P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ve=0,vt=Y.length;Ve<vt;Ve++){const yt=Y[Ve],Rt=yt.object,fn=yt.geometry,Et=yt.material,je=yt.group;if(Et.side===ia&&Rt.layers.test(se.layers)){const qt=Et.side;Et.side=On,Et.needsUpdate=!0,ca(Rt,re,se,fn,Et,je),Et.side=qt,Et.needsUpdate=!0,Ke=!0}}Ke===!0&&(P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we))}N.setRenderTarget(ke),N.setClearColor(ye,me),et!==void 0&&(se.viewport=et),N.toneMapping=Ge}function Ja(C,Y,re){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,we=C.length;J<we;J++){const Oe=C[J],ke=Oe.object,Ge=Oe.geometry,et=se===null?Oe.material:se,Ke=Oe.group;ke.layers.test(re.layers)&&ca(ke,Y,re,Ge,et,Ke)}}function ca(C,Y,re,se,J,we){C.onBeforeRender(N,Y,re,se,J,we),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(N,Y,re,se,C,we),J.transparent===!0&&J.side===ia&&J.forceSinglePass===!1?(J.side=On,J.needsUpdate=!0,N.renderBufferDirect(re,Y,se,J,C,we),J.side=Ya,J.needsUpdate=!0,N.renderBufferDirect(re,Y,se,J,C,we),J.side=ia):N.renderBufferDirect(re,Y,se,J,C,we),C.onAfterRender(N,Y,re,se,J,we)}function ua(C,Y,re){Y.isScene!==!0&&(Y=at);const se=qe.get(C),J=_.state.lights,we=_.state.shadowsArray,Oe=J.state.version,ke=Ie.getParameters(C,J.state,we,Y,re),Ge=Ie.getProgramCacheKey(ke);let et=se.programs;se.environment=C.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(C.isMeshStandardMaterial?te:w).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,et===void 0&&(C.addEventListener("dispose",st),et=new Map,se.programs=et);let Ke=et.get(Ge);if(Ke!==void 0){if(se.currentProgram===Ke&&se.lightsStateVersion===Oe)return Pi(C,ke),Ke}else ke.uniforms=Ie.getUniforms(C),C.onBeforeCompile(ke,N),Ke=Ie.acquireProgram(ke,Ge),et.set(Ge,Ke),se.uniforms=ke.uniforms;const Ve=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=Ae.uniform),Pi(C,ke),se.needsLights=en(C),se.lightsStateVersion=Oe,se.needsLights&&(Ve.ambientLightColor.value=J.state.ambient,Ve.lightProbe.value=J.state.probe,Ve.directionalLights.value=J.state.directional,Ve.directionalLightShadows.value=J.state.directionalShadow,Ve.spotLights.value=J.state.spot,Ve.spotLightShadows.value=J.state.spotShadow,Ve.rectAreaLights.value=J.state.rectArea,Ve.ltc_1.value=J.state.rectAreaLTC1,Ve.ltc_2.value=J.state.rectAreaLTC2,Ve.pointLights.value=J.state.point,Ve.pointLightShadows.value=J.state.pointShadow,Ve.hemisphereLights.value=J.state.hemi,Ve.directionalShadowMap.value=J.state.directionalShadowMap,Ve.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ve.spotShadowMap.value=J.state.spotShadowMap,Ve.spotLightMatrix.value=J.state.spotLightMatrix,Ve.spotLightMap.value=J.state.spotLightMap,Ve.pointShadowMap.value=J.state.pointShadowMap,Ve.pointShadowMatrix.value=J.state.pointShadowMatrix),se.currentProgram=Ke,se.uniformsList=null,Ke}function Oi(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Gc.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function Pi(C,Y){const re=qe.get(C);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function $a(C,Y,re,se,J){Y.isScene!==!0&&(Y=at),P.resetTextureUnits();const we=Y.fog,Oe=se.isMeshStandardMaterial?Y.environment:null,ke=Z===null?N.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Bs,Ge=(se.isMeshStandardMaterial?te:w).get(se.envMap||Oe),et=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ke=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ve=!!re.morphAttributes.position,vt=!!re.morphAttributes.normal,yt=!!re.morphAttributes.color;let Rt=qa;se.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Rt=N.toneMapping);const fn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Et=fn!==void 0?fn.length:0,je=qe.get(se),qt=_.state.lights;if(fe===!0&&(de===!0||C!==D)){const Rn=C===D&&se.id===L;Ae.setState(se,C,Rn)}let St=!1;se.version===je.__version?(je.needsLights&&je.lightsStateVersion!==qt.state.version||je.outputColorSpace!==ke||J.isBatchedMesh&&je.batching===!1||!J.isBatchedMesh&&je.batching===!0||J.isBatchedMesh&&je.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&je.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&je.instancing===!1||!J.isInstancedMesh&&je.instancing===!0||J.isSkinnedMesh&&je.skinning===!1||!J.isSkinnedMesh&&je.skinning===!0||J.isInstancedMesh&&je.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&je.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&je.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&je.instancingMorph===!1&&J.morphTexture!==null||je.envMap!==Ge||se.fog===!0&&je.fog!==we||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ae.numPlanes||je.numIntersection!==Ae.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==Ke||je.morphTargets!==Ve||je.morphNormals!==vt||je.morphColors!==yt||je.toneMapping!==Rt||je.morphTargetsCount!==Et)&&(St=!0):(St=!0,je.__version=se.version);let kn=je.currentProgram;St===!0&&(kn=ua(se,Y,J));let hi=!1,Mn=!1,Ei=!1;const Bt=kn.getUniforms(),kt=je.uniforms;if(Ze.useProgram(kn.program)&&(hi=!0,Mn=!0,Ei=!0),se.id!==L&&(L=se.id,Mn=!0),hi||D!==C){Ze.buffers.depth.getReversed()?(ve.copy(C.projectionMatrix),rM(ve),sM(ve),Bt.setValue(q,"projectionMatrix",ve)):Bt.setValue(q,"projectionMatrix",C.projectionMatrix),Bt.setValue(q,"viewMatrix",C.matrixWorldInverse);const ii=Bt.map.cameraPosition;ii!==void 0&&ii.setValue(q,Fe.setFromMatrixPosition(C.matrixWorld)),it.logarithmicDepthBuffer&&Bt.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Bt.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,Mn=!0,Ei=!0)}if(J.isSkinnedMesh){Bt.setOptional(q,J,"bindMatrix"),Bt.setOptional(q,J,"bindMatrixInverse");const Rn=J.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Bt.setValue(q,"boneTexture",Rn.boneTexture,P))}J.isBatchedMesh&&(Bt.setOptional(q,J,"batchingTexture"),Bt.setValue(q,"batchingTexture",J._matricesTexture,P),Bt.setOptional(q,J,"batchingIdTexture"),Bt.setValue(q,"batchingIdTexture",J._indirectTexture,P),Bt.setOptional(q,J,"batchingColorTexture"),J._colorsTexture!==null&&Bt.setValue(q,"batchingColorTexture",J._colorsTexture,P));const zi=re.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&Je.update(J,re,kn),(Mn||je.receiveShadow!==J.receiveShadow)&&(je.receiveShadow=J.receiveShadow,Bt.setValue(q,"receiveShadow",J.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(kt.envMap.value=Ge,kt.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(kt.envMapIntensity.value=Y.environmentIntensity),Mn&&(Bt.setValue(q,"toneMappingExposure",N.toneMappingExposure),je.needsLights&&fa(kt,Ei),we&&se.fog===!0&&Ce.refreshFogUniforms(kt,we),Ce.refreshMaterialUniforms(kt,se,V,K,_.state.transmissionRenderTarget[C.id]),Gc.upload(q,Oi(je),kt,P)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Gc.upload(q,Oi(je),kt,P),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Bt.setValue(q,"center",J.center),Bt.setValue(q,"modelViewMatrix",J.modelViewMatrix),Bt.setValue(q,"normalMatrix",J.normalMatrix),Bt.setValue(q,"modelMatrix",J.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Rn=se.uniformsGroups;for(let ii=0,Cn=Rn.length;ii<Cn;ii++){const ks=Rn[ii];W.update(ks,kn),W.bind(ks,kn)}}return kn}function fa(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function en(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(C,Y,re){qe.get(C.texture).__webglTexture=Y,qe.get(C.depthTexture).__webglTexture=re;const se=qe.get(C);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=re===void 0,se.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,Y){const re=qe.get(C);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,re=0){Z=C,H=Y,B=re;let se=!0,J=null,we=!1,Oe=!1;if(C){const Ge=qe.get(C);if(Ge.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(q.FRAMEBUFFER,null),se=!1;else if(Ge.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(Ge.__hasExternalTextures)P.rebindTextures(C,qe.get(C.texture).__webglTexture,qe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ve=C.depthTexture;if(Ge.__boundDepthTexture!==Ve){if(Ve!==null&&qe.has(Ve)&&(C.width!==Ve.image.width||C.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const et=C.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Oe=!0);const Ke=qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ke[Y])?J=Ke[Y][re]:J=Ke[Y],we=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?J=qe.get(C).__webglMultisampledFramebuffer:Array.isArray(Ke)?J=Ke[re]:J=Ke,G.copy(C.viewport),ue.copy(C.scissor),le=C.scissorTest}else G.copy(I).multiplyScalar(V).floor(),ue.copy(ae).multiplyScalar(V).floor(),le=ce;if(Ze.bindFramebuffer(q.FRAMEBUFFER,J)&&se&&Ze.drawBuffers(C,J),Ze.viewport(G),Ze.scissor(ue),Ze.setScissorTest(le),we){const Ge=qe.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ge.__webglTexture,re)}else if(Oe){const Ge=qe.get(C.texture),et=Y||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ge.__webglTexture,re||0,et)}L=-1},this.readRenderTargetPixels=function(C,Y,re,se,J,we,Oe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(ke=ke[Oe]),ke){Ze.bindFramebuffer(q.FRAMEBUFFER,ke);try{const Ge=C.texture,et=Ge.format,Ke=Ge.type;if(!it.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-se&&re>=0&&re<=C.height-J&&q.readPixels(Y,re,se,J,nt.convert(et),nt.convert(Ke),we)}finally{const Ge=Z!==null?qe.get(Z).__webglFramebuffer:null;Ze.bindFramebuffer(q.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(C,Y,re,se,J,we,Oe){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(ke=ke[Oe]),ke){const Ge=C.texture,et=Ge.format,Ke=Ge.type;if(!it.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=C.width-se&&re>=0&&re<=C.height-J){Ze.bindFramebuffer(q.FRAMEBUFFER,ke);const Ve=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ve),q.bufferData(q.PIXEL_PACK_BUFFER,we.byteLength,q.STREAM_READ),q.readPixels(Y,re,se,J,nt.convert(et),nt.convert(Ke),0);const vt=Z!==null?qe.get(Z).__webglFramebuffer:null;Ze.bindFramebuffer(q.FRAMEBUFFER,vt);const yt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await aM(q,yt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ve),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,we),q.deleteBuffer(Ve),q.deleteSync(yt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,Y=null,re=0){C.isTexture!==!0&&(jo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,C=arguments[1]);const se=Math.pow(2,-re),J=Math.floor(C.image.width*se),we=Math.floor(C.image.height*se),Oe=Y!==null?Y.x:0,ke=Y!==null?Y.y:0;P.setTexture2D(C,0),q.copyTexSubImage2D(q.TEXTURE_2D,re,0,0,Oe,ke,J,we),Ze.unbindTexture()},this.copyTextureToTexture=function(C,Y,re=null,se=null,J=0){C.isTexture!==!0&&(jo("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,C=arguments[1],Y=arguments[2],J=arguments[3]||0,re=null);let we,Oe,ke,Ge,et,Ke,Ve,vt,yt;const Rt=C.isCompressedTexture?C.mipmaps[J]:C.image;re!==null?(we=re.max.x-re.min.x,Oe=re.max.y-re.min.y,ke=re.isBox3?re.max.z-re.min.z:1,Ge=re.min.x,et=re.min.y,Ke=re.isBox3?re.min.z:0):(we=Rt.width,Oe=Rt.height,ke=Rt.depth||1,Ge=0,et=0,Ke=0),se!==null?(Ve=se.x,vt=se.y,yt=se.z):(Ve=0,vt=0,yt=0);const fn=nt.convert(Y.format),Et=nt.convert(Y.type);let je;Y.isData3DTexture?(P.setTexture3D(Y,0),je=q.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(P.setTexture2DArray(Y,0),je=q.TEXTURE_2D_ARRAY):(P.setTexture2D(Y,0),je=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Y.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Y.unpackAlignment);const qt=q.getParameter(q.UNPACK_ROW_LENGTH),St=q.getParameter(q.UNPACK_IMAGE_HEIGHT),kn=q.getParameter(q.UNPACK_SKIP_PIXELS),hi=q.getParameter(q.UNPACK_SKIP_ROWS),Mn=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,Rt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Rt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Ge),q.pixelStorei(q.UNPACK_SKIP_ROWS,et),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Ke);const Ei=C.isDataArrayTexture||C.isData3DTexture,Bt=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const kt=qe.get(C),zi=qe.get(Y),Rn=qe.get(kt.__renderTarget),ii=qe.get(zi.__renderTarget);Ze.bindFramebuffer(q.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Ze.bindFramebuffer(q.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let Cn=0;Cn<ke;Cn++)Ei&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,qe.get(C).__webglTexture,J,Ke+Cn),C.isDepthTexture?(Bt&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,qe.get(Y).__webglTexture,J,yt+Cn),q.blitFramebuffer(Ge,et,we,Oe,Ve,vt,we,Oe,q.DEPTH_BUFFER_BIT,q.NEAREST)):Bt?q.copyTexSubImage3D(je,J,Ve,vt,yt+Cn,Ge,et,we,Oe):q.copyTexSubImage2D(je,J,Ve,vt,yt+Cn,Ge,et,we,Oe);Ze.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Bt?C.isDataTexture||C.isData3DTexture?q.texSubImage3D(je,J,Ve,vt,yt,we,Oe,ke,fn,Et,Rt.data):Y.isCompressedArrayTexture?q.compressedTexSubImage3D(je,J,Ve,vt,yt,we,Oe,ke,fn,Rt.data):q.texSubImage3D(je,J,Ve,vt,yt,we,Oe,ke,fn,Et,Rt):C.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,J,Ve,vt,we,Oe,fn,Et,Rt.data):C.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,J,Ve,vt,Rt.width,Rt.height,fn,Rt.data):q.texSubImage2D(q.TEXTURE_2D,J,Ve,vt,we,Oe,fn,Et,Rt);q.pixelStorei(q.UNPACK_ROW_LENGTH,qt),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,St),q.pixelStorei(q.UNPACK_SKIP_PIXELS,kn),q.pixelStorei(q.UNPACK_SKIP_ROWS,hi),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Mn),J===0&&Y.generateMipmaps&&q.generateMipmap(je),Ze.unbindTexture()},this.copyTextureToTexture3D=function(C,Y,re=null,se=null,J=0){return C.isTexture!==!0&&(jo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,se=arguments[1]||null,C=arguments[2],Y=arguments[3],J=arguments[4]||0),jo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Y,re,se,J)},this.initRenderTarget=function(C){qe.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Ze.unbindTexture()},this.resetState=function(){H=0,B=0,Z=null,Ze.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=bt._getDrawingBufferColorSpace(e),i.unpackColorSpace=bt._getUnpackColorSpace()}}class v3 extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Vc extends Gs{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zc=new ie,Kc=new ie,Xv=new Wt,ko=new z_,Uc=new iu,kh=new ie,Wv=new ie;class K_ extends bn{constructor(e=new ni,i=new Vc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Zc.fromBufferAttribute(i,l-1),Kc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Zc.distanceTo(Kc);e.setAttribute("lineDistance",new ti(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(l),Uc.radius+=c,e.ray.intersectsSphere(Uc)===!1)return;Xv.copy(l).invert(),ko.copy(e.ray).applyMatrix4(Xv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const b=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let T=b,y=M-1;T<y;T+=m){const _=g.getX(T),O=g.getX(T+1),U=Lc(this,e,ko,p,_,O);U&&i.push(U)}if(this.isLineLoop){const T=g.getX(M-1),y=g.getX(b),_=Lc(this,e,ko,p,T,y);_&&i.push(_)}}else{const b=Math.max(0,f.start),M=Math.min(x.count,f.start+f.count);for(let T=b,y=M-1;T<y;T+=m){const _=Lc(this,e,ko,p,T,T+1);_&&i.push(_)}if(this.isLineLoop){const T=Lc(this,e,ko,p,M-1,b);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Lc(r,e,i,s,l,c){const f=r.geometry.attributes.position;if(Zc.fromBufferAttribute(f,l),Kc.fromBufferAttribute(f,c),i.distanceSqToSegment(Zc,Kc,kh,Wv)>s)return;kh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(kh);if(!(p<e.near||p>e.far))return{distance:p,point:Wv.clone().applyMatrix4(r.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:r}}const qv=new ie,Yv=new ie;class Zv extends K_{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)qv.fromBufferAttribute(i,l),Yv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+qv.distanceTo(Yv);e.setAttribute("lineDistance",new ti(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _3 extends K_{constructor(e,i){super(e,i),this.isLineLoop=!0,this.type="LineLoop"}}class Yo extends ni{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(f+h,Math.PI);let m=0;const g=[],v=new ie,x=new ie,b=[],M=[],T=[],y=[];for(let _=0;_<=s;_++){const O=[],U=_/s;let N=0;_===0&&f===0?N=.5/i:_===s&&p===Math.PI&&(N=-.5/i);for(let X=0;X<=i;X++){const H=X/i;v.x=-e*Math.cos(l+H*c)*Math.sin(f+U*h),v.y=e*Math.cos(f+U*h),v.z=e*Math.sin(l+H*c)*Math.sin(f+U*h),M.push(v.x,v.y,v.z),x.copy(v).normalize(),T.push(x.x,x.y,x.z),y.push(H+N,1-U),O.push(m++)}g.push(O)}for(let _=0;_<s;_++)for(let O=0;O<i;O++){const U=g[_][O+1],N=g[_][O],X=g[_+1][O],H=g[_+1][O+1];(_!==0||f>0)&&b.push(U,N,H),(_!==s-1||p<Math.PI)&&b.push(N,X,H)}this.setIndex(b),this.setAttribute("position",new ti(M,3)),this.setAttribute("normal",new ti(T,3)),this.setAttribute("uv",new ti(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class x3 extends ni{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const i=[],s=new Set,l=new ie,c=new ie;if(e.index!==null){const f=e.attributes.position,h=e.index;let p=e.groups;p.length===0&&(p=[{start:0,count:h.count,materialIndex:0}]);for(let m=0,g=p.length;m<g;++m){const v=p[m],x=v.start,b=v.count;for(let M=x,T=x+b;M<T;M+=3)for(let y=0;y<3;y++){const _=h.getX(M+y),O=h.getX(M+(y+1)%3);l.fromBufferAttribute(f,_),c.fromBufferAttribute(f,O),Kv(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const f=e.attributes.position;for(let h=0,p=f.count/3;h<p;h++)for(let m=0;m<3;m++){const g=3*h+m,v=3*h+(m+1)%3;l.fromBufferAttribute(f,g),c.fromBufferAttribute(f,v),Kv(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new ti(i,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Kv(r,e,i){const s=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,l=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return i.has(s)===!0||i.has(l)===!0?!1:(i.add(s),i.add(l),!0)}class y3 extends Gs{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new _t(16777215),this.specular=new _t(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=N_,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Q_ extends bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const jh=new Wt,Qv=new ie,Jv=new ie;class S3{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zd,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Qv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Qv),Jv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Jv),i.updateMatrixWorld(),jh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class b3 extends S3{constructor(){super(new ei(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const i=this.camera,s=Ps*2*e.angle*this.focus,l=this.mapSize.width/this.mapSize.height,c=e.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $v extends Q_{constructor(e,i,s=0,l=Math.PI/3,c=0,f=2){super(e,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new b3}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class M3 extends Q_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class E3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=e_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=e_();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function e_(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);const T3=({className:r="",isActive:e=!1,onToggle:i})=>{const s=he.useRef(null),l=he.useRef(null),c=he.useRef(e);he.useEffect(()=>{c.current=e},[e]),he.useEffect(()=>{const h=s.current;if(!h)return;const p=new v3,m=new ei(40,1,.1,20);m.position.set(0,0,4);const g=new g3({antialias:!0,alpha:!0}),v=h.clientWidth||320,x=h.clientHeight||v;g.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),g.setSize(v,x),g.setClearColor(0,0),g.outputColorSpace=$n,h.appendChild(g.domElement);const b=new M3(16777215,.45);p.add(b);const M=new $v(199945,1.2);M.position.set(3,3,3),p.add(M);const T=new $v(61695,.9);T.position.set(-3,-2,-3),p.add(T);const y=new Rr;p.add(y);const _=new y3({color:1284,emissive:180030,emissiveIntensity:.4,transparent:!0,shininess:1}),O=new Si(new Yo(1.28,96,96),_);y.add(O);const U=new Yd({color:new _t("#3ffc85"),transparent:!0,opacity:.28,side:On}),N=new Si(new Yo(1.28,94,94),U);y.add(N);const X=new x3(new Yo(1.28,64,64)),H=new Vc({color:262109,transparent:!0,opacity:.8}),B=new Zv(X,H);y.add(B);const Z=new Rr,L=A3(),D=[];L.forEach(V=>{const Se=new Vc({color:9568178,transparent:!0,opacity:.91}),E=new Zv(V,Se);Z.add(E),D.push(Se)}),y.add(Z);const G=new Rr,ue=w3(),le=[];ue.forEach(V=>{const Se=new Vc({color:new _t(V.color),transparent:!0,opacity:.6}),E=new _3(V.geometry,Se);E.position.set(0,V.yOffset,0),G.add(E),V.instance=E,le.push(Se)}),y.add(G);const ye=new E3,me=()=>{const V=ye.getElapsedTime();O.rotation.y=V*.12,O.rotation.x=Math.sin(V*.1)*.04,B.rotation.y=V*.35,B.rotation.x=Math.sin(V*.2)*.05;const E=(c.current?1.25:1.18)+Math.sin(V*2)*.05;N.scale.setScalar(E),Z.children.forEach((I,ae)=>{I.rotation.y=V*(.2+ae*.05)}),ue.forEach((I,ae)=>{if(!I.instance)return;I.instance.rotation.y=V*I.rotationSpeed,I.instance.rotation.x=I.verticalTilt;const ce=1+Math.sin(V*I.waveSpeed+ae)*I.waveAmplitude;I.instance.scale.set(1,ce,1)}),g.render(p,m),l.current=requestAnimationFrame(me)};me();const z=()=>{if(!h)return;const{clientWidth:V,clientHeight:Se}=h,E=V||320,I=Se||E;g.setSize(E,I),m.aspect=E/I,m.updateProjectionMatrix()};window.addEventListener("resize",z);let K=null;return"ResizeObserver"in window&&(K=new ResizeObserver(z),K.observe(h)),z(),()=>{l.current!==null&&cancelAnimationFrame(l.current),window.removeEventListener("resize",z),K==null||K.disconnect(),h.removeChild(g.domElement),L.forEach(V=>V.dispose()),D.forEach(V=>V.dispose()),ue.forEach(V=>V.geometry.dispose()),le.forEach(V=>V.dispose()),O.geometry.dispose(),_.dispose(),N.geometry.dispose(),U.dispose(),X.dispose(),H.dispose(),g.dispose()}},[]);const f=he.useCallback(h=>{i&&(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),i())},[i]);return R.jsxs("div",{role:i?"button":void 0,tabIndex:i?0:void 0,"aria-pressed":i?e:void 0,"aria-label":i?"Tap to talk with the assistant":void 0,onClick:i,onKeyDown:f,className:`relative isolate aspect-square w-full max-w-[320px] select-none overflow-hidden rounded-full border border-cyber-blue/20 bg-transparent transition-shadow duration-700 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyber-blue/70 ${e?"shadow-[0_0_60px_rgba(0,240,255,0.45)]":"shadow-[0_0_30px_rgba(0,240,255,0.12)]"} ${i?"cursor-pointer":""} ${r}`,children:[R.jsx("div",{ref:s,className:"h-full w-full"}),R.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-full border border-cyber-blue/10"}),R.jsx("div",{className:"pointer-events-none absolute -inset-5 rounded-full bg-cyber-blue/5 blur-3xl"})]})},A3=()=>{const r=[],s=[-75,-60,-45,-30,-15,0,15,30,45,60,75],l=220;s.forEach(c=>{const f=Hc.degToRad(c),h=[];for(let m=0;m<=l;m++){const g=m/l*Math.PI*2,v=1.33*Math.cos(f)*Math.cos(g),x=1.33*Math.sin(f),b=1.33*Math.cos(f)*Math.sin(g);h.push(new ie(v,x,b))}const p=new ni().setFromPoints(h);r.push(p)});for(let c=0;c<18;c++){const f=c/18*Math.PI*2,h=[];for(let m=0;m<=l;m++){const g=-Math.PI/2+m/l*Math.PI,v=1.33*Math.cos(g)*Math.cos(f),x=1.33*Math.sin(g),b=1.33*Math.cos(g)*Math.sin(f);h.push(new ie(v,x,b))}const p=new ni().setFromPoints(h);r.push(p)}return r},w3=()=>[{radius:1.55,yOffset:0,color:"#60A5FA",rotationSpeed:.4,waveSpeed:2.4,waveAmplitude:.06,verticalTilt:Hc.degToRad(65)},{radius:1.7,yOffset:.18,color:"#F87171",rotationSpeed:-.35,waveSpeed:2.1,waveAmplitude:.05,verticalTilt:Hc.degToRad(75)},{radius:1.85,yOffset:-.22,color:"#C084FC",rotationSpeed:.48,waveSpeed:2.7,waveAmplitude:.07,verticalTilt:Hc.degToRad(55)}].map(i=>{const s=new ni,l=new Float32Array(141*3);for(let c=0;c<=140;c+=1){const f=c/140*Math.PI*2,h=i.radius*Math.cos(f),p=i.radius*Math.sin(f);l[c*3]=h,l[c*3+1]=0,l[c*3+2]=p}return s.setAttribute("position",new Mi(l,3)),s.computeBoundingSphere(),{geometry:s,color:i.color,rotationSpeed:i.rotationSpeed,waveSpeed:i.waveSpeed,waveAmplitude:i.waveAmplitude,yOffset:i.yOffset,verticalTilt:i.verticalTilt}}),t_="guideorb:v1",R3=1e3*60*60*24*365,C3=[/wavenet|neural|google|microsoft/i];function D3({className:r="",orbClassName:e="",onStateChange:i}){const s=$c(),[l,c]=he.useState("idle"),[f,h]=he.useState("Tap the orb to talk."),[p,m]=he.useState([]),[g,v]=he.useState(!0),x=he.useRef(null),b=he.useRef(null),M=he.useRef(null),T=he.useRef(!1),y=he.useRef("idle"),_=he.useCallback(()=>{try{const E=localStorage.getItem(t_);return E?JSON.parse(E):{}}catch{return{}}},[]),O=he.useCallback(E=>{try{const I=_();localStorage.setItem(t_,JSON.stringify({...I,...E,savedAt:Date.now()}))}catch{}},[_]),[U,N]=he.useState(()=>{try{const E=_();return!E.name||E.savedAt&&Date.now()-E.savedAt>R3?null:E.name||null}catch{return null}});he.useEffect(()=>{y.current=l,i==null||i({mode:l,message:f,ephemeral:!0})},[l,f,i]),he.useEffect(()=>{if(typeof window>"u")return;(()=>{window.innerWidth<640?v(!1):v(!0)})();const I=()=>{window.innerWidth>=640&&v(!0)};return window.addEventListener("resize",I),()=>{window.removeEventListener("resize",I)}},[]);const X=he.useCallback((E,I)=>{m(ae=>[...ae,{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,role:E,text:I,time:Date.now()}])},[]),H=he.useCallback(async E=>{var de;const I=b.current;if(!I)return;const ae="/sfx/breath-1.mp3",ce=async ve=>{if(!(ve.length<55))try{const Re=new Audio(ae);Re.volume=.05,await Re.play(),await new Promise(Fe=>setTimeout(Fe,60)),Re.pause()}catch{}},j=E.replace(/\s+/g," ").trim(),fe=j.length>0?j.match(/[^.!?]+[.!?]?/g)??[j]:[];I.cancel();for(let ve=0;ve<fe.length;ve++){const Re=(de=fe[ve])==null?void 0:de.trim();Re&&(ve>0&&await ce(Re),await new Promise(Fe=>{const We=new SpeechSynthesisUtterance(Re),at=1.2;We.rate=Math.min(1.35,at+Math.sin(ve*.6)*.05),We.pitch=.98+(ve%2===0?.01:-.01),We.volume=.94,M.current&&(We.voice=M.current),We.onend=()=>Fe(),We.onerror=()=>Fe(),I.speak(We)}),await new Promise(Fe=>setTimeout(Fe,8)))}},[]);he.useEffect(()=>{var j,fe;b.current=typeof window<"u"?window.speechSynthesis:null;let E=!0,I=0;const ae=()=>{var Fe,We;if(!b.current)return;const de=((We=(Fe=b.current).getVoices)==null?void 0:We.call(Fe))??[];if(de.length===0&&I<5){I+=1,setTimeout(ae,200+I*150);return}if(!E)return;const ve=de.find(at=>C3.some(rt=>rt.test(at.name))),Re=de.find(at=>{var rt;return(rt=at.lang)==null?void 0:rt.toLowerCase().startsWith("en")});M.current=ve??Re??de[0]??null};ae();const ce=()=>{ae()};return(fe=(j=b.current)==null?void 0:j.addEventListener)==null||fe.call(j,"voiceschanged",ce),()=>{var de,ve;E=!1,(ve=(de=b.current)==null?void 0:de.removeEventListener)==null||ve.call(de,"voiceschanged",ce)}},[]);const B=he.useCallback((E,I,ae=!0)=>{c(E),y.current=E,I&&h(I),i==null||i({mode:E,message:I,ephemeral:ae})},[i]),Z=he.useCallback(E=>{const I=E.trim(),ae=[/i(?:'| a)m\s+([A-Za-z][A-Za-z\s'\-]{0,28})/i,/my name is\s+([A-Za-z][A-Za-z\s'\-]{0,28})/i,/call me\s+([A-Za-z][A-Za-z\s'\-]{0,28})/i,/\bthis is\s+([A-Za-z][A-Za-z\s'\-]{0,28})/i];for(const j of ae){const fe=I.match(j);if(fe&&fe[1]){const de=fe[1].trim().replace(/[^A-Za-z\s'\-]/g,"").slice(0,30);if(de.length)return de.split(" ").map(ve=>ve[0].toUpperCase()+ve.slice(1)).join(" ")}}const ce=I.split(/\s+/);if(ce.length===1&&ce[0].length<=24){const j=ce[0].replace(/[^A-Za-z]/g,"");if(j.length>=2)return j[0].toUpperCase()+j.slice(1)}return null},[]),L=he.useCallback(E=>{const I=E.toLowerCase();if(/\b(open|go to|show|take me to|navigate)\b/.test(I)&&/\b(projects|experience|blog|resume|contact|home)\b/.test(I)){const ae=I.match(/\b(projects|experience|blog|resume|contact|home)\b/)[1];return{intent:"navigate",target:ae==="home"?"/":`/${ae}`}}return/\b(stop|pause|cancel|hold on|wait)\b/.test(I)?{intent:"control",cmd:"pause"}:/\b(hello|hi|hey|thanks|thank you|who are you|what can you do)\b/.test(I)?{intent:"smalltalk"}:{intent:"knowledge",query:E}},[]),D=E=>`wiki:${E.toLowerCase().slice(0,64)}`,G=he.useCallback(async E=>{try{const I=D(E),ae=localStorage.getItem(I);if(ae){const ve=JSON.parse(ae);if(Date.now()-ve.ts<1e3*60*60*24*7)return ve.summary}const ce=`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(E)}`,j=await fetch(ce);if(!j.ok)return null;const de=(await j.json()).extract||null;return de&&localStorage.setItem(I,JSON.stringify({summary:de,ts:Date.now()})),de}catch{return null}},[]),ue=he.useCallback(async E=>{const I=L(E);if(I.intent==="navigate")return{caption:`Opening ${I.target.replace("/","")||"home"}...`,speech:`Opening ${I.target.replace("/","")||"home"} now.`,action:"navigate",target:I.target,confidence:.9};if(I.intent==="control")return{caption:"Paused. Tap to resume the assistant.",speech:"Okay, I will pause listening. Tap the orb to resume.",action:"respond",confidence:.95};if(I.intent==="smalltalk"){const ce=E.toLowerCase();return/\bwho are you\b/.test(ce)?{caption:"I am Ujwal’s guide orbit.",speech:"I am Ujwal’s guide orbit — here to help you explore the site.",action:"respond",confidence:.9}:/\bwhat can you do\b/.test(ce)?{caption:"I can open pages, highlight sections, and answer general questions.",speech:"I can open pages, highlight sections, and answer general questions. Ask me to open Experience or show Projects.",action:"respond",confidence:.9}:/\bhello|hi|hey\b/.test(ce)?{caption:`Hi${U?", "+U:""}! How can I help?`,speech:`Hi${U?", "+U:""}! How can I help?`,action:"respond",confidence:.9}:{caption:"I'm here — ask me to open Experience or Projects.",speech:"I'm here — ask me to open Experience or Projects.",action:"respond",confidence:.8}}B("knowledgeLookup","Looking that up...",!0);const ae=await G(E);return ae?{caption:ae.slice(0,200)+(ae.length>200?"...":""),speech:ae,action:"respond",confidence:.7}:{caption:"I’m not aware of that. Try rephrasing or ask something else.",speech:"I'm not aware of that. I couldn't find a quick summary.",action:"respond",confidence:.2}},[B,G,L,U]),le=he.useCallback(async E=>{if(E&&(E.action==="navigate"&&E.target&&((E.confidence??0)>=.6?(B("navigation",`Navigating to ${E.target}`,!0),s(E.target)):(B("processing",`Do you want me to go to ${E.target}?`,!0),window.confirm(`Go to ${E.target}?`)&&s(E.target))),E.action==="highlight"&&E.target)){const I=document.querySelector(E.target);I&&(I.scrollIntoView({behavior:"smooth",block:"center"}),I.classList.add("guide-orb-highlight"),setTimeout(()=>I.classList.remove("guide-orb-highlight"),3e3))}},[B,s]),ye=he.useCallback(async E=>{if(!T.current)return;X("user",E),B("processing","Processing your request...",!0);const I=await ue(E);X("assistant",I.caption),h(I.caption),await H(I.speech),await le(I),T.current&&B("idle","Tap the orb to talk.",!0)},[B,le,X,ue,H]);he.useEffect(()=>{if(T.current=!0,typeof window>"u")return()=>{T.current=!1};const E=window.SpeechRecognition||window.webkitSpeechRecognition||null;if(!E||!window.speechSynthesis)return B("error","Voice not supported in this browser.",!0),()=>{T.current=!1};const I=new E;return I.continuous=!1,I.interimResults=!1,I.lang="en-US",I.maxAlternatives=1,I.onresult=ae=>{var j,fe,de;const ce=((de=(fe=(j=ae==null?void 0:ae.results)==null?void 0:j[0])==null?void 0:fe[0])==null?void 0:de.transcript)??"";if(!ce){B("error","I didn't catch that. Please try again.",!0);return}ye(ce)},I.onerror=()=>{B("error","Microphone error. Tap to retry.",!0)},I.onend=()=>{},x.current=I,()=>{var ae,ce;(ce=(ae=x.current)==null?void 0:ae.stop)==null||ce.call(ae),x.current=null,T.current=!1}},[B,ye]);const me=he.useCallback(async()=>{var E,I;(I=(E=x.current)==null?void 0:E.stop)==null||I.call(E),B("greeting","Hi! What is your name?",!0),h("Hi! What is your name?");try{const ae=window.SpeechRecognition||window.webkitSpeechRecognition||null;if(!ae)return;const ce=new ae;ce.continuous=!1,ce.interimResults=!1,ce.lang="en-US",ce.maxAlternatives=1,ce.onresult=async j=>{var Re,Fe,We;const fe=((We=(Fe=(Re=j==null?void 0:j.results)==null?void 0:Re[0])==null?void 0:Fe[0])==null?void 0:We.transcript)??"";if(!fe){await H("I didn't catch the name. Could you say that again?"),await me();return}const de=Z(fe)??fe.split(" ").slice(0,2).map(at=>at[0].toUpperCase()+at.slice(1)).join(" ");await H(`Nice to meet you, ${de}. Shall I remember your name on this device? Say yes or no.`);const ve=new ae;ve.continuous=!1,ve.interimResults=!1,ve.lang="en-US",ve.maxAlternatives=1,ve.onresult=async at=>{var Nt,q,gn,ut;const rt=(((gn=(q=(Nt=at==null?void 0:at.results)==null?void 0:Nt[0])==null?void 0:q[0])==null?void 0:gn.transcript)??"").toLowerCase();(ut=ve.stop)==null||ut.call(ve),N(de),/\b(yes|sure|yep|yeah|okay|ok|haa)\b/.test(rt)?(O({name:de,savedAt:Date.now()}),await H(`All set, ${de}. I will remember you here.`),B("idle",`Welcome, ${de}.`)):(await H("No problem. I won't save your name."),B("idle","Okay — I will not remember your name."))},ve.onerror=async()=>{var at;(at=ve.stop)==null||at.call(ve),await H("I couldn't hear that. I won't save your name for now."),B("idle","Name not saved.")},ve.start()},ce.onerror=async()=>{var j;(j=ce.stop)==null||j.call(ce),await H("I couldn't hear you. Try tapping the orb and telling me your name."),B("idle","Tap to tell me your name.")},ce.start()}catch{B("error","Microphone busy or unavailable.",!0)}},[B,Z,O,H]),z=he.useCallback(()=>{var E,I,ae,ce;(I=(E=x.current)==null?void 0:E.stop)==null||I.call(E),(ce=(ae=b.current)==null?void 0:ae.cancel)==null||ce.call(ae),B("idle","Tap the orb to talk.",!0)},[B]),K=he.useCallback(()=>{var E,I;if(l!=="idle"){z();return}if(!U){B("greeting","Let's get to know each other.",!0),(async()=>(await H("Hello — I'm your guide orb. What's your name?"),await me()))();return}c("listening"),y.current="listening",h("Listening — speak now.");try{(I=(E=x.current)==null?void 0:E.start)==null||I.call(E)}catch{B("error","Microphone busy. Tap to retry.",!0)}},[me,z,B,l,H,U]),V=he.useCallback(E=>{(E.key==="Enter"||E.key===" ")&&(E.preventDefault(),K())},[K]),Se=l!=="idle"&&l!=="error";return R.jsxs("div",{className:`flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6 ${r}`,children:[R.jsxs("div",{role:"button",tabIndex:0,"aria-label":"Activate GuideOrb assistant","aria-pressed":Se,onClick:K,onKeyDown:V,className:`relative flex w-full max-w-[420px] items-center justify-center rounded-full p-1 transition-all sm:justify-center sm:max-w-[320px] lg:max-w-[720px] xl:max-w-[880px] 2xl:max-w-[980px] ${Se?"shadow-[0_0_25px_rgba(0,240,255,0.35)]":"shadow-[0_0_12px_rgba(0,240,255,0.18)]"}`,children:[R.jsx(T3,{className:`pointer-events-none w-full ${e}`,isActive:Se}),l==="listening"&&R.jsxs("span",{className:"absolute -bottom-4 flex items-center gap-2 rounded-full bg-gray-900/90 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.3em] text-pink-400 sm:text-xs",children:["Listening",R.jsx("span",{className:"h-2 w-2 animate-pulse rounded-full bg-pink-400"})]})]}),R.jsxs("div",{className:"flex w-full max-w-md flex-col gap-2 sm:max-w-[16rem]",children:[R.jsxs("div",{className:"rounded-xl border border-cyber-blue/25 bg-[rgba(5,7,9,0.7)] px-3 py-3 text-xs shadow-[0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur",children:[R.jsx("div",{className:"mb-1 text-[10px] font-mono uppercase tracking-[0.35em] text-gray-400",children:"Assistant"}),R.jsx("div",{className:"text-sm leading-relaxed text-white sm:text-xs",children:f})]}),!g&&R.jsx("button",{type:"button",onClick:()=>v(!0),className:"sm:hidden rounded-full border border-cyber-blue/30 bg-black/60 px-4 py-2 text-xs font-mono uppercase tracking-[0.3em] text-cyber-blue shadow-[0_8px_20px_rgba(2,12,24,0.35)]",children:"Show Conversation"}),g&&R.jsxs("div",{className:"max-h-48 w-full overflow-y-auto rounded-xl border border-cyber-blue/15 bg-black/70 px-3 py-3 text-xs shadow-[0_12px_30px_rgba(2,12,24,0.45)] backdrop-blur",children:[R.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[R.jsx("span",{className:"text-[10px] font-mono uppercase tracking-[0.35em] text-gray-400",children:"Recent"}),R.jsx("button",{type:"button",onClick:()=>v(!1),className:"sm:hidden text-[9px] uppercase tracking-[0.3em] text-cyber-blue",children:"Hide"})]}),p.length===0?R.jsx("div",{className:"text-center text-[11px] text-gray-400 sm:text-left",children:"Conversation will appear here after you chat."}):p.slice(-6).reverse().map(E=>R.jsxs("div",{className:`mb-2 last:mb-0 ${E.role==="user"?"text-cyan-300":"text-pink-300"}`,children:[R.jsx("div",{className:"font-mono text-[9px] uppercase tracking-[0.25em] opacity-70",children:E.role}),R.jsx("div",{className:"text-xs leading-relaxed",children:E.text})]},E.id))]})]})]})}const Oc=["Fullstack Developer","Cyber Security Enthusiast"],N3=()=>{const[r,e]=he.useState(0),[i,s]=he.useState(0),[l,c]=he.useState(!1);return he.useEffect(()=>{const f=Oc[r];let h;return!l&&i===f.length?h=window.setTimeout(()=>c(!0),1200):l&&i===0?h=window.setTimeout(()=>{c(!1),e((r+1)%Oc.length)},300):h=window.setTimeout(()=>{s(p=>p+(l?-1:1))},l?60:120),()=>window.clearTimeout(h)},[r,i,l]),R.jsx("span",{className:"typing-text","aria-label":Oc[r],children:Oc[r].slice(0,i)})},U3=()=>{const r=he.useRef(null);return he.useEffect(()=>{const e=r.current;if(!e)return;const i=e.getContext("2d");if(!i)return;e.width=window.innerWidth,e.height=window.innerHeight;const l="アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz !@#$%^&*()_+[]{}|;:,.<>?/~`".split(""),c=14,f=Math.floor(e.width/c),h=[];for(let v=0;v<f;v++)h[v]=Math.random()*-100;const m=setInterval(()=>{i.fillStyle="rgba(10, 10, 15, 0.05)",i.fillRect(0,0,e.width,e.height),i.fillStyle="#00f0ff",i.font=`${c}px monospace`;for(let v=0;v<h.length;v++){const x=l[Math.floor(Math.random()*l.length)];i.fillText(x,v*c,h[v]*c),h[v]*c>e.height&&Math.random()>.975&&(h[v]=0),h[v]++}},35),g=()=>{e.width=window.innerWidth,e.height=window.innerHeight;const v=Math.floor(e.width/c);h.length=0;for(let x=0;x<v;x++)h[x]=Math.random()*-100};return window.addEventListener("resize",g),()=>{clearInterval(m),window.removeEventListener("resize",g)}},[]),R.jsxs("section",{id:"home",className:"relative flex min-h-[120vh] items-center lg:h-screen",children:[R.jsx("div",{className:"absolute inset-0 bg-cyber-dark z-0",children:R.jsx("canvas",{ref:r,className:"w-full h-full opacity-30"})}),R.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-dark via-cyber-blue to-cyber-dark"}),R.jsx("div",{className:"absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-dark via-cyber-pink to-cyber-dark"}),R.jsx("div",{className:"container mx-auto px-4 z-10",children:R.jsxs("div",{className:"flex flex-col items-center gap-12 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center lg:gap-12",children:[R.jsxs("div",{className:"max-w-3xl text-center lg:text-left",children:[R.jsxs("h1",{className:"text-2xl md:text-6xl font-dystopian text-white mb-4",children:[R.jsx("span",{className:"block",children:"I'AM"}),R.jsx("span",{className:"text-cyber-blue animate-glow",children:"UJWAL THAKARE"})]}),R.jsx("div",{className:"h-1 w-32 bg-cyber-pink mb-6"}),R.jsx("h2",{className:"mb-8 text-left text-xl font-mono text-gray-300 md:text-2xl",children:R.jsx(N3,{})}),R.jsx("p",{className:"text-gray-400 mb-8 max-w-lg",children:"Building digital experiences with a focus on performance, security, and cutting-edge design. Let's create something extraordinary together."}),R.jsx("a",{href:"#about",className:"cyber-button",children:"Explore My Work"}),R.jsxs("div",{className:"mt-10 flex flex-col items-center gap-2 sm:grid sm:grid-cols-3 sm:gap-3 sm:items-stretch",children:[R.jsxs(Xa,{to:"/blogs",className:"flex w-full max-w-[240px] items-center justify-center gap-2 rounded border border-cyber-blue/40 bg-cyber-dark/70 px-3 py-2 text-center text-xs font-mono uppercase tracking-[0.08em] text-cyber-blue transition hover:border-cyber-blue/80 hover:bg-cyber-blue/10 sm:max-w-none sm:justify-between sm:text-left sm:px-4 sm:py-3 sm:text-sm sm:tracking-[0.2em]",children:["Blog Posts ",R.jsx("span",{className:"hidden text-[0.6rem] tracking-[0.3em] text-gray-400 sm:inline",children:"/Latest"})]}),R.jsxs(Xa,{to:"/case-studies",className:"flex w-full max-w-[240px] items-center justify-center gap-2 rounded border border-cyber-blue/40 bg-cyber-dark/70 px-3 py-2 text-center text-xs font-mono uppercase tracking-[0.08em] text-cyber-blue transition hover:border-cyber-blue/80 hover:bg-cyber-blue/10 sm:max-w-none sm:justify-between sm:text-left sm:px-4 sm:py-3 sm:text-sm sm:tracking-[0.3em]",children:["Case Studies ",R.jsx("span",{className:"hidden text-[0.6rem] tracking-[0.3em] text-gray-400 sm:inline",children:"/Deep Dives"})]}),R.jsxs(Xa,{to:"/study-material",className:"flex w-full max-w-[240px] items-center justify-center gap-2 rounded border border-cyber-blue/40 bg-cyber-dark/70 px-3 py-2 text-center text-xs font-mono uppercase tracking-[0.08em] text-cyber-blue transition hover:border-cyber-blue/80 hover:bg-cyber-blue/10 sm:max-w-none sm:justify-between sm:text-left sm:px-4 sm:py-3 sm:text-sm sm:tracking-[0.3em]",children:["Study Vault ",R.jsx("span",{className:"hidden text-[0.6rem] tracking-[0.3em] text-gray-400 sm:inline",children:"/Resources"})]})]})]}),R.jsx("div",{className:"flex w-full max-w-[360px] flex-col items-center lg:mx-auto lg:max-w-[560px]",children:R.jsx(D3,{className:"w-full justify-center",orbClassName:"w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[640px]"})})]})}),R.jsx("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",children:R.jsx("a",{href:"#about",className:"text-cyber-blue",children:R.jsx(V1,{size:24})})})]})},L3=()=>R.jsx("section",{id:"about",className:"py-20 bg-cyber-light",children:R.jsx("div",{className:"container mx-auto px-4",children:R.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-12",children:[R.jsx("div",{className:"w-full md:w-1/3 mb-8 md:mb-0",children:R.jsx("div",{className:"cyber-border p-1 max-w-sm mx-auto",children:R.jsx("div",{className:"relative overflow-hidden aspect-square",children:R.jsx("div",{className:"w-full h-full  bg-gradient-to-br from-cyber-blue/20 to-cyber-pink/30 flex items-center",children:R.jsx("img",{src:"/images/profile.jpg",alt:"Profile"})})})})}),R.jsxs("div",{className:"w-full md:w-2/3",children:[R.jsx("h2",{className:"cyber-heading text-3xl mb-6",children:"About Me"}),R.jsx("div",{className:"h-1 w-24 bg-cyber-blue mb-8"}),R.jsx("p",{className:"text-gray-300 mb-6",children:"Hello! I'm Ujwal Thakare, a passionate Software Developer with expertise in building modern web applications. I specialize in creating responsive, user-friendly interfaces and robust backend systems."}),R.jsx("p",{className:"text-gray-300 mb-6",children:"With a background in Computer Science, I bring a unique perspective to every project. I'm constantly learning and exploring new technologies to stay at the cutting edge of web development."}),R.jsx("p",{className:"text-gray-300 mb-8",children:"When I'm not coding, you can find me hiking, reading or exploring trends in cybersecurity world. I believe that these diverse interests help fuel my creativity and problem-solving abilities in my technical work."}),R.jsxs("div",{className:"flex flex-wrap gap-4",children:[R.jsxs("div",{className:"cyber-card flex-1 min-w-[200px]",children:[R.jsx("h3",{className:"text-cyber-blue font-cyber text-lg mb-2",children:"Education"}),R.jsx("p",{className:"text-gray-400",children:"Bachelor of Science in Computer Science"}),R.jsx("p",{className:"text-gray-500 text-sm",children:"Savitribai Phule Pune University, 2025"})]}),R.jsxs("div",{className:"cyber-card flex-1 min-w-[200px]",children:[R.jsx("h3",{className:"text-cyber-blue font-cyber text-lg mb-2",children:"Location"}),R.jsx("p",{className:"text-gray-400",children:"Pune, India"}),R.jsx("p",{className:"text-gray-500 text-sm",children:"Open to Remote Work"})]})]})]})]})})}),O3=()=>{const r=[{title:"Frontend",icon:R.jsx(F1,{className:"text-cyber-blue",size:24}),skills:["React.js","Tailwind CSS","Bootstrap","HTML5","CSS3","JavaScript (ES6+)","TypeScript"]},{title:"Backend",icon:R.jsx(B1,{className:"text-cyber-blue",size:24}),skills:["Java","Spring Boot","Hibernate","Django","REST API","Python","Servlets & JSP"]},{title:"Database",icon:R.jsx(k1,{className:"text-cyber-blue",size:24}),skills:["PostgreSQL","MySQL","SQLite","MongoDB","ORM (Hibernate, Django ORM)","ER Modeling"]},{title:"DevOps / Infra",icon:R.jsx(q1,{className:"text-cyber-blue",size:24}),skills:["Linux (Kali, Ubuntu)","Git & GitHub","Docker","Namecheap","AWS EC2","Vite / Webpack"]},{title:"Tools & Testing",icon:R.jsx(Z1,{className:"text-cyber-blue",size:24}),skills:["VS Code","Postman","npm / yarn","Chrome DevTools","phpMyAdmin","pgAdmin"]},{title:"Cybersecurity",icon:R.jsx(X1,{className:"text-cyber-blue",size:24}),skills:["Kali Linux","Nmap","Social Engineering Basics","Incident Response Concepts"]}];return R.jsx("section",{id:"skills",className:"py-20 bg-cyber-dark",children:R.jsxs("div",{className:"container mx-auto px-4",children:[R.jsxs("div",{className:"text-center mb-16",children:[R.jsx("h2",{className:"cyber-heading text-3xl mb-6",children:"Technical Skills"}),R.jsx("div",{className:"h-1 w-24 bg-cyber-blue mx-auto mb-8"}),R.jsx("p",{className:"text-gray-300 max-w-2xl mx-auto",children:"I've worked with a wide range of tools across development and cybersecurity. Here's a glimpse of the technologies I use to build secure, scalable, and modern applications."})]}),R.jsx("div",{className:"cyber-grid",children:r.map((e,i)=>R.jsxs("div",{className:"cyber-card",children:[R.jsxs("div",{className:"flex items-center mb-4",children:[e.icon,R.jsx("h3",{className:"font-cyber text-xl text-cyber-blue ml-3",children:e.title})]}),R.jsx("ul",{className:"space-y-2",children:e.skills.map((s,l)=>R.jsxs("li",{className:"flex items-center",children:[R.jsx("span",{className:"inline-block w-2 h-2 bg-cyber-pink mr-3"}),R.jsx("span",{className:"text-gray-300",children:s})]},l))})]},i))})]})})},P3=()=>{const[r,e]=he.useState("work"),i=[{title:"Training & Internship – Python Full Stack ",company:"The Kiran Academy, Pune",period:"2025 (Ongoing)",description:["Undergoing intensive training in Python Full Stack, Data Science, AI/ML concepts","Built mini-projects including portfolio websites, data dashboards, and spam detection models","Learning secure coding practices, OWASP Top 10, and hands-on tools like Nmap and Burp Suite","Receiving placement support including resume building, mock interviews, and technical tests"]}],s=[{degree:"Bachelor of Science in Computer Science",institution:"Savitribai Phule Pune University",period:"2022 - 2025",description:["Graduated with 7.93 CGPA","Completed projects in web development, networking, and database systems","Relevant subjects: Cybersecurity, Data Structures, Web Programming, Java, Python","Actively participated in tech fests and coding competitions"]}],l=[{name:"Python Full Stack Development with AI & ML",issuer:"The Kiran Academy, Pune",date:"2025 (Ongoing)",description:"Comprehensive hands-on training covering Python, Data Science, Machine Learning, AI, NumPy, Pandas, Matplotlib, Seaborn, Plotly, Scikit-Learn, Regex, and Full Stack Web Development with React, Node.js, and MongoDB. Includes industry projects and placement preparation."},{name:"Java Full Stack Development (Core + Advanced)",issuer:"I-Tech Solutions, Nashik",date:"Jan 2024 – Jul 2024",description:"Completed 6-month training covering Core Java, Advanced Java, Hibernate, Spring Boot framework, and PostgreSQL. Built full-stack web applications with REST APIs, MVC architecture, and backend integrations."}];return R.jsx("section",{id:"experience",className:"py-20 bg-cyber-light",children:R.jsxs("div",{className:"container mx-auto px-4",children:[R.jsxs("div",{className:"text-center mb-12",children:[R.jsx("h2",{className:"cyber-heading text-3xl mb-6",children:"Experience & Education"}),R.jsx("div",{className:"h-1 w-24 bg-cyber-blue mx-auto mb-8"})]}),R.jsx("div",{className:"flex justify-center mb-12",children:R.jsxs("div",{className:"inline-flex border border-cyber-blue/50 p-1",children:[R.jsx("button",{className:`px-6 py-2 font-cyber text-sm transition-colors duration-300 ${r==="work"?"bg-cyber-blue/20 text-cyber-blue":"text-gray-400 hover:text-cyber-blue"}`,onClick:()=>e("work"),children:"WORK"}),R.jsx("button",{className:`px-6 py-2 font-cyber text-sm transition-colors duration-300 ${r==="education"?"bg-cyber-blue/20 text-cyber-blue":"text-gray-400 hover:text-cyber-blue"}`,onClick:()=>e("education"),children:"EDUCATION"}),R.jsx("button",{className:`px-6 py-2 font-cyber text-sm transition-colors duration-300 ${r==="certifications"?"bg-cyber-blue/20 text-cyber-blue":"text-gray-400 hover:text-cyber-blue"}`,onClick:()=>e("certifications"),children:"CERTIFICATIONS"})]})}),r==="work"&&R.jsx("div",{className:"space-y-8 max-w-3xl mx-auto",children:i.map((c,f)=>R.jsxs("div",{className:"cyber-card relative pl-8",children:[R.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-cyber-blue/30"}),R.jsx("div",{className:"absolute left-0 top-0 w-2 h-2 -translate-x-1/2 bg-cyber-blue"}),R.jsx("h3",{className:"text-xl font-cyber text-cyber-blue mb-1",children:c.title}),R.jsxs("div",{className:"flex justify-between mb-4",children:[R.jsx("span",{className:"text-gray-300",children:c.company}),R.jsx("span",{className:"text-cyber-pink font-mono text-sm",children:c.period})]}),R.jsx("ul",{className:"space-y-2",children:c.description.map((h,p)=>R.jsxs("li",{className:"text-gray-400 flex",children:[R.jsx("span",{className:"text-cyber-blue mr-2",children:"›"}),h]},p))})]},f))}),r==="education"&&R.jsx("div",{className:"space-y-8 max-w-3xl mx-auto",children:s.map((c,f)=>R.jsxs("div",{className:"cyber-card relative pl-8",children:[R.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-cyber-blue/30"}),R.jsx("div",{className:"absolute left-0 top-0 w-2 h-2 -translate-x-1/2 bg-cyber-blue"}),R.jsx("h3",{className:"text-xl font-cyber text-cyber-blue mb-1",children:c.degree}),R.jsxs("div",{className:"flex justify-between mb-4",children:[R.jsx("span",{className:"text-gray-300",children:c.institution}),R.jsx("span",{className:"text-cyber-pink font-mono text-sm",children:c.period})]}),R.jsx("ul",{className:"space-y-2",children:c.description.map((h,p)=>R.jsxs("li",{className:"text-gray-400 flex",children:[R.jsx("span",{className:"text-cyber-blue mr-2",children:"›"}),h]},p))})]},f))}),r==="certifications"&&R.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto",children:l.map((c,f)=>R.jsxs("div",{className:"cyber-card",children:[R.jsx("h3",{className:"text-xl font-cyber text-cyber-blue mb-2",children:c.name}),R.jsxs("div",{className:"flex justify-between mb-4",children:[R.jsx("span",{className:"text-gray-300 text-sm",children:c.issuer}),R.jsx("span",{className:"text-cyber-pink font-mono text-sm",children:c.date})]}),R.jsx("p",{className:"text-gray-400 text-sm",children:c.description})]},f))})]})})},z3=()=>{const[r,e]=he.useState("all"),i=[{title:"BookNJoy - Event Ticketing App",description:"A full-featured event booking platform allowing users to browse, book, and generate tickets for events. Built using a secure and scalable full-stack architecture.",image:"/images/booknjoy.png",technologies:["React","Spring Boot","Hibernate","PostgreSQL"],category:"fullstack",github:"https://github.com/theujwalthakare/aaomile",demo:"#"},{title:"UbeSecure - Cyber Complaint Portal",description:"A concept-stage citizen complaint platform designed to report cybercrime incidents to authorities securely with OTP verification, dashboards, and real-time tracking.",image:"/images/ubsecure.png",technologies:["HTML","JavaScript","PHP","MySQL","Security Workflow"],category:"fullstack",github:"https://github.com/theujwalthakare/ubsecure",demo:"https://ursecure.run.place"},{title:"Election Portal - Student Society Voting",description:"The EMAS Election & Activity Portal is an exclusive digital platform dedicated entirely to the EMAS Committee. It is designed to manage all official committee activities, including elections, announcements, event updates, and member communications. This portal ensures a transparent and secure election process—right from nomination submission to final results. Every activity conducted by the EMAS Committee is regularly updated on the website, providing students with clear and real-time information.",image:"/images/election-portal.png",technologies:["HTML","Tailwind CSS","JavaScript","Firebase"],category:"fullstack",github:"https://github.com/theujwalthakare/Election-Portal",demo:"https://election-portal-37900.web.app/"},{title:"Personal Portfolio Website",description:"Cyberpunk-themed personal portfolio website to showcase my technical skills, experience, and featured projects. Responsive and animated with Framer Motion.",image:"/images/portfolio.png",technologies:["React","Tailwind CSS","Framer Motion","Vite"],category:"frontend",github:"https://github.com/theujwalthakare/theujwalthakare.dev",demo:"https://www.theujwalthakare.dev"}],s=r==="all"?i:i.filter(l=>l.category===r);return R.jsx("section",{id:"projects",className:"py-20 bg-cyber-dark",children:R.jsxs("div",{className:"container mx-auto px-4",children:[R.jsxs("div",{className:"text-center mb-12",children:[R.jsx("h2",{className:"cyber-heading text-3xl mb-6",children:"Featured Projects"}),R.jsx("div",{className:"h-1 w-24 bg-cyber-blue mx-auto mb-8"}),R.jsx("p",{className:"text-gray-300 max-w-2xl mx-auto mb-8",children:"Here are some of the fully working, end-to-end projects I've built. Each one reflects my skills in real-world problem-solving and development."}),R.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:["all","frontend","backend","fullstack"].map(l=>R.jsx("button",{className:`px-4 py-2 border ${r===l?"border-cyber-blue text-cyber-blue bg-cyber-blue/10":"border-gray-600 text-gray-400 hover:border-cyber-blue hover:text-cyber-blue"} transition-colors duration-300`,onClick:()=>e(l),children:l.charAt(0).toUpperCase()+l.slice(1)},l))})]}),R.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:s.map((l,c)=>R.jsxs("div",{className:"cyber-card group",children:[R.jsxs("div",{className:"relative overflow-hidden mb-4 aspect-video bg-cyber-light",children:[R.jsx("div",{className:"w-full h-full bg-gradient-to-br from-cyber-blue/20 to-cyber-pink/20 flex items-center justify-center",children:R.jsx("img",{src:l.image,alt:l.title,className:"w-full h-full object-center effect"})}),R.jsx("div",{className:"absolute inset-0 bg-cyber-dark/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:R.jsxs("div",{className:"flex space-x-4",children:[R.jsx("a",{href:l.github,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-cyber-light border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark transition-colors duration-300","aria-label":"View GitHub Repository",children:R.jsx(g_,{size:20})}),R.jsx("a",{href:l.demo,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-cyber-light border border-cyber-pink text-cyber-pink hover:bg-cyber-pink hover:text-cyber-dark transition-colors duration-300","aria-label":"View Live Demo",children:R.jsx(j1,{size:20})})]})})]}),R.jsx("h3",{className:"text-xl font-cyber text-cyber-blue mb-2",children:l.title}),R.jsx("p",{className:"text-gray-400 mb-4",children:l.description}),R.jsx("div",{className:"flex flex-wrap gap-2 mt-auto",children:l.technologies.map((f,h)=>R.jsx("span",{className:"text-xs px-2 py-1 bg-cyber-light border border-cyber-blue/30 text-cyber-blue",children:f},h))})]},c))})]})})};class nl{constructor(e=0,i="Network Error"){this.status=e,this.text=i}}const I3=()=>{if(!(typeof localStorage>"u"))return{get:r=>Promise.resolve(localStorage.getItem(r)),set:(r,e)=>Promise.resolve(localStorage.setItem(r,e)),remove:r=>Promise.resolve(localStorage.removeItem(r))}},Sn={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:I3()},Qd=r=>r?typeof r=="string"?{publicKey:r}:r.toString()==="[object Object]"?r:{}:{},B3=(r,e="https://api.emailjs.com")=>{if(!r)return;const i=Qd(r);Sn.publicKey=i.publicKey,Sn.blockHeadless=i.blockHeadless,Sn.storageProvider=i.storageProvider,Sn.blockList=i.blockList,Sn.limitRate=i.limitRate,Sn.origin=i.origin||e},J_=async(r,e,i={})=>{const s=await fetch(Sn.origin+r,{method:"POST",headers:i,body:e}),l=await s.text(),c=new nl(s.status,l);if(s.ok)return c;throw c},$_=(r,e,i)=>{if(!r||typeof r!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i||typeof i!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},F3=r=>{if(r&&r.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},ex=r=>r.webdriver||!r.languages||r.languages.length===0,tx=()=>new nl(451,"Unavailable For Headless Browser"),H3=(r,e)=>{if(!Array.isArray(r))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},G3=r=>{var e;return!((e=r.list)!=null&&e.length)||!r.watchVariable},V3=(r,e)=>r instanceof FormData?r.get(e):r[e],nx=(r,e)=>{if(G3(r))return!1;H3(r.list,r.watchVariable);const i=V3(e,r.watchVariable);return typeof i!="string"?!1:r.list.includes(i)},ix=()=>new nl(403,"Forbidden"),k3=(r,e)=>{if(typeof r!="number"||r<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},j3=async(r,e,i)=>{const s=Number(await i.get(r)||0);return e-Date.now()+s},ax=async(r,e,i)=>{if(!e.throttle||!i)return!1;k3(e.throttle,e.id);const s=e.id||r;return await j3(s,e.throttle,i)>0?!0:(await i.set(s,Date.now().toString()),!1)},rx=()=>new nl(429,"Too Many Requests"),X3=async(r,e,i,s)=>{const l=Qd(s),c=l.publicKey||Sn.publicKey,f=l.blockHeadless||Sn.blockHeadless,h=l.storageProvider||Sn.storageProvider,p={...Sn.blockList,...l.blockList},m={...Sn.limitRate,...l.limitRate};return f&&ex(navigator)?Promise.reject(tx()):($_(c,r,e),F3(i),i&&nx(p,i)?Promise.reject(ix()):await ax(location.pathname,m,h)?Promise.reject(rx()):J_("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:c,service_id:r,template_id:e,template_params:i}),{"Content-type":"application/json"}))},W3=r=>{if(!r||r.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},q3=r=>typeof r=="string"?document.querySelector(r):r,Y3=async(r,e,i,s)=>{const l=Qd(s),c=l.publicKey||Sn.publicKey,f=l.blockHeadless||Sn.blockHeadless,h=Sn.storageProvider||l.storageProvider,p={...Sn.blockList,...l.blockList},m={...Sn.limitRate,...l.limitRate};if(f&&ex(navigator))return Promise.reject(tx());const g=q3(i);$_(c,r,e),W3(g);const v=new FormData(g);return nx(p,v)?Promise.reject(ix()):await ax(location.pathname,m,h)?Promise.reject(rx()):(v.append("lib_version","4.4.1"),v.append("service_id",r),v.append("template_id",e),v.append("user_id",c),J_("/api/v1.0/email/send-form",v))},n_={init:B3,send:X3,sendForm:Y3,EmailJSResponseStatus:nl},Z3=()=>{const[r,e]=he.useState({name:"",email:"",subject:"",message:""}),[i,s]=he.useState(!1),[l,c]=he.useState(""),[f,h]=he.useState(""),p=v=>{const{name:x,value:b}=v.target;e(M=>({...M,[x]:b}))},m=async v=>{v.preventDefault(),s(!0),c(""),h("");try{const x="service_n9bhs97",b="template_f3z1v5f";n_.init("yR8grnLe4y1BiSjip");const T={to_name:"Ujwal",from_name:r.name,reply_to:r.email,email:r.email,message:r.message,subject:r.subject};if((await n_.send(x,b,T)).status===200)h("success"),c("Message sent successfully! I'll get back to you soon."),e({name:"",email:"",subject:"",message:""}),setTimeout(()=>{c(""),h("")},3e3);else throw new Error("Failed to send message")}catch(x){h("error"),c("Something went wrong. Please try again later."),console.error("Error sending email:",x),setTimeout(()=>{c(""),h("")},3e3)}finally{s(!1)}},g=[{icon:R.jsx(__,{size:20,className:"text-cyber-blue"}),title:"Email",value:"thakare2829@gmail.com",link:"mailto:thakare2829@gmail.com"},{icon:R.jsx(W1,{size:20,className:"text-cyber-blue"}),title:"Location",value:"Pune, India",link:null},{icon:R.jsx(v_,{size:20,className:"text-cyber-blue"}),title:"LinkedIn",value:"linkedin.com/in/ujwal-thakare-300b25264",link:"https://linkedin.com/in/ujwal-thakare-300b25264"}];return R.jsx("section",{id:"contact",className:"py-20 bg-cyber-light",children:R.jsxs("div",{className:"container mx-auto px-4",children:[R.jsxs("div",{className:"text-center mb-12",children:[R.jsx("h2",{className:"cyber-heading text-3xl mb-6",children:"Get In Touch"}),R.jsx("div",{className:"h-1 w-24 bg-cyber-blue mx-auto mb-8"}),R.jsx("p",{className:"text-gray-300 max-w-2xl mx-auto",children:"Have a project in mind or want to discuss potential opportunities? Feel free to reach out using the form below or through my contact information."})]}),R.jsxs("div",{className:"flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto",children:[R.jsx("div",{className:"w-full lg:w-2/3",children:R.jsx("div",{className:"cyber-border p-6",children:R.jsxs("form",{id:"contact-form",onSubmit:m,children:[R.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[R.jsxs("div",{children:[R.jsx("label",{htmlFor:"name",className:"block text-gray-300 mb-2",children:"Name"}),R.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:p,required:!0,className:"w-full bg-cyber-dark border border-cyber-blue/30 text-white p-3 focus:border-cyber-blue focus:outline-none transition-colors duration-300"})]}),R.jsxs("div",{children:[R.jsx("label",{htmlFor:"email",className:"block text-gray-300 mb-2",children:"Email"}),R.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:p,required:!0,className:"w-full bg-cyber-dark border border-cyber-blue/30 text-white p-3 focus:border-cyber-blue focus:outline-none transition-colors duration-300"})]})]}),R.jsxs("div",{className:"mb-6",children:[R.jsx("label",{htmlFor:"subject",className:"block text-gray-300 mb-2",children:"Subject"}),R.jsx("input",{type:"text",id:"subject",name:"subject",value:r.subject,onChange:p,required:!0,className:"w-full bg-cyber-dark border border-cyber-blue/30 text-white p-3 focus:border-cyber-blue focus:outline-none transition-colors duration-300"})]}),R.jsxs("div",{className:"mb-6",children:[R.jsx("label",{htmlFor:"message",className:"block text-gray-300 mb-2",children:"Message"}),R.jsx("textarea",{id:"message",name:"message",value:r.message,onChange:p,required:!0,rows:5,className:"w-full bg-cyber-dark border border-cyber-blue/30 text-white p-3 focus:border-cyber-blue focus:outline-none transition-colors duration-300"})]}),R.jsx("button",{type:"submit",disabled:i,className:"cyber-button w-full flex justify-center items-center",children:i?"Sending...":"Send Message"}),l&&R.jsx("div",{className:`mt-4 p-3 ${f==="success"?"bg-green-900/20 border border-green-500 text-green-400":"bg-red-900/20 border border-red-500 text-red-400"}`,children:l})]})})}),R.jsx("div",{className:"w-full lg:w-1/3",children:R.jsx("div",{className:"space-y-6",children:g.map((v,x)=>R.jsxs("div",{className:"cyber-card flex items-start",children:[R.jsx("div",{className:"mr-4 mt-1",children:v.icon}),R.jsxs("div",{children:[R.jsx("h3",{className:"text-cyber-blue font-cyber mb-1",children:v.title}),v.link?R.jsx("a",{href:v.link,className:"text-gray-300 hover:text-cyber-blue transition-colors duration-300",target:v.link.startsWith("mailto")?void 0:"_blank",rel:v.link.startsWith("mailto")?void 0:"noopener noreferrer",children:v.value}):R.jsx("p",{className:"text-gray-300",children:v.value})]})]},x))})})]})]})})},K3=()=>R.jsxs(R.Fragment,{children:[R.jsx(U3,{}),R.jsx(L3,{}),R.jsx(O3,{}),R.jsx(P3,{}),R.jsx(z3,{}),R.jsx(Z3,{})]}),sx=[{slug:"resilient-web-apps-adversarial-environments",title:"Designing Resilient Web Apps for Adversarial Environments",description:"A blueprint for delivering responsive web experiences that stay dependable under DDoS spikes, bad actor automation, and supply chain compromises.",date:"October 2024",updated:"Revalidated: January 2025",readingTime:"14 min read",tags:["Application Security","Architecture","DevOps"],maintainer:"Ujwal Thakare",sections:[{heading:"Why resilience is now table stakes",body:["Every public-facing product is, by default, sitting on an adversarial internet. Traffic bursts are as likely to be marketing wins as they are credential stuffing or DDoS rehearsals.","The practical question becomes: how do we protect customer experience without bolting on a maze of point solutions? I frame resilience as a product capability, not an ops afterthought."]},{heading:"Architecture guardrails I reach for first",body:["Rather than chase every new exploit write-up, ship with guardrails that degrade gracefully. These are the controls that have paid rent repeatedly across deployments:"],list:["Layer 7 rate limiting defined per user intent (auth flows, search endpoints, file uploads).","Zero-trust service mesh to keep lateral movement noisy and slow.","Immutable infrastructure for runtime parity—drift belongs in git, not prod.","Real-time observability on business metrics, not just CPU and memory charts."]},{heading:"Exercise the failure paths",body:["Resilience emerges from rehearsals. I schedule chaos windows where we intentionally break dependencies and replay what users would experience.","The documentation template I use captures expected blast radius, on-call muscle memory, and go/no-go criteria for mitigation strategies."],quote:"Your playbooks are only as strong as the last time you stress-tested them. Treat incident runbooks like code: refactor, review, rehearse."},{heading:"Rollout checklist",body:["Below is the abbreviated checklist my teams run before we call a build resilient enough for GA:"],list:["Synthetic traffic floods routed through staging and dark launch environments.","Credential stuffing simulations validated against detection rules in the SIEM.","Service-level objectives reviewed with the business and codified in alerts.","Fail-open vs. fail-closed behaviours negotiated with customer success and legal."]}]},{slug:"threat-modeling-sprint-zero-ritual",title:"Why Threat Modeling Should Be Your Sprint Zero Ritual",description:"Threat modeling done lightweight and continuously can be the multiplier that keeps delivery velocity high while hardening the product surface.",date:"August 2024",updated:"Revalidated: December 2024",readingTime:"11 min read",tags:["Threat Modeling","Team Playbooks","Process"],maintainer:"Ujwal Thakare",sections:[{heading:"Threat modeling without the ceremony overhead",body:["Sprint zero is where product assumptions harden. Instead of a whiteboard marathon, we spend 30 minutes enumerating actors, assets, and trust boundaries.","The goal: a living diagram that engineers can attach mitigation issues to as they work. No slide decks, no PDF rot."]},{heading:"Runbook for a 30-minute threat model",body:["The cadence below is the template that has kept teams honest about security without derailing the sprint plan:"],list:["Prep: Product owner shares user stories and success metrics 24 hours prior.","During: Engineers sketch data flows and call out decisions that feel risky or novel.","After: Product + security co-create mitigation tickets and add them to the sprint backlog."]},{heading:"Connecting the model to delivery",body:["A threat model is useless unless it feeds your delivery loop. We anchor mitigations in the Definition of Done and trace them during code review.","Retrospectives include a five-minute security check: did new threats surface? Should the model adapt? The ritual stays lightweight but persistent."]},{heading:"Artifacts worth keeping",body:["To prevent zombie documentation, we limit artifacts to the ones that influence future debates:"],list:["The current system context diagram (exported from our C4 model).","A ticket list with risk labels and accountable owners.","A short changelog capturing when and why the model evolved."]}]},{slug:"bootstrapping-personal-knowledge-base",title:"Bootstrapping a Personal Knowledge Base with Obsidian + LLM Workflows",description:"How I built a system that keeps research, experiments, and teaching material discoverable—without drowning in tabs.",date:"May 2024",updated:"Revalidated: November 2024",readingTime:"9 min read",tags:["Knowledge Management","AI","Productivity"],maintainer:"Ujwal Thakare",sections:[{heading:"Why Obsidian still wins for builders",body:["Local-first markdown keeps my notes fast, portable, and lossless. I treat the vault as the source of truth and sync to cloud storage for redundancy.","Forced linking and daily notes surface weak links in my understanding, which is the perfect trigger to research further or teach the concept."]},{heading:"Prompting as a thinking partner",body:["LLMs are integrated via a constrained prompt library. Each prompt references explicit notes so generations stay grounded.","The workflow: capture → distill → interrogate with AI → publish. The AI step is there to highlight blind spots, not produce final copy."],list:["Capture: Quick jot templates triggered with hotkeys in Obsidian.","Distill: Weekly review where I refactor raw snippets into evergreen notes.","Interrogate: Custom GPT prompts that pull from tagged notes only.","Publish: Export to Notion or Markdown static sites depending on the audience."]},{heading:"Automation that keeps the system humming",body:["I rely on a small set of automations to remove friction while keeping me accountable:"],list:["Git-based backups triggered on directory changes.","A cron job that surfaces three random evergreen notes for review.","A build script that re-generates my public knowledge garden when tags change."]},{heading:"When team sharing becomes the next step",body:["When mentees or teammates need access, I publish curated collections through Notion databases or a static Quartz site.","The key is to keep the source canonical—publishing is a projection layer, not the editing environment."]}]}],Q3=r=>sx.find(e=>e.slug===r),J3=()=>R.jsxs("section",{className:"space-y-12",children:[R.jsxs("header",{className:"space-y-4",children:[R.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.4em] text-slate-500",children:"Knowledge Dispatches"}),R.jsx("h1",{className:"text-4xl font-semibold text-slate-900 md:text-5xl",children:"Essays, teardown notes, and field learnings."}),R.jsx("p",{className:"max-w-3xl text-lg text-slate-600",children:"These posts catalogue the architecture debates, security playbooks, and learning loops powering my work. Each one links deeper for reference-grade documentation."})]}),R.jsx("div",{className:"space-y-6",children:sx.map(r=>R.jsxs("article",{className:"flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md md:flex-row md:items-center md:gap-8",children:[R.jsxs("div",{className:"flex-1 space-y-4",children:[R.jsxs("div",{className:"text-xs font-semibold uppercase tracking-[0.35em] text-slate-500",children:[r.date," · ",r.readingTime]}),R.jsx("h2",{className:"text-2xl font-semibold text-slate-900 md:text-3xl",children:r.title}),R.jsx("p",{className:"text-slate-600",children:r.description}),R.jsx("div",{className:"flex flex-wrap gap-2",children:r.tags.map(e=>R.jsx("span",{className:"rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-slate-500",children:e},e))})]}),R.jsx("div",{className:"md:self-start",children:R.jsx(Xa,{to:`/blogs/${r.slug}`,className:"inline-flex items-center justify-center rounded border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-400 hover:text-slate-900",children:"Read the Article →"})})]},r.slug))})]}),$3=()=>{const{slug:r}=QS(),e=Q3(r??"");return e?R.jsxs("article",{className:"space-y-12",children:[R.jsxs("header",{className:"space-y-6",children:[R.jsxs("p",{className:"text-xs font-semibold uppercase tracking-[0.4em] text-slate-500",children:[e.date," · ",e.readingTime]}),R.jsx("h1",{className:"text-4xl font-semibold text-slate-900 md:text-5xl",children:e.title}),R.jsx("p",{className:"max-w-3xl text-lg text-slate-600",children:e.description}),R.jsx("div",{className:"flex flex-wrap gap-3",children:e.tags.map(i=>R.jsx("span",{className:"rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-500",children:i},i))})]}),R.jsx("section",{className:"space-y-10 text-slate-700",children:e.sections.map(i=>R.jsxs("div",{className:"space-y-4",children:[i.heading&&R.jsx("h2",{className:"text-2xl font-semibold text-slate-900",children:i.heading}),i.body.map((s,l)=>R.jsx("p",{className:"leading-relaxed text-slate-700",children:s},l)),i.list&&R.jsx("ul",{className:"list-disc space-y-2 pl-6 text-slate-700",children:i.list.map(s=>R.jsx("li",{children:s},s))}),i.quote&&R.jsx("blockquote",{className:"border-l-4 border-slate-300 bg-slate-100 px-6 py-4 text-slate-600",children:i.quote})]},i.heading??i.body[0]))}),R.jsxs("footer",{className:"flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between",children:[R.jsxs("div",{children:[R.jsxs("p",{children:["Updated: ",e.updated]}),R.jsxs("p",{children:["Maintainer: ",e.maintainer]})]}),R.jsx(Xa,{to:"/blogs",className:"inline-flex items-center justify-center rounded border border-slate-300 px-4 py-2 font-medium text-slate-600 transition hover:border-slate-400 hover:text-slate-900",children:"← Back to knowledge feed"})]})]}):R.jsx(d1,{to:"/blogs",replace:!0})},ew=[{title:"Threat Intel Automation",subtitle:"Security Operations | 2024",description:"Designed an automation pipeline that collects OSINT feeds, enriches them with MITRE ATT&CK context, and distributes prioritized alerts to SOC teams.",stack:["TypeScript","Next.js","FastAPI","PostgreSQL","Docker"],highlight:"Reduced mean-time-to-detect by 47% and kept analysts focused on high-impact incidents.",url:"https://github.com/theujwalthakare"},{title:"Adaptive Learning LMS",subtitle:"EdTech Platform | 2023",description:"Built a progressive web experience that adapts study paths based on learner performance signals and integrates live lab environments for practice.",stack:["React","Node.js","GraphQL","Redis","AWS"],highlight:"Drove a 33% increase in course completion rates by personalizing content sequencing.",url:"https://github.com/theujwalthakare"},{title:"Cyber Range Simulator",subtitle:"University Capstone | 2022",description:"Implemented a hands-on cyber-range with scenario authoring tools, scoring dashboards, and isolated network topologies for blue/red team exercises.",stack:["Python","Django","Terraform","Azure","Ansible"],highlight:"Enabled faculty to deploy new training exercises in minutes instead of hours.",url:"https://github.com/theujwalthakare"}],tw=()=>R.jsx("section",{className:"pt-32 pb-24",children:R.jsxs("div",{className:"container mx-auto px-4",children:[R.jsxs("div",{className:"max-w-3xl mb-12",children:[R.jsx("p",{className:"font-mono text-cyber-blue uppercase tracking-widest text-sm",children:"Case Studies"}),R.jsx("h1",{className:"text-4xl md:text-5xl font-dystopian text-white mt-4 mb-6",children:"Deep dives into mission-critical builds."}),R.jsx("p",{className:"text-gray-300 text-lg",children:"Each case study captures the problem framing, architectural decisions, and measurable outcomes that shaped my major projects."})]}),R.jsx("div",{className:"grid gap-10",children:ew.map(r=>R.jsxs("article",{className:"relative overflow-hidden rounded-xl border border-cyber-blue/40 bg-cyber-dark/80 p-8 shadow-[0_0_30px_rgba(0,240,255,0.08)] transition-transform duration-300 hover:-translate-y-1",children:[R.jsxs("header",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6",children:[R.jsxs("div",{children:[R.jsx("h2",{className:"text-2xl md:text-3xl font-cyber text-white",children:r.title}),R.jsx("p",{className:"text-sm text-cyber-pink mt-1",children:r.subtitle})]}),R.jsx("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",className:"self-start md:self-center inline-flex items-center gap-2 border border-cyber-blue/60 bg-cyber-dark px-4 py-2 text-sm font-mono uppercase tracking-[0.2em] text-cyber-blue transition hover:bg-cyber-blue/10",children:"View Build Journal"})]}),R.jsx("p",{className:"text-gray-300 leading-relaxed mb-6",children:r.description}),R.jsx("div",{className:"flex flex-wrap gap-3 mb-6",children:r.stack.map(e=>R.jsx("span",{className:"rounded-full border border-cyber-blue/40 bg-cyber-dark/60 px-4 py-1 text-xs font-mono uppercase tracking-widest text-gray-300",children:e},e))}),R.jsx("p",{className:"text-cyber-blue text-sm font-mono uppercase tracking-[0.3em]",children:r.highlight})]},r.title))})]})}),nw=[{title:"Full Stack Jumpstart Notes",format:"Notion Handbook",focus:"Fundamentals, deployment playbooks, debugging recipes",size:"38 pages",link:"https://theujwalthakare.notion.site"},{title:"Cybersecurity Lab Workbook",format:"PDF Exercises",focus:"SOC tooling, incident response drills, purple team tactics",size:"26 labs",link:"https://theujwalthakare.notion.site"},{title:"React + TypeScript Sprint Kit",format:"GitHub Repository",focus:"Component patterns, state machines, data fetching architecture",size:"12 curated templates",link:"https://github.com/theujwalthakare"},{title:"Career Compass Checklist",format:"Google Sheet",focus:"Interview prep loops, networking cadences, learning roadmap",size:"Self-updating",link:"https://docs.google.com"}],iw=()=>R.jsx("section",{className:"pt-32 pb-24",children:R.jsxs("div",{className:"container mx-auto px-4",children:[R.jsxs("header",{className:"max-w-2xl mb-12",children:[R.jsx("p",{className:"font-mono text-cyber-blue uppercase tracking-widest text-sm",children:"Study Vault"}),R.jsx("h1",{className:"text-4xl md:text-5xl font-dystopian text-white mt-4 mb-6",children:"Resources I rely on to teach, mentor, and keep learning."}),R.jsx("p",{className:"text-gray-300 text-lg",children:"Bookmark the assets you need — I refresh them frequently with labs, templates, and actionable notes from my own learning cycles."})]}),R.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:nw.map(r=>R.jsxs("article",{className:"relative overflow-hidden rounded-xl border border-cyber-blue/30 bg-cyber-dark/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyber-blue/70",children:[R.jsxs("div",{className:"mb-4",children:[R.jsx("p",{className:"text-xs font-mono uppercase tracking-[0.35em] text-cyber-pink",children:r.format}),R.jsx("h2",{className:"mt-3 text-2xl font-cyber text-white",children:r.title})]}),R.jsx("p",{className:"text-gray-300 mb-4",children:r.focus}),R.jsxs("div",{className:"flex items-center justify-between",children:[R.jsx("span",{className:"text-xs font-mono uppercase tracking-[0.3em] text-gray-400",children:r.size}),R.jsx("a",{href:r.link,target:"_blank",rel:"noopener noreferrer",className:"border border-cyber-blue/60 px-4 py-2 text-xs font-mono uppercase tracking-[0.4em] text-cyber-blue transition hover:bg-cyber-blue/10",children:"Access"})]})]},r.title))})]})}),aw=()=>R.jsx("section",{className:"pt-32 pb-24",children:R.jsxs("div",{className:"container mx-auto px-4 text-center",children:[R.jsx("p",{className:"font-mono text-cyber-pink uppercase tracking-[0.4em]",children:"404"}),R.jsx("h1",{className:"mt-6 text-4xl md:text-5xl font-dystopian text-white",children:"Signal lost in the neon grid."}),R.jsx("p",{className:"mt-6 text-gray-300",children:"The page you were looking for is either still in build mode or has been archived."}),R.jsx(Xa,{to:"/",className:"mt-8 inline-flex items-center border border-cyber-blue/60 px-6 py-3 text-sm font-mono uppercase tracking-[0.4em] text-cyber-blue transition hover:bg-cyber-blue/10",children:"Return to Portfolio"})]})});function rw(){return R.jsx(g1,{children:R.jsxs(Ha,{element:R.jsx($1,{}),children:[R.jsx(Ha,{index:!0,element:R.jsx(K3,{})}),R.jsx(Ha,{path:"blogs",element:R.jsx(J3,{})}),R.jsx(Ha,{path:"blogs/:slug",element:R.jsx($3,{})}),R.jsx(Ha,{path:"case-studies",element:R.jsx(tw,{})}),R.jsx(Ha,{path:"study-material",element:R.jsx(iw,{})}),R.jsx(Ha,{path:"*",element:R.jsx(aw,{})})]})})}SS.createRoot(document.getElementById("root")).render(R.jsx(he.StrictMode,{children:R.jsx(E1,{children:R.jsx(rw,{})})}));
