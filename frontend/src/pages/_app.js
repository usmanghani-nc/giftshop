import ThemeContext from 'context/ThemeContext';
import AddToCartContext from 'context/AddToCartContext';

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeContext>
      <AddToCartContext>
        <Component {...pageProps} router={router} />
      </AddToCartContext>
    </ThemeContext>
  );
}

export default MyApp;
