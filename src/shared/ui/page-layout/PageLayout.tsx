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
              ? 'flex items-center justify-center min-h-[calc(100vh-12rem)]'
              : 'flex gap-4 md:gap-6'
          )}
        >
          {isCentered ? (
            <main className="w-full max-w-md">
              <Suspense fallback={<Skeleton className="min-h-[200px]" />}>{children}</Suspense>
            </main>
          ) : (
            <>
              {sideBar && (
                <aside className="hidden lg:block w-64 xl:w-72 flex-shrink-0">{sideBar}</aside>
              )}
              <main className="flex-1 min-w-0">
                <Suspense fallback={<Skeleton className="min-h-[200px]" />}>{children}</Suspense>
              </main>
              {suggestedFriends && (
                <aside className="hidden xl:block w-64 xl:w-72 flex-shrink-0">
                  {suggestedFriends}
                </aside>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
