import { Outlet } from 'react-router-dom';

import { TopBarWidget } from '@/widgets/top-bar';

import { PageLayout } from '@/shared/ui/page-layout';

export function MainLayout() {
  const topBar = <TopBarWidget />;
  return (
    <PageLayout topBar={topBar}>
      <Outlet />
    </PageLayout>
  );
}
