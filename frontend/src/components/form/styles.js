import styled from 'styled-components';

export const FormStyles = styled.form`
  width: ${({ block }) => (block ? '100%' : '40%')};
  background-color: ${({ theme }) => theme.bg};
  border-radius: ${({ theme }) => theme.radius};
  padding: 6rem 5rem;
  box-shadow: ${({ theme }) => theme.shadow};
  position: relative;

  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    width: 60%;
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    width: 100%;
  }
`;

export const FormGroupStyles = styled.div`
  padding: 1.5rem 0;
`;
