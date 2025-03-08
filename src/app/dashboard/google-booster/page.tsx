'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ThumbsUp, Star, Check, ArrowRight, Users, TrendingUp, Award, BarChart } from 'lucide-react'

export default function GoogleBoosterPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'reviews' | 'settings'>('overview')
  
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Google Booster Review</h1>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          RECURSO PREMIUM
        </span>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'overview'
                ? 'border-yellow-500 text-yellow-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Visão Geral
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'reviews'
                ? 'border-yellow-500 text-yellow-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Minhas Avaliações
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'settings'
                ? 'border-yellow-500 text-yellow-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Configurações
          </button>
        </nav>
      </div>
      
      {/* Content */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-8 border border-yellow-200 shadow-md">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <ThumbsUp className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h2 className="text-2xl font-bold text-yellow-800 mb-4">Aumente suas avaliações 5 estrelas no Google</h2>
                <p className="text-yellow-700 mb-6">
                  Nosso sistema exclusivo de Google Booster Review ajuda sua barbearia a conseguir mais avaliações positivas no Google, aumentando sua visibilidade e atraindo novos clientes.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                    Ativar Campanhas Automáticas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-yellow-300 text-sm font-medium rounded-md text-yellow-700 bg-white hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                    Ver Tutorial
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Avaliações Totais</h3>
                <Star className="h-5 w-5 text-yellow-400" />
              </div>
              <p className="text-3xl font-bold text-gray-900">48</p>
              <p className="text-sm text-green-600 mt-2 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                +12% este mês
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Avaliações 5 Estrelas</h3>
                <Star className="h-5 w-5 text-yellow-400" />
              </div>
              <p className="text-3xl font-bold text-gray-900">42</p>
              <p className="text-sm text-green-600 mt-2 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                +15% este mês
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Classificação Média</h3>
                <Star className="h-5 w-5 text-yellow-400" />
              </div>
              <p className="text-3xl font-bold text-gray-900">4.8</p>
              <p className="text-sm text-green-600 mt-2 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                +0.3 este mês
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Novos Clientes</h3>
                <Users className="h-5 w-5 text-blue-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">18</p>
              <p className="text-sm text-green-600 mt-2 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                +22% este mês
              </p>
            </div>
          </div>
          
          {/* Features */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Como funciona o Google Booster Review</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Solicitações Automáticas</h4>
                <p className="text-gray-600">
                  Após cada atendimento, o sistema envia automaticamente uma solicitação de avaliação para o cliente.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Envio por SMS e e-mail</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Timing perfeito para maior conversão</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-yellow-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Monitoramento Contínuo</h4>
                <p className="text-gray-600">
                  Acompanhe todas as avaliações recebidas e responda rapidamente a qualquer feedback negativo.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Alertas em tempo real</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Modelos de resposta pré-definidos</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-yellow-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Otimização de SEO Local</h4>
                <p className="text-gray-600">
                  Melhore seu posicionamento nos resultados de pesquisa locais do Google.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Maior visibilidade no Google Maps</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Destaque nos resultados de "barbearia perto de mim"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">O que nossos clientes dizem</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-700 font-bold">CS</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Carlos Silva</h4>
                    <p className="text-sm text-gray-500">Barbearia Vintage</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">
                  "Desde que comecei a usar o Google Booster Review, minhas avaliações 5 estrelas aumentaram em mais de 200%. Isso trouxe muitos clientes novos para minha barbearia!"
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-700 font-bold">MS</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Mariana Santos</h4>
                    <p className="text-sm text-gray-500">Salão Elite</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">
                  "O sistema é incrível! Agora apareço em primeiro lugar quando alguém busca por 'salão de beleza' na minha região. O retorno sobre o investimento foi muito rápido."
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'reviews' && (
        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Suas Avaliações Recentes</h3>
          
          <div className="space-y-6">
            {/* Simulação de avaliações */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <span className="text-gray-700 font-bold">{String.fromCharCode(65 + i)}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">Cliente {i + 1}</h4>
                      <span className="text-sm text-gray-500">{`${Math.floor(Math.random() * 10) + 1} dias atrás`}</span>
                    </div>
                    <div className="flex my-2">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className={`h-4 w-4 ${j < 5 - (i % 2) ? 'text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      {[
                        "Excelente atendimento! Recomendo a todos.",
                        "Profissionais muito qualificados e ambiente agradável.",
                        "Melhor barbearia da região, sempre saio satisfeito.",
                        "Ótimo custo-benefício e atendimento de primeira.",
                        "Ambiente moderno e confortável, voltarei com certeza."
                      ][i]}
                    </p>
                    
                    {/* Resposta */}
                    {i % 2 === 0 && (
                      <div className="mt-3 pl-4 border-l-2 border-gray-200">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">Sua resposta:</span>
                          <span className="ml-2 text-xs text-gray-500">{`${Math.floor(Math.random() * 5) + 1} dias atrás`}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Obrigado pelo feedback! Ficamos muito felizes em saber que gostou do nosso serviço. Esperamos vê-lo novamente em breve!
                        </p>
                      </div>
                    )}
                    
                    {/* Botão de resposta */}
                    {i % 2 !== 0 && (
                      <button className="mt-3 text-sm font-medium text-yellow-600 hover:text-yellow-700">
                        Responder
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-center">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Ver todas as avaliações
            </button>
          </div>
        </div>
      )}
      
      {activeTab === 'settings' && (
        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Configurações do Google Booster</h3>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Configurações de Solicitação</h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium text-gray-800">Enviar solicitação após atendimento</h5>
                    <p className="text-sm text-gray-500">Enviar automaticamente uma solicitação de avaliação após cada atendimento</p>
                  </div>
                  <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full bg-green-500">
                    <label className="absolute left-0 w-6 h-6 mb-2 transition duration-100 ease-in-out transform bg-white border-2 border-green-500 rounded-full cursor-pointer translate-x-full" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium text-gray-800">Atraso na solicitação</h5>
                    <p className="text-sm text-gray-500">Tempo de espera após o atendimento para enviar a solicitação</p>
                  </div>
                  <select className="block w-32 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md">
                    <option>1 hora</option>
                    <option>3 horas</option>
                    <option selected>24 horas</option>
                    <option>2 dias</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium text-gray-800">Canais de envio</h5>
                    <p className="text-sm text-gray-500">Métodos para enviar solicitações de avaliação</p>
                  </div>
                  <div className="space-x-4">
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox h-5 w-5 text-yellow-600" checked />
                      <span className="ml-2 text-gray-700">Email</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox h-5 w-5 text-yellow-600" checked />
                      <span className="ml-2 text-gray-700">SMS</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Personalização</h4>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem de solicitação
                  </label>
                  <textarea
                    rows={3}
                    className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue="Olá! Obrigado por escolher nossa barbearia. Sua opinião é muito importante para nós. Poderia nos avaliar no Google? Leva apenas alguns segundos."
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Link para sua página no Google
                  </label>
                  <input
                    type="text"
                    className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue="https://g.page/r/CXX_XXXXX_XXXXX/review"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                Salvar configurações
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 