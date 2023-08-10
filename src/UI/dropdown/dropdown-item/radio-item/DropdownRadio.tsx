import { FC } from 'react'
import { RadioInput, RadioWrapper } from './DropdownRadio.styled'

interface DropdownRadioProps {
  isOff: boolean
}

const DropdownRadio: FC<DropdownRadioProps> = ({ isOff }) => {
  return (
    <RadioWrapper isOff={isOff}>
      <RadioInput isOff={isOff} />
    </RadioWrapper>
  )
}

export default DropdownRadio
