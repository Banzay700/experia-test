import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes'
import { useTheme } from 'styled-components'
import { LoginHeading } from 'components'
import { LoginFormTypes } from 'types'
import { useUserReducer } from 'hooks'
import { getJwtFromCookie } from 'utils'
import { Button, Typography } from 'UI'
import { Container, Flex } from 'UI/containers'
import { LoginForm, SignupForm } from 'components/forms'
import { useLoginMutation } from 'store/api'

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const { palette } = useTheme()

  const navigate = useNavigate()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: ROUTES.HOME } }

  const { setUser, userLogin } = useUserReducer()
  const [login, { isSuccess }] = useLoginMutation()

  const handleChangeFormType = () => setIsSignUp(!isSignUp)
  const handleLoginSubmit = async (values: LoginFormTypes) => {
    await login(values)

    if (isSuccess) {
      navigate(from)
      setUser({ ...values, name: values.email.split('@')[0] })
    }
  }

  useEffect(() => {
    const jwt = getJwtFromCookie()

    if (jwt) {
      userLogin(jwt)
      navigate(from)
    }
  }, [userLogin, navigate, from])

  return (
    <Container padding="160px 0 0" maxWidth="1920px;">
      <Flex direction="column" gap="48px" flxStart>
        <LoginHeading isSignUp={isSignUp} />
        {isSignUp ? <LoginForm onSubmit={handleLoginSubmit} /> : <SignupForm />}
        <Flex gap="8px">
          <Typography variant="h5" color={palette.gray}>
            Or
          </Typography>
          <Button variant="text" onClick={handleChangeFormType}>
            {isSignUp ? 'Sign up' : 'Log in'}
          </Button>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Login
