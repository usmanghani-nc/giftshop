import Page from 'layout/page';
import Section from 'components/section';
import SignupContainer from 'container/auth/signup';

export default function Login(props) {
  return (
    <Page noHeader nofooter title="Signup">
      <Section fullPage>
        <SignupContainer {...props} />
      </Section>
    </Page>
  );
}
