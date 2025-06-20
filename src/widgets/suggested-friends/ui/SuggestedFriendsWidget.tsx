import { Card, CardContent, CardHeader } from '@/shared/ui/card';

import { mockSuggestedFriends } from '../__mocks__';
import { SuggestedFriendItem } from './SuggestedFriendsItem';
import { useLocation } from 'react-router-dom';

export function SuggestedFriendsWidget() {
  const { pathname } = useLocation();

  const showWidget = !['/settings', '/messages'].includes(pathname);

  if (!showWidget) {
    return null;
  }

  return (
    <aside className="hidden xl:block ">
      <Card className="w-80 bg-sidebar text-sidebar-foreground border border-sidebar-border shadow-md ">
        <CardHeader>
          <h2 className="text-lg font-semibold">Suggested Friends</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockSuggestedFriends.map((sugFriend, index) => (
            <SuggestedFriendItem
              key={index}
              image={sugFriend.image}
              fullname={sugFriend.fullname}
              username={sugFriend.username}
            />
          ))}
        </CardContent>
      </Card>
    </aside>
  );
}
