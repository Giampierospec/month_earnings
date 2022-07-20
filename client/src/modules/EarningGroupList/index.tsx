import { Box, Flex, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import EarningGroupCard from '../../components/EarningGroupCard'
import PrimaryButton from '../../components/PrimaryButton'
import { EarningsGroupType } from '../../generated/graphql'
import { getEarningsGroup } from '../../graphql/queries/getEarningsGroups'

const EarningGroupList: React.FC = () => {
  const [earningGroups, setEarningGroups] = useState<EarningsGroupType[]>([])

  const getEarningGroup = async () => {
    const data = await getEarningsGroup()
    setEarningGroups(data)
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
        <PrimaryButton>Create new Group</PrimaryButton>
        {earningGroups?.map((earningGroup, i) => (
          <EarningGroupCard key={i} {...earningGroup} />
        ))}
      </VStack>
    </Flex>
  )
}

export default EarningGroupList
