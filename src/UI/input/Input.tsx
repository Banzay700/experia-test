import { FC } from 'react'
import { useField } from 'formik'
import { Error, InputWrapper, StyledInput } from './Input.styled'

interface InputProps {
  name: string
  placeholder: string
  type: 'text' | 'password' | 'email'
}

const Input: FC<InputProps> = ({ name, type, placeholder }) => {
  const [field, meta] = useField(name)
  const validationError = meta.touched && meta.error
  return (
    <InputWrapper>
      <StyledInput type={type} placeholder={placeholder} {...field} />
      {validationError && <Error>{meta.error}</Error>}
    </InputWrapper>
  )
}

export default Input
