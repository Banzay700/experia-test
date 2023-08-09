import styled from 'styled-components'
import { Form } from 'formik'

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 500px;
  width: 100%;

  button {
    margin-top: 32px;
  }
`
