import { useMutation } from "@tanstack/react-query";
import { NewsletterSchemaType } from "../schemas/newsletter-schema";
import { subscribeToNewsletter } from "../actions/newsletter-actions";

export const useNewsletter = () => {
  return useMutation({
    mutationFn: (data: NewsletterSchemaType) => subscribeToNewsletter(data),
  });
};
