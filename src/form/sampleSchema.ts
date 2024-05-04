import { z } from "zod";

export const sampleFormSchema = z.object({
  input: z.string().nonempty({
    message: "inputは必須です",
  }),
  select: z.string().nonempty({
    message: "selectは必須です",
  }),
});
