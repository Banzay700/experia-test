import styled from 'styled-components'
import { TypographyVariantProps } from 'types'
import { baseTheme } from 'styles/theme'
import { Box } from '../containers'

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  align?: 'left' | 'center' | 'right'
  fontWeight?: number
  color?: string
}

const typographyVariants: Record<string, TypographyVariantProps> = {
  h1: {
    fontSize: '48px',
    lineHeight: '56px',
  },
  h3: {
    fontSize: '20px',
    lineHeight: '28px',
  },
  h5: {
    fontSize: '15px',
    lineHeight: '24px',
  },
}

export const Typography = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  text-align: ${({ align }) => align || 'left'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color, theme }) => color || theme.colors.white};
  font-size: ${({ variant }: TypographyProps) => typographyVariants[variant].fontSize};
  line-height: ${({ variant }: TypographyProps) => typographyVariants[variant].lineHeight};
  background-color: transparent;
`
