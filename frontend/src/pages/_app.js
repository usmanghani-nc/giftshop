import ThemeContext from 'context';

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeContext>
      <Component {...pageProps} router={router} />
    </ThemeContext>
  );
}

export default MyApp;
