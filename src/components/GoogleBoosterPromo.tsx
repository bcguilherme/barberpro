'use client'

import { ThumbsUp, Star, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

export function GoogleBoosterPromo() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200 shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                <div className="relative">
                  <div className="w-40 h-40 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <ThumbsUp className="h-20 w-20 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    EXCLUSIVO
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <div className="flex items-center mb-2">
                  <h2 className="text-3xl font-bold text-yellow-800">Google Booster Review</h2>
                  <div className="ml-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500" />
                    ))}
                  </div>
                </div>
                
                <p className="text-xl text-yellow-700 mb-6">
                  Aumente suas avaliações 5 estrelas no Google e destaque-se da concorrência!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-yellow-700">Aumento de até 300% nas avaliações positivas</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-yellow-700">Solicitações automáticas após atendimentos</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-yellow-700">Monitoramento e resposta a avaliações</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-yellow-700">Destaque nos resultados de pesquisa do Google</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/cadastro" 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  >
                    Experimente Grátis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    href="/como-funciona" 
                    className="inline-flex items-center px-6 py-3 border border-yellow-300 text-base font-medium rounded-md text-yellow-700 bg-white hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  >
                    Saiba Mais
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="bg-yellow-100 border-t border-yellow-200 p-6">
            <div className="flex items-start max-w-3xl mx-auto">
              <div className="flex-shrink-0 mr-4">
                <div className="h-12 w-12 rounded-full bg-yellow-200 flex items-center justify-center">
                  <span className="text-yellow-800 font-bold">CS</span>
                </div>
              </div>
              <div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500" />
                  ))}
                </div>
                <p className="text-yellow-800 italic">
                  "Desde que comecei a usar o Google Booster Review, minhas avaliações 5 estrelas aumentaram em mais de 200%. Isso trouxe muitos clientes novos para minha barbearia!"
                </p>
                <p className="mt-2 text-sm text-yellow-700 font-medium">
                  Carlos Silva, Proprietário da Barbearia Vintage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 