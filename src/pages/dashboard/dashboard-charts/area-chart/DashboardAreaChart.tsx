import { FC } from 'react'
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
import { dropdownMockData } from './DashboardAreaChart.utils'
import { baseTheme } from 'styles/theme'

interface DashboardAreaChartProps {
  chartData: ChartDataType[]
  cityListData: DateCityDataType[]
}
export const COLORS = [baseTheme.palette.blue, baseTheme.palette.pink, baseTheme.palette.secondary]
const DashboardAreaChart: FC<DashboardAreaChartProps> = ({ chartData, cityListData }) => {
  const { palette } = useTheme()
  const handleLegendClick = (value: string) => {
    console.log(value)
  }

  return (
    <Flex
      width="100%"
      direction="column"
      height="100%"
      borderRadius="4px"
      overflow="hidden"
      paddingBottom="20px">
      <DataBlockHeader title="Game Stats">
        <Dropdown data={dropdownMockData} viewType="checkbox" subtitle="Data type" />
      </DataBlockHeader>
      <Flex height="100%" paddingTop="16px" gap="203px" padding="16px 0 0 14px">
        <ResponsiveContainer width="100%" height={259}>
          <AreaChart data={chartData} syncId="anyId">
            <defs>
              <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={palette.blue} stopOpacity={1} />
                <stop offset="100%" stopColor={palette.blue} stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="colorPink" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={palette.pink} stopOpacity={1} />
                <stop offset="100%" stopColor={palette.pink} stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={palette.secondary} stopOpacity={1} />
                <stop offset="100%" stopColor={palette.secondary} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              strokeWidth={2}
              dot={{ strokeWidth: 5, r: 2 }}
              type="monotone"
              dataKey="blue"
              stroke={palette.blue}
              fill="url(#colorBlue)"
            />
            <Area
              strokeWidth={2}
              dot={{ strokeWidth: 5, r: 2 }}
              type="monotone"
              dataKey="red"
              stroke={palette.pink}
              fill="url(#colorPink)"
            />
            <Area
              strokeWidth={2}
              dot={{ strokeWidth: 5, r: 2 }}
              type="monotone"
              dataKey="green"
              stroke={palette.secondary}
              fill="url(#colorGreen)"
            />
            <XAxis
              fontSize="11px"
              dataKey="date"
              height={30}
              axisLine={false}
              tickLine={false}
              tickSize={11}
            />
            <Legend layout="horizontal" content={<CustomLegend onClick={handleLegendClick} />} />
            <YAxis fontSize="11px" axisLine={false} tickLine={false} tickSize={20} />
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
