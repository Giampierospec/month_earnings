import { useToast } from '@chakra-ui/react'
import { replace } from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createEarnings } from '../../actions'
import CreateEarningForm from '../../components/CreateEarningForm'
import { CreateEarningInput } from '../../generated/graphql'
import { createEarning } from '../../graphql/mutations/createEarning'
import { Actions } from '../../interfaces/general'
import { errorsConvert } from '../../utils/helpers'

const CreateNewEarning: React.FC<Partial<Actions>> = ({ createEarnings }) => {
  const toast = useToast()
  const navigate = useNavigate()
  const handleSubmit = async (values: CreateEarningInput) => {
    try {
      const earning = await createEarning({
        input: { ...values },
      })
      createEarnings(earning)
      toast({
        title: 'Earning Created Successfully',
        description: `Earning #${earning.id}`,
        status: 'success',
        isClosable: true,
        duration: 2000,
      })
      navigate(`/details/${earning.earning_group_id}`, { replace: true })
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
  return <CreateEarningForm submit={handleSubmit} />
}

export default connect(null, { createEarnings })(CreateNewEarning)
