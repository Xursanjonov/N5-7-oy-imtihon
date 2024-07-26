import React, { Fragment, memo } from 'react'
import slideImage from '../../assets/images/g.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import './hero.scss'

const Hero = () => {

    return (
        <Fragment>
            <div className='hero'>
                <div className="hero__div">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={slideImage} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slideImage} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slideImage} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="hero__title">
                    <h1 className='hero__title-h1'>Simply Unique<span>/</span> Simply Better<span>.</span> </h1>
                    <p className='hero__title-p'> <span>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Hero)