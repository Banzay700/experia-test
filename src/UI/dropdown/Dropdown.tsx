import { FC, ReactNode, useState } from 'react'
import { DropdownViewType } from 'types'
import { DropdownMenu, DropdownWrapper, ContentWrapper, MenuWrapper } from './Dropdown.styled'
import { DropdownHeader } from './dropdown-header'
import { DropdownItem } from './dropdown-item'
import { getToggleValues } from './Dropdown.utils'

interface DropdownProps {
  icon?: ReactNode

  subtitle?: string
  data: string[]
  viewType: DropdownViewType
  defaultValue?: string
  onSelect: (value: string[]) => void
}

const Dropdown: FC<DropdownProps> = ({
  icon,
  defaultValue,
  subtitle,
  data,
  viewType,
  onSelect,
}) => {
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false)
  const [checkedValues, setCheckedValues] = useState([data[0]])
  const isToggle = viewType === 'toggle'

  const handleCheckboxChange = (value: string) => {
    if (isToggle) getToggleValues(value, checkedValues, setCheckedValues)
    if (!isToggle) setCheckedValues([value])
    onSelect([value])
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
        title={defaultValue || checkedValues[0]}
      />
      {dropdownMenuOpen && (
        <MenuWrapper>
          <DropdownMenu viewType={viewType}>
            <ContentWrapper>
              {isToggle && (
                <DropdownItem
                  viewType={viewType}
                  title="Sourse"
                  name="Sourse"
                  value="Sourse"
                  checked={checkedValues.includes('Sourse')}
                  onChange={() => handleCheckboxChange('Sourse')}
                />
              )}
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
