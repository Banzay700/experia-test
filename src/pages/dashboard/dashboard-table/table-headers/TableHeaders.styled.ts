import styled from 'styled-components'
import { generateAutoColumns } from '../DashboardTable.utils'

export const TableHeaderRow = styled.div<{ cellsCount: number }>`
  display: grid;
  grid-template-columns: ${({ cellsCount }) => generateAutoColumns(cellsCount)};
  padding-bottom: 24px;
`
export const TableHeaderCell = styled.div`
  font-weight: bold;
`
