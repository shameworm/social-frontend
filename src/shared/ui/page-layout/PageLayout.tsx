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
  ...props
}: Properties) {
  return (
    <div className={cn('flex flex-col *:py-4 ', className)} {...props}>
      {topBar}
      <div className="flex gap-4">
        {sideBar}
        <main className="w-full">
          <Suspense fallback={<Skeleton />}>{children}</Suspense>
        </main>
      </div>
    </div>
  );
}
