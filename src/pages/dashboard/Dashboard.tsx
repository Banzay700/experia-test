import { DashboardLabels } from 'components'
import { DoughnutChart, BarChart } from 'components/charts'
import { DataContainer, Flex } from 'UI/containers'
import { useGetDashboardDataQuery } from 'store/api'
import { DashboardTable } from './dashboard-table'

const Dashboard = () => {
  const { data, isSuccess } = useGetDashboardDataQuery()

  return (
    <Flex direction="column" gap="16px" background="secondary" height="100%">
      {isSuccess && <DashboardLabels statistic={data.statistic} />}
      <Flex background="secondary" gap="16px" height="100%" maxHeight="344px">
        <DataContainer flex={1} height="100%">
          <BarChart />
        </DataContainer>
        <DataContainer flex={1} maxWidth="428px">
          <DoughnutChart />
        </DataContainer>
      </Flex>
      <DataContainer flex={1} maxHeight="480px">
        <DashboardTable />
      </DataContainer>
    </Flex>
  )
}

export default Dashboard
