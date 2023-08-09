import styled, { css } from 'styled-components'

interface ButtonProps {
  variant: 'text' | 'contained'
}

const contained = css`
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  padding: 20px 40px;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.background.accent};
  &:hover {
    background-color: ${({ theme }) => theme.background.accentHover};
  }
`

const text = css`
  background-color: transparent;
  color: ${({ theme }) => theme.palette.lightBlue};
`

export const StyledButton = styled.button<ButtonProps>`
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  font-family: ${({ theme }) => theme.font.primary};
  ${({ variant }) => (variant === 'contained' ? contained : text)}
`
