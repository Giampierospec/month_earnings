import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Actions, Reducers } from '../../interfaces/general'
import _ from 'lodash'
import { getUser } from '../../actions'
const PrivateRoute: React.FC<Partial<Reducers & Actions>> = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if (_.isEmpty(props.auth))
      navigate(`/login?returnUrl=${location.pathname}`, { replace: true })
  }, [props.auth])

  return <Outlet />
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { getUser })(PrivateRoute)
