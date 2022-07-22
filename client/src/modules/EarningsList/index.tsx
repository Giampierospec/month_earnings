import { useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllEarnings } from '../../actions'
import EarningsTable from '../../components/EarningsTable'
import { getEarnings } from '../../graphql/queries/getEarnings'

import { Reducers, Actions } from '../../interfaces/general'

const EarningList: React.FC<Partial<Actions & Reducers>> = ({
  earnings,
  getAllEarnings,
}) => {
  const { earningGroupId } = useParams()
  const toast = useToast()
  const loadEarnings = async () => {
    try {
      await getAllEarnings(parseInt(earningGroupId))
    } catch (error) {
      toast({
        title: 'An error has ocurred',
        description: 'Unable to fetch earnings',
        status: 'error',
        isClosable: true,
        duration: 9000,
      })
    }
  }
  useEffect(() => {
    loadEarnings()
  }, [])
  return <EarningsTable earnings={earnings} />
}

const mapStateToProps = ({ earnings }) => ({ earnings })
export default connect(mapStateToProps, { getAllEarnings })(EarningList)
