'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useAuth } from '@/app/dashboard/auth-context'
import { ArrowLeft, Download, Receipt, FileText, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

// Dados de exemplo para faturas
const mockInvoices = [
  {
    id: 'INV-001',
    date: '15/04/2023',
    amount: 'R$ 89,90',
    status: 'paid',
    plan: 'Premium',
    period: '15/04/2023 - 14/05/2023'
  },
  {
    id: 'INV-002',
    date: '15/05/2023',
    amount: 'R$ 89,90',
    status: 'paid',
    plan: 'Premium',
    period: '15/05/2023 - 14/06/2023'
  },
  {
    id: 'INV-003',
    date: '15/06/2023',
    amount: 'R$ 89,90',
    status: 'pending',
    plan: 'Premium',
    period: '15/06/2023 - 14/07/2023'
  }
]

export default function FaturasPage() {
  const { currentUser } = useAuth()
  const router = useRouter()
  const [invoices, setInvoices] = useState(mockInvoices)
  const [isLoading, setIsLoading] = useState(true)

  // Verificar se o usuário está logado
  useEffect(() => {
    if (!currentUser) {
      router.push('/login')
    } else {
      // Simular carregamento de dados
      setTimeout(() => {
        setIsLoading(false)
      }, 800)
    }
  }, [currentUser, router])

  if (!currentUser || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Cabeçalho com botão de voltar */}
        <div className="flex items-center mb-8">
          <Link href="/planos" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors mr-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-purple-50 transition-all duration-200">
              <ArrowLeft size={20} />
            </div>
          </Link>
          <h1 className="text-3xl font-light text-gray-900 tracking-tight">
            Minhas Faturas
          </h1>
        </div>

        {/* Lista de faturas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8"
        >
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center text-gray-700">
              <Receipt size={20} className="mr-2" />
              <h2 className="text-xl font-medium">Histórico de pagamentos</h2>
            </div>
          </div>

          {invoices.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <FileText size={48} className="mx-auto mb-4 text-gray-300" />
              <p>Você ainda não possui faturas.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {invoices.map((invoice, index) => (
                <motion.div
                  key={invoice.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-900">{invoice.id}</span>
                        <span className="ml-3 text-sm text-gray-500">{invoice.date}</span>
                        {invoice.status === 'paid' ? (
                          <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <CheckCircle size={12} className="mr-1" />
                            Pago
                          </span>
                        ) : (
                          <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            <AlertCircle size={12} className="mr-1" />
                            Pendente
                          </span>
                        )}
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        Plano {invoice.plan} • Período: {invoice.period}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center">
                      <span className="text-lg font-medium text-gray-900 mr-4">
                        {invoice.amount}
                      </span>
                      <button className="flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors">
                        <Download size={16} className="mr-1" />
                        PDF
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Informações de pagamento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center text-gray-700">
              <CreditCard size={20} className="mr-2" />
              <h2 className="text-xl font-medium">Método de pagamento</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md mr-4"></div>
              <div>
                <div className="font-medium text-gray-900">Cartão de crédito terminando em 4242</div>
                <div className="text-sm text-gray-500">Expira em 12/2025</div>
              </div>
            </div>
            
            <div className="mt-6 flex">
              <button className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors">
                Atualizar método de pagamento
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Componente de ícone de cartão de crédito
function CreditCard({ size = 24, className = '' }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
      <line x1="1" y1="10" x2="23" y2="10"></line>
    </svg>
  )
} 