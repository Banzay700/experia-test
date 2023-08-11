import { useTheme } from 'styled-components'
import { Typography } from 'UI'
import { ChartTitleWrapper } from './ChartTitle.styled'

const ChartTitle = () => {
  const { palette } = useTheme()
  return (
    <ChartTitleWrapper direction="column" position="absolute" maxWidth="232px">
      <Typography
        variant="subtitle2"
        fontWeight={500}
        color={palette.darkWhite}
        fontFamily="secondary"
        align="center"
        textTransform="uppercase">
        Excessive
      </Typography>
      <Typography variant="headingBig" align="center" fontWeight={500}>
        85%
      </Typography>
      <Typography variant="subtitle2" align="center">
        +40 418 in the last
      </Typography>
      <Typography variant="subtitle2" align="center">
        30 days
      </Typography>
    </ChartTitleWrapper>
  )
}

export default ChartTitle
