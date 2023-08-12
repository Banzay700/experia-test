import styled, { keyframes } from 'styled-components'
import { ReactNode } from 'react'

interface FadeInProps {
  duration?: number
  delay?: number
  width?: string
  height?: string
  children: ReactNode
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const FadeIn = styled.div<FadeInProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  opacity: 0;
  animation: ${fadeIn} ${({ duration }) => `${duration}s`} ${({ delay }) => `${delay}s`} ease-in-out
    forwards;
`
