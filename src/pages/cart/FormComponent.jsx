import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './form-component.scss';

const FormComponent = () => {
    const data = useSelector(state => state.cart.value)
    const navigate = useNavigate()
    const handleOrder = (e) => {
        e.preventDefault()
        if (data?.length) {
            navigate('/')
        }
        localStorage.removeItem('cart-subtotal')
        localStorage.removeItem('cart-total')
        localStorage.removeItem('cart')
        navigate('/')
    }

    return (
        <div className="form-container">
            <form className="form-container__class">
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" placeholder="Phone number" />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Your Email" />
                </div>
            </form>
            <div className='form__container-class2'>
                <h3>Shipping Address</h3>
                <div className="form-group">
                    <label>Street Address</label>
                    <input type="text" placeholder="Street Address" />
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <select>
                        <option value="">Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        {/* More options can be added here */}
                    </select>
                </div>
                <div className="form-group">
                    <label>Town / City</label>
                    <input type="text" placeholder="Town / City" />
                </div>
                <div className="form-group">
                    <label>State</label>
                    <input type="text" placeholder="State" />
                </div>
                <div className="form-group">
                    <label>Zip Code</label>
                    <input type="text" placeholder="Zip Code" />
                </div>
                <div className="form-group">
                    <label>
                        <input type="checkbox" /> Use a different billing address (optional)
                    </label>
                </div>
            </div>
            <div className="form__container-class3">
                <h3>Payment Method</h3>
                <div className="form-group">
                    <label>
                        <input type="radio" name="payment" /> Pay by Card Credit
                    </label>
                    <label>
                        <input type="radio" name="payment" /> Paypal
                    </label>
                </div>
                <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" placeholder="1234 1234 1234" />
                </div>
                <div className="form-group">
                    <label>Expiration Date</label>
                    <input type="text" placeholder="MM/YY" />
                </div>
                <div className="form-group">
                    <label>CVC</label>
                    <input type="text" placeholder="CVC code" />
                </div>
            </div>
            <button onClick={handleOrder} className="place-order-button">Place Order</button>
        </div>
    );
};

export default FormComponent;
