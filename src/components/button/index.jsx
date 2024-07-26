import React, { memo } from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import './button.scss'

const Button = ({ title, color, icon, onClick }) => {

    return (
        <button className={`button__style ${color ? color : ''}`} onClick={onClick ?? ''}>
            <span>{title}</span>
            {icon ? <GrFormNextLink fontSize={24} /> : <></>}
        </button>
    )
}

export default memo(Button)