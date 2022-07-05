import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {

    const { user, loading } = useAuth()


    if(loading){
        return <div>Loading...</div>
    }

    if (!user) {
        return <Navigate to='/'></Navigate>
    }

    return <>{children}</>
}

export default PrivateRoute