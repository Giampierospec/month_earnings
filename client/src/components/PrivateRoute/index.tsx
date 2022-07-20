import { connect } from 'react-redux'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Actions, Reducers } from '../../interfaces/general'
import _ from 'lodash'
import { getUser } from '../../actions'
const PrivateRoute: React.FC<Partial<Reducers & Actions>> = (props) => {
  const navigate = useNavigate()
  if (_.isEmpty(props.auth.user)) navigate(-1)
  return <Outlet />
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { getUser })(PrivateRoute)
