"use server";

import { Resend } from "resend";
import {
  subscribeNewsletterSchema,
  SubscribeNewsletterSchemaType,
} from "../schemas/subscribe-newsletter.schema";
import { env } from "@/lib/env";

const resend = new Resend(env.RESEND_API_KEY);

export async function subscribeToNewsletter(
  data: SubscribeNewsletterSchemaType,
) {
  const result = subscribeNewsletterSchema.safeParse(data);

  if (!result.success) {
    throw new Error(result.error.errors[0].message || "Email no válido");
  }

  const email = result.data.email.toLowerCase();

  try {
    await resend.contacts.create({
      email,
      unsubscribed: false,
      segments: [{ id: env.RESEND_SEGMENT_ID! }],
    });

    await resend.emails.send({
      to: email,
      template: {
        id: env.RESEND_WELCOME_TEMPLATE_ID!,
      },
    });

    return { success: true, message: "¡Te has unido al círculo!" };
  } catch (error: unknown) {
    console.log("Error completo de Resend:", error);
    if (
      typeof error === "object" &&
      error !== null &&
      "name" in error &&
      error.name === "contact_already_exists"
    ) {
      throw new Error("YA ESTÁS DENTRO.");
    }
    throw new Error("ERROR AL UNIRSE AL CÍRCULO.");
  }
}
