const headers = ['Charlottetown', 'Halifax', 'Naperville', 'Vernon', 'Montreal']
const summaryData = [
  { percentage: 85, value: '+40 418' },
  { percentage: 15, value: '+10 418' },
  { percentage: 25, value: '+24 418' },
  { percentage: 45, value: '+ 29 892' },
  { percentage: 87, value: '+ 39 123' },
]
const chartData = [
  [
    { name: 'Roles', value: 244 },
    { name: 'Users', value: 124 },
    { name: 'Policies', value: 320 },
  ],
  [
    { name: 'Roles', value: 120 },
    { name: 'Users', value: 311 },
    { name: 'Policies', value: 90 },
  ],
  [
    { name: 'Roles', value: 327 },
    { name: 'Users', value: 90 },
    { name: 'Policies', value: 300 },
  ],
  [
    { name: 'Roles', value: 123 },
    { name: 'Users', value: 300 },
    { name: 'Policies', value: 342 },
  ],
  [
    { name: 'Roles', value: 213 },
    { name: 'Users', value: 200 },
    { name: 'Policies', value: 123 },
  ],
]

export const pieChardDataMock = {
  headers,
  chartData,
  summaryData,
}
