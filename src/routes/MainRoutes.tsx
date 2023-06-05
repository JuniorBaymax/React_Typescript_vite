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

const Shadow = Loadable(lazy(() => import('~/pages/components-overview/Shadow')));

const Status404 = Loadable(lazy(() => import('~/pages/Status/Status404')));
const OrderTable = Loadable(lazy(() => import('~/pages/OrderTable')));
const ManageOrder = Loadable(lazy(() => import('~/pages/ManageOrder')));
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
          path: 'orders',
          element: <OrderTable />,
        },
        {
          path: 'dashboard',
          index: true,
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
          path: 'orders/manage/:id',
          element: <ManageOrder />,
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
