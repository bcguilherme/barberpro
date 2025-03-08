'use client'

import { useI18n } from '@/hooks/useI18n'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'

export default function PrivacidadePage() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Política de Privacidade</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
              
              <p className="mb-6">
                A sua privacidade é importante para nós. É política do BarberPro respeitar a sua privacidade 
                em relação a qualquer informação sua que possamos coletar em nosso site e outros sites que possuímos e operamos.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Informações que coletamos</h2>
              <p>
                Coletamos informações pessoais quando você se registra em nossa plataforma, faz login, 
                preenche formulários ou interage com nossos serviços. Estas informações podem incluir:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Nome e informações de contato, como e-mail;</li>
                <li>Informações de login, como nome de usuário e senha;</li>
                <li>Informações de pagamento e faturamento;</li>
                <li>Dados de perfil, como foto e preferências;</li>
                <li>Dados de uso e interação com nossos serviços;</li>
                <li>Informações do dispositivo e conexão, como endereço IP e tipo de navegador.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Como usamos suas informações</h2>
              <p>
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Fornecer, operar e manter nossos serviços;</li>
                <li>Melhorar, personalizar e expandir nossa plataforma;</li>
                <li>Entender e analisar como você usa nossos serviços;</li>
                <li>Desenvolver novos produtos, serviços e funcionalidades;</li>
                <li>Processar transações e enviar informações relacionadas;</li>
                <li>Comunicar-nos com você, incluindo suporte ao cliente e atualizações;</li>
                <li>Enviar e-mails de marketing, se você optou por recebê-los;</li>
                <li>Detectar, prevenir e resolver problemas técnicos e de segurança.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Compartilhamento de informações</h2>
              <p>
                Não compartilhamos suas informações pessoais com terceiros, exceto nas seguintes circunstâncias:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Com provedores de serviços terceirizados que nos auxiliam na operação de nossos serviços;</li>
                <li>Para cumprir obrigações legais;</li>
                <li>Para proteger e defender nossos direitos e propriedade;</li>
                <li>Com sua permissão ou sob sua direção.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Segurança de dados</h2>
              <p>
                A segurança de seus dados é importante para nós, mas lembre-se que nenhum método de transmissão 
                pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar 
                meios comercialmente aceitáveis para proteger suas informações pessoais, não podemos garantir sua 
                segurança absoluta.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookies e tecnologias semelhantes</h2>
              <p>
                Utilizamos cookies e tecnologias semelhantes para rastrear a atividade em nosso serviço e 
                armazenar certas informações. Cookies são arquivos com pequena quantidade de dados que podem 
                incluir um identificador exclusivo anônimo.
              </p>
              <p>
                Você pode instruir seu navegador a recusar todos os cookies ou a indicar quando um cookie está 
                sendo enviado. No entanto, se você não aceitar cookies, poderá não conseguir usar algumas partes de nosso serviço.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Seus direitos de privacidade</h2>
              <p>
                Se você reside na União Europeia, Brasil ou em outras regiões com leis de proteção de dados que 
                concedem direitos específicos aos titulares dos dados, você pode ter os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Direito de acesso às suas informações pessoais;</li>
                <li>Direito de retificação de dados imprecisos ou incompletos;</li>
                <li>Direito ao esquecimento (exclusão de dados);</li>
                <li>Direito à restrição de processamento;</li>
                <li>Direito à portabilidade de dados;</li>
                <li>Direito de objeção ao processamento;</li>
                <li>Direito de não estar sujeito a decisões automatizadas.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Retenção de dados</h2>
              <p>
                Manteremos suas informações pessoais apenas pelo tempo necessário para os fins estabelecidos 
                nesta Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou 
                permitido por lei.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Alterações a esta política</h2>
              <p>
                Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre 
                quaisquer alterações publicando a nova Política de Privacidade nesta página e, se as alterações 
                forem significativas, enviaremos um aviso por e-mail.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contato</h2>
              <p>
                Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: 
                <a href="mailto:privacidade@barberpro.pt" className="text-purple-600 hover:text-purple-800 ml-1">
                  privacidade@barberpro.pt
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