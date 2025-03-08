# Instruções para Deploy no Vercel

Este documento contém instruções detalhadas para fazer o deploy do BarberPro no Vercel.

## Pré-requisitos

1. Conta no [GitHub](https://github.com)
2. Conta no [Vercel](https://vercel.com)
3. Projeto configurado no Firebase (para autenticação e banco de dados)
4. Conta no Stripe (para processamento de pagamentos)

## Passo 1: Preparar o Repositório no GitHub

1. Crie um novo repositório no GitHub:
   - Acesse https://github.com/new
   - Dê um nome ao repositório (ex: "barberpro")
   - Escolha a visibilidade (público ou privado)
   - Clique em "Create repository"

2. Conecte seu repositório local ao GitHub:
   ```bash
   git remote add origin https://github.com/seu-usuario/barberpro.git
   git push -u origin main
   ```

## Passo 2: Deploy no Vercel via Interface Web

1. Acesse [Vercel](https://vercel.com) e faça login (ou crie uma conta)

2. Clique em "Add New..." e selecione "Project"

3. Conecte sua conta do GitHub (se ainda não estiver conectada)

4. Selecione o repositório "barberpro" da lista

5. Configure o projeto:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: npm run build
   - **Output Directory**: .next

6. Configure as variáveis de ambiente:
   Clique em "Environment Variables" e adicione as seguintes variáveis:

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

   # App URL (será preenchido automaticamente pelo Vercel após o deploy)
   NEXT_PUBLIC_APP_URL=https://seu-projeto.vercel.app
   ```

7. Clique em "Deploy"

8. Aguarde o processo de build e deploy ser concluído

9. Após o deploy, você receberá uma URL para acessar seu projeto (ex: https://barberpro.vercel.app)

## Passo 3: Configurações Pós-Deploy

1. Atualize a variável `NEXT_PUBLIC_APP_URL` no Vercel com a URL gerada após o deploy

2. Configure o domínio personalizado (opcional):
   - No dashboard do Vercel, acesse seu projeto
   - Vá para a aba "Settings" > "Domains"
   - Adicione seu domínio personalizado e siga as instruções

3. Configure o webhook do Stripe (se estiver usando pagamentos):
   - No dashboard do Stripe, vá para "Developers" > "Webhooks"
   - Adicione um endpoint com a URL: `https://seu-projeto.vercel.app/api/webhooks/stripe`
   - Selecione os eventos necessários (ex: `payment_intent.succeeded`, `checkout.session.completed`)
   - Copie o "Signing Secret" e atualize a variável `STRIPE_WEBHOOK_SECRET` no Vercel

## Solução de Problemas

Se encontrar problemas durante o deploy, verifique:

1. **Logs de Build**: No dashboard do Vercel, acesse "Deployments" > [seu deploy] > "Build Logs"

2. **Variáveis de Ambiente**: Certifique-se de que todas as variáveis de ambiente estão configuradas corretamente

3. **Dependências**: Verifique se todas as dependências estão listadas no `package.json`

4. **Versão do Node.js**: O Vercel usa Node.js 18 por padrão. Se precisar de uma versão específica, configure no arquivo `vercel.json`:
   ```json
   {
     "builds": [
       {
         "src": "package.json",
         "use": "@vercel/next",
         "config": {
           "nodeVersion": "18.x"
         }
       }
     ]
   }
   ```

## Recursos Adicionais

- [Documentação do Vercel](https://vercel.com/docs)
- [Guia de Deploy do Next.js](https://nextjs.org/docs/deployment)
- [Configuração de Domínios no Vercel](https://vercel.com/docs/concepts/projects/domains)
- [Variáveis de Ambiente no Vercel](https://vercel.com/docs/concepts/projects/environment-variables) 