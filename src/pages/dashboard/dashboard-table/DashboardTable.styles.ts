import styled from 'styled-components'

export const TableWrapper = styled.div`
  display: flex;
  padding-top: 21px;
  width: 100%;
  overflow-y: auto;
  margin-top: 12px;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableHeaders = styled.tr`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.palette.darkWhite};
`

export const TableCell = styled.td<{ align?: 'center' | 'left' }>`
  text-align: ${({ align }) => align};
  padding-bottom: 10px;
  :first-child {
    padding-left: 32px;
  }
  :last-child {
    padding-right: 32px;
  }
`
