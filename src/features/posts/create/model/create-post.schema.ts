import { z } from 'zod';

export const createPostSchema = z.object({
  postContent: z
    .string()
    .max(550, 'Post content must be at most 550 characters long')
    .nonempty('Post content is required'),
  imageFile: z
    .instanceof(File)
    .refine(file => file.size <= 5 * 1024 * 1024, {
      message: 'File must be under 5MB',
    })
    .refine(file => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type), {
      message: 'Only JPG, PNG, and WEBP are allowed',
    })
    .optional()
    .nullable(),
});

export type CreatePostFormValues = z.infer<typeof createPostSchema>;
