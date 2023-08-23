import { FC, useEffect, useState } from 'react'

import { LegendWrapper } from './CustomLegend.styled'
import { COLORS } from '../DashboardAreaChart.utils'
import { LegendItem } from './legend-item'

interface CustomLegendProps {
  payload?: { value: string; dataKey: string }[]
  onClick: (values: string[]) => void
}

const CustomLegend: FC<CustomLegendProps> = ({ payload, onClick }) => {
  const [values, setValues] = useState<string[]>([])

  const handleClick = (value: string) => {
    if (values.includes(value)) {
      const newValues = values.filter((item) => item !== value)

      setValues([...newValues])
      onClick(newValues)
    } else {
      onClick([...values, value])
      setValues([...values, value])
    }
  }

  useEffect(() => {
    if (values.length === 0) {
      const chartValues = payload?.map((item) => item.value)

      if (chartValues) {
        setValues(chartValues)
      }
    }
  }, [values, payload])

  return (
    <LegendWrapper direction="column">
      {payload?.map((entry, index) => (
        <LegendItem
          key={entry.dataKey}
          value={entry.value}
          isChecked={values.includes(entry.value)}
          color={COLORS[index % COLORS.length]}
          onClick={handleClick}
        />
      ))}
    </LegendWrapper>
  )
}

export default CustomLegend
