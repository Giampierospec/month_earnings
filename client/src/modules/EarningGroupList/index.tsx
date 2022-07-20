import { Flex, useToast, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EarningGroupCard from '../../components/EarningGroupCard'
import PrimaryButton from '../../components/PrimaryButton'
import { EarningsGroupType } from '../../generated/graphql'
import { getEarningsGroup } from '../../graphql/queries/getEarningsGroups'
import { errorsConvert } from '../../utils/helpers'

const EarningGroupList: React.FC = () => {
  const toast = useToast()
  const [earningGroups, setEarningGroups] = useState<EarningsGroupType[]>([])
  const getEarningGroup = async () => {
    try {
      const groups = await getEarningsGroup()
      setEarningGroups(groups)
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
    console.log('getting here', earningGroups)
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

export default EarningGroupList
