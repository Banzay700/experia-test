import styled from 'styled-components'

interface DropdownProps {
  isOpen: boolean
  withIcon?: boolean
}

export const DropdownButton = styled.div<DropdownProps>`
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
