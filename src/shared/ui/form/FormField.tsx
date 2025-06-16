import type { Control, FieldValues, FormState, Path } from 'react-hook-form';

import {
  FormField as ShadcnFormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from './Form';

import { cn } from '@/shared/lib/utils';

type FormType<T extends FieldValues> = {
  control: Control<T> | undefined;
  formState: FormState<T> | undefined;
};

type FormFieldProps<T extends FieldValues> = {
  form: FormType<T>;
  name: Path<T>;
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderInput: (field: any) => React.ReactNode;
  className?: string;
};

export function FormField<T extends FieldValues>({
  form,
  name,
  label,
  renderInput,
  className,
}: FormFieldProps<T>) {
  if (!form) return null;
  return (
    <ShadcnFormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn('mx-auto w-full lg:w-80', className)}>
          {label && <FormLabel className="text-base">{label}</FormLabel>}
          <FormControl>{renderInput(field)}</FormControl>
          {form?.formState?.errors[name] && (
            <FormMessage>{form.formState.errors[name]?.message?.toString()}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
}
