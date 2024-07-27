import React, { memo, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/sidebar'
import './admin.scss'

const Admin = () => {
    const navigate = useNavigate()
    if (!localStorage.getItem('new-auth-token')) {
        navigate('/login')
    }
    useEffect(() => { window.scroll(0, 0) }, [])

    return (
        <section className='admin'>
            <Sidebar />
            <div className="admin__content">
                <Outlet />
            </div>
        </section>
    )
}

export default memo(Admin)