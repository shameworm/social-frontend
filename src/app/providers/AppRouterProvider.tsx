import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import { Skeleton } from '@/shared/ui/skeleton';

import { router } from '../router';

export function AppRouterProvider() {
  return (
    <Suspense fallback={<Skeleton />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
