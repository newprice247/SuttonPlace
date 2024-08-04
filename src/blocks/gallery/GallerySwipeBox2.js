import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function GallerySwipe2(props) {
    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
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
                    <img
                        className='w-25'
                        src={props.pic1}
                        alt={props.pic1alt}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='w-25'
                        src={props.pic2}
                        alt={props.pic2alt}
                    />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
