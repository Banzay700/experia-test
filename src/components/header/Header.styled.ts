import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 16px 48px 16px 32px;
  background-color: ${({ theme }) => theme.background.secondary};
  align-items: center;
  justify-content: space-between;
`
