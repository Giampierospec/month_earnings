import { Flex, Text, useToast, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllEarningGroups, getMoreEarningGroups } from '../../actions'
import EarningGroupCard from '../../components/EarningGroupCard'
import Loader from '../../components/Loader'
import PrimaryButton from '../../components/PrimaryButton'
import { EarningsGroup } from '../../generated/graphql'
import { Actions, Reducers } from '../../interfaces/general'
import { errorsConvert } from '../../utils/helpers'

const MAX_PER_PAGE = 10
const EarningGroupList: React.FC<Partial<Actions & Reducers>> = ({
  earningGroups,
  getAllEarningGroups,
  getMoreEarningGroups,
}) => {
  const toast = useToast()
  const [loadingMore, setLoadingMore] = useState(false)
  const getEarningGroup = async () => {
    try {
      await getAllEarningGroups({
        first: MAX_PER_PAGE,
      })
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
  const handleScroll = async () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight
    if (bottom) {
      if (earningGroups.hasMore) {
        setLoadingMore(true)
        await getMoreEarningGroups({
          first: MAX_PER_PAGE,
          page: earningGroups.currentPage + 1,
        })
        setLoadingMore(false)
      }
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [earningGroups])

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
        {earningGroups.items?.length > 0 ? (
          earningGroups?.items?.map((earningGroup, i) => (
            <EarningGroupCard key={i} {...(earningGroup as EarningsGroup)} />
          ))
        ) : (
          <Text>Nothing to show at the moment</Text>
        )}
        {loadingMore && <Loader />}
      </VStack>
    </Flex>
  )
}
const mapStateToprops = ({ earningGroups }) => ({ earningGroups })

export default connect(mapStateToprops, {
  getAllEarningGroups,
  getMoreEarningGroups,
})(EarningGroupList)
