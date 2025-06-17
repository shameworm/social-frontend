import { Outlet } from 'react-router-dom';

import { TopBarWidget } from '@/widgets/top-bar';
import { SideBarWidget } from '@/widgets/side-bar';
import { SuggestedFriendsWidget } from '@/widgets/suggested-friends';

import { PageLayout } from '@/shared/ui/page-layout';

export function MainLayout() {
  const topBar = <TopBarWidget />;
  const sideBar = <SideBarWidget />;
  const suggestedFriends = <SuggestedFriendsWidget />;

  return (
    <PageLayout topBar={topBar} sideBar={sideBar} suggestedFriends={suggestedFriends}>
      <Outlet />
    </PageLayout>
  );
}
