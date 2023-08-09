import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface FlexProps {
  flxStart?: boolean
  flxCentre?: boolean
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

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  gap: ${({ gap }) => gap || ''};
  width: ${({ width }) => width || ''};
  height: ${({ height }) => height || ''};
  ${({ flxStart }) => flxStart && flexStart}
  ${({ flxCentre }) => flxCentre && flexCentre}
`
