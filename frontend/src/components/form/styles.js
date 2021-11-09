import styled from 'styled-components';

export const FormStyles = styled.form`
  width: 35%;
  background-color: ${({ theme }) => theme.bg};
  border-radius: ${({ theme }) => theme.radius};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const FormGroupStyles = styled.div`
  padding: 1.5rem 0;
`;
