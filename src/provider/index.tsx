import { PropsWithChildren } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

export const ReactQueryProvider = ({ children }: PropsWithChildren<unknown>) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: 1,
        // ✅ globally default to 5 seconds
        staleTime: 5 * 1000,
        notifyOnChangeProps: 'tracked',
      },
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
