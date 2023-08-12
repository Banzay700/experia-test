export function filterChartData(chartData, excludedColors) {
  return chartData.map((dataPoint) => {
    const newDataPoint = {}
    for (const color in dataPoint) {
      if (!excludedColors.includes(color)) {
        newDataPoint[color] = dataPoint[color]
      }
    }
    return newDataPoint
  })
}

export const areaChartData = [
  {
    blue: 8,
    red: 6,
    green: 4,
    purple: 2,
    yellow: 5,
    date: '2023-02-08',
  },
  {
    blue: 15,
    red: 3,
    green: 10,
    purple: 5,
    yellow: 2,
    date: '2023-02-09',
  },
  {
    blue: 3,
    red: 9,
    green: 1,
    purple: 7,
    yellow: 8,
    date: '2023-02-10',
  },
  {
    blue: 20,
    red: 27,
    green: 12,
    purple: 10,
    yellow: 15,
    date: '2023-02-11',
  },
  {
    blue: 12,
    red: 18,
    green: 4,
    purple: 6,
    yellow: 10,
    date: '2023-02-12',
  },
  {
    blue: 25,
    red: 7,
    green: 9,
    purple: 15,
    yellow: 4,
    date: '2023-02-13',
  },
  {
    blue: 10,
    red: 14,
    green: 18,
    purple: 3,
    yellow: 20,
    date: '2023-02-14',
  },
  {
    blue: 5,
    red: 5,
    green: 10,
    purple: 8,
    yellow: 2,
    date: '2023-02-15',
  },
  {
    blue: 18,
    red: 10,
    green: 2,
    purple: 6,
    yellow: 7,
    date: '2023-02-16',
  },
  {
    blue: 22,
    red: 5,
    green: 14,
    purple: 9,
    yellow: 12,
    date: '2023-02-17',
  },
  {
    blue: 7,
    red: 4,
    green: 6,
    purple: 2,
    yellow: 3,
    date: '2023-02-18',
  },
]
