import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Correo obligatorio." })
    .email({ message: "Introduce un correo electrónico válido." }),
});

export type NewsletterSchemaType = z.infer<typeof newsletterSchema>;
