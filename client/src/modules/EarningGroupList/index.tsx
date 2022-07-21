import { Flex, useToast, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllEarningGroups } from '../../actions'
import EarningGroupCard from '../../components/EarningGroupCard'
import PrimaryButton from '../../components/PrimaryButton'
import { getEarningsGroup } from '../../graphql/queries/getEarningsGroups'
import { Actions, Reducers } from '../../interfaces/general'
import { errorsConvert } from '../../utils/helpers'

const EarningGroupList: React.FC<Partial<Actions & Reducers>> = ({
  earningGroups,
  getAllEarningGroups,
}) => {
  const toast = useToast()
  const getEarningGroup = async () => {
    try {
      const groups = await getEarningsGroup()
      getAllEarningGroups(groups || [])
    } catch (error) {
      toast({
        title: 'An error has occurred',
        description: errorsConvert(error),
        duration: 9000,
        isClosable: true,
        status: 'error',
      })
    }
  }
  useEffect(() => {
    getEarningGroup()
  }, [])
  return (
    <Flex
      direction="column"
      w="100%"
      alignItems="center"
      h="100%"
      justifyContent="center"
    >
      <VStack w="100%" spacing={4}>
        <Link to="/create-group">
          <PrimaryButton>Create new Group</PrimaryButton>
        </Link>
        {earningGroups?.map((earningGroup, i) => (
          <EarningGroupCard key={i} {...earningGroup} />
        ))}
      </VStack>
    </Flex>
  )
}
const mapStateToprops = ({ earningGroups }) => ({ earningGroups })

export default connect(mapStateToprops, { getAllEarningGroups })(
  EarningGroupList
)
