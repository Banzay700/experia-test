import { Button, Input } from 'UI'
import { LoginFormTypes } from 'types'
import { Form } from '../form'
import { initialValues, validationSchema } from './LoginForm.utils'

const LoginForm = () => {
  const handleSubmit = (values: LoginFormTypes) => {
    console.log('values: ', values)
  }

  return (
    <Form initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Input name="email" type="text" placeholder="Email" />
      <Input name="password" type="password" placeholder="Password" />
      <Button variant="contained" type="submit">
        Log in
      </Button>
    </Form>
  )
}

export default LoginForm
