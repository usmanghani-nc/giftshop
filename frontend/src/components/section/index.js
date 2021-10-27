import styled from 'styled-components';

const SectionStyled = styled.section`
  padding: ${({ fluid }) => (fluid ? '2rem' : '2rem 0')};
  flex: 1 1 ${({ fullPage }) => (fullPage ? 'calc(100vh - 81px)' : 'auto')};
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export default function Section({ fluid, children, fullPage }) {
  return (
    <SectionStyled fluid={fluid} fullPage={fullPage}>
      <div className={fluid ? '' : 'container'}>{children}</div>
    </SectionStyled>
  );
}
