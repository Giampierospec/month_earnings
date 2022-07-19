import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
  return (
    <Box>
      <Flex
        justifyContent="space-between"
        p="22px 30px"
        fontSize={{ base: '30px', lg: '36px' }}
        bg="rgb(2,0,36)"
        background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(24,24,230,1) 34%, rgba(0,212,255,1) 62%)"
        zIndex={1}
        color="#FFF"
        mb="25px"
      >
        <Heading fontSize="45px">
          <Link to="/">Earnings</Link>
        </Heading>
      </Flex>
    </Box>
  )
}

export default Navigation
