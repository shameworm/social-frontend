import { SingupForm } from '@/features/auth/singup';

import { Card, CardContent } from '@/shared/ui/card';

export function SignupPage() {
  return (
    <Card className="mx-auto max-w-96">
      <CardContent className="mt-16 p-4">
        <SingupForm />
      </CardContent>
    </Card>
  );
}
