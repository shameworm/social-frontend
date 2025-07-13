import type { JSX } from 'react';
import { NavLink } from 'react-router-dom';
import { House, Send, Bell, Contact, Settings } from 'lucide-react';

import { Separator } from '@/shared/ui/separator';
import { Badge } from '@/shared/ui/badge';

type NavLinkProps = {
  title: string;
  url: string;
  icon: JSX.Element;
  badge?: string | number;
};

type NavLinksProps = {
  messageCount?: number;
  notificationCount?: number;
  friendRequestCount?: number;
  onLinkClick?: (url: string) => void;
};

const createDefaultNavLinks = (
  messageCount?: number,
  notificationCount?: number,
  friendRequestCount?: number
): NavLinkProps[] => [
  {
    title: 'Feed',
    url: '/',
    icon: <House />,
  },
  {
    title: 'Friends',
    url: '/friends',
    icon: <Contact />,
    badge: friendRequestCount && friendRequestCount > 0 ? friendRequestCount : undefined,
  },
  {
    title: 'Messages',
    url: '/messages',
    icon: <Send />,
    badge: messageCount && messageCount > 0 ? messageCount : undefined,
  },
  {
    title: 'Notifications',
    url: '/notifications',
    icon: <Bell />,
    badge: notificationCount && notificationCount > 0 ? notificationCount : undefined,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: <Settings />,
  },
];

export function NavLinks({
  messageCount,
  notificationCount,
  friendRequestCount,
  onLinkClick,
}: NavLinksProps) {
  const navLinks = createDefaultNavLinks(messageCount, notificationCount, friendRequestCount);

  return (
    <ul className="space-y-1">
      {navLinks.map((navLink, index) => (
        <li key={index}>
          <NavLink
            to={navLink.url}
            onClick={() => onLinkClick?.(navLink.url)}
            className="block px-4 py-2 rounded-md transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <div className="flex items-center justify-between my-3">
              <div className="flex items-center gap-2">
                {navLink.icon}
                <h3 className="ml-2.5">{navLink.title}</h3>
              </div>
              {navLink.badge && (
                <Badge className="ml-auto rounded-full min-w-[1.25rem] h-5 px-2">
                  {typeof navLink.badge === 'number' && navLink.badge > 99 ? '99+' : navLink.badge}
                </Badge>
              )}
            </div>
          </NavLink>
          {index !== navLinks.length - 1 && <Separator className="my-1" />}
        </li>
      ))}
    </ul>
  );
}
