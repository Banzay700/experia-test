import React from 'react'
import styled from 'styled-components'
import { Box } from './Box.styled'

interface ContainerProps {
  paddingTop?: string
  paddingBottom?: string
  paddingLeft?: string
  paddingRight?: string
}

export const Container = styled(Box)<ContainerProps>`
  max-width: 1920px;
  width: 100%;
  height: 100%;
  padding-top: ${({ paddingTop }) => paddingTop || '0'};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || '0'};
  padding-left: ${({ paddingLeft }) => paddingLeft || '0'};
  padding-right: ${({ paddingRight }) => paddingRight || '0'};
`
