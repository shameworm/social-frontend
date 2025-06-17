import { CreatePostForm } from '@/features/posts/create';
import { Post } from '@/entities/post';

import { mockPosts } from '../__mocks__/';

export function FeedPage() {
  return (
    <div className="space-y-6">
      <CreatePostForm />
      <ul className="space-y-6">
        {mockPosts.map((post, index) => (
          <li key={index}>
            <Post {...post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
