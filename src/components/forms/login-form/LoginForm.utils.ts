import { object, string } from 'yup'

export const initialValues = {
  email: '',
  password: '',
}

export const validationSchema = object().shape({
  email: string().required('Email is required').email('Email is invalid'),
  password: string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
})
