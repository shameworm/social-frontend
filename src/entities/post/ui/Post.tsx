import { Ellipsis } from 'lucide-react';

import { UserAvatar } from '@/shared/ui/avatar';
import { Card, CardHeader, CardContent } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';

type PostProps = {
  image: string;
  fullname: string;
  username: string;
  postContent: string;
  postTimestamp: string;
  postImage?: string;
};

export function Post({
  image,
  fullname,
  username,
  postContent,
  postTimestamp,
  postImage,
}: PostProps) {
  return (
    <Card className="p-4">
      <CardHeader className="p-0 flex items-start justify-between space-y-0">
        <div className="flex gap-3">
          <UserAvatar image={image} fallback={fullname[0]} className="h-12 w-12" />
          <div className="flex flex-col">
            <h2 className="font-medium leading-tight">{fullname}</h2>
            <span className="text-sm text-muted-foreground">{username}</span>
          </div>
        </div>
        <div className="flex flex-col items-end text-right gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Ellipsis className="h-4 w-4" />
          </Button>
          <p className="text-xs text-muted-foreground">{postTimestamp}</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 p-0">
        <p className="text-sm text-foreground">{postContent}</p>
        {postImage && (
          <div className="w-full overflow-hidden rounded-lg">
            <img
              src={postImage}
              alt="Post image"
              className="mt-4 w-full h-80 object-cover rounded-md"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
