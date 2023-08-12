export type PieChartDataPointType = {
  name: string
  value: number
}

export type PieChartDataType = {
  [cityName: string]: PieChartDataPointType[]
}
