'use client'

import { useI18n } from '@/hooks/useI18n'
import { motion } from 'framer-motion'
import { Calendar, DollarSign, Users, Star, Bell, Smartphone, BarChart, ShieldCheck, ThumbsUp } from 'lucide-react'

export function Features() {
  const { t } = useI18n()

  // Lista de recursos
  const features = [
    {
      icon: Calendar,
      title: t('features.scheduling.title'),
      description: t('features.scheduling.description'),
      color: 'from-purple-500 to-indigo-500',
      delay: 0.1
    },
    {
      icon: DollarSign,
      title: t('features.financial.title'),
      description: t('features.financial.description'),
      color: 'from-indigo-500 to-blue-500',
      delay: 0.2
    },
    {
      icon: Users,
      title: t('features.loyalty.title'),
      description: t('features.loyalty.description'),
      color: 'from-blue-500 to-cyan-500',
      delay: 0.3
    },
    {
      icon: ThumbsUp,
      title: 'Google Booster Review',
      description: 'Sistema inteligente para aumentar suas avaliações positivas no Google e melhorar sua visibilidade online.',
      color: 'from-yellow-400 to-yellow-600',
      delay: 0.4,
      highlight: true
    },
    {
      icon: Bell,
      title: 'Notificações automáticas',
      description: 'Sistema de lembretes por e-mail e push para reduzir faltas e aumentar a satisfação dos clientes.',
      color: 'from-cyan-500 to-teal-500',
      delay: 0.5
    },
    {
      icon: Smartphone,
      title: 'Aplicativo mobile',
      description: 'Acesse sua agenda e gerencie seu negócio de qualquer lugar através do nosso aplicativo para iOS e Android.',
      color: 'from-teal-500 to-green-500',
      delay: 0.6
    },
    {
      icon: BarChart,
      title: 'Relatórios detalhados',
      description: 'Visualize o desempenho do seu negócio com gráficos interativos e relatórios personalizáveis.',
      color: 'from-green-500 to-emerald-500',
      delay: 0.7
    },
    {
      icon: ShieldCheck,
      title: 'Pagamentos seguros',
      description: 'Integração com Stripe para processamento de pagamentos seguro e confiável.',
      color: 'from-emerald-500 to-purple-500',
      delay: 0.8
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {t('features.title')}
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            {t('features.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border ${feature.highlight ? 'border-yellow-400 bg-yellow-50' : 'border-gray-100'} group ${feature.highlight ? 'hover:border-yellow-500' : 'hover:border-purple-200'}`}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300 ${feature.highlight ? 'text-yellow-700' : 'text-gray-900'}`}>
                {feature.title}
                {feature.highlight && (
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Novo
                  </span>
                )}
              </h3>
              <p className={`${feature.highlight ? 'text-yellow-700' : 'text-gray-600'}`}>
                {feature.description}
              </p>
              {feature.highlight && (
                <div className="mt-4 p-2 bg-yellow-100 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800 font-medium">
                    Aumente suas avaliações 5 estrelas no Google e destaque-se da concorrência!
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Seção de destaque para o Google Booster Review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 max-w-5xl mx-auto bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-2xl border border-yellow-200 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <ThumbsUp className="h-16 w-16 text-white" />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">Google Booster Review</h3>
              <p className="text-yellow-700 mb-4">
                Nosso sistema exclusivo de Google Booster Review ajuda sua barbearia a conseguir mais avaliações positivas no Google, aumentando sua visibilidade e atraindo novos clientes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-yellow-700">Aumento de até 300% nas avaliações 5 estrelas</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-yellow-700">Solicitações automáticas de avaliação após atendimentos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-yellow-700">Monitoramento e resposta a avaliações negativas</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-yellow-700">Destaque nos resultados de pesquisa do Google</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Check(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
} 