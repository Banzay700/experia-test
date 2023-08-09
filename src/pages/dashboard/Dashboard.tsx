import { Flex } from 'UI/containers'
import { DashboardLabels } from 'components'

const Dashboard = () => {
  return (
    <Flex direction="column" gap="16px">
      <DashboardLabels />
    </Flex>
  )
}

export default Dashboard
