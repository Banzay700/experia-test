import styled from 'styled-components'

export interface BoxProps {
  background?: 'primary' | 'secondary' | 'tertiary'
  bgcolor?: string
  width?: string
  height?: string
  position?: 'relative' | 'absolute' | 'fixed'
  padding?: string
  paddingBottom?: string
  borderRadius?: string
  paddingTop?: string
  paddingRight?: string
  overflow?: 'hidden' | 'visible' | 'scroll' | 'auto'
}

export const Box = styled.div<BoxProps>`
  background-color: ${({ background, theme }) =>
    background === 'secondary'
      ? theme.background.secondary
      : background === 'tertiary'
      ? theme.background.tertiary
      : theme.background.primary};
  background: ${({ bgcolor }) => bgcolor};
  overflow: ${({ overflow }) => overflow};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ padding }) => padding};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-right: ${({ paddingRight }) => paddingRight};
  position: ${({ position }) => position};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`
