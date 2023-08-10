import styled from 'styled-components'
import { generateAutoColumns } from './DashboardTable.utils'

export const TableRow = styled.div<{ cellsCount: number }>`
  display: grid;
  grid-template-columns: ${({ cellsCount }) => generateAutoColumns(cellsCount)};
  padding-bottom: 24px;
`
export const TableCell = styled.div`
  font-weight: bold;
`
