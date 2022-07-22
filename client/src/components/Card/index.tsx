import { Flex, FlexProps } from '@chakra-ui/react'
import React from 'react'

const Card: React.FC<React.PropsWithChildren<Partial<FlexProps>>> = (props) => {
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="center"
      px={{ base: '10px', lg: '50px', xl: '250px' }}
    >
      <Flex
        direction="column"
        py="25px"
        px={{ base: '50px', md: '0' }}
        w="100%"
        maxW={{ base: 'sm', lg: 'lg', xl: 'xl' }}
        justifyContent="space-evenly"
        alignItems="center"
        borderRadius="lg"
        border="1px solid #CCC"
        boxShadow="lg"
        {...props}
      >
        {props.children}
      </Flex>
    </Flex>
  )
}
export default Card
