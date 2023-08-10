export const getToggleValues = (
  value: string,
  checkedValues: string[],
  setCheckedValues: (values: string[]) => void,
) => {
  if (checkedValues.includes(value)) {
    setCheckedValues(checkedValues.filter((val) => val !== value))
  } else {
    setCheckedValues([...checkedValues, value])
  }
}
