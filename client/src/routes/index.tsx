import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import EarningGroupList from '../modules/EarningGroupList'
import Login from '../modules/Login'

const RouteSetup: React.FC = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<EarningGroupList />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default RouteSetup
