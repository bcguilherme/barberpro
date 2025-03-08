import React from 'react';
import { Logo, LogoText } from './LogoComponent';

export const LogoShowcase: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">Logo BarberPro</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Logo Padrão</h3>
          <Logo variant="default" width={150} height={150} />
        </div>
        
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Logo Pequeno</h3>
          <Logo variant="small" width={80} height={80} />
        </div>
        
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Logo Texto</h3>
          <Logo variant="text-only" width={200} height={50} />
        </div>
        
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Logo Animado</h3>
          <Logo variant="default" width={150} height={150} animated />
        </div>
        
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Logo com Texto</h3>
          <div className="flex items-center space-x-3">
            <Logo variant="small" width={50} height={50} />
            <LogoText />
          </div>
        </div>
        
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Logo em Fundo Escuro</h3>
          <div className="p-6 bg-slate-800 rounded-lg">
            <Logo variant="default" width={150} height={150} />
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-slate-700">Uso em Cabeçalho</h3>
        <div className="w-full py-4 px-6 flex items-center justify-between bg-white shadow-sm rounded-lg">
          <div className="flex items-center space-x-2">
            <Logo variant="small" width={40} height={40} animated />
            <LogoText />
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-slate-700">Menu</span>
            <button className="px-4 py-2 rounded-md bg-rose-600 text-white">Ação</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase; 