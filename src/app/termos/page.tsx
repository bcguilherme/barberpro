'use client'

import { useI18n } from '@/hooks/useI18n'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'

export default function TermosPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Termos e Condições</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar o BarberPro, você concorda em cumprir e ficar vinculado aos seguintes termos e condições. 
                Se você não concordar com qualquer parte destes termos, não poderá acessar ou usar nossos serviços.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Descrição do Serviço</h2>
              <p>
                O BarberPro é um sistema de gestão completo para barbearias, salões de beleza e negócios similares, 
                oferecendo funcionalidades como agendamento online, gestão de clientes, controle financeiro e marketing.
              </p>
              <p>
                Nos reservamos o direito de modificar, suspender ou descontinuar qualquer aspecto do serviço a qualquer momento, 
                incluindo a disponibilidade de recursos, bancos de dados ou conteúdo.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Contas de Usuário</h2>
              <p>
                Para utilizar determinadas funcionalidades do BarberPro, você precisará criar uma conta. Você é responsável 
                por manter a confidencialidade de suas credenciais de login e por todas as atividades que ocorrerem em sua conta.
              </p>
              <p>
                Você concorda em notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta ou qualquer 
                outra violação de segurança.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Planos e Pagamentos</h2>
              <p>
                O BarberPro oferece diferentes planos de assinatura. Ao assinar um plano pago, você concorda em pagar 
                todas as taxas associadas ao plano escolhido.
              </p>
              <p>
                Os pagamentos são processados através de provedores de pagamento terceirizados. Ao fornecer informações 
                de pagamento, você declara e garante que tem o direito legal de usar o método de pagamento fornecido.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cancelamento e Reembolso</h2>
              <p>
                Você pode cancelar sua assinatura a qualquer momento através da sua área de cliente. O cancelamento 
                entrará em vigor no final do período de faturamento atual.
              </p>
              <p>
                Reembolsos podem ser concedidos a nosso critério e de acordo com nossa política de reembolso vigente.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo, recursos e funcionalidades disponíveis no BarberPro, incluindo, mas não se limitando a, 
                textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, 
                são propriedade do BarberPro ou de seus licenciadores e são protegidos por leis de direitos autorais, 
                marcas registradas e outras leis de propriedade intelectual.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitação de Responsabilidade</h2>
              <p>
                Em nenhuma circunstância o BarberPro, seus diretores, funcionários, parceiros, agentes, fornecedores 
                ou afiliados serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais 
                ou punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas 
                intangíveis, resultantes de:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Seu acesso ou uso ou incapacidade de acessar ou usar o serviço;</li>
                <li>Qualquer conduta ou conteúdo de terceiros no serviço;</li>
                <li>Qualquer conteúdo obtido do serviço; e</li>
                <li>Acesso não autorizado, uso ou alteração de suas transmissões ou conteúdo.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Lei Aplicável</h2>
              <p>
                Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar 
                suas disposições de conflito de leis.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Alterações nos Termos</h2>
              <p>
                Reservamo-nos o direito, a nosso critério exclusivo, de modificar ou substituir estes Termos a qualquer momento. 
                Se uma revisão for material, tentaremos fornecer um aviso com pelo menos 30 dias de antecedência antes 
                que quaisquer novos termos entrem em vigor.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contato</h2>
              <p>
                Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco pelo e-mail: 
                <a href="mailto:contato@barberpro.pt" className="text-purple-600 hover:text-purple-800 ml-1">
                  contato@barberpro.pt
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