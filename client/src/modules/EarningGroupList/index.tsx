import { Flex, useToast, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getEarningGroupsByUser } from '../../actions'
import EarningGroupCard from '../../components/EarningGroupCard'
import PrimaryButton from '../../components/PrimaryButton'
import { Actions, Reducers } from '../../interfaces/general'
import { errorsConvert } from '../../utils/helpers'

const EarningGroupList: React.FC<Partial<Reducers & Actions>> = ({
  group,
  getEarningGroupsByUser,
}) => {
  const toast = useToast()
  const getEarningGroup = async () => {
    try {
      await getEarningGroupsByUser()
      if (group.error) {
        toast({
          title: 'An error has occurred',
          description: errorsConvert(group.error),
          duration: 9000,
          isClosable: true,
          status: 'error',
        })
      }
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
        {group?.earningGroups?.map((earningGroup, i) => (
          <EarningGroupCard key={i} {...earningGroup} />
        ))}
      </VStack>
    </Flex>
  )
}
const mapStateToProps = ({ group }) => ({ group })
export default connect(mapStateToProps, { getEarningGroupsByUser })(
  EarningGroupList
)
