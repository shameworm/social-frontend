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
    <div className={cn('flex flex-col *:py-4 ', className)} {...props}>
      {topBar}
      <div className="flex justify-between gap-8 mt-4 sm:mx-24">
        {sideBar}
        <main className="w-full">
          <Suspense fallback={<Skeleton />}>{children}</Suspense>
        </main>
        {suggestedFriends}
      </div>
    </div>
  );
}
