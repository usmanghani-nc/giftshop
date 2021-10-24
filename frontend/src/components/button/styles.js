import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  background-color: coral;
  font-size: ${({ theme }) => theme.sizes.text};
`;
