import { FC, ReactNode, useState } from 'react'
import { DropdownViewType } from 'types'
import { DropdownMenu, DropdownWrapper, ContentWrapper, MenuWrapper } from './Dropdown.styled'
import { DropdownHeader } from './dropdown-header'
import { DropdownItem } from './dropdown-item'
import { getToggleValues } from './Dropdown.utils'

interface DropdownProps {
  icon?: ReactNode
  title?: string
  subtitle?: string
  data: string[]
  viewType: DropdownViewType
}

const Dropdown: FC<DropdownProps> = ({ icon, title, subtitle, data, viewType }) => {
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false)
  const [checkedValues, setCheckedValues] = useState([data[0]])

  const handleCheckboxChange = (value: string) => {
    if (viewType === 'toggle') getToggleValues(value, checkedValues, setCheckedValues)
    if (viewType !== 'toggle') setCheckedValues([value])
  }

  return (
    <DropdownWrapper
      isOpen={dropdownMenuOpen}
      withIcon={!!icon}
      onMouseOver={() => setDropdownMenuOpen(true)}
      onMouseLeave={() => setDropdownMenuOpen(false)}>
      <DropdownHeader
        dropOpen={dropdownMenuOpen}
        icon={icon}
        subtitle={subtitle}
        title={title || checkedValues[0]}
      />
      {dropdownMenuOpen && (
        <MenuWrapper>
          <DropdownMenu viewType={viewType}>
            <ContentWrapper>
              {data.map((option) => (
                <DropdownItem
                  key={option}
                  viewType={viewType}
                  title={option}
                  name={option}
                  value={option}
                  checked={checkedValues.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
              ))}
            </ContentWrapper>
          </DropdownMenu>
        </MenuWrapper>
      )}
    </DropdownWrapper>
  )
}

export default Dropdown
