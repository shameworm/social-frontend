import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { type SignupFormValues, signupSchema } from '../model';

export function useSignup() {
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: '',
      email: '',
      username: '',
      password: '',
      agreeOnTerm: false,
    },
  });

  function onSubmit() {
    console.log(form);
  }

  return { form, onSubmit };
}
