import styled from 'styled-components'

export interface BoxProps {
  background?: 'primary' | 'secondary' | 'tertiary'
}

export const Box = styled.div<BoxProps>`
  background-color: ${({ background, theme }) =>
    background === 'secondary'
      ? theme.background.secondary
      : background === 'tertiary'
      ? theme.background.tertiary
      : theme.background.primary};
`
