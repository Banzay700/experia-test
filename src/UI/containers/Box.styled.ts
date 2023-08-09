import styled from 'styled-components'

export interface BoxProps {
  background?: 'primary' | 'secondary'
}

export const Box = styled.div<BoxProps>`
  background-color: ${({ background, theme }) =>
    background === 'secondary' ? theme.background.secondary : theme.background.primary};
`
