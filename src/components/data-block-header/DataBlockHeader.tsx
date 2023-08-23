import { DashboardIcon } from 'assets/index'
import { FC, ReactNode } from 'react'
import { Flex } from '../../UI/containers'
import { Typography } from '../../UI/typography/Typography.styled'

interface DataBlockHeaderProps {
  title: string
  withIcon?: boolean
  children: ReactNode
}

const DataBlockHeader: FC<DataBlockHeaderProps> = ({ withIcon, title, children }) => {
  return (
    <Flex flxBetween width="100%" padding="25px 32px 0">
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
