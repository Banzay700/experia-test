import styled from 'styled-components'

interface LegendItemProps {
  background?: string
  borderColor?: string
}

export const ItemWrapper = styled.div<LegendItemProps>`
  width: 24px;
  height: 24px;
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 3px;
  cursor: pointer;
`
export const Item = styled.div<LegendItemProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ background }) => background};
  border: 2px solid ${({ theme }) => theme.background.primary}});
`
