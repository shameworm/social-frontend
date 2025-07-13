import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

import { LogoutButton } from '@/features/auth/logout';

import { Input } from '@/shared/ui/input';
import { Logo } from '@/shared/ui/logo';
import { Separator } from '@/shared/ui/separator';
import { Button } from '@/shared/ui/button';

export function TopBarWidget() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between mx-auto max-w-screen-xl px-4 py-4">
        <div className="flex-shrink-0">
          <Link to={'/'} className="block hover:opacity-80 transition-opacity">
            <Logo />
          </Link>
        </div>

        <div className="hidden lg:flex flex-1 max-w-lg mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              className="pl-10 bg-muted/50 border-muted-foreground/20 focus:bg-background transition-colors"
              placeholder="Search posts, users..."
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden p-2 hover:bg-muted rounded-full  transition-colors"
          >
            <Search className="h-5 w-5 text-muted-foreground" />
          </Button>

          <LogoutButton />
        </div>
      </div>
      <Separator />
    </header>
  );
}
