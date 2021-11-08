import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  min-width: ${({ block }) => (block ? '100%' : '8rem')};
  height: 4rem;

  background: ${({ theme, secondary }) =>
    secondary ? theme.secondary : theme.primary};
  background: ${({ theme, secondary }) =>
    secondary
      ? theme.secondary
      : 'linear-gradient(to right, rgba(244,68,88,1), rgba(237,105,111,1), rgba(244,68,88,1), rgba(237,105,111,1))'};
  background-size: 300% 200%;
  box-shadow: ${({ secondary, shadow }) =>
    !secondary && shadow && '0 5px 15px rgba(244, 68, 88, 0.4)'};
  font-size: ${({ theme }) => theme.sizes.btn};
  color: white;
  border-radius: ${({ theme }) => theme.radius};
  padding: 0.5em 1em;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background: ${({ theme, secondary }) => secondary && theme.secondary_low};
    background-position: 100% 0;
  }
`;
