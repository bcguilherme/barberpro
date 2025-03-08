'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Star, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export function RegionalPromotion() {
  const { language } = useLanguage()

  // Textos por idioma
  const texts = {
    pt: {
      title: 'Sistema exclusivo de divulgação para Barbearias na região!',
      subtitle: 'Com o Hero, sua barbearia recebe mais visibilidade e atrai novos clientes! Nosso sistema promove seu negócio de forma inteligente, destacando seus serviços e facilitando o agendamento.',
      feature1: 'Apareça para clientes próximos',
      feature2: 'Mais agendamentos, mais faturamento',
      feature3: 'Destaque-se da concorrência',
      cta: 'Cadastre-se agora e veja sua barbearia crescer!'
    },
    en: {
      title: 'Exclusive promotion system for Barbershops in your region!',
      subtitle: 'With Hero, your barbershop gets more visibility and attracts new customers! Our system intelligently promotes your business, highlighting your services and making scheduling easier.',
      feature1: 'Appear to nearby customers',
      feature2: 'More appointments, more revenue',
      feature3: 'Stand out from the competition',
      cta: 'Sign up now and watch your barbershop grow!'
    }
  }

  const content = texts[language] || texts.pt

  return (
    <motion.div 
      className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl overflow-hidden shadow-xl relative w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      {/* Ícone de barbearia */}
      <div className="absolute top-4 right-4 text-white opacity-10">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H7C8.10457 21 9 20.1046 9 19V5C9 3.89543 8.10457 3 7 3Z" stroke="currentColor" strokeWidth="2" />
          <path d="M15 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H15C13.8954 21 13 20.1046 13 19V5C13 3.89543 13.8954 3 15 3Z" stroke="currentColor" strokeWidth="2" />
          <path d="M9 7H13" stroke="currentColor" strokeWidth="2" />
          <path d="M9 12H13" stroke="currentColor" strokeWidth="2" />
          <path d="M9 17H13" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="p-6 sm:p-8">
        {/* Título com emoji */}
        <div className="flex items-start gap-2 mb-5">
          <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-tight max-w-[75%]">{content.title}</h3>
          <span className="text-xl sm:text-2xl mt-1">💈</span>
        </div>
        
        {/* Subtítulo */}
        <p className="text-sm sm:text-base text-indigo-100 mb-10 max-w-[95%] leading-relaxed">{content.subtitle}</p>
        
        {/* Recursos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-start gap-2">
            <div className="bg-purple-500 rounded-full p-2 text-white">
              <MapPin size={18} />
            </div>
            <div>
              <p className="font-semibold text-white text-sm">{content.feature1}</p>
              <p className="text-xs text-indigo-200 mt-1">Geolocalização inteligente</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-start gap-2">
            <div className="bg-purple-500 rounded-full p-2 text-white">
              <Calendar size={18} />
            </div>
            <div>
              <p className="font-semibold text-white text-sm">{content.feature2}</p>
              <p className="text-xs text-indigo-200 mt-1">Sistema de agendamento otimizado</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-start gap-2">
            <div className="bg-purple-500 rounded-full p-2 text-white">
              <Star size={18} />
            </div>
            <div>
              <p className="font-semibold text-white text-sm">{content.feature3}</p>
              <p className="text-xs text-indigo-200 mt-1">Perfil destacado na busca</p>
            </div>
          </div>
        </div>
        
        {/* Estatísticas */}
        <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 rounded-xl p-4 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-green-400" size={18} />
            <h4 className="font-bold text-white text-sm">Resultados comprovados</h4>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-xl md:text-2xl font-bold text-white">+45%</p>
              <p className="text-xs text-indigo-200">Novos clientes</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold text-white">+60%</p>
              <p className="text-xs text-indigo-200">Agendamentos</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold text-white">+38%</p>
              <p className="text-xs text-indigo-200">Faturamento</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/cadastro" 
            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-gray-900 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-sm"
          >
            {content.cta} 🚀
          </Link>
        </div>
      </div>
    </motion.div>
  )
} 