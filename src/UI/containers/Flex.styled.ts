import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Box, BoxProps } from './Box.styled'

interface FlexProps extends BoxProps {
  flxStart?: boolean
  flxCenter?: boolean
  flxBetween?: boolean
  maxWidth?: string
  maxHeight?: string
  flex?: number
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

const flexBetween = css`
  justify-content: space-between;
  align-items: center;
`

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  gap: ${({ gap }) => gap || ''};
  width: ${({ width }) => width || ''};
  height: ${({ height }) => height || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  max-height: ${({ maxHeight }) => maxHeight || ''};
  flex: ${({ flex }) => flex || ''};
  ${({ flxStart }) => flxStart && flexStart}
  ${({ flxCenter }) => flxCenter && flexCentre}
  ${({ flxBetween }) => flxBetween && flexBetween}
`
