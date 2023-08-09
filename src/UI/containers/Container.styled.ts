import styled from 'styled-components'
import { Box } from './Box.styled'

interface ContainerProps {
  padding?: string
  maxWidth?: string
}

export const Container = styled(Box)<ContainerProps>`
  width: 100%;
  height: 100%;
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ padding }) => padding && `padding: ${padding};`}
`
