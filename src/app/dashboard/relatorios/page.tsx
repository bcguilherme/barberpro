'use client'

import { useState } from 'react'
import { Calendar, DollarSign, TrendingUp, Users, Download, Filter } from 'lucide-react'
import { motion } from 'framer-motion'

const metrics = [
  {
    name: 'Faturamento Total',
    value: 'R$ 15.850,00',
    change: '+12%',
    changeType: 'increase',
    icon: DollarSign
  },
  {
    name: 'Total de Agendamentos',
    value: '245',
    change: '+18%',
    changeType: 'increase',
    icon: Calendar
  },
  {
    name: 'Novos Clientes',
    value: '38',
    change: '+5%',
    changeType: 'increase',
    icon: Users
  },
  {
    name: 'Taxa de Ocupação',
    value: '82%',
    change: '-3%',
    changeType: 'decrease',
    icon: TrendingUp
  }
]

const topServices = [
  { name: 'Corte + Barba', value: 98, percentage: 40 },
  { name: 'Corte', value: 75, percentage: 30 },
  { name: 'Barba', value: 45, percentage: 18 },
  { name: 'Pigmentação', value: 30, percentage: 12 }
]

const dailyRevenue = [
  { date: '15/02', value: 850 },
  { date: '16/02', value: 950 },
  { date: '17/02', value: 1200 },
  { date: '18/02', value: 800 },
  { date: '19/02', value: 1100 },
  { date: '20/02', value: 950 },
  { date: '21/02', value: 1300 }
]

export default function Reports() {
  const [dateRange, setDateRange] = useState('week')

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Relatórios</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="week">Última Semana</option>
              <option value="month">Último Mês</option>
              <option value="year">Último Ano</option>
            </select>
          </div>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <metric.icon className="h-8 w-8 text-purple-600" />
              <span
                className={`text-sm font-medium ${
                  metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {metric.change}
              </span>
            </div>
            <p className="mt-4 text-2xl font-semibold text-gray-900">{metric.value}</p>
            <p className="mt-1 text-sm text-gray-500">{metric.name}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Faturamento Diário</h2>
          <div className="h-64">
            <div className="flex h-full items-end space-x-2">
              {dailyRevenue.map((day, index) => (
                <div key={day.date} className="flex-1 flex flex-col items-center">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(day.value / 1300) * 100}%` }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-full bg-purple-600 rounded-t-lg"
                  />
                  <div className="mt-2 text-xs text-gray-500">{day.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Services */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Serviços Mais Populares</h2>
          <div className="space-y-4">
            {topServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-500">{service.name}</span>
                  <span className="text-sm font-medium text-gray-900">{service.value}</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${service.percentage}%` }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full bg-purple-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 