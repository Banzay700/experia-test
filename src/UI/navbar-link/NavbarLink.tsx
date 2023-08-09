import { FC, ReactNode } from 'react'
import { NavLink } from './NavbarLink.styled'

interface NavbarLinkProps {
  path: string
  children: ReactNode
}

const NavbarLink: FC<NavbarLinkProps> = ({ path, children }) => {
  return <NavLink to={path}>{children}</NavLink>
}

export default NavbarLink
