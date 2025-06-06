import { Outlet } from 'react-router-dom';

import { PageLayout } from '@/shared/ui/page-layout';
import { Logo } from '@/shared/ui/logo';

export function RootLayout() {
  const topBar = <Logo />;
  return (
    <PageLayout topBar={topBar}>
      <Outlet />
    </PageLayout>
  );
}
