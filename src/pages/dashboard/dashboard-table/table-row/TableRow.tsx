import React from 'react'
import { Wrapper, Cell, CellWithImage } from './TableRow.styled'

const TableRow = ({ cellsCount, rowData }) => {
  console.log(rowData)
  return (
    <Wrapper cellsCount={cellsCount}>
      {rowData.map((cell) => {
        return cell.image ? (
          <CellWithImage key={cell}>
            <img src={cell.image} />
            <span>{cell.name}</span>
          </CellWithImage>
        ) : (
          <Cell key={cell}>{cell}</Cell>
        )
      })}
      <Cell>Options</Cell>
    </Wrapper>
  )
}

export default TableRow
