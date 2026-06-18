import { z } from 'zod';

export const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export const chatMessageSchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(['user', 'assistant']),
      content: z.string().min(1).max(500),
    })
  ).min(1),
});

export type EmailFormData = z.infer<typeof emailSchema>;
export type ChatMessageData = z.infer<typeof chatMessageSchema>;
