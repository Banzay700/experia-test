import { FC } from 'react'
import { Button, Input } from 'UI'
import { LoginFormTypes } from 'types'
import { Form } from '../form'
import { initialValues, validationSchema } from './LoginForm.utils'

interface LoginFormProps {
  onSubmit: (values: LoginFormTypes) => void
}

const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
  return (
    <Form initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Input name="email" type="text" placeholder="Email" />
      <Input name="password" type="password" placeholder="Password" />
      <Button variant="contained" type="submit">
        Log in
      </Button>
    </Form>
  )
}

export default LoginForm
