import React, { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useUserReducer } from 'hooks'

import { ROUTES } from './utils'

interface AuthGuardProps {
  children: React.ReactNode
}

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const location = useLocation()
  const { isAuthUser } = useUserReducer()

  if (!isAuthUser) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />
  }

  return <>{children}</>
}

export default AuthGuard
