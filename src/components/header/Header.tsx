import { useLocation } from 'react-router-dom'
import { Typography } from 'UI'
import { Wrapper } from './Header.styled'

const Header = () => {
  const { pathname } = useLocation()
  const title = pathname.replace('/', '').toUpperCase()

  return (
    <Wrapper>
      <Typography variant="h3" fontWeight={500}>
        {title}
      </Typography>
    </Wrapper>
  )
}

export default Header
