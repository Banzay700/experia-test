import { useTheme } from 'styled-components'
import { Typography } from 'UI'
import { DashboardIcons } from 'assets'
import { Flex } from 'UI/containers'
import { Wrapper } from './Label.styled'
import { LabelIcon } from './label-icon'

const Label = () => {
  const { palette } = useTheme()
  return (
    <Wrapper>
      <LabelIcon icon={<DashboardIcons.User />} />
      <Flex direction="column">
        <Typography variant="h2">14</Typography>
        <Typography variant="subtitle1" color={palette.lightSlateGrey}>
          IAM User
        </Typography>
      </Flex>
    </Wrapper>
  )
}

export default Label
