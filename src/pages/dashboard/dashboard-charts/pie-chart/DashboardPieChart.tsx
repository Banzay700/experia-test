import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { FC, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { DataBlockHeader } from 'components'
import { Dropdown } from 'UI'
import { Flex } from 'UI/containers'
import { PieChartDataPointType, PieChartDataType } from 'types'
import {
  COLORS,
  legendWrapperStyle,
  legendTypographyStyles,
  pieChartConfig,
  prepareChartData,
} from './DashboardPieChat.utls'
import { ChartSummary } from './chart-summary'

interface DashboardPieChartProps {
  data: PieChartDataType[]
}

const DashboardPieChart: FC<DashboardPieChartProps> = ({ data }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('')
  const [chartData, setChartData] = useState<PieChartDataPointType[]>([])
  const [dropdownHeaders, setDropdownHeaders] = useState<string[]>([])

  const handleLocationChange = (value: string[]) => {
    const { flattenedData, headers } = prepareChartData(data)
    const index = headers.findIndex((header) => header === value[0])
    const dta = flattenedData[index] || []

    setSelectedLocation(value[0])
    setChartData(dta)
  }

  const renderColorfulLegendText = (value: string) => {
    return <span style={legendTypographyStyles}>{value}</span>
  }

  useEffect(() => {
    if (chartData.length === 0) {
      const { initialData, headers } = prepareChartData(data)

      setDropdownHeaders(headers)
      setSelectedLocation(headers[0])
      setChartData(initialData)
    }
  }, [data, chartData.length])

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
          data={dropdownHeaders}
          viewType="radio"
          subtitle="Location"
          defaultValue={selectedLocation}
          onSelect={handleLocationChange}
        />
      </DataBlockHeader>
      <Flex maxHeight="296px" height="100%" position="relative">
        <ChartSummary />
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
