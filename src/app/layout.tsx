import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'BarberPro - Sistema para Barbearias',
  description: 'Sistema completo para gestão de barbearias e salões de beleza',
  keywords: ['barbearia', 'gestão', 'agendamento', 'salão de beleza', 'software'],
  authors: [{ name: 'BarberPro Team' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://barberpro-app.vercel.app'),
  openGraph: {
    title: 'BarberPro - Sistema para Barbearias',
    description: 'Sistema completo para gestão de barbearias e salões de beleza',
    url: 'https://barberpro.pt',
    siteName: 'BarberPro',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BarberPro - Sistema para Barbearias',
    description: 'Sistema completo para gestão de barbearias e salões de beleza',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-gray-100`} suppressHydrationWarning={true}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
