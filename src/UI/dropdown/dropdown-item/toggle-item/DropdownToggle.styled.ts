import styled from 'styled-components'

interface ToggleProps {
  isChecked: boolean
}

export const ToggleWrapper = styled.div<ToggleProps>`
  position: relative;
  width: 28px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ isChecked, theme }) =>
    isChecked ? theme.background.accent : theme.background.gray};
`

export const ToggleSlider = styled.span<ToggleProps>`
  position: absolute;
  top: 2.5px;
  left: ${({ isChecked }) => (isChecked ? '11px' : '2px')};
  height: 15px;
  width: 15px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.background.primary};
`
