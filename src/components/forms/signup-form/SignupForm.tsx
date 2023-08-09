import { FC } from 'react'
import { Input, Button } from 'UI'
import { SignupFormTypes } from 'types'
import { initialValues, validationSchema } from './SignupForm.utils'
import { Form } from '../form'

interface SignupFormProps {
  onSubmit: (values: SignupFormTypes) => void
}

const SignupForm: FC<SignupFormProps> = ({ onSubmit }) => {
  return (
    <Form initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Input name="name" type="text" placeholder="Name" />
      <Input name="email" type="text" placeholder="Email" />
      <Input name="password" type="password" placeholder="Password" />
      <Button variant="contained" type="submit">
        Create account
      </Button>
    </Form>
  )
}

export default SignupForm
