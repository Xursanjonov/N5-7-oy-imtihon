import React from 'react';
import './contact-form.scss';

const ContactForm = () => {
    return (
        <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;
