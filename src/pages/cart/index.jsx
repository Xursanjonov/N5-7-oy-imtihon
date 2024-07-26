import React, { memo, useEffect } from 'react'
import empty from '../../assets/images/cart-empty.png'
import './cart.scss'

const Cart = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
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
                <div className='cart__content'>
                    <div className="cart__content-carts">
                        <ul className='cart__content-carts__ul'>
                            <li>Product</li>
                            <ul className='cart__content-carts__ul-div'>
                                <li>Quantity</li>
                                <li>Price</li>
                                <li>Subtotal</li>
                            </ul>
                        </ul>
                        <div className='cart__content-carts__item'>
                            <figure className='cart-figure'>
                                <img className='cart-figure-img' src={empty} alt="" />
                                <ul>
                                    <li>Tray Table</li>
                                    <li>Color:Black</li>
                                    <button>X Remove</button>
                                </ul>
                            </figure>
                            <ul className="carts-counter">
                                <li className='counter'>
                                    <span>-</span>
                                    <span>1</span>
                                    <span>+</span>
                                </li>
                                <li>$19.00</li>
                                <li>$38.00</li>
                            </ul>
                        </div>
                    </div>
                    <div className='cart__content-summary'>
                        <h4 className='summary-h4'>Cart summary</h4>
                        <label className='summary-label' htmlFor="free-ship">
                            <div>
                                <input type="radio" id="free-ship" />
                                <span>Free shipping</span>
                            </div>
                            <p>$0.00</p>
                        </label>
                        <label className='summary-label' htmlFor="express-ship">
                            <div>
                                <input type="radio" id="express-ship" />
                                <span>Express shipping</span>
                            </div>
                            <p>+$15.00</p>
                        </label>
                        <label className='summary-label' htmlFor="pick-up">
                            <div>
                                <input type="radio" id="pick-up" />
                                <span>Pick Up</span>
                            </div>
                            <p>%21.00</p>
                        </label>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Cart)