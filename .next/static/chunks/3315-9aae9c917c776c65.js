"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3315],{1930:function(e,a,t){t.d(a,{Z:function(){return o}});/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,t(7461).Z)("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]])},7841:function(e,a,t){t.d(a,{Z:function(){return o}});/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,t(7461).Z)("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},1652:function(e,a,t){t.d(a,{Z:function(){return o}});/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,t(7461).Z)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},684:function(e,a,t){t.d(a,{Z:function(){return o}});/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,t(7461).Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},8792:function(e,a,t){t.d(a,{default:function(){return r.a}});var o=t(5250),r=t.n(o)},7907:function(e,a,t){var o=t(5313);t.o(o,"usePathname")&&t.d(a,{usePathname:function(){return o.usePathname}}),t.o(o,"useRouter")&&t.d(a,{useRouter:function(){return o.useRouter}})},9298:function(e,a,t){t.d(a,{Z:function(){return s},i:function(){return m}});var o=t(3827),r=t(4090),n=t(2635);t(2603);let i=(0,r.createContext)({language:"pt",t:e=>e,changeLanguage:()=>{},isLoggedIn:!1,isLoading:!0}),s=()=>(0,r.useContext)(i),l=e=>"pt"===e||"en"===e,c=()=>{let e=navigator.language.split("-")[0];return l(e)?e:"pt"},u=()=>{let e=localStorage.getItem("language");return e&&l(e)?e:"pt"};function m(e){let{children:a}=e,{t:t,i18n:s}=(0,n.$G)(),[l,m]=(0,r.useState)(!1),[d,p]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{m(!!localStorage.getItem("auth_token")),(()=>{let e=u(),a=c();s.changeLanguage(e||a||"pt")})(),p(!1)},[s]),(0,o.jsx)(i.Provider,{value:{language:s.language,t:e=>t(e),changeLanguage:e=>{s.changeLanguage(e),localStorage.setItem("language",e)},isLoggedIn:l,isLoading:d},children:a})}},5517:function(e,a,t){t.d(a,{Q:function(){return r}});var o=t(9298);function r(){let e=(0,o.Z)();return{t:e.t,language:e.language,changeLanguage:e.changeLanguage,isRTL:!1,isLoggedIn:e.isLoggedIn}}},2603:function(e,a,t){var o=t(1505),r=t(2635),n=JSON.parse('{"header":{"login":"Entrar","signup":"Cadastrar","features":"Recursos","pricing":"Pre\xe7os","contact":"Contato","dashboard":"Painel","logout":"Sair","how_it_works":"Como Funciona"},"hero":{"title":"Sistema completo para gest\xe3o de barbearias","subtitle":"Aumente sua produtividade e faturamento com o BarberPro. Interface moderna e intuitiva para voc\xea gerenciar seu neg\xf3cio com facilidade.","cta":{"start":"Come\xe7ar agora","demo":"Ver demonstra\xe7\xe3o"}},"pricing":{"title":"Planos e pre\xe7os","subtitle":"Escolha o plano ideal para o seu neg\xf3cio","basic":{"title":"Plano B\xe1sico","price":"€29,90","period":"/m\xeas","description":"Ideal para profissionais aut\xf4nomos e barbearias pequenas.","annual_discount":"20% de desconto no plano anual","annual_price":"€287,04","annual_period":"/ano","feature1":"Agendamento online","feature2":"Cadastro de at\xe9 100 clientes","feature3":"Controle financeiro b\xe1sico","feature4":"Integra\xe7\xe3o com Google Agenda","cta":"Come\xe7ar agora"},"premium":{"title":"Plano Premium","badge":"MAIS POPULAR","price":"€49,90","period":"/m\xeas","description":"Ideal para barbearias m\xe9dias e grandes com m\xfaltiplos profissionais.","annual_discount":"20% de desconto no plano anual","annual_price":"€479,04","annual_period":"/ano","feature1":"Todas as funcionalidades do plano b\xe1sico","feature2":"Clientes ilimitados","feature3":"Controle de estoque avan\xe7ado","feature4":"Relat\xf3rios avan\xe7ados","feature5":"Programa de fidelidade personalizado","feature6":"Suporte priorit\xe1rio","cta":"Come\xe7ar agora"}},"cta":{"title":"Pronto para transformar sua barbearia?","subtitle":"Experimente o BarberPro gratuitamente por 14 dias e descubra como podemos ajudar seu neg\xf3cio a crescer.","button":"Come\xe7ar teste gratuito"},"footer":{"description":"Sistema completo para gest\xe3o de barbearias e sal\xf5es de beleza.","copyright":"\xa9 2024 BarberPro. Todos os direitos reservados.","links":"Links","legal":"Legal","terms":"Termos de Uso","privacy":"Pol\xedtica de Privacidade","cookies":"Cookies","contact":"Contato"},"reviews":{"title":"O que nossos clientes dizem","subtitle":"Mais de 1000 barbearias j\xe1 transformaram seus neg\xf3cios com o BarberPro"},"testimonials":{"title":"Depoimentos de clientes","subtitle":"Veja o que nossos clientes est\xe3o dizendo sobre o BarberPro","testimonial1":{"text":"O BarberPro transformou completamente a gest\xe3o da minha barbearia. Agora consigo controlar agendamentos, finan\xe7as e estoque em um s\xf3 lugar. Recomendo a todos!","name":"Carlos Silva","role":"Propriet\xe1rio da Barbearia Vintage","initials":"CS"},"testimonial2":{"text":"Desde que implementamos o BarberPro, nossos agendamentos aumentaram em 30% e a satisfa\xe7\xe3o dos clientes melhorou significativamente. A interface \xe9 intuitiva e f\xe1cil de usar.","name":"Mariana Santos","role":"Gerente do Sal\xe3o Elite","initials":"MS"},"testimonial3":{"text":"O suporte ao cliente \xe9 excepcional! Sempre que tive d\xfavidas, a equipe do BarberPro me ajudou prontamente. O sistema \xe9 completo e atende todas as necessidades da minha barbearia.","name":"Rafael Oliveira","role":"Barbeiro e Empreendedor","initials":"RO"}},"features":{"title":"Recursos do BarberPro","subtitle":"Todas as ferramentas que voc\xea precisa para gerenciar sua barbearia em um s\xf3 lugar","scheduling":{"title":"Agendamento inteligente","description":"Sistema de agendamento intuitivo integrado com Google Agenda para seus clientes marcarem hor\xe1rios facilmente."},"financial":{"title":"Gest\xe3o financeira","description":"Controle completo de receitas, despesas e comiss\xf5es com relat\xf3rios detalhados e visuais."},"loyalty":{"title":"Fideliza\xe7\xe3o de clientes","description":"Ferramentas de marketing e programas de fidelidade para manter seus clientes sempre voltando."}},"business_model":{"title":"Como o BarberPro funciona","subtitle":"Uma solu\xe7\xe3o completa para transformar a gest\xe3o da sua barbearia","scheduling_title":"Agendamento Inteligente","scheduling_description":"Otimize sua agenda e elimine conflitos de hor\xe1rios","online_scheduling":"Agendamento Online","online_scheduling_desc":"Permita que seus clientes marquem hor\xe1rios 24/7 pelo site ou aplicativo","automated_calendar":"Calend\xe1rio Automatizado","automated_calendar_desc":"Sincroniza\xe7\xe3o com Google Agenda e notifica\xe7\xf5es autom\xe1ticas","auto_reminders":"Lembretes Autom\xe1ticos","auto_reminders_desc":"Reduza faltas com lembretes por SMS e e-mail","financial_title":"Gest\xe3o Financeira","financial_description":"Controle completo das finan\xe7as do seu neg\xf3cio","revenue_tracking":"Controle de Receitas","revenue_tracking_desc":"Acompanhe vendas, servi\xe7os e comiss\xf5es em tempo real","expense_management":"Gest\xe3o de Despesas","expense_management_desc":"Categorize e monitore todos os gastos do seu neg\xf3cio","commission_system":"Sistema de Comiss\xf5es","commission_system_desc":"C\xe1lculo autom\xe1tico de comiss\xf5es para seus profissionais","customer_title":"Gest\xe3o de Clientes","customer_description":"Construa relacionamentos duradouros com seus clientes","client_profiles":"Perfis de Clientes","client_profiles_desc":"Hist\xf3rico completo de servi\xe7os, prefer\xeancias e dados de contato","service_history":"Hist\xf3rico de Servi\xe7os","service_history_desc":"Registro detalhado de todos os atendimentos realizados","preference_tracking":"Prefer\xeancias Personalizadas","preference_tracking_desc":"Registre prefer\xeancias de corte, produtos e profissionais","marketing_title":"Marketing e Fideliza\xe7\xe3o","marketing_description":"Ferramentas para atrair e reter mais clientes","loyalty_program":"Programa de Fidelidade","loyalty_program_desc":"Sistema de pontos e recompensas para incentivar o retorno","automated_campaigns":"Campanhas Autom\xe1ticas","automated_campaigns_desc":"E-mails e SMS para anivers\xe1rios, promo\xe7\xf5es e reativa\xe7\xe3o","review_management":"Gest\xe3o de Avalia\xe7\xf5es","review_management_desc":"Colete e gerencie avalia\xe7\xf5es dos clientes para melhorar sua reputa\xe7\xe3o"},"stats":{"barbershops":"Barbearias","appointments":"Agendamentos","clients":"Clientes","satisfaction":"Satisfa\xe7\xe3o"},"login":{"title":"Entre na sua conta","subtitle":"Acesse o sistema e gerencie sua barbearia","email":"E-mail","password":"Senha","remember":"Lembrar-me","forgot":"Esqueceu a senha?","button":"Entrar","google":"Continuar com Google","no_account":"N\xe3o tem uma conta?","signup_link":"Cadastre-se"},"signup":{"title":"Crie sua conta","subtitle":"Comece a gerenciar sua barbearia de forma eficiente","fullname":"Nome completo","email":"E-mail","password":"Senha","confirm_password":"Confirmar senha","password_hint":"M\xednimo de 8 caracteres, incluindo letras e n\xfameros","button":"Criar conta","google":"Continuar com Google","has_account":"J\xe1 tem uma conta?","login_link":"Entrar"}}'),i=JSON.parse('{"header":{"login":"Login","signup":"Sign Up","features":"Features","pricing":"Pricing","contact":"Contact","dashboard":"Dashboard","logout":"Logout","how_it_works":"How It Works"},"hero":{"title":"Complete barbershop management system","subtitle":"Increase your productivity and revenue with BarberPro. Modern and intuitive interface to manage your business with ease.","cta":{"start":"Get Started","demo":"See Demo"}},"pricing":{"title":"Plans and pricing","subtitle":"Choose the ideal plan for your business","basic":{"title":"Basic Plan","price":"€29,90","period":"/month","description":"Ideal for self-employed professionals and small barbershops.","annual_discount":"20% discount on annual plan","annual_price":"€287,04","annual_period":"/year","feature1":"Online scheduling","feature2":"Up to 100 client registrations","feature3":"Basic financial control","feature4":"Google Calendar integration","cta":"Get Started"},"premium":{"title":"Premium Plan","badge":"MOST POPULAR","price":"€49,90","period":"/month","description":"Ideal for medium and large barbershops with multiple professionals.","annual_discount":"20% discount on annual plan","annual_price":"€479,04","annual_period":"/year","feature1":"All features from the basic plan","feature2":"Unlimited clients","feature3":"Advanced inventory control","feature4":"Advanced reports","feature5":"Customized loyalty program","feature6":"Priority support","cta":"Get Started"}},"cta":{"title":"Ready to transform your barbershop?","subtitle":"Try BarberPro for free for 14 days and discover how we can help your business grow.","button":"Start free trial"},"footer":{"description":"Complete management system for barbershops and beauty salons.","copyright":"\xa9 2024 BarberPro. All rights reserved.","links":"Links","legal":"Legal","terms":"Terms of Use","privacy":"Privacy Policy","cookies":"Cookies","contact":"Contact"},"reviews":{"title":"What our customers say","subtitle":"Over 1000 barbershops have already transformed their businesses with BarberPro"},"testimonials":{"title":"Customer Testimonials","subtitle":"See what our customers are saying about BarberPro","testimonial1":{"text":"BarberPro completely transformed my barbershop management. Now I can control appointments, finances, and inventory in one place. I recommend it to everyone!","name":"Charles Smith","role":"Owner of Vintage Barbershop","initials":"CS"},"testimonial2":{"text":"Since we implemented BarberPro, our bookings have increased by 30% and customer satisfaction has improved significantly. The interface is intuitive and easy to use.","name":"Mary Sanders","role":"Manager at Elite Salon","initials":"MS"},"testimonial3":{"text":"Customer support is exceptional! Whenever I had questions, the BarberPro team helped me promptly. The system is complete and meets all the needs of my barbershop.","name":"Robert Oliver","role":"Barber and Entrepreneur","initials":"RO"}},"features":{"title":"BarberPro Features","subtitle":"All the tools you need to manage your barbershop in one place","scheduling":{"title":"Smart scheduling","description":"Intuitive scheduling system integrated with Google Calendar for your clients to easily book appointments."},"financial":{"title":"Financial management","description":"Complete control of revenues, expenses, and commissions with detailed visual reports."},"loyalty":{"title":"Customer loyalty","description":"Marketing tools and loyalty programs to keep your customers coming back."}},"business_model":{"title":"How BarberPro Works","subtitle":"A complete solution to transform your barbershop management","scheduling_title":"Smart Scheduling","scheduling_description":"Optimize your calendar and eliminate scheduling conflicts","online_scheduling":"Online Booking","online_scheduling_desc":"Allow your customers to book appointments 24/7 through website or app","automated_calendar":"Automated Calendar","automated_calendar_desc":"Synchronization with Google Calendar and automatic notifications","auto_reminders":"Automatic Reminders","auto_reminders_desc":"Reduce no-shows with SMS and email reminders","financial_title":"Financial Management","financial_description":"Complete control of your business finances","revenue_tracking":"Revenue Tracking","revenue_tracking_desc":"Monitor sales, services, and commissions in real-time","expense_management":"Expense Management","expense_management_desc":"Categorize and track all your business expenses","commission_system":"Commission System","commission_system_desc":"Automatic commission calculation for your professionals","customer_title":"Customer Management","customer_description":"Build lasting relationships with your customers","client_profiles":"Client Profiles","client_profiles_desc":"Complete history of services, preferences, and contact information","service_history":"Service History","service_history_desc":"Detailed record of all services performed","preference_tracking":"Custom Preferences","preference_tracking_desc":"Record preferences for cuts, products, and professionals","marketing_title":"Marketing and Loyalty","marketing_description":"Tools to attract and retain more customers","loyalty_program":"Loyalty Program","loyalty_program_desc":"Points and rewards system to encourage return visits","automated_campaigns":"Automated Campaigns","automated_campaigns_desc":"Emails and SMS for birthdays, promotions, and reactivation","review_management":"Review Management","review_management_desc":"Collect and manage customer reviews to improve your reputation"},"stats":{"barbershops":"Barbershops","appointments":"Appointments","clients":"Clients","satisfaction":"Satisfaction"},"login":{"title":"Sign in to your account","subtitle":"Access the system and manage your barbershop","email":"Email","password":"Password","remember":"Remember me","forgot":"Forgot your password?","button":"Sign in","google":"Continue with Google","no_account":"Don\'t have an account?","signup_link":"Sign up"},"signup":{"title":"Create your account","subtitle":"Start managing your barbershop efficiently","fullname":"Full name","email":"Email","password":"Password","confirm_password":"Confirm password","password_hint":"Minimum of 8 characters, including letters and numbers","button":"Create account","google":"Continue with Google","has_account":"Already have an account?","login_link":"Sign in"}}');o.ZP.use(r.Db).init({resources:{pt:{translation:n},en:{translation:i}},lng:"pt",fallbackLng:"pt",interpolation:{escapeValue:!1},react:{useSuspense:!1}})}}]);