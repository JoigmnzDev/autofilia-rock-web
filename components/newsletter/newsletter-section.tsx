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
  const { mutate, isPending } = useNewsletter();

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
      onSuccess: () => {
        form.reset();
      },
      onError: (error: any) => {
        form.setError("email", {
          type: "server",
          message: error.message.toUpperCase(),
        });
      },
    });
  };

  return (
    <div>
      <h3
        className="text-[#880808] text-xs tracking-[0.3em] mb-6 uppercase"
        style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
      >
        JOIN THE CIRCLE
      </h3>
      <p className="text-[#888480] text-sm mb-5 leading-relaxed">
        First access to tickets, exclusive drops, raw content.
      </p>

      <Form {...form}>
        <NewsletterForm onSubmit={onSubmit} isLoading={isPending} />
      </Form>
    </div>
  );
}
