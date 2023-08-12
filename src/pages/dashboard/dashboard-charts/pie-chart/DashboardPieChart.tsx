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
import { ChartSummary } from './chart-summary'

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
    <Flex
      width="100%"
      height="100%"
      direction="column"
      maxWidth="428px"
      borderRadius="4px"
      overflow="hidden">
      <DataBlockHeader title="Game Stats">
        <Dropdown data={mockData} viewType="radio" subtitle="Location" />
      </DataBlockHeader>
      <Flex maxHeight="296px" height="100%" position="relative">
        <ChartSummary />
        <ResponsiveContainer height="100%" width={265}>
          <PieChart>
            <Pie data={data} {...pieChartConfig}>
              {data.map((entry, index) => (
                <Cell key={nanoid()} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend
              iconSize={7}
              iconType="circle"
              layout="vertical"
              wrapperStyle={legendWrapperStyle}
              formatter={renderColorfulLegendText}
            />
          </PieChart>
        </ResponsiveContainer>
      </Flex>
    </Flex>
  )
}

export default DashboardPieChart
