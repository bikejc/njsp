(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[366],{4150:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/duckdb",function(){return n(9132)}])},9132:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(1527),u=n(959),s=n(515);let l=new Map,o=new Set;function i(e){for(let t of[...o])t(e)}function a(e){try{return e()}catch(e){return}}var d=function(e,t){let[n]=(0,u.useState)(null==t?void 0:t.defaultValue);if("undefined"==typeof window)return[n,()=>{},{isPersistent:!0,removeItem:()=>{}}];let r=null==t?void 0:t.serializer;return function(e,t,n=!0,r=function(e){return"undefined"===e?void 0:JSON.parse(e)},s=JSON.stringify){l.has(e)||void 0===t||null!==a(()=>sessionStorage.getItem(e))||a(()=>sessionStorage.setItem(e,s(t)));let d=(0,u.useRef)({item:null,parsed:t}),c=(0,u.useSyncExternalStore)((0,u.useCallback)(t=>{let n=n=>{e===n&&t()};return o.add(n),()=>{o.delete(n)}},[e]),()=>{var n;let u=null!==(n=a(()=>sessionStorage.getItem(e)))&&void 0!==n?n:null;if(l.has(e))d.current={item:u,parsed:l.get(e)};else if(u!==d.current.item){let e;try{e=null===u?t:r(u)}catch(n){e=t}d.current={item:u,parsed:e}}return d.current.parsed},()=>t),f=(0,u.useCallback)(t=>{let n=t instanceof Function?t(d.current.parsed):t;try{sessionStorage.setItem(e,s(n)),l.delete(e)}catch(t){l.set(e,n)}i(e)},[e,s]);return(0,u.useEffect)(()=>{if(!n)return;let t=t=>{t.storageArea===a(()=>sessionStorage)&&t.key===e&&i(e)};return window.addEventListener("storage",t),()=>window.removeEventListener("storage",t)},[e,n]),(0,u.useMemo)(()=>[c,f,{isPersistent:c===t||!l.has(e),removeItem(){a(()=>sessionStorage.removeItem(e)),l.delete(e),i(e)}}],[e,f,c,t])}(e,n,null==t?void 0:t.storageSync,null==r?void 0:r.parse,null==r?void 0:r.stringify)};function c(){let[e,t]=(0,u.useState)(null),n=(0,u.useRef)(null),[l,o]=(0,u.useState)(null),[i,a]=d("duckdb-query",{defaultValue:""});return(0,u.useEffect)(()=>{(0,s.Vx)({path:"s3://nj-crashes/njdot/2021.duckdb"}).then(e=>t(e))},[]),(0,r.jsxs)("div",{children:[(0,r.jsx)("textarea",{ref:n,onKeyDown:t=>{var r;let u=null===(r=n.current)||void 0===r?void 0:r.value;if(u&&"Enter"===t.code&&t.shiftKey){if(t.preventDefault(),!e){console.error("no db");return}console.log("query:",u),(0,s.Vn)(e,u).then(e=>{console.log("result:",e),o(e)})}},value:i,onChange:e=>{var t;a((null===(t=n.current)||void 0===t?void 0:t.value)||"")}}),l&&(0,r.jsx)("pre",{children:JSON.stringify(l,null,2)})]})}}},function(e){e.O(0,[515,774,888,179],function(){return e(e.s=4150)}),_N_E=e.O()}]);