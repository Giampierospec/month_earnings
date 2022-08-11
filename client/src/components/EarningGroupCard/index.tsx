import {
  Badge,
  Heading,
  HStack,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteEarningGroupsAction } from '../../actions'
import { EarningsGroup } from '../../generated/graphql'
import { Actions, Reducers } from '../../interfaces/general'
import { errorsConvert, UserRoles } from '../../utils/helpers'
import Card from '../Card'

const EarningGroupCard: React.FC<
  EarningsGroup & Partial<Actions & Reducers>
> = ({ id, name, earnings, auth, deleteEarningGroupsAction }) => {
  const toast = useToast()
  const onDeleteGroup = async () => {
    try {
      if (
        window.confirm('Are you sure you want to delete this earning group?')
      ) {
        await deleteEarningGroupsAction({
          deleteEarningGroupId: id,
        })
      }
    } catch (error) {
      toast({
        title: 'An error has ocurred',
        description: errorsConvert(error),
        status: 'error',
        isClosable: true,
        duration: 9000,
      })
    }
  }
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
        {(auth?.role === UserRoles.SUPER_ADMIN ||
          auth?.role === UserRoles.ADMIN) && (
          <Badge
            bg="orange"
            p="5px 10px"
            onClick={onDeleteGroup}
            cursor="pointer"
          >
            Delete group
          </Badge>
        )}
      </HStack>
    </Card>
  )
}
const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { deleteEarningGroupsAction })(
  EarningGroupCard
)
