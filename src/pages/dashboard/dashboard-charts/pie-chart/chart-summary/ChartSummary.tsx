import { FC } from 'react'
import { useTheme } from 'styled-components'
import { Typography } from 'UI'
import { PieChartSummaryDataType } from 'types'
import { FadeIn } from '../../../../../UI/containers'
import { ChartTitleWrapper } from './ChartSummary.styled'

interface ChartSummaryProps {
  data: PieChartSummaryDataType
}
const ChartSummary: FC<ChartSummaryProps> = ({ data }) => {
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
        <FadeIn key={data.percentage} delay={0.5} duration={0.5}>
          <Typography variant="headingBig" align="center" fontWeight={500}>
            {data.percentage}%
          </Typography>
          <Typography variant="subtitle2" align="center">
            {data.value} in the last
          </Typography>
          <Typography variant="subtitle2" align="center">
            30 days
          </Typography>
        </FadeIn>
      </ChartTitleWrapper>
    </FadeIn>
  )
}

export default ChartSummary
