import { Ellipsis } from 'lucide-react';

import { UserAvatar } from '@/shared/ui/avatar';
import { Card, CardHeader, CardContent } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';

type PostCardProps = {
  image: string;
  fullname: string;
  username: string;
  postContent: string;
  postTimestamp: string;
  postImage?: string;
};

export function PostCard({
  image,
  fullname,
  username,
  postContent,
  postTimestamp,
  postImage,
}: PostCardProps) {
  return (
    <Card className="transition-all duration-200 hover:shadow-md hover:shadow-black/15 gap-3">
      <CardHeader className="relative pb-0">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 h-8 w-8 hover:bg-muted transition-colors"
          aria-label="Post options"
        >
          <Ellipsis className="h-4 w-4" />
        </Button>

        <div className="flex gap-3">
          <UserAvatar image={image} fallback={fullname[0]} className="h-10 w-10" />
          <div className="flex flex-col flex-1">
            <h2 className="font-semibold leading-tight text-foreground">{fullname}</h2>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>{username}</span>
              <span>•</span>
              <span>{postTimestamp}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{postContent}</p>
        {postImage && (
          <div className="mt-3 w-full overflow-hidden rounded-lg bg-muted">
            <div className="aspect-video w-full">
              <img
                src={postImage || '/placeholder.svg'}
                alt="Post image"
                className="h-full w-full object-cover transition-opacity duration-200"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
