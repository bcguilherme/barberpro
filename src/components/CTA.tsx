'use client'

import { useI18n } from '@/hooks/useI18n'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, CheckCircle } from 'lucide-react'

export function CTA() {
  const { t } = useI18n()

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background com gradiente e formas */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 overflow-hidden">
        {/* Círculos decorativos */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Conteúdo */}
              <div className="p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      {t('cta.title')}
                    </span>
                  </h2>
                  <p className="text-gray-600 mb-8">
                    {t('cta.subtitle')}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      'Teste gratuito por 14 dias',
                      'Sem necessidade de cartão de crédito',
                      'Suporte completo durante o período de teste',
                      'Configure seu sistema em minutos'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href="/cadastro"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-purple-200/50 transition-all duration-300 transform hover:scale-105"
                  >
                    {t('cta.button')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
              
              {/* Imagem/Ilustração */}
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Barbearia moderna" 
                  className="h-full w-full object-cover"
                />
                
                {/* Badge flutuante */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute bottom-8 -left-12 bg-white rounded-lg shadow-xl p-4 flex items-center"
                >
                  <div className="bg-purple-100 rounded-full p-2 mr-3">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">+500% de agendamentos</div>
                    <div className="text-xs text-gray-500">nos primeiros 30 dias</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Logos de clientes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-white text-sm font-medium mb-6 opacity-80">UTILIZADO POR MAIS DE 1000 BARBEARIAS NO BRASIL</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white/10 rounded-lg p-4 w-full max-w-[150px]">
                  <div className="h-8 bg-white/80 rounded-md"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 