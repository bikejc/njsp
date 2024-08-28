"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[282],{11282:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(52676),u=n(95407),o=n(93609),l=n(2912),i=n(3852);let c=(0,u.Au)(function({positions:e,...t},n){let r=new i.Polyline(e,t);return(0,o.O)(r,(0,l.sj)(n,{overlayContainer:r}))},function(e,t,n){t.positions!==n.positions&&e.setLatLngs(t.positions)});var a=n(71010),f=n(21482),s=n(39773),d=n(75271);function p(e){let{crashes:t,hudco:n,...u}=e,[o]=n.features,[l]=o.geometry.coordinates;return(0,r.jsxs)(s.Z,{...u,children:[t.map((e,t)=>{let{lat:n,lon:u,oilat:o,oilon:l}=e;return(0,r.jsxs)(d.Fragment,{children:[(0,r.jsx)(c,{positions:[[n,u],[o,l]],weight:1,opacity:.5,color:"orange"}),(0,r.jsx)(a.C,{color:"red",fillColor:"red",center:[n,u],radius:5}),(0,r.jsx)(a.C,{color:"blue",fillColor:"blue",center:[o,l],radius:5})]},t)}),(0,r.jsx)(f.Q,{data:n,style:{fillColor:"yellow",color:"yellow",opacity:.5,fillOpacity:0}})]})}},39773:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(75271),u=n(2912),o=n(3852);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let i=(0,r.forwardRef)(function({bounds:e,boundsOptions:t,center:n,children:i,className:c,id:a,placeholder:f,style:s,whenReady:d,zoom:p,...m},v){let[y]=(0,r.useState)({className:c,id:a,style:s}),[h,b]=(0,r.useState)(null);(0,r.useImperativeHandle)(v,()=>h?.map??null,[h]);let C=(0,r.useCallback)(r=>{if(null!==r&&null===h){let l=new o.Map(r,m);null!=n&&null!=p?l.setView(n,p):null!=e&&l.fitBounds(e,t),null!=d&&l.whenReady(d),b((0,u.Hb)(l))}},[]);(0,r.useEffect)(()=>()=>{h?.map.remove()},[h]);let E=h?r.createElement(u.UO,{value:h},i):f??null;return r.createElement("div",l({},y,{ref:C}),E)});var c=n(33194);function a({setCenter:e,setZoom:t,onClick:n,children:u}){let o=(0,c.Sx)();return(0,c.zV)({click:e=>{console.log("leaflet click:",e),n&&n(e)},moveend:()=>e(o.getCenter()),zoom:()=>t(o.getZoom())}),r.createElement(r.Fragment,null,u)}var f=n(95407),s=n(1707),d=n(93609);function p(e,t,n){let{opacity:r,zIndex:u}=t;null!=r&&r!==n.opacity&&e.setOpacity(r),null!=u&&u!==n.zIndex&&e.setZIndex(u)}let m=(0,f.Lf)(function({url:e,...t},n){let r=new o.TileLayer(e,(0,s.q)(t,n));return(0,d.O)(r,n)},function(e,t,n){p(e,t,n);let{url:r}=t;null!=r&&r!==n.url&&e.setUrl(r)}),v={openstreetmap:{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"},alidade_smooth_dark:{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",attribution:'&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}},y=(0,f.Lf)(function({url:e,...t},n){let r=new o.TileLayer(e,(0,s.q)(t,n));return(0,d.O)(r,n)},function(e,t,n){p(e,t,n);let{url:r}=t;null!=r&&r!==n.url&&e.setUrl(r)});function h({map:e="alidade_smooth_dark",edgeBufferTiles:t,...n}){let{url:u,attribution:o}=v[e];return t?r.createElement(y,{url:u,attribution:o,...n}):r.createElement(m,{url:u,attribution:o,...n})}function b({map:e="alidade_smooth_dark",edgeBufferTiles:t,setCenter:n,setZoom:u,tolerance:l=12,padding:c=.5,onClick:f,children:s,...d}){let p=(0,r.useMemo)(()=>o.canvas({tolerance:l,padding:c}),[l,c]);return r.createElement(i,{...d,renderer:p},r.createElement(a,{setCenter:n,setZoom:u,onClick:f},r.createElement(h,{map:e,edgeBufferTiles:t}),s))}},2912:function(e,t,n){n.d(t,{Hb:function(){return u},UO:function(){return i},mE:function(){return c},sj:function(){return o}});var r=n(75271);function u(e){return Object.freeze({__version:1,map:e})}function o(e,t){return Object.freeze({...e,...t})}let l=(0,r.createContext)(null),i=l.Provider;function c(){let e=(0,r.useContext)(l);if(null==e)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}},93609:function(e,t,n){n.d(t,{I:function(){return o},O:function(){return u}});var r=n(75271);function u(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function o(e,t){return null==t?function(t,n){let u=(0,r.useRef)();return u.current||(u.current=e(t,n)),u}:function(n,u){let o=(0,r.useRef)();o.current||(o.current=e(n,u));let l=(0,r.useRef)(n),{instance:i}=o.current;return(0,r.useEffect)(function(){l.current!==n&&(t(i,n,l.current),l.current=n)},[i,n,u]),o}}},95407:function(e,t,n){n.d(t,{SO:function(){return s},Au:function(){return d},Lf:function(){return p}});var r=n(75271),u=n(30967),o=n(2912),l=n(93609);function i(e,t){let n=(0,r.useRef)(t);(0,r.useEffect)(function(){t!==n.current&&null!=e.attributionControl&&(null!=n.current&&e.attributionControl.removeAttribution(n.current),null!=t&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}function c(e,t){let n=(0,r.useRef)();(0,r.useEffect)(function(){return null!=t&&e.instance.on(t),n.current=t,function(){null!=n.current&&e.instance.off(n.current),n.current=null}},[e,t])}var a=n(1707);function f(e,t){(0,r.useEffect)(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){t.layerContainer?.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function s(e,t){var n,f;return n=(0,l.I)(e),f=function(e,r){let u=(0,o.mE)(),l=n((0,a.q)(e,u),u);return i(u.map,e.attribution),c(l.current,e.eventHandlers),t(l.current,u,e,r),l},(0,r.forwardRef)(function(e,t){let[n,o]=(0,r.useState)(!1),{instance:l}=f(e,o).current;(0,r.useImperativeHandle)(t,()=>l),(0,r.useEffect)(function(){n&&l.update()},[l,n,e.children]);let i=l._contentNode;return i?(0,u.createPortal)(e.children,i):null})}function d(e,t){var n,u;return n=(0,l.I)(e,t),u=function(e){let t=(0,o.mE)(),u=n((0,a.q)(e,t),t);return c(u.current,e.eventHandlers),f(u.current,t),function(e,t){let n=(0,r.useRef)();(0,r.useEffect)(function(){if(t.pathOptions!==n.current){let r=t.pathOptions??{};e.instance.setStyle(r),n.current=r}},[e,t])}(u.current,e),u},(0,r.forwardRef)(function(e,t){let{instance:n,context:l}=u(e).current;return(0,r.useImperativeHandle)(t,()=>n),null==e.children?null:r.createElement(o.UO,{value:l},e.children)})}function p(e,t){var n,u;return n=(0,l.I)(e,t),u=function(e){let t=(0,o.mE)(),r=n((0,a.q)(e,t),t);return i(t.map,e.attribution),c(r.current,e.eventHandlers),f(r.current,t),r},(0,r.forwardRef)(function(e,t){let{instance:n}=u(e).current;return(0,r.useImperativeHandle)(t,()=>n),null})}},1707:function(e,t,n){n.d(t,{q:function(){return r}});function r(e,t){let n=e.pane??t.pane;return n?{...e,pane:n}:e}},71010:function(e,t,n){n.d(t,{C:function(){return i}});var r=n(95407),u=n(93609),o=n(2912),l=n(3852);let i=(0,r.Au)(function({center:e,children:t,...n},r){let i=new l.Circle(e,n);return(0,u.O)(i,(0,o.sj)(r,{overlayContainer:i}))},function(e,t,n){t.center!==n.center&&e.setLatLng(t.center),null!=t.radius&&t.radius!==n.radius&&e.setRadius(t.radius)})},21482:function(e,t,n){n.d(t,{Q:function(){return i}});var r=n(95407),u=n(93609),o=n(2912),l=n(3852);let i=(0,r.Au)(function({data:e,...t},n){let r=new l.GeoJSON(e,t);return(0,u.O)(r,(0,o.sj)(n,{overlayContainer:r}))},function(e,t,n){t.style!==n.style&&(null==t.style?e.resetStyle():e.setStyle(t.style))})},33194:function(e,t,n){n.d(t,{Sx:function(){return o},zV:function(){return l}});var r=n(2912),u=n(75271);function o(){return(0,r.mE)().map}function l(e){let t=o();return(0,u.useEffect)(function(){return t.on(e),function(){t.off(e)}},[t,e]),t}}}]);