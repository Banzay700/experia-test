import { GeneralSaleTimeType, TableConvertedDataType } from 'types'
import { capitalizeFirstLetter } from 'utils'

interface GetTableData {
  tableHeaders: string[]
  tableData: TableConvertedDataType[]
}

export const prepareHeaders = (data: GeneralSaleTimeType[]) => {
  const headersData = data[0]
  const headers = Object.keys(headersData).map((item) => {
    if (item === 'model') return 'Card model'
    if (item === 'operations') return '№ Operations'
    if (item === 'date') return 'Date of last operation'

    const preparedItem = item.replace(/_/g, ' ')

    return capitalizeFirstLetter(preparedItem)
  })

  return [...headers, 'Options']
}

export const prepareStatistic = (data: GeneralSaleTimeType[], dropdownValues: string[]) => {
  const convertedHeaders = dropdownValues.map((header) => {
    if (header === '№ Operations') return 'operations'
    if (header === 'Date of last operation') return 'date'
    if (header === 'Card model') return 'model'

    return header.toLowerCase().replace(/ /g, '_')
  })

  type TableDataKeysType = keyof GeneralSaleTimeType

  const tableArray = data.map((item: GeneralSaleTimeType) => {
    const filteredItem: Partial<GeneralSaleTimeType> = {}

    Object.keys(item).forEach((key) => {
      if (convertedHeaders.includes(key as TableDataKeysType)) {
        // eslint-disable-next-line
        // @ts-ignore
        filteredItem[key as TableDataKeysType] = item[key as TableDataKeysType]
      }
    })

    return filteredItem
  })

  return tableArray as GeneralSaleTimeType[]
}

export const getTableData = (data: GeneralSaleTimeType[]): GetTableData => {
  const tableData = data.map((item) =>
    (Object.keys(item) as (keyof GeneralSaleTimeType)[]).map((prop) => {
      const isImage = prop === 'model' && item[prop]?.image

      if (prop === 'rating') {
        return `${item[prop]}%`
      }

      if (isImage) {
        return item[prop]
      }

      return item[prop]
    }),
  )

  const tableHeaders = prepareHeaders(data)

  return { tableHeaders, tableData }
}
