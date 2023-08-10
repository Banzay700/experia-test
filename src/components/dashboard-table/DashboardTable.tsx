import { DashboardIcon } from 'assets'
import { Dropdown } from 'UI'
import { Flex } from 'UI/containers'
import { DataBlockHeader } from 'components/data-block-header'

const mockData = [
  'Source',
  'Card model',
  'Card number',
  'Card name',
  'Type',
  'Limited',
  '№ Operations',
  'Date of lost operations',
  'Rating',
  'Status',
  'Price',
]

const DashboardTable = () => {
  return (
    <Flex width="100%">
      <DataBlockHeader title="General Sales / Time" withIcon>
        <Dropdown
          data={mockData}
          viewType="toggle"
          title="Table settings"
          icon={<DashboardIcon.Settings />}
        />
      </DataBlockHeader>
    </Flex>
  )
}

export default DashboardTable
