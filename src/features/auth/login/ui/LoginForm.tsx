import { Link } from 'react-router-dom';

import { Form, FormField } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';

import { useLogin } from '../hooks';

export function LoginForm() {
  const { form, onSubmit } = useLogin();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          form={form}
          label="Email"
          name="email"
          renderInput={field => <Input {...field} type="email" />}
        />
        <FormField
          form={form}
          label="Password"
          name="password"
          renderInput={field => <Input {...field} type="password" />}
        />
        <div className="text-right mr-3">
          <Link to={'#'}>
            <p className="text-sm font-light">Forgot password?</p>
          </Link>
        </div>
        <Button
          type="submit"
          size="lg"
          className="w-full mt-12 font-semibold max-w-80 mx-auto"
          disabled={form.formState.isSubmitting}
        >
          Login
        </Button>
        <div className="text-center mt-8">
          <Link to={'/signup'}>
            <Button variant="link">
              Don't have an account?<span className="font-semibold">Sign up</span>
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  );
}
