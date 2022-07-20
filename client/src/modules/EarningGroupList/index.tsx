import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import EarningGroupCard from '../../components/EarningGroupCard'
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
    <Box>
      {earningGroups?.map((earningGroup, i) => (
        <EarningGroupCard key={i} {...earningGroup} />
      ))}
    </Box>
  )
}

export default EarningGroupList
