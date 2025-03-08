'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

interface TranslationDebuggerProps {
  showByDefault?: boolean
}

/**
 * Componente para depuração de traduções
 * Útil durante o desenvolvimento para identificar problemas de tradução
 * 
 * @param showByDefault - Se true, o depurador é mostrado por padrão
 */
export function TranslationDebugger({ showByDefault = false }: TranslationDebuggerProps) {
  const { language, t } = useLanguage()
  const [isVisible, setIsVisible] = useState(showByDefault)
  const [testKey, setTestKey] = useState('')
  const [testResult, setTestResult] = useState<string | null>(null)
  
  // Apenas renderiza em ambiente de desenvolvimento
  if (process.env.NODE_ENV === 'production') {
    return null
  }
  
  const testTranslation = () => {
    if (!testKey) return
    
    try {
      const result = t(testKey)
      setTestResult(result)
    } catch (error) {
      setTestResult(`Error: ${(error as Error).message}`)
    }
  }
  
  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg z-50"
        title="Show Translation Debugger"
      >
        🌐
      </button>
    )
  }
  
  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-300 w-80 z-50">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-gray-800">Translation Debugger</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      
      <div className="mb-3">
        <div className="text-sm font-medium text-gray-700 mb-1">Current Language</div>
        <div className="bg-gray-100 p-2 rounded text-sm">
          {language} ({language === 'pt' ? '🇧🇷 Portuguese' : '🇺🇸 English'})
        </div>
      </div>
      
      <div className="mb-3">
        <div className="text-sm font-medium text-gray-700 mb-1">Test Translation</div>
        <div className="flex space-x-2">
          <input
            type="text"
            value={testKey}
            onChange={(e) => setTestKey(e.target.value)}
            placeholder="Enter translation key"
            className="flex-1 p-2 text-sm border rounded"
          />
          <button
            onClick={testTranslation}
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
          >
            Test
          </button>
        </div>
        
        {testResult !== null && (
          <div className="mt-2 p-2 bg-gray-100 rounded text-sm break-words">
            <div className="font-medium">Result:</div>
            <div className={testResult === testKey ? 'text-red-500' : 'text-green-500'}>
              {testResult}
            </div>
          </div>
        )}
      </div>
      
      <div className="text-xs text-gray-500">
        This debugger is only visible in development mode.
      </div>
    </div>
  )
}

export default TranslationDebugger 