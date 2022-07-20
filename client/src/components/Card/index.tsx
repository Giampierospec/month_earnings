import { Flex } from '@chakra-ui/react'
import React from 'react'

const Card: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <Flex w="100%" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        py="25px"
        px={{ base: '50px', md: 'auto', lg: '75px' }}
        w="100%"
        maxW={{ base: 'sm', lg: 'lg', xl: 'xl' }}
        justifyContent="space-evenly"
        alignItems="center"
        borderRadius="lg"
        border="1px solid #CCC"
        boxShadow="lg"
      >
        {props.children}
      </Flex>
    </Flex>
  )
}
export default Card
