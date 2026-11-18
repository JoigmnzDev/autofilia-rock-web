import "server-only";
import { z } from "zod";

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1, "Missing RESEND_API_KEY"),
  RESEND_SEGMENT_ID: z.string().uuid("RESEND_SEGMENT_ID must be a valid UUID"),
  RESEND_WELCOME_TEMPLATE_ID: z
    .string()
    .uuid("RESEND_WELCOME_TEMPLATE_ID must be a valid UUID"),
});

export const env = envSchema.parse({
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_SEGMENT_ID: process.env.RESEND_SEGMENT_ID,
  RESEND_WELCOME_TEMPLATE_ID: process.env.RESEND_WELCOME_TEMPLATE_ID,
});
