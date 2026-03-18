import { useFormContext } from "react-hook-form";
import { NewsletterSchemaType } from "./newsletter-schema";
import { cn } from "@/lib/utils";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Loader2 } from "lucide-react";

interface NewsletterFormProps {
  onSubmit: (data: NewsletterSchemaType) => void;
  isLoading: boolean;
  className?: string;
}

export default function NewsletterForm({
  onSubmit,
  className,
  isLoading,
}: NewsletterFormProps) {
  const form = useFormContext<NewsletterSchemaType>();
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
      aria-label="Newsletter signup"
      className={cn("flex flex-col sm:flex-row gap-2 items-start", className)}
    >
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
                disabled={isLoading}
              />
            </FormControl>
            <FormMessage className="text-[#880808] text-xs mt-1 tracking-wider font-normal" />
          </FormItem>
        )}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="bg-[#880808] text-[#f0ece4] px-5 py-3 text-xs tracking-[0.2em] hover:bg-[#a00a0a] transition-colors duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
      >
        {isLoading ? <Loader2 className="animate-spin" /> : "SUBSCRIBE"}
      </button>
    </form>
  );
}
