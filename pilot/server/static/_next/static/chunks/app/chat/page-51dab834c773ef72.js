(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{55749:function(e,t,r){"use strict";var a=r(78997);t.Z=void 0;var n=a(r(76906)),s=r(9268),i=(0,n.default)([(0,s.jsx)("path",{d:"M19.89 10.75c.07.41.11.82.11 1.25 0 4.41-3.59 8-8 8s-8-3.59-8-8c0-.05.01-.1 0-.14 2.6-.98 4.69-2.99 5.74-5.55 3.38 4.14 7.97 3.73 8.99 3.61l-.89-1.93c-.13.01-4.62.38-7.18-3.86 1.01-.16 1.71-.15 2.59-.01 2.52-1.15 1.93-.89 2.76-1.26C14.78 2.3 13.43 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.43-.3-2.78-.84-4.01l-1.27 2.76zM8.08 5.03C7.45 6.92 6.13 8.5 4.42 9.47 5.05 7.58 6.37 6 8.08 5.03z"},"0"),(0,s.jsx)("circle",{cx:"15",cy:"13",r:"1.25"},"1"),(0,s.jsx)("circle",{cx:"9",cy:"13",r:"1.25"},"2"),(0,s.jsx)("path",{d:"m23 4.5-2.4-1.1L19.5 1l-1.1 2.4L16 4.5l2.4 1.1L19.5 8l1.1-2.4z"},"3")],"FaceRetouchingNaturalOutlined");t.Z=i},70781:function(e,t,r){"use strict";var a=r(78997);t.Z=void 0;var n=a(r(76906)),s=r(9268),i=(0,n.default)((0,s.jsx)("path",{d:"M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13zm7.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM8 15h8v2H8v-2z"}),"SmartToyOutlined");t.Z=i},90545:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var a=r(40431),n=r(46750),s=r(86006),i=r(89791),o=r(4323),l=r(51579),c=r(86601),u=r(95887),d=r(9268);let h=["className","component"];var f=r(47327),v=r(98918);let m=function(e={}){let{themeId:t,defaultTheme:r,defaultClassName:f="MuiBox-root",generateClassName:v}=e,m=(0,o.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(l.Z),p=s.forwardRef(function(e,s){let o=(0,u.Z)(r),l=(0,c.Z)(e),{className:p,component:g="div"}=l,x=(0,n.Z)(l,h);return(0,d.jsx)(m,(0,a.Z)({as:g,ref:s,className:(0,i.Z)(p,v?v(f):f),theme:t&&o[t]||o},x))});return p}({defaultTheme:v.Z,defaultClassName:"MuiBox-root",generateClassName:f.Z.generate});var p=m},84380:function(e,t,r){Promise.resolve().then(r.bind(r,59498))},59498:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return R}});var a=r(9268),n=r(89081),s=r(78915),i=r(66487),o=r(67830),l=r(54842),c=r(70900),u=r(62414),d=r(90545),h=r(94244),f=r(33155),v=r(7354),m=r(35086),p=r(53047),g=r(86006),x=r(19700),y=r(92391),j=r(55749),w=r(70781),b=r(75403),Z=r(99398),S=r(49064),N=r(56008);let P=y.z.object({query:y.z.string().min(1)});var C=e=>{var t;let{messages:r,onSubmit:n,readOnly:s,paramsList:i,clearIntialMessage:y}=e,C=(0,N.useSearchParams)(),O=C.get("initMessage"),R=g.useRef(null),[k,z]=(0,g.useState)(!1),[_,E]=(0,g.useState)(),M=(0,x.cI)({resolver:(0,o.F)(P),defaultValues:{}}),L=async e=>{let{query:t}=e;try{console.log("submit"),z(!0),M.reset(),await n(t,{select_param:null==i?void 0:i[_]})}catch(e){}finally{z(!1)}},T=async()=>{try{let e=new URLSearchParams(window.location.search),t=e.get("initMessage");e.delete("initMessage"),window.history.replaceState(null,null,"?".concat(e.toString())),await L({query:t})}catch(e){console.log(e)}finally{null==y||y()}},F={overrides:{code:e=>{let{children:t}=e;return(0,a.jsx)(Z.Z,{language:"javascript",style:S.Z,children:t})}},wrapper:g.Fragment};return g.useEffect(()=>{R.current&&R.current.scrollTo(0,R.current.scrollHeight)},[null==r?void 0:r.length]),g.useEffect(()=>{O&&r.length<=0&&T()},[O,r.length]),g.useEffect(()=>{var e,t;i&&(null===(e=Object.keys(i||{}))||void 0===e?void 0:e.length)>0&&E(null===(t=Object.keys(i||{}))||void 0===t?void 0:t[0])},[i]),(0,a.jsx)("div",{className:"w-full h-full",children:(0,a.jsxs)(c.Z,{className:"w-full h-full bg-[#fefefe] dark:bg-[#212121]",sx:{table:{borderCollapse:"collapse",border:"1px solid #ccc",width:"100%"},"th, td":{border:"1px solid #ccc",padding:"10px",textAlign:"center"}},children:[(0,a.jsxs)(c.Z,{ref:R,direction:"column",sx:{overflowY:"auto",maxHeight:"100%",flex:1},children:[null===(t=r.filter(e=>["view","human"].includes(e.role)))||void 0===t?void 0:t.map((e,t)=>{var r;return(0,a.jsx)(c.Z,{children:(0,a.jsx)(u.Z,{size:"sm",variant:"outlined",color:"view"===e.role?"primary":"neutral",sx:t=>({background:"view"===e.role?"var(--joy-palette-primary-softBg, var(--joy-palette-primary-100, #DDF1FF))":"unset",border:"unset",borderRadius:"unset",padding:"24px 0 26px 0",lineHeight:"24px"}),children:(0,a.jsxs)(d.Z,{sx:{width:"76%",margin:"0 auto"},className:"flex flex-row",children:[(0,a.jsx)("div",{className:"mr-3 inline",children:"view"===e.role?(0,a.jsx)(w.Z,{}):(0,a.jsx)(j.Z,{})}),(0,a.jsx)("div",{className:"inline align-middle mt-0.5 max-w-full flex-1 overflow-auto",children:(0,a.jsx)(b.Z,{options:F,children:null===(r=e.context)||void 0===r?void 0:r.replaceAll("\\n","\n")})})]})})},t)}),k&&(0,a.jsx)(h.Z,{variant:"soft",color:"neutral",size:"sm",sx:{mx:"auto",my:2}})]}),!s&&(0,a.jsx)(d.Z,{className:"bg-[#fefefe] dark:bg-[#212121] before:bg-[#fefefe] before:dark:bg-[#212121]",sx:{position:"relative","&::before":{content:'" "',position:"absolute",top:"-18px",left:"0",right:"0",width:"100%",margin:"0 auto",height:"20px",filter:"blur(10px)",zIndex:2}},children:(0,a.jsxs)("form",{style:{maxWidth:"100%",width:"76%",position:"relative",display:"flex",marginTop:"auto",overflow:"visible",background:"none",justifyContent:"center",marginLeft:"auto",marginRight:"auto",flexDirection:"column",gap:"12px",paddingBottom:"58px",paddingTop:"20px"},onSubmit:e=>{e.stopPropagation(),M.handleSubmit(L)(e)},children:[Object.keys(i||{}).length>0&&(0,a.jsx)("div",{className:"flex items-center gap-3",children:(0,a.jsx)(f.Z,{value:_,onChange:(e,t)=>{E(t)},sx:{maxWidth:"100%"},children:Object.keys(i||{}).map(e=>(0,a.jsx)(v.Z,{value:e,children:e},e))})}),(0,a.jsx)(m.ZP,{className:"w-full h-12",variant:"outlined",endDecorator:(0,a.jsx)(p.ZP,{type:"submit",disabled:k,children:(0,a.jsx)(l.Z,{})}),...M.register("query")})]})})]})})},O=r(57931),R=()=>{let e=(0,N.useSearchParams)(),{refreshDialogList:t}=(0,O.Cg)(),r=e.get("id"),o=e.get("scene"),{data:l}=(0,n.Z)(async()=>await (0,s.T)("/v1/chat/dialogue/messages/history",{con_uid:r}),{ready:!!r,refreshDeps:[r]}),{data:c}=(0,n.Z)(async()=>await (0,s.K)("/v1/chat/mode/params/list?chat_mode=".concat(o)),{ready:!!o,refreshDeps:[r,o]}),{history:u,handleChatSubmit:d}=(0,i.Z)({queryAgentURL:"/v1/chat/completions",queryBody:{conv_uid:r,chat_mode:o||"chat_normal"},initHistory:null==l?void 0:l.data});return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(C,{clearIntialMessage:async()=>{await t()},messages:u||[],onSubmit:d,paramsList:null==c?void 0:c.data})})}},57931:function(e,t,r){"use strict";r.d(t,{ZP:function(){return c},Cg:function(){return o}});var a=r(9268),n=r(89081),s=r(78915),i=r(86006);let[o,l]=function(){let e=i.createContext(void 0);return[function(){let t=i.useContext(e);if(void 0===t)throw Error("useCtx must be inside a Provider with a value");return t},e.Provider]}();var c=e=>{let{children:t}=e,{run:r,data:i,refresh:o}=(0,n.Z)(async()=>await (0,s.T)("/v1/chat/dialogue/list"),{manual:!0});return(0,a.jsx)(l,{value:{dialogueList:i,queryDialogueList:r,refreshDialogList:o},children:t})}},66487:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(71990),n=r(86006),s=e=>{let t=(0,n.useReducer)((e,t)=>({...e,...t}),{...e});return t},i=r(57931),o=e=>{let{queryAgentURL:t,channel:r,queryBody:o,initHistory:l}=e,[c,u]=s({history:l||[]}),{refreshDialogList:d}=(0,i.Cg)();(0,n.useEffect)(()=>{l&&u({history:l})},[l]);let h=async(e,n)=>{if(!e)return;let s=[...c.history,{role:"human",context:e}],i=s.length;u({history:s});try{let l=new AbortController;await (0,a.L)("".concat("http://localhost:5000/api"+t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...n,...o,user_input:e,channel:r}),signal:l.signal,async onopen(e){if(s.length<=1){d();let e=new URLSearchParams(window.location.search);e.delete("initMessage"),window.history.replaceState(null,null,"?".concat(e.toString()))}(!e.ok||e.headers.get("content-type")!==a.a)&&e.status>=400&&e.status<500&&429!==e.status&&e.status},onclose(){console.log("onclose")},onerror(e){throw Error(e)},onmessage:e=>{var t;if(console.log(e,"e"),e.data=e.data.replaceAll("\\n","\n"),"[DONE]"===e.data)l.abort();else if(null===(t=e.data)||void 0===t?void 0:t.startsWith("[ERROR]"))l.abort(),u({history:[...s,{role:"view",context:e.data.replace("[ERROR]","")}]});else{let t=[...s];e.data&&((null==t?void 0:t[i])?t[i].context="".concat(e.data):t.push({role:"view",context:e.data}),u({history:t}))}}})}catch(e){console.log("---e",e),u({history:[...s,{role:"view",context:"请求出错"}]})}};return{handleChatSubmit:h,history:c.history}}},78915:function(e,t,r){"use strict";r.d(t,{T:function(){return c},K:function(){return u}});var a=r(21628),n=r(24214);let s=n.Z.create({baseURL:"http://localhost:5000"});s.defaults.timeout=1e4,s.interceptors.response.use(e=>e.data,e=>Promise.reject(e));var i=r(84835);let o={"content-type":"application/json"},l=e=>{if(!(0,i.isPlainObject)(e))return JSON.stringify(e);let t={...e};for(let e in t){let r=t[e];"string"==typeof r&&(t[e]=r.trim())}return JSON.stringify(t)},c=(e,t)=>{if(t){let r=Object.keys(t).filter(e=>void 0!==t[e]&&""!==t[e]).map(e=>"".concat(e,"=").concat(t[e])).join("&");r&&(e+="?".concat(r))}return s.get("/api"+e,{headers:o}).then(e=>e).catch(e=>{a.ZP.error(e),Promise.reject(e)})},u=(e,t)=>{let r=l(t);return s.post("/api"+e,{body:r,headers:o}).then(e=>e).catch(e=>{a.ZP.error(e),Promise.reject(e)})}},56008:function(e,t,r){e.exports=r(30794)}},function(e){e.O(0,[180,430,577,86,562,259,751,662,253,769,744],function(){return e(e.s=84380)}),_N_E=e.O()}]);