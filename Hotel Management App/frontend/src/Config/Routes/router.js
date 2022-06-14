import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../../Screens/home/Home';
import {Login, Signup , Dashboard, Hotels, VendorDashboard, PageNotFound} from "../../Screens/index"

const Router = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/vendorDashboard' element={<VendorDashboard />} />
        <Route path='/home' element={<Home />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>

  )
}

export default Router