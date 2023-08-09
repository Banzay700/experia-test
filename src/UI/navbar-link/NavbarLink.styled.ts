import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

interface NavLinkProps {
  active?: string
}

const activeStyle = css`
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.background.accent};
`

export const NavLink = styled(Link)<NavLinkProps>`
  width: 40px;
  height: 40px;
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
  ${({ active }) => active && activeStyle}
`
