import Page from 'layout/page';
import Category from 'container/category';

export default function index() {
  return (
    <Page title="Birthday">
      <Category title="Birthday Gifts" type="birthday" />
    </Page>
  );
}
