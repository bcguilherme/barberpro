'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

type PinSize = 'sm' | 'md' | 'lg'

type Location = {
  id: number
  x: string
  y: string
  size: PinSize
  pulse: boolean
}

export function RegionalMap() {
  // Pontos de destaque no mapa (simulando barbearias)
  const locations: Location[] = [
    { id: 1, x: '20%', y: '30%', size: 'lg', pulse: true },
    { id: 2, x: '35%', y: '45%', size: 'md', pulse: false },
    { id: 3, x: '50%', y: '25%', size: 'sm', pulse: false },
    { id: 4, x: '65%', y: '60%', size: 'md', pulse: true },
    { id: 5, x: '80%', y: '40%', size: 'sm', pulse: false },
    { id: 6, x: '40%', y: '70%', size: 'sm', pulse: false },
    { id: 7, x: '75%', y: '20%', size: 'md', pulse: false },
  ]

  // Tamanhos dos pinos
  const pinSizes: Record<PinSize, { pin: string; icon: string }> = {
    sm: { pin: 'w-3 h-3', icon: 'w-2 h-2' },
    md: { pin: 'w-4 h-4', icon: 'w-3 h-3' },
    lg: { pin: 'w-6 h-6', icon: 'w-4 h-4' }
  }

  return (
    <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl overflow-hidden border border-indigo-100 shadow-sm">
      {/* Elementos de mapa estilizados */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-indigo-300 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-300 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-blue-300 rounded-full"></div>
        
        {/* Linhas de grade */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
          {[...Array(7)].map((_, i) => (
            <div key={`v-${i}`} className="absolute left-0 right-0 h-px bg-indigo-200" style={{ top: `${i * 16.66}%` }}></div>
          ))}
          {[...Array(7)].map((_, i) => (
            <div key={`h-${i}`} className="absolute top-0 bottom-0 w-px bg-indigo-200" style={{ left: `${i * 16.66}%` }}></div>
          ))}
        </div>
      </div>
      
      {/* Ponto central destacado (sua barbearia) */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div 
          className="relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute -inset-4 bg-purple-500 rounded-full opacity-20 animate-pulse-soft"></div>
          <div className="relative w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg z-10">
            <MapPin size={16} />
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
            Sua Barbearia
          </div>
        </motion.div>
      </div>
      
      {/* Outros pontos no mapa (outras barbearias) */}
      {locations.map((location) => (
        <div 
          key={location.id}
          className="absolute"
          style={{ left: location.x, top: location.y }}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 + location.id * 0.1 }}
          >
            <div className={`${location.pulse ? 'animate-pulse-soft' : ''} absolute -inset-2 bg-indigo-400 rounded-full opacity-20`}></div>
            <div className={`${pinSizes[location.size].pin} bg-indigo-400 rounded-full flex items-center justify-center`}>
              <MapPin className={`${pinSizes[location.size].icon} text-white`} />
            </div>
          </motion.div>
        </div>
      ))}
      
      {/* Raio de alcance */}
      <motion.div 
        className="absolute left-1/2 top-1/2 w-64 h-64 border-2 border-dashed border-purple-400 rounded-full opacity-30"
        style={{ transform: 'translate(-50%, -50%)' }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>
      
      {/* Legenda */}
      <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm rounded-lg p-2 text-xs">
        <div className="flex items-center gap-1 mb-1">
          <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
          <span>Sua barbearia</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
          <span>Outras barbearias</span>
        </div>
      </div>
    </div>
  )
} 