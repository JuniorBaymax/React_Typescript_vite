import { lazy } from 'react';

// project import
import Loadable from '~/components/Loadable';
import MinimalLayout from '~/layout/MinimalLayout';
import Status401 from '~/pages/Status/Status401';

// render - login
const AuthLogin = Loadable(lazy(() => import('~/pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('~/pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: 'login',
      element: <AuthLogin />,
    },
    {
      path: 'register',
      element: <AuthRegister />,
    },
    {
      path: 'session-expired',
      element: <Status401 />,
    },
  ],
};

export default LoginRoutes;
