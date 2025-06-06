import type { Control, FieldValues, FormState, Path } from 'react-hook-form';

import { Input } from '@/shared/ui/input';
import {
  FormField as ShadcnFormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from './Form';

type FormType<T extends FieldValues> = {
  control: Control<T> | undefined;
  formState: FormState<T> | undefined;
};

type FormFieldProps<T extends FieldValues> = {
  form: FormType<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  inputType?: string;
};

export function FormField<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  inputType = 'text',
}: FormFieldProps<T>) {
  if (!form) return null;
  return (
    <ShadcnFormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} placeholder={placeholder} type={inputType} />
          </FormControl>
          {form?.formState?.errors[name] && (
            <FormMessage>{form.formState.errors[name]?.message?.toString()}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
}
