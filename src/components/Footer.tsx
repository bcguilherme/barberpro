'use client'

import { useI18n } from '@/hooks/useI18n'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const { t } = useI18n()
  
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div>
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                BarberPro
              </h3>
            </Link>
            <p className="mt-4 text-gray-400 max-w-xs">
              {t('footer.description')}
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/barberpro.pt" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Site: <a href="https://barberpro.pt" className="text-purple-400 hover:text-purple-300">barberpro.pt</a>
            </p>
          </div>
          
          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/precos" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-purple-400 mt-0.5 mr-3" />
                <span className="text-gray-400">contato@barberpro.pt</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-purple-400 mt-0.5 mr-3" />
                <span className="text-gray-400">suporte@barberpro.pt</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5 mr-3" />
                <span className="text-gray-400">Av. da Liberdade, 110 - Lisboa, Portugal</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Inscreva-se para receber dicas e novidades sobre gestão de barbearias.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-300"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright').replace('2024', currentYear.toString())}
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/termos" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                {t('footer.terms')}
              </Link>
              <Link href="/privacidade" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                {t('footer.privacy')}
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                {t('footer.cookies')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 