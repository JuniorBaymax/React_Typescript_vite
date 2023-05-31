import { Suspense } from 'react';

// project import
import Loader from './Loader';
import SuspenseLoader from './SuspenseLoader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
