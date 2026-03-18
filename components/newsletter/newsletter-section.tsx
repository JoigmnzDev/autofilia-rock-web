"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import NewsletterForm from "./newsletter-form";
import {
  newsletterSchema,
  NewsletterSchemaType,
} from "@/components/newsletter/newsletter-schema";
import { useNewsletter } from "./use-newsletter";

export default function NewsletterSection() {
  const { mutate, isPending, isSuccess } = useNewsletter();

  const form = useForm<NewsletterSchemaType>({
    resolver: zodResolver(newsletterSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: NewsletterSchemaType) => {
    mutate(data, {
      onError: (error: any) => {
        form.setError("email", {
          type: "server",
          message: error.message.toUpperCase(),
        });
      },
    });
  };
  return (
    <div className="flex flex-col min-h-[150px]">
      {isSuccess ? (
        <div
          aria-live="polite"
          className="animate-in fade-in zoom-in-95 duration-500 my-auto"
        >
          <h3
            className="text-[#880808] text-xs tracking-[0.3em] mb-3 uppercase font-bold"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            ¡BIENVENIDO AL RUIDO!
          </h3>
          <p className="text-[#f0ece4] text-sm tracking-wider opacity-90 leading-relaxed">
            El ruido real empieza ahora. <br />
            Revisa tu correo para confirmar.
          </p>
        </div>
      ) : (
        <div className="animate-in fade-in duration-300">
          <h3
            className="text-[#880808] text-xs tracking-[0.3em] mb-6 uppercase"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            UNIRSE AL RUIDO
          </h3>
          <p className="text-[#888480] text-sm mb-5 leading-relaxed">
            Acceso prioritario a entradas, lanzamientos exclusivos y material
            inédito. Sin filtros. Solo ruido real.
          </p>

          <Form {...form}>
            <NewsletterForm onSubmit={onSubmit} isLoading={isPending} />
          </Form>
        </div>
      )}
    </div>
  );
}
