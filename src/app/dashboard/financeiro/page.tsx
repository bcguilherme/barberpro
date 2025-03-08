'use client'

import { motion } from 'framer-motion'
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  CreditCard,
  Calendar,
  Filter,
  Download,
  Search
} from 'lucide-react'

// Dados mockados para demonstração
const financialStats = [
  {
    name: 'Receita Total',
    value: 'R$ 12.450,00',
    change: '+15%',
    trend: 'up',
    color: 'from-green-600 to-emerald-600',
    description: 'Total de receitas no período selecionado'
  },
  {
    name: 'Despesas',
    value: 'R$ 3.850,00',
    change: '+5%',
    trend: 'up',
    color: 'from-red-600 to-pink-600',
    description: 'Total de despesas no período selecionado'
  },
  {
    name: 'Lucro Líquido',
    value: 'R$ 8.600,00',
    change: '+20%',
    trend: 'up',
    color: 'from-blue-600 to-indigo-600',
    description: 'Lucro após todas as despesas'
  },
  {
    name: 'Ticket Médio',
    value: 'R$ 75,00',
    change: '+8%',
    trend: 'up',
    color: 'from-purple-600 to-indigo-600',
    description: 'Valor médio por atendimento'
  }
]

const recentTransactions = [
  {
    id: 1,
    type: 'income',
    description: 'Corte + Barba - João Silva',
    date: '20/02/2024',
    value: 'R$ 75,00',
    paymentMethod: 'Cartão de Crédito',
    category: 'Serviços'
  },
  {
    id: 2,
    type: 'expense',
    description: 'Produtos de Barbearia',
    date: '20/02/2024',
    value: 'R$ 350,00',
    paymentMethod: 'Pix',
    category: 'Produtos'
  },
  {
    id: 3,
    type: 'income',
    description: 'Corte - Pedro Santos',
    date: '20/02/2024',
    value: 'R$ 45,00',
    paymentMethod: 'Dinheiro',
    category: 'Serviços'
  },
  {
    id: 4,
    type: 'income',
    description: 'Barba - Carlos Oliveira',
    date: '20/02/2024',
    value: 'R$ 35,00',
    paymentMethod: 'Cartão de Débito',
    category: 'Serviços'
  }
]

export default function Financial() {
  return (
    <div className="space-y-8">
      {/* Header com Filtros */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Financeiro</h1>
        
        <div className="flex flex-wrap items-center gap-4">
          {/* Período */}
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
            <Calendar className="h-5 w-5 text-gray-500" />
            <select 
              className="text-sm text-gray-600 bg-transparent focus:outline-none"
              aria-label="Selecionar período"
            >
              <option>Fevereiro 2024</option>
              <option>Janeiro 2024</option>
              <option>Dezembro 2023</option>
            </select>
          </div>

          {/* Busca */}
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar transação..."
              className="text-sm text-gray-600 bg-transparent focus:outline-none w-40"
              aria-label="Buscar transação"
            />
          </div>

          {/* Filtros */}
          <button 
            className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50"
            aria-label="Abrir filtros avançados"
          >
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="text-sm text-gray-600">Filtros</span>
          </button>

          {/* Exportar */}
          <button 
            className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-purple-700"
            aria-label="Exportar relatório"
          >
            <Download className="h-5 w-5" />
            <span className="text-sm">Exportar</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {financialStats.map((stat) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm"
            role="article"
            aria-label={stat.description}
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-r opacity-10" />
            <div className={`inline-flex rounded-lg bg-gradient-to-r ${stat.color} p-3 text-white shadow-lg`}>
              {stat.trend === 'up' ? (
                <TrendingUp className="h-6 w-6" aria-hidden="true" />
              ) : (
                <TrendingDown className="h-6 w-6" aria-hidden="true" />
              )}
            </div>
            <p className="mt-4 text-sm font-medium text-gray-500">{stat.name}</p>
            <div className="flex items-baseline space-x-2">
              <p className="mt-2 text-2xl font-semibold text-gray-900">{stat.value}</p>
              <span className={`text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Transações Recentes</h2>
          <button 
            className="text-sm text-purple-600 hover:text-purple-700"
            aria-label="Ver todas as transações"
          >
            Ver todas
          </button>
        </div>

        <div className="space-y-4" role="feed" aria-label="Lista de transações recentes">
          {recentTransactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              role="article"
              aria-label={`Transação: ${transaction.description}`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full ${
                    transaction.type === 'income' 
                      ? 'bg-green-100' 
                      : 'bg-red-100'
                  } flex items-center justify-center`}>
                    {transaction.type === 'income' ? (
                      <TrendingUp className={`w-5 h-5 ${
                        transaction.type === 'income' 
                          ? 'text-green-600' 
                          : 'text-red-600'
                      }`} aria-hidden="true" />
                    ) : (
                      <TrendingDown className={`w-5 h-5 ${
                        transaction.type === 'income' 
                          ? 'text-green-600' 
                          : 'text-red-600'
                      }`} aria-hidden="true" />
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {transaction.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" aria-hidden="true" />
                    <span className="text-sm text-gray-500">{transaction.date}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{transaction.category}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-4 h-4 text-gray-400" aria-hidden="true" />
                  <span className="text-sm text-gray-600">
                    {transaction.paymentMethod}
                  </span>
                </div>
                <div className={`text-sm font-medium ${
                  transaction.type === 'income' 
                    ? 'text-green-600' 
                    : 'text-red-600'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'}{transaction.value}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 