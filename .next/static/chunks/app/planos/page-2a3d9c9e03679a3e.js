(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6338],{4990:function(e,t,s){Promise.resolve().then(s.bind(s,5629))},8025:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(7461).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},9259:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(7461).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},527:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(7461).Z)("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]])},2461:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(7461).Z)("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]])},8792:function(e,t,s){"use strict";s.d(t,{default:function(){return r.a}});var a=s(5250),r=s.n(a)},7907:function(e,t,s){"use strict";var a=s(5313);s.o(a,"usePathname")&&s.d(t,{usePathname:function(){return a.usePathname}}),s.o(a,"useRouter")&&s.d(t,{useRouter:function(){return a.useRouter}})},7604:function(e,t,s){"use strict";s.d(t,{a:function(){return i}}),s(3827);var a=s(4090);let r=(0,a.createContext)({currentUser:null,logout:()=>{},isLoading:!0});function i(){return(0,a.useContext)(r)}},5629:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var a=s(3827),r=s(4090),i=s(7907),n=s(8371),o=s(7604);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,s(7461).Z)("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);var c=s(9259),d=s(8025),m=s(527),u=s(2461),x=s(8792);let p=[{id:"basic",name:"B\xe1sico",price:"R$ 49,90",period:"por m\xeas",description:"Ideal para barbearias pequenas com at\xe9 2 profissionais",features:["Agendamento online","Controle de clientes","Hist\xf3rico de servi\xe7os","Relat\xf3rios b\xe1sicos","Suporte por email"],color:"from-blue-500 to-indigo-600",recommended:!1},{id:"premium",name:"Premium",price:"R$ 89,90",period:"por m\xeas",description:"Perfeito para barbearias em crescimento com equipes maiores",features:["Todas as funcionalidades do plano B\xe1sico","At\xe9 10 profissionais","Controle financeiro avan\xe7ado","Programa de fidelidade","Marketing por SMS e WhatsApp","Suporte priorit\xe1rio 24/7"],color:"from-purple-500 to-purple-700",recommended:!0}];function h(){let{currentUser:e}=(0,o.a)(),t=(0,i.useRouter)(),[s,h]=(0,r.useState)(null),[f,g]=(0,r.useState)(!1),[y,j]=(0,r.useState)(!1);if((0,r.useEffect)(()=>{j(!0)},[]),(0,r.useEffect)(()=>{y&&!e&&t.push("/login")},[e,t,y]),!y)return(0,a.jsx)("div",{className:"min-h-screen flex items-center justify-center",children:(0,a.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"})});let N=e=>{h(e)},v=async()=>{if(s){g(!0);try{await new Promise(e=>setTimeout(e,1500)),t.push("/dashboard")}catch(e){console.error("Erro ao processar pagamento:",e)}finally{g(!1)}}};return(0,a.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-white",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[(0,a.jsxs)(n.E.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-center mb-16",children:[(0,a.jsx)("h1",{className:"text-4xl font-light text-gray-900 tracking-tight mb-4",children:"Escolha o plano ideal para o seu neg\xf3cio"}),(0,a.jsx)("p",{className:"text-xl text-gray-500 max-w-3xl mx-auto",children:"Transforme sua barbearia com nossa plataforma completa de gest\xe3o. Cancele a qualquer momento."})]}),(0,a.jsx)("div",{className:"grid md:grid-cols-2 gap-8 mb-16",children:p.map((e,t)=>(0,a.jsxs)(n.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},className:"relative bg-white rounded-3xl shadow-xl overflow-hidden ".concat(e.recommended?"ring-4 ring-purple-500 ring-opacity-50":""),children:[e.recommended&&(0,a.jsxs)("div",{className:"absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl font-medium text-sm flex items-center",children:[(0,a.jsx)(l,{size:14,className:"mr-1"}),"Recomendado"]}),(0,a.jsxs)("div",{className:"p-8",children:[(0,a.jsx)("div",{className:"flex justify-between items-start",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-2xl font-semibold text-gray-900",children:e.name}),(0,a.jsx)("p",{className:"text-gray-500 mt-2",children:e.description})]})}),(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsxs)("div",{className:"flex items-baseline",children:[(0,a.jsx)("span",{className:"text-4xl font-bold text-gray-900",children:e.price}),(0,a.jsx)("span",{className:"ml-2 text-gray-500",children:e.period})]})}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("h4",{className:"text-lg font-medium text-gray-900 mb-4",children:"O que est\xe1 inclu\xeddo:"}),(0,a.jsx)("ul",{className:"space-y-3",children:e.features.map((t,s)=>(0,a.jsxs)("li",{className:"flex items-start",children:[(0,a.jsx)("div",{className:"flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r ".concat(e.color," flex items-center justify-center mt-0.5"),children:(0,a.jsx)(c.Z,{size:14,className:"text-white"})}),(0,a.jsx)("span",{className:"ml-3 text-gray-700",children:t})]},s))})]}),(0,a.jsx)("div",{className:"mt-8",children:(0,a.jsx)("button",{onClick:()=>N(e.id),className:"w-full py-3 px-4 rounded-xl text-white font-medium transition-all duration-200 flex items-center justify-center ".concat(s===e.id?"bg-green-600 hover:bg-green-700":"bg-gradient-to-r ".concat(e.color," hover:shadow-lg")),children:s===e.id?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{size:18,className:"mr-2"}),"Selecionado"]}):(0,a.jsxs)(a.Fragment,{children:["Selecionar plano",(0,a.jsx)(d.Z,{size:18,className:"ml-2"})]})})})]})]},e.id))}),(0,a.jsxs)(n.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},className:"max-w-md mx-auto",children:[(0,a.jsxs)("button",{onClick:v,disabled:!s||f,className:"w-full py-4 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center",children:[f?(0,a.jsxs)("svg",{className:"animate-spin h-5 w-5 text-white mr-2",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):(0,a.jsx)(m.Z,{size:20,className:"mr-2"}),f?"Processando...":"Assinar agora"]}),(0,a.jsx)("div",{className:"mt-4 flex justify-center",children:(0,a.jsxs)(x.default,{href:"/faturas",className:"text-purple-600 hover:text-purple-700 flex items-center text-sm font-medium",children:[(0,a.jsx)(u.Z,{size:16,className:"mr-1"}),"Ver minhas faturas"]})})]}),(0,a.jsxs)(n.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.4},className:"mt-16 text-center text-gray-500 text-sm",children:[(0,a.jsxs)("p",{children:["Ao assinar, voc\xea concorda com nossos"," ",(0,a.jsx)("a",{href:"#",className:"text-purple-600 hover:text-purple-700",children:"Termos de Servi\xe7o"})," ","e"," ",(0,a.jsx)("a",{href:"#",className:"text-purple-600 hover:text-purple-700",children:"Pol\xedtica de Privacidade"})]}),(0,a.jsxs)("p",{className:"mt-2",children:["Precisa de ajuda? Entre em contato com nosso"," ",(0,a.jsx)("a",{href:"#",className:"text-purple-600 hover:text-purple-700",children:"suporte"})]})]})]})})}}},function(e){e.O(0,[7462,5250,2971,8069,1744],function(){return e(e.s=4990)}),_N_E=e.O()}]);