import { UserAvatar } from '@/shared/ui/avatar';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import { NavLinks } from './NavLinks';

export function SideBarWidget() {
  return (
    <aside className="w-96 ml-20 mr-8">
      <Card className="bg-sidebar text-sidebar-foreground border border-sidebar-border shadow-md">
        <CardHeader className="flex gap-4">
          <div>
            <UserAvatar image="https://github.com/shadcn.png" fallback="JD" className="h-14 w-14" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">John Doe</h2>
            <p className="text-sm opacity-80">@JohnDoe</p>
          </div>
        </CardHeader>
        <CardContent>
          <NavLinks />
        </CardContent>
      </Card>
    </aside>
  );
}
