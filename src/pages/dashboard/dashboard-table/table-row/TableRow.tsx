import React, { FC } from 'react'
import { nanoid } from 'nanoid'
import { DashboardIcon } from 'assets'
import { TableConvertedDataType, TableCardModelType } from 'types'
import { Row, Cell } from './TableRow.styled'
import { TableImageItem } from '../table-image-item'

interface TableRowProps {
  rowData: TableConvertedDataType
}

const TableRow: FC<TableRowProps> = ({ rowData }) => {
  return (
    <Row>
      {rowData.map((cellData) => {
        if (typeof cellData === 'object' && 'name' in cellData) {
          const typedCellData = cellData as TableCardModelType
          return (
            <Cell key={nanoid()}>
              <TableImageItem cellData={typedCellData} />
            </Cell>
          )
        }

        if (typeof cellData !== 'number') {
          return <Cell key={nanoid()}>{cellData}</Cell>
        }

        return (
          <Cell key={nanoid()} align="center">
            {cellData}
          </Cell>
        )
      })}
      <Cell align="center">
        <DashboardIcon.ActionMenu />
      </Cell>
    </Row>
  )
}

export default TableRow
