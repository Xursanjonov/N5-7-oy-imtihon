import React, { memo } from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import './button.scss'
import BackIcon from '../../assets/icons/BackIcon'

const Button = ({ title, color, icon, icon2, onClick }) => {

    return (
        <button className={`button__style ${color ? color : ''}`} onClick={onClick ?? ''}>
            <span>{title}</span>
            {icon ? <GrFormNextLink fontSize={24} /> : <></>}
            {icon2 ? <BackIcon fontSize={24} /> : <></>}
        </button>
    )
}

export default memo(Button)