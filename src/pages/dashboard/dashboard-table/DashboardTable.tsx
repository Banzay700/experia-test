import { nanoid } from 'nanoid'
import React from 'react'
import { DashboardIcon } from 'assets'
import { Dropdown } from 'UI'
import { Flex } from 'UI/containers'

import { DataBlockHeader } from 'components/data-block-header'
import { tableHeaders } from './DashboardTable.utils'
import { TableRow } from './table-row'
import { Table, TableHeaders, TableCell, TableWrapper } from './DashboardTable.styles'

const data = [
  {
    model: {
      image: 'asdasd',
      name: 'Pokémon Trading Card Game',
    },
    card_name: 'Charizard Vmax 330',
    card_number: '#5',
    type: 'Amet minim',
    limited: 4,
    operations: 14,
    date: '24-12-2018',
    rating: 98,
    status: '9 out of 10',
    price: '$840',
  },

  {
    model: {
      image: 'asas',
      name: 'Pokémon Trading Card Game',
    },
    card_name: 'Charizard Vmax 330',
    card_number: '#5',
    type: 'Amet minim',
    limited: 4,
    operations: 14,
    date: '24-12-2018',
    rating: 98,
    status: '9 out of 10',
    price: '$840',
  },
]
const convertToArrays = (data) => {
  return data.map((item) =>
    Object.keys(item).map((prop) => {
      const isImage = prop === 'model' && item[prop].image

      if (prop === 'rating') {
        return `${item[prop]}%`
      }

      if (isImage) {
        return item[prop]
      }

      return item[prop]
    }),
  )
}

const DashboardTable = () => {
  const tableData = convertToArrays(data)

  const headers = tableHeaders.map((header) => {
    if (header === 'Limited' || header === '№ Operations' || header === 'Options') {
      return (
        <TableCell key={nanoid()} align="center">
          {header}
        </TableCell>
      )
    }
    return <TableCell key={nanoid()}>{header}</TableCell>
  })

  return (
    <Flex width="100%" direction="column">
      <DataBlockHeader title="General Sales / Time" withIcon>
        <Dropdown
          data={tableHeaders}
          viewType="toggle"
          title="Table settings"
          icon={<DashboardIcon.Settings />}
        />
      </DataBlockHeader>
      <TableWrapper>
        <Table>
          <tbody>
            <TableHeaders>{headers}</TableHeaders>
            {tableData.map((rowData) => (
              <TableRow key={nanoid()} rowData={rowData} />
            ))}
            {tableData.map((rowData) => (
              <TableRow key={nanoid()} rowData={rowData} />
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </Flex>
  )
}

export default DashboardTable
