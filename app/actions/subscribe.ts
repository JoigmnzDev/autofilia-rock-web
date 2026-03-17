'use server'

import { prisma } from '@/lib/prisma'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type SubscribeResult = {
  success: boolean
  message: string
}

export async function subscribeToNewsletter(email: string): Promise<SubscribeResult> {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    return {
      success: false,
      message: 'Por favor, introduce un email válido.',
    }
  }

  try {
    // Check if subscriber already exists
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email: email.toLowerCase() },
    })

    if (existingSubscriber) {
      return {
        success: false,
        message: 'Este email ya está suscrito.',
      }
    }

    // Create new subscriber
    await prisma.subscriber.create({
      data: {
        email: email.toLowerCase(),
      },
    })

    // Send welcome email via Resend
    await resend.emails.send({
      from: 'Autofilia <noreply@autofilia.com>',
      to: email.toLowerCase(),
      subject: 'Bienvenido al Círculo - Autofilia',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; background-color: #050505; font-family: Arial, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #050505; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px;">
                    <!-- Header -->
                    <tr>
                      <td style="border-bottom: 1px solid #880808; padding-bottom: 30px;">
                        <h1 style="color: #f0ece4; font-size: 32px; margin: 0; letter-spacing: 4px;">AUTOFILIA</h1>
                      </td>
                    </tr>
                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px 0;">
                        <h2 style="color: #880808; font-size: 14px; letter-spacing: 3px; margin: 0 0 20px 0;">BIENVENIDO AL CÍRCULO</h2>
                        <p style="color: #f0ece4; font-size: 24px; line-height: 1.4; margin: 0 0 20px 0;">Ahora formas parte de algo especial.</p>
                        <p style="color: #888480; font-size: 14px; line-height: 1.8; margin: 0 0 30px 0;">
                          Serás el primero en enterarte de nuevas fechas de tour, lanzamientos exclusivos, drops de merch y contenido que no compartimos en ningún otro lugar.
                        </p>
                        <p style="color: #888480; font-size: 14px; line-height: 1.8; margin: 0;">
                          Rock · Blood · Fire · Noise
                        </p>
                      </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                      <td style="border-top: 1px solid #2a2a2a; padding-top: 30px;">
                        <p style="color: #888480; font-size: 12px; margin: 0;">© 2026 Autofilia. Todos los derechos reservados.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    })

    return {
      success: true,
      message: '¡Bienvenido al Círculo! Revisa tu email.',
    }
  } catch (error) {
    console.error('Subscribe error:', error)
    return {
      success: false,
      message: 'Algo salió mal. Inténtalo de nuevo.',
    }
  }
}
