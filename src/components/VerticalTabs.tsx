'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
  icon?: React.ReactNode
  description?: string
}

interface VerticalTabsProps {
  tabs: Tab[]
  defaultTabId?: string
  className?: string
}

export function VerticalTabs({ 
  tabs, 
  defaultTabId, 
  className = ''
}: VerticalTabsProps) {
  const [activeTabId, setActiveTabId] = useState(defaultTabId || tabs[0]?.id)

  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navegação lateral */}
        <div className="lg:w-1/3 xl:w-1/4">
          <div className="bg-white rounded-xl shadow-md p-4 sticky top-24">
            <ul className="space-y-2">
              {tabs.map((tab) => {
                const isActive = tab.id === activeTabId
                
                return (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTabId(tab.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-start ${
                        isActive 
                          ? 'bg-purple-50 text-purple-600 border-l-4 border-purple-600' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {tab.icon && (
                        <span className={`mr-3 p-2 rounded-lg ${isActive ? 'bg-purple-100' : 'bg-gray-100'}`}>
                          {tab.icon}
                        </span>
                      )}
                      <div>
                        <div className="font-medium">{tab.label}</div>
                        {tab.description && (
                          <div className="text-xs text-gray-500 mt-1">{tab.description}</div>
                        )}
                      </div>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        
        {/* Conteúdo */}
        <div className="lg:w-2/3 xl:w-3/4">
          <AnimatePresence mode="wait">
            {tabs.map((tab) => {
              if (tab.id !== activeTabId) return null
              
              return (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{tab.label}</h2>
                  {tab.content}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

// Exportação padrão para compatibilidade com importação dinâmica
export default VerticalTabs; 