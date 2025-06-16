import { Outlet } from 'react-router-dom';

import { TopBarWidget } from '@/widgets/top-bar';

import { PageLayout } from '@/shared/ui/page-layout';
import { SideBarWidget } from '@/widgets/side-bar';

export function MainLayout() {
  const topBar = <TopBarWidget />;
  const sideBar = <SideBarWidget />;

  return (
    <PageLayout topBar={topBar} sideBar={sideBar}>
      <Outlet />
    </PageLayout>
  );
}
