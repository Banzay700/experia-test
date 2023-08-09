import { FC, ReactNode } from 'react'
import { IconWrapper } from './LabelIcon.styled'

interface LabelIconProps {
  icon: ReactNode
}

const LabelIcon: FC<LabelIconProps> = ({ icon }) => {
  return <IconWrapper flxCentre>{icon}</IconWrapper>
}

export default LabelIcon
