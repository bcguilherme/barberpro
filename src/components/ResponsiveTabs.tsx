'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Importação dinâmica para evitar problemas de importação circular
const Tabs = dynamic(() => import('./Tabs').then(mod => mod.Tabs), { ssr: false })
const VerticalTabs = dynamic(() => import('./VerticalTabs').then(mod => mod.VerticalTabs), { ssr: false })

interface Tab {
  id: string
  label: string
  content: React.ReactNode
  icon?: React.ReactNode
  description?: string
}

interface ResponsiveTabsProps {
  tabs: Tab[]
  defaultTabId?: string
  className?: string
  breakpoint?: number // Ponto de quebra para alternar entre abas horizontais e verticais
}

export function ResponsiveTabs({
  tabs,
  defaultTabId,
  className = '',
  breakpoint = 1024 // lg
}: ResponsiveTabsProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= breakpoint)
    }
    
    // Verificar tamanho inicial da tela
    checkScreenSize()
    
    // Adicionar listener para redimensionamento
    window.addEventListener('resize', checkScreenSize)
    
    // Limpar listener ao desmontar
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [breakpoint])

  // Não renderizar nada durante a montagem para evitar problemas de hidratação
  if (!mounted) {
    return (
      <div className={`${className} p-4 flex justify-center items-center min-h-[200px]`}>
        <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className={className}>
      {isLargeScreen ? (
        <VerticalTabs tabs={tabs} defaultTabId={defaultTabId} />
      ) : (
        <Tabs tabs={tabs} defaultTabId={defaultTabId} variant="pills" />
      )}
    </div>
  )
} 