import React, { FC } from 'react'
import { useTheme } from 'styled-components'
import { Typography } from 'UI'

import { TableHeaderCell, TableHeaderRow } from './TableHeaders.styled'

interface TableHeadersProps {
  cellsCount: number
  headers: string[]
}

const TableHeaders: FC<TableHeadersProps> = ({ cellsCount, headers }) => {
  const { palette } = useTheme()
  return (
    <TableHeaderRow cellsCount={cellsCount}>
      {headers.map((header) => (
        <TableHeaderCell key={header}>
          <Typography variant="subtitle3" fontWeight={500} color={palette.darkWhite}>
            {header}
          </Typography>
        </TableHeaderCell>
      ))}
    </TableHeaderRow>
  )
}

export default TableHeaders
