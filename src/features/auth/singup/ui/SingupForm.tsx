import { Link } from 'react-router-dom';

import { Form, FormField } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';

import { useSignup } from '../hooks';
import { Checkbox } from '@/shared/ui/checkbox';
import { Label } from '@/shared/ui/label';

export function SingupForm() {
  const { form, onSubmit } = useSignup();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          form={form}
          label="Full Name"
          name="fullName"
          renderInput={field => <Input {...field} />}
        />
        <FormField
          form={form}
          label="Email"
          name="email"
          renderInput={field => <Input {...field} type="email" />}
        />
        <FormField
          form={form}
          label="Username"
          name="username"
          renderInput={field => <Input {...field} />}
        />
        <FormField
          form={form}
          label="Password"
          name="password"
          renderInput={field => <Input {...field} type="password" />}
        />
        <FormField
          form={form}
          name="agreeOnTerm"
          renderInput={field => (
            <div className="flex items-end gap-4 mt-4 ">
              <Checkbox
                checked={field.value || false}
                onCheckedChange={field.onChange}
                className="h-4 w-4"
              />
              <Label className="text-muted-foreground  ">
                I agree to the Terms and Privacy Policy.
              </Label>
            </div>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full mt-10 font-semibold max-w-80 mx-auto"
          disabled={form.formState.isSubmitting}
        >
          Singup
        </Button>
        <div className="text-center mt-8">
          <Link to={'/login'}>
            <Button variant="link">
              Have an account?<span className="font-semibold">Log in</span>
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  );
}
