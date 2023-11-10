import { z } from "zod";

export const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name is required. Minimum 3 characters" })
    .max(20),
  price: z.number().min(1, { message: "Price must be greater than 0" }),
});
