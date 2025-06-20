import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout, MainLayout } from './layout';
import { lazy } from 'react';

const LoginPage = lazy(() =>
  import('@/pages/login').then(module => ({ default: module.LoginPage }))
);

const SingupPage = lazy(() =>
  import('@/pages/singup').then(module => ({ default: module.SignupPage }))
);

const FeedPage = lazy(() => import('@/pages/feed').then(module => ({ default: module.FeedPage })));

const UserProfilePage = lazy(() =>
  import('@/pages/user-profile').then(module => ({ default: module.UserProfilePage }))
);

const SettingsPage = lazy(() =>
  import('@/pages/settings').then(module => ({ default: module.SettingsPage }))
);

export const router = createBrowserRouter([
  {
    id: 'root',
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <FeedPage /> },
          { path: '/profile/:userId', element: <UserProfilePage /> },
          { path: '/settings', element: <SettingsPage /> },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          { path: 'login', element: <LoginPage /> },
          { path: '/signup', element: <SingupPage /> },
        ],
      },
    ],
  },
]);
