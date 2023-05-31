import { lazy } from 'react';

// project import
import Loadable from '~/components/Loadable';
import MainLayout from '~/layout/MainLayout';
import ProtectedRoute from './ProtectedRoute';
import MinimalLayout from '~/layout/MinimalLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('~/pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('~/pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('~/pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('~/pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('~/pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('~/pages/components-overview/AntIcons')));
const Status404 = Loadable(lazy(() => import('~/pages/Status/Status404')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '',
  element: <ProtectedRoute />,
  children: [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: 'color',
          element: <Color />,
        },
        {
          path: 'dashboard',
          element: <DashboardDefault />,
        },
        {
          path: 'sample-page',
          element: <SamplePage />,
        },
        {
          path: 'shadow',
          element: <Shadow />,
        },
        {
          path: 'typography',
          element: <Typography />,
        },
        {
          path: 'icons/ant',
          element: <AntIcons />,
        },
      ],
    },
    {
      path: '/*',
      element: <MinimalLayout />,
      children: [
        {
          path: '*',
          element: <Status404 />,
        },
      ],
    },
  ],
};

export default MainRoutes;
