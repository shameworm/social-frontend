import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './layout';
import { LoginPage } from '@/pages/login';

export const router = createBrowserRouter([
  {
    id: 'root',
    children: [
      {
        element: <RootLayout />,
        children: [{ index: true, element: <LoginPage /> }],
      },
    ],
  },
]);
