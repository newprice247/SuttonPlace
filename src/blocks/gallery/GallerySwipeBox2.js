// import React, { Component } from 'react';
// import Swiper from 'swiper';



// export default class GallerySwipe2 extends Component {
//     componentDidMount() {
//         new Swiper( '.adv-slider-services .adv-swiper-container', {
//             // ADV swiper
//             noSwipingClass: 'adv-swiper-no-swiping',
//             containerModifierClass: 'adv-swiper-container-',
//             slideClass: 'adv-swiper-slide',
//             slideBlankClass: 'adv-swiper-slide-invisible-blank',
//             slideActiveClass: 'adv-swiper-slide-active',
//             slideDuplicateActiveClass: 'adv-swiper-slide-duplicate-active',
//             slideVisibleClass: 'adv-swiper-slide-visible',
//             slideDuplicateClass: 'adv-swiper-slide-duplicate',
//             slideNextClass: 'adv-swiper-slide-next',
//             slideDuplicateNextClass: 'adv-swiper-slide-duplicate-next',
//             slidePrevClass: 'adv-swiper-slide-prev',
//             slideDuplicatePrevClass: 'adv-swiper-slide-duplicate-prev',
//             wrapperClass: 'adv-swiper-wrapper',
//             navigation: {
//                 disabledClass: 'adv-swiper-button-disabled',
//                 hiddenClass: 'adv-swiper-button-hidden',
//                 lockClass: 'adv-swiper-button-lock',
//                 nextEl: '.adv-2-swiper-button-next',
//                 prevEl: '.adv-2-swiper-button-prev'
//             },
//             spaceBetween: 0,
//             slidesPerView: 'auto',
//             centeredSlides: true,
//         } );
//     }

//     render() {
//         const { pic1, pic1alt, pic2, pic2alt, pic3, pic3alt } = this.props;

//         return (
//             <section id="services" className="block">
//                 <div className="adv-slider-services">
//                     <div className="adv-swiper-container">
//                         <div className="adv-swiper-wrapper services-items clearfix">
//                             <a className="adv-swiper-slide services-item" href="#">
//                                 <div className="img object-fit">
//                                     <div className="object-fit-cover">
//                                         <img src={pic1} alt={pic1alt} />
//                                     </div>
//                                 </div>
//                                 <div className="img-bg-color"></div>
//                             </a>

//                             <a className="adv-swiper-slide services-item" href="#">
//                                 <div className="img object-fit">
//                                     <div className="object-fit-cover">
//                                         <img src={pic2} alt={pic2alt} />
//                                     </div>
//                                 </div>
//                                 <div className="img-bg-color"></div>
//                             </a>
//                         </div>

//                         <div className="adv-2-swiper-button-prev">
//                             <span>
//                                 <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto">Previous</span>
//                             </span>
//                         </div>

//                         <div className="adv-2-swiper-button-next">
//                             <span>
//                                 <span className="btn btn-lg btn-after-dot btn-link border-0 p-0 min-w-auto">Next</span>
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//         }
//     }

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
