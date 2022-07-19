import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { Route, RouteProps, useNavigate } from 'react-router-dom'
import { Reducers } from '../../interfaces/general'
import _ from 'lodash'
import { errorsConvert } from '../../utils/helpers'
import { User } from '../../generated/graphql'
import { ActionError } from '../../interfaces/general'
const PrivateRoute: React.FC<RouteProps & Partial<Reducers>> = (props) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (_.isEmpty(props.auth.user)) {
      navigate('/login', { replace: true })
    }
  }, [props.auth.user])
  return <Route {...props} />
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps)(PrivateRoute)
