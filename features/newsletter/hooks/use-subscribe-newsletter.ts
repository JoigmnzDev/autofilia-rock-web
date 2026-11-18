import { useMutation } from "@tanstack/react-query";
import { SubscribeNewsletterSchemaType } from "../schemas/subscribe-newsletter.schema";
import { subscribeToNewsletter } from "../actions/subscribe.action";

export const useSubscribeNewsletter = () => {
  return useMutation({
    mutationFn: (data: SubscribeNewsletterSchemaType) =>
      subscribeToNewsletter(data),
  });
};
