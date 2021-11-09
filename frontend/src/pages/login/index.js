import Page from 'layout/page';
import Section from 'components/section';
import LoginContainer from 'container/auth/login';

export default function Login(props) {
  return (
    <Page noHeader nofooter title="Login">
      <Section fullPage>
        <LoginContainer {...props} />
      </Section>
    </Page>
  );
}
