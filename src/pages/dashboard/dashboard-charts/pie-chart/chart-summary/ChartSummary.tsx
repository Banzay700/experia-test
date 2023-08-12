import { useTheme } from 'styled-components'
import { Typography } from 'UI'
import { FadeIn } from 'UI/containers'
import { ChartTitleWrapper } from './ChartSummary.styled'

const ChartSummary = () => {
  const { palette } = useTheme()
  return (
    <FadeIn delay={0.5} duration={0.5}>
      <ChartTitleWrapper direction="column" position="absolute">
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
    </FadeIn>
  )
}

export default ChartSummary
