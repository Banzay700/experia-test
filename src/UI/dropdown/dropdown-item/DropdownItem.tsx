import React, { FC } from 'react'
import { DropdownItemType, DropdownViewType } from 'types'
import { DropdownItemLabel, ItemWrapper } from './DropdownItem.styled'
import { DropdownToggle } from './toggle-item'
import { DropdownRadio } from './radio-item'
import DropdownCheckbox from './checkbox-item/DropdownCheckbox'

interface DropdownItemProps {
  viewType: DropdownViewType
  title: string
  value: string
  name: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const DropdownItem: FC<DropdownItemProps> = (props) => {
  const { viewType, title, value, name, checked, onChange } = props

  return (
    <ItemWrapper viewType={viewType} isChecked={checked}>
      <DropdownItemLabel viewType={viewType} isChecked={checked}>
        {viewType === 'radio' && <DropdownRadio isChecked={checked} />}
        {title}
        <input type="checkbox" value={value} name={name} checked={checked} onChange={onChange} />
        {viewType === 'toggle' && <DropdownToggle isChecked={checked} />}
        {viewType === 'checkbox' && <DropdownCheckbox isChecked={checked} />}
      </DropdownItemLabel>
    </ItemWrapper>
  )
}

export default DropdownItem
