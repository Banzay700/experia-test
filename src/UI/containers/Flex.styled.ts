import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Box, BoxProps } from './Box.styled'

interface FlexProps extends BoxProps {
  flxStart?: boolean
  flxCentre?: boolean
  flxGrow?: number
  gap?: string
  width?: string
  height?: string
  direction?: 'row' | 'column'
  children: ReactNode
}

const flexStart = css`
  justify-content: flex-start;
  align-items: center;
`

const flexCentre = css`
  justify-content: center;
  align-items: center;
`

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  gap: ${({ gap }) => gap || ''};
  width: ${({ width }) => width || ''};
  height: ${({ height }) => height || ''};
  flex-grow: ${({ flxGrow }) => flxGrow || ''};
  ${({ flxStart }) => flxStart && flexStart}
  ${({ flxCentre }) => flxCentre && flexCentre}
`
