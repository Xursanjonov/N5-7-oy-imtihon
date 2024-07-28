import React, { memo, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import empty from '../../assets/images/cart-empty.png'
import { useSelector } from 'react-redux'
import './cart.scss'

const Cart = () => {
    const cartData = useSelector(state => state.cart.value)
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return cartData?.length ? (
        <section className='cart'>
            <div className="cart__container">
                <div className="cart__container-title">
                    <h1 className='cart__container-title__h1'>Cart</h1>
                    <div className='cart__container-title__btns'>
                        <button className='cart__btns active'>
                            <span>1</span> Shopping cart
                        </button>
                        <button className='cart__btns'>
                            <span>2</span> Checkout details
                        </button>
                        <button className='cart__btns'>
                            <span>3</span> Order complete
                        </button>
                    </div>
                </div>
                <Outlet />
            </div>
        </section>
    ) : (
        <section className='cart__empty'>
            <figure className='cart__empty-img'>
                <img className='cart__empty-img-image' src={empty} alt="" />
            </figure>
            <div className="cart__btns">
                <button className='cart__back' onClick={() => navigate(-1)}>Go Back</button>
                <button className='cart__shop' onClick={() => navigate('/shop')}>Go Products</button>
            </div>
        </section>
    )
}

export default memo(Cart)