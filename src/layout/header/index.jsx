import React, { Fragment, memo } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import SearchIcon from '../../assets/icons/SearchIcon'
import UserIcon from '../../assets/icons/UserIcon'
import ShopIcon from '../../assets/icons/ShopIcon'
import WishListIcon from '../../assets/icons/WishListIcon'
import CloseIcon from '../../assets/icons/CloseIcon'
import HeaderTopIcon from '../../assets/icons/HeaderTopIcon'
import Button from '../../components/button'
import './header.scss'

const Header = () => {
    const navigate = useNavigate()
    const [show, setShow] = React.useState(true)

    return (
        <Fragment>
            <div className={`${show ? 'header__top' : 'none'}`}>
                <span className='header__top-icon'><HeaderTopIcon /></span>
                <p>30% off storewide — Limited time!</p>
                <Button title={'Shop Now'} icon={true} color={'color'} />
                <button onClick={() => setShow(!show)} className='header__top-close'> <CloseIcon fsize={20} /> </button>
            </div>
            <header className='header'>
                <nav className='header__nav'>
                    <ul className="header__nav__ul">
                        <Link to={'/'} className='logo'>3legant<span>.</span> </Link>
                        <div className='header__nav__ul__lists'>
                            <NavLink to={`/`} className='lists-item'>Home</NavLink>
                            <NavLink to={`/shop`} className='lists-item'>Shop</NavLink>
                            <NavLink to={`/blog`} className='lists-item'>Blog</NavLink>
                            <NavLink to={`/contact`} className='lists-item'>Contact Us</NavLink>
                        </div>
                        <div className='header__nav__div__btns'>
                            <button className='btns-item'> <SearchIcon fsize={20} /> </button>
                            <button onClick={() => navigate('/login')} className='btns-item'> <UserIcon fsize={20} /> </button>
                            <button onClick={() => navigate('/like')} className='btns-item'> <WishListIcon fsize={20} /> </button>
                            <button onClick={() => navigate('/cart')} className='btns-item'> <ShopIcon fsize={20} /> </button>
                        </div>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
}

export default memo(Header)