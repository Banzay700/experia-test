import { Flex } from 'UI/containers'
import { DataBlockHeader } from 'components/data-block-header'
import { Dropdown } from 'UI/dropdown'

const mockData = ['Charlottetown', 'Halifax', 'Naperville', 'Vernon', 'Montreal']

const DoughnutChart = () => {
  return (
    <Flex width="100%">
      <DataBlockHeader title="Game Stats">
        <Dropdown data={mockData} viewType="radio" title="Naperville" subtitle="Location" />
      </DataBlockHeader>
    </Flex>
  )
}

export default DoughnutChart
