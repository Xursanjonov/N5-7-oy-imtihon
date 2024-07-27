import React, { useEffect } from 'react';
import About from '../../components/about-us';
import ContactForm from '../../components/contact-form';
import FreeContact from '../../components/free-contact';
import aboutImage from '../../assets/images/sale.png';
import './contact.scss';

const Contact = () => {

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="contact">
      <div className="contact-us-container">
        <div>
          <h1>We believe in sustainable decor. We’re passionate about life at home.</h1>
          <p>
            Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present.
          </p>
        </div>
        <About image={aboutImage} />
        <div className="contact-info">
          <div className="info">
            <p>ADDRESS</p>
            <p>234 Hai Trieu, Ho Chi Minh City, Viet Nam</p>
          </div>
          <div className="info">
            <p>CONTACT US</p>
            <p>+84 234 567 890</p>
          </div>
          <div className="info">
            <p>EMAIL</p>
            <p>hello@3elegant.com</p>
          </div>
        </div>
        <div className="contact__info-div">
          <ContactForm />
          <div className="map">
            <iframe width={548} height={404}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6815959451044!2d106.69387811533477!3d10.762622392328825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752929288a0b27%3A0x2309a7d5a9d3e43a!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1625221941181!5m2!1sen!2sus"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
      <FreeContact />
    </div>
  );
};

export default Contact;
