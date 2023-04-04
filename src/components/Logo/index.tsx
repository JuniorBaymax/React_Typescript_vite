import PropTypes from 'prop-types';
import { Link, LinkProps } from 'react-router-dom';

// material-ui
import { ButtonBase, ButtonBaseProps } from '@mui/material';

// project import
import Logo from './Logo';
import config from '~/redux/constant';

type LogoSectionProps = {
  sx?: ButtonBaseProps['sx'];
  to?: LinkProps['to'];
};

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }: LogoSectionProps) => (
  <ButtonBase disableRipple component={Link} to={!to ? config.defaultPath : to} sx={sx}>
    <Logo />
  </ButtonBase>
);

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string,
};

export default LogoSection;
