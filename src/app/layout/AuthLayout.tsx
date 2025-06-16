import { Outlet } from 'react-router-dom';

import { PageLayout } from '@/shared/ui/page-layout';
import { Logo } from '@/shared/ui/logo';

export function AuthLayout() {
  const topBar = <Logo className="my-10" />;
  return (
    <PageLayout topBar={topBar}>
      <Outlet />
    </PageLayout>
  );
}
