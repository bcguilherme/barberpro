(()=>{var e={};e.id=32,e.ids=[32],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2331:(e,a,r)=>{"use strict";r.r(a),r.d(a,{GlobalError:()=>i.ZP,__next_app__:()=>u,originalPathname:()=>d,pages:()=>c,routeModule:()=>m,tree:()=>o});var s=r(50482),t=r(69108),i=r(83543),n=r(68300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(a,l);let o=["",{children:["dashboard",{children:["relatorios",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,90314)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/dashboard/relatorios/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,94699)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/dashboard/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,43625)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/layout.tsx"],error:[()=>Promise.resolve().then(r.bind(r,24117)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/error.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,92793)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,48206)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/not-found.tsx"]}],c=["/Users/guilhermecorreia/barberpro-backup-20250308/src/app/dashboard/relatorios/page.tsx"],d="/dashboard/relatorios/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/dashboard/relatorios/page",pathname:"/dashboard/relatorios",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},98275:(e,a,r)=>{Promise.resolve().then(r.bind(r,74066))},74066:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>h});var s=r(95344),t=r(3729),i=r(48411),n=r(55794),l=r(89895),o=r(46064),c=r(17418),d=r(96885),u=r(87292);let m=[{name:"Faturamento Total",value:"R$ 15.850,00",change:"+12%",changeType:"increase",icon:i.Z},{name:"Total de Agendamentos",value:"245",change:"+18%",changeType:"increase",icon:n.Z},{name:"Novos Clientes",value:"38",change:"+5%",changeType:"increase",icon:l.Z},{name:"Taxa de Ocupa\xe7\xe3o",value:"82%",change:"-3%",changeType:"decrease",icon:o.Z}],p=[{name:"Corte + Barba",value:98,percentage:40},{name:"Corte",value:75,percentage:30},{name:"Barba",value:45,percentage:18},{name:"Pigmenta\xe7\xe3o",value:30,percentage:12}],x=[{date:"15/02",value:850},{date:"16/02",value:950},{date:"17/02",value:1200},{date:"18/02",value:800},{date:"19/02",value:1100},{date:"20/02",value:950},{date:"21/02",value:1300}];function h(){let[e,a]=(0,t.useState)("week");return(0,s.jsxs)("div",{className:"space-y-8",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[s.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Relat\xf3rios"}),(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[s.jsx(c.Z,{className:"h-5 w-5 text-gray-400"}),(0,s.jsxs)("select",{value:e,onChange:e=>a(e.target.value),className:"border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",children:[s.jsx("option",{value:"week",children:"\xdaltima Semana"}),s.jsx("option",{value:"month",children:"\xdaltimo M\xeas"}),s.jsx("option",{value:"year",children:"\xdaltimo Ano"})]})]}),(0,s.jsxs)("button",{className:"inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700",children:[s.jsx(d.Z,{className:"w-4 h-4 mr-2"}),"Exportar"]})]})]}),s.jsx("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",children:m.map(e=>(0,s.jsxs)(u.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},className:"bg-white rounded-2xl p-6 shadow-sm",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[s.jsx(e.icon,{className:"h-8 w-8 text-purple-600"}),s.jsx("span",{className:`text-sm font-medium ${"increase"===e.changeType?"text-green-600":"text-red-600"}`,children:e.change})]}),s.jsx("p",{className:"mt-4 text-2xl font-semibold text-gray-900",children:e.value}),s.jsx("p",{className:"mt-1 text-sm text-gray-500",children:e.name})]},e.name))}),(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[(0,s.jsxs)("div",{className:"bg-white rounded-2xl p-6 shadow-sm",children:[s.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-6",children:"Faturamento Di\xe1rio"}),s.jsx("div",{className:"h-64",children:s.jsx("div",{className:"flex h-full items-end space-x-2",children:x.map((e,a)=>(0,s.jsxs)("div",{className:"flex-1 flex flex-col items-center",children:[s.jsx(u.E.div,{initial:{height:0},animate:{height:`${e.value/1300*100}%`},transition:{duration:.5,delay:.1*a},className:"w-full bg-purple-600 rounded-t-lg"}),s.jsx("div",{className:"mt-2 text-xs text-gray-500",children:e.date})]},e.date))})})]}),(0,s.jsxs)("div",{className:"bg-white rounded-2xl p-6 shadow-sm",children:[s.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-6",children:"Servi\xe7os Mais Populares"}),s.jsx("div",{className:"space-y-4",children:p.map((e,a)=>(0,s.jsxs)(u.E.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:.1*a},children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("span",{className:"text-sm font-medium text-gray-500",children:e.name}),s.jsx("span",{className:"text-sm font-medium text-gray-900",children:e.value})]}),s.jsx("div",{className:"w-full h-2 bg-gray-100 rounded-full overflow-hidden",children:s.jsx(u.E.div,{initial:{width:0},animate:{width:`${e.percentage}%`},transition:{duration:.5,delay:.1*a},className:"h-full bg-purple-600 rounded-full"})})]},e.name))})]})]})]})}},90314:(e,a,r)=>{"use strict";r.r(a),r.d(a,{$$typeof:()=>i,__esModule:()=>t,default:()=>n});let s=(0,r(86843).createProxy)(String.raw`/Users/guilhermecorreia/barberpro-backup-20250308/src/app/dashboard/relatorios/page.tsx`),{__esModule:t,$$typeof:i}=s,n=s.default}};var a=require("../../../webpack-runtime.js");a.C(e);var r=e=>a(a.s=e),s=a.X(0,[638,859,232,611,422],()=>r(2331));module.exports=s})();