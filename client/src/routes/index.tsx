import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import CreateEarningGroup from '../modules/CreateEarningGroup'
import CreateNewEarning from '../modules/CreateNewEarning'
import EarningGroupList from '../modules/EarningGroupList'
import EarningsList from '../modules/EarningsList'
import Login from '../modules/Login'

const RouteSetup: React.FC = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<EarningGroupList />} />
        <Route path="/create-group" element={<CreateEarningGroup />} />
        <Route path="/details/:earningGroupId" element={<EarningsList />} />
        <Route
          path="/create-earning/:earningGroupId"
          element={<CreateNewEarning />}
        />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default RouteSetup
