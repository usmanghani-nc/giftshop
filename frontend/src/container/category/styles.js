import styled from 'styled-components';

export const Title = styled.h2`
  color: ${({ theme }) => theme.secondary};
  font-size: 3.5rem;
  margin: 2rem 0;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    font-size: 2.2rem;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 2.5rem;
  margin: 5rem 0;
`;
