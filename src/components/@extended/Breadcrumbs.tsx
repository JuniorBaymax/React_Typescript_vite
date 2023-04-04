import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import MainCard, { MainCardProps } from '../MainCard';

interface NavigationItem {
  type: string;
  title: string;
  url: string;
  children?: NavigationItem[];
  breadcrumbs?: boolean;
}

interface BreadcrumbsProps {
  navigation: {
    items: NavigationItem[];
  };
  title?: boolean;
}

// ==============================|| BREADCRUMBS ||============================== //

const Breadcrumbs: FC<BreadcrumbsProps & MainCardProps> = ({
  navigation,
  title = true,
  ...others
}) => {
  const location = useLocation();
  const [main, setMain] = useState<NavigationItem>();
  const [item, setItem] = useState<NavigationItem>();

  // set active item state
  const getCollapse = (menu: NavigationItem) => {
    if (menu.children) {
      menu.children.filter((collapse) => {
        if (collapse.type && collapse.type === 'collapse') {
          getCollapse(collapse);
        } else if (collapse.type && collapse.type === 'item') {
          if (location.pathname === collapse.url) {
            setMain(menu);
            setItem(collapse);
          }
        }
        return false;
      });
    }
  };

  useEffect(() => {
    navigation?.items?.map((menu) => {
      if (menu.type && menu.type === 'group') {
        getCollapse(menu);
      }
      return false;
    });
  });

  // only used for component demo breadcrumbs
  if (location.pathname === '/breadcrumbs') {
    location.pathname = '/dashboard/analytics';
  }

  let mainContent: JSX.Element | undefined;
  let itemContent: JSX.Element | undefined;
  let breadcrumbContent: JSX.Element = <Typography />;
  let itemTitle = '';

  // collapse item
  if (main && main.type === 'collapse') {
    mainContent = (
      <Typography
        component={Link}
        to={document.location.pathname}
        variant='h6'
        sx={{ textDecoration: 'none' }}
        color='textSecondary'
      >
        {main.title}
      </Typography>
    );
  }

  // items
  if (item && item.type === 'item') {
    itemTitle = item.title;
    itemContent = (
      <Typography variant='subtitle1' color='textPrimary'>
        {itemTitle}
      </Typography>
    );

    // main
    if (item.breadcrumbs !== false) {
      breadcrumbContent = (
        <MainCard border={false} sx={{ mb: 3, bgcolor: 'transparent' }} {...others} content={false}>
          <Grid
            container
            direction='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            spacing={1}
          >
            <Grid item>
              <MuiBreadcrumbs aria-label='breadcrumb'>
                <Typography
                  component={Link}
                  to='/'
                  color='textSecondary'
                  variant='h6'
                  sx={{ textDecoration: 'none' }}
                >
                  Home
                </Typography>
                {mainContent}
                {itemContent}
              </MuiBreadcrumbs>
            </Grid>
            {title && (
              <Grid item sx={{ mt: 2 }}>
                <Typography variant='h5'>{item.title}</Typography>
              </Grid>
            )}
          </Grid>
        </MainCard>
      );
    }
  }

  return breadcrumbContent;
};

export default Breadcrumbs;
