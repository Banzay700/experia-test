import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts'
import { DataBlockHeader } from 'components'
import { Dropdown } from 'UI'
import { Flex } from 'UI/containers'
import { useTheme } from 'styled-components'

const mockData = ['Diagrams', 'Graph', 'Table', 'Paragraph']

const DashboardAreaChart = ({ data }) => {
  const { palette } = useTheme()

  return (
    <Flex width="100%" direction="column">
      <DataBlockHeader title="Game Stats">
        <Dropdown data={mockData} viewType="checkbox" subtitle="Data type" />
      </DataBlockHeader>
      <Flex flex={1}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} syncId="anyId">
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
              dot={{ fill: palette.secondary, strokeWidth: 5, r: 2 }}
              type="monotone"
              dataKey="blue"
              stroke={palette.blue}
              fill="url(#colorBlue)"
            />
            <Area
              strokeWidth={2}
              dot={{ fill: palette.secondary, strokeWidth: 5, r: 2 }}
              type="monotone"
              dataKey="red"
              stroke={palette.pink}
              fill="url(#colorPink)"
            />
            <Area
              strokeWidth={2}
              dot={{ fill: palette.secondary, strokeWidth: 5, r: 2 }}
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
              tickSize={20}
            />
            <YAxis
              fontWeight={400}
              fontSize="11px"
              axisLine={false}
              tickLine={false}
              tickSize={40}
            />
            <CartesianGrid stroke="rgba(255,255,255,0.05)" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </Flex>
    </Flex>
  )
}

export default DashboardAreaChart
