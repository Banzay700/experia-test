import { DashboardStatisticDataType } from 'types'
import { api } from './api'
import { API_DASHBOARD_ENDPOINTS } from './utils'

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardData: builder.query<DashboardStatisticDataType, void>({
      query: () => ({ url: API_DASHBOARD_ENDPOINTS.ALL, method: 'GET' }),
    }),
  }),
})

export const { useGetDashboardDataQuery } = usersApi
