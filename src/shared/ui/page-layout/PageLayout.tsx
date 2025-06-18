import { Suspense } from 'react';

import { cn } from '@/shared/lib/utils';
import { Skeleton } from '../skeleton/Skeleton';

type Properties = React.HTMLAttributes<HTMLDivElement> & {
  topBar?: React.ReactNode;
  sideBar?: React.ReactNode;
  suggestedFriends?: React.ReactNode;
};

export function PageLayout({
  topBar = null,
  sideBar = null,
  suggestedFriends = null,
  className,
  children,
  ...props
}: Properties) {
  return (
    <div className={cn('flex flex-col min-h-screen bg-background', className)} {...props}>
      {topBar}

      <div className="flex-1">
        <div className="mx-auto flex max-w-screen-xl justify-between gap-6 px-4 py-6">
          {sideBar}
          <main>
            <Suspense fallback={<Skeleton />}>{children}</Suspense>
          </main>
          {suggestedFriends}
        </div>
      </div>
    </div>
  );
}
