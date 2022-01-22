import styled from 'styled-components';

const SectionStyled = styled.section`
  padding: ${({ fluid, noPadding }) => {
    return noPadding ? '0' : fluid ? '2rem' : '2rem 0';
  }};
  flex: 1 1 ${({ fullPage }) => (fullPage ? 'calc(100vh - 150px)' : 'auto')};
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export default function Section({ fluid, children, fullPage, noPadding, id }) {
  return (
    <SectionStyled
      id={id}
      fluid={fluid}
      fullPage={fullPage}
      noPadding={noPadding}
    >
      <div className={fluid ? 'container-fluid' : 'container'}>{children}</div>
    </SectionStyled>
  );
}
