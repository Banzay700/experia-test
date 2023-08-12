import { pieChardDataMock } from 'utils'
import { Flex, FadeIn } from 'UI/containers'
import { useGetDashboardDataQuery } from 'store/api'
import { DashboardLabels } from './dashboard-labels'
import { DashboardPieChart, DashboardAreaChart } from './dashboard-charts'
import { DashboardTable } from './dashboard-table'
import { areaChartData } from './Dashboard.utils'

const Dashboard = () => {
  const { data, isSuccess } = useGetDashboardDataQuery()

  return (
    <FadeIn width="100%" delay={0.05} duration={0.1}>
      <Flex direction="column" gap="16px" background="secondary" height="100%">
        {isSuccess && <DashboardLabels statistic={data.statistic} />}
        <Flex direction="column" gap="16px" background="secondary" height="100%">
          <Flex background="secondary" gap="16px" height="344px">
            {isSuccess && (
              <DashboardAreaChart chartData={areaChartData} cityListData={data.users} />
            )}
            <DashboardPieChart data={pieChardDataMock} />
          </Flex>
          <Flex background="secondary" gap="16px" height="100%" maxHeight="calc(100vh - 592px)">
            {isSuccess && <DashboardTable statistic={data.general_sales_time} />}
          </Flex>
        </Flex>
      </Flex>
    </FadeIn>
  )
}

export default Dashboard
