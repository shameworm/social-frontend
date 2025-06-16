import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { type CreatePostFormValues, createPostSchema } from '../model';

export function useCreatePostForm() {
  const form = useForm<CreatePostFormValues>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      postContent: '',
      imageFile: null,
    },
  });

  function onSubmit() {
    console.log(form);
  }

  return { form, onSubmit };
}
