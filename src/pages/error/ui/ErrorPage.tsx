import { useRouteError } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';

import { TopBarWidget } from '@/widgets/top-bar';
import { PageLayout } from '@/shared/ui/page-layout';

import { useErrorPage } from '../hooks';

export function ErrorPage() {
  const topBar = <TopBarWidget />;
  const error = useRouteError();
  const { status, statusText, message } = useErrorPage(
    error as { status: number; statusText: string }
  );

  return (
    <PageLayout topBar={topBar}>
      <div className="flex flex-col items-center justify-center gap-4">
        <ShieldAlert className="text-destructive h-24 w-24" />
        <h1 className="min-w-24 text-center text-xl font-extrabold md:text-3xl text-destructive">
          {status}
        </h1>
        <h1 className="min-w-24 text-center text-xl font-semibold md:text-3xl text-destructive">
          {statusText}
        </h1>
        <p className="max-w-96 text-center text-base md:text-xl text-destructive">{message}</p>
      </div>
    </PageLayout>
  );
}
