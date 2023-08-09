import styled from 'styled-components'

export const AvatarIconWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background.darkBlue};
  color: ${({ theme }) => theme.palette.white};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.palette.secondary};
  }
`
