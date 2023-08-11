import styled from 'styled-components'
import { Flex } from 'UI/containers'

interface LegendProps {
  background?: string
  borderColor?: string
}

export const LegendWrapper = styled(Flex)`
  position: absolute;
  bottom: 117px;
  right: -130px;
  list-style: none;
  gap: 20px;
`

export const ItemWrapper = styled.div<LegendProps>`
  width: 24px;
  height: 24px;
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 3px;
  cursor: pointer;
`

export const Item = styled.div<LegendProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ background }) => background};
  border: 2px solid ${({ theme }) => theme.background.primary}});
`
