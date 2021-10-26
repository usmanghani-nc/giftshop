import styled from 'styled-components';

const SectionStyled = styled.section`
  padding: ${({ fluid }) => fluid && '2rem'};
`;

export default function Section({ fluid, children }) {
  return (
    <SectionStyled fluid>
      <div className={fluid ? '' : 'container'}>{children}</div>
    </SectionStyled>
  );
}
