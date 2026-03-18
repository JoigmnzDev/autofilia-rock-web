import { useMutation } from "@tanstack/react-query";
import type { NewsletterSchemaType } from "@/lib/schemas/subscribe.schema";
import { subscribeNewsletter } from "@/app/actions/subscribe-newsletter";

export const useSubscribeNewsletter = () => {
  return useMutation({
    mutationFn: (data: NewsletterSchemaType) => subscribeNewsletter(data),
  });
};
