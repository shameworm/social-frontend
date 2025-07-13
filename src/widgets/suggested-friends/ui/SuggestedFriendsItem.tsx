import { Plus } from 'lucide-react';

import { UserAvatar } from '@/shared/ui/avatar';
import { Button } from '@/shared/ui/button';

type SuggestedFriendItemProps = {
  image: string;
  fullname: string;
  username: string;
};

export function SuggestedFriendItem({ image, fullname, username }: SuggestedFriendItemProps) {
  return (
    <div className="flex items-center justify-between py-2 px-2 rounded-lg hover:bg-sidebar-accent/50 transition-all duration-200 group cursor-pointer">
      <div className="flex items-center gap-3">
        <UserAvatar
          image={image}
          fallback={fullname[0]}
          className="h-11 w-11 ring-2 ring-sidebar-border group-hover:ring-sidebar-accent transition-all duration-200"
        />
        <div className="flex flex-col">
          <p className="text-sm font-semibold leading-tight text-sidebar-foreground group-hover:text-sidebar-foreground/90 transition-colors duration-200">
            {fullname}
          </p>
          <p className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200">
            {username}
          </p>
        </div>
      </div>
      <Button
        variant="secondary"
        size="icon"
        className="shrink-0 h-8 w-8 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200 group-hover:scale-105 shadow-sm hover:shadow-md"
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
}
