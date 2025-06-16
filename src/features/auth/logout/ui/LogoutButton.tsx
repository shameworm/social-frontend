import { Button } from '@/shared/ui/button';

import { User } from 'lucide-react';

export function LogoutButton() {
  return (
    <Button type="submit" variant="ghost" className="gap-4">
      Logout
      <User />
    </Button>
  );
}
