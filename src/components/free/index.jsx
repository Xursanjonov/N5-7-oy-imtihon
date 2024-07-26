import React, { memo } from 'react'
import './free.scss'

const Free = ({ icon, h5, p }) => {
    return (
        <div className='free'>
            {icon}
            <h5 className='free__h5'>{h5}</h5>
            <p className='free__p'>{p}</p>
        </div>
    )
}

export default memo(Free)