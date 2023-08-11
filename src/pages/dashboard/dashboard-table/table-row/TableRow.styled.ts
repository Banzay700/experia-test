import styled from 'styled-components'

export const Row = styled.tr`
  font-size: 13px;
  line-height: 20px;
  height: 72px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.background.tertiary};
  }
`

export const Cell = styled.td<{ align?: 'center' }>`
  text-align: ${({ align }) => align || 'left'};
  &:first-child {
    padding-left: 32px;
  }
  &:last-child {
    padding-right: 32px;
  }
`
