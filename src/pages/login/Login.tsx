import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes'
import { useTheme } from 'styled-components'
import { Container, Flex } from 'UI/containers'
import LoginHeading from 'components/loginHeading/LoginHeading'
import { LoginForm } from 'components/forms'
import { Button, Typography } from 'UI'

const Login = () => {
  const { colors } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  const { from } = location.state || { from: { pathname: ROUTES.HOME } }
  return (
    <Container paddingTop="160px">
      <Flex direction="column" gap="48px">
        <LoginHeading isSignUp />
        <LoginForm />
        <Flex gap="8px">
          <Typography variant="h5" color={colors.gray}>
            Or
          </Typography>
          <Button variant="text">Log in</Button>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Login
