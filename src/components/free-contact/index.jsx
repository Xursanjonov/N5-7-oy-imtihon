import React from 'react';
import './free-contact.scss';

const FreeContact = () => {
    return (
        <div className="free__contact">
            <div className="free__contact-item">
                <p>Free Shipping</p>
                <p>Order above $200</p>
            </div>
            <div className="free__contact-item">
                <p>Money-back</p>
                <p>30 days guarantee</p>
            </div>
            <div className="free__contact-item">
                <p>Secure Payments</p>
                <p>Secured by Stripe</p>
            </div>
            <div className="free__contact-item">
                <p>24/7 Support</p>
                <p>Phone and Email support</p>
            </div>
        </div>
    );
};

export default FreeContact;
