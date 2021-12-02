import styled from 'styled-components';

export const TableStyles = styled.table`
  border-collapse: collapse;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadow};
  width: 100%;
  margin-top: 3rem;
  border-radius: ${(theme) => theme.radius};
`;

export const TableHeaderStyles = styled.thead`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  font-size: 1.3rem;
`;

export const TableBodyStyles = styled.tbody`
  font-size: 1.4rem;
`;

export const TableTrStyles = styled.tr``;

export const TableThStyles = styled.th`
  text-align: left;
  padding: 2rem;
  font-size: inherit;
  color: ${({ theme }) => theme.black};
`;

export const TableTdStyles = styled.td`
  text-align: left;
  padding: 1rem 2rem;
  font-size: inherit;
  color: ${({ theme }) => theme.black};
`;
