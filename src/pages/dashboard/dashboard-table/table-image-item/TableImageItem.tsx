import image from 'assets/image.jpg'
import React, { FC } from 'react'
import { TableCardModelType } from 'types'
import { Box } from '../../../../UI/containers'
import { TableImage, TableImageWrapper } from './TableImageItem.styled'

interface TableImageItemProps {
  cellData: TableCardModelType
}

const TableImageItem: FC<TableImageItemProps> = ({ cellData }) => {
  return (
    <TableImageWrapper>
      <TableImage src={image} alt={cellData.name} />
      <Box>{cellData.name}</Box>
    </TableImageWrapper>
  )
}

export default TableImageItem
