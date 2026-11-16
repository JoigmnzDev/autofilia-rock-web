import { useFormContext } from "react-hook-form";
import { NewsletterSchemaType } from "../schemas/newsletter-schema";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
      className={cn(
        "flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 w-full",
        className,
      )}
    >
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="relative flex-1 space-y-0">
            <FormControl>
              <Input
                {...field}
                type="email"
                placeholder="unete@alruido.com"
                disabled={isLoading}
                className={cn(
                  "h-[43px] w-full bg-[#0f0f0f] border border-[#2a2a2a] text-[#f0ece4] transition-colors duration-300",
                  "placeholder:text-[#880808]",
                  "focus-visible:ring-0 focus-visible:border-[#880808]",
                  "md:text-xs tracking-wider",
                  "rounded-none px-4",
                )}
              />
            </FormControl>
            <FormMessage className="absolute -bottom-5 left-0 text-[#880808] text-[10px] tracking-wider uppercase" />
          </FormItem>
        )}
      />

      <Button
        type="submit"
        disabled={isLoading}
        className={cn(
          "flex items-center justify-center gap-2 h-[43px] whitespace-nowrap",
          "bg-[#880808] text-[#f0ece4] hover:bg-[#a00a0a] transition-colors duration-200",
          "px-8 text-xs tracking-[0.2em] uppercase font-bold",
          "rounded-none shadow-none border-none",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "w-full sm:w-auto",
        )}
        style={{
          fontFamily: "var(--font-oswald), Impact, sans-serif",
        }}
      >
        {isLoading ? (
          <Loader2 className="animate-spin size-4" />
        ) : (
          "SUSCRIBIRME"
        )}
      </Button>
    </form>
  );
}
