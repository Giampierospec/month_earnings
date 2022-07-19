import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'

const PrimaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      bg="primary"
      color="#FFF"
      textTransform="uppercase"
      _hover={{
        bg: 'secondary',
      }}
      minW="50px"
      minH="40px"
      {...props}
    >
      {props.children}
    </Button>
  )
}
export default PrimaryButton
