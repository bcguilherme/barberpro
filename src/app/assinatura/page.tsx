'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useAuth } from '@/app/dashboard/auth-context'
import { useLanguage } from '@/context/LanguageContext'
import { 
  Check, 
  Crown, 
  ArrowRight, 
  Receipt, 
  CreditCard, 
  User, 
  Settings, 
  ChevronRight,
  Download,
  CheckCircle,
  AlertCircle,
  Shield,
  FileText,
  Gift,
  Star,
  Percent
} from 'lucide-react'
import Link from 'next/link'

export default function AssinaturaPage() {
  const { currentUser, logout } = useAuth()
  const router = useRouter()
  const { t } = useLanguage()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [activeTab, setActiveTab] = useState('planos')
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [isClient, setIsClient] = useState(false)
  const [formData, setFormData] = useState({
    businessName: '',
    address: '',
    phone: '',
    employees: '1'
  })
  const [invoices, setInvoices] = useState([
    {
      id: 'INV-001',
      date: '15/04/2023',
      amount: 'R$ 89,90',
      status: 'paid',
      plan: 'Premium',
      period: '15/04/2023 - 14/05/2023',
      isFreeTrialPeriod: false
    },
    {
      id: 'INV-002',
      date: '15/05/2023',
      amount: 'R$ 89,90',
      status: 'paid',
      plan: 'Premium',
      period: '15/05/2023 - 14/06/2023',
      isFreeTrialPeriod: false
    },
    {
      id: 'INV-003',
      date: '15/06/2023',
      amount: 'R$ 89,90',
      status: 'pending',
      plan: 'Premium',
      period: '15/06/2023 - 14/07/2023',
      isFreeTrialPeriod: false
    }
  ])
  const [userPlan, setUserPlan] = useState<string | null>(null)
  const [trialDaysLeft, setTrialDaysLeft] = useState(0)
  const [hasPaymentMethod, setHasPaymentMethod] = useState(false)

  // Calcular preços com desconto para planos anuais (20% de desconto)
  const calculateAnnualPrice = (monthlyPrice: string) => {
    const numericPrice = parseFloat(monthlyPrice.replace('€ ', '').replace(',', '.'))
    const annualPrice = numericPrice * 12 * 0.8 // 20% de desconto
    return `€ ${annualPrice.toFixed(2).replace('.', ',')}`
  }

  // Definição dos planos
  const plans = [
    {
      id: 'basic',
      name: t('subscription.basic_plan'),
      price: billingCycle === 'monthly' ? '€ 29,90' : calculateAnnualPrice('€ 29,90'),
      originalPrice: billingCycle === 'monthly' ? '' : '€ 358,80',
      period: billingCycle === 'monthly' ? t('subscription.per_month') : t('subscription.per_year'),
      description: t('subscription.basic_description'),
      features: [
        t('subscription.online_scheduling'),
        t('subscription.client_management'),
        t('subscription.basic_financial'),
        t('subscription.simple_reports'),
        t('subscription.email_support')
      ],
      color: 'from-blue-500 to-indigo-600',
      recommended: false,
      freeTrialDays: 15
    },
    {
      id: 'professional',
      name: t('subscription.professional_plan'),
      price: billingCycle === 'monthly' ? '€ 49,90' : calculateAnnualPrice('€ 49,90'),
      originalPrice: billingCycle === 'monthly' ? '' : '€ 598,80',
      period: billingCycle === 'monthly' ? t('subscription.per_month') : t('subscription.per_year'),
      description: t('subscription.professional_description'),
      features: [
        t('subscription.all_basic_features'),
        t('subscription.loyalty_system'),
        t('subscription.inventory_control'),
        t('subscription.advanced_reports'),
        t('subscription.whatsapp_integration'),
        t('subscription.google_review'),
        t('subscription.priority_support'),
        t('subscription.mobile_app')
      ],
      color: 'from-purple-500 to-purple-700',
      recommended: true,
      freeTrialDays: 30
    }
  ]

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

  // Carregar dados do usuário (simulado)
  useEffect(() => {
    const loadUserData = async () => {
      // Só executar a lógica se estiver no cliente e tiver um usuário
      if (!isClient || !currentUser) return;
      
      // Simular carregamento de dados
      setTimeout(() => {
        setFormData({
          businessName: 'Barbearia Exemplo',
          address: 'Rua das Tesouras, 123',
          phone: '(11) 98765-4321',
          employees: '3'
        })
        
        // Verificar se o usuário já tem um plano
        const userPlanId = localStorage.getItem(`${currentUser.uid}_plan`)
        if (userPlanId) {
          setUserPlan(userPlanId)
          setSelectedPlan(userPlanId)
        }
        
        // Verificar se o usuário está no período de teste gratuito
        const trialEndDate = localStorage.getItem(`${currentUser.uid}_trial_end`)
        if (trialEndDate) {
          const endDate = new Date(trialEndDate)
          const now = new Date()
          
          if (endDate > now) {
            const daysLeft = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
            setTrialDaysLeft(daysLeft)
          } else {
            setTrialDaysLeft(0)
          }
        }
        
        // Verificar método de pagamento
        const paymentMethod = localStorage.getItem(`${currentUser.uid}_payment_method`)
        if (paymentMethod) {
          setHasPaymentMethod(true)
        }
      }, 1000)
    }
    
    loadUserData()
  }, [isClient, currentUser])

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId)
  }

  const handleSubscribe = async () => {
    if (!currentUser) return;
    
    setIsProcessing(true)
    
    // Simulação de processamento
    setTimeout(() => {
      // Salvar o plano selecionado
      if (selectedPlan && currentUser) {
        localStorage.setItem(`${currentUser.uid}_plan`, selectedPlan)
        
        // Definir data de término do período de teste
        const trialEndDate = new Date()
        trialEndDate.setDate(trialEndDate.getDate() + (selectedPlan === 'basic' ? 15 : 30))
        localStorage.setItem(`${currentUser.uid}_trial_end`, trialEndDate.toString())
        
        // Atualizar estado
        setUserPlan(selectedPlan)
        setIsProcessing(false)
        setActiveTab('perfil')
      }
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSaveProfile = () => {
    if (currentUser) {
      localStorage.setItem(`${currentUser.uid}_profile`, JSON.stringify(formData))
      alert(t('subscription.profile_saved'))
    }
  }

  const handleUpdatePaymentMethod = () => {
    if (currentUser) {
      // Simular atualização do método de pagamento
      localStorage.setItem(`${currentUser.uid}_payment_method`, 'card_**** **** **** 1234')
      setHasPaymentMethod(true)
      alert(t('subscription.payment_method_updated'))
    }
  }

  // Renderizar um componente de carregamento enquanto não estamos no cliente
  if (!isClient) {
    // Ainda renderizamos o componente, mas retornamos apenas o loader
    // Isso evita o erro de "Rendered more hooks than during the previous render"
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  // Renderizar o conteúdo principal quando estamos no cliente
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-light text-gray-900 tracking-tight">
              BarberPro
            </h1>
            <p className="text-gray-500 mt-1">
              {t('subscription.subtitle')}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/sistema" className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-500">
              <ArrowRight size={16} className="mr-1" />
              Dashboard
            </Link>
          </div>
        </div>

        {/* Resto do conteúdo da página */}
        {/* ... */}
      </div>
    </div>
  )
} 