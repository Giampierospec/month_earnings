import { useToast } from '@chakra-ui/react'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../actions'
import LoginCard, { FormProps } from '../../components/LoginCard'
import { Actions, Reducers } from '../../interfaces/general'
import { errorsConvert } from '../../utils/helpers'

const Login: React.FC<Partial<Reducers & Actions>> = ({ auth, loginUser }) => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const toast = useToast()
  useEffect(() => {
    console.log('user', auth.user)
    if (!_.isEmpty(auth.user)) {
      navigate('/', { replace: true })
    }
  }, [auth.user])
  const handleSubmit = async (values: FormProps) => {
    setError('')
    try {
      await loginUser({
        input: {
          ...values,
        },
      })
      if (auth.error) {
        setError(errorsConvert(auth.error))
      }
      toast({
        title: 'Login successful',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      setError(errorsConvert(error))
    }
  }
  return <LoginCard submit={handleSubmit} error={error} />
}
const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { loginUser })(Login)
