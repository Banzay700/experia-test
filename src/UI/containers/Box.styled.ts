import styled from 'styled-components'

interface BoxProps {
  background?: string
}

export const Box = styled.div<BoxProps>`
  background-color: ${({ background, theme }) => background || theme.backgrounds.primary};
`
