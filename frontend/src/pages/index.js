import Page from 'layout/page';
import Hero from 'container/hero';
import Category from 'container/category';

export default function Home({}) {
  return (
    <Page title="Home">
      <Hero />
      <Category title="Popular Gift Collection" />
    </Page>
  );
}
