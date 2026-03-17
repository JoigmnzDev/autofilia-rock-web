"use server";

import { prisma } from "@/lib/prisma";
import { Resend } from "resend";
import WelcomeEmail from "./../../emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export type SubscribeResult = {
  success: boolean;
  message: string;
};

export async function subscribeToNewsletter(
  email: string,
): Promise<SubscribeResult> {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return {
      success: false,
      message: "Por favor, introduce un email válido.",
    };
  }

  try {
    // Check if subscriber already exists
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingSubscriber) {
      return {
        success: false,
        message: "Este email ya está suscrito.",
      };
    }

    // Create new subscriber
    await prisma.subscriber.create({
      data: {
        email: email.toLowerCase(),
      },
    });

    // Send welcome email via Resend
    await resend.emails.send({
      from: "Autofilia <onboarding@resend.dev>",
      to: email.toLowerCase(),
      subject: "Bienvenido al Círculo - Autofilia",
      react: WelcomeEmail(),
    });

    return {
      success: true,
      message: "¡Bienvenido al Círculo! Revisa tu email.",
    };
  } catch (error) {
    console.error("Subscribe error:", error);
    return {
      success: false,
      message: "Algo salió mal. Inténtalo de nuevo.",
    };
  }
}
