import Head from 'next/head';
import Header from 'layout/header';
import Footer from 'layout/Footer';

export default function Page({ children }) {
  return (
    <>
      <Head>
        <title>Gift Shop</title>
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
