import { useToast } from '@chakra-ui/react'
import { replace } from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createNewUser } from '../../actions'
import CreateUserForm from '../../components/CreateUserForm'
import { CreateUserInput } from '../../generated/graphql'
import { Actions } from '../../interfaces/general'
import { errorsConvert } from '../../utils/helpers'

const CreateNewUser: React.FC<Partial<Actions>> = ({ createNewUser }) => {
  const toast = useToast()
  const navigate = useNavigate()
  const handleSubmit = async (values: CreateUserInput) => {
    try {
      await createNewUser({
        input: { ...values },
      })
      toast({
        title: 'User Created successfully',
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
  return <CreateUserForm submit={handleSubmit} />
}

export default connect(null, { createNewUser })(CreateNewUser)
