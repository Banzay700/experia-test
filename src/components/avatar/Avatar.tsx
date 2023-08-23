import { FC } from 'react'
import { Typography } from 'UI'
import { ReactComponent as AvatarIcon } from 'assets/avatar.svg'
import { Flex } from '../../UI/containers'
import { AvatarIconWrapper } from './Avatar.styled'

interface AvatarProps {
  username: string
  onClick?: () => void
}
const Avatar: FC<AvatarProps> = ({ username, onClick }) => {
  return (
    <Flex flxStart gap="12px" background="secondary">
      <AvatarIconWrapper onClick={onClick} title="Logout">
        <AvatarIcon />
      </AvatarIconWrapper>
      <Typography variant="h6" fontWeight={500}>
        {username}
      </Typography>
    </Flex>
  )
}

export default Avatar
