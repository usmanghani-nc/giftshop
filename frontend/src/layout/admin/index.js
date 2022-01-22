import Header from 'layout/header';
import styled from 'styled-components';
import { useAuthContext } from 'context/AuthContext';
import { FullScreenLoading } from 'components/loading';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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

export default function Page({ children }) {
  const { state, fn } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!state.isLoading) {
      if (state.user.data) {
        const roles = state.user.data?.roles;

        roles !== 'admin' && router.push('/');
      } else {
        router.push('/');
      }
    }
  }, [state.isLoading]);

  return (
    <PageStyles>
      {state.isLoading ? (
        <FullScreenLoading />
      ) : (
        <>
          {state.user?.data?.roles === 'admin' && (
            <>
              <Header user={state.user} logoutAction={fn.logout} />

              <MainStyles>{children}</MainStyles>
            </>
          )}
        </>
      )}
    </PageStyles>
  );
}
