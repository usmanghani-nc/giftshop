import { useMemo, memo } from 'react';
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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <TableStyles {...getTableProps()}>
      <TableHeaderStyles>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup, idx) => {
            return (
              <TableTrStyles key={idx} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, idx) => {
                  return (
                    <TableThStyles key={idx} {...column.getHeaderProps()}>
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
        {rows.map((row, idx) => {
          prepareRow(row);
          return (
            <TableTrStyles key={idx} {...row.getRowProps()}>
              {row.cells.map((cell, idx) => {
                return (
                  <TableTdStyles key={idx} {...cell.getCellProps()}>
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
