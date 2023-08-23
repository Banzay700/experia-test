import { baseTheme } from 'styles'

export const COLORS = [baseTheme.palette.pink, baseTheme.palette.secondary, baseTheme.palette.blue]

export const pieChartConfig = {
  cx: 142,
  cy: 133,
  innerRadius: 95,
  outerRadius: 116,
  paddingAngle: 5,
  stroke: 'none',
  cornerRadius: 11,
  dataKey: 'value',
}

export const legendWrapperStyle = {
  top: '33px',
  right: '-110px',
  lineHeight: '31px',
}

export const legendTypographyStyles = {
  color: baseTheme.palette.darkWhite,
  fontSize: 12,
  fontWeight: 400,
  marginLeft: 12,
}
