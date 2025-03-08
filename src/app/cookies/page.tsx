'use client'

import { useI18n } from '@/hooks/useI18n'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'

export default function CookiesPage() {
  const { t } = useI18n()
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Política de Cookies</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
              
              <p className="mb-6">
                Esta Política de Cookies explica como o BarberPro utiliza cookies e tecnologias semelhantes 
                para reconhecê-lo quando você visita nosso site e utiliza nossos serviços. Ela explica o que são 
                essas tecnologias e por que as usamos, bem como seus direitos de controlar nosso uso delas.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. O que são cookies?</h2>
              <p>
                Cookies são pequenos arquivos de dados que são colocados no seu computador ou dispositivo móvel 
                quando você visita um site. Os cookies são amplamente utilizados pelos proprietários de sites para 
                fazer seus sites funcionarem, ou funcionarem de maneira mais eficiente, bem como para fornecer 
                informações de relatórios.
              </p>
              <p>
                Os cookies definidos pelo proprietário do site (neste caso, BarberPro) são chamados de cookies 
                "primários". Os cookies definidos por partes que não o proprietário do site são chamados de cookies 
                "de terceiros". Os cookies de terceiros permitem que recursos ou funcionalidades de terceiros sejam 
                fornecidos no ou através do site (como publicidade, conteúdo interativo e análises).
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Por que usamos cookies?</h2>
              <p>
                Utilizamos cookies primários e de terceiros por vários motivos. Alguns cookies são necessários por 
                razões técnicas para que nosso site e serviços funcionem, e os chamamos de cookies "essenciais" ou 
                "estritamente necessários". Outros cookies nos permitem rastrear e direcionar os interesses de nossos 
                usuários para melhorar a experiência em nossos serviços. Terceiros servem cookies através de nosso 
                site para publicidade, análise e outras finalidades.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Tipos de cookies que usamos</h2>
              <p>
                Os tipos específicos de cookies primários e de terceiros servidos através de nosso site e as 
                finalidades que eles desempenham são descritos abaixo:
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">3.1. Cookies Essenciais</h3>
              <p>
                Estes cookies são estritamente necessários para fornecer nossos serviços. Eles são usados para:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Autenticar usuários e evitar login fraudulento</li>
                <li>Lembrar informações que você preencheu em formulários</li>
                <li>Distribuir a carga de trabalho em vários computadores</li>
                <li>Manter sua sessão ativa enquanto você usa nossos serviços</li>
                <li>Permitir que você acesse sua conta</li>
                <li>Garantir a segurança da sua conta</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">3.2. Cookies de Funcionalidade</h3>
              <p>
                Estes cookies permitem que nosso site lembre escolhas que você faz e forneça recursos aprimorados e mais personalizados:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Lembrar suas preferências e configurações</li>
                <li>Manter o controle de itens em seu carrinho de compras</li>
                <li>Conduzir pesquisas e diagnósticos para melhorar o serviço</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">3.3. Cookies de Desempenho e Análise</h3>
              <p>
                Estes cookies nos permitem contar visitas e fontes de tráfego para que possamos medir e melhorar o desempenho do nosso site:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Entender como você chegou ao nosso site</li>
                <li>Entender quais páginas você visita</li>
                <li>Saber quais recursos são mais populares</li>
                <li>Melhorar nosso site e sua experiência</li>
                <li>Desenvolver novos produtos e serviços</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Como gerenciar cookies</h2>
              <p>
                Você pode configurar seu navegador para recusar todos ou alguns cookies do navegador, ou para alertá-lo 
                quando sites definem ou acessam cookies. Se você desabilitar ou recusar cookies, observe que algumas 
                partes de nosso site podem se tornar inacessíveis ou não funcionar adequadamente.
              </p>
              <p>
                A maioria dos navegadores permite que você veja quais cookies você tem e exclua-os individualmente ou 
                bloqueie cookies de um site específico. Veja como gerenciar cookies nos navegadores mais populares:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-armazenamento-local-de-s" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800">Safari</a></li>
                <li><a href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800">Microsoft Edge</a></li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Alterações a esta política</h2>
              <p>
                Podemos atualizar esta Política de Cookies de tempos em tempos para refletir, por exemplo, 
                alterações nos cookies que usamos ou por outros motivos operacionais, legais ou regulatórios. 
                Portanto, visite esta Política de Cookies regularmente para se manter informado sobre nosso uso de cookies e tecnologias relacionadas.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contato</h2>
              <p>
                Se você tiver alguma dúvida sobre nosso uso de cookies ou outras tecnologias, entre em contato conosco pelo e-mail: 
                <a href="mailto:cookies@barberpro.pt" className="text-purple-600 hover:text-purple-800 ml-1">
                  cookies@barberpro.pt
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 