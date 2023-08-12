import React, { FC } from 'react'
import { nanoid } from 'nanoid'
import { DashboardIcon } from 'assets'
import { Dropdown } from 'UI'
import { DataBlockHeader } from 'components'
import { Flex } from 'UI/containers'
import { GeneralSaleTimeType } from 'types'
import { convertToArrays, tableHeaders } from './DashboardTable.utils'
import { TableRow } from './table-row'
import { Table, TableHeaders, TableCell, TableWrapper } from './DashboardTable.styles'

interface DashboardTableProps {
  statistic: GeneralSaleTimeType[]
}

const DashboardTable: FC<DashboardTableProps> = ({ statistic }) => {
  const tableData = convertToArrays(statistic)

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
    <Flex width="100%" direction="column" paddingBottom="24px" borderRadius="4px" overflow="hidden">
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
            {tableData.map((rowData) => (
              <TableRow key={nanoid()} rowData={rowData} />
            ))}
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
