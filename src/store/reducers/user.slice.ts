import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from 'types'
import { setJwtCookie, deleteJwtCookie } from 'utils'

const defaultUserState: UserType = {
  name: '',
  email: '',
  password: '',
}

const initialState: { isAuth: boolean; user: UserType } = {
  isAuth: false,
  user: defaultUserState,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload
    },
    loginUser: (state, action: PayloadAction<string>) => {
      state.isAuth = true
      setJwtCookie(action.payload, 2)
    },
    logoutUser: (state) => {
      state.isAuth = false
      state.user = defaultUserState
      deleteJwtCookie()
    },
  },
})

export const { loginUser, setUserData, logoutUser } = userSlice.actions

export default userSlice.reducer
