(()=>{var e={};e.id=118,e.ids=[118],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},91078:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.ZP,__next_app__:()=>p,originalPathname:()=>c,pages:()=>l,routeModule:()=>d,tree:()=>u});var s=t(50482),a=t(69108),i=t(83543),n=t(68300),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);t.d(r,o);let u=["",{children:["assinatura",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,20290)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/assinatura/page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,6135)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/assinatura/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,43625)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/layout.tsx"],error:[()=>Promise.resolve().then(t.bind(t,24117)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/error.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,92793)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,48206)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/not-found.tsx"]}],l=["/Users/guilhermecorreia/barberpro-backup-20250308/src/app/assinatura/page.tsx"],c="/assinatura/page",p={require:t,loadChunk:()=>Promise.resolve()},d=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/assinatura/page",pathname:"/assinatura",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},53898:(e,r,t)=>{Promise.resolve().then(t.bind(t,18490))},15938:(e,r,t)=>{Promise.resolve().then(t.bind(t,37574))},69224:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n});var s=t(3729),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),n=(e,r)=>{let t=(0,s.forwardRef)(({color:t="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:u,className:l="",children:c,...p},d)=>(0,s.createElement)("svg",{ref:d,...a,width:n,height:n,stroke:t,strokeWidth:u?24*Number(o)/Number(n):o,className:["lucide",`lucide-${i(e)}`,l].join(" "),...p},[...r.map(([e,r])=>(0,s.createElement)(e,r)),...Array.isArray(c)?c:[c]]));return t.displayName=`${e}`,t}},35299:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,t(69224).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},56506:(e,r,t)=>{"use strict";t.d(r,{default:()=>a.a});var s=t(61476),a=t.n(s)},8428:(e,r,t)=>{"use strict";var s=t(14767);t.o(s,"usePathname")&&t.d(r,{usePathname:function(){return s.usePathname}}),t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}})},18490:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var s=t(95344),a=t(86671),i=t(37602);function n({children:e}){return s.jsx(i.i,{children:s.jsx(a.H,{children:e})})}},37574:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var s=t(95344),a=t(3729),i=t(8428),n=t(64314),o=t(37602),u=t(35299),l=t(56506);function c(){let{currentUser:e,logout:r}=(0,n.a)(),t=(0,i.useRouter)(),{t:c}=(0,o.Z)(),[p,d]=(0,a.useState)(null),[m,b]=(0,a.useState)(!1),[h,x]=(0,a.useState)("planos"),[g,f]=(0,a.useState)("monthly"),[_,y]=(0,a.useState)(!1),[v,P]=(0,a.useState)({businessName:"",address:"",phone:"",employees:"1"}),[w,j]=(0,a.useState)([{id:"INV-001",date:"15/04/2023",amount:"R$ 89,90",status:"paid",plan:"Premium",period:"15/04/2023 - 14/05/2023",isFreeTrialPeriod:!1},{id:"INV-002",date:"15/05/2023",amount:"R$ 89,90",status:"paid",plan:"Premium",period:"15/05/2023 - 14/06/2023",isFreeTrialPeriod:!1},{id:"INV-003",date:"15/06/2023",amount:"R$ 89,90",status:"pending",plan:"Premium",period:"15/06/2023 - 14/07/2023",isFreeTrialPeriod:!1}]),[k,N]=(0,a.useState)(null),[S,$]=(0,a.useState)(0),[q,R]=(0,a.useState)(!1),E=e=>{let r=parseFloat(e.replace("€ ","").replace(",","."));return`€ ${(12*r*.8).toFixed(2).replace(".",",")}`};return(c("subscription.basic_plan"),"monthly"===g||E("€ 29,90"),c("monthly"===g?"subscription.per_month":"subscription.per_year"),c("subscription.basic_description"),c("subscription.online_scheduling"),c("subscription.client_management"),c("subscription.basic_financial"),c("subscription.simple_reports"),c("subscription.email_support"),c("subscription.professional_plan"),"monthly"===g||E("€ 49,90"),c("monthly"===g?"subscription.per_month":"subscription.per_year"),c("subscription.professional_description"),c("subscription.all_basic_features"),c("subscription.loyalty_system"),c("subscription.inventory_control"),c("subscription.advanced_reports"),c("subscription.whatsapp_integration"),c("subscription.google_review"),c("subscription.priority_support"),c("subscription.mobile_app"),(0,a.useEffect)(()=>{y(!0)},[]),(0,a.useEffect)(()=>{_&&!e&&t.push("/login")},[e,t,_]),(0,a.useEffect)(()=>{(async()=>{_&&e&&setTimeout(()=>{P({businessName:"Barbearia Exemplo",address:"Rua das Tesouras, 123",phone:"(11) 98765-4321",employees:"3"});let r=localStorage.getItem(`${e.uid}_plan`);r&&(N(r),d(r));let t=localStorage.getItem(`${e.uid}_trial_end`);if(t){let e=new Date(t),r=new Date;e>r?$(Math.ceil((e.getTime()-r.getTime())/864e5)):$(0)}localStorage.getItem(`${e.uid}_payment_method`)&&R(!0)},1e3)})()},[_,e]),_)?s.jsx("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-white",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:(0,s.jsxs)("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between mb-8",children:[(0,s.jsxs)("div",{children:[s.jsx("h1",{className:"text-3xl font-light text-gray-900 tracking-tight",children:"BarberPro"}),s.jsx("p",{className:"text-gray-500 mt-1",children:c("subscription.subtitle")})]}),s.jsx("div",{className:"mt-4 md:mt-0",children:(0,s.jsxs)(l.default,{href:"/sistema",className:"inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-500",children:[s.jsx(u.Z,{size:16,className:"mr-1"}),"Dashboard"]})})]})})}):s.jsx("div",{className:"min-h-screen flex items-center justify-center",children:s.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"})})}},64314:(e,r,t)=>{"use strict";t.d(r,{a:()=>i}),t(95344);var s=t(3729);let a=(0,s.createContext)({currentUser:null,logout:()=>{},isLoading:!0});function i(){return(0,s.useContext)(a)}},6135:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>a,default:()=>n});let s=(0,t(86843).createProxy)(String.raw`/Users/guilhermecorreia/barberpro-backup-20250308/src/app/assinatura/layout.tsx`),{__esModule:a,$$typeof:i}=s,n=s.default},20290:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>a,default:()=>n});let s=(0,t(86843).createProxy)(String.raw`/Users/guilhermecorreia/barberpro-backup-20250308/src/app/assinatura/page.tsx`),{__esModule:a,$$typeof:i}=s,n=s.default}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,859,899],()=>t(91078));module.exports=s})();