import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email required" }),
  company: z.string().optional(),
  employees: z.string().optional(),
  message: z.string().min(1, { message: "Message is required" }),
  agree: z.literal(true, {
    error: "You must agree to the terms",
  }),
});

export type FormValues = z.infer<typeof formSchema>;
