import { FC, ReactNode } from 'react'
import { useTheme } from 'styled-components'
import { Flex } from 'UI/containers'
import { Typography } from 'UI'
import { DashboardIcon } from 'assets'

interface DropdownHeaderProps {
  title: string
  dropOpen: boolean
  icon?: ReactNode
  subtitle?: string
}

const DropdownHeader: FC<DropdownHeaderProps> = ({ icon, title, subtitle, dropOpen }) => {
  const { palette } = useTheme()
  return (
    <>
      {icon || (
        <Typography variant="subtitle2" color={palette.darkWhite}>
          {subtitle}
        </Typography>
      )}
      <Flex flxCenter gap="6px">
        <Typography variant="subtitle1" color="currentColor">
          {title}
        </Typography>
        {dropOpen ? <DashboardIcon.ArrowDown /> : <DashboardIcon.ArrowUp />}
      </Flex>
    </>
  )
}

export default DropdownHeader
