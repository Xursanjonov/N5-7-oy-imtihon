import React, { memo } from 'react'
import shopHero from '../../assets/images/shop-hero.png'
import './shop-hero.scss'

const ShopHero = () => {

    return (
        <div className='shop-hero'>
            <figure className='shop-hero__img'>
                <img className='shop-hero__img-image' src={shopHero} alt="Shop hero image" />
            </figure>
            <div className='shop-hero__content'>
                <p className='shop-hero__content-p'>Home {'>'} Shop</p>
                <h1 className='shop-hero__content-h1'>Shop Page</h1>
                <h5 className='shop-hero__content-h5'>Let`s design the place you always imagined.</h5>
            </div>
        </div>
    )
}

export default memo(ShopHero)