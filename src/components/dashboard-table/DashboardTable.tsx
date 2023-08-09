import { DashboardIcon } from 'assets'
import { Dropdown } from 'UI'
import { Flex } from 'UI/containers'
import { DataBlockHeader } from 'components/data-block-header'

const DashboardTable = () => {
  return (
    <Flex width="100%">
      <DataBlockHeader title="General Sales / Time" withIcon>
        <Dropdown title="Table settings" icon={<DashboardIcon.Settings />} />
      </DataBlockHeader>
    </Flex>
  )
}

export default DashboardTable
