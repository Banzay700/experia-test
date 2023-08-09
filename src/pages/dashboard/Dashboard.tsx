import { DashboardLabels } from 'components'
import { useGetDashboardStatisticQuery } from 'hooks'
import { Flex } from 'UI/containers'

const Dashboard = () => {
  const { statistic } = useGetDashboardStatisticQuery()

  return (
    <Flex direction="column" gap="16px">
      {statistic !== undefined && <DashboardLabels statistic={statistic} />}
    </Flex>
  )
}

export default Dashboard
