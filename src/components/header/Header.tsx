import { Typography } from 'UI'
import { useGetPageHeading, useUserReducer } from 'hooks'
import { Avatar } from 'components/avatar'
import { Wrapper } from './Header.styled'

const Header = () => {
  const { userLogout } = useUserReducer()
  const title = useGetPageHeading()

  return (
    <Wrapper>
      <Typography variant="h3" fontWeight={500}>
        {title}
      </Typography>
      <Avatar username="Username" onClick={() => userLogout()} />
    </Wrapper>
  )
}

export default Header
