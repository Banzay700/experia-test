import React, { FC, useState } from 'react'
import { nanoid } from 'nanoid'
import { DashboardIcon } from 'assets'
import { Dropdown } from 'UI'
import { DataBlockHeader } from 'components'
import { GeneralSaleTimeType } from 'types'
import { Flex } from 'UI/containers'
import { getTableData, prepareHeaders, prepareStatistic } from './DashboardTable.utils'
import { TableRow } from './table-row'
import { Table, TableHeaders, TableCell, TableWrapper } from './DashboardTable.styles'

interface DashboardTableProps {
  statistic: GeneralSaleTimeType[]
}

const DashboardTable: FC<DashboardTableProps> = ({ statistic }) => {
  const [dropdownValues, setDropdownValues] = useState<string[]>([])

  const preparedStatisticData = prepareStatistic(statistic, dropdownValues)
  const dropdownTitles = prepareHeaders(statistic)
  const { tableHeaders, tableData } = getTableData(preparedStatisticData)
  const duplicatedArray = Array.from({ length: 5 }, () => tableData).flat()

  const handleDropdownSelect = (values: string[]) => {
    setDropdownValues(values)
  }

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
          data={dropdownTitles}
          viewType="toggle"
          defaultValue="Table settings"
          onSelect={handleDropdownSelect}
          icon={<DashboardIcon.Settings />}
        />
      </DataBlockHeader>
      <TableWrapper>
        <Table>
          <tbody>
            <TableHeaders>{headers}</TableHeaders>
            {duplicatedArray.map((rowData) => (
              <TableRow key={nanoid()} rowData={rowData} />
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </Flex>
  )
}

export default DashboardTable
