import { CreatePostForm } from '@/features/posts/create';
import { PostCard } from '@/entities/post';

import { mockPosts } from '../__mocks__/';

export function FeedPage() {
  return (
    <div className="space-y-6">
      <CreatePostForm />
      {mockPosts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
}
