import { object, string } from 'yup'

export const initialValues = {
  name: '',
  email: '',
  password: '',
}

export const validationSchema = object().shape({
  name: string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(20, 'Name must be at most 20 characters'),
  email: string().required('Email is required').email('Email is invalid'),
  password: string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
})
