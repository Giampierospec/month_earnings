import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../modules/Login'

const RouteSetup: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default RouteSetup
