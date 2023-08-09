import { UserLoginRequestType, UserLoginResponseType, UserType } from 'types'
import { loginUser } from 'store'
import { api } from './api'
import { API_USER_ENDPOINTS } from './utils'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<UserLoginResponseType, UserLoginRequestType>({
      query: (body) => ({
        url: API_USER_ENDPOINTS.LOGIN,
        method: 'POST',
        body,
      }),
      onQueryStarted: async (response, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled
        if (data) {
          dispatch(loginUser(data.token))
        }
      },
    }),
  }),
})

export const { useLoginMutation } = usersApi
