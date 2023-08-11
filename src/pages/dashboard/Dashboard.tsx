import { Flex } from 'UI/containers'
import { useGetDashboardDataQuery } from 'store/api'
import { DashboardLabels } from './dashboard-labels'
import { DashboardPieChart, DashboardAreaChart } from './dashboard-charts'
import { DashboardTable } from './dashboard-table'

const Dashboard = () => {
  const { data, isSuccess } = useGetDashboardDataQuery()

  return (
    <Flex direction="column" gap="16px" background="secondary" height="calc(100% - 64px)">
      {isSuccess && <DashboardLabels statistic={data.statistic} />}
      <Flex direction="column" gap="16px" background="secondary" height="100%">
        <Flex flex={1} background="secondary" gap="16px" height="100%" maxHeight="344px">
          {isSuccess && <DashboardAreaChart chartData={data.chartData} cityListData={data.users} />}
          <DashboardPieChart />
        </Flex>
        <Flex flex={1} background="secondary" gap="16px" height="100%" maxHeight="480px">
          {isSuccess && <DashboardTable statistic={data.general_sales_time} />}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Dashboard
