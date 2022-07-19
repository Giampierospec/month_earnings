import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginCard from '../components/LoginCard'

const RouteSetup: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginCard />} />
    </Routes>
  )
}

export default RouteSetup
