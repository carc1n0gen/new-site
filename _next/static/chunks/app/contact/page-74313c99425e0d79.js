(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{6979:function(e,t,r){"use strict";var n=r(854),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?a:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=a;var p=Object.defineProperty,d=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var o=f(r);o&&o!==h&&e(t,o,n)}var a=d(r);l&&(a=a.concat(l(r)));for(var c=s(t),m=s(r),y=0;y<a.length;++y){var b=a[y];if(!i[b]&&!(n&&n[b])&&!(m&&m[b])&&!(c&&c[b])){var g=u(r,b);try{p(t,b,g)}catch(e){}}}}return t}},3480:function(e,t,r){Promise.resolve().then(r.bind(r,5212))},9430:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(9268);function o(e){let{as:t="button",type:r="button",children:o,...i}=e;return(0,n.jsx)(t,{className:"border-solid border-[3px] border-zinc-300 px-8 py-2 rounded-lg hover:border-emerald-500 hover:text-emerald-500",type:"button"===t?r:void 0,...i,children:o})}},5212:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n,o,i=r(9268),a=r(6006),c=r(9497),s=r.n(c),p=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(l(t)),t.handleErrored=t.handleErrored.bind(l(t)),t.handleChange=t.handleChange.bind(l(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(l(t)),t}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,u(t,e);var r=t.prototype;return r.getCaptchaFunction=function(e){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[e]:this.props.grecaptcha[e]:null},r.getValue=function(){var e=this.getCaptchaFunction("getResponse");return e&&void 0!==this._widgetId?e(this._widgetId):null},r.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},r.execute=function(){var e=this.getCaptchaFunction("execute");if(e&&void 0!==this._widgetId)return e(this._widgetId);this._executeRequested=!0},r.executeAsync=function(){var e=this;return new Promise(function(t,r){e.executionResolve=t,e.executionReject=r,e.execute()})},r.reset=function(){var e=this.getCaptchaFunction("reset");e&&void 0!==this._widgetId&&e(this._widgetId)},r.forceReset=function(){var e=this.getCaptchaFunction("reset");e&&e()},r.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},r.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},r.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},r.explicitRender=function(){var e=this.getCaptchaFunction("render");if(e&&void 0===this._widgetId){var t=document.createElement("div");this._widgetId=e(t,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(t)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},r.componentDidMount=function(){this.explicitRender()},r.componentDidUpdate=function(){this.explicitRender()},r.handleRecaptchaRef=function(e){this.captcha=e},r.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,e.isolated,function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,p));return a.createElement("div",d({},t,{ref:this.handleRecaptchaRef}))},t}(a.Component);f.displayName="ReCAPTCHA",f.propTypes={sitekey:s().string.isRequired,onChange:s().func,grecaptcha:s().object,theme:s().oneOf(["dark","light"]),type:s().oneOf(["image","audio"]),tabindex:s().number,onExpired:s().func,onErrored:s().func,size:s().oneOf(["compact","normal","invisible"]),stoken:s().string,hl:s().string,badge:s().oneOf(["bottomright","bottomleft","inline"]),isolated:s().bool},f.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var h=r(6979),m=r.n(h);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var b={},g=0,v="onloadcallback";function x(){return"undefined"!=typeof window&&window.recaptchaOptions||{}}var _=(n=function(){var e=x(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return e.enterprise?"https://"+t+"/recaptcha/enterprise.js?onload="+v+"&render=explicit":"https://"+t+"/recaptcha/api.js?onload="+v+"&render=explicit"},o=(o={callbackName:v,globalName:"grecaptcha",attributes:x().nonce?{nonce:x().nonce}:{}})||{},function(e){var t=e.displayName||e.name||"Component",r=function(t){function r(e,r){var n;return(n=t.call(this,e,r)||this).state={},n.__scriptURL="",n}r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t;var i=r.prototype;return i.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+g++),this.__scriptLoaderID},i.setupScriptURL=function(){return this.__scriptURL="function"==typeof n?n():n,this.__scriptURL},i.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)})},i.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=b[this.__scriptURL];if(!e||!e.loaded)throw Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[o.callbackName]},i.componentDidMount=function(){var e=this,t=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),n=o,i=n.globalName,a=n.callbackName,c=n.scriptId;if(i&&void 0!==window[i]&&(b[t]={loaded:!0,observers:{}}),b[t]){var s=b[t];if(s&&(s.loaded||s.errored)){this.asyncScriptLoaderHandleLoad(s);return}s.observers[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)};return}var p={};p[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)},b[t]={loaded:!1,observers:p};var d=document.createElement("script");for(var l in d.src=t,d.async=!0,o.attributes)d.setAttribute(l,o.attributes[l]);c&&(d.id=c);var u=function(e){if(b[t]){var r=b[t].observers;for(var n in r)e(r[n])&&delete r[n]}};a&&"undefined"!=typeof window&&(window[a]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),d.onload=function(){var e=b[t];e&&(e.loaded=!0,u(function(t){return!a&&(t(e),!0)}))},d.onerror=function(){var e=b[t];e&&(e.errored=!0,u(function(t){return t(e),!0}))},document.body.appendChild(d)},i.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===o.removeOnUnmount)for(var t=document.getElementsByTagName("script"),r=0;r<t.length;r+=1)t[r].src.indexOf(e)>-1&&t[r].parentNode&&t[r].parentNode.removeChild(t[r]);var n=b[e];n&&(delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===o.removeOnUnmount&&delete b[e])},i.render=function(){var t=o.globalName,r=this.props,n=(r.asyncScriptOnLoad,r.forwardedRef),i=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}(r,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!=typeof window&&(i[t]=void 0!==window[t]?window[t]:void 0),i.ref=n,(0,a.createElement)(e,i)},r}(a.Component),i=(0,a.forwardRef)(function(e,t){return(0,a.createElement)(r,y({},e,{forwardedRef:t}))});return i.displayName="AsyncScriptLoader("+t+")",i.propTypes={asyncScriptOnLoad:s().func},m()(i,e)})(f),S=r(9430);function w(){let[e,t]=(0,a.useState)(!1),[r,n]=(0,a.useState)("Blog Contact Form"),[o,c]=(0,a.useState)(""),[s,p]=(0,a.useState)(""),[d,l]=(0,a.useState)(""),u=(0,a.useCallback)(async e=>{e.preventDefault(),t(!0);let r=new FormData(e.target);await fetch(e.target.action,{method:e.target.method,body:r,headers:{Accept:"application/json"}}),t(!0)},[]),f=(0,a.useCallback)(e=>{let{target:t}=e;n("Blog Contact Form from ".concat(t.value)),c(t.value)},[]);return(0,i.jsxs)(i.Fragment,{children:[!e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{className:"mb-4",children:"Fill out this form to send me an email, and I will get back to you ASAP."}),(0,i.jsxs)("form",{action:"https://formspree.io/f/".concat("xknpaozl"),method:"POST",onSubmit:u,children:[(0,i.jsx)("input",{type:"hidden",name:"subject",value:r}),(0,i.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,i.jsxs)("div",{className:"flex-grow mr-4",children:[(0,i.jsx)("label",{htmlFor:"name",className:"block text-2xl mb-2 hidden",children:"Name"}),(0,i.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Name",value:o,onChange:f,required:!0,className:"block w-full mb-4 p-2 bg-zinc-100 rounded"})]}),(0,i.jsxs)("div",{className:"flex-grow mr-4",children:[(0,i.jsx)("label",{htmlFor:"email",className:"block text-2xl mb-2 hidden",children:"Email"}),(0,i.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Email",value:s,onChange:e=>p(e.target.value),required:!0,className:"block w-full mb-4 p-2 bg-zinc-100 rounded"})]})]}),(0,i.jsx)("label",{htmlFor:"message",className:"block text-2xl mb-2 hidden",children:"Message"}),(0,i.jsx)("textarea",{id:"message",name:"message",value:d,placeholder:"Message",onChange:e=>l(e.target.value),required:!0,className:"block w-full mb-4 p-2 bg-zinc-100 rounded h-72"}),(0,i.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-center md:justify-end",children:[(0,i.jsx)(_,{size:"normal",sitekey:"6Lc1NcYZAAAAAPNz7pCk3XBOxU4Pkd05SnrpOhOg"}),(0,i.jsx)("div",{className:"ml-4",children:(0,i.jsx)(S.Z,{type:"submit",children:"Send"})})]})]})]}),e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"text-3xl font-bold mb-4",children:"Thanks!"}),(0,i.jsx)("p",{children:"I will get back to you ASAP."})]})]})}},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6006),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var n,i={},p=null,d=null;for(n in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,n)&&!s.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:p,ref:d,props:i,_owner:c.current}}t.Fragment=i,t.jsx=p,t.jsxs=p},9268:function(e,t,r){"use strict";e.exports=r(3177)},7611:function(e,t,r){"use strict";var n=r(6054);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},9497:function(e,t,r){e.exports=r(7611)()},6054:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3611:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,u=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function _(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case d:case l:case i:case c:case a:case f:return e;default:switch(e=e&&e.$$typeof){case p:case u:case y:case m:case s:return e;default:return t}}case o:return t}}}function S(e){return _(e)===l}t.AsyncMode=d,t.ConcurrentMode=l,t.ContextConsumer=p,t.ContextProvider=s,t.Element=n,t.ForwardRef=u,t.Fragment=i,t.Lazy=y,t.Memo=m,t.Portal=o,t.Profiler=c,t.StrictMode=a,t.Suspense=f,t.isAsyncMode=function(e){return S(e)||_(e)===d},t.isConcurrentMode=S,t.isContextConsumer=function(e){return _(e)===p},t.isContextProvider=function(e){return _(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return _(e)===u},t.isFragment=function(e){return _(e)===i},t.isLazy=function(e){return _(e)===y},t.isMemo=function(e){return _(e)===m},t.isPortal=function(e){return _(e)===o},t.isProfiler=function(e){return _(e)===c},t.isStrictMode=function(e){return _(e)===a},t.isSuspense=function(e){return _(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===l||e===c||e===a||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===s||e.$$typeof===p||e.$$typeof===u||e.$$typeof===g||e.$$typeof===v||e.$$typeof===x||e.$$typeof===b)},t.typeOf=_},854:function(e,t,r){"use strict";e.exports=r(3611)}},function(e){e.O(0,[253,698,744],function(){return e(e.s=3480)}),_N_E=e.O()}]);