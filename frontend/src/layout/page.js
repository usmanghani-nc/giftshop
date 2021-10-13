import Head from 'next/head';
import Header from 'layout/header';
import Footer from 'layout/Footer';

export default function Page({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />

        <title>Gift Shop</title>
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
