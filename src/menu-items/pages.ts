// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';
import { MenuProps } from './types';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages: MenuProps = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Login',
      type: 'item',
      url: '/login',
      icon: icons.LoginOutlined,
      target: true,
    },
    {
      id: 'register1',
      title: 'Register',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true,
    },
  ],
};

export default pages;
