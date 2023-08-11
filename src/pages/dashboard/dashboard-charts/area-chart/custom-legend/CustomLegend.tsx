// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react'
import { useTheme } from 'styled-components'
import { Typography } from 'UI'
import { Box, Flex } from 'UI/containers'
import { Item, ItemWrapper, LegendWrapper } from './CustomLegend.styled'
import { COLORS } from '../DashboardAreaChart'

const CustomLegend: FC<any> = ({ payload, onClick }) => {
  const { palette } = useTheme()
  const handleClick = (entry: string) => {
    onClick(entry.value)
  }
  return (
    <LegendWrapper direction="column">
      {payload.map((entry, index) => {
        const color = COLORS[index % COLORS.length]
        const isClicked = entry.value === 'clicked'

        return (
          <Flex gap="16px" key={entry.dataKey} onClick={() => handleClick(entry)}>
            <ItemWrapper borderColor={color}>
              <Item background={color} />
            </ItemWrapper>
            <Flex direction="column" gap="1px" paddingTop="1px">
              <Typography variant="subtitle1">Rating</Typography>
              <Typography variant="subtitle3" color={palette.darkWhite}>
                116 sales
              </Typography>
            </Flex>
          </Flex>
        )
      })}
    </LegendWrapper>
  )
}

export default CustomLegend
