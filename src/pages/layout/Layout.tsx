import { Outlet } from 'react-router-dom'
import { Sidebar, Header } from 'components'
import { Container, Flex } from 'UI/containers'

const Layout = () => {
  return (
    <Flex height="100%" flxStart>
      <Sidebar />
      <Flex direction="column" height="100%" width="100%">
        <Header />
        <Container padding="24px 48px 28px 32px" background="secondary">
          <Outlet />
        </Container>
      </Flex>
    </Flex>
  )
}

export default Layout
