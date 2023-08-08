import styled from 'styled-components'
import { TypographyVariantProps } from 'types'
import { baseTheme } from 'styles/baseTheme'
import { Box } from '../containers'

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  align?: 'left' | 'center' | 'right'
  fontWeight?: number
}

const typographyVariants: Record<string, TypographyVariantProps> = {
  h1: {
    fontSize: '48px',
    lineHeight: '56px',
  },
  h5: {
    fontSize: '15px',
    lineHeight: '24px',
    color: baseTheme.colors.gray,
  },
}

export const Typography = styled(Box)`
  font-family: ${({ theme }) => theme.fonts.primary};
  text-align: ${({ align }: TypographyProps) => align || 'left'};
  font-size: ${({ variant }: TypographyProps) => typographyVariants[variant].fontSize};
  font-weight: ${({ fontWeight }: TypographyProps) => fontWeight || 400};
  line-height: ${({ variant }: TypographyProps) => typographyVariants[variant].lineHeight};
  color: ${({ variant }: TypographyProps) => typographyVariants[variant].color};
`
