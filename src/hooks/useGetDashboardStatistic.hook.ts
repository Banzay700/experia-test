import { useGetDashboardDataQuery } from 'store/api'

export const useGetDashboardStatisticQuery = () => {
  const { data, error, isLoading, isSuccess } = useGetDashboardDataQuery()

  const statistic = data?.statistic
  const chartData = data?.chartData
  const users = data?.users
  const generalSalesTime = data?.general_sales_time

  return {
    statistic,
    chartData,
    users,
    generalSalesTime,
    error,
    isSuccess,
    isLoading,
  }
}
