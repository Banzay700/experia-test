import { FC } from 'react'
import { Flex } from 'UI/containers'
import { StatisticType } from 'types'
import { Label } from './label'
import { labelsStyleData, combineData } from './DashboardLabels.utils'

interface DashboardLabelsProps {
  statistic: StatisticType
}

const DashboardLabels: FC<DashboardLabelsProps> = ({ statistic }) => {
  const labelsData = combineData(labelsStyleData, statistic)

  return (
    <Flex gap="16px" background="secondary">
      {labelsData.map((label) => (
        <Label key={label.title} label={label} />
      ))}
    </Flex>
  )
}

export default DashboardLabels
