import Button from 'components/button';
import Page from 'layout/page';
import Section from 'components/section';
import { useQuery } from 'react-query';
import API from 'endpoint';
import styled from 'styled-components';

const Div = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.bg};
  border-radius: ${({ theme }) => theme.radius};
  padding: 6rem 5rem;
  box-shadow: ${({ theme }) => theme.shadow};
  margin: auto;
`;

export default function index({ session_id }) {
  const get = () => API.get(`/success?session_id=${session_id}`);

  useQuery('success', get, {
    refetchOnWindowFocus: false,
  });

  return (
    <Page>
      <Section fullPage>
        <Div>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Thank you for purchasing
          </h3>

          <Button block href="/">
            Continue to shopping
          </Button>
        </Div>
      </Section>
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { session_id: context.query.session_id },
  };
}
