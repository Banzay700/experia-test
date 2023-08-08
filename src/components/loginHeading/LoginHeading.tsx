import React, { FC } from 'react'
import { Typography } from 'UI'
import { Flex } from 'UI/containers'

interface LoginHeadingProps {
  isSignUp: boolean
}

const LoginHeading: FC<LoginHeadingProps> = ({ isSignUp }) => {
  return (
    <Flex direction="column" gap="8px">
      <Typography variant="h1" align="center">
        Welcome back
      </Typography>
      <Typography variant="h5" align="center">
        Welcome back! Please enter your details
      </Typography>
    </Flex>
  )
}

export default LoginHeading
