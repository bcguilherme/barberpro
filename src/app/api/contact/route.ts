import { NextResponse } from 'next/server'
import { z } from 'zod'

// Indicando explicitamente que esta rota é dinâmica
export const dynamic = 'force-dynamic';

const contactSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(1, 'Assunto é obrigatório'),
  message: z.string().min(10, 'Mensagem deve ter no mínimo 10 caracteres'),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const body = contactSchema.parse(json)

    // Aqui você pode implementar o envio de email
    // Por exemplo, usando nodemailer ou serviços como SendGrid
    
    // Por enquanto, vamos apenas simular um delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({
      message: 'Mensagem enviada com sucesso!'
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: error.errors[0].message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: 'Erro ao enviar mensagem' },
      { status: 500 }
    )
  }
} 