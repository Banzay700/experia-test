import React from 'react'
import { nanoid } from 'nanoid'
import { DashboardIcon } from 'assets'
import { Row, Cell } from './TableRow.styled'
import { TableImageItem } from '../table-image-item'

const TableRow = ({ rowData }) => {
  return (
    <Row>
      {rowData.map((cellData) => {
        if (cellData.image) {
          return (
            <Cell key={nanoid()}>
              <TableImageItem cellData={cellData} />
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
