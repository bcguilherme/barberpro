(()=>{var e={};e.id=243,e.ids=[243],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},96617:(e,a,r)=>{"use strict";r.r(a),r.d(a,{GlobalError:()=>o.ZP,__next_app__:()=>m,originalPathname:()=>c,pages:()=>d,routeModule:()=>x,tree:()=>l});var s=r(50482),t=r(69108),o=r(83543),i=r(68300),n={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>i[e]);r.d(a,n);let l=["",{children:["contato",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,658)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/contato/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,60433)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/contato/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,43625)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/layout.tsx"],error:[()=>Promise.resolve().then(r.bind(r,24117)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/error.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,92793)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,48206)),"/Users/guilhermecorreia/barberpro-backup-20250308/src/app/not-found.tsx"]}],d=["/Users/guilhermecorreia/barberpro-backup-20250308/src/app/contato/page.tsx"],c="/contato/page",m={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/contato/page",pathname:"/contato",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},42022:(e,a,r)=>{Promise.resolve().then(r.bind(r,24368))},11887:(e,a,r)=>{Promise.resolve().then(r.bind(r,7889))},24368:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>t});var s=r(95344);function t({children:e}){return s.jsx(s.Fragment,{children:e})}},7889:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>x});var s=r(95344),t=r(3729),o=r(87292);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r(69224).Z)("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);var n=r(71206),l=r(80508),d=r(23632),c=r(22041),m=r(13651);function x(){let[e,a]=(0,t.useState)({name:"",email:"",phone:"",message:"",subject:"Informa\xe7\xf5es Gerais"}),[r,x]=(0,t.useState)(!1),[p,u]=(0,t.useState)(!1),[h,b]=(0,t.useState)(!1),g=e=>{let{name:r,value:s}=e.target;a(e=>({...e,[r]:s}))},j=async e=>{e.preventDefault(),x(!0),u(!1),b(!1);try{await new Promise(e=>setTimeout(e,1500)),u(!0),a({name:"",email:"",phone:"",message:"",subject:"Informa\xe7\xf5es Gerais"})}catch(e){b(!0)}finally{x(!1)}};return(0,s.jsxs)("div",{className:"min-h-screen",children:[s.jsx(c.default,{}),s.jsx("section",{className:"bg-gradient-to-b from-purple-50 to-white py-20 pt-32",children:s.jsx("div",{className:"container mx-auto px-4",children:(0,s.jsxs)("div",{className:"max-w-4xl mx-auto text-center",children:[s.jsx(o.E.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent",children:"Entre em Contato"}),s.jsx(o.E.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},className:"text-xl text-gray-600",children:"Estamos aqui para ajudar voc\xea a transformar sua barbearia"})]})})}),s.jsx("section",{className:"py-16 bg-white",children:s.jsx("div",{className:"container mx-auto px-4",children:s.jsx("div",{className:"max-w-6xl mx-auto",children:(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[(0,s.jsxs)(o.E.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},className:"bg-white rounded-xl shadow-lg p-8 border border-gray-100",children:[s.jsx("h2",{className:"text-2xl font-bold mb-6 text-gray-800",children:"Envie uma mensagem"}),p&&s.jsx("div",{className:"mb-6 p-4 bg-green-50 border border-green-200 rounded-lg",children:s.jsx("p",{className:"text-green-700 font-medium",children:"Mensagem enviada com sucesso! Entraremos em contato em breve."})}),h&&s.jsx("div",{className:"mb-6 p-4 bg-red-50 border border-red-200 rounded-lg",children:s.jsx("p",{className:"text-red-700 font-medium",children:"Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente."})}),(0,s.jsxs)("form",{onSubmit:j,children:[(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Nome completo"}),s.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:g,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all",placeholder:"Seu nome completo"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"E-mail"}),s.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:g,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all",placeholder:"seu@email.com"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-1",children:"Telefone"}),s.jsx("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:g,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all",placeholder:"(00) 00000-0000"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 mb-1",children:"Assunto"}),(0,s.jsxs)("select",{id:"subject",name:"subject",value:e.subject,onChange:g,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all",children:[s.jsx("option",{value:"Informa\xe7\xf5es Gerais",children:"Informa\xe7\xf5es Gerais"}),s.jsx("option",{value:"Suporte T\xe9cnico",children:"Suporte T\xe9cnico"}),s.jsx("option",{value:"Vendas",children:"Vendas"}),s.jsx("option",{value:"Parcerias",children:"Parcerias"}),s.jsx("option",{value:"Outros",children:"Outros"})]})]}),(0,s.jsxs)("div",{className:"mb-6",children:[s.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-1",children:"Mensagem"}),s.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:g,required:!0,rows:5,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none",placeholder:"Como podemos ajudar?"})]}),s.jsx("button",{type:"submit",disabled:r,className:`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center transition-all ${r?"bg-purple-400 cursor-not-allowed":"bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md hover:shadow-lg"}`,children:r?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[s.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),s.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Enviando..."]}):(0,s.jsxs)(s.Fragment,{children:[s.jsx(i,{className:"mr-2 h-5 w-5"}),"Enviar mensagem"]})})]})]}),(0,s.jsxs)(o.E.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5},children:[(0,s.jsxs)("div",{className:"bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white mb-8",children:[s.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Informa\xe7\xf5es de contato"}),(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsxs)("div",{className:"flex items-start",children:[s.jsx(n.Z,{className:"h-6 w-6 mr-4 mt-1"}),(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"font-medium text-lg",children:"E-mail"}),s.jsx("p",{className:"mt-1",children:"contato@barberpro.pt"}),s.jsx("p",{children:"suporte@barberpro.pt"}),s.jsx("p",{className:"text-sm text-indigo-200 mt-1",children:"(Gmail)"})]})]}),(0,s.jsxs)("div",{className:"flex items-start",children:[s.jsx(l.Z,{className:"h-6 w-6 mr-4 mt-1"}),(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"font-medium text-lg",children:"Endere\xe7o"}),s.jsx("p",{className:"mt-1",children:"Av. da Liberdade, 110 - Baixa"}),s.jsx("p",{children:"Lisboa, Portugal, 1250-096"})]})]}),(0,s.jsxs)("div",{className:"flex items-start",children:[s.jsx(d.Z,{className:"h-6 w-6 mr-4 mt-1"}),(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"font-medium text-lg",children:"Redes Sociais"}),s.jsx("p",{className:"mt-1",children:"Instagram: @barberpro.pt"}),s.jsx("p",{children:"Site: barberpro.pt"})]})]})]})]}),(0,s.jsxs)("div",{className:"bg-white rounded-xl shadow-lg p-8 border border-gray-100",children:[s.jsx("h2",{className:"text-2xl font-bold mb-6 text-gray-800",children:"Hor\xe1rio de atendimento"}),(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"flex justify-between pb-2 border-b border-gray-100",children:[s.jsx("span",{className:"font-medium text-gray-700",children:"Segunda a Sexta"}),s.jsx("span",{className:"text-gray-600",children:"9h \xe0s 18h"})]}),(0,s.jsxs)("div",{className:"flex justify-between pb-2 border-b border-gray-100",children:[s.jsx("span",{className:"font-medium text-gray-700",children:"S\xe1bado"}),s.jsx("span",{className:"text-gray-600",children:"9h \xe0s 13h"})]}),(0,s.jsxs)("div",{className:"flex justify-between",children:[s.jsx("span",{className:"font-medium text-gray-700",children:"Domingo e Feriados"}),s.jsx("span",{className:"text-gray-600",children:"Fechado"})]})]})]})]})]})})})}),s.jsx("section",{className:"py-16 bg-gray-50",children:s.jsx("div",{className:"container mx-auto px-4",children:(0,s.jsxs)("div",{className:"max-w-4xl mx-auto",children:[s.jsx("h2",{className:"text-3xl font-bold mb-12 text-center text-gray-800",children:"Perguntas Frequentes"}),(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsxs)(o.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:"bg-white rounded-lg shadow-md p-6 border border-gray-100",children:[s.jsx("h3",{className:"text-xl font-semibold mb-3 text-gray-800",children:"Quanto tempo dura o per\xedodo de teste gratuito?"}),s.jsx("p",{className:"text-gray-600",children:"O per\xedodo de teste gratuito do BarberPro tem dura\xe7\xe3o de 14 dias, com acesso a todas as funcionalidades do plano Premium. N\xe3o \xe9 necess\xe1rio cart\xe3o de cr\xe9dito para come\xe7ar."})]}),(0,s.jsxs)(o.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1},className:"bg-white rounded-lg shadow-md p-6 border border-gray-100",children:[s.jsx("h3",{className:"text-xl font-semibold mb-3 text-gray-800",children:"Preciso instalar algum software?"}),s.jsx("p",{className:"text-gray-600",children:"N\xe3o, o BarberPro \xe9 uma solu\xe7\xe3o 100% baseada na nuvem. Voc\xea pode acessar de qualquer dispositivo com conex\xe3o \xe0 internet, seja computador, tablet ou smartphone, sem necessidade de instala\xe7\xe3o."})]}),(0,s.jsxs)(o.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},className:"bg-white rounded-lg shadow-md p-6 border border-gray-100",children:[s.jsx("h3",{className:"text-xl font-semibold mb-3 text-gray-800",children:"Como funciona o suporte t\xe9cnico?"}),s.jsx("p",{className:"text-gray-600",children:"Oferecemos suporte t\xe9cnico por e-mail e chat em hor\xe1rio comercial. Clientes do plano Premium t\xeam acesso a suporte priorit\xe1rio e atendimento estendido."})]}),(0,s.jsxs)(o.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.3},className:"bg-white rounded-lg shadow-md p-6 border border-gray-100",children:[s.jsx("h3",{className:"text-xl font-semibold mb-3 text-gray-800",children:"Posso cancelar minha assinatura a qualquer momento?"}),s.jsx("p",{className:"text-gray-600",children:"Sim, voc\xea pode cancelar sua assinatura a qualquer momento sem taxas adicionais. Ao cancelar, voc\xea mant\xe9m acesso ao sistema at\xe9 o final do per\xedodo j\xe1 pago."})]}),(0,s.jsxs)(o.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.4},className:"bg-white rounded-lg shadow-md p-6 border border-gray-100",children:[s.jsx("h3",{className:"text-xl font-semibold mb-3 text-gray-800",children:"O BarberPro oferece treinamento?"}),s.jsx("p",{className:"text-gray-600",children:"Sim, oferecemos treinamento completo atrav\xe9s de v\xeddeos tutoriais, documenta\xe7\xe3o detalhada e webinars semanais. Clientes do plano Premium tamb\xe9m t\xeam direito a sess\xf5es de treinamento personalizadas."})]})]})]})})}),s.jsx(m.Footer,{})]})}},60433:(e,a,r)=>{"use strict";r.r(a),r.d(a,{$$typeof:()=>o,__esModule:()=>t,default:()=>i});let s=(0,r(86843).createProxy)(String.raw`/Users/guilhermecorreia/barberpro-backup-20250308/src/app/contato/layout.tsx`),{__esModule:t,$$typeof:o}=s,i=s.default},658:(e,a,r)=>{"use strict";r.r(a),r.d(a,{$$typeof:()=>o,__esModule:()=>t,default:()=>i});let s=(0,r(86843).createProxy)(String.raw`/Users/guilhermecorreia/barberpro-backup-20250308/src/app/contato/page.tsx`),{__esModule:t,$$typeof:o}=s,i=s.default}};var a=require("../../webpack-runtime.js");a.C(e);var r=e=>a(a.s=e),s=a.X(0,[638,859,232,899,992],()=>r(96617));module.exports=s})();