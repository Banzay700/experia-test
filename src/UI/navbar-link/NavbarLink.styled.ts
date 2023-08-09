import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavLink = styled(Link)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.lightGray};
  text-decoration: none;
  background-color: ${({ theme }) => theme.backgrounds.darkBlue};
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.backgrounds.accent};
  }
  &:active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.backgrounds.accent};
  }
`
