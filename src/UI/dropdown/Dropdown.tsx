import { useTheme } from 'styled-components'
import { FC, ReactNode, useState } from 'react'
import { Typography } from 'UI'
import { DashboardIcon } from 'assets'
import { DropdownButton } from './Dropdown.styled'
import { Flex } from 'UI/containers'

interface DropdownProps {
  icon?: ReactNode
  title?: string
  subtitle?: string
}

const Dropdown: FC<DropdownProps> = ({ icon, title, subtitle }) => {
  const [open, setOpen] = useState(false)
  const { palette } = useTheme()

  return (
    <DropdownButton
      isOpen={open}
      withIcon={!!icon}
      onMouseOver={() => setOpen(!open)}
      onMouseLeave={() => setOpen(!open)}>
      {icon || (
        <Typography variant="subtitle2" color={palette.darkWhite}>
          {subtitle}
        </Typography>
      )}
      <Flex flxCenter gap="6px">
        <Typography variant="subtitle1" color="currentColor">
          {title}
        </Typography>
        {open ? <DashboardIcon.ArrowDown /> : <DashboardIcon.ArrowUp />}
      </Flex>
    </DropdownButton>
  )
}

export default Dropdown
