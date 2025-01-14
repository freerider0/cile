import { NextResponse } from "next/server"
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, city } = body

    await resend.emails.send({
      from: 'onboarding@resend.dev', // or your verified domain
      to: process.env.EMAIL_TO!,
      subject: `Nuevo contacto desde el formulario web de ${name} (${phone}) - ${city}`,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Ciudad:</strong> ${city}</p>
      `
    })

    return NextResponse.json(
      { message: "Email enviado correctamente" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Error al enviar el email" },
      { status: 500 }
    )
  }
} 