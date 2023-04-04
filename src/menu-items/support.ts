// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

interface SupportItem {
  id: string;
  title: string;
  type: 'item';
  url: string;
  icon: React.ReactNode | any;
  external?: boolean;
  target?: boolean;
}

interface SupportGroup {
  id: string;
  title: string;
  type: 'group';
  children: SupportItem[];
}

const support: SupportGroup = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.ChromeOutlined,
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis-react/',
      icon: icons.QuestionOutlined,
      external: true,
      target: true,
    },
  ],
};

export default support;
