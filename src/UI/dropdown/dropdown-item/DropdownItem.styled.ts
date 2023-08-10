import styled, { css } from 'styled-components'
import { DropdownViewType } from 'types'

interface ItemWrapperProps {
  viewType: DropdownViewType
  isChecked?: boolean
}

const toggleItemStyles = css`
  padding: 13px 17px 7px 24px;
  gap: 24px;
  min-width: 290px;
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
`

const radioItemStyles = css`
  padding: 9px 16px 9px 25px;
  min-width: 290px;
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
`

const checkboxItemStyles = css<ItemWrapperProps>`
  padding: 1px 8px;
  min-width: 232px;
  font-size: ${({ theme }) => theme.typography.subtitle1.fontSize};
  background-color: ${({ theme }) => theme.background.primary};
`

const checkboxLabelStyles = css<ItemWrapperProps>`
  padding: 12px 16px;
  border-radius: 4px;
  background-color: ${({ isChecked, theme }) =>
    isChecked ? theme.background.tertiary : theme.background.primary};
  color: ${({ isChecked, theme }) => (isChecked ? theme.palette.white : theme.palette.gray)};
`

export const ItemWrapper = styled.div<ItemWrapperProps>`
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.background.primary};

  ${({ viewType }) => viewType === 'toggle' && toggleItemStyles}
  ${({ viewType }) => viewType === 'checkbox' && checkboxItemStyles}
  ${({ viewType }) => viewType === 'radio' && radioItemStyles}
  input {
    display: none;
  }
`

export const DropdownItemLabel = styled.label<ItemWrapperProps>`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  line-height: 20px;
  font-weight: 400;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.white};
  justify-content: ${({ viewType }) => (viewType === 'radio' ? 'flex-start' : 'space-between')};
  ${({ viewType }) => viewType === 'checkbox' && checkboxLabelStyles}
`
