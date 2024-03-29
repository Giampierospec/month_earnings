import { ArrowBackIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { deleteEarningAction } from '../../actions'
import { Earnings } from '../../generated/graphql'
import { Actions, Reducers } from '../../interfaces/general'
import { errorsConvert, UserRoles } from '../../utils/helpers'
import PrimaryButton from '../PrimaryButton'

interface EarningTableProps {
  earnings: Earnings[]
}
const EarningsTable: React.FC<
  Partial<EarningTableProps & Actions & Reducers>
> = ({ earnings, auth, deleteEarningAction }) => {
  const { earningGroupId } = useParams()
  const toast = useToast()
  const onDeleteEarning = async (id: number) => {
    try {
      await deleteEarningAction({
        deleteEarningId: id,
      })
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
    <Flex
      direction="column"
      w="100%"
      px={{ base: '25px', lg: '50px', xl: '250px' }}
      justifyContent="space-evenly"
    >
      <Link to="/">
        <PrimaryButton leftIcon={<ArrowBackIcon />} mb="15px">
          Go Back
        </PrimaryButton>
      </Link>
      {earnings?.length > 0 ? (
        <Box boxShadow="lg" w="100%" p="20px">
          <Heading
            textTransform="uppercase"
            fontSize={{ base: '20px', lg: '24px' }}
            py="15px"
          >
            {`Earnings for Group:  ${
              earnings?.find(
                (x) => x.earning_group_id === parseInt(earningGroupId)
              )?.earningGroup?.name
            }`}
          </Heading>
          <Flex direction="column" display={{ base: 'none', md: 'flex' }}>
            <Table variant="simple" size={{ base: 'sm', lg: 'md' }} w="100%">
              <Thead textTransform="uppercase">
                <Tr>
                  <Th>Currency</Th>
                  <Th>Month</Th>
                  <Th>Year</Th>
                  <Th>Month Earnings</Th>
                  <Th>Spent in Month</Th>
                  <Th>Rest in Month</Th>
                  <Th>Concepts</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {earnings?.map((earning, i) => (
                  <Tr key={i}>
                    <Td>
                      <Badge bg="blackAlpha.300" h="20px" color="#FFF">
                        {earning.currency}
                      </Badge>
                    </Td>
                    <Td>{earning.month}</Td>
                    <Td>{earning.year}</Td>
                    <Td>{earning.month_earnings?.toLocaleString()}</Td>
                    <Td>{earning.spent_in_month?.toLocaleString()}</Td>
                    <Td>
                      {(
                        earning.month_earnings - earning.spent_in_month
                      )?.toLocaleString()}
                    </Td>

                    <Td>
                      <VStack spacing={4} align="flex-start">
                        {earning?.concepts?.map((concept, i) => (
                          <HStack key={i} spacing={4}>
                            <Badge
                              bg="blueviolet"
                              color="#FFF"
                              w="150px"
                              textAlign="center"
                            >
                              {concept.concept}
                            </Badge>
                            <Text>{concept.amount?.toLocaleString()}</Text>
                          </HStack>
                        ))}
                      </VStack>
                    </Td>
                    <Td>
                      {(auth?.role === UserRoles.SUPER_ADMIN ||
                        auth?.role === UserRoles.ADMIN) && (
                        <PrimaryButton
                          bg="red"
                          onClick={() => onDeleteEarning(earning?.id)}
                        >
                          delete
                        </PrimaryButton>
                      )}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Flex>
          <Flex direction="column" display={{ base: 'flex', md: 'none' }}>
            <VStack
              spacing={4}
              align="flex-start"
              divider={<Divider />}
              justifyContent="flex-start"
            >
              {earnings?.map((earning, i) => (
                <Box key={i} w="100%">
                  <HStack spacing={4}>
                    <Text fontWeight="bold" minW="120px">
                      Currency:
                    </Text>
                    <Text>
                      <Badge bg="blackAlpha.300" h="20px" color="#FFF">
                        {earning.currency}
                      </Badge>
                    </Text>
                  </HStack>
                  <HStack spacing={4} flexGrow={1}>
                    <Text fontWeight="bold" minW="120px">
                      Month:
                    </Text>
                    <Text>{earning.month}</Text>
                  </HStack>
                  <HStack spacing={4} flexGrow={1}>
                    <Text fontWeight="bold" minW="120px">
                      Year:
                    </Text>
                    <Text>{earning.year}</Text>
                  </HStack>
                  <HStack spacing={4} flexGrow={1}>
                    <Text fontWeight="bold" minW="120px">
                      Month Earnings:
                    </Text>
                    <Text>{earning.month_earnings?.toLocaleString()}</Text>
                  </HStack>
                  <HStack spacing={4} flexGrow={1}>
                    <Text fontWeight="bold" minW="120px">
                      Spent in Month:
                    </Text>
                    <Text>{earning.spent_in_month?.toLocaleString()}</Text>
                  </HStack>
                  <HStack spacing={4} flexGrow={1}>
                    <Text fontWeight="bold" minW="120px">
                      Rest in Month:
                    </Text>
                    <Text>
                      {(
                        earning?.month_earnings - earning?.spent_in_month
                      )?.toLocaleString()}
                    </Text>
                  </HStack>
                  <VStack align="flex-start" spacing={4} py="20px">
                    <Text fontWeight="bold">Concepts</Text>

                    {earning?.concepts?.map((concept, i) => (
                      <HStack key={i} spacing={4}>
                        <Badge
                          bg="blueviolet"
                          color="#FFF"
                          w="150px"
                          textAlign="center"
                        >
                          {concept.concept}
                        </Badge>
                        <Text>{concept.amount?.toLocaleString()}</Text>
                      </HStack>
                    ))}
                  </VStack>
                  {(auth?.role === UserRoles.SUPER_ADMIN ||
                    auth?.role === UserRoles.ADMIN) && (
                    <PrimaryButton
                      bg="red"
                      onClick={() => onDeleteEarning(earning?.id)}
                    >
                      delete
                    </PrimaryButton>
                  )}
                </Box>
              ))}
            </VStack>
          </Flex>
        </Box>
      ) : (
        <Text>Nothing to show at the moment</Text>
      )}
    </Flex>
  )
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { deleteEarningAction })(EarningsTable)
