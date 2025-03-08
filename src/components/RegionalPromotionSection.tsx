'use client'

import { motion } from 'framer-motion'
import { RegionalPromotion } from './RegionalPromotion'
import { RegionalMap } from './RegionalMap'
import { useI18n } from '@/hooks/useI18n'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'

export function RegionalPromotionSection() {
  const { t } = useI18n()
  const { language } = useLanguage()
  
  // Textos por idioma
  const texts = {
    pt: {
      title: 'Marketing Local para Barbearias',
      subtitle: 'Aumente sua visibilidade na região e atraia mais clientes para o seu negócio',
      testimonial: '"Desde que comecei a usar o sistema de divulgação regional do Hero, minha barbearia tem recebido muito mais clientes novos. O melhor é que são pessoas da região que continuam voltando. Meu faturamento aumentou mais de 40% em apenas 3 meses!"',
      author: 'Carlos Oliveira',
      business: 'Barbearia Vintage, Lisboa',
      timeAgo: 'há 2 semanas',
      mapTitle: 'Alcance regional inteligente',
      mapDescription: 'Nosso sistema identifica clientes próximos à sua barbearia e direciona campanhas específicas para atrair mais agendamentos'
    },
    en: {
      title: 'Local Marketing for Barbershops',
      subtitle: 'Increase your visibility in the region and attract more customers to your business',
      testimonial: '"Since I started using Hero\'s regional promotion system, my barbershop has been receiving many more new customers. The best part is that they are people from the region who keep coming back. My revenue increased by more than 40% in just 3 months!"',
      author: 'Charles Oliver',
      business: 'Vintage Barbershop, Lisbon',
      timeAgo: '2 weeks ago',
      mapTitle: 'Intelligent regional reach',
      mapDescription: 'Our system identifies customers near your barbershop and directs specific campaigns to attract more appointments'
    }
  }
  
  const content = texts[language] || texts.pt
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              {content.title}
            </h2>
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wider">
              {language === 'pt' ? 'Exclusivo' : 'Exclusive'}
            </span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <RegionalPromotion />
            </div>
          </div>
          
          <div className="flex flex-col lg:justify-start">
            <motion.div
              className="mb-4 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">{content.mapTitle}</h3>
              <p className="text-gray-600 mb-4">{content.mapDescription}</p>
            </motion.div>
            
            <div className="max-w-md">
              <RegionalMap />
            </div>
            
            <motion.div
              className="mt-4 text-center max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                href="/como-funciona" 
                className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 font-medium"
              >
                <span>Saiba como funciona</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Depoimentos */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto px-4 lg:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🧔</span>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">{content.timeAgo}</span>
                </div>
                <p className="text-gray-700 italic mb-3">
                  {content.testimonial}
                </p>
                <div>
                  <p className="font-semibold">{content.author}</p>
                  <p className="text-sm text-gray-500">{content.business}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 