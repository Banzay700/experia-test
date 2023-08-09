import { Input } from 'UI/input'
import { Button } from 'UI/button'
import { SignupFormTypes } from 'types'
import { initialValues, validationSchema } from './SignupForm.utils'
import { Form } from '../form'

const SignupForm = () => {
  const handleSubmit = (values: SignupFormTypes) => {
    console.log('values: ', values)
  }

  return (
    <Form initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
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
