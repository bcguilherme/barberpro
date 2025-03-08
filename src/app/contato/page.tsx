'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'Informações Gerais'
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError(false)
    
    // Simulação de envio de formulário
    try {
      // Aqui seria a chamada para a API
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: 'Informações Gerais'
      })
    } catch (error) {
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
            >
              Entre em Contato
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Estamos aqui para ajudar você a transformar sua barbearia
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Envie uma mensagem</h2>
                
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 font-medium">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
                  </div>
                )}
                
                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 font-medium">Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Assunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="Informações Gerais">Informações Gerais</option>
                      <option value="Suporte Técnico">Suporte Técnico</option>
                      <option value="Vendas">Vendas</option>
                      <option value="Parcerias">Parcerias</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center transition-all ${
                      isSubmitting 
                        ? 'bg-purple-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar mensagem
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
              
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white mb-8">
                  <h2 className="text-2xl font-bold mb-6">Informações de contato</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg">E-mail</h3>
                        <p className="mt-1">contato@barberpro.pt</p>
                        <p>suporte@barberpro.pt</p>
                        <p className="text-sm text-indigo-200 mt-1">(Gmail)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg">Endereço</h3>
                        <p className="mt-1">Av. da Liberdade, 110 - Baixa</p>
                        <p>Lisboa, Portugal, 1250-096</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Instagram className="h-6 w-6 mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg">Redes Sociais</h3>
                        <p className="mt-1">Instagram: @barberpro.pt</p>
                        <p>Site: barberpro.pt</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Horário de atendimento</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between pb-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Segunda a Sexta</span>
                      <span className="text-gray-600">9h às 18h</span>
                    </div>
                    
                    <div className="flex justify-between pb-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">Sábado</span>
                      <span className="text-gray-600">9h às 13h</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Domingo e Feriados</span>
                      <span className="text-gray-600">Fechado</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Perguntas Frequentes</h2>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Quanto tempo dura o período de teste gratuito?</h3>
                <p className="text-gray-600">O período de teste gratuito do BarberPro tem duração de 14 dias, com acesso a todas as funcionalidades do plano Premium. Não é necessário cartão de crédito para começar.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Preciso instalar algum software?</h3>
                <p className="text-gray-600">Não, o BarberPro é uma solução 100% baseada na nuvem. Você pode acessar de qualquer dispositivo com conexão à internet, seja computador, tablet ou smartphone, sem necessidade de instalação.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Como funciona o suporte técnico?</h3>
                <p className="text-gray-600">Oferecemos suporte técnico por e-mail e chat em horário comercial. Clientes do plano Premium têm acesso a suporte prioritário e atendimento estendido.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Posso cancelar minha assinatura a qualquer momento?</h3>
                <p className="text-gray-600">Sim, você pode cancelar sua assinatura a qualquer momento sem taxas adicionais. Ao cancelar, você mantém acesso ao sistema até o final do período já pago.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">O BarberPro oferece treinamento?</h3>
                <p className="text-gray-600">Sim, oferecemos treinamento completo através de vídeos tutoriais, documentação detalhada e webinars semanais. Clientes do plano Premium também têm direito a sessões de treinamento personalizadas.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 