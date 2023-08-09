import { FC } from 'react'
import { StyledButton } from './Button.styled'

interface ButtonProps {
  children: string
  variant: 'text' | 'contained'
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ type, variant, children, onClick }) => {
  return (
    <StyledButton type={type || 'button'} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
