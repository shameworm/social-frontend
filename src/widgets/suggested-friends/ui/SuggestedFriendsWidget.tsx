import { Card, CardContent, CardHeader } from '@/shared/ui/card';

import { mockSuggestedFriends } from '../__mocks__';
import { SuggestedFriendItem } from './SuggestedFriendsItem';

export function SuggestedFriendsWidget() {
  return (
    <aside className="hidden xl:block w-96">
      <Card className="bg-sidebar text-sidebar-foreground border border-sidebar-border shadow-md">
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
