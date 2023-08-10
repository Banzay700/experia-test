import { FC } from 'react'
import { ToggleSlider, ToggleWrapper } from './DropdownToggle.styled'

interface DropdownToggleProps {
  isChecked: boolean
}

const DropdownToggle: FC<DropdownToggleProps> = ({ isChecked }) => {
  return (
    <ToggleWrapper isChecked={isChecked}>
      <ToggleSlider isChecked={isChecked} />
    </ToggleWrapper>
  )
}

export default DropdownToggle
