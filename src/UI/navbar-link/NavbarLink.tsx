import { useLocation } from 'react-router-dom'
import { FC, ReactNode } from 'react'
import { Link } from './NavbarLink.styled'

interface NavbarLinkProps {
  path: string
  children: ReactNode
}

const NavbarLink: FC<NavbarLinkProps> = ({ path, children }) => {
  const { pathname } = useLocation()

  return (
    <Link $activeLink={pathname === path} to={path}>
      {children}
    </Link>
  )
}

export default NavbarLink
