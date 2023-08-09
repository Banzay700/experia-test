import React, { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { ROUTES } from './utils'

interface AuthGuardProps {
  children: React.ReactNode
}

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const location = useLocation()
  const auth = true

  if (!auth) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />
  }

  return <>{children}</>
}

export default AuthGuard
