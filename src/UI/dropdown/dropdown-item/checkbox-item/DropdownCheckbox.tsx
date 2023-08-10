import { DashboardIcon } from 'assets'
import { FC } from 'react'
import { Flex } from 'UI/containers'

interface DropdownCheckboxProps {
  isOff: boolean
}

const DropdownCheckbox: FC<DropdownCheckboxProps> = ({ isOff }) => {
  return <Flex background="tertiary">{isOff && <DashboardIcon.Check />}</Flex>
}

export default DropdownCheckbox
