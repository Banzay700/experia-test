import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { FC, useState } from 'react'
import { nanoid } from 'nanoid'
import { DataBlockHeader } from 'components'
import { Dropdown } from 'UI'
import { PieChartDataType } from 'types'
import { Flex } from '../../../../UI/containers'
import {
  COLORS,
  legendWrapperStyle,
  legendTypographyStyles,
  pieChartConfig,
} from './DashboardPieChat.utls'
import { ChartSummary } from './chart-summary'

interface DashboardPieChartProps {
  data: PieChartDataType
}

const DashboardPieChart: FC<DashboardPieChartProps> = ({ data }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>(data.headers[0])
  const [chartData, setChartData] = useState(data.chartData[0])
  const [summaryData, setSummaryData] = useState(data.summaryData[0])

  const handleLocationChange = (value: string[]) => {
    const index = data.headers.findIndex((header) => header === value[0])
    const dta = data.chartData[index]
    const summary = data.summaryData[index]

    setSelectedLocation(value[0])
    setChartData(dta)
    setSummaryData(summary)
  }

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
        <Dropdown
          data={data.headers}
          viewType="radio"
          subtitle="Location"
          defaultValue={selectedLocation}
          onSelect={handleLocationChange}
        />
      </DataBlockHeader>
      <Flex maxHeight="296px" height="100%" position="relative">
        <ChartSummary data={summaryData} />
        <ResponsiveContainer height="100%" width={265}>
          <PieChart>
            <Pie data={chartData} {...pieChartConfig}>
              {chartData.map((entry, index) => (
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
