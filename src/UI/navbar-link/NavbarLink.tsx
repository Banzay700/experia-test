import { useLocation } from 'react-router-dom'
import { FC, ReactNode, useEffect, useState } from 'react'
import { NavLink } from './NavbarLink.styled'

interface NavbarLinkProps {
  path: string
  children: ReactNode
}

const NavbarLink: FC<NavbarLinkProps> = ({ path, children }) => {
  const [isActive, setIsActive] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setIsActive(pathname === path)
  }, [pathname, path])

  return (
    <NavLink active={isActive} to={path}>
      {children}
    </NavLink>
  )
}

export default NavbarLink
