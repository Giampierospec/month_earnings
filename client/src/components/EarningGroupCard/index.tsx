import { Badge, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { EarningsGroupType } from '../../generated/graphql'
import Card from '../Card'

const EarningGroupCard: React.FC<EarningsGroupType> = ({
  id,
  name,
  earnings,
}) => {
  return (
    <Card>
      <Heading
        fontSize={{ base: '20px', lg: '30px' }}
        textTransform="uppercase"
        fontWeight="bold"
      >
        <strong>{name}</strong>
      </Heading>
      <VStack spacing={4} justifyContent="center" mt="10px" align="flex-start">
        {earnings?.map((earning, i) => (
          <HStack
            key={i}
            spacing={4}
            fontSize={{ base: '16px', lg: '20px' }}
            justifyContent="flex-start"
          >
            <Badge bg="secondary" color="#FFF" w="130px" textAlign="center">
              {earning?.month} - {earning?.year}
            </Badge>
            <Text>
              {' '}
              Spent in month: <strong>{earning?.spent_in_month}</strong>
            </Text>
          </HStack>
        ))}
      </VStack>
      <HStack spacing={4} py="20px">
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
    </Card>
  )
}

export default EarningGroupCard
