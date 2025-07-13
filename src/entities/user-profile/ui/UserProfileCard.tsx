import { UserAvatar } from '@/shared/ui/avatar';
import { Card, CardContent } from '@/shared/ui/card';
import { Badge } from '@/shared/ui/badge';
import { MapPin, Calendar } from 'lucide-react';
import { formatNumber } from '@/shared/lib';

type UserProfileCardProps = {
  image: string;
  fullname: string;
  username: string;
  profileDescription?: string;
  posts: number;
  followers: number;
  following: number;
  isOnline?: boolean;
  status?: 'online' | 'away' | 'busy' | 'offline';
  joinDate?: string;
  location?: string;
  badges?: string[];
  size?: 'sm' | 'md' | 'lg';
  showActions?: boolean;
  isFollowing?: boolean;
};

export function UserProfileCard({
  image,
  fullname,
  username,
  profileDescription,
  posts,
  followers,
  following,
  isOnline = false,
  joinDate,
  location,
  badges = [],
  size = 'md',
}: UserProfileCardProps) {
  const avatarSizeMap = {
    sm: 'sm' as const,
    md: 'lg' as const,
    lg: 'xl' as const,
  };

  const titleSizeMap = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const statsSizeMap = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
  };

  const avatarSize = avatarSizeMap[size];
  const titleSize = titleSizeMap[size];
  const statsSize = statsSizeMap[size];

  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        <section className="flex flex-col gap-4">
          <header className="flex justify-between items-start flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <UserAvatar
                image={image}
                fallback={fullname[0]}
                size={avatarSize}
                isOnline={isOnline}
                showStatusIndicator={true}
                ring={isOnline}
                ringColor="ring-success"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className={`${titleSize} font-semibold truncate`}>{fullname}</h2>
                </div>
                <p className="text-sm text-muted-foreground">@{username}</p>

                {isOnline && (
                  <p className="text-xs text-muted-foreground capitalize mt-1">
                    {isOnline ? 'Online' : 'Offline'}
                  </p>
                )}

                {badges.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {badges.map((badge, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <dl className="flex gap-6 text-center">
              <div>
                <dt className="text-sm text-muted-foreground">Posts</dt>
                <dd
                  className={`${statsSize} font-medium cursor-pointer hover:text-primary transition-colors`}
                  role="button"
                  tabIndex={0}
                >
                  {formatNumber(posts)}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Followers</dt>
                <dd
                  className={`${statsSize} font-medium cursor-pointer hover:text-primary transition-colors`}
                  role="button"
                  tabIndex={0}
                >
                  {formatNumber(followers)}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Following</dt>
                <dd
                  className={`${statsSize} font-medium cursor-pointer hover:text-primary transition-colors`}
                  role="button"
                  tabIndex={0}
                >
                  {formatNumber(following)}
                </dd>
              </div>
            </dl>
          </header>

          {profileDescription && (
            <p className="text-sm text-muted-foreground leading-relaxed">{profileDescription}</p>
          )}

          {(joinDate || location) && (
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              {joinDate && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {joinDate}</span>
                </div>
              )}
              {location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{location}</span>
                </div>
              )}
            </div>
          )}
        </section>
      </CardContent>
    </Card>
  );
}
