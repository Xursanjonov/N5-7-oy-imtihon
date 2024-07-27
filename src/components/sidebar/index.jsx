import React, { memo } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import CreateIcon from '../../assets/icons/Create'
import ManageIcon from '../../assets/icons/ManageIcon'
import './sidebar.scss'

const Sidebar = () => {
    const navigate = useNavigate()

    return (
        <div className='sidebar'>
            <div className='sidebar__title'>
                <button onClick={() => navigate('/')} className='sidebar__title-icon'>
                    <BiArrowBack fontSize={26} />
                </button>
                <h2 className='sidebar__title-h2'> Admin Dashboard</h2>
            </div>
            <div className='sidebar__btns'>
                <NavLink to={'/admin/create'} className='sidebar__btns-item'>
                    <CreateIcon />
                    <span>Create Product</span>
                </NavLink>
                <NavLink to={'/admin/manage'} className='sidebar__btns-item'>
                    <ManageIcon />
                    <span>Manage Product</span>
                </NavLink>
                <NavLink to={'/admin/create-category'} className='sidebar__btns-item'>
                    <CreateIcon />
                    <span>Create Category</span>
                </NavLink>
                <NavLink to={'/admin/manage-category'} className='sidebar__btns-item'>
                    <ManageIcon />
                    <span>Manage Category</span>
                </NavLink>
            </div>
        </div>
    )
}

export default memo(Sidebar)