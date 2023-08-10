import { DashboardIcon } from 'assets'
import { FC } from 'react'
import { Flex } from 'UI/containers'

interface DropdownCheckboxProps {
  isChecked: boolean
}

const DropdownCheckbox: FC<DropdownCheckboxProps> = ({ isChecked }) => {
  return <Flex background="tertiary">{isChecked && <DashboardIcon.Check />}</Flex>
}

export default DropdownCheckbox
