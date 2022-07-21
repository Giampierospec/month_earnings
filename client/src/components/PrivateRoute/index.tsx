import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Actions, Reducers } from '../../interfaces/general'
import _ from 'lodash'
import { getUser } from '../../actions'
const PrivateRoute: React.FC<Partial<Reducers & Actions>> = (props) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (_.isEmpty(props.auth)) navigate('/login', { replace: true })
  }, [props.auth])

  return <Outlet />
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { getUser })(PrivateRoute)
