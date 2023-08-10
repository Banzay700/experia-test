import { DataBlockHeader } from 'components/data-block-header'
import { Dropdown } from 'UI/dropdown'
import { Flex } from 'UI/containers'

const mockData = ['Diagrams', 'Graph', 'Table', 'Paragraph']

const BarChart = () => {
  return (
    <Flex width="100%">
      <DataBlockHeader title="Game Stats">
        <Dropdown data={mockData} viewType="checkbox" subtitle="Data type" />
      </DataBlockHeader>
    </Flex>
  )
}

export default BarChart
