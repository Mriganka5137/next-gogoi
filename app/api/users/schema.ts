import { z } from "zod";

export const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name is required. Minimum 3 characters" })
    .max(255),
  email: z.string().email({ message: "Invalid email address" }),
});
