import styled from 'styled-components'
import { DropdownViewType } from 'types'

interface DropdownProps {
  isOpen?: boolean
  withIcon?: boolean
  viewType?: DropdownViewType
}

export const DropdownWrapper = styled.div<DropdownProps>`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: color 0.2s ease-in-out;
  gap: ${({ withIcon }) => (withIcon ? '8px' : '19px')};
  color: ${({ isOpen, theme }) => (isOpen ? theme.palette.lightBlue : theme.palette.white)};

  &:hover {
    color: ${({ theme }) => theme.palette.lightBlue};
  }
`

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  padding-top: 28px;
`

export const DropdownMenu = styled.div<DropdownProps>`
  padding: 3px;
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: ${({ viewType }) => (viewType !== 'checkbox' ? '8px' : '')};
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
`
export const ContentWrapper = styled.div`
  max-height: 282px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    border-radius: 4px;
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background.gray};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.background.lightGray};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.palette.lightBlue};
  }
`
