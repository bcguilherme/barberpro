# BarberPro

Sistema completo para gestão de barbearias e salões de beleza.

## Tecnologias Utilizadas

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- Firebase (Firestore, Authentication)
- Prisma
- Stripe (para pagamentos)

## Funcionalidades

- Gestão de agendamentos
- Cadastro de clientes
- Controle financeiro
- Relatórios
- Perfil do estabelecimento
- Configurações do sistema
- Google Booster (SEO)

## Requisitos

- Node.js 18.x ou superior
- NPM ou Yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/barberpro.git
cd barberpro
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=seu-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=seu-app-id

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=seu-publishable-key
STRIPE_SECRET_KEY=seu-secret-key
STRIPE_WEBHOOK_SECRET=seu-webhook-secret

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

5. Acesse o projeto em [http://localhost:3000](http://localhost:3000)

## Deploy no Vercel

### Método 1: Interface Web (Recomendado)

1. Crie uma conta no [Vercel](https://vercel.com) (se ainda não tiver)
2. Conecte sua conta do GitHub
3. Importe o repositório que você criou
4. Configure as variáveis de ambiente necessárias (as mesmas do arquivo `.env`)
5. Clique em "Deploy"

### Método 2: CLI do Vercel

1. Instale a CLI do Vercel:
```bash
npm install -g vercel
```

2. Faça login na sua conta:
```bash
vercel login
```

3. Execute o comando de deploy na raiz do projeto:
```bash
vercel --prod
```

4. Siga as instruções na tela para configurar o projeto

## Estrutura do Projeto

- `/src/app`: Páginas e rotas da aplicação
- `/src/components`: Componentes reutilizáveis
- `/src/context`: Contextos para gerenciamento de estado
- `/src/hooks`: Hooks personalizados
- `/src/lib`: Utilitários e configurações
- `/src/i18n`: Arquivos de internacionalização
- `/public`: Arquivos estáticos

## Licença

Este projeto está licenciado sob a licença MIT.
