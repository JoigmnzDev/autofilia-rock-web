"use client";

import {
  newsletterSchema,
  NewsletterSchemaType,
} from "@/lib/schemas/subscribe.schema";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useSubscribeNewsletter } from "@/hooks/use-subscribe-newsletter";
import { useState } from "react";

export default function NewsletterSection() {
  const [showSuccess, setShowSuccess] = useState(false);
  const { mutate, isPending } = useSubscribeNewsletter();

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
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 4000);
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
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
          aria-label="Newsletter signup"
          className="flex flex-col sm:flex-row gap-2 items-start"
        >
          {/* USAMOS EL FORMFIELD PARA QUE RADIX Y ZOD SEPAN QUÉ PASA */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1 space-y-0">
                <FormControl>
                  <input
                    {...field} // Esto sustituye al register("email")
                    type="email"
                    placeholder="sample@email.com"
                    className="w-full bg-[#0f0f0f] border border-[#2a2a2a] text-[#f0ece4] placeholder:text-[#888480] px-4 py-3 text-xs tracking-wider focus:outline-none focus:border-[#880808] transition-colors duration-200 disabled:opacity-50"
                    aria-label="Email address"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage className="text-[#880808] text-xs mt-1 tracking-wider font-normal" />
                {showSuccess && (
                  <p className="text-green-700 text-xs">
                    ¡Te has unido al círculo!
                  </p>
                )}
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isPending}
            className="bg-[#880808] text-[#f0ece4] px-5 py-3 text-xs tracking-[0.2em] hover:bg-[#a00a0a] transition-colors duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            {isPending ? <Loader2 className="animate-spin" /> : "SUBSCRIBE"}
          </button>
        </form>
      </Form>
    </div>
  );
}
