'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/hooks/useI18n'

export function Stats() {
  const { t } = useI18n()
  
  return (
    <section className="bg-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">1000+</div>
            <div className="mt-2 text-base text-gray-600">{t('stats.barbershops')}</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">50.000+</div>
            <div className="mt-2 text-base text-gray-600">{t('stats.appointments')}</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">10.000+</div>
            <div className="mt-2 text-base text-gray-600">{t('stats.clients')}</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">98%</div>
            <div className="mt-2 text-base text-gray-600">{t('stats.satisfaction')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 