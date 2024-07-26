import React from 'react'
import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import './layout.scss'

const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <main className='main'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default memo(Layout)