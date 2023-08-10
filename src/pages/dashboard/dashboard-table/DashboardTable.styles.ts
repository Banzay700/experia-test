import styled from 'styled-components'

export const TableWrapper = styled.div`
  display: flex;
  padding-top: 32px;
  width: 100%;
`
export const Table = styled.table`
  width: 100%;
`
export const TableHeader = styled.th`
  font-size: 11px;
  font-weight: 500;
  line-height: 12px;
  padding: 10px;
  color: ${({ theme }) => theme.palette.darkWhite};
  &:hover {
    background-color: ${({ theme }) => theme.background.tertiary};
  }
`
export const TableRow = styled.th`
  font-size: 13px;
  line-height: 20px;
  height: 72px;
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.background.tertiary};
  }
`

export const TableCell = styled.td``
