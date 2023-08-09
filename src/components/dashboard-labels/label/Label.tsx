import { FC, ReactNode } from 'react'
import { useTheme } from 'styled-components'
import { Typography } from 'UI'
import { Flex } from 'UI/containers'
import { Wrapper } from './Label.styled'
import { LabelIcon } from './label-icon'

interface LabelProps {
  label: {
    title: string
    icon: ReactNode
    value: number
    color: string
  }
}

const Label: FC<LabelProps> = ({ label }) => {
  const { palette } = useTheme()

  return (
    <Wrapper flex={1}>
      <LabelIcon icon={label.icon} background={label.color} />
      <Flex direction="column">
        <Typography variant="h2">{label.value}</Typography>
        <Typography variant="subtitle1" color={palette.lightSlateGrey} fontWeight={500}>
          {label.title}
        </Typography>
      </Flex>
    </Wrapper>
  )
}

export default Label
