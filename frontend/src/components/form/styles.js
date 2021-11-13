import styled from 'styled-components';

export const FormStyles = styled.form`
  width: 40%;
  background-color: ${({ theme }) => theme.bg};
  border-radius: ${({ theme }) => theme.radius};
  padding: 6rem 5rem;
  box-shadow: ${({ theme }) => theme.shadow};
  position: relative;
`;

export const FormGroupStyles = styled.div`
  padding: 1.5rem 0;
`;
