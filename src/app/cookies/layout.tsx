export default function CookiesLayout({
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
  title: 'Política de Cookies | BarberPro',
  description: 'Política de cookies do BarberPro, sistema completo para gestão de barbearias e salões de beleza.',
} 