import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email required" }),
  company: z.string().optional(),
  employees: z.string().optional(),
  message: z.string().min(1, { message: "Message is required" }),
});

export type FormValues = z.infer<typeof formSchema>;
