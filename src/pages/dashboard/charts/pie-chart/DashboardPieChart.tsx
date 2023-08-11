import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { nanoid } from 'nanoid'
import { Box, Flex } from 'UI/containers'
import { DataBlockHeader } from 'components/data-block-header'
import { Dropdown } from 'UI/dropdown'
import {
  COLORS,
  legendWrapperStyle,
  legendTypographyStyles,
  pieChartConfig,
} from './DashboardPieChat.utls'
import { ChartTitle } from 'pages/dashboard/charts/pie-chart/chart-title'

const mockData = ['Charlottetown', 'Halifax', 'Naperville', 'Vernon', 'Montreal']

const data = [
  { name: 'Roles', value: 400 },
  { name: 'Users', value: 300 },
  { name: 'Policies', value: 300 },
]

const DashboardPieChart = () => {
  const renderColorfulLegendText = (value: string) => {
    return <span style={legendTypographyStyles}>{value}</span>
  }

  return (
    <Flex width="100%" direction="column">
      <DataBlockHeader title="Game Stats">
        <Dropdown data={mockData} viewType="radio" subtitle="Location" />
      </DataBlockHeader>

      <Box height="100%" position="relative">
        <ChartTitle />
        <ResponsiveContainer height="100%" width={232}>
          <PieChart>
            <Pie data={data} {...pieChartConfig}>
              {data.map((entry, index) => (
                <Cell key={nanoid()} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend
              iconSize={8}
              iconType="circle"
              layout="vertical"
              wrapperStyle={legendWrapperStyle}
              formatter={renderColorfulLegendText}
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Flex>
  )
}

export default DashboardPieChart
