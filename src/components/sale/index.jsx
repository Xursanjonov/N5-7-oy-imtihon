import React, { memo } from 'react'
import saleImage from '../../assets/images/sale.png'
import './sale.scss'
import { GrFormNextLink } from 'react-icons/gr'

const Sale = () => {

    return (
        <div className='sale'>
            <figure className='sale__img'>
                <img className='sale__img-image' src={saleImage} alt="Sale up image" />
            </figure>
            <div className="sale__info">
                <h4 className='sale__info-h4'>SALE UP TO 35% OFF</h4>
                <h1 className='sale__info-h1'>HUNDREDS of <br /> New lower prices!</h1>
                <p className='sale__info-p'>
                    It`s more affordable than ever to give every room in your home a stylish makeover
                </p>
                <button className='sale__info-btn'>Shop Now
                    <GrFormNextLink color='black' />
                </button>
            </div>
        </div>
    )
}

export default memo(Sale)