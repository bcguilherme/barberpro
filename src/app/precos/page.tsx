import { Pricing } from '@/components/Pricing'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preços e Planos | BarberPro',
  description: 'Conheça nossos planos e preços para gerenciamento de barbearias e salões. Escolha o plano ideal para o seu negócio.',
}

export default function PricingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Pricing />
      </div>
      <Footer />
    </main>
  )
} 