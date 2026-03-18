"use server";

import Welcome from "@/emails/welcome";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { newsletterSchema } from "./newsletter-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeToNewsletter(data: unknown) {
  const result = newsletterSchema.safeParse(data);

  if (!result.success) {
    throw new Error(result.error.errors[0].message || "Email no válido");
  }

  const email = result.data.email.toLowerCase();

  try {
    const newsletterSubscriber = await prisma.newsletterSubscriber.create({
      data: { email },
    });
    resend.emails
      .send({
        from: "Autofilia <info@autofiliarock.com>",
        to: email,
        subject: "BIENVENIDO AL CÍRCULO",
        react: Welcome(),
      })
      .catch((err: any) => console.error("Fallo silencioso de Resend:", err));

    return { success: true, message: "¡Te has unido al círculo!" };
  } catch (error: any) {
    console.log(error);
    if (error.code === "P2002") throw new Error("YA ESTÁS DENTRO.");
    throw new Error("ERROR DE BASE DE DATOS.");
  }
}
