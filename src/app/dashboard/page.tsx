'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from './auth-context'
import { useLanguage } from '@/context/LanguageContext'

export default function DashboardPage() {
  const router = useRouter()
  const { currentUser } = useAuth()
  const { t } = useLanguage()

  useEffect(() => {
    // Redirecionar para a página do sistema
    router.push('/sistema')
  }, [router])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-purple-600"></div>
      <p className="mt-4 text-gray-600">{t('system.loading')}</p>
    </div>
  )
} 