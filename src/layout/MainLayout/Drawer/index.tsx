import { Box, Drawer, useMediaQuery, useTheme } from '@mui/material';
import { useMemo } from 'react';

// project imports
import DrawerContent from './DrawerContent';
import DrawerHeader from './DrawerHeader';
import MiniDrawerStyled from './MiniDrawerStyled';

// prop types
interface MainDrawerProps {
  open: boolean;
  handleDrawerToggle: () => void;
  window?: () => Window;
}

// drawer width
const drawerWidth = 280;

const MainDrawer: React.FC<MainDrawerProps> = ({ open, handleDrawerToggle, window }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  // responsive drawer container
  const container = window !== undefined ? () => window().document.body : undefined;

  // header content
  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);

  return (
    <Box component='nav' sx={{ flexShrink: { md: 0 }, zIndex: 1300 }} aria-label='mailbox folders'>
      {!matchDownMD ? (
        <MiniDrawerStyled variant='permanent' open={open}>
          {drawerHeader}
          {drawerContent}
        </MiniDrawerStyled>
      ) : (
        <Drawer
          container={container}
          variant='temporary'
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              borderRight: `1px solid ${theme.palette.divider}`,
              backgroundImage: 'none',
              boxShadow: 'inherit',
            },
          }}
        >
          {open && drawerHeader}
          {open && drawerContent}
        </Drawer>
      )}
    </Box>
  );
};

export default MainDrawer;
