import styled from 'styled-components';

export const TableStyles = styled.table`
  background: white;
  box-shadow: ${({ theme }) => theme.shadow};
  width: 100%;
  margin-top: 3rem;
  border-collapse: separate;
  border-radius: ${({ theme }) => theme.radius};
  padding: 1rem 1rem 2rem;
  border-spacing: 0;
`;

export const TableHeaderStyles = styled.thead`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  font-size: 1.17rem;
  background: #fff;
`;

export const TableBodyStyles = styled.tbody`
  font-size: 1.57rem;
  background: #fff;
`;

export const TableTrStyles = styled.tr``;

export const TableThStyles = styled.th`
  text-align: left;
  padding: 2rem;
  font-size: inherit;
  color: #888c94;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const TableTdStyles = styled.td`
  text-align: left;
  padding: 1rem 2rem;
  font-size: inherit;
  color: ${({ theme }) => theme.black};
`;
