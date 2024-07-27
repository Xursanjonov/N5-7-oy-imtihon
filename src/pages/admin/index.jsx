import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar'
import './admin.scss'

const Admin = () => {

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