
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles.css';


import { Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap')
            </style>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                
                navigation={{
                    true: true,

                }}

                grabCursor={true}
                modules={[ Navigation]}
                className="mySwiper"
                style={{
                    width: '100%',
                    height: '35rem',
                    "--swiper-pagination-color": "#ffffff",
                    "--swiper-navigation-color": "#ffffff",
                    "--swiper-navigation-size": "2rem",
                    "--swiper-pagination-size": "1.5rem",
                    "--swiper-pagination-bullet-size": ".8rem",

                }}
                breakpoints={{
                    
                    700: {
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide>
                    <a
                    href={process.env.PUBLIC_URL + '/about'}
                    >
                    <div
                        className='h-100 w-100 d-flex align-items-center justify-content-center'
                        
                        style={{
                            backgroundImage: `url(assets/img/gallery/suttonWorking.jpg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            filter: 'grayscale(100%)',
                            transition: 'filter 0.5s ease-in-out',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.filter = 'none';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.filter = 'grayscale(100%)';
                        }}
                        onClick={(e) => {
                            e.target.style.filter = 'none';
                        }}
                    >
                        <p className='text-white text-center merriweather-light'
                            style={{ fontSize: '3rem' }}>
                            About
                        </p>
                    </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                    href={process.env.PUBLIC_URL + '/services'}
                    >
                    <div
                        className='h-100 w-100 d-flex align-items-center justify-content-center'
                        href={process.env.PUBLIC_URL + '/services'}
                        style={{
                            backgroundImage: `url(assets/img/bg/goldTools.jpg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            filter: 'grayscale(100%)',
                            transition: 'filter 0.5s ease-in-out',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.filter = 'none';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.filter = 'grayscale(100%)';
                        }}
                        onClick={(e) => {
                            e.target.style.filter = 'none';
                        }}
                    >
                        <p className='text-white text-center merriweather-light' style={{ fontSize: '3rem' }}>
                            Services
                        </p>
                    </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                    href={process.env.PUBLIC_URL + '/gallery'}
                    >
                    <div
                        className='h-100 w-100 d-flex align-items-center justify-content-center'
                        href={process.env.PUBLIC_URL + '/contact'}
                        style={{
                            backgroundImage: `url(assets/img/bg/chair.jpg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            filter: 'grayscale(100%)',
                            transition: 'filter 0.5s ease-in-out',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.filter = 'none';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.filter = 'grayscale(100%)';
                        }}
                        onClick={(e) => {
                            e.target.style.filter = 'none';
                        }}
                    >
                        <p className='text-white text-center merriweather-light' style={{ fontSize: '3rem' }}>
                            Gallery
                        </p>
                    </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                    href={process.env.PUBLIC_URL + '/contact'}
                    >
                    <div
                        className='h-100 w-100 d-flex align-items-center justify-content-center'
                        href={process.env.PUBLIC_URL + '/contact'}
                        style={{
                            backgroundImage: `url(assets/img/bg/phone.jpg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            filter: 'grayscale(100%)',
                            transition: 'filter 0.5s ease-in-out',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.filter = 'none';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.filter = 'grayscale(100%)';
                        }}
                        onClick={(e) => {
                            e.target.style.filter = 'none';
                        }}
                    >
                        <p className='text-white text-center merriweather-light' style={{ fontSize: '3rem' }}>
                            Contact
                        </p>
                    </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                    href={process.env.PUBLIC_URL + '/testimonials'}
                    >
                    <div
                        className='h-100 w-100 d-flex align-items-center justify-content-center'
                        href={process.env.PUBLIC_URL + '/testimonials'}
                        style={{
                            backgroundImage: `url(assets/img/bg/testimonials.jpg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            filter: 'grayscale(100%)',
                            transition: 'filter 0.5s ease-in-out',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.filter = 'none';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.filter = 'grayscale(100%)';
                        }}
                        onClick={(e) => {
                            e.target.style.filter = 'none';
                        }}
                    >
                        <p className='text-white text-center merriweather-light' style={{ fontSize: '3rem' }}>
                            Testimonials
                        </p>
                    </div>
                    </a>
                </SwiperSlide>
            </Swiper >
        </>
    );
}
