'use client'

import { useEffect } from 'react'
import './globals.css'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log do erro para análise
    console.error('Erro global na aplicação:', error)
  }, [error])

  return (
    <html lang="pt-BR">
      <head>
        <title>Erro - Softaew</title>
      </head>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 text-center">
            <h1 className="text-3xl font-bold text-red-600">Erro no Sistema</h1>
            <p className="mt-2 text-gray-600">
              Ocorreu um erro inesperado. Por favor, tente novamente.
            </p>
            <div className="mt-5">
              <button
                onClick={() => reset()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Tentar Novamente
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
} 