import styled from 'styled-components'

export const RadioWrapper = styled.div<{ isOff: boolean }>`
  position: relative;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid
    ${({ isOff, theme }) => (isOff ? theme.background.accent : theme.background.gray)};
`

export const RadioInput = styled.div<{ isOff: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isOff, theme }) =>
    isOff ? theme.background.accent : theme.background.primary};
`
