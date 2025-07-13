import { cn } from '@/shared/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

type UserAvatarProps = {
  image: string;
  fallback: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isOnline?: boolean;
  showStatusIndicator?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  badge?: string | number;
  ring?: boolean;
  ringColor?: string;
};

const sizeClasses = {
  xs: 'h-6 w-6',
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
};

const statusIndicatorSizes = {
  xs: 'h-2 w-2',
  sm: 'h-2.5 w-2.5',
  md: 'h-3 w-3',
  lg: 'h-3.5 w-3.5',
  xl: 'h-4 w-4',
};

export function UserAvatar({
  image,
  fallback,
  className,
  size = 'md',
  isOnline = false,
  showStatusIndicator = false,
  isLoading = false,
  badge,
  ring = false,
  ringColor = 'ring-primary',
}: UserAvatarProps) {
  const avatarSize = sizeClasses[size];
  const indicatorSize = statusIndicatorSizes[size];
  const statusColor = isOnline ? 'bg-success' : 'bg-muted-foreground';

  return (
    <div className="relative inline-block">
      <Avatar
        className={cn(
          avatarSize,
          ring && `ring-2 ${ringColor} ring-offset-2`,
          isLoading && 'animate-pulse bg-muted',
          className
        )}
      >
        {!isLoading && (
          <AvatarImage src={image || '/placeholder.svg'} alt={`${fallback}'s avatar`} />
        )}
        <AvatarFallback className={isLoading ? 'bg-muted animate-pulse' : ''}>
          {!isLoading && fallback}
        </AvatarFallback>
      </Avatar>

      {(showStatusIndicator || isOnline) && (
        <div
          className={cn(
            'absolute -bottom-0.5 -right-0.5 rounded-full border-2 border-background',
            indicatorSize,
            statusColor
          )}
        />
      )}

      {badge && (
        <div
          className={cn(
            'absolute -top-1 -right-1 min-w-[1.25rem] h-5 bg-destructive text-white text-xs font-medium rounded-full flex items-center justify-center px-1',
            size === 'xs' && 'h-4 text-[10px] min-w-4',
            size === 'sm' && 'h-4 text-[10px] min-w-4'
          )}
        >
          {typeof badge === 'number' && badge > 99 ? '99+' : badge}
        </div>
      )}
    </div>
  );
}
