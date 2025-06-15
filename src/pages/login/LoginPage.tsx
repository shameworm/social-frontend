import { LoginForm } from '@/features/auth/login';
import { Card, CardContent } from '@/shared/ui/card';

export function LoginPage() {
  return (
    <Card className="mx-auto max-w-96">
      <CardContent className="my-16 p-4">
        <LoginForm />
      </CardContent>
    </Card>
  );
}
