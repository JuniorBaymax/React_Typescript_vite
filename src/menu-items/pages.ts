// assets
import {
  LoginOutlined,
  ProfileOutlined,
  UnorderedListOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { MenuProps } from './types';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  UnorderedListOutlined,
  ShoppingCartOutlined,
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages: MenuProps = {
  id: 'authentication',
  title: 'Manage',
  type: 'group',
  children: [
    {
      id: 'order1',
      title: 'Orders',
      type: 'item',
      url: '/orders',
      icon: icons.UnorderedListOutlined,
    },
    {
      id: 'order2',
      title: 'Lists',
      type: 'item',
      url: 'manage/list',
      icon: icons.ShoppingCartOutlined,
    },
  ],
};

export default pages;
