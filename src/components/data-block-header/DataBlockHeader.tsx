import { Flex } from 'UI/containers'
import { Typography } from 'UI/typography/Typography.styled'
import { DashboardIcon } from 'assets/index'
import { FC, ReactNode } from 'react'

interface DataBlockHeaderProps {
  title: string
  withIcon?: boolean
  children: ReactNode
}

const DataBlockHeader: FC<DataBlockHeaderProps> = ({ withIcon, title, children }) => {
  return (
    <Flex flxBetween maxHeight="24px" width="100%">
      <Flex flxStart gap="12px">
        <Typography variant="h4" fontWeight={500}>
          {title}
        </Typography>
        {withIcon && <DashboardIcon.Info />}
      </Flex>
      {children}
    </Flex>
  )
}

export default DataBlockHeader
