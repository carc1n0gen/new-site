(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5738:function(e,t,n){Promise.resolve().then(n.t.bind(n,7095,23)),Promise.resolve().then(n.bind(n,7409)),Promise.resolve().then(n.bind(n,304)),Promise.resolve().then(n.t.bind(n,8410,23)),Promise.resolve().then(n.t.bind(n,8808,23))},1522:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return a},default:function(){return i}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let a=r[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?o[a]=!!n[e]:o.setAttribute(a,n[e])}let{children:a,dangerouslySetInnerHTML:i}=n;return i?o.innerHTML=i.__html||"":a&&(o.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),o}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var c;(null==n?void 0:null==(c=n.tagName)?void 0:c.toLowerCase())===e&&l.push(n)}let s=t.map(o).filter(e=>{for(let t=0,n=l.length;t<n;t++){let n=l[t];if(a(n,e))return l.splice(t,1),!1}return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>n.insertBefore(e,r)),r.content=(i-l.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7676:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return y},initScriptLoader:function(){return h},default:function(){return _}});let r=n(6927),o=n(5909),a=r._(n(8431)),i=o._(n(6006)),l=n(7268),c=n(1522),s=n(9830),u=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy"],p=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:a,children:i="",strategy:l="afterInteractive",onError:s}=e,p=n||t;if(p&&d.has(p))return;if(u.has(t)){d.add(p),u.get(t).then(r,s);return}let y=()=>{o&&o(),d.add(p)},h=document.createElement("script"),m=new Promise((e,t)=>{h.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),h.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[n,r]of(a?(h.innerHTML=a.__html||"",y()):i?(h.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",y()):t&&(h.src=t,u.set(t,m)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();h.setAttribute(e,r)}"worker"===l&&h.setAttribute("type","text/partytown"),h.setAttribute("data-nscript",l),document.body.appendChild(h)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>p(e))}):p(e)}function h(e){e.forEach(y),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}()}function m(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:c="afterInteractive",onError:u,...f}=e,{updateScripts:y,scripts:h,getIsSsr:m,appDir:_,nonce:g}=(0,i.useContext)(l.HeadManagerContext),v=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;v.current||(o&&e&&d.has(e)&&o(),v.current=!0)},[o,t,n]);let b=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!b.current&&("afterInteractive"===c?p(e):"lazyOnload"===c&&("complete"===document.readyState?(0,s.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>p(e))})),b.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(y?(h[c]=(h[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:u,...f}]),y(h)):m&&m()?d.add(t||n):m&&!m()&&p(e)),_){if("beforeInteractive"===c)return n?(a.default.preload(n,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"}),i.default.createElement("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(f.dangerouslySetInnerHTML&&(f.children=f.dangerouslySetInnerHTML.__html,delete f.dangerouslySetInnerHTML),i.default.createElement("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...f}])+")"}}));"afterInteractive"===c&&n&&a.default.preload(n,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"})}return null}Object.defineProperty(m,"__nextScript",{value:!0});let _=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7409:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(9268),o=n(6341),a=n.n(o);function i(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-0HTY1R4GPX"}),(0,r.jsx)(a(),{id:"google-analytics",children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', 'G-0HTY1R4GPX');\n        "})]})}},304:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(9268),o=n(5846),a=n.n(o),i=n(6008);let l="font-bold border-b border-b-2";function c(){let e=(0,i.usePathname)();return(0,r.jsx)("nav",{className:"mt-5 md:mt-10 py-5",children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)(a(),{href:"/",className:"mx-3 hover:text-zinc-100 ".concat("/archive/"!==e&&"/contact/"!==e?l:""),children:"Blog"}),(0,r.jsx)(a(),{href:"/archive",className:"mx-3 hover:text-zinc-100 ".concat("/archive/"===e?l:""),children:"Archive"}),(0,r.jsx)(a(),{href:"/contact",className:"ml-3 hover:text-zinc-100 ".concat("/contact/"===e?l:""),children:"Contact"})]})})}},8410:function(){},8808:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:u,props:a,_owner:l.current}}t.Fragment=a,t.jsx=s,t.jsxs=s},9268:function(e,t,n){"use strict";e.exports=n(3177)},5846:function(e,t,n){e.exports=n(7095)},6008:function(e,t,n){e.exports=n(4e3)},6341:function(e,t,n){e.exports=n(7676)}},function(e){e.O(0,[95,253,698,744],function(){return e(e.s=5738)}),_N_E=e.O()}]);