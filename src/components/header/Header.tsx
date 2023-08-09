import { Typography } from 'UI'
import { useGetPageHeading, useUserReducer } from 'hooks'
import { Avatar } from 'components/avatar'
import { Wrapper } from './Header.styled'

const Header = () => {
  const { userData, userLogout } = useUserReducer()
  const title = useGetPageHeading()

  return (
    <Wrapper>
      <Typography variant="h3" fontWeight={500}>
        {title}
      </Typography>
      <Avatar username={userData.email} onClick={() => userLogout()} />
    </Wrapper>
  )
}

export default Header
