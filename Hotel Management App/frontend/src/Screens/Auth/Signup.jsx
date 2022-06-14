import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import signupAction from '../../Store/actions/AuthActions/signupActions'
import { Button, Spinner } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")
    const [selectBoxValue, setSelectBoxValue] = useState("")


    const { users, setLoading, setError } = useSelector((state) => state.authReducer)

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const userExist = JSON.parse(localStorage.getItem('currentUser'))


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
    }, [userExist])


    const signUpHandler = (e) => {
        e.preventDefault();

        if (username && email && password && contact && selectBoxValue) {
            const userObj = {
                username,
                email,
                password,
                contact,
                role: selectBoxValue,
            }
            navigate("/login")
            dispatch(signupAction(userObj))
            // navigate("/login")
        } else {
            toast.error("Require Fields are Empty")
        }

    }

    return (
        <div>

            <form className='container-fluid' onSubmit={signUpHandler}>
                <h1 className='text-center text-uppercase text-primary'>Signup</h1>
                <input className='form-control' type="text"
                    placeholder='User Name'
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }} />

                <br />
                <br />

                <input className='form-control' type="email"
                    placeholder='User Email'
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />

                <br />
                <br />

                <input className='form-control' type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }} />

                <br />
                <br />

                <input className='form-control' type="text"
                    placeholder='Contach No'
                    value={contact}
                    onChange={(e) => { setContact(e.target.value) }} />

                <br />
                <br />

                <div className="dropdownBox">
                    <select
                        value={selectBoxValue}
                        onChange={(e) => setSelectBoxValue(e.target.value)}
                        name="role">
                        <option value="">Select Role</option>
                        <option value="user">User</option>
                        <option value="vendor">Vendor</option>
                    </select>
                </div>

                <br />
                <br />
                {
                    setLoading ? (
                        <Spinner animation="border" variant="success" />
                    ) :

                        <Button type='submit' variant='primary'>
                            Sign Up
                        </Button>
                }
            </form>
        </div>
    )
}

export default Signup
