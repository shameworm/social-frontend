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
    <aside className="hidden xl:block">
      <Card className="w-72 bg-sidebar text-sidebar-foreground border border-sidebar-border shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <h2 className="text-lg font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Suggested Friends
          </h2>
        </CardHeader>
        <CardContent className="space-y-3 px-6 pb-6">
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
