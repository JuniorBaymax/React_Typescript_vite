// assets
import { DashboardOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';

interface MenuItem {
  id: string;
  title: string;
  type: 'group' | 'item';
  url?: string;
  icon?: ReactNode | any;
  breadcrumbs?: boolean;
  children?: MenuItem[];
}

// icons
const icons = {
  DashboardOutlined,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard: MenuItem = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.DashboardOutlined,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
