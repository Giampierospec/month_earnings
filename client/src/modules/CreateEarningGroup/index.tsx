import { useToast } from '@chakra-ui/react'
import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createNewGroup } from '../../actions'
import EarningGroupForm from '../../components/EarningGroupForm'
import { CreateEarningGroupInput } from '../../generated/graphql'
import { createEarningGroup } from '../../graphql/mutations/createEarningGroup'
import { Actions } from '../../interfaces/general'
import { errorsConvert } from '../../utils/helpers'

const CreateEarningGroup: React.FC<Partial<Actions>> = ({ createNewGroup }) => {
  const toast = useToast()
  const navigate = useNavigate()

  const handleSubmit = async (values: CreateEarningGroupInput) => {
    try {
      await createNewGroup({
        input: { ...values },
      })
      toast({
        title: 'Group created successfully',
        status: 'success',
        isClosable: true,
        duration: 9000,
      })
      navigate('/', { replace: true })
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
  return <EarningGroupForm submit={handleSubmit} />
}
export default connect(null, { createNewGroup })(CreateEarningGroup)
