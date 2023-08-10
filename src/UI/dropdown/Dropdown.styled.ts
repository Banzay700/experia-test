import styled from 'styled-components'

interface DropdownProps {
  isOpen: boolean
  withIcon?: boolean
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

export const DropdownMenu = styled.div`
  padding: 3px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.primary};
  box-shadow: 0 16px 24px 0 rgba(55, 58, 83, 0.16), 0 4px 12px 0 rgba(36, 38, 53, 0.1),
    0 2px 4px 0 rgba(36, 38, 53, 0.08), 0 8px 48px 0 rgba(0, 0, 0, 0.6),
    0 2px 4px 0 rgba(0, 0, 0, 0.25), 0 4px 12px 0 rgba(0, 0, 0, 0.4);
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
