import { GeneralSaleTimeType, TableConvertedDataType } from 'types'

export const convertToArrays = (data: GeneralSaleTimeType[]): TableConvertedDataType[] => {
  return data.map((item) =>
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
}

export const tableHeaders = [
  'Card model',
  'Card name',
  'Card number',
  'Type',
  'Limited',
  '№ Operations',
  'Date of last operation',
  'Rating',
  'Status',
  'Price',
  'Options',
]
