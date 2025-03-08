'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useAuth } from '@/app/dashboard/auth-context'
import { Check, Crown, ArrowRight, Receipt, CreditCard } from 'lucide-react'
import Link from 'next/link'

// Definição dos planos
const plans = [
  {
    id: 'basic',
    name: 'Básico',
    price: 'R$ 49,90',
    period: 'por mês',
    description: 'Ideal para barbearias pequenas com até 2 profissionais',
    features: [
      'Agendamento online',
      'Controle de clientes',
      'Histórico de serviços',
      'Relatórios básicos',
      'Suporte por email'
    ],
    color: 'from-blue-500 to-indigo-600',
    recommended: false
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'R$ 89,90',
    period: 'por mês',
    description: 'Perfeito para barbearias em crescimento com equipes maiores',
    features: [
      'Todas as funcionalidades do plano Básico',
      'Até 10 profissionais',
      'Controle financeiro avançado',
      'Programa de fidelidade',
      'Marketing por SMS e WhatsApp',
      'Suporte prioritário 24/7'
    ],
    color: 'from-purple-500 to-purple-700',
    recommended: true
  }
]

export default function PlanosPage() {
  const { currentUser } = useAuth()
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Verificar se estamos no cliente
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Verificar se o usuário está logado
  useEffect(() => {
    if (isClient && !currentUser) {
      router.push('/login')
    }
  }, [currentUser, router, isClient])

  // Se não estamos no cliente, retornar um estado de carregamento
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId)
  }

  const handleSubscribe = async () => {
    if (!selectedPlan) return
    
    setIsProcessing(true)
    
    try {
      // Aqui seria implementada a integração com o gateway de pagamento
      // Por enquanto, apenas simulamos um processamento
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Após o pagamento bem-sucedido, redirecionar para o dashboard
      router.push('/dashboard')
    } catch (error) {
      console.error('Erro ao processar pagamento:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Cabeçalho */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-light text-gray-900 tracking-tight mb-4">
            Escolha o plano ideal para o seu negócio
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Transforme sua barbearia com nossa plataforma completa de gestão. 
            Cancele a qualquer momento.
          </p>
        </motion.div>

        {/* Planos */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${
                plan.recommended ? 'ring-4 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl font-medium text-sm flex items-center">
                  <Crown size={14} className="mr-1" />
                  Recomendado
                </div>
              )}
              
              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                    <p className="text-gray-500 mt-2">{plan.description}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="ml-2 text-gray-500">{plan.period}</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">O que está incluído:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mt-0.5`}>
                          <Check size={14} className="text-white" />
                        </div>
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <button
                    onClick={() => handleSelectPlan(plan.id)}
                    className={`w-full py-3 px-4 rounded-xl text-white font-medium transition-all duration-200 flex items-center justify-center ${
                      selectedPlan === plan.id
                        ? 'bg-green-600 hover:bg-green-700'
                        : `bg-gradient-to-r ${plan.color} hover:shadow-lg`
                    }`}
                  >
                    {selectedPlan === plan.id ? (
                      <>
                        <Check size={18} className="mr-2" />
                        Selecionado
                      </>
                    ) : (
                      <>
                        Selecionar plano
                        <ArrowRight size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botão de assinatura */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-md mx-auto"
        >
          <button
            onClick={handleSubscribe}
            disabled={!selectedPlan || isProcessing}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
          >
            {isProcessing ? (
              <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <CreditCard size={20} className="mr-2" />
            )}
            {isProcessing ? 'Processando...' : 'Assinar agora'}
          </button>
          
          <div className="mt-4 flex justify-center">
            <Link href="/faturas" className="text-purple-600 hover:text-purple-700 flex items-center text-sm font-medium">
              <Receipt size={16} className="mr-1" />
              Ver minhas faturas
            </Link>
          </div>
        </motion.div>

        {/* Informações adicionais */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center text-gray-500 text-sm"
        >
          <p>
            Ao assinar, você concorda com nossos{' '}
            <a href="#" className="text-purple-600 hover:text-purple-700">
              Termos de Serviço
            </a>{' '}
            e{' '}
            <a href="#" className="text-purple-600 hover:text-purple-700">
              Política de Privacidade
            </a>
          </p>
          <p className="mt-2">
            Precisa de ajuda? Entre em contato com nosso{' '}
            <a href="#" className="text-purple-600 hover:text-purple-700">
              suporte
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  )
} 