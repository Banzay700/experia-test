import { FC } from 'react'
import { ToggleSlider, ToggleWrapper } from './DropdownToggle.styled'

interface DropdownToggleProps {
  isOff: boolean
}

const DropdownToggle: FC<DropdownToggleProps> = ({ isOff }) => {
  return (
    <ToggleWrapper isOff={isOff}>
      <ToggleSlider isOff={isOff} />
    </ToggleWrapper>
  )
}

export default DropdownToggle
