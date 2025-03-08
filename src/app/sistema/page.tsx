'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/dashboard/auth-context'
import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Users, 
  DollarSign, 
  Settings, 
  Clock, 
  Scissors, 
  TrendingUp,
  Bell,
  CreditCard,
  Gift,
  AlertCircle,
  Star,
  Check,
  X
} from 'lucide-react'
import Link from 'next/link'

export default function SistemaPage() {
  const { currentUser, logout } = useAuth()
  const router = useRouter()
  const { t } = useLanguage()
  const [userPlan, setUserPlan] = useState<string | null>(null)
  const [planDetails, setPlanDetails] = useState<any>(null)
  const [businessName, setBusinessName] = useState<string>('')
  const [nextBillingDate, setNextBillingDate] = useState<string>('')
  const [isTrialPeriod, setIsTrialPeriod] = useState(false)
  const [daysLeftInTrial, setDaysLeftInTrial] = useState(0)

  // Definição dos planos
  const plans = [
    {
      id: 'basic',
      name: t('subscription.basic_plan'),
      price: '€ 29,90',
      description: t('subscription.basic_description'),
      features: [
        t('subscription.client_management'),
        t('subscription.basic_financial'),
        t('subscription.simple_reports'),
        t('subscription.online_scheduling'),
        t('subscription.email_support')
      ],
      color: 'from-blue-500 to-indigo-600',
      recommended: false
    },
    {
      id: 'professional',
      name: t('subscription.professional_plan'),
      price: '€ 49,90',
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
      recommended: true
    }
  ]

  // Verificar se o usuário está logado
  useEffect(() => {
    if (!currentUser) {
      router.push('/login')
    }
  }, [currentUser, router])

  // Carregar dados do usuário
  useEffect(() => {
    if (currentUser) {
      // Carregar plano do usuário
      const savedPlanId = localStorage.getItem(`${currentUser.uid}_plan`)
      if (savedPlanId) {
        setUserPlan(savedPlanId)
        const plan = plans.find(p => p.id === savedPlanId)
        setPlanDetails(plan)
      } else {
        // Se não tiver plano, redirecionar para a página de assinatura
        router.push('/assinatura')
      }

      // Carregar perfil da empresa
      const savedProfile = localStorage.getItem(`${currentUser.uid}_profile`)
      if (savedProfile) {
        const profile = JSON.parse(savedProfile)
        setBusinessName(profile.businessName || t('system.your_business'))
      }

      // Verificar se está no período de teste
      const trialEndDateStr = localStorage.getItem(`${currentUser.uid}_trial_end_date`)
      if (trialEndDateStr) {
        const trialEndDate = new Date(trialEndDateStr)
        const today = new Date()
        
        // Calcular dias restantes no período de teste
        const diffTime = trialEndDate.getTime() - today.getTime()
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        
        setIsTrialPeriod(diffDays > 0)
        setDaysLeftInTrial(diffDays > 0 ? diffDays : 0)
        setNextBillingDate(trialEndDate.toLocaleDateString())
      } else {
        // Se não estiver no período de teste, calcular próxima data de cobrança
        const today = new Date()
        const nextMonth = new Date(today)
        nextMonth.setMonth(today.getMonth() + 1)
        setNextBillingDate(nextMonth.toLocaleDateString())
      }
    }
  }, [currentUser, router, t])

  if (!currentUser || !userPlan) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-purple-600"></div>
        <p className="mt-4 text-gray-600">{t('system.loading')}</p>
      </div>
    )
  }

  // Definir os módulos disponíveis com base no plano do usuário
  const getMenuItems = () => {
    const baseMenuItems = [
      { 
        icon: <Users className="h-6 w-6 text-blue-600" />, 
        title: t('system.clients'), 
        description: t('system.manage_clients'),
        color: 'bg-blue-100'
      },
      { 
        icon: <DollarSign className="h-6 w-6 text-green-600" />, 
        title: t('system.financial'), 
        description: t('system.financial_control'),
        color: 'bg-green-100'
      },
      { 
        icon: <Scissors className="h-6 w-6 text-amber-600" />, 
        title: t('system.services'), 
        description: t('system.register_services'),
        color: 'bg-amber-100'
      },
      { 
        icon: <TrendingUp className="h-6 w-6 text-red-600" />, 
        title: t('system.reports'), 
        description: t('system.business_performance'),
        color: 'bg-red-100'
      },
      { 
        icon: <Settings className="h-6 w-6 text-gray-600" />, 
        title: t('system.settings'), 
        description: t('system.customize_system'),
        color: 'bg-gray-100'
      },
    ];

    // Adicionar módulos específicos com base no plano
    if (userPlan === 'professional') {
      return [
        { 
          icon: <Calendar className="h-6 w-6 text-purple-600" />, 
          title: t('system.schedule'), 
          description: t('system.manage_appointments'),
          color: 'bg-purple-100'
        },
        { 
          icon: <Star className="h-6 w-6 text-yellow-600" />, 
          title: t('system.google_review'), 
          description: t('system.increase_reviews'),
          color: 'bg-yellow-100',
          isNew: true
        },
        ...baseMenuItems
      ];
    }

    return baseMenuItems;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <header className="py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-light text-gray-900 tracking-tight">
              BarberPro
            </h1>
            <p className="text-gray-500 mt-1">
              {t('system.title')}
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/assinatura" 
              className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
            >
              {t('system.manage_subscription')}
            </Link>
            
            <button className="relative p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-xs text-white">
                3
              </span>
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden">
                {currentUser?.photoURL ? (
                  <img 
                    src={currentUser.photoURL} 
                    alt={t('system.profile_photo')} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-lg font-bold text-purple-600">
                    {currentUser?.email?.charAt(0).toUpperCase() || 'U'}
                  </span>
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {currentUser?.displayName || currentUser?.email}
                </p>
                <button 
                  onClick={logout}
                  className="text-xs text-purple-600 hover:text-purple-700"
                >
                  {t('system.logout')}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Conteúdo principal */}
        <main className="py-8">
          {/* Banner de período de teste */}
          {isTrialPeriod && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl shadow-md mb-8 overflow-hidden"
            >
              <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                  <div className="flex-shrink-0 bg-white/20 p-3 rounded-full mr-4">
                    <Gift className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{t('system.free_trial_period')}</h3>
                    <p className="text-amber-50" dangerouslySetInnerHTML={{
                      __html: t('system.days_remaining')
                        .replace('{days}', daysLeftInTrial.toString())
                        .replace('{plan}', t(userPlan === 'basic' ? 'system.basic_trial' : 'system.professional_trial'))
                    }} />
                  </div>
                </div>
                <Link
                  href="/assinatura"
                  className="px-4 py-2 bg-white text-amber-600 rounded-lg font-medium text-sm hover:bg-amber-50 transition-colors shadow-sm"
                >
                  {t('system.configure_payment')}
                </Link>
              </div>
            </motion.div>
          )}

          {/* Boas-vindas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl shadow-xl overflow-hidden mb-12"
          >
            <div className="px-8 py-12 text-white">
              <h2 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{
                __html: t('system.welcome').replace('{businessName}', businessName || t('system.your_business'))
              }} />
              <p className="text-purple-100 text-lg mb-6">
                <span dangerouslySetInnerHTML={{
                  __html: isTrialPeriod 
                    ? t('system.using_plan_free').replace('{planName}', planDetails?.name || '')
                    : t('system.subscription_active').replace('{planName}', planDetails?.name || '')
                }} />
                {' '}{t('system.boost_business')}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-purple-300 mr-2" />
                  <span className="text-sm text-purple-100">
                    {t('system.trial_ends')} {nextBillingDate}
                  </span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 text-purple-300 mr-2" />
                  <span className="text-sm text-purple-100">
                    {t('system.price_after_period')} {planDetails?.price}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Módulos do sistema */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getMenuItems().map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 relative overflow-hidden"
              >
                {item.isNew && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                    {t('system.new')}
                  </div>
                )}
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 mb-4">{item.description}</p>
                <button className="text-sm font-medium text-purple-600 hover:text-purple-700 flex items-center">
                  <span className="mr-1">{t('system.access')}</span>
                  <X size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
} 