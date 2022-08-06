import { useToast } from '@chakra-ui/react'
import _ from 'lodash'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { loginUser } from '../../actions'
import LoginCard from '../../components/LoginCard'
import { LoginInput } from '../../generated/graphql'
import { Actions, Reducers } from '../../interfaces/general'
import { errorsConvert } from '../../utils/helpers'

const Login: React.FC<Partial<Reducers & Actions>> = ({ auth, loginUser }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as any)?.from?.pathname || '/'
  const toast = useToast()
  useEffect(() => {
    if (!_.isEmpty(auth)) {
      navigate(from, { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth])
  const handleSubmit = async (values: LoginInput) => {
    try {
      await loginUser({
        input: {
          ...values,
        },
      })

      toast({
        title: 'Login successful',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Login Error',
        status: 'error',
        description: errorsConvert(error),
        duration: 9000,
        isClosable: true,
      })
    }
  }
  return <LoginCard submit={handleSubmit} />
}
const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { loginUser })(Login)
