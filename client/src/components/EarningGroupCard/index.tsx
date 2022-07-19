import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const EarningGroupCard: React.FC = () => {
  return (
    <Flex w="100%" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        py="25px"
        px={{ base: '50px', md: 'auto', lg: '75px' }}
        w="100%"
        maxW={{ base: 'sm', lg: 'lg', xl: 'xl' }}
        justifyContent="center"
        alignItems="flex-start"
        borderRadius="lg"
        border="1px solid #CCC"
      >
        <Heading fontSize={{ base: '20px', lg: '24px' }}></Heading>
      </Flex>
    </Flex>
  )
}

export default EarningGroupCard
