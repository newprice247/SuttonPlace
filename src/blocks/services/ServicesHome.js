
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles.css';


import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    true: true,
                     
                }}
                
                grabCursor={true}
                modules={[Pagination, Navigation]}
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
                    // For smaller devices, show only one slide per view
                    900: {
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide>
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
                            e.target.style.filter = 'grayscale(100%)';}}
                        onClick={(e) => {
                            e.target.style.filter = 'none';}}
                    >
                        <p className='text-white text-center' 
                        style={{ fontSize: '3rem', fontFamily: 'Lobster'}}>
                            About
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='h-100 w-100 d-flex align-items-center justify-content-center'
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
                            e.target.style.filter = 'grayscale(100%)';}}
                        onClick={(e) => {
                            e.target.style.filter = 'none';}}
                    >
                        <p className='text-white text-center' style={{ fontSize: '3rem', fontFamily: 'Lobster' }}>
                            Services
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='h-100 w-100 d-flex align-items-center justify-content-center'
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
                            e.target.style.filter = 'grayscale(100%)';}}
                        onClick={(e) => {
                            e.target.style.filter = 'none';}}
                    >
                        <p className='text-white text-center' style={{ fontSize: '3rem', fontFamily: 'Lobster' }}>
                            Gallery
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='h-100 w-100 d-flex align-items-center justify-content-center'
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
                            e.target.style.filter = 'grayscale(100%)';}}
                        onClick={(e) => {
                            e.target.style.filter = 'none';}}
                    >
                        <p className='text-white text-center' style={{ fontSize: '3rem', fontFamily: 'Lobster' }}>
                            Contact
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='h-100 w-100 d-flex align-items-center justify-content-center'
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
                            e.target.style.filter = 'grayscale(100%)';}}
                        onClick={(e) => {
                            e.target.style.filter = 'none';}}
                    >
                        <p className='text-white text-center' style={{ fontSize: '3rem', fontFamily: 'Lobster' }}>
                            Testimonials
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper >
        </>
    );
}
