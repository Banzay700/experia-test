import { DashboardIcon } from 'assets'
import { StatisticType } from 'types/dashboardStatysticsType'

export const labelsStyleData = [
  {
    title: 'IAM Users',
    icon: <DashboardIcon.User />,
    color: 'rgba(66, 204, 88, 0.15)',
  },
  {
    title: 'IAM Roles',
    icon: <DashboardIcon.Gear />,
    color: 'rgba(73, 152, 238, 0.15)',
  },
  {
    title: 'IAM Policies',
    icon: <DashboardIcon.Shield />,
    color: 'rgba(242, 93, 93, 0.15)',
  },
  {
    title: 'Compute Resources',
    icon: <DashboardIcon.Share />,
    color: 'rgba(244, 167, 50, 0.15)',
  },
  {
    title: 'Games',
    icon: <DashboardIcon.Play />,
    color: 'rgba(155, 83, 248, 0.15)',
  },
]

export type LabelsStyleType = typeof labelsStyleData

export const combineData = (labelsStyle: LabelsStyleType, statistic: StatisticType) => {
  return labelsStyle.map((label) => {
    const statisticKey = label.title.toLowerCase().replace(' ', '_') as keyof StatisticType

    return { ...label, value: statistic[statisticKey] }
  })
}
