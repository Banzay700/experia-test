import { Flex } from 'UI/containers'
import { useGetDashboardDataQuery } from 'store/api'
import { DashboardLabels } from './dashboard-labels'
import { DashboardPieChart, DashboardAreaChart } from './dashboard-charts'
import { DashboardTable } from './dashboard-table'
import { areaChartData } from './Dashboard.utils'

const Dashboard = () => {
  const { data, isSuccess } = useGetDashboardDataQuery()

  return (
    <Flex direction="column" gap="16px" background="secondary" height="100%">
      {isSuccess && <DashboardLabels statistic={data.statistic} />}
      <Flex direction="column" gap="16px" background="secondary" height="100%">
        <Flex background="secondary" gap="16px" height="344px">
          {isSuccess && <DashboardAreaChart chartData={areaChartData} cityListData={data.users} />}
          <DashboardPieChart />
        </Flex>
        <Flex background="secondary" gap="16px" height="100%" maxHeight="calc(100vh - 600px)">
          {isSuccess && <DashboardTable statistic={data.general_sales_time} />}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Dashboard
