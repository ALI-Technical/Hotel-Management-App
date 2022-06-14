import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import loginAction from '../../Store/actions/AuthActions/loginAction'
import { Button, Form, Spinner } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const { users, authLoading, setError, currentUser } = useSelector((state) => state.authReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginHandler = (e) => {
    e.preventDefault();

    if (email && password) {

      const userObj = {
        email,
        password,
      }

      dispatch(loginAction(userObj))
    }
  }

  return (
    <div className='container my-5'>
      <h1>Login</h1>

      <Form onSubmit={loginHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }} />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">

        </Form.Group>
        {
          authLoading ?
            <Spinner animation="border" variant="success" />
            :
            <Button variant="primary" type="submit">
              Login
            </Button>
        }
      </Form>
    </div>
  )
}


export default Login
