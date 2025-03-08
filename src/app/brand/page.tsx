import React from 'react';
import LogoShowcase from '@/components/LogoShowcase';

export const metadata = {
  title: 'BarberPro - Identidade Visual',
  description: 'Guia de identidade visual e uso do logo BarberPro',
};

export default function BrandPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-slate-900">Identidade Visual BarberPro</h1>
      <p className="text-slate-600 mb-8">
        Guia completo de uso do logo e identidade visual da plataforma BarberPro.
      </p>
      
      <div className="mb-12">
        <LogoShowcase />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Cores Institucionais</h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-md bg-[#0F172A]"></div>
              <div>
                <p className="font-semibold">Azul Escuro</p>
                <p className="text-sm text-slate-500">HEX: #0F172A</p>
                <p className="text-sm text-slate-500">RGB: 15, 23, 42</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-md bg-[#E11D48]"></div>
              <div>
                <p className="font-semibold">Vermelho</p>
                <p className="text-sm text-slate-500">HEX: #E11D48</p>
                <p className="text-sm text-slate-500">RGB: 225, 29, 72</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-md bg-[#FFFFFF] border border-gray-200"></div>
              <div>
                <p className="font-semibold">Branco</p>
                <p className="text-sm text-slate-500">HEX: #FFFFFF</p>
                <p className="text-sm text-slate-500">RGB: 255, 255, 255</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Tipografia</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Fonte Principal</h3>
              <p className="font-['Inter'] text-2xl">Inter</p>
              <p className="text-sm text-slate-500 mt-1">
                Usada para títulos, botões e elementos de destaque.
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="font-['Inter'] font-bold text-xl">Inter Bold</p>
              <p className="font-['Inter'] font-semibold text-xl">Inter Semibold</p>
              <p className="font-['Inter'] font-medium text-xl">Inter Medium</p>
              <p className="font-['Inter'] font-normal text-xl">Inter Regular</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-white rounded-lg shadow-sm mb-12">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Diretrizes de Uso</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2 text-slate-700">Recomendações</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Mantenha a área de respiro ao redor do logo</li>
              <li>Use as cores institucionais conforme especificado</li>
              <li>Mantenha as proporções originais do logo</li>
              <li>Use a versão apropriada para cada contexto</li>
              <li>Em fundos escuros, use a versão com contorno branco</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 text-slate-700">Restrições</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Não distorça ou altere as proporções</li>
              <li>Não altere as cores institucionais</li>
              <li>Não adicione efeitos como sombras ou gradientes</li>
              <li>Não use o logo sobre fundos que comprometam a legibilidade</li>
              <li>Não remova ou altere elementos do logo</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-slate-500 text-sm">
          Para mais informações ou para solicitar arquivos em alta resolução, entre em contato com nossa equipe de marketing.
        </p>
      </div>
    </div>
  );
} 