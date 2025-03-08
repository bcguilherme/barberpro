'use client'

import { useState } from 'react'
import { User, Clock, Scissors, CreditCard, Bell, Shield, Save } from 'lucide-react'
import { motion } from 'framer-motion'

const tabs = [
  { name: 'Perfil', icon: User },
  { name: 'Horários', icon: Clock },
  { name: 'Serviços', icon: Scissors },
  { name: 'Pagamentos', icon: CreditCard },
  { name: 'Notificações', icon: Bell },
  { name: 'Segurança', icon: Shield }
]

const workingHours = [
  { day: 'Segunda', start: '09:00', end: '19:00', isOpen: true },
  { day: 'Terça', start: '09:00', end: '19:00', isOpen: true },
  { day: 'Quarta', start: '09:00', end: '19:00', isOpen: true },
  { day: 'Quinta', start: '09:00', end: '19:00', isOpen: true },
  { day: 'Sexta', start: '09:00', end: '19:00', isOpen: true },
  { day: 'Sábado', start: '09:00', end: '18:00', isOpen: true },
  { day: 'Domingo', start: '09:00', end: '19:00', isOpen: false }
]

const services = [
  { name: 'Corte', duration: '30', price: '45.00', isActive: true },
  { name: 'Barba', duration: '30', price: '35.00', isActive: true },
  { name: 'Corte + Barba', duration: '60', price: '75.00', isActive: true },
  { name: 'Pigmentação', duration: '45', price: '90.00', isActive: true }
]

export default function Settings() {
  const [activeTab, setActiveTab] = useState('Perfil')

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700">
          <Save className="w-4 h-4 mr-2" />
          Salvar Alterações
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.name
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="h-5 w-5 mr-2" />
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-sm">
        {activeTab === 'Perfil' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 space-y-6"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome da Barbearia
                </label>
                <input
                  type="text"
                  defaultValue="BarberPro"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  defaultValue="contato@barberpro.pt"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Endereço
                </label>
                <input
                  type="text"
                  defaultValue="Rua Example, 123"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'Horários' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6"
          >
            <div className="space-y-4">
              {workingHours.map((day) => (
                <div key={day.day} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      defaultChecked={day.isOpen}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-900">{day.day}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input
                      type="time"
                      defaultValue={day.start}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <span className="text-gray-500">até</span>
                    <input
                      type="time"
                      defaultValue={day.end}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'Serviços' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6"
          >
            <div className="space-y-4">
              {services.map((service) => (
                <div key={service.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      defaultChecked={service.isActive}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-900">{service.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div>
                      <input
                        type="number"
                        defaultValue={service.duration}
                        className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <span className="ml-2 text-sm text-gray-500">min</span>
                    </div>
                    <div>
                      <span className="mr-2 text-sm text-gray-500">R$</span>
                      <input
                        type="number"
                        step="0.01"
                        defaultValue={service.price}
                        className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
} 