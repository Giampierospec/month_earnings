import { Badge, Heading, HStack, Text, VStack } from '@chakra-ui/react'
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
      <VStack spacing={4} justifyContent="center" mt="10px">
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
    </Card>
  )
}

export default EarningGroupCard
