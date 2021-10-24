import styled from 'styled-components';

const SectionStyled = styled.section`
  padding: ${({ fluid }) => fluid && '2rem'};
  height: 100%;
`;

export default function Section({ fluid, children }) {
  return (
    <SectionStyled fluid>
      <div className={fluid ? '' : 'container'}>{children}</div>
    </SectionStyled>
  );
}
