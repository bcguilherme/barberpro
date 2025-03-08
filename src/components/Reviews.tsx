'use client'

import { useI18n } from '@/hooks/useI18n'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

// Dados simulados de avaliações
const reviews = [
  {
    id: 1,
    name: 'Carlos Silva',
    role: 'Proprietário da Barbearia Vintage',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5,
    text: 'O BarberPro transformou completamente a gestão da minha barbearia. Consegui aumentar meu faturamento em 30% no primeiro mês de uso. A interface é intuitiva e o suporte é excelente!',
    date: '2 semanas atrás'
  },
  {
    id: 2,
    name: 'Amanda Oliveira',
    role: 'Gerente do Salão Beleza Pura',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    rating: 5,
    text: 'Estou impressionada com a facilidade de uso do sistema. Meus clientes adoram poder agendar online e receber lembretes automáticos. O controle financeiro me ajudou a identificar onde estávamos perdendo dinheiro.',
    date: '1 mês atrás'
  },
  {
    id: 3,
    name: 'Ricardo Mendes',
    role: 'Barbeiro Autônomo',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    rating: 4,
    text: 'Como profissional autônomo, o plano básico atende perfeitamente minhas necessidades. O sistema é rápido e a integração com o Google Agenda é perfeita. Recomendo para todos os barbeiros!',
    date: '3 meses atrás'
  },
  {
    id: 4,
    name: 'Juliana Costa',
    role: 'Proprietária do Studio JC',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    rating: 5,
    text: 'O programa de fidelidade do plano premium foi um diferencial para o meu negócio. Meus clientes voltam com mais frequência e o controle de estoque me ajuda a não perder vendas por falta de produtos.',
    date: '2 meses atrás'
  },
  {
    id: 5,
    name: 'Fernando Gomes',
    role: 'Gerente da Barbearia Elite',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    rating: 5,
    text: 'Os relatórios avançados me dão insights valiosos sobre o desempenho do meu negócio. A interface é moderna e o suporte responde rapidamente. Vale cada centavo!',
    date: '1 semana atrás'
  }
]

export function Reviews() {
  const { t } = useI18n()
  
  // Renderizar estrelas com base na avaliação
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {t('reviews.title')}
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            {t('reviews.subtitle')}
          </p>
          
          {/* Avaliação média */}
          <div className="mt-8 flex flex-col items-center">
            <div className="flex items-center mb-2">
              {renderStars(5)}
            </div>
            <div className="text-3xl font-bold text-gray-900">4.9/5</div>
            <div className="mt-1 flex items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google" className="h-4 mr-2" />
              <span className="text-sm text-gray-600">Baseado em 1.248 avaliações</span>
            </div>
          </div>
        </motion.div>
        
        {/* Grid de avaliações */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-100 relative"
            >
              <div className="absolute -top-3 -left-3 bg-purple-100 rounded-full p-2">
                <Quote className="h-5 w-5 text-purple-600" />
              </div>
              
              <div className="flex items-center mb-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="h-12 w-12 rounded-full object-cover mr-4 border-2 border-purple-100"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {renderStars(review.rating)}
              </div>
              
              <p className="text-gray-600 mb-3">{review.text}</p>
              
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500">{review.date}</span>
                <div className="flex items-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google" className="h-4" />
                  <span className="text-xs text-gray-500 ml-1">Google Reviews</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA para deixar avaliação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-white border border-purple-200 rounded-lg text-purple-600 font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:bg-purple-50"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google" className="h-5 mr-2" />
            Deixe sua avaliação no Google
          </a>
        </motion.div>
      </div>
    </section>
  )
} 