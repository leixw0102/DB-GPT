(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41],{13264:function(e,t,n){"use strict";var r=n(70182);let a=(0,r.ZP)();t.Z=a},57838:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(67294);function a(){let[,e]=r.useReducer(e=>e+1,0);return e}},53116:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datastores/documents/chunklist",function(){return n(49114)}])},49114:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(39332),c=n(67294),s=n(56385),i=n(48665),o=n(70702),l=n(84229),d=n(2166),u=n(40911),h=n(61685),f=n(74627),g=n(60122),j=n(30119),m=n(67421);t.default=()=>{let e=(0,a.useRouter)(),{mode:t}=(0,s.tv)(),n=(0,a.useSearchParams)(),p=n&&n.get("spacename"),x=n&&n.get("documentid"),[_,Z]=(0,c.useState)(0),[w,P]=(0,c.useState)(0),[b,k]=(0,c.useState)([]),{t:v}=(0,m.$G)();return(0,c.useEffect)(()=>{(async function(){let e=await (0,j.PR)("/knowledge/".concat(p,"/chunk/list"),{document_id:x,page:1,page_size:20});e.success&&(k(e.data.data),Z(e.data.total),P(e.data.page))})()},[]),(0,r.jsxs)(i.Z,{className:"p-4 h-[90%]",children:[(0,r.jsx)(o.Z,{className:"mb-5",direction:"row",justifyContent:"flex-start",alignItems:"center",children:(0,r.jsxs)(l.Z,{"aria-label":"breadcrumbs",children:[(0,r.jsx)(d.Z,{onClick:()=>{e.push("/datastores")},underline:"hover",color:"neutral",fontSize:"inherit",children:v("Knowledge_Space")},"Knowledge Space"),(0,r.jsx)(d.Z,{onClick:()=>{e.push("/datastores/documents?name=".concat(p))},underline:"hover",color:"neutral",fontSize:"inherit",children:v("Documents")},"Knowledge Space"),(0,r.jsx)(u.ZP,{fontSize:"inherit",children:v("Chunks")})]})}),(0,r.jsx)(i.Z,{className:"p-4 overflow-auto h-[90%]",sx:{"&::-webkit-scrollbar":{display:"none"}},children:b.length?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(h.Z,{color:"primary",variant:"plain",size:"lg",sx:{"& tbody tr: hover":{backgroundColor:"light"===t?"rgb(246, 246, 246)":"rgb(33, 33, 40)"},"& tbody tr: hover a":{textDecoration:"underline"}},children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:v("Name")}),(0,r.jsx)("th",{children:v("Content")}),(0,r.jsx)("th",{children:v("Meta_Data")})]})}),(0,r.jsx)("tbody",{children:b.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.doc_name}),(0,r.jsx)("td",{children:(0,r.jsx)(f.Z,{content:e.content,trigger:"hover",children:e.content.length>10?"".concat(e.content.slice(0,10),"..."):e.content})}),(0,r.jsx)("td",{children:(0,r.jsx)(f.Z,{content:JSON.stringify(e.meta_info||"{}",null,2),trigger:"hover",children:e.meta_info.length>10?"".concat(e.meta_info.slice(0,10),"..."):e.meta_info})})]},e.id))})]})}):(0,r.jsx)(r.Fragment,{})}),(0,r.jsx)(o.Z,{className:"mt-5",direction:"row",justifyContent:"flex-end",children:(0,r.jsx)(g.Z,{defaultPageSize:20,showSizeChanger:!1,current:w,total:_,onChange:async e=>{let t=await (0,j.PR)("/knowledge/".concat(p,"/chunk/list"),{document_id:x,page:e,page_size:20});t.success&&(k(t.data.data),Z(t.data.total),P(t.data.page))},hideOnSinglePage:!0})})]})}},30119:function(e,t,n){"use strict";n.d(t,{Tk:function(){return i},PR:function(){return o},Ej:function(){return l}});var r=n(58301),a=n(6154);let c=a.Z.create({baseURL:"http://127.0.0.1:5000"});c.defaults.timeout=1e4,c.interceptors.response.use(e=>e.data,e=>Promise.reject(e)),n(96486);let s={"content-type":"application/json"},i=(e,t)=>{if(t){let n=Object.keys(t).filter(e=>void 0!==t[e]&&""!==t[e]).map(e=>"".concat(e,"=").concat(t[e])).join("&");n&&(e+="?".concat(n))}return c.get("/api"+e,{headers:s}).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)})},o=(e,t)=>c.post(e,t,{headers:s}).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)}),l=(e,t)=>c.post(e,t).then(e=>e).catch(e=>{r.ZP.error(e),Promise.reject(e)})}},function(e){e.O(0,[662,215,902,289,455,34,774,888,179],function(){return e(e.s=53116)}),_N_E=e.O()}]);