import { useMemo, memo, useEffect } from 'react';
import { useTable } from 'react-table';
import {
  TableStyles,
  TableHeaderStyles,
  TableBodyStyles,
  TableThStyles,
  TableTdStyles,
  TableTrStyles,
} from './styles';

function Table({ columns, body }) {
  const data = useMemo(() => body, [body]);

  const tableInstance = useTable({ columns, data });

  console.log(data, columns);

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

export default memo(Table);
