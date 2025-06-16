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

export const router = createBrowserRouter([
  {
    id: 'root',
    children: [
      {
        element: <MainLayout />,
        children: [{ index: true, element: <FeedPage /> }],
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
