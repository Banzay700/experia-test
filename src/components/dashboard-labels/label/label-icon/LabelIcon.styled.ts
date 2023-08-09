import styled from 'styled-components'
import { Flex } from 'UI/containers'

interface WrapperProps {
  backgroundColor: string
}

export const IconWrapper = styled(Flex)<WrapperProps>`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: ${({ backgroundColor }) => backgroundColor};
`
