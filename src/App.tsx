// project import
import Routes from '~/routes';
import ThemeCustomization from '~/themes';
import ScrollTop from '~/components/ScrollTop';
import AuthProvider from './context/AuthProvider';
import { ConfigProvider } from 'antd';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <AuthProvider>
          <ConfigProvider
            theme={{
              components: {
                Message: {
                  zIndexPopup: 1300, // due to by default 1020 index it's render under the App
                },
              },
            }}
          >
            <Routes />
          </ConfigProvider>
        </AuthProvider>
        {/* <CustomLoader /> */}
      </ScrollTop>
    </ThemeCustomization>
  );
};

export default App;
