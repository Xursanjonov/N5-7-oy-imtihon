import React, { Fragment } from 'react'
import { memo } from 'react'
import './modal.scss'

const Modal = ({ title, children, close }) => {
    return (
        <Fragment>
            <div onClick={() => close(null)} className='overlay'></div>
            <div className='modal'>
                <h1 className='title'>{title ?? 'Modal'}</h1>
                {children}
            </div>
        </Fragment>
    )
}

export default memo(Modal)