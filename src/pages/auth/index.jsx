import React, { memo } from 'react'
import { Navigate } from 'react-router-dom'

const Auth = () => {
    const token = localStorage.getItem('new-auth-token')

    return token ? <Navigate replace to="/admin/create" /> : <Navigate replace to="/login" />
}

export default memo(Auth)