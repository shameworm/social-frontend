import { cn } from '@/shared/lib/utils';
import { Waypoints } from 'lucide-react';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn('flex justify-center', className)}>
      <div className="flex items-center space-x-4">
        <Waypoints className="text-primary h-8 w-8" />
        <h1 className="flex flex-col md:block font-extrabold font-sans text-xl text-foreground">
          Connect <span>Social</span>
        </h1>
      </div>
    </div>
  );
}
