import React, { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6'
import './footer.scss'

const Footer = () => {
    const navigate = useNavigate()

    return (
        <footer className='footer'>
            <ul className="footer__top">
                <li className='footer__top-item'>
                    <Link to={'/'} className='footer-logo'>3legant <span>.</span></Link>
                    <p className='logo-line'></p>
                    <p className='gift'>Gift & Decoration Store</p>
                </li>
                <li className="footer__lists">
                    <button onClick={()=>navigate('/')} className='footer__lists-item'>Home</button>
                    <button onClick={()=>navigate('/shop')} className='footer__lists-item'>Shop</button>
                    <button onClick={()=>navigate('/products')} className='footer__lists-item'>Product</button>
                    <button onClick={()=>navigate('/blog')} className='footer__lists-item'>Blog</button>
                    <button onClick={()=>navigate('/contact')} className='footer__lists-item'>Contact Us</button>
                </li>
            </ul>
            <p className='footer-line'></p>
            <div className="footer__bottom">
                <div className="footer__bottom-left">
                    <p>Copyright © 2023 3legant. All rights reserved</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                </div>
                <div className="footer__bottom-right">
                    <a href="https://www.instagram.com">
                        <FaInstagram fontSize={22} color='white' />
                    </a>
                    <a href='https://www.facebook.com'>
                        <FaFacebookF fontSize={19} color='white' />
                    </a>
                    <a href="https://www.youtube.com">
                        <FaYoutube fontSize={24} color='white' />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default memo(Footer)