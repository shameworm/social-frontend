import { Link } from 'react-router-dom';

import { UserAvatar } from '@/shared/ui/avatar';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';

import { NavLinks } from './NavLinks';

type User = {
  id: string;
  fullname: string;
  username: string;
  avatar?: string;
  isOnline?: boolean;
};

type SideBarWidgetProps = {
  user?: User;
  messageCount?: number;
  notificationCount?: number;
  friendRequestCount?: number;
  onNavLinkClick?: (url: string) => void;
  isLoading?: boolean;
};

export function SideBarWidget({
  user = {
    id: 'default',
    fullname: 'John Doe',
    username: '@JohnDoe',
    avatar: 'https://github.com/shadcn.png',
    isOnline: true,
  },
  messageCount = 5,
  notificationCount = 115,
  friendRequestCount = 12,
  onNavLinkClick,
  isLoading = false,
}: SideBarWidgetProps) {
  return (
    <aside className="hidden lg:block">
      <Card className="bg-sidebar text-sidebar-foreground border border-sidebar-border shadow-md w-72">
        <CardHeader>
          <Link to="/profile/my-id" className="flex items-center gap-4">
            <div>
              <UserAvatar
                image={user.avatar || 'https://github.com/shadcn.png'}
                fallback={user.fullname[0]}
                size="xl"
                className="h-14 w-14"
                isLoading={isLoading}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold truncate">{user.fullname}</h2>
              <p className="text-sm opacity-80 truncate">{user.username}</p>
            </div>
          </Link>
        </CardHeader>
        <CardContent>
          <NavLinks
            messageCount={messageCount}
            notificationCount={notificationCount}
            friendRequestCount={friendRequestCount}
            onLinkClick={onNavLinkClick}
          />
        </CardContent>
      </Card>
    </aside>
  );
}
