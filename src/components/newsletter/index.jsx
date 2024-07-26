import React, { memo } from 'react'
import bgimage from '../../assets/images/newsletter-bg.png'
import './newsletter.scss'
import { HiOutlineMail } from 'react-icons/hi'

const NewsLetter = () => {

    return (
        <div className='newsleter'>
            <img className='newsleter__img' src={bgimage} alt="" />
            <div className="newsleter__div">
                <h1>Join Our Newsletter</h1>
                <h5>Sign up for deals, new products and promotions</h5>
                <label htmlFor="email-address" className='label'>
                    <HiOutlineMail fontSize={28} />
                    <input type="email" placeholder="Email address" />
                    <button className='label__btn'>Signup</button>
                </label>
            </div>
        </div>
    )
}

export default memo(NewsLetter)