import Head from 'next/head';
import Header from 'layout/header';
import Footer from 'layout/footer';
import styled from 'styled-components';

const PageStyles = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content;
`;

const MainStyles = styled.main`
  display: flex;
  flex-direction: column;
`;

export default function Page({ children, noHeader, nofooter, title }) {
  return (
    <PageStyles>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>Gfty {title ? ` - ${title}` : ''}</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {!noHeader && <Header />}

      <MainStyles>{children}</MainStyles>

      {!nofooter && <Footer />}
    </PageStyles>
  );
}
