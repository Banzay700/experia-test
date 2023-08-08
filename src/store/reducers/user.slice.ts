import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from 'types'

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
    setUserData: (state, action: PayloadAction) => {
      state.isAuth = true
    },
  },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer
