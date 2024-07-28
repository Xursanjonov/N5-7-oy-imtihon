import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementCart } from '../../context/slices/cartSlice';
import './order-summary.scss';

const OrderSummary = () => {
    const { value: carts, total, subtotal } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <div className="order-summary-container">
            <h2>Order Summary</h2>
            <div className='order-summary__carts'>
                {
                    carts?.map(cart => (
                        <div className="order-item">
                            <img src={cart?.images[0]} alt="Tray Table" />
                            <div className="item-details">
                                <span>{cart?.title}</span>
                                <span>Color: Black</span>
                                <div className="quantity">
                                    <button onClick={() => dispatch(decrementCart(cart))}>-</button>
                                    <span>{cart?.quantity}</span>
                                    <button onClick={() => dispatch(addToCart(cart))}>+</button>
                                </div>
                            </div>
                            <span className="item-price">${(cart?.price * cart?.quantity).brm()}</span>
                        </div>
                    ))
                }
            </div>
            <div className="discount">
                <input type="text" placeholder="Input" />
                <button>Apply</button>
                <span className="discount-code">JenKateMW -$25.00 <button className="remove-button">Remove</button></span>
            </div>
            <div className="summary-totals">
                <div className="summary-item">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div className="summary-item">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                </div>
                <div className="summary-item total">
                    <span>Total</span>
                    <span>${total}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
