'use client'

import { useI18n } from '@/hooks/useI18n'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function Hero() {
  const { t } = useI18n()
  const { language } = useLanguage()

  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-16 sm:py-0">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-purple-600/10 rounded-full"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-indigo-600/10 rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-400/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo principal */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Sistema inteligente para</span>
                <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                  barbearias modernas
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                O BarberPro é a solução completa para gestão de barbearias e salões de beleza. Aumente sua produtividade e faturamento com nossa plataforma intuitiva.
              </p>

              {/* Call to action buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/cadastro"
                  className="inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  Começar teste gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center px-6 py-4 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-xl shadow-sm hover:shadow transition-all w-full sm:w-auto"
                >
                  Ver como funciona
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-10 sm:mt-12">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gradient-to-br ${i === 1 ? 'from-purple-400 to-purple-600' : i === 2 ? 'from-indigo-400 to-indigo-600' : 'from-blue-400 to-blue-600'}`}>
                        </div>
                      ))}
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">
                      <span className="font-semibold">+1.000</span> barbearias
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3 sm:mt-0">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">
                      <span className="font-semibold">4.9/5</span> avaliações
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card de destaque */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-indigo-600 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                14 DIAS GRÁTIS
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Teste gratuito completo
                </h3>
                
                <div className="space-y-4 mb-6">
                  {[
                    'Acesso a todas as funcionalidades',
                    'Sem necessidade de cartão de crédito',
                    'Suporte completo durante o teste',
                    'Configure seu sistema em minutos'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-500">A partir de</div>
                      <div className="flex items-end">
                        <span className="text-3xl font-bold text-gray-900">€29,90</span>
                        <span className="text-gray-500 ml-1">/mês</span>
                      </div>
                    </div>
                    <div className="bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full">
                      Poupe 20% no plano anual
                    </div>
                  </div>
                  
                  <Link 
                    href="/cadastro" 
                    className="block w-full text-center py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:-translate-y-1"
                  >
                    Começar teste gratuito
                  </Link>
                </div>
              </div>
              
              {/* Badge de estatísticas */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-xl p-4 flex items-center">
                <div className="bg-purple-100 rounded-full p-2 mr-3">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">+500% de agendamentos</div>
                  <div className="text-xs text-gray-500">nos primeiros 30 dias</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Versão mobile do card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="lg:hidden mt-12 container mx-auto px-4"
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative max-w-md mx-auto">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-indigo-600 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
            14 DIAS GRÁTIS
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Teste gratuito completo
            </h3>
            
            <div className="space-y-3 mb-6">
              {[
                'Acesso a todas as funcionalidades',
                'Sem necessidade de cartão de crédito',
                'Suporte completo durante o teste',
                'Configure seu sistema em minutos'
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-gray-500">A partir de</div>
                  <div className="flex items-end">
                    <span className="text-2xl font-bold text-gray-900">€29,90</span>
                    <span className="text-gray-500 ml-1">/mês</span>
                  </div>
                </div>
                <div className="bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">
                  Poupe 20% no plano anual
                </div>
              </div>
              
              <Link 
                href="/cadastro" 
                className="block w-full text-center py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                Começar teste gratuito
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 