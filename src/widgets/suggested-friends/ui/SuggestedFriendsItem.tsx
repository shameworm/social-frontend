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
    <div className="flex items-center justify-between py-1">
      <div className="flex items-center gap-2">
        <UserAvatar image={image} fallback={fullname[0]} className="h-10 w-10" />
        <div className="flex flex-col">
          <p className="text-sm font-medium leading-tight">{fullname}</p>
          <p className="text-xs text-muted-foreground">@{username}</p>
        </div>
      </div>
      <Button variant="secondary" size="icon" className="shrink-0">
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
}
