(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[407],{42977:function(e,t,n){"use strict";n.d(t,{R:function(){return i}});var a=n(11527),c=n(50959),r=n(40873),s=n.n(r);let o=(e,t)=>{let n=document.createElement("span");document.body.appendChild(n),n.style.font=t,n.style.position="absolute",n.style.height="auto",n.style.width="auto",n.style.whiteSpace="nowrap",n.textContent=e;let a=Math.ceil(n.getBoundingClientRect().width);return document.body.removeChild(n),a};function i(e){let{region:t,setRegion:n,counties:r}=e,i=(0,c.useRef)(null);return(0,c.useEffect)(()=>{if(i.current){let{fontSize:e,fontWeight:n,fontFamily:a}=window.getComputedStyle(i.current),c="".concat(n," ").concat(e," ").concat(a),r=o("NJ"===t?"NJ":"".concat(t," County"),c);i.current.style.width="".concat(r+30,"px")}},[t]),(0,a.jsxs)("select",{className:s().countySelect,ref:i,value:t,onChange:e=>{n(e.target.value)},children:[(0,a.jsx)("option",{value:"NJ",children:"NJ"}),r.map(e=>(0,a.jsxs)("option",{value:e,children:[e," County"]},e))]})}},19622:function(e,t,n){"use strict";n.d(t,{F:function(){return a}});let a=e=>e.toLowerCase().replaceAll(" ","-")},73339:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(11527),c=n(27149),r=n(34310),s=n(13105);n(50959);var o=n(71192),i=n.n(o);function l(){return(0,a.jsxs)("div",{className:i().footer,children:[(0,a.jsxs)("p",{children:["Code and data are ",(0,a.jsx)(c.Z,{href:r.Tf.href,children:"on GitHub"}),". ",(0,a.jsx)(c.Z,{href:"".concat(r.Tf.href,"/issues/new"),children:"File an issue"}),", ",(0,a.jsx)("a",{href:"mailto:".concat(r.fQ),children:"send us an email"}),", or ",(0,a.jsx)(c.Z,{href:"https://hudcostreets.org/get-involved",children:"get involved"}),"."]}),(0,a.jsx)(s.I_,{socials:[{name:"Hudson County Complete Streets",title:"Hudson County Complete Streets",href:"https://hudcostreets.org",src:"/logos/hccs.png"}]})]})}},17618:function(e,t,n){"use strict";n.d(t,{HQ:function(){return c},Of:function(){return a}});let a="".concat("hudcostreets","/").concat("nj-crashes"),c="https://github.com/".concat(a)},99701:function(e,t,n){"use strict";n.d(t,{f:function(){return C},l_:function(){return D}});var a=n(11527),c=n(50959),r=n(26725),s=n(14445),o=n(78912).Buffer;async function i(e){let{db:t,table:n,csvText:a}=e;return await t.registerFileText(n,a),t}async function l(e){let t,{db:n,tableData:a,stem:c}=e;if("csv"===a.kind){let e="".concat(c,".csv");t="'".concat(e,"'"),await n.registerFileText(e,a.data)}else{let e="".concat(c,".parquet");t="parquet_scan('".concat(e,"')");let r=new Uint8Array(o.from(a.base64,"base64"));await n.registerFileBuffer(e,r)}return t}var u=n(4555);let d="/njsp/projected.csv",h=(0,r.basename)(d),f=e=>"\n    SELECT\n        CAST(sum(driver) as INT) as driver,\n        CAST(sum(pedestrian) as INT) as pedestrian,\n        CAST(sum(cyclist) as INT) as cyclist,\n        CAST(sum(passenger) as INT) as passenger\n    FROM ".concat(h,"\n    ").concat(e?"WHERE county = '".concat(e,"'"):"","\n"),p=e=>{let{county:t,target:n}=e;return"\n    SELECT\n        year,\n        CAST(sum(driver) as INT) as driver,\n        CAST(sum(pedestrian) as INT) as pedestrian,\n        CAST(sum(cyclist) as INT) as cyclist,\n        CAST(sum(passenger) as INT) as passenger,\n        CAST(sum(driver + pedestrian + cyclist + passenger) as INT) as total,\n        NULL as projected\n    FROM ".concat(n,"\n    ").concat(t?"WHERE county = '".concat(t,"'"):"","\n    GROUP BY year\n")};var m=n(17618),y=n(27149),g=n(34310),j=n(13910),w=n(23007),S=n(41796),b=n(19622),v=n(42977);async function x(e){let{ytRows:t,typeProjections:n,initialPlotData:a,types:c,county:r}=e,s=Array.from(c),o={Drivers:"driver",Pedestrians:"pedestrian",Cyclists:"cyclist",Passengers:"passenger",Projected:"projected"};console.log("typeProjections:",n);let i=s.map(e=>{let t=o[e];return t in n?n[t]:0}).reduce((e,t)=>e+t,0);console.log("ytRows:",t);let l={...t[t.length-1]},d=[...t.slice(0,t.length-1),l];if(l.year==u.$B){let e=s.map(e=>l[o[e]]).reduce((e,t)=>e+t,0);l.projected=i-e}else console.warn("getPlotData: last year is not ".concat(u.$B,":"),l," (county: ".concat(r,")")),d.push({year:u.$B,driver:0,pedestrian:0,cyclist:0,passenger:0,total:0,projected:i});console.log("got ytc data:",d);let h=1===c.size,f=a.map(e=>{let{name:t}=e,n=o[t],a={...e};return a.x=d.map(e=>e.year),a.y=d.map(e=>e[n]),a.visible=!!c.has(t)||"legendonly",h||(a.textposition="inside"),a}),p=h?[]:d.map(e=>{let{year:t,projected:n}=e,a=s.map(t=>e[o[t]]).reduce((e,t)=>e+t,0);return{x:t,y:a,text:"".concat(a),showarrow:!1,yshift:10}}),m=(0,w.sq)(d.map(e=>{let{year:t,total:n,projected:a}=e;return[t,{total:n,projected:a}]}));return{rows:d,data:f,annotations:p,yearTotalsMap:m}}let C="Car Crash Deaths",N=["Drivers","Pedestrians","Cyclists","Passengers","Projected"],T="https://nbviewer.org/github/".concat(m.Of,"/blob/main/njsp/update-projections.ipynb");function _(e){let{rundate:t,yearTotalsMap:n,county:c,includeMoreInfoLink:r}=e,s=n["2021"].total,o=n["2022"].total,i=n[u.Vz].total,l=n[u.$B];if(!l)return console.warn("NjspChildren: yearTotalsMap doesn't contain ".concat(u.$B,":"),n),null;let{total:d,projected:h}=l,f=d+h,p=new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"Click/Double-click the legend labels to toggle or solo each type."}),(0,a.jsxs)("p",{children:[(0,a.jsxs)(y.Z,{href:"".concat(g.Tf.href,"/commits/main"),children:["As of ",p]}),", ",u.$B," has ",d," reported deaths, and ",(0,a.jsx)(y.Z,{href:T,children:"is on pace"})," for ",f,f>i?", exceeding ".concat(u.Vz,"'s ").concat(i):"",".",r?(0,a.jsxs)(a.Fragment,{children:[" ",(0,a.jsxs)(y.Z,{href:"/c/".concat(c?(0,b.F)(c):""),children:["More ",c?"".concat(c," County"):"state-wide"," data"]}),"."]}):null]}),null===c?(0,a.jsxs)("p",{children:["2021 and 2022 were the worst years in the NJSP record (since 2008), with ",s," and ",o," deaths, resp."]}):null,(0,a.jsxs)("p",{children:["Data comes from ",(0,a.jsx)(y.Z,{title:"NJ State Police fatal crash data",href:S.jy,children:"NJ State Police"}),", and is updated daily (though crashes sometimes take weeks or months to show up)."]})]})}function D(e){let{params:t,tableData:n,typeProjections:o,counties:m,ytRows:g,rundate:w,yearTotalsMap:S,county:b,title:T,subtitle:D,heading:J,Heading:P="h2",spec:E,setCounty:k,includeMoreInfoLink:A}=e,{src:F,name:I}=E=null!=E?E:u.xW;F=null!=F?F:"plots/".concat(I,".png");let[M,R]=(0,c.useState)(new Set(N)),B=(0,s.W_)(),{data:Z,layout:L,...H}=t,[Y,O]=(0,c.useState)(Z),[$,q]=(0,c.useState)(L.annotations),[z]=function(e){let{url:t,db:n,table:a,query:o,init:l}=e,u=function(e){let{db:t,table:n,url:a}=e,[r,s]=(0,c.useState)(null),o=function(e){let{url:t}=e,[n,a]=(0,c.useState)(null);return(0,c.useEffect)(()=>{fetch(t).then(e=>e.text()).then(a)},[t]),n}({url:a});return(0,c.useEffect)(()=>{(async function(){t&&o&&(console.log("registering db table ".concat(n,": ").concat(a)),s(await i({db:t,table:n,csvText:o})))})()},[t,o]),r}({db:n,table:null!=a?a:(0,r.basename)(t),url:t}),[d,h]=(0,c.useState)(l);return(0,c.useEffect)(()=>{(async function(){console.log("querying table ".concat(a)),u&&h(await (0,s.Vn)(u,o))})()},[u,o]),d}({url:d,db:B,table:h,query:f(b),init:[o]}),[U,V]=(0,c.useState)(S),W=(0,c.useCallback)(e=>{if(M.has(e)){console.log("types: disable ".concat(e));let t=new Set(Array.from(M));t.delete(e),R(t)}else{console.log("types: enable ".concat(e));let t=new Set(Array.from(M));t.add(e),R(t)}return!1},[M]),Q=(0,c.useCallback)(e=>(M.size<=1?(console.log("types: remove solo ".concat(e)),R(new Set(N))):(console.log("types: solo ".concat(e)),R(new Set([e]))),!1),[M]),G=function(e){let{db:t,tableData:n,stem:a}=e,[r,s]=(0,c.useState)(null);return(0,c.useEffect)(()=>{(async function(){if(!t)return;console.log("got db:",t);let e=await l({db:t,tableData:n,stem:a});console.log("registered target:",e),s(e)})()},[t,n]),r}({db:B,tableData:n,stem:"ytc"}),[X,K]=(0,c.useState)(null);(0,c.useEffect)(()=>{if(!B||!G)return;let e=p({county:null!=b?b:null,target:G});console.log("updating ytQuery:",e),K(e)},[B,G,b]);let ee=(0,s.aM)({db:B,query:X,init:g});return(0,c.useEffect)(()=>{(async function(){if(!B||!G)return;let{data:e,annotations:t,yearTotalsMap:n}=await x({ytRows:ee,typeProjections:z,initialPlotData:Z,types:M,county:b});O(e),q(t),V(n)})()},[B,G,ee,z,Z,M,b]),T=null!=T?T:C,(0,a.jsx)(j.XN,{...E,params:{data:Y,layout:{...L,annotations:$,margin:{t:0,r:10,b:0,l:0}},...H},src:F,title:T,subtitle:D,heading:null!=J?J:k?(0,a.jsxs)(P,{children:[(0,a.jsx)(y.Z,{href:"#".concat(E.id),children:T}),":",(0,a.jsx)(v.R,{region:null!=b?b:"NJ",setRegion:e=>k("NJ"===e?null:e),counties:m})]}):null,onLegendClick:W,onLegendDoubleClick:Q,children:(0,a.jsx)(_,{rundate:w,yearTotalsMap:U,county:b,includeMoreInfoLink:A})})}},4555:function(e,t,n){"use strict";n.d(t,{$B:function(){return s},Vv:function(){return d},Vz:function(){return o},xW:function(){return u}});var a=n(11527);n(50959);var c=n(13910),r=n(27149);let s=new Date().getFullYear(),o=s-1,i=[],l=i.concat(...["y","m"].map(e=>i.concat(...["s","c"].map(t=>i.concat(...["d","i","p"].map(n=>{let a="".concat(n).concat(t).concat(e),c={s:"State",c:"County"}[t],r={y:"Year",m:"Month"}[e],s="".concat({s:"State",c:"Counties"}[t]," x ").concat(r,"s"),o={i:"Traffic Crash Injuries",p:"Property Damage Crashes",d:"Traffic Deaths"}[n],i="State"==c?"NJ ".concat(o," per ").concat(r):"NJ ".concat(o," per {").concat(c,", ").concat(r,"}");return"dcm"==a&&(i+=" (12mo avgs)"),{id:a,name:"njdot/".concat(a),title:i,menuName:({i:"Injuries",p:"Property Damage",d:"Deaths"})[n],dropdownSection:s,style:"County"==c&&{height:580}}})))))),u={title:"NJ Traffic Deaths per Year",id:"per-year",name:"fatalities_per_year_by_type",menuName:"Traffic Deaths / Year",dropdownSection:"NJSP",filter:(0,c.m_)({mapRange:c.Oj})},d=[u,{id:"ytd",name:"ytd-deaths",title:"NJ Traffic Deaths per Year",menuName:"YTD",dropdownSection:"NJSP",filter:c._c,children:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("p",{children:"Some data arrives weeks or months after the fact, so current year numbers are especially subject to change."})})},{id:"vs-homicides",name:"crash_homicide_cmp",title:"NJ Traffic Deaths vs. Homicides",menuName:"vs. Homicides",dropdownSection:"NJSP",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"Traffic crashes kill 1.5-2x as many people as homicides in NJ."}),(0,a.jsxs)("p",{children:["Homicide data comes from ",(0,a.jsx)(r.Z,{href:"https://nj.gov/njsp/ucr/uniform-crime-reports.shtml",children:"NJ State Police"})," and ",(0,a.jsx)(r.Z,{href:"https://www.disastercenter.com/crime/njcrimn.htm",children:"Disaster Center"}),"."]})]})},{id:"per-month",name:"fatalities_per_month",title:"NJ Traffic Deaths per Month",menuName:"Per Month",dropdownSection:"NJSP"},{id:"by-month-bars",name:"fatalities_by_month_bars",title:"NJ Traffic Deaths, grouped by month",menuName:"Grouped by Month",dropdownSection:"NJSP"},...l]},34310:function(e,t,n){"use strict";n.d(t,{Tf:function(){return r},fQ:function(){return l},UY:function(){return i}});var a=n(13105);n(27842),n(32262);var c=n(17618);let r=a.Tf(c.Of,"svg"),s=a.tL("hudcostreets"),o=a.mr("hudcostreets"),i=[r,a._F("@neighborryan"),s,o],l="crash-data@hudcostreets.org"},41796:function(e,t,n){"use strict";n.d(t,{Iv:function(){return s},jy:function(){return r},mB:function(){return o}});var a=n(21358),c=n(62400);let r="https://nj.gov/njsp/info/fatalacc/",s="https://www.state.nj.us/transportation/refdata/accident/rawdata01-current.shtm";function o(){let e=c.env.S3_DBS?"https://nj-crashes.s3.amazonaws.com/njdot/data":"".concat((0,a.b)(),"/njdot");return{crashes:"".concat(e,"/crashes.db"),occupants:"".concat(e,"/occupants.db"),pedestrians:"".concat(e,"/pedestrians.db"),vehicles:"".concat(e,"/vehicles.db"),drivers:"".concat(e,"/drivers.db"),cmym:"".concat(e,"/cmym.db"),cmymc:"".concat(e,"/cmymc.db")}}},40873:function(e){e.exports={countySelect:"county-select_countySelect__rwRfM"}},71192:function(e){e.exports={footer:"footer_footer__gb1e2"}}}]);