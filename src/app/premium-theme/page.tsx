import React from 'react';
import { Logo, LogoText } from '@/components/LogoComponent';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

export default function PremiumThemePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-barber-purple-dark to-black text-white">
      <header className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-accent-gradient animate-shine">
          BarberPro Premium Theme
        </h1>
        <p className="text-barber-accent-light text-lg mb-8">
          Uma experiência visual sofisticada para sua barbearia
        </p>
      </header>

      <main className="container mx-auto py-8">
        {/* Seção de Logo */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 relative inline-block">
            Logos
            <span className="absolute bottom-0 left-0 w-full h-1 bg-barber-accent"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center justify-center p-8 rounded-lg bg-barber-purple-dark/50 backdrop-blur-sm">
              <Logo variant="premium" inline width={300} height={150} />
              <p className="mt-4 text-barber-accent-light">Logo Premium (SVG Inline)</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-8 rounded-lg bg-barber-purple-dark/50 backdrop-blur-sm">
              <Logo variant="premium" width={300} height={150} />
              <p className="mt-4 text-barber-accent-light">Logo Premium (Image)</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-8 rounded-lg bg-barber-purple-dark/50 backdrop-blur-sm">
              <LogoText premium className="text-4xl" />
              <p className="mt-4 text-barber-accent-light">Logo Text Premium</p>
            </div>
          </div>
        </section>
        
        {/* Seção de Botões */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 relative inline-block">
            Botões
            <span className="absolute bottom-0 left-0 w-full h-1 bg-barber-accent"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-barber-purple-dark/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-barber-accent-light">Botões Premium</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="premium" size="sm">Botão Pequeno</Button>
                <Button variant="premium" size="md">Botão Médio</Button>
                <Button variant="premium" size="lg">Botão Grande</Button>
                <Button variant="premium" isLoading>Carregando</Button>
              </div>
            </div>
            
            <div className="p-8 rounded-lg bg-barber-purple-dark/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-barber-accent-light">Botões Premium Outline</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="premium-outline" size="sm">Botão Pequeno</Button>
                <Button variant="premium-outline" size="md">Botão Médio</Button>
                <Button variant="premium-outline" size="lg">Botão Grande</Button>
                <Button variant="premium-outline" isLoading>Carregando</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Seção de Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 relative inline-block">
            Cards
            <span className="absolute bottom-0 left-0 w-full h-1 bg-barber-accent"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="default" hover bordered>
              <CardHeader>
                <CardTitle>Card Padrão</CardTitle>
                <CardDescription>Descrição do card padrão</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Este é um exemplo de card com estilo padrão. Ele usa cores neutras e um design simples.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="default" fullWidth>Ação</Button>
              </CardFooter>
            </Card>
            
            <Card variant="premium" hover bordered>
              <CardHeader>
                <CardTitle className="text-barber-purple-medium">Card Premium</CardTitle>
                <CardDescription>Descrição do card premium</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Este é um exemplo de card com estilo premium. Ele usa gradientes sutis e cores do tema premium.
                </p>
              </CardContent>
              <CardFooter className="bg-gradient-to-r from-white to-barber-accent-light/20">
                <Button variant="premium" fullWidth>Ação Premium</Button>
              </CardFooter>
            </Card>
            
            <Card variant="premium-dark" hover bordered>
              <CardHeader className="border-b border-barber-accent/20">
                <CardTitle className="text-white">Card Premium Dark</CardTitle>
                <CardDescription className="text-barber-accent-light">Descrição do card premium dark</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Este é um exemplo de card com estilo premium dark. Ele usa o gradiente escuro do tema premium.
                </p>
              </CardContent>
              <CardFooter className="border-t border-barber-accent/20 bg-barber-purple-dark/50">
                <Button variant="premium-outline" fullWidth>Ação Premium</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        
        {/* Seção de Tipografia */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 relative inline-block">
            Tipografia
            <span className="absolute bottom-0 left-0 w-full h-1 bg-barber-accent"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-barber-purple-dark/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-barber-accent-light">Títulos</h3>
              <h1 className="text-4xl font-bold mb-2">Título H1</h1>
              <h2 className="text-3xl font-bold mb-2">Título H2</h2>
              <h3 className="text-2xl font-bold mb-2">Título H3</h3>
              <h4 className="text-xl font-bold mb-2">Título H4</h4>
              <h5 className="text-lg font-bold mb-2">Título H5</h5>
              <h6 className="text-base font-bold">Título H6</h6>
            </div>
            
            <div className="p-8 rounded-lg bg-barber-purple-dark/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-barber-accent-light">Textos Especiais</h3>
              <p className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-purple-gradient">
                Texto com Gradiente Roxo
              </p>
              <p className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-accent-gradient">
                Texto com Gradiente de Destaque
              </p>
              <p className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-metal-gradient">
                Texto com Gradiente Metálico
              </p>
              <p className="text-2xl font-bold mb-4 animate-glow text-white">
                Texto com Efeito de Brilho
              </p>
              <p className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-accent-gradient animate-shine">
                Texto com Efeito de Brilho Metálico
              </p>
            </div>
          </div>
        </section>
        
        {/* Seção de Cores */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 relative inline-block">
            Paleta de Cores
            <span className="absolute bottom-0 left-0 w-full h-1 bg-barber-accent"></span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <div className="h-24 bg-barber-purple-dark rounded-t-lg"></div>
              <div className="bg-white p-4 rounded-b-lg">
                <p className="font-semibold text-barber-purple-dark">Roxo Escuro</p>
                <p className="text-sm text-gray-500">#2A0845</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-24 bg-barber-purple-medium rounded-t-lg"></div>
              <div className="bg-white p-4 rounded-b-lg">
                <p className="font-semibold text-barber-purple-medium">Roxo Médio</p>
                <p className="text-sm text-gray-500">#4A148C</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-24 bg-barber-purple-light rounded-t-lg"></div>
              <div className="bg-white p-4 rounded-b-lg">
                <p className="font-semibold text-barber-purple-light">Roxo Claro</p>
                <p className="text-sm text-gray-500">#7B1FA2</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-24 bg-barber-accent rounded-t-lg"></div>
              <div className="bg-white p-4 rounded-b-lg">
                <p className="font-semibold text-barber-accent">Lilás (Destaque)</p>
                <p className="text-sm text-gray-500">#CE93D8</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-24 bg-barber-accent-light rounded-t-lg"></div>
              <div className="bg-white p-4 rounded-b-lg">
                <p className="font-semibold text-barber-accent-light">Lilás Claro</p>
                <p className="text-sm text-gray-500">#E1BEE7</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-24 bg-barber-metal rounded-t-lg"></div>
              <div className="bg-white p-4 rounded-b-lg">
                <p className="font-semibold text-barber-metal">Metálico</p>
                <p className="text-sm text-gray-500">#9E9E9E</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-24 bg-barber-metal-light rounded-t-lg"></div>
              <div className="bg-white p-4 rounded-b-lg">
                <p className="font-semibold text-barber-metal-light">Metálico Claro</p>
                <p className="text-sm text-gray-500">#E0E0E0</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-24 bg-white rounded-t-lg"></div>
              <div className="bg-white p-4 rounded-b-lg">
                <p className="font-semibold">Branco</p>
                <p className="text-sm text-gray-500">#FFFFFF</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Seção de Gradientes */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 relative inline-block">
            Gradientes
            <span className="absolute bottom-0 left-0 w-full h-1 bg-barber-accent"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <div className="h-24 bg-purple-gradient rounded-t-lg"></div>
              <div className="bg-white p-4 rounded-b-lg">
                <p className="font-semibold text-barber-purple-medium">Gradiente Roxo</p>
                <p className="text-sm text-gray-500">linear-gradient(135deg, #4A148C, #7B1FA2, #6A1B9A)</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-24 bg-accent-gradient rounded-t-lg"></div>
              <div className="bg-white p-4 rounded-b-lg">
                <p className="font-semibold text-barber-accent">Gradiente de Destaque</p>
                <p className="text-sm text-gray-500">linear-gradient(to right, #CE93D8, #E1BEE7, #CE93D8)</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-24 bg-metal-gradient rounded-t-lg"></div>
              <div className="bg-white p-4 rounded-b-lg">
                <p className="font-semibold text-barber-metal">Gradiente Metálico</p>
                <p className="text-sm text-gray-500">linear-gradient(to right, #E0E0E0, #FFFFFF, #BDBDBD, #9E9E9E)</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-barber-purple-dark py-8 border-t border-barber-accent/20">
        <div className="container mx-auto text-center">
          <LogoText premium className="text-2xl mb-4" />
          <p className="text-barber-accent-light">
            © 2023 BarberPro - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
} 