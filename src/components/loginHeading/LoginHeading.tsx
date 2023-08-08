import React, { FC } from 'react'
import { useTheme } from 'styled-components'
import { Typography } from 'UI'
import { Flex } from 'UI/containers'

interface LoginHeadingProps {
  isSignUp: boolean
}

const LoginHeading: FC<LoginHeadingProps> = ({ isSignUp }) => {
  const { colors } = useTheme()

  return (
    <Flex direction="column" gap="8px">
      <Typography variant="h1" align="center" fontWeight={500}>
        Welcome back
      </Typography>
      <Typography variant="h5" align="center" fontWeight={500} color={colors.gray}>
        Welcome back! Please enter your details
      </Typography>
    </Flex>
  )
}

export default LoginHeading
