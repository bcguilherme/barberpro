import { Hero } from '@/components/Hero'
import dynamic from 'next/dynamic'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import { Stats } from '@/components/Stats'
import { BusinessModel } from '@/components/BusinessModel'
import Image from 'next/image'
import { RegionalPromotionSection } from '@/components/RegionalPromotionSection'
import { MainLayout } from '@/components/MainLayout'

// Importação dinâmica do componente TabsHome
const TabsHome = dynamic(() => import('@/components/TabsHome'), {
  ssr: false,
  loading: () => (
    <div className="py-12 bg-gray-50 flex justify-center items-center min-h-[400px]">
      <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
})

// Componente de destaque para o Google Booster Review
function GoogleBoosterHighlight() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border border-yellow-300 shadow-lg overflow-hidden">
          <div className="p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 animate-pulse-soft"></div>
                <Image 
                  src="/images/google-review-icon.svg" 
                  alt="Google Booster Review" 
                  width={256}
                  height={256}
                  className="relative z-10 w-full h-full object-contain"
                />
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  EXCLUSIVO
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-yellow-800 mb-4">
                Google Booster Review
              </h2>
              <p className="text-lg text-yellow-700 mb-6">
                Aumente suas avaliações 5 estrelas no Google em até <span className="font-bold">300%</span> e destaque-se da concorrência com nossa ferramenta exclusiva!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center mr-2 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-yellow-700">Solicitações automáticas de avaliações</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center mr-2 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-yellow-700">Monitoramento de avaliações negativas</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center mr-2 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-yellow-700">Melhor posicionamento no Google</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center mr-2 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-yellow-700">Mais clientes através do Google Maps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        <Hero />
        <Stats />
        <RegionalPromotionSection />
        <GoogleBoosterHighlight />
        <TabsHome />
        <BusinessModel />
        <CTA />
      </div>
    </MainLayout>
  )
} 