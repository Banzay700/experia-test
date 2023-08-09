import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes'
import { useTheme } from 'styled-components'
import { LoginHeading } from 'components'
import { LoginForm, SignupForm } from 'components/forms'
import { Button, Typography } from 'UI'
import { Container, Flex } from 'UI/containers'

const Login = () => {
  const { colors } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const isUser = false
  const { from } = location.state || { from: { pathname: ROUTES.HOME } }

  return (
    <Container padding="160px 0 0" maxWidth="1920px;">
      <Flex direction="column" gap="48px" flxStart>
        <LoginHeading isSignUp={isUser} />
        {isUser ? <LoginForm /> : <SignupForm />}
        <Flex gap="8px">
          <Typography variant="h5" color={colors.gray}>
            Or
          </Typography>
          <Button variant="text">{isUser ? 'Sign up' : 'Log in'}</Button>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Login
