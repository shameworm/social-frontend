import { Search } from 'lucide-react';

import { LogoutButton } from '@/features/auth/logout';

import { Input } from '@/shared/ui/input';
import { Logo } from '@/shared/ui/logo';
import { Separator } from '@radix-ui/react-separator';
import { Link } from 'react-router-dom';

export function TopBarWidget() {
  return (
    <header>
      <div className="flex justify-between items-center mx-auto max-w-screen-xl px-4 py-6">
        <Link to={'/'}>
          <Logo />
        </Link>
        <div className="relative w-full max-w-xl hidden lg:block -ml-32">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input className="pl-10" placeholder="Search" />
        </div>
        <LogoutButton />
      </div>
      <Separator />
    </header>
  );
}
