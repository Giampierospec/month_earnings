import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import CreateEarningGroup from '../modules/CreateEarningGroup'
import CreateNewEarning from '../modules/CreateNewEarning'
import CreateNewUser from '../modules/CreateNewUser'
import EarningGroupList from '../modules/EarningGroupList'
import EarningsList from '../modules/EarningsList'
import LoginModule from '../modules/LoginModule'

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
      <Route path="/login" element={<LoginModule />} />
      <Route path="/new-user" element={<CreateNewUser />} />
    </Routes>
  )
}

export default RouteSetup
