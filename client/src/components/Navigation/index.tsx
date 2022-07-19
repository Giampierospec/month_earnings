import { Box, Flex, Heading, HStack } from '@chakra-ui/react'
import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Reducers } from '../../interfaces/general'

const Navigation: React.FC<Partial<Reducers>> = ({ auth }) => {
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
        <HStack spacing={4}>
          {_.isEmpty(auth.user) && <Link to="/login">Login</Link>}
        </HStack>
      </Flex>
    </Box>
  )
}
const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps)(Navigation)
