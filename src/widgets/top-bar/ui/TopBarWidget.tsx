import { Search } from 'lucide-react';

import { LogoutButton } from '@/features/auth/logout';

import { Input } from '@/shared/ui/input';
import { Logo } from '@/shared/ui/logo';

export function TopBarWidget() {
  return (
    <header>
      <div className="flex justify-between items-center mx-20 min-h-20">
        <Logo />
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input className="pl-10" placeholder="Search" />
        </div>
        <LogoutButton />
      </div>
    </header>
  );
}
