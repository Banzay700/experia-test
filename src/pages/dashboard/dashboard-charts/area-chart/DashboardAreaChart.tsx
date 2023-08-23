import { FC, useState } from 'react'
import { useTheme } from 'styled-components'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { DataBlockHeader } from 'components'
import { Dropdown } from 'UI'
import { DateCityDataType, ChartDataType } from 'types'
import { Flex } from 'UI/containers'
import { DateCityList } from './date-city-list'
import { CustomLegend } from './custom-legend'
import { dropdownMockData, areaConfig, filterChartData, COLORS } from './DashboardAreaChart.utils'

interface DashboardAreaChartProps {
  chartData: ChartDataType[]
  cityListData: DateCityDataType[]
}

const DashboardAreaChart: FC<DashboardAreaChartProps> = ({ chartData, cityListData }) => {
  const [data, setData] = useState<ChartDataType[]>(chartData)
  const { palette } = useTheme()

  const handleLegendClick = (values: string[]) => {
    const filteredData = filterChartData(chartData, values)

    setData(filteredData)
  }

  return (
    <Flex width="100%" direction="column" borderRadius="4px" overflow="hidden" paddingBottom="20px">
      <DataBlockHeader title="Game Stats">
        <Dropdown
          onSelect={() => {}}
          data={dropdownMockData}
          viewType="checkbox"
          subtitle="Data type"
        />
      </DataBlockHeader>
      <Flex height="100%" paddingTop="16px" gap="15.5%" padding="16px 0 0 14px">
        <ResponsiveContainer width="100%" height={259}>
          <AreaChart data={data} syncId="Id">
            <defs>
              {COLORS.map((color, index, array) => (
                <linearGradient key={color} id={`color${index}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity={1} />
                  <stop
                    offset="100%"
                    stopColor={color}
                    stopOpacity={index === array.length - 1 ? 0.3 : 0}
                  />
                </linearGradient>
              ))}
            </defs>
            <Area dataKey="blue" stroke={palette.blue} fill="url(#color0)" {...areaConfig} />
            <Area dataKey="red" stroke={palette.pink} fill="url(#color1)" {...areaConfig} />
            <Area dataKey="green" stroke={palette.secondary} fill="url(#color2)" {...areaConfig} />
            <Area dataKey="yellow" stroke={palette.yellow} fill="url(#color3)" {...areaConfig} />
            <Area dataKey="purple" stroke={palette.primary} fill="url(#color4)" {...areaConfig} />
            <XAxis
              fontSize="11px"
              dataKey="date"
              height={30}
              axisLine={false}
              tickLine={false}
              tickSize={11}
            />
            <YAxis fontSize="11px" axisLine={false} tickLine={false} tickSize={20} />
            <Legend layout="horizontal" content={<CustomLegend onClick={handleLegendClick} />} />
            <CartesianGrid stroke="rgba(255,255,255,0.05)" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
        <DateCityList cityListData={cityListData} />
      </Flex>
    </Flex>
  )
}

export default DashboardAreaChart
