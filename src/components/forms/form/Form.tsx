import { FC, ReactNode } from 'react'
import { Formik, FormikHelpers } from 'formik'
import { ObjectSchema } from 'yup'
import { CommonFormTypes } from 'types'
import { StyledForm } from './Form.styled'

interface FormProps {
  initialValues: CommonFormTypes
  validationSchema: ObjectSchema<CommonFormTypes>
  onSubmit: (values: CommonFormTypes, actions: FormikHelpers<CommonFormTypes>) => void
  children: ReactNode
}

const Form: FC<FormProps> = ({ initialValues, validationSchema, children, onSubmit }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <StyledForm>{children}</StyledForm>
    </Formik>
  )
}

export default Form
