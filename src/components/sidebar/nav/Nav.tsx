import { NavbarLink } from 'UI'
import { Flex } from '../../../UI/containers'
import { navbarLinks } from './Nav.utils'

const Nav = () => {
  return (
    <Flex direction="column" gap="20px">
      {navbarLinks.map(({ path, icon }) => (
        <NavbarLink key={path} path={path}>
          {icon}
        </NavbarLink>
      ))}
    </Flex>
  )
}

export default Nav
