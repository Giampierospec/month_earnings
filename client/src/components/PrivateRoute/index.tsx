import { connect } from 'react-redux'
import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { Reducers } from '../../interfaces/general'
import _ from 'lodash'
const PrivateRoute: React.FC<Partial<Reducers>> = (props) => {
  const navigate = useNavigate()
  return _.isEmpty(props.auth.user) ? (
    <Navigate to="login" replace />
  ) : (
    <Outlet />
  )
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps)(PrivateRoute)
