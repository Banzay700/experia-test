import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes'
import { Container, Flex } from 'UI/containers'
import LoginHeading from 'components/loginHeading/LoginHeading'
import { SignupForm } from 'components/forms'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { from } = location.state || { from: { pathname: ROUTES.HOME } }
  return (
    <Container paddingTop="160px">
      <Flex direction="column" gap="48px">
        <LoginHeading isSignUp />
        <SignupForm />
      </Flex>
    </Container>
  )
}

export default Login
