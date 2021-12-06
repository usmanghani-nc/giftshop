import { useMemo } from 'react';
import { useTable } from 'react-table';
import {
  TableStyles,
  TableHeaderStyles,
  TableBodyStyles,
  TableThStyles,
  TableTdStyles,
  TableTrStyles,
} from './styles';

export default function Table({ header, body }) {
  const data = useMemo(() => body, [body]);
  const columns = useMemo(() => header, [body]);

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <TableStyles {...getTableProps()}>
      <TableHeaderStyles>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => {
            return (
              <TableTrStyles {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                    <TableThStyles {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </TableThStyles>
                  );
                })}
              </TableTrStyles>
            );
          })
        }
      </TableHeaderStyles>
      <TableBodyStyles {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <TableTrStyles {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <TableTdStyles {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableTdStyles>
                );
              })}
            </TableTrStyles>
          );
        })}
      </TableBodyStyles>
    </TableStyles>
  );
}
