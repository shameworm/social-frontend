import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

type UserAvatarProps = {
  image: string;
  fallback: string;
  className?: string;
};

export function UserAvatar({ image, fallback, className }: UserAvatarProps) {
  return (
    <Avatar className={className}>
      <AvatarImage src={image} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
