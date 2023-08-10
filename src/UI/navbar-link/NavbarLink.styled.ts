import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

interface NavLinkProps {
  $activeLink?: boolean
}

export const Link = styled(NavLink)<NavLinkProps>`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.palette.lightGray};
  text-decoration: none;
  background-color: ${({ theme }) => theme.background.darkBlue};
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.white};
    background-color: ${({ theme }) => theme.background.accent};
  }

  &.active {
    color: ${({ theme }) => theme.palette.white};
    background-color: ${({ theme }) => theme.background.accentHover};
  }
`
