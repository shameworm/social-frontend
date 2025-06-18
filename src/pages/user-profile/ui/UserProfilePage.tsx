import { UserProfileCard } from '@/entities/user-profile';

import { mockUserPosts, mockUserProfileCard } from '../__mocks__';
import { PostCard } from '@/entities/post';

export function UserProfilePage() {
  return (
    <div className="space-y-6">
      <UserProfileCard {...mockUserProfileCard} />
      {mockUserPosts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
}
