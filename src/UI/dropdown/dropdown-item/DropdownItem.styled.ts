import styled, { css } from 'styled-components'
import { DropdownItemType } from 'types'

interface ItemWrapperProps {
  viewType: DropdownItemType
}

const toggleStyles = css`
  padding: 13px 17px 7px 24px;
  gap: 24px;
  min-width: 290px;
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
`
const checkboxStyles = css`
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
`

const radioStyles = css`
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
`

export const ItemWrapper = styled.div<ItemWrapperProps>`
  color: ${({ theme }) => theme.palette.white};
  ${({ viewType }) => viewType === 'toggle' && toggleStyles}
  ${({ viewType }) => viewType === 'checkbox' && checkboxStyles}
  ${({ viewType }) => viewType === 'radio' && radioStyles}
  input {
    display: none;
  }
`

export const DropdownItemLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.white};
  cursor: pointer;
`
