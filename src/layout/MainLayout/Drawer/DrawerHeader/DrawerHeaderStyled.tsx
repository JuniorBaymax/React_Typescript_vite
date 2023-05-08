// material-ui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// prop types
interface DrawerHeaderProps {
  open: boolean;
}

// ==============================|| DRAWER HEADER - STYLED ||============================== //

const DrawerHeaderStyled = styled(Box, {
  shouldForwardProp: prop => prop !== 'open',
})<DrawerHeaderProps>(({ theme, open }) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  alignItems: 'center',
  justifyContent: open ? 'center' : 'flex-end',
  paddingLeft: theme.spacing(open ? 3 : 0),
}));

export default DrawerHeaderStyled;
