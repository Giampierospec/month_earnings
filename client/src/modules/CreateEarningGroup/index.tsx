import { useToast } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import EarningGroupForm from '../../components/EarningGroupForm'
import { CreateEarningGroupInput } from '../../generated/graphql'
import { createEarningGroup } from '../../graphql/mutations/createEarningGroup'
import { errorsConvert } from '../../utils/helpers'

const CreateEarningGroup: React.FC = () => {
  const toast = useToast()
  const navigate = useNavigate()

  const handleSubmit = async (values: CreateEarningGroupInput) => {
    try {
      const group = await createEarningGroup({
        input: { ...values },
      })

      toast({
        title: 'Group created successfully',
        description: `Group: ${group.name}`,
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
export default CreateEarningGroup
