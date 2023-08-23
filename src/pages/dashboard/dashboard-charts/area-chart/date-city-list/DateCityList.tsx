import { FC } from 'react'
import { useTheme } from 'styled-components'
import { nanoid } from 'nanoid'
import { Typography } from 'UI'
import { Flex } from '../../../../../UI/containers'

type DateCityListType = {
  name: string
  date: string
}

interface DateCityListProps {
  cityListData: DateCityListType[]
}
const DateCityList: FC<DateCityListProps> = ({ cityListData }) => {
  const { palette } = useTheme()
  return (
    <Flex direction="column" gap="19px" paddingRight="8px" paddingTop="12px">
      {cityListData.map((item) => (
        <Flex key={nanoid()} direction="column" paddingRight="32px" gap="2px">
          <Typography variant="subtitle1">{item.name}</Typography>
          <Typography variant="subtitle3" color={palette.darkWhite}>
            {item.date}
          </Typography>
        </Flex>
      ))}
    </Flex>
  )
}

export default DateCityList
