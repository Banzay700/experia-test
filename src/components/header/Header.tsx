import { Typography } from 'UI'
import { useGetPageHeading, useUserReducer } from 'hooks'
import { Avatar } from 'components/avatar'
import { Flex } from '../../UI/containers'

const Header = () => {
  const { userData, userLogout } = useUserReducer()
  const title = useGetPageHeading()

  return (
    <Flex flxBetween padding="16px 48px 16px 32px" background="secondary">
      <Typography variant="h3" fontWeight={500}>
        {title}
      </Typography>
      <Avatar username={userData.email} onClick={() => userLogout()} />
    </Flex>
  )
}

export default Header
