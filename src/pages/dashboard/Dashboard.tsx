import { DataContainer, Flex } from 'UI/containers'
import { useGetDashboardDataQuery } from 'store/api'
import { DashboardLabels } from './dashboard-labels'
import { DashboardPieChart, Da } from './charts'
import { DashboardTable } from './dashboard-table'
import DashboardAreaChart from './charts/area-chart/DashboardAreaChart'

const Dashboard = () => {
  const { data, isSuccess } = useGetDashboardDataQuery()

  return (
    <Flex direction="column" gap="16px" background="secondary" height="100%">
      {isSuccess && <DashboardLabels statistic={data.statistic} />}
      <Flex background="secondary" gap="16px" height="100%" maxHeight="344px">
        <DataContainer flex={1} height="100%">
          {isSuccess && <DashboardAreaChart data={data.chartData} />}
        </DataContainer>
        <DataContainer flex={1} maxWidth="428px">
          <DashboardPieChart />
        </DataContainer>
      </Flex>
      <DataContainer flex={1} maxHeight="480px">
        {isSuccess && <DashboardTable statistic={data.general_sales_time} />}
      </DataContainer>
    </Flex>
  )
}

export default Dashboard
