import { Routes, Route } from 'react-router-dom'
import { Layout, Dashboard, Login, NotFoundPage } from 'pages'
import { AuthGuard } from 'routes'
import { GlobalStyles } from 'styles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            }
          />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
export default App
