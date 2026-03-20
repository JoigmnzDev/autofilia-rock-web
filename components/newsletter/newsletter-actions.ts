"use server";

import { Resend, type ErrorResponse } from "resend";
import { newsletterSchema, NewsletterSchemaType } from "./newsletter-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeToNewsletter(data: NewsletterSchemaType) {
  const result = newsletterSchema.safeParse(data);

  if (!result.success) {
    throw new Error(result.error.errors[0].message || "Email no válido");
  }

  const email = result.data.email.toLowerCase();

  try {
    await resend.contacts.create({
      email: email,
      unsubscribed: false,
      segments: [{ id: "312be811-0397-44f3-8756-dc85c8feb3bb" }],
    });
    await resend.emails.send({
      to: email,
      template: {
        id: "6b153199-b161-40c6-a3ea-2afde53b9130",
      },
    });

    return { success: true, message: "¡Te has unido al círculo!" };
  } catch (error: any) {
    console.log("Error completo de Resend:", error);
    if (error.name === "contact_already_exists") {
      throw new Error("YA ESTÁS DENTRO.");
    }
    throw new Error("ERROR AL UNIRSE AL CÍRCULO.");
  }
}
