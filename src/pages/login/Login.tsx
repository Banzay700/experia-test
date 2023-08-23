import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes'
import { useTheme } from 'styled-components'
import { LoginHeading } from 'components'
import { LoginFormTypes, SignupFormTypes } from 'types'
import { useUserReducer } from 'hooks'
import { getJwtFromCookie } from 'utils'
import { Button, Typography } from 'UI'
import { useCreateUserMutation, useLoginMutation } from 'store/api'
import { LoginForm, SignupForm } from 'components/forms'
import { Container, Flex } from '../../UI/containers'

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const { palette } = useTheme()

  const navigate = useNavigate()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: ROUTES.HOME } }

  const { setUser, userLogin } = useUserReducer()
  const [login, { isSuccess }] = useLoginMutation()
  const [signup, { isSuccess: isSignUpUser }] = useCreateUserMutation()

  const handleLogin = (values: LoginFormTypes) => {
    setUser({ ...values, name: values.email.split('@')[0] })
    login(values)

    if (isSuccess) navigate(from)
  }

  const handleSignup = async (values: SignupFormTypes) => {
    setUser(values)
    await signup(values)

    if (isSignUpUser) {
      setIsSignUp(!isSignUp)
    }
  }

  useEffect(() => {
    if (isSuccess) navigate(from)
    if (isSignUpUser) setIsSignUp(!isSignUp)
  }, [isSuccess, isSignUpUser, from, navigate]) // eslint-disable-line

  useEffect(() => {
    const jwt = getJwtFromCookie()

    if (jwt) {
      userLogin(jwt)
      navigate(from)
    }
  }, [from, navigate]) // eslint-disable-line

  return (
    <Container padding="160px 0 0" maxWidth="1920px;">
      <Flex direction="column" gap="48px" flxStart>
        <LoginHeading isSignUp={isSignUp} />
        {isSignUp ? <LoginForm onSubmit={handleLogin} /> : <SignupForm onSubmit={handleSignup} />}
        <Flex gap="8px">
          <Typography variant="h5" color={palette.gray}>
            Or
          </Typography>
          <Button variant="text" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Sign up' : 'Log in'}
          </Button>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Login
