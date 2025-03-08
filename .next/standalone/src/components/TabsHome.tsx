'use client'

import { useI18n } from '@/hooks/useI18n'
import dynamic from 'next/dynamic'
import { Calendar, DollarSign, Star, Users, Zap, BarChart, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

// Importação dinâmica para evitar problemas de importação circular
const ResponsiveTabs = dynamic(() => import('./ResponsiveTabs').then(mod => mod.ResponsiveTabs), { 
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center py-12">
      <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
})

// Importações dinâmicas dos componentes de conteúdo
const Features = dynamic(() => import('./Features').then(mod => mod.Features), { ssr: false })
const Pricing = dynamic(() => import('./Pricing').then(mod => mod.Pricing), { ssr: false })
const Reviews = dynamic(() => import('./Reviews').then(mod => mod.Reviews), { ssr: false })

export default function TabsHome() {
  const { t } = useI18n()

  // Componente de visão geral
  const OverviewTab = () => (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 group hover:border-purple-300">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
            Agendamento Inteligente
          </h3>
          <p className="text-gray-600">
            Sistema de agendamento intuitivo integrado com Google Agenda para seus clientes marcarem horários facilmente.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 group hover:border-purple-300">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <DollarSign className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
            Gestão Financeira
          </h3>
          <p className="text-gray-600">
            Controle completo de receitas, despesas e comissões com relatórios detalhados e visuais.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 group hover:border-purple-300">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Users className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
            Fidelização de Clientes
          </h3>
          <p className="text-gray-600">
            Ferramentas de marketing e programas de fidelidade para manter seus clientes sempre voltando.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 group hover:border-purple-300">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
            Pagamentos Seguros
          </h3>
          <p className="text-gray-600">
            Integração com Stripe para processamento de pagamentos seguro e confiável.
          </p>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 max-w-6xl mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="grid md:grid-cols-2 items-center">
          <div className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Transforme sua Barbearia
            </h3>
            <p className="text-purple-100 mb-6">
              O BarberPro é a solução completa para gestão de barbearias e salões de beleza. Aumente sua produtividade e faturamento com nossa plataforma intuitiva.
            </p>
            <ul className="space-y-3">
              {[
                'Agendamento online 24/7',
                'Controle financeiro completo',
                'Fidelização de clientes',
                'Relatórios detalhados'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-white">
                  <div className="mr-3 bg-white bg-opacity-20 rounded-full p-1">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-8 bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors duration-300 shadow-md hover:shadow-lg">
              Saiba mais
            </button>
          </div>
          <div className="hidden md:block relative h-full min-h-[300px]">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Barbearia moderna" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )

  // Definição das abas
  const tabs = [
    {
      id: 'overview',
      label: 'Visão Geral',
      icon: <Zap className="h-5 w-5" />,
      description: 'Conheça os principais recursos do BarberPro',
      content: <OverviewTab />
    },
    {
      id: 'features',
      label: 'Recursos',
      icon: <Calendar className="h-5 w-5" />,
      description: 'Explore todos os recursos disponíveis',
      content: <Features />
    },
    {
      id: 'pricing',
      label: 'Planos',
      icon: <DollarSign className="h-5 w-5" />,
      description: 'Conheça nossos planos e preços',
      content: <Pricing />
    },
    {
      id: 'reviews',
      label: 'Avaliações',
      icon: <Star className="h-5 w-5" />,
      description: 'Veja o que nossos clientes dizem',
      content: <Reviews />
    }
  ]

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <ResponsiveTabs 
          tabs={tabs} 
          className="max-w-7xl mx-auto"
        />
      </div>
    </div>
  )
} 