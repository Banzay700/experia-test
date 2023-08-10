import { FC, ReactNode, useState } from 'react'
import { DropdownMenu, DropdownWrapper, ContentWrapper, MenuWrapper } from './Dropdown.styled'
import { DropdownHeader } from './dropdown-header'
import { DropdownItem } from './dropdown-item'

interface DropdownProps {
  icon?: ReactNode
  title: string
  subtitle?: string
  data: string[]
}

const Dropdown: FC<DropdownProps> = ({ icon, title, subtitle, data }) => {
  const [dropOpen, setDropOpen] = useState(false)

  const options = [
    'option1',
    'option2',
    'option3',
    'option4',
    'option5',
    'option6',
    'option7',
    'option8',
    'option9',
  ]

  const [checkedValues, setCheckedValues] = useState<string[]>([])

  const handleCheckboxChange = (value: string) => {
    if (checkedValues.includes(value)) {
      setCheckedValues(checkedValues.filter((val) => val !== value))
    } else {
      setCheckedValues([...checkedValues, value])
    }
  }
  return (
    <DropdownWrapper
      isOpen={dropOpen}
      withIcon={!!icon}
      onMouseOver={() => setDropOpen(true)}
      onMouseLeave={() => setDropOpen(false)}>
      <DropdownHeader dropOpen={dropOpen} icon={icon} subtitle={subtitle} title={title} />
      {dropOpen && (
        <MenuWrapper>
          <DropdownMenu>
            <ContentWrapper>
              {options.map((option) => (
                <DropdownItem
                  type="checkbox"
                  viewType="toggle"
                  checked={checkedValues.includes(option)}
                  key={option}
                  title={option}
                  id={option}
                  name={option}
                  value={option}
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
