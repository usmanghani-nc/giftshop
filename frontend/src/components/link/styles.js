import styled from 'styled-components';

export const StyledLink = styled.a`
  padding: ${({ p }) => p && p};
  margin: ${({ m }) => m && m};
  font-size: ${({ size }) => size && size};
`;
