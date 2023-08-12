export type PieChartHeaders = string[]

export type PieChartDataItemType = {
  name: string
  value: number
}

export type PieChartDataType = {
  headers: PieChartHeaders
  chartData: PieChartDataItemType[][]
}
