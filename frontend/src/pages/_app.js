import ThemeContext from 'context/ThemeContext';
import AddToCartContext from 'context/AddToCartContext';
import AuthContext from 'context/AuthContext';

function MyApp({ Component, pageProps, router }) {
  return (
    <AuthContext>
      <ThemeContext>
        <AddToCartContext>
          <Component {...pageProps} router={router} />
        </AddToCartContext>
      </ThemeContext>
    </AuthContext>
  );
}

export default MyApp;
