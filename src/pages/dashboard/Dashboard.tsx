import { DashboardLabels } from 'components'
import { Flex } from 'UI/containers'

const Dashboard = () => {
  return (
    <Flex direction="column" gap="16px">
      <DashboardLabels />
    </Flex>
  )
}

export default Dashboard
