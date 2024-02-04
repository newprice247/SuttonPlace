
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles.css';


import { Navigation } from 'swiper/modules';

function SwiperSlideContent({ img, title, href }) {
    return (
        <div
            className='h-100 w-100 d-flex align-items-center justify-content-center'

            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'grayscale(100%)',
                transition: 'filter 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => {
                e.target.style.filter = 'none';
            }}
            onMouseLeave={(e) => {
                e.target.style.filter = 'grayscale(100%)';
            }}
            onClick={(e) => {
                e.target.style.filter = 'none';
                e.target.style.transform = 'scale(1.05)';
                e.target.style.transition = 'transform 0.3s ease-in-out';
                setTimeout(() => {
                    window.location.href = `/${href}`;
                }, 700);
            }}
        >
            <p className='text-white text-center merriweather-light' style={{ fontSize: '3rem' }}>
                {title}
            </p>
        </div>
    );
}

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
                modules={[Navigation]}
                className="mySwiper"
                style={{
                    width: '100%',
                    height: '35rem',
                    "--swiper-pagination-color": "#ffffff",
                    "--swiper-navigation-color": "#ffffff",
                    "--swiper-navigation-size": "3rem",
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

                    <SwiperSlideContent img='assets/img/gallery/suttonWorking.jpg' title='About' href='about' />

                </SwiperSlide>
                <SwiperSlide>
                    
                        <SwiperSlideContent img='assets/img/bg/goldTools.jpg' title='Services' href='services' />
                    
                </SwiperSlide>
                <SwiperSlide>
                    
                        <SwiperSlideContent img='assets/img/bg/chair.jpg' title='Gallery' href='gallery' />
               
                </SwiperSlide>
                <SwiperSlide>
                    
                        <SwiperSlideContent img='assets/img/bg/phone.jpg' title='Contact' href='contacts' />
                    
                </SwiperSlide>
                <SwiperSlide>
                    
                        <SwiperSlideContent img='assets/img/bg/testimonials.jpg' title='Testimonials' href='testimonials' />
                    
                </SwiperSlide>
            </Swiper >
        </>
    );
}
