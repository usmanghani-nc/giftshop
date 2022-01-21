import Page from 'layout/page';
import Category from 'container/category';

export default function index() {
  return (
    <Page title="Wedding">
      <Category title="Wedding Gifts" type="wedding" />
    </Page>
  );
}
