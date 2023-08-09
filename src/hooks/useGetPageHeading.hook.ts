import { useLocation } from 'react-router-dom'

export const useGetPageHeading = () => {
  const { pathname } = useLocation()

  if (pathname === '/') return 'DASHBOARD'

  return pathname.split('/')[1].toUpperCase()
}
