import image from 'assets/image.jpg'
import React from 'react'
import { Box } from 'UI/containers'
import { TableImage, TableImageWrapper } from './TableImageItem.styled'

const TableImageItem = ({ cellData }) => {
  return (
    <TableImageWrapper>
      <TableImage src={image} alt={cellData.name} />
      <Box>{cellData.name}</Box>
    </TableImageWrapper>
  )
}

export default TableImageItem
