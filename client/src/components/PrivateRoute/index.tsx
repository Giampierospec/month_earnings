import { connect } from 'react-redux'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Reducers } from '../../interfaces/general'
import _ from 'lodash'
const PrivateRoute: React.FC<Partial<Reducers>> = (props) => {
  return _.isEmpty(props.auth.user) ? (
    <Navigate to="login" replace />
  ) : (
    <Outlet />
  )
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps)(PrivateRoute)
