'use client'

import { useState } from 'react'
import { Clock, User, Scissors } from 'lucide-react'
import { motion } from 'framer-motion'
import Calendar from '@/components/Calendar'
import NewAppointmentModal from '@/components/NewAppointmentModal'

const appointments = [
  {
    id: 1,
    client: 'João Silva',
    service: 'Corte + Barba',
    date: '2024-02-20',
    time: '14:00',
    duration: '1h',
    value: 'R$ 75,00',
    status: 'confirmed'
  },
  {
    id: 2,
    client: 'Pedro Santos',
    service: 'Corte',
    date: '2024-02-20',
    time: '15:00',
    duration: '30min',
    value: 'R$ 45,00',
    status: 'pending'
  }
]

export default function Appointments() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
  }

  const handleNewAppointment = (data: any) => {
    console.log('New appointment:', data)
    // Aqui você implementaria a lógica para salvar o novo agendamento
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Agendamentos</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          Novo Agendamento
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <Calendar onDateSelect={handleDateSelect} selectedDate={selectedDate} />
          </div>
        </div>

        {/* Appointments List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Agendamentos do Dia</h2>
              <div className="text-sm text-gray-500">
                {selectedDate.toLocaleDateString('pt-BR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>

            <div className="space-y-4">
              {appointments.map((appointment) => (
                <motion.div
                  key={appointment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <User className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{appointment.client}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Scissors className="w-4 h-4" />
                        <span>{appointment.service}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{appointment.time}</span>
                    </div>
                    <div className="text-sm text-gray-600">{appointment.duration}</div>
                    <div className="text-sm font-medium text-gray-900">{appointment.value}</div>
                    <div
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        appointment.status === 'confirmed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {appointment.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                    </div>
                  </div>
                </motion.div>
              ))}

              {appointments.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">Nenhum agendamento para este dia</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <NewAppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewAppointment}
      />
    </div>
  )
} 