import React, { memo } from 'react'
import blogHero from '../../assets/images/blog-hero.png'
import './blog-hero.scss'

const Bloghero = () => {
    return (
        <div className='blog__hero'>
            <figure className='blog__hero__img'>
                <img className='blog__hero__img-image' src={blogHero} alt="Blog hero image" />
            </figure>
            <div className='blog__hero__content'>
                <p className='shop__hero__content-p'>Home {'>'} Blog</p>
                <h1 className='shop__hero__content-h1'>Our Blog</h1>
                <h5 className='shop__hero__content-h5'>Home ideas and design inspiration</h5>
            </div>
        </div>
    )
}

export default memo(Bloghero)