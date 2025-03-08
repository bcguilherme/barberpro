'use client'

import { motion } from 'framer-motion'
import { Calendar, DollarSign, Users, Star, Megaphone, CheckCircle2 } from 'lucide-react'
import { useI18n } from '@/hooks/useI18n'

export function BusinessModel() {
  const { t } = useI18n()

  const features = [
    {
      title: "Agendamento Inteligente",
      icon: Calendar,
      color: 'from-purple-500 to-indigo-500',
      description: "Otimize sua agenda e elimine conflitos de horários",
      items: [
        { title: "Agendamento Online", description: "Permita que seus clientes marquem horários 24/7 pelo site ou aplicativo" },
        { title: "Calendário Automatizado", description: "Sincronização com Google Agenda e notificações automáticas" },
        { title: "Lembretes Automáticos", description: "Reduza faltas com lembretes por SMS e e-mail" }
      ]
    },
    {
      title: "Gestão Financeira",
      icon: DollarSign,
      color: 'from-blue-500 to-cyan-500',
      description: "Controle completo das finanças do seu negócio",
      items: [
        { title: "Controle de Pagamentos", description: "Acompanhe todos os pagamentos e recebimentos em tempo real" },
        { title: "Controle de Caixa", description: "Gerencie entradas e saídas com facilidade e precisão" },
        { title: "Relatórios Financeiros", description: "Visualize o desempenho financeiro com gráficos e relatórios detalhados" }
      ]
    },
    {
      title: "Fidelização de Clientes",
      icon: Star,
      color: 'from-amber-500 to-orange-500',
      description: "Ferramentas para atrair e reter mais clientes",
      items: [
        { title: "Histórico de Serviços", description: "Registro detalhado de todos os atendimentos realizados" },
        { title: "Programa de Fidelidade", description: "Sistema de pontos e recompensas para incentivar o retorno" },
        { title: "Feedback de Clientes", description: "Colete e analise avaliações para melhorar seus serviços" }
      ]
    },
    {
      title: "Gestão de Equipe",
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      description: "Controle completo da sua equipe de profissionais",
      items: [
        { title: "Controle de Funcionários", description: "Gerencie horários, folgas e comissões de cada profissional" },
        { title: "Relatórios de Desempenho", description: "Acompanhe a produtividade e resultados de cada membro da equipe" }
      ]
    },
    {
      title: "Marketing Digital",
      icon: Megaphone,
      color: 'from-pink-500 to-rose-500',
      description: "Ferramentas para promover seu negócio e atrair novos clientes",
      items: [
        { title: "Integração com Redes Sociais", description: "Compartilhe promoções e novidades diretamente nas suas redes sociais" },
        { title: "Base de Clientes", description: "Segmente seus clientes para campanhas personalizadas" },
        { title: "Ofertas Personalizadas", description: "Crie promoções específicas baseadas no histórico de cada cliente" }
      ]
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Como o BarberPro Funciona
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Uma solução completa para transformar a gestão da sua barbearia
          </p>
        </motion.div>

        <div className="mt-24 space-y-32">
          {features.map((feature, featureIndex) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: featureIndex * 0.1 }}
              className="relative"
            >
              {/* Feature header */}
              <div className="relative z-10 flex flex-col items-center text-center mb-12">
                <div className={`inline-flex items-center justify-center h-20 w-20 rounded-3xl bg-gradient-to-r ${feature.color} text-white mb-6`}>
                  <feature.icon className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl">
                  {feature.description}
                </p>
              </div>

              {/* Feature content */}
              <div className="grid gap-8 lg:grid-cols-3">
                {feature.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                    className="relative"
                  >
                    <div className="h-full bg-white rounded-2xl p-8 shadow-lg">
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 bg-gradient-to-r ${feature.color} rounded-full p-2 mr-4`}>
                          <CheckCircle2 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
        >
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white mb-6">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Tudo o que você precisa em um só lugar
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experimente o BarberPro gratuitamente por 14 dias e descubra como podemos transformar a gestão da sua barbearia.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 