'use client'

import { useI18n } from '@/hooks/useI18n'
import { motion } from 'framer-motion'
import { Calendar, DollarSign, Users, Star, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function ComoFunciona() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
            >
              Como o BarberPro Funciona
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Uma solução completa para transformar a gestão da sua barbearia
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center text-white">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-gray-900">
                  Agendamento Inteligente
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Otimize sua agenda e elimine conflitos de horários
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Agendamento Online</span>
                    <p className="text-sm text-gray-600">Permita que seus clientes marquem horários 24/7 pelo site ou aplicativo</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Calendário Automatizado</span>
                    <p className="text-sm text-gray-600">Sincronização com Google Agenda e notificações automáticas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Lembretes Automáticos</span>
                    <p className="text-sm text-gray-600">Reduza faltas com lembretes por SMS e e-mail</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-gray-900">
                  Gestão Financeira
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Controle completo das finanças do seu negócio
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Controle de Receitas</span>
                    <p className="text-sm text-gray-600">Acompanhe vendas, serviços e comissões em tempo real</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Gestão de Despesas</span>
                    <p className="text-sm text-gray-600">Categorize e monitore todos os gastos do seu negócio</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Sistema de Comissões</span>
                    <p className="text-sm text-gray-600">Cálculo automático de comissões para seus profissionais</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center text-white">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-gray-900">
                  Gestão de Clientes
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Construa relacionamentos duradouros com seus clientes
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Perfis de Clientes</span>
                    <p className="text-sm text-gray-600">Histórico completo de serviços, preferências e dados de contato</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Histórico de Serviços</span>
                    <p className="text-sm text-gray-600">Registro detalhado de todos os serviços realizados</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Preferências Personalizadas</span>
                    <p className="text-sm text-gray-600">Registre preferências de corte, produtos e profissionais</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-gray-900">
                  Marketing e Fidelização
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Ferramentas para atrair e reter mais clientes
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Programa de Fidelidade</span>
                    <p className="text-sm text-gray-600">Sistema de pontos e recompensas para incentivar o retorno</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Campanhas Automáticas</span>
                    <p className="text-sm text-gray-600">E-mails e SMS para aniversários, promoções e reativação</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Gestão de Avaliações</span>
                    <p className="text-sm text-gray-600">Colete e gerencie avaliações dos clientes para melhorar sua reputação</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Pronto para transformar sua barbearia?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Experimente o BarberPro gratuitamente por 14 dias e descubra como podemos ajudar seu negócio a crescer.</p>
            <a
              href="/cadastro"
              className="inline-block bg-white text-purple-800 hover:bg-gray-100 font-medium px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Começar teste gratuito
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 