import React from 'react';
import Button from '../button';
import './about-us.scss';

const About = ({ image }) => {

    return (
        <div className='sale'>
            <figure className='sale__img'>
                <img className='sale__img-image' src={image} alt="Sale up image" />
            </figure>
            <div className="sale__info">
                <h1 className='sale__info-h1'>About Us</h1>
                <p className='sale__info-p'>
                    3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
                    Our customer service is always prepared to support you 24/7
                </p>
                <Button />
            </div>
        </div>
    );
};

export default About;
