import type { JSX } from 'react';
import { NavLink } from 'react-router-dom';
import { House, User, Send, Bell } from 'lucide-react';

import { Separator } from '@/shared/ui/separator';

type NavLinkProps = {
  title: string;
  url: string;
  icon: JSX.Element;
};

const navLinks: NavLinkProps[] = [
  {
    title: 'Home',
    url: '/',
    icon: <House />,
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: <User />,
  },
  {
    title: 'Messages',
    url: '/messages',
    icon: <Send />,
  },
  {
    title: 'Notifications',
    url: '/notifications',
    icon: <Bell />,
  },
];

export function NavLinks() {
  return (
    <ul>
      {navLinks.map((navLink, index) => (
        <li key={index}>
          <NavLink
            to={navLink.url}
            className="block px-4 py-2 rounded-md transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <div className="flex items-center my-3 gap-2">
              {navLink.icon}
              <h3 className="ml-2.5">{navLink.title}</h3>
            </div>
            {index !== navLinks.length - 1 && <Separator />}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
