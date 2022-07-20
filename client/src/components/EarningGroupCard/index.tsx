import { Badge, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { EarningsGroupType } from '../../generated/graphql'
import PrimaryButton from '../PrimaryButton'

const EarningGroupCard: React.FC<EarningsGroupType> = ({
  id,
  name,
  earnings,
}) => {
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
      >
        <Heading
          fontSize={{ base: '20px', lg: '30px' }}
          textTransform="uppercase"
          fontWeight="bold"
        >
          <strong>{name}</strong>
        </Heading>
        <VStack spacing={4} justifyContent="center">
          {earnings?.map((earning, i) => (
            <HStack key={i} spacing={4} fontSize={{ base: '16px', lg: '20px' }}>
              <Badge bg="secondary" color="#FFF">
                {earning?.month} - {earning?.year}
              </Badge>
              <Text>
                {' '}
                Spent in month: <strong>{earning?.spent_in_month}</strong>
              </Text>
            </HStack>
          ))}
          <HStack spacing={4}>
            <Link to={`/details/${id}`}>
              <Badge bg="antiquewhite" p="5px 10px">
                Details
              </Badge>
            </Link>
            <Link to={`/create-earning/${id}`}>
              <Badge bg="aquamarine" p="5px 10px">
                Add Earning
              </Badge>
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  )
}

export default EarningGroupCard
