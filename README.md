# BarberPro - Sistema de Gestão para Barbearias

Este projeto é um sistema completo para gestão de barbearias e salões de beleza, desenvolvido com Next.js, React, TypeScript e Tailwind CSS.

## 🚀 Executando Localmente

Para executar este projeto localmente:

```bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

O servidor estará disponível em http://localhost:3002

## 📋 Funcionalidades

- Sistema de agendamento para barbearias
- Gestão de clientes
- Controle financeiro
- Ferramenta "Google Booster Review" para aumentar avaliações no Google
- Interface moderna e responsiva

## 🛠️ Tecnologias Utilizadas

- **Next.js 14**: Framework React para desenvolvimento web
- **React**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework CSS utilitário
- **Framer Motion**: Biblioteca para animações
- **Prisma**: ORM para acesso ao banco de dados
- **Firebase**: Autenticação e armazenamento
- **Stripe**: Processamento de pagamentos

## 🔄 Estrutura do Projeto

```
barberpro/
├── src/                # Código fonte
│   ├── app/            # Rotas e páginas (App Router)
│   ├── components/     # Componentes reutilizáveis
│   ├── context/        # Contextos React
│   ├── hooks/          # Hooks personalizados
│   ├── lib/            # Utilitários e configurações
│   ├── services/       # Serviços externos (Firebase, etc.)
│   └── styles/         # Estilos globais
├── public/             # Arquivos estáticos
├── prisma/             # Esquema e migrações do Prisma
└── ...                 # Arquivos de configuração
```

## 🔗 Links Úteis

- [Documentação do Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Prisma](https://www.prisma.io/docs)
- [Firebase](https://firebase.google.com/docs)
