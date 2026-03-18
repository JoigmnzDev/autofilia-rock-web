import { useMutation } from "@tanstack/react-query";
import { NewsletterSchemaType } from "./newsletter-schema";
import { subscribeToNewsletter } from "./newsletter-actions";

export const useNewsletter = () => {
  return useMutation({
    mutationFn: (data: NewsletterSchemaType) => subscribeToNewsletter(data),
  });
};
