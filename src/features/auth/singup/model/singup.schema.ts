import { z } from 'zod';

export const signupSchema = z.object({
  fullName: z
    .string()
    .regex(/^[A-Z][a-z]+\s[A-Z][a-z]+$/, "Full name must be in 'First Last' format"),
  email: z.string().email('Invalid email format'),
  username: z.string().min(6, 'Username must be at least 6 characters long'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  agreeOnTerm: z
    .boolean()
    .refine(value => value === true, { message: 'You must agree to the terms and conditions' }),
});

export type SignupFormValues = z.infer<typeof signupSchema>;
