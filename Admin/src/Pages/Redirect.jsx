import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
                navigate('/AdminDashboard')
        } else {
            navigate('/Login')
        }

    }, [])

    return (
        <>
        </>
    )
}

export default Redirect