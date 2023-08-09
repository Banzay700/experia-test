import styled from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const StyledInput = styled.input`
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border.primary};
  background-color: ${({ theme }) => theme.backgrounds.primary};
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: 400;
  line-height: 24px;
  width: 100%;
  height: 64px;
  font-size: 15px;
  transition: border-color 0.2s ease-in-out;
  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.darkGray};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.border.primaryHover};
  }
`

export const Error = styled.p`
  position: absolute;
  bottom: -12px;
  left: 0;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.error};
`
