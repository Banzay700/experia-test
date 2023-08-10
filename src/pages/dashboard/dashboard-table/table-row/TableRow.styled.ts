import styled from 'styled-components'
import { generateAutoColumns } from '../DashboardTable.utils'

export const Wrapper = styled.div<{ cellsCount: number }>`
  display: grid;
  grid-template-columns: ${({ cellsCount }) => generateAutoColumns(cellsCount)};
  padding-bottom: 24px;
`
export const CellWithImage = styled.div``
export const Cell = styled.div`
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  line-height: 20px;
`
