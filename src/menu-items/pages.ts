// assets
import { DatabaseOutlined, ProfileOutlined, FileTextOutlined } from '@ant-design/icons';
import { MenuProps } from './types';

// icons
const icons = {
  DatabaseOutlined,
  ProfileOutlined,
  FileTextOutlined,
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages: MenuProps = {
  id: 'authentication',
  title: 'Invoices',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Orders',
      type: 'item',
      url: '/orders',
      icon: icons.DatabaseOutlined,
      breadcrumbs: true,
    },
    {
      id: 'invoices',
      title: 'Invoice',
      type: 'item',
      url: '/invoice',
      icon: icons.FileTextOutlined,
    },
  ],
};

export default pages;
