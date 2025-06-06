import { Link } from 'react-router-dom';

import { Form, FormField } from '@/shared/ui/form';
import { Button } from '@/shared/ui/button';

import { useLogin } from '../hooks';

export function LoginForm() {
  const { form, onSubmit } = useLogin();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <FormField form={form} name="email" label="Email" placeholder="Email" />
          <FormField
            form={form}
            name="password"
            label="Password"
            placeholder="Password"
            inputType="password"
          />
        </div>

        <div className="text-right mt-4">
          <Link to={'#'}>
            <p className="text-sm font-light">Forgot password?</p>
          </Link>
        </div>

        <div className="text-center">
          <Button
            type="submit"
            size="lg"
            className="w-1/2 mt-4 font-semibold"
            disabled={form.formState.isSubmitting}
          >
            Login
          </Button>
        </div>

        <div className="text-center mt-4">
          <Link to={'#'}>
            <Button variant="link">Don't have an account? Sign up</Button>
          </Link>
        </div>
      </form>
    </Form>
  );
}
