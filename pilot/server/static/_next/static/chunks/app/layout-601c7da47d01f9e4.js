(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{72431:function(){},91541:function(e,t,r){Promise.resolve().then(r.bind(r,50902))},57931:function(e,t,r){"use strict";r.d(t,{ZP:function(){return d},Cg:function(){return o}});var n=r(9268),i=r(89081),l=r(78915),s=r(86006);let[o,a]=function(){let e=s.createContext(void 0);return[function(){let t=s.useContext(e);if(void 0===t)throw Error("useCtx must be inside a Provider with a value");return t},e.Provider]}();var d=e=>{let{children:t}=e,{run:r,data:s,refresh:o}=(0,i.Z)(async()=>await (0,l.T)("/v1/chat/dialogue/list"),{manual:!0});return(0,n.jsx)(a,{value:{dialogueList:s,queryDialogueList:r,refreshDialogList:o},children:t})}},50902:function(e,t,r){"use strict";let n,i;r.r(t),r.d(t,{default:function(){return K}});var l=r(9268);r(97402),r(23517);var s=r(86006),o=r(56008),a=r(35846),d=r.n(a),c=r(20837),u=r(78635),f=r(90545),h=r(22046),x=r(53113),m=r(18818),p=r(4882),v=r(70092),g=r(64579),j=r(53047),b=r(62921),y=r(40020),Z=r(11515),w=r(84892),k=r(601),C=r(1301),B=r(98703),N=r(57931),P=r(66664),_=r(78915),D=()=>{var e;let t=(0,o.usePathname)(),r=(0,o.useSearchParams)(),n=r.get("id"),i=(0,o.useRouter)(),{dialogueList:a,queryDialogueList:D,refreshDialogList:E}=(0,N.Cg)(),{mode:S,setMode:z}=(0,u.tv)(),F=(0,s.useMemo)(()=>[{label:"Knowledge Space",route:"/datastores",icon:(0,l.jsx)(y.Z,{fontSize:"small"}),active:"/datastores"===t}],[t]);return(0,s.useEffect)(()=>{(async()=>{await D()})()},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("nav",{className:"flex h-12 items-center justify-between border-b px-4 dark:border-gray-800 dark:bg-gray-800/70 md:hidden",children:[(0,l.jsx)("div",{children:(0,l.jsx)(k.Z,{})}),(0,l.jsx)("span",{className:"truncate px-4",children:"New Chat"}),(0,l.jsx)("a",{href:"",className:"-mr-3 flex h-9 w-9 shrink-0 items-center justify-center",children:(0,l.jsx)(C.Z,{})})]}),(0,l.jsx)("nav",{className:"grid max-h-screen h-full max-md:hidden",children:(0,l.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"column",borderRight:"1px solid",borderColor:"divider",maxHeight:"100vh",position:"sticky",left:"0px",top:"0px",overflow:"hidden"},children:[(0,l.jsx)(f.Z,{sx:{p:2,gap:2,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:(0,l.jsx)("div",{className:"flex items-center  gap-3",children:(0,l.jsx)(h.ZP,{component:"h1",fontWeight:"xl",children:"DB-GPT"})})}),(0,l.jsx)(f.Z,{sx:{px:2},children:(0,l.jsx)(d(),{href:"/",children:(0,l.jsx)(x.Z,{color:"primary",className:"w-full bg-gradient-to-r from-[#31afff] to-[#1677ff] dark:bg-gradient-to-r dark:from-[#6a6a6a] dark:to-[#80868f]",style:{color:"#fff"},children:"+ New Chat"})})}),(0,l.jsx)(f.Z,{sx:{p:2,display:{xs:"none",sm:"initial"},maxHeight:"100%",overflow:"auto"},children:(0,l.jsx)(m.Z,{size:"sm",sx:{"--ListItem-radius":"8px"},children:(0,l.jsx)(p.Z,{nested:!0,children:(0,l.jsx)(m.Z,{size:"sm","aria-labelledby":"nav-list-browse",sx:{"& .JoyListItemButton-root":{p:"8px"},gap:"4px"},children:null==a?void 0:null===(e=a.data)||void 0===e?void 0:e.map(e=>{let s=("/chat"===t||"/chat/"===t)&&n===e.conv_uid;return(0,l.jsx)(p.Z,{children:(0,l.jsx)(v.Z,{selected:s,variant:s?"soft":"plain",sx:{"&:hover .del-btn":{visibility:"visible"}},children:(0,l.jsx)(g.Z,{children:(0,l.jsxs)(d(),{href:"/chat?id=".concat(e.conv_uid,"&scene=").concat(null==e?void 0:e.chat_mode),className:"flex items-center justify-between",children:[(0,l.jsxs)(h.ZP,{fontSize:14,noWrap:!0,children:[(0,l.jsx)(B.Z,{style:{marginRight:"0.5rem"}}),(null==e?void 0:e.user_name)||(null==e?void 0:e.user_input)||"undefined"]}),(0,l.jsx)(j.ZP,{color:"neutral",variant:"plain",size:"sm",onClick:n=>{n.preventDefault(),n.stopPropagation(),c.Z.confirm({title:"Delete Chat",content:"Are you sure delete this chat?",width:"276px",centered:!0,async onOk(){await (0,_.K)("/v1/chat/dialogue/delete?con_uid=".concat(e.conv_uid)),await E(),"/chat"===t&&r.get("id")===e.conv_uid&&i.push("/")}})},className:"del-btn invisible",children:(0,l.jsx)(P.Z,{})})]})})})},e.conv_uid)})})})})}),(0,l.jsxs)("div",{className:"flex flex-col justify-between flex-1",children:[(0,l.jsx)("div",{}),(0,l.jsx)(f.Z,{sx:{p:2,pt:3,pb:6,borderTop:"1px solid",borderColor:"divider",display:{xs:"none",sm:"initial"},position:"sticky",bottom:0,zIndex:100,background:"var(--joy-palette-background-body)"},children:(0,l.jsxs)(m.Z,{size:"sm",sx:{"--ListItem-radius":"8px"},children:[(0,l.jsx)(p.Z,{nested:!0,children:(0,l.jsx)(m.Z,{size:"sm","aria-labelledby":"nav-list-browse",sx:{"& .JoyListItemButton-root":{p:"8px"}},children:F.map(e=>(0,l.jsx)(d(),{href:e.route,children:(0,l.jsx)(p.Z,{children:(0,l.jsxs)(v.Z,{color:"neutral",sx:{marginBottom:1,height:"2.5rem"},selected:e.active,variant:e.active?"soft":"plain",children:[(0,l.jsx)(b.Z,{sx:{color:e.active?"inherit":"neutral.500"},children:e.icon}),(0,l.jsx)(g.Z,{children:e.label})]})})},e.route))})}),(0,l.jsx)(p.Z,{children:(0,l.jsxs)(v.Z,{sx:{height:"2.5rem"},onClick:()=>{"light"===S?z("dark"):z("light")},children:[(0,l.jsx)(b.Z,{children:"dark"===S?(0,l.jsx)(Z.Z,{fontSize:"small"}):(0,l.jsx)(w.Z,{fontSize:"small"})}),(0,l.jsx)(g.Z,{children:"Theme"})]})})]})})]})]})})]})},E=r(29720),S=r(41287),z=r(38230);let F=(0,S.Z)({colorSchemes:{light:{palette:{mode:"dark",primary:{...z.Z.grey,solidBg:"#e6f4ff",solidColor:"#1677ff",solidHoverBg:"#e6f4ff"},neutral:{plainColor:"#4d4d4d",plainHoverColor:"#131318",plainHoverBg:"#EBEBEF",plainActiveBg:"#D8D8DF",plainDisabledColor:"#B9B9C6"},background:{body:"#fff",surface:"#fff"},text:{primary:"#505050"}}},dark:{palette:{mode:"light",primary:{...z.Z.grey,softBg:"#353539",softHoverBg:"#35353978",softDisabledBg:"#353539",solidBg:"#51525beb",solidHoverBg:"#51525beb"},neutral:{plainColor:"#D8D8DF",plainHoverColor:"#F7F7F8",plainHoverBg:"#353539",plainActiveBg:"#434356",plainDisabledColor:"#434356",outlinedBorder:"#353539",outlinedHoverBorder:"#454651"},text:{primary:"#EBEBEF"},background:{body:"#212121",surface:"#51525beb"}}}},fontFamily:{body:"Josefin Sans, sans-serif",display:"Josefin Sans, sans-serif"},typography:{display1:{background:"linear-gradient(-30deg, var(--joy-palette-primary-900), var(--joy-palette-primary-400))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}});var H=r(53794),L=r.n(H),T=r(54486),O=r.n(T);let I=0;function J(){"loading"!==i&&(i="loading",n=setTimeout(function(){O().start()},250))}function R(){I>0||(i="stop",clearTimeout(n),O().done())}if(L().events.on("routeChangeStart",J),L().events.on("routeChangeComplete",R),L().events.on("routeChangeError",R),"function"==typeof(null==window?void 0:window.fetch)){let e=window.fetch;window.fetch=async function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];0===I&&J(),I++;try{let t=await e(...r);return t}catch(e){return Promise.reject(e)}finally{0==(I-=1)&&R()}}}function A(){return null}function W(e){let{children:t}=e,{mode:r}=(0,u.tv)(),n=s.useRef(null);return(0,s.useEffect)(()=>{if((null==n?void 0:n.current)&&r){var e,t,i,l,s,o;null==n||null===(e=n.current)||void 0===e||null===(t=e.classList)||void 0===t||t.add(r),"light"===r?null==n||null===(i=n.current)||void 0===i||null===(l=i.classList)||void 0===l||l.remove("dark"):null==n||null===(s=n.current)||void 0===s||null===(o=s.classList)||void 0===o||o.remove("light")}},[n,r]),(0,l.jsxs)("div",{ref:n,className:"h-full",children:[(0,l.jsx)(A,{}),(0,l.jsx)(N.ZP,{children:(0,l.jsx)("div",{className:"contents h-full",children:(0,l.jsxs)("div",{className:"grid h-full w-screen grid-cols-1 grid-rows-[auto,1fr] overflow-hidden text-smd dark:text-gray-300 md:grid-cols-[280px,1fr] md:grid-rows-[1fr]",children:[(0,l.jsx)(D,{}),(0,l.jsx)("div",{className:"relative min-h-0 min-w-0",children:t})]})})})]})}var K=function(e){let{children:t}=e;return(0,l.jsx)("html",{lang:"en",className:"h-full font-sans",children:(0,l.jsx)("body",{className:"h-full font-sans",children:(0,l.jsx)(E.Z,{theme:F,children:(0,l.jsx)(u.lL,{theme:F,defaultMode:"light",children:(0,l.jsx)(W,{children:t})})})})})}},78915:function(e,t,r){"use strict";r.d(t,{T:function(){return d},K:function(){return c}});var n=r(21628),i=r(24214);let l=i.Z.create({baseURL:"http://${window.location.hostname}:${window.location.port}"});l.defaults.timeout=1e4,l.interceptors.response.use(e=>e.data,e=>Promise.reject(e));var s=r(84835);let o={"content-type":"application/json"},a=e=>{if(!(0,s.isPlainObject)(e))return JSON.stringify(e);let t={...e};for(let e in t){let r=t[e];"string"==typeof r&&(t[e]=r.trim())}return JSON.stringify(t)},d=(e,t)=>{if(t){let r=Object.keys(t).filter(e=>void 0!==t[e]&&""!==t[e]).map(e=>"".concat(e,"=").concat(t[e])).join("&");r&&(e+="?".concat(r))}return l.get("/api"+e,{headers:o}).then(e=>e).catch(e=>{n.ZP.error(e),Promise.reject(e)})},c=(e,t)=>{let r=a(t);return l.post("/api"+e,{body:r,headers:o}).then(e=>e).catch(e=>{n.ZP.error(e),Promise.reject(e)})}},97402:function(){},23517:function(){}},function(e){e.O(0,[180,430,577,562,693,440,672,751,216,253,769,744],function(){return e(e.s=91541)}),_N_E=e.O()}]);