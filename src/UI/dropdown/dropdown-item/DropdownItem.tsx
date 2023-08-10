import React, { FC } from 'react'
import { DropdownItemType } from 'types'
import { DropdownItemLabel, ItemWrapper } from './DropdownItem.styled'
import { DropdownToggle } from './toggle'

interface DropdownItemProps {
  type: DropdownItemType
  viewType: DropdownItemType
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
    <ItemWrapper viewType={viewType}>
      <DropdownItemLabel>
        {title}
        <input type={type} value={value} name={name} onChange={onChange} />
        <DropdownToggle isOff={checked} />
      </DropdownItemLabel>
    </ItemWrapper>
  )
}

export default DropdownItem
