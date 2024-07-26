import React, { memo, useState } from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import Hero from '../../components/hero'
import Sale from '../../components/sale'
import Newsletter from '../../components/newsletter'
import Free from '../../components/free'
import ArticlesCart from '../../components/articles/ArticlesCart'
import Rooms from '../../components/rooms'
import Loading from '../../components/loading'
import ProductsWrapper from '../../components/products-cart'
import { useGetCategoryQuery } from '../../context/api/categoryApi'
import Button from '../../components/button'
import Money from '../../assets/icons/Money'
import Secure from '../../assets/icons/Secure'
import PhoneIcon from '../../assets/icons/PhoneIcon'
import FreeShipping from '../../assets/icons/FreeShipping'
import img1 from '../../assets/images/articles-1.png'
import img2 from '../../assets/images/articles-2.png'
import img3 from '../../assets/images/articles-3.png'
import './home.scss'

const Home = () => {
    const { data: categories, isFetching } = useGetCategoryQuery()

    return isFetching ? <Loading /> : (
        <section className='home'>
            <Hero />
            <Rooms />
            <ProductsWrapper categories={categories} />
            <div className='home-frees'>
                <Free icon={<FreeShipping />} h5={'Free Shipping'} p={'Order above $200'} />
                <Free icon={<Money />} h5={'Money-back'} p={'30 days guarantee'} />
                <Free icon={<Secure />} h5={'Secure Payments'} p={'Secured by Stripe'} />
                <Free icon={<PhoneIcon />} h5={'24/7 Support'} p={'Phone and Email support'} />
            </div>
            <Sale />
            <div className='articales'>
                <div className='articales-title'>
                    <h1 className='articales-h1'>Articles</h1>
                    <Button title={'More Articles'} icon={<GrFormNextLink fontSize={24} color='gray' />} />
                </div>
                <div className="articales-div">
                    <ArticlesCart image={img1} title={'7 ways to decor your home'} />
                    <ArticlesCart image={img2} title={'Kitchen organization'} />
                    <ArticlesCart image={img3} title={'Decor your bedroom'} />
                </div>
            </div>
            <Newsletter />
        </section>
    )
}

export default memo(Home)