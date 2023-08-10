import React from 'react'
import { DashboardIcon } from 'assets/index'
import { Dropdown } from 'UI/index'
import { Flex } from 'UI/containers'
import { DataBlockHeader } from 'components/data-block-header'

import { tableHeaders } from './DashboardTable.utils'
import {
  Table,
  TableHeader,
  TableCell,
  TableWrapper,
  TableRow,
} from 'pages/dashboard/dashboard-table/DashboardTable.styles'

const data = [
  {
    model: {
      image: 'https://example.com/image1.jpg',
      name: 'Model 1',
    },
    card_name: 'Card A',
    card_number: '1234 5678 9012 3456',
    type: 'Type X',
    limited: true,
    operations: 10,
    date: '2023-08-10',
    rating: 4,
    status: 'Active',
    price: '$100.00',
  },
  {
    model: {
      image: 'https://example.com/image2.jpg',
      name: 'Model 2',
    },
    card_name: 'Card B',
    card_number: '9876 5432 1098 7654',
    type: 'Type Y',
    limited: false,
    operations: 5,
    date: '2023-08-09',
    rating: 3,
    status: 'Inactive',
    price: '$50.00',
  },
]

function convertToArrays(objArray) {
  const resultArray = []

  for (const obj of objArray) {
    const valuesArray = []

    for (const prop in obj) {
      if (typeof obj[prop] === 'object' && obj[prop] !== null) {
        valuesArray.push(obj[prop])
      } else {
        valuesArray.push(obj[prop])
      }
    }

    resultArray.push(valuesArray)
  }

  return resultArray
}

const DashboardTable = () => {
  const tableData = convertToArrays(data)

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
          <TableHeader>
            <TableCell>Card model</TableCell>
            <TableCell>Card name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Limited</TableCell>
            <TableCell>№ Operations</TableCell>
            <TableCell>Date of lost operations</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Options</TableCell>
          </TableHeader>
          <TableRow>
            <TableCell>Card model</TableCell>
            <TableCell>Card name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Limited</TableCell>
            <TableCell>Card model</TableCell>
            <TableCell>Card name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Limited</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Limited</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Card model</TableCell>
            <TableCell>Card name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Limited</TableCell>
            <TableCell>Card model</TableCell>
            <TableCell>Card name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Limited</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Limited</TableCell>
          </TableRow>
        </Table>
      </TableWrapper>
    </Flex>
  )
}

export default DashboardTable
