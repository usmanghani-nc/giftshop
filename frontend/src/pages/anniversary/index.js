import Page from 'layout/page';
import Category from 'container/category';

export default function index() {
  return (
    <Page title="Anniversary">
      <Category title="Anniversary Gifts" type="anniversary" />
    </Page>
  );
}
