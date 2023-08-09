import { setUserData, loginUser, logoutUser } from 'store'
import { UserType } from 'types'
import { useAppDispatch, useAppSelector } from './useStore.hook'

export const useUserReducer = () => {
  const dispatch = useAppDispatch()

  const isAuthUser = useAppSelector((state) => state.user.isAuth)
  const userData = useAppSelector((state) => state.user.user)

  const setUser = (user: UserType) => dispatch(setUserData(user))
  const userLogin = (user: string) => dispatch(loginUser(user))
  const userLogout = () => dispatch(logoutUser())

  return { isAuthUser, userData, setUser, userLogin, userLogout }
}
