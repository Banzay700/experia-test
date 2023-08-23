import { baseTheme } from 'styles/theme'
import { ChartDataType } from 'types'

export const areaConfig = {
  strokeWidth: 2,
  dot: { strokeWidth: 5, r: 2 },
  type: 'monotone' as const,
}

export const dropdownMockData = ['Diagrams', 'Graph', 'Table', 'Paragraph']

export const COLORS = [
  baseTheme.palette.blue,
  baseTheme.palette.pink,
  baseTheme.palette.secondary,
  baseTheme.palette.yellow,
  baseTheme.palette.primary,
]

export const filterChartData = (chartData: ChartDataType[], includedColors: string[]) => {
  if (includedColors.length === 0) return chartData

  return chartData.map((dataPoint) => {
    const newDataPoint = { date: dataPoint.date }
    const dataPointColors = Object.keys(dataPoint) as (keyof ChartDataType)[]

    dataPointColors.forEach((color) => {
      if (includedColors.includes(color)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        newDataPoint[color] = dataPoint[color]
      }
    })

    return newDataPoint
  })
}
