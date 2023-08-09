import { Routes, Route } from 'react-router-dom'
import {
  Cards,
  Dashboard,
  Games,
  Layout,
  Login,
  NotFoundPage,
  Products,
  Settings,
  Wears,
} from 'pages'
import { AuthGuard, ROUTES } from 'routes'
import { GlobalStyles } from 'styles'

export const ROUTES_MAP = [
  {
    path: ROUTES.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: ROUTES.CARDS,
    element: <Cards />,
  },
  {
    path: ROUTES.PRODUCTS,
    element: <Products />,
  },
  {
    path: ROUTES.WEARS,
    element: <Wears />,
  },
  {
    path: ROUTES.GAMES,
    element: <Games />,
  },
  {
    path: ROUTES.SETTINGS,
    element: <Settings />,
  },
]

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          {ROUTES_MAP.map(({ path, element }) => (
            <Route key={path} path={path} element={<AuthGuard>{element}</AuthGuard>} />
          ))}
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
export default App
