import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DownloadLogoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-barber-purple-dark to-black text-white">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-accent-gradient animate-shine">
          Download do Logo BarberPro
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-barber-purple-dark/50 backdrop-blur-sm rounded-lg p-8 flex flex-col items-center">
            <div className="relative w-full aspect-square mb-6 bg-barber-purple-dark rounded-lg overflow-hidden">
              <Image 
                src="/barberpro-instagram.svg" 
                alt="BarberPro Logo para Instagram" 
                width={1080} 
                height={1080}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-barber-accent-light">Logo para Instagram</h2>
            <p className="text-white/80 text-center mb-6">
              Versão quadrada otimizada para perfil do Instagram e outras redes sociais.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/barberpro-instagram.svg" 
                download="barberpro-instagram.svg"
                target="_blank"
                className="bg-gradient-to-r from-barber-purple-medium via-barber-purple-light to-barber-purple-medium text-white px-6 py-3 rounded-md hover:shadow-lg hover:shadow-barber-purple-dark/30 transition-all duration-300"
              >
                Download SVG
              </Link>
              <Link 
                href="/api/download-png?file=instagram"
                className="border-2 border-barber-accent bg-transparent text-barber-accent px-6 py-3 rounded-md hover:bg-barber-purple-dark/10 transition-all duration-300"
              >
                Download PNG
              </Link>
            </div>
          </div>
          
          <div className="bg-barber-purple-dark/50 backdrop-blur-sm rounded-lg p-8 flex flex-col items-center">
            <div className="relative w-full h-48 mb-6 bg-barber-purple-dark rounded-lg overflow-hidden">
              <Image 
                src="/barberpro-luxury.svg" 
                alt="BarberPro Logo Horizontal" 
                width={800} 
                height={400}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-barber-accent-light">Logo Horizontal</h2>
            <p className="text-white/80 text-center mb-6">
              Versão horizontal para uso em cabeçalhos, assinaturas e materiais impressos.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/barberpro-luxury.svg" 
                download="barberpro-luxury.svg"
                target="_blank"
                className="bg-gradient-to-r from-barber-purple-medium via-barber-purple-light to-barber-purple-medium text-white px-6 py-3 rounded-md hover:shadow-lg hover:shadow-barber-purple-dark/30 transition-all duration-300"
              >
                Download SVG
              </Link>
              <Link 
                href="/api/download-png?file=luxury"
                className="border-2 border-barber-accent bg-transparent text-barber-accent px-6 py-3 rounded-md hover:bg-barber-purple-dark/10 transition-all duration-300"
              >
                Download PNG
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-barber-purple-dark/30 backdrop-blur-sm rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-barber-accent-light">Instruções de Uso</h2>
          <div className="space-y-4 text-white/80">
            <p>
              <strong className="text-white">Formato SVG:</strong> Ideal para uso em websites, materiais impressos de alta qualidade e quando precisar redimensionar o logo sem perda de qualidade.
            </p>
            <p>
              <strong className="text-white">Formato PNG:</strong> Melhor para uso em redes sociais, emails e quando precisar de um arquivo com fundo transparente.
            </p>
            <p>
              <strong className="text-white">Para Instagram:</strong> Recomendamos usar a versão quadrada para o perfil e a versão horizontal para posts e stories.
            </p>
            <p>
              <strong className="text-white">Cores:</strong> O logo utiliza a paleta de cores roxa premium da BarberPro. Para manter a consistência da marca, não altere as cores do logo.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href="/"
            className="inline-flex items-center text-barber-accent hover:text-barber-accent-light transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
} 