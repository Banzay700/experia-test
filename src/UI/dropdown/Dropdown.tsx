import { FC, ReactNode, useEffect, useState } from 'react'
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

const Dropdown: FC<DropdownProps> = (props) => {
  const { icon, defaultValue, subtitle, data, viewType, onSelect } = props

  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false)
  const [checkedValues, setCheckedValues] = useState<string[]>([])
  const [toggleSourceChecked, setToggleSourceChecked] = useState<boolean>(false)

  const isToggleView = viewType === 'toggle'
  const isFirstToggleRender = checkedValues.length === 0

  const handleCheckboxChange = (value: string) => {
    if (isToggleView) {
      const isClickOnSource = value === 'Source'

      if (isClickOnSource && toggleSourceChecked) {
        setToggleSourceChecked(false)
        return
      }

      if (isClickOnSource && !toggleSourceChecked) {
        setToggleSourceChecked(true)
        setCheckedValues([...data])
        return
      }

      getToggleValues(value, checkedValues, setCheckedValues)
      onSelect([...checkedValues])
      setToggleSourceChecked(false)
    }

    if (!isToggleView) {
      setCheckedValues([value])
      onSelect([value])
    }
  }

  useEffect(() => {
    if (!isToggleView) {
      setCheckedValues([data[0]])
    }

    if (isToggleView && isFirstToggleRender) {
      setToggleSourceChecked(true)
      setCheckedValues([...data])
    }

    if (isToggleView && !isFirstToggleRender) {
      onSelect([...checkedValues])
    }
  }, [checkedValues.length, isToggleView, isFirstToggleRender]) // eslint-disable-line

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
              {isToggleView && (
                <DropdownItem
                  viewType={viewType}
                  title="Source"
                  name="Source"
                  value="Source"
                  checked={toggleSourceChecked}
                  onChange={() => handleCheckboxChange('Source')}
                />
              )}
              {data.map((option) => (
                <DropdownItem
                  key={option}
                  viewType={viewType}
                  title={option}
                  name={option}
                  defaultValue={defaultValue}
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
