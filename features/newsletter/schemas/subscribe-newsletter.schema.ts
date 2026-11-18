import { z } from "zod";

export const subscribeNewsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Correo obligatorio." })
    .email({ message: "Introduce un correo electrónico válido." }),
});

export type SubscribeNewsletterSchemaType = z.infer<
  typeof subscribeNewsletterSchema
>;
