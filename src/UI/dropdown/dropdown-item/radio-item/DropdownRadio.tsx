import { FC } from 'react'
import { RadioInput, RadioWrapper } from './DropdownRadio.styled'

interface DropdownRadioProps {
  isChecked: boolean
}

const DropdownRadio: FC<DropdownRadioProps> = ({ isChecked }) => {
  return (
    <RadioWrapper isChecked={isChecked}>
      <RadioInput isChecked={isChecked} />
    </RadioWrapper>
  )
}

export default DropdownRadio
