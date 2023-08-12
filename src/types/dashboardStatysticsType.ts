export type StatisticType = {
  iam_users: number
  iam_roles: number
  iam_policies: number
  compute_resources: number
  games: number
}

export type ChartDataType = {
  blue?: number
  red?: number
  green?: number
  purple?: number
  yellow?: number
  date: string
}

export type DateCityDataType = {
  name: string
  date: string
}

export type GeneralSaleTimeType = {
  model: {
    image: null | string
    name: string
  }
  card_name: string
  card_number: string
  type: string
  limited: number
  operations: number
  date: string
  rating: number
  status: string
  price: string
}

export type TableCardModelType = {
  image: string | null
  name: string
}

export type TableConvertedDataType = (TableCardModelType | string | number)[]

export type DashboardStatisticDataType = {
  statistic: StatisticType
  chartData: ChartDataType[]
  users: DateCityDataType[]
  general_sales_time: GeneralSaleTimeType[]
}
