'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
  icon?: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTabId?: string
  variant?: 'default' | 'pills' | 'underline'
  fullWidth?: boolean
  className?: string
}

export function Tabs({ 
  tabs, 
  defaultTabId, 
  variant = 'default', 
  fullWidth = false,
  className = ''
}: TabsProps) {
  const [activeTabId, setActiveTabId] = useState(defaultTabId || tabs[0]?.id)
  const contentRef = useRef<HTMLDivElement>(null)

  const getTabStyles = (tabId: string) => {
    const isActive = tabId === activeTabId
    
    switch (variant) {
      case 'pills':
        return isActive 
          ? 'bg-purple-600 text-white shadow-md' 
          : 'bg-white text-gray-600 hover:bg-gray-50'
      
      case 'underline':
        return isActive 
          ? 'text-purple-600 border-b-2 border-purple-600' 
          : 'text-gray-600 border-b-2 border-transparent hover:text-purple-500 hover:border-purple-200'
      
      default: // default
        return isActive 
          ? 'text-purple-600 bg-purple-50 border-t-2 border-purple-600' 
          : 'text-gray-600 hover:bg-gray-50 border-t-2 border-transparent'
    }
  }

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId)
    
    // Scroll suave para o conteúdo da aba
    if (contentRef.current) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        })
      }, 100)
    }
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Cabeçalho das abas */}
      <div className={`flex ${variant === 'pills' ? 'p-1 bg-gray-100 rounded-lg' : 'border-b border-gray-200'} ${fullWidth ? 'w-full' : ''}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`${getTabStyles(tab.id)} px-4 py-2 font-medium rounded-lg transition-all duration-200 flex items-center ${fullWidth ? 'flex-1' : ''}`}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Conteúdo das abas */}
      <div className="mt-6" ref={contentRef}>
        <AnimatePresence mode="wait">
          {tabs.map((tab) => {
            if (tab.id !== activeTabId) return null
            
            return (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {tab.content}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}

// Exportação padrão para compatibilidade com importação dinâmica
export default Tabs; 