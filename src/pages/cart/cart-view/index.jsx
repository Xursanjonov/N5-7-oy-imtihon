import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import empty from '../../../assets/images/cart-empty.png'
import CloseIcon from '../../../assets/icons/CloseIcon';
import inputLogo from '../../../assets/images/inputLogo.svg';
import { addToCart, decrementCart, removeFromCart } from '../../../context/slices/cartSlice';
import './cart-view.scss'

const CartView = () => {
    const { value: cartData, subtotal, total } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate() 

    const handleCheckout = (e) => {
        e.preventDefault()
        if (cartData?.length) {
            navigate('/cart/checkout')
            localStorage.setItem('cart-btn', true)
        }
    }

    return (
        <div className='cartview__container'>
            <div className='cartview__container-carts'>
                <ul className='cartview__container-carts__ul'>
                    <li>Product</li>
                    <li>Quantity</li>
                    <li>Price</li>
                    <li>Subtotal</li>
                </ul>
                <div className='cartview__container-products'>
                    <div className="products">
                        {cartData?.map(product => (
                            <div key={product?.id} className="product">
                                <div className="product__left">
                                    <img className='product-img' src={product?.images[0] ?? empty} alt="" />
                                    <div className="product-info">
                                        <div className="product-name">{product?.title}</div>
                                        <div className="product-color">Color: {'product?.color'}</div>
                                        <button onClick={() => dispatch(removeFromCart(product?.id))}
                                            className="remove-button">
                                            <CloseIcon /> <span>Remove</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="product-quantity">
                                    <button onClick={() => dispatch(product?.quantity <= 1 ? removeFromCart(product?.id) : decrementCart(product))}>-</button>
                                    <span>{product?.quantity}</span>
                                    <button onClick={() => dispatch(addToCart(product))}>+</button>
                                </div>
                                <div className="product-price">${product?.price}</div>
                                <div className="product-subtotal">${(product?.price * product?.quantity).brm()}</div>
                            </div>
                        ))}
                    </div>
                    <div className='coupon'>
                        <h4 className='coupon__title'>Have a coupon?</h4>
                        <p className='coupon__desc'>Add your code for an instant cart discount</p>
                        <label className='coupon__label' htmlFor="coupon__input">
                            <img className='coupon__label-logo' src={inputLogo} alt="" />
                            <input type="text" placeholder="Coupon Code" id="cupon__input" />
                            <button className='coupon__btn'>Apply</button>
                        </label>
                    </div>
                </div>
            </div>
            <div className="cart__summary">
                <h2>Cart summary</h2>
                <div className="shipping-options">
                    <div>
                        <input type="radio" id="free" name="shipping" />
                        <label htmlFor="free">Free shipping</label>
                        <span>$0.00</span>
                    </div>
                    <div>
                        <input type="radio" id="express" name="shipping" />
                        <label htmlFor="express">Express shipping</label>
                        <span>+$15.00</span>
                    </div>
                    <div>
                        <input type="radio" id="pickup" name="shipping" />
                        <label htmlFor="pickup">Pick Up</label>
                        <span>+$21.00</span>
                    </div>
                </div>
                <div className="summary-total-2">
                    <div>Subtotal</div>
                    <div>${subtotal.brm()}</div>
                </div>
                <div className="summary-total">
                    <div>Total</div>
                    <div>${total.brm()}</div>
                </div>
                <button onClick={handleCheckout} className="checkout-button">Checkout</button>
            </div>
        </div>
    )
}

export default memo(CartView)