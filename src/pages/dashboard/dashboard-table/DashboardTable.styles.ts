import styled from 'styled-components'

export const TableWrapper = styled.div`
  display: flex;
  padding-top: 32px;
  width: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background.gray};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.background.lightGray};
    border-radius: 4px;
  }
`
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`
export const TableHeaders = styled.tr`
  font-size: 11px;
  font-weight: 500;
  line-height: 12px;

  padding-left: 30px;
  color: ${({ theme }) => theme.palette.darkWhite};
`

export const TableCell = styled.td<{ align?: 'center' | 'left' }>`
  text-align: ${({ align }) => align};
`
