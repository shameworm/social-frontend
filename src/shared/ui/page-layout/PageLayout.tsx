import { Suspense } from 'react';

import { cn } from '@/shared/lib/utils';

import { Skeleton } from '../skeleton/Skeleton';

type Properties = React.HTMLAttributes<HTMLDivElement> & {
  topBar?: React.ReactNode;
  sideBar?: React.ReactNode;
};

export function PageLayout({
  topBar = null,
  sideBar = null,
  className,
  children,
  ...properties
}: Properties) {
  return (
    <div className={cn('flex flex-col *:py-4 ', className)} {...properties}>
      {topBar}
      {sideBar}
      <div className="flex gap-4">
        <main className="w-full">
          <Suspense fallback={<Skeleton />}>{children}</Suspense>
        </main>
      </div>
    </div>
  );
}
