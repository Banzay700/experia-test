import styled from 'styled-components'

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2'
  align?: 'left' | 'center' | 'right'
  fontWeight?: number
  color?: string
}

export const Typography = styled.div<TypographyProps>`
  font-family: ${({ theme }) => theme.font.primary};
  text-align: ${({ align }) => align || 'left'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color, theme }) => color || theme.palette.white};
  font-size: ${({ variant, theme }) => theme.typography[variant].fontSize};
  line-height: ${({ variant, theme }) => theme.typography[variant].lineHeight};
  background-color: transparent;
`
