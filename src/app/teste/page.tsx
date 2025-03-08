'use client'

import React from 'react'

export default function TestePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-purple-600 mb-4">Página de Teste</h1>
      <p className="text-lg text-gray-700 mb-8">
        Se você está vendo esta página, a aplicação está funcionando corretamente.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((num) => (
          <div 
            key={num}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <h2 className="text-xl font-semibold mb-2">Card {num}</h2>
            <p className="text-gray-600">
              Este é um card de teste para verificar o funcionamento do Tailwind CSS.
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a 
          href="/" 
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
        >
          Voltar para Home
        </a>
      </div>
    </div>
  )
} 