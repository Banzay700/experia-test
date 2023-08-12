import { FC } from 'react'
import { useTheme } from 'styled-components'
import { Typography } from 'UI'
import { capitalizeFirstLetter } from 'utils'
import { Flex } from 'UI/containers'
import { Item, ItemWrapper } from './LegendItem.styled'

interface LegendItemProps {
  value: string
  color: string
  isChecked: boolean
  onClick: (value: string) => void
}

const LegendItem: FC<LegendItemProps> = ({ value, color, isChecked, onClick }) => {
  const { palette } = useTheme()

  return (
    <Flex gap="16px" onClick={() => onClick(value)}>
      <ItemWrapper borderColor={color}>{isChecked && <Item background={color} />}</ItemWrapper>
      <Flex direction="column" gap="1px" paddingTop="1px">
        <Typography variant="subtitle1">{capitalizeFirstLetter(value)}</Typography>
        <Typography variant="subtitle3" color={palette.darkWhite}>
          116 sales
        </Typography>
      </Flex>
    </Flex>
  )
}

export default LegendItem
