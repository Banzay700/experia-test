import React, { FC } from 'react'
import { DropdownItemType, DropdownViewType } from 'types'
import { DropdownItemLabel, ItemWrapper } from './DropdownItem.styled'
import { DropdownToggle } from './toggle-item'
import { DropdownRadio } from './radio-item'
import DropdownCheckbox from './checkbox-item/DropdownCheckbox'

interface DropdownItemProps {
  type: DropdownItemType
  viewType: DropdownViewType
  title: string
  value: string
  id: string
  name: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const DropdownItem: FC<DropdownItemProps> = (props) => {
  const { type, viewType, title, value, id, name, checked, onChange } = props

  return (
    <ItemWrapper viewType={viewType} isOff={checked}>
      <DropdownItemLabel viewType={viewType} isOff={checked}>
        {viewType === 'radio' && <DropdownRadio isOff={checked} />}
        {title}
        <input
          type={type}
          value={value}
          name={viewType === 'radio' ? 'radio' : name}
          checked={checked}
          onChange={onChange}
        />
        {viewType === 'toggle' && <DropdownToggle isOff={checked} />}
        {viewType === 'checkbox' && <DropdownCheckbox isOff={checked} />}
      </DropdownItemLabel>
    </ItemWrapper>
  )
}

export default DropdownItem
