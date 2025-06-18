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
  const isCentered = !sideBar && !suggestedFriends;

  return (
    <div className={cn('flex flex-col min-h-screen bg-background', className)} {...props}>
      {topBar}

      <div className="flex-1">
        <div
          className={cn(
            'mx-auto max-w-screen-xl px-4 py-6',
            isCentered
              ? 'flex items-center justify-center min-h-[calc(100vh-15rem)]'
              : 'flex justify-between gap-6'
          )}
        >
          {isCentered ? (
            <Suspense fallback={<Skeleton />}>{children}</Suspense>
          ) : (
            <>
              {sideBar}
              <main>
                <Suspense fallback={<Skeleton />}>{children}</Suspense>
              </main>
              {suggestedFriends}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
