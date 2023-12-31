import { FC, ReactNode } from 'react'
import { IconWrapper } from './LabelIcon.styled'

interface LabelIconProps {
  icon: ReactNode
  background: string
}

const LabelIcon: FC<LabelIconProps> = ({ icon, background }) => {
  return (
    <IconWrapper flxCenter backgroundColor={background}>
      {icon}
    </IconWrapper>
  )
}

export default LabelIcon
