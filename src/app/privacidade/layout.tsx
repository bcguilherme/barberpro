export default function PrivacidadeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}

export const metadata = {
  title: 'Política de Privacidade | BarberPro',
  description: 'Política de privacidade do BarberPro, sistema completo para gestão de barbearias e salões de beleza.',
} 