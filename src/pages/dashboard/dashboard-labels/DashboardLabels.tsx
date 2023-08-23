import { FC } from 'react'
import { StatisticType } from 'types'
import { Flex } from 'UI/containers'
import { Label } from './label'
import { labelsStyleData, combineData } from './DashboardLabels.utils'

interface DashboardLabelsProps {
  statistic: StatisticType
}

const DashboardLabels: FC<DashboardLabelsProps> = ({ statistic }) => {
  const labelsData = combineData(labelsStyleData, statistic)

  return (
    <Flex gap="20px" background="secondary" height="100%">
      {labelsData.map((label) => (
        <Label key={label.title} label={label} />
      ))}
    </Flex>
  )
}

export default DashboardLabels
