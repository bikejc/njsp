(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[366],{94150:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/duckdb",function(){return n(9561)}])},9561:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(11527),u=n(50959),s=n(14445),l=n(8699);function o(){let[e,t]=(0,u.useState)(null),n=(0,u.useRef)(null),[o,i]=(0,u.useState)(null),[a,c]=(0,l.Z)("duckdb-query",{defaultValue:""});return(0,u.useEffect)(()=>{(0,s.Vx)({path:"s3://nj-crashes/njdot/2021.duckdb"}).then(e=>t(e))},[]),(0,r.jsxs)("div",{children:[(0,r.jsx)("textarea",{ref:n,onKeyDown:t=>{var r;let u=null===(r=n.current)||void 0===r?void 0:r.value;if(u&&"Enter"===t.code&&t.shiftKey){if(t.preventDefault(),!e){console.error("no db");return}console.log("query:",u),(0,s.Vn)(e,u).then(e=>{console.log("result:",e),i(e)})}},value:a,onChange:e=>{var t;c((null===(t=n.current)||void 0===t?void 0:t.value)||"")}}),o&&(0,r.jsx)("pre",{children:JSON.stringify(o,null,2)})]})}},8699:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(50959);let u=new Map,s=new Set;function l(e){for(let t of[...s])t(e)}function o(e){try{return e()}catch(e){return}}var i=function(e,t){let[n]=(0,r.useState)(null==t?void 0:t.defaultValue);if("undefined"==typeof window)return[n,()=>{},{isPersistent:!0,removeItem:()=>{}}];let i=null==t?void 0:t.serializer;return function(e,t,n=!0,i=function(e){return"undefined"===e?void 0:JSON.parse(e)},a=JSON.stringify){u.has(e)||void 0===t||null!==o(()=>sessionStorage.getItem(e))||o(()=>sessionStorage.setItem(e,a(t)));let c=(0,r.useRef)({item:null,parsed:t}),d=(0,r.useSyncExternalStore)((0,r.useCallback)(t=>{let n=n=>{e===n&&t()};return s.add(n),()=>{s.delete(n)}},[e]),()=>{var n;let r=null!==(n=o(()=>sessionStorage.getItem(e)))&&void 0!==n?n:null;if(u.has(e))c.current={item:r,parsed:u.get(e)};else if(r!==c.current.item){let e;try{e=null===r?t:i(r)}catch(n){e=t}c.current={item:r,parsed:e}}return c.current.parsed},()=>t),f=(0,r.useCallback)(t=>{let n=t instanceof Function?t(c.current.parsed):t;try{sessionStorage.setItem(e,a(n)),u.delete(e)}catch(t){u.set(e,n)}l(e)},[e,a]);return(0,r.useEffect)(()=>{if(!n)return;let t=t=>{t.storageArea===o(()=>sessionStorage)&&t.key===e&&l(e)};return window.addEventListener("storage",t),()=>window.removeEventListener("storage",t)},[e,n]),(0,r.useMemo)(()=>[d,f,{isPersistent:d===t||!u.has(e),removeItem(){o(()=>sessionStorage.removeItem(e)),u.delete(e),l(e)}}],[e,f,d,t])}(e,n,null==t?void 0:t.storageSync,null==i?void 0:i.parse,null==i?void 0:i.stringify)}}},function(e){e.O(0,[445,774,888,179],function(){return e(e.s=94150)}),_N_E=e.O()}]);