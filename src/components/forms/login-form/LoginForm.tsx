import { Formik } from 'formik'
import { Button, Input } from 'UI'
import { LoginFormType } from 'types'
import { initialValues, validationSchema } from './LoginForm.utils'
import { StyledForm } from './LoginForm.styled'

const LoginForm = () => {
  const handleSubmit = (values: LoginFormType) => {
    console.log('values: ', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      <StyledForm>
        <Input name="email" type="text" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Button variant="contained" type="submit">
          Create account
        </Button>
      </StyledForm>
    </Formik>
  )
}

export default LoginForm
