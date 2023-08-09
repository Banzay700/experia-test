import { Flex } from 'UI/containers'
import { DataBlockHeader } from 'components/data-block-header'
import { Dropdown } from 'UI/dropdown'

const DoughnutChart = () => {
  return (
    <Flex width="100%">
      <DataBlockHeader title="Game Stats">
        <Dropdown title="Naperville" subtitle="Location" />
      </DataBlockHeader>
    </Flex>
  )
}

export default DoughnutChart
