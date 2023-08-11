import styled from 'styled-components'

export interface BoxProps {
  background?: 'primary' | 'secondary' | 'tertiary'
  height?: string
  position?: 'relative' | 'absolute' | 'fixed'
}

export const Box = styled.div<BoxProps>`
  position: ${({ position }) => position};
  height: ${({ height }) => height};
  background-color: ${({ background, theme }) =>
    background === 'secondary'
      ? theme.background.secondary
      : background === 'tertiary'
      ? theme.background.tertiary
      : theme.background.primary};
`
