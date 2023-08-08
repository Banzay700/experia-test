import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Box } from './Box.styled'

interface FlexProps {
  center?: boolean
  spaceBetween?: boolean
  flxEnd?: boolean
  gap?: string
  width?: string
  direction?: 'row' | 'column'
  children: ReactNode
}

const flexCenter = css`
  justify-content: center;
  align-items: center;
`

const flexEnd = css`
  justify-content: flex-end;
  align-items: center;
`

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: center;
  gap: ${({ gap }) => gap || '0'};
  width: ${({ width }) => width || ''};
`

// ${({ center }) => center && flexCenter}
// ${({ spaceBetween }) =>
// spaceBetween &&
// css`
//       justify-content: space-between;
//       align-items: center;
//     `}
// ${({ flxEnd }) => flxEnd && flexEnd}
// ${({ gap }) =>
// gap &&
// css`
//       gap: ${gap};
//     `}
