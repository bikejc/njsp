"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[138],{6138:function(t,e,l){l.r(e),l.d(e,{DATA_URL:function(){return g},default:function(){return h}});var n=l(1527),o=l(3285),a=l(8974),i=l.n(a),s=l(515),r=l(959),c=l(1358),u=l(7735),d=l(809);let g="https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/scatterplot/manhattan.json",p={longitude:-74,latitude:40.7,zoom:11,maxZoom:16,pitch:0,bearing:0};function h(t){let{radius:e=10,maleColor:l,femaleColor:a,mapStyle:g="https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json"}=t,[h,m]=(0,r.useState)([]),[f,b]=(0,r.useState)(null);(0,r.useEffect)(()=>{let{protocol:t,host:e}=window.location,l=(0,c.b)(),n="".concat(t,"//").concat(e).concat(l,"/njdot/hudson-2017:-pif.parquet");(async()=>{console.log("getting db");let t=await (0,s.zx)();console.log("got db");let e=(await (0,s.Vn)(t,"\n                    SELECT id, dt, ilat as lat, ilon as lon, severity\n                    FROM '".concat(n,"'\n                "))).map(t=>{let{dt:e,...l}=t;return{dt:new Date(e),...l}});console.log("got crashes:",e),m(e)})()},[]);let w={p:[255,255,0],i:[255,128,0],f:[255,0,0]};if(!h.length)return null;let k=[new d.Z({id:"scatter-plot",data:h,pickable:!0,radiusScale:5,radiusMinPixels:1,getPosition:t=>{let{lat:e,lon:l}=t;return[l,e,0]},getFillColor:t=>{var e;let{severity:l}=t;return null!==(e=w[l])&&void 0!==e?e:[255,255,255]},getRadius:1,updateTriggers:{getFillColor:[l,a]}})];return console.log("hovered id:",f),(0,n.jsx)(u.Z,{layers:k,initialViewState:p,controller:!0,getTooltip:t=>{let{object:e}=t;return e?(console.log("object:",e),b(e.id),{html:"\n                        <div>yay</div>\n                    "}):null},pickingRadius:10,onDragEnd:(t,e)=>{let{coordinate:l}=t;if(!l)return;let[n,o]=l;console.log("dragEnd:",n,o)},children:(0,n.jsx)(o.D5,{reuseMaps:!0,mapLib:i(),mapStyle:g})})}}}]);