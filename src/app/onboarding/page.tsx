'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Check, ChevronRight, User, Settings, BarChart, Calendar, Users, ThumbsUp, Star } from 'lucide-react'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function OnboardingPage() {
  const router = useRouter()
  const [userName, setUserName] = useState('')
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const totalSteps = 3

  useEffect(() => {
    // Recuperar o nome do usuário do localStorage
    const storedName = localStorage.getItem('user_name')
    if (storedName) {
      setUserName(storedName)
    }

    // Verificar se o usuário está autenticado
    const token = localStorage.getItem('auth_token')
    if (!token) {
      router.push('/login')
    }
  }, [router])

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Último passo, redirecionar para o dashboard
      handleFinishOnboarding()
    }
  }

  const handleFinishOnboarding = () => {
    setLoading(true)
    // Simular um carregamento
    setTimeout(() => {
      // Marcar que o onboarding foi concluído
      localStorage.setItem('onboarding_completed', 'true')
      // Redirecionar para o dashboard
      router.push('/dashboard')
    }, 1000)
  }

  const handleSkipOnboarding = () => {
    setLoading(true)
    // Simular um carregamento
    setTimeout(() => {
      // Marcar que o onboarding foi pulado
      localStorage.setItem('onboarding_completed', 'skipped')
      // Redirecionar para o dashboard
      router.push('/dashboard')
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Progresso */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <div 
                    key={index}
                    className={`w-8 h-2 rounded-full ${
                      index + 1 <= currentStep ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={handleSkipOnboarding}
                disabled={loading}
                className="text-white text-sm hover:underline focus:outline-none disabled:opacity-50"
              >
                Pular
              </button>
            </div>
          </div>
          
          {/* Conteúdo */}
          <div className="p-8">
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mx-auto w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <User className="h-10 w-10 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Bem-vindo ao BarberPro, {userName}!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Estamos felizes em tê-lo conosco. Vamos configurar algumas coisas para você começar.
                </p>
                <div className="bg-purple-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">O que você pode fazer com o BarberPro:</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Gerenciar agendamentos de forma inteligente</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Controlar finanças e comissões</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Fidelizar clientes com ferramentas exclusivas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-yellow-700">Aumentar suas avaliações no Google com nosso sistema exclusivo</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
            
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Escolha seu caminho
                </h2>
                <p className="text-gray-600 mb-8">
                  Selecione o que você deseja fazer primeiro no BarberPro:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div 
                    onClick={() => router.push('/dashboard/perfil')}
                    className="bg-white border border-gray-200 hover:border-purple-300 rounded-xl p-6 cursor-pointer transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <Settings className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-semibold">Configurar meu perfil</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Complete seu perfil com informações adicionais para personalizar sua experiência.
                    </p>
                    <div className="flex justify-end">
                      <ChevronRight className="h-5 w-5 text-purple-600" />
                    </div>
                  </div>
                  
                  <div 
                    onClick={() => router.push('/dashboard')}
                    className="bg-white border border-gray-200 hover:border-purple-300 rounded-xl p-6 cursor-pointer transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <BarChart className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-semibold">Ir para o Dashboard</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Vá direto para o dashboard e comece a usar o BarberPro imediatamente.
                    </p>
                    <div className="flex justify-end">
                      <ChevronRight className="h-5 w-5 text-purple-600" />
                    </div>
                  </div>
                </div>
                
                {/* Google Booster Review Teaser */}
                <div className="mt-8 bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                      <ThumbsUp className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-yellow-800">
                      Não perca nosso Google Booster Review!
                    </h3>
                  </div>
                  <p className="text-yellow-700 mb-2">
                    Nosso sistema exclusivo ajuda sua barbearia a conseguir mais avaliações 5 estrelas no Google, aumentando sua visibilidade e atraindo novos clientes.
                  </p>
                  <p className="text-sm text-yellow-600">
                    Você aprenderá mais sobre isso na próxima etapa.
                  </p>
                </div>
              </motion.div>
            )}
            
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                  Tudo pronto!
                </h2>
                <p className="text-lg text-gray-600 mb-8 text-center">
                  Você está pronto para começar a usar o BarberPro e transformar a gestão da sua barbearia.
                </p>
                
                {/* Google Booster Review Highlight */}
                <div className="mb-10 bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200 shadow-md">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                        <ThumbsUp className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="md:w-3/4 md:pl-6">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-yellow-800">Google Booster Review</h3>
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-200 text-yellow-800">
                          EXCLUSIVO
                        </span>
                      </div>
                      <p className="text-yellow-700 mb-4">
                        Nosso sistema exclusivo de Google Booster Review ajuda sua barbearia a conseguir mais avaliações positivas no Google, aumentando sua visibilidade e atraindo novos clientes.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Star className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-yellow-700">Aumento de até 300% nas avaliações 5 estrelas</span>
                        </li>
                        <li className="flex items-start">
                          <Star className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-yellow-700">Solicitações automáticas de avaliação após atendimentos</span>
                        </li>
                        <li className="flex items-start">
                          <Star className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-yellow-700">Destaque nos resultados de pesquisa do Google</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-center">Agendamentos</h3>
                    <p className="text-gray-600 text-sm text-center">
                      Gerencie sua agenda e horários de forma eficiente
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-center">Clientes</h3>
                    <p className="text-gray-600 text-sm text-center">
                      Cadastre e fidelize seus clientes
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <BarChart className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-center">Relatórios</h3>
                    <p className="text-gray-600 text-sm text-center">
                      Acompanhe o desempenho do seu negócio
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Botões de navegação */}
          <div className="px-8 py-6 bg-gray-50 flex justify-end">
            <button
              onClick={handleNextStep}
              disabled={loading}
              className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              ) : null}
              {currentStep < totalSteps ? 'Continuar' : 'Começar a usar o BarberPro'}
              {!loading && <ChevronRight className="ml-2 h-5 w-5" />}
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 