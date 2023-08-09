import { UserLoginRequestType, UserLoginResponseType, UserType } from 'types'
import { loginUser } from 'store'
import { api } from './api'
import { API_USER_ENDPOINTS } from './utils'

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
    createUser: builder.mutation<UserType, UserType>({
      query: (body) => ({
        url: API_USER_ENDPOINTS.SIGN_UP,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useLoginMutation, useCreateUserMutation } = usersApi
