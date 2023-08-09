import { ReactComponent as Logo } from 'assets/logo.svg'
import { SidebarWrapper } from './Sidebar.styled'
import { Nav } from './nav'

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo />
      <Nav />
    </SidebarWrapper>
  )
}

export default Sidebar
