import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const linkStyle = {
    textDecoration: 'none',
    fontSize: 17
  }

  const logoutHandler = () => {
    localStorage.removeItem('currentUser');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <span style={{
            fontSize: '2em',
            fontWeight: '700',
            fontFamily: 'serif'
          }} className="navbar-brand">MA-Hotels</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link style={linkStyle} to={'/home'} ><span className="nav-link active">Home</span></Link>
              </li>
              <li className="nav-item">
                <Link style={linkStyle} to={'/hotels'} ><span className="nav-link active">Hotels</span></Link>
              </li>
            </ul>
            <div className="d-flex">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className='fas fa-user'></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  {/* {
                    !userRole ? (
                      <>
                        <Link style={linkStyle} to={'/login'}><li><span style={{ cursor: 'pointer' }} className="dropdown-item">Login</span></li></Link>
                        <Link style={linkStyle} to={'/signup'}><li><span style={{ cursor: 'pointer' }} className="dropdown-item">Signup</span></li></Link>
                      </>
                    )
                      : userRole === "admin" ? (
                        <>
                          <li><Link style={linkStyle} to={"dashboard"}><span style={{ cursor: 'pointer' }} className="dropdown-item">Dashboard</span></Link></li>
                          <li onClick={logoutHandler}><span style={{ cursor: 'pointer' }} className="dropdown-item">Logout</span></li>
                        </>)
                        : userRole === "vendor" ? (
                          <>
                            <li><Link style={linkStyle} to={"vendorDashboard"}><span style={{ cursor: 'pointer' }} className="dropdown-item">Dashboard</span></Link></li>
                            <li><span style={{ cursor: 'pointer' }} className="dropdown-item">Add Your Hotel</span></li>
                            <li onClick={logoutHandler}><span style={{ cursor: 'pointer' }} className="dropdown-item">Logout</span></li>
                          </>
                        ) : (
                          <>
                            <li><span style={{ cursor: 'pointer' }} className="dropdown-item">Cart</span></li>
                            <li onClick={logoutHandler}><span style={{ cursor: 'pointer' }} className="dropdown-item">Logout</span></li>
                          </>
                        )
                  } */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
