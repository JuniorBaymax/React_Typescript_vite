// project import
import Routes from '~/routes';
import ThemeCustomization from '~/themes';
import ScrollTop from '~/components/ScrollTop';
import CustomLoader from './components/CustomLoader';
import AuthProvider from './context/AuthProvider';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <CustomLoader />
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
