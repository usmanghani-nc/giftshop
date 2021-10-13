import ThemeContext from 'context';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContext>
      <Component {...pageProps} />
    </ThemeContext>
  );
}

export default MyApp;
