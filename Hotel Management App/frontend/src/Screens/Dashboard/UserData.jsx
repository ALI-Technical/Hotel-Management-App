import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BASE_URI from '../../Config/baseURI'

const UserData = ({ username, email, contact, role, rowNo, checkStatus, userId, refresh, setRefresh }) => {


    // Approve User
    const approveUser = async () => {
        // console.log(userId)
        if (userId) {
            const updatedObj = {
                id: userId,
                status: "approved"
            }

            try {
                const res = await axios.put(`${BASE_URI}user`, updatedObj, { withCredentials: true })
                // console.log(res);
                setRefresh(!refresh)
            } catch (error) {
                console.log(error);
            }
        }
    }
    // Block User
    const blockUser = async () => {
        console.log(userId)
        if (userId) {
            const updatedObj = {
                id: userId,
                status: "blocked"
            }

            try {
                const res = await axios.put(`${BASE_URI}user`, updatedObj, { withCredentials: true })
                setRefresh(!refresh)
                // console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
    }
    // Unblock User
    const unblockUser = async () => {
        console.log(userId)
        if (userId) {
            const updatedObj = {
                id: userId,
                status: "approved"
            }

            try {
                const res = await axios.put(`${BASE_URI}user`, updatedObj, { withCredentials: true })
                setRefresh(!refresh)
                // console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
    }


    return (

        <tbody>
            <tr className='border border-3'>
                <th className='border border-3' scope="row">{rowNo}</th>
                <td className='border border-3'>{username}</td>
                <td className='border border-3'>{email}</td>
                <td className='border border-3'>{contact}</td>
                <td className='border border-3 text-capitalize'>{role}</td>
                <td className='border border-3 text-capitalize'>{checkStatus}</td>
                <td className='border border-3'>{
                    checkStatus === "pending" ? (
                        <Button
                            onClick={approveUser}
                            variant='contained' color='primary'>
                            <i className='fas fa-user-check'></i></Button>
                    ) : checkStatus === "blocked" ? (
                        <Button
                            onClick={unblockUser}
                            variant='contained' color='success'>
                            <i className='fas fa-unlock'></i></Button>
                    ) : (
                        <Button
                            onClick={blockUser}
                            variant='contained' color='error'>
                            <i className='fas fa-ban'></i></Button>
                    )
                }</td>
            </tr>
        </tbody>

    )
}

export default UserData
