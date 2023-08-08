import { FC } from 'react'
import { StyledButton } from './Button.styled'

interface ButtonProps {
  children: string
  variant: 'text' | 'contained'
  type?: 'button' | 'submit' | 'reset'
}

const Button: FC<ButtonProps> = ({ type, variant, children }) => {
  return (
    <StyledButton type={type || 'button'} variant={variant}>
      {children}
    </StyledButton>
  )
}

export default Button
