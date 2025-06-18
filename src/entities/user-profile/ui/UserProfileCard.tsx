import { UserAvatar } from '@/shared/ui/avatar';
import { Card, CardContent } from '@/shared/ui/card';

type UserProfileCardProps = {
  image: string;
  fullname: string;
  username: string;
  profileDescription?: string;
  posts: number;
  followers: number;
  following: number;
};

export function UserProfileCard({
  image,
  fullname,
  username,
  profileDescription,
  posts,
  followers,
  following,
}: UserProfileCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <section className="flex flex-col gap-4">
          <header className="flex justify-between items-start flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <UserAvatar image={image} fallback={fullname[0]} className="h-20 w-20" />
              <div>
                <h2 className="text-xl font-semibold">{fullname}</h2>
                <p className="text-sm text-muted-foreground">{username}</p>
              </div>
            </div>
            <dl className="flex gap-6 text-center">
              <div>
                <dt className="text-sm text-muted-foreground">Posts</dt>
                <dd className="text-lg font-medium">{posts}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Followers</dt>
                <dd className="text-lg font-medium">{followers}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Following</dt>
                <dd className="text-lg font-medium">{following}</dd>
              </div>
            </dl>
          </header>
          {profileDescription && (
            <p className="text-sm text-muted-foreground">{profileDescription}</p>
          )}
        </section>
      </CardContent>
    </Card>
  );
}
