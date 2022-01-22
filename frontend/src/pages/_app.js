import ThemeContext from 'context/ThemeContext';
import AddToCartContext from 'context/AddToCartContext';
import AuthContext from 'context/AuthContext';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <ThemeContext>
          <AddToCartContext>
            <Component {...pageProps} router={router} />
          </AddToCartContext>
        </ThemeContext>
      </AuthContext>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default MyApp;
