import styled from 'styled-components';

export const BadgeStyles = styled.div`
  border-radius: 100%;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  text-align: center;
  font-size: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
