(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4860:function(e,t,r){Promise.resolve().then(r.t.bind(r,7095,23)),Promise.resolve().then(r.bind(r,7409)),Promise.resolve().then(r.bind(r,2855)),Promise.resolve().then(r.t.bind(r,8410,23))},1522:function(e,t){"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DOMAttributeNames:function(){return n},isEqualNode:function(){return a},default:function(){return i}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:r}=e,o=document.createElement(t);for(let e in r){if(!r.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===r[e])continue;let a=n[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?o[a]=!!r[e]:o.setAttribute(a,r[e])}let{children:a,dangerouslySetInnerHTML:i}=r;return i?o.innerHTML=i.__html||"":a&&(o.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),o}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let r=t.getAttribute("nonce");if(r&&!e.getAttribute("nonce")){let n=t.cloneNode(!0);return n.setAttribute("nonce",""),n.nonce=r,r===e.nonce&&e.isEqualNode(n)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let r=t[e.type]||[];r.push(e),t[e.type]=r});let n=t.title?t.title[0]:null,o="";if(n){let{children:e}=n.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{r(e,t[e]||[])})}}}r=(e,t)=>{let r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]"),i=Number(n.content),l=[];for(let t=0,r=n.previousElementSibling;t<i;t++,r=(null==r?void 0:r.previousElementSibling)||null){var c;(null==r?void 0:null==(c=r.tagName)?void 0:c.toLowerCase())===e&&l.push(r)}let s=t.map(o).filter(e=>{for(let t=0,r=l.length;t<r;t++){let r=l[t];if(a(r,e))return l.splice(t,1),!1}return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>r.insertBefore(e,n)),n.content=(i-l.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7676:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{handleClientScriptLoad:function(){return m},initScriptLoader:function(){return h},default:function(){return y}});let n=r(6927),o=r(5909),a=n._(r(8431)),i=o._(r(6006)),l=r(7268),c=r(1522),s=r(9830),u=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy"],p=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:o=null,dangerouslySetInnerHTML:a,children:i="",strategy:l="afterInteractive",onError:s}=e,p=r||t;if(p&&d.has(p))return;if(u.has(t)){d.add(p),u.get(t).then(n,s);return}let m=()=>{o&&o(),d.add(p)},h=document.createElement("script"),b=new Promise((e,t)=>{h.addEventListener("load",function(t){e(),n&&n.call(this,t),m()}),h.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[r,n]of(a?(h.innerHTML=a.__html||"",m()):i?(h.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",m()):t&&(h.src=t,u.set(t,b)),Object.entries(e))){if(void 0===n||f.includes(r))continue;let e=c.DOMAttributeNames[r]||r.toLowerCase();h.setAttribute(e,n)}"worker"===l&&h.setAttribute("type","text/partytown"),h.setAttribute("data-nscript",l),document.body.appendChild(h)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>p(e))}):p(e)}function h(e){e.forEach(m),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}()}function b(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:o=null,strategy:c="afterInteractive",onError:u,...f}=e,{updateScripts:m,scripts:h,getIsSsr:b,appDir:y,nonce:g}=(0,i.useContext)(l.HeadManagerContext),v=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||r;v.current||(o&&e&&d.has(e)&&o(),v.current=!0)},[o,t,r]);let _=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!_.current&&("afterInteractive"===c?p(e):"lazyOnload"===c&&("complete"===document.readyState?(0,s.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>p(e))})),_.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(m?(h[c]=(h[c]||[]).concat([{id:t,src:r,onLoad:n,onReady:o,onError:u,...f}]),m(h)):b&&b()?d.add(t||r):b&&!b()&&p(e)),y){if("beforeInteractive"===c)return r?(a.default.preload(r,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"}),i.default.createElement("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r])+")"}})):(f.dangerouslySetInnerHTML&&(f.children=f.dangerouslySetInnerHTML.__html,delete f.dangerouslySetInnerHTML),i.default.createElement("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...f}])+")"}}));"afterInteractive"===c&&r&&a.default.preload(r,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let y=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7409:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(9268),o=r(6341),a=r.n(o);function i(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-0HTY1R4GPX"}),(0,n.jsx)(a(),{id:"google-analytics",children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', 'G-0HTY1R4GPX');\n        "})]})}},2855:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(9268),o=r(5846),a=r.n(o),i=r(6008),l=r(6006);function c(){return(0,n.jsxs)("form",{action:"/search",className:"mt-5 md:-mt-1 md:float-right",children:[(0,n.jsx)("input",{type:"text",name:"q",placeholder:"Search for posts","aria-label":"Search for posts",className:"border dark:border-zinc-500 border-r-0 rounded-md rounded-r-none p-1 bg-zinc-50 dark:bg-zinc-700"}),(0,n.jsx)("button",{type:"submit",className:"px-4 py-1 border border-l-0 border-blue-600 dark:border-blue-500 rounded-md rounded-l-none bg-blue-600 text-blue-50",children:"Search"})]})}function s(){let e=(0,i.useSearchParams)(),[t,r]=(0,l.useState)(e.get("q")||"");return(0,n.jsxs)("form",{action:"/search",className:"mt-5 md:-mt-1 md:float-right",children:[(0,n.jsx)("input",{type:"text",name:"q",placeholder:"Search for posts","aria-label":"Search for posts",className:"border dark:border-zinc-500 border-r-0 rounded-md rounded-r-none p-1 bg-zinc-50 dark:bg-zinc-700",value:t,onChange:e=>{let{target:t}=e;return r(t.value)}}),(0,n.jsx)("button",{type:"submit",className:"px-4 py-1 border border-l-0 border-blue-600 dark:border-blue-500 rounded-md rounded-l-none bg-blue-600 text-blue-50",children:"Search"})]})}let u="font-bold border-b-4 border-b-zinc-300 dark:border-b-zinc-600";function d(){let e=(0,i.usePathname)();return(0,n.jsx)("nav",{className:"border-t border-t-zinc-300 dark:border-t-zinc-600 mt-5 md:mt-10 py-5",children:(0,n.jsxs)("div",{className:"md:max-w-screen-md mx-auto",children:[(0,n.jsx)(a(),{href:"/",className:"mr-6 hover:text-zinc-400 dark:hover:text-zinc-200 ".concat("/archive/"!==e&&"/contact/"!==e?u:""),children:"Blog"}),(0,n.jsx)(a(),{href:"/archive",className:"mr-6 hover:text-zinc-400 dark:hover:text-zinc-200  ".concat("/archive/"===e?u:""),children:"Archive"}),(0,n.jsx)(a(),{href:"/contact",className:"mr-6 hover:text-zinc-400 dark:hover:text-zinc-200  ".concat("/contact/"===e?u:""),children:"Contact"}),(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(c,{}),children:(0,n.jsx)(s,{})})]})})}},8410:function(){},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6006),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,a={},s=null,u=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:u,props:a,_owner:l.current}}t.Fragment=a,t.jsx=s,t.jsxs=s},9268:function(e,t,r){"use strict";e.exports=r(3177)},5846:function(e,t,r){e.exports=r(7095)},6008:function(e,t,r){e.exports=r(4e3)},6341:function(e,t,r){e.exports=r(7676)}},function(e){e.O(0,[95,253,698,744],function(){return e(e.s=4860)}),_N_E=e.O()}]);