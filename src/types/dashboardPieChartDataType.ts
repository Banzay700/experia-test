export type PieChartHeaders = string[]

export type PieChartDataItemType = {
  name: string
  value: number
}

export type PieChartSummaryDataType = {
  percentage: number
  value: string
}

export type PieChartDataType = {
  headers: PieChartHeaders
  chartData: PieChartDataItemType[][]
  summaryData: PieChartSummaryDataType[]
}
