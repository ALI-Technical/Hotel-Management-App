import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const VendorDashboard = () => {

  const userExist = JSON.parse(localStorage.getItem('currentUser'))
  const navigate = useNavigate()

  const [refresh, setRefresh] = useState(userExist)

  useEffect(() => {
    if (userExist) {
      if (userExist.role === "admin") {
        navigate('/dashboard')
      }
      else if (userExist.role === "vendor") {
        navigate("/vendorDashboard")
      }
      else {
        navigate('/home')
      }
    }
    else {
      navigate('/home')
    }
  }, [refresh])

  
  return (
    <>
      <h1 className="text-center">Vendor Dashboard</h1>
    </>
  )
}

export default VendorDashboard
