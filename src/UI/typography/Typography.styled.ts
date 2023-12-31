import styled from 'styled-components'
import { TypographyPositionType, TypographyVariantType } from 'types'

interface TypographyProps {
  variant: TypographyVariantType
  align?: TypographyPositionType
  fontWeight?: number
  fontFamily?: 'primary' | 'secondary'
  color?: string
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none'
}

export const Typography = styled.div<TypographyProps>`
  background-color: transparent;
  font-family: ${({ fontFamily, theme }) => fontFamily === 'secondary' && theme.font.secondary};
  text-align: ${({ align }) => align || 'left'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color, theme }) => color || theme.palette.white};
  font-size: ${({ variant, theme }) => theme.typography[variant].fontSize};
  line-height: ${({ variant, theme }) => theme.typography[variant].lineHeight};
  text-transform: ${({ textTransform }) => textTransform || 'none'};
`
