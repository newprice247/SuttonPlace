import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import galleryPics from '../data/gallery/galleryPics';
import menPics from '../data/gallery/menPics';
import longPics from '../data/gallery/longPics';
import midPics from '../data/gallery/midPics';
import shortPics from '../data/gallery/shortPics';
import smoothingPics from '../data/gallery/smoothingPics';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import PageTitleGallery from '../blocks/page-title/PageTitleGallery';
import GalleryHome from '../blocks/gallery/GalleryHome';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';

import '../styles.css';
const buttonArray = ['allHairButton', 'menHairButton', 'longHairButton', 'midHairButton', 'shortHairButton', 'smoothingButton'];

const Gallery = () => {
    document.body.classList.add('page');
    const [activeButton, setActiveButton] = useState('allHairButton');

    

    useEffect(() => {
        buttonArray.forEach(button => {
            if (button === activeButton) {
                document.getElementById(button).classList.add('activeGalleryButton');
            } else {
                document.getElementById(button).classList.remove('activeGalleryButton');
            }
        }
        );
    }, [activeButton]);

    useEffect(() => {
        console.log(activeButton);
    }, [activeButton]);

    const [currentPicArray, setCurrentPicArray] = useState(galleryPics);

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Gallery | Sutton Place Hair Salon</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Loading />

            <Header logoColor="dark" />

            <main id="main" className="site-main">
                <PageTitleGallery />


                <section id="page-content" className="spacer p-top-xl text-center m-bottom-xl"
                    style={{ height: '100vh', width: '80%', margin: '1em auto' }}
                >
                    <h4>Filter by Category:</h4>
                    <div
                        className="d-flex justify-content-center mb-3 flex-wrap align-items-center"
                    >
                        <button
                            id='allHairButton'
                            onClick={() => {
                                setCurrentPicArray(galleryPics)
                                setActiveButton('allHairButton')
                                document.getElementById('swiperScroll').scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="btn btn-lg btn-link min-w-auto text-uppercase border-dark p-2 m-2 rounded"
                        >
                            All Hair
                        </button>

                        <button
                            id='shortHairButton'
                            onClick={() => {
                                setCurrentPicArray(shortPics)
                                setActiveButton('shortHairButton')
                                document.getElementById('swiperScroll').scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="btn btn-lg btn-link min-w-auto  text-uppercase border-dark p-2 m-2 rounded"
                        >
                            Short Hair
                        </button>

                        <button
                            id='midHairButton'
                            onClick={() => {
                                setCurrentPicArray(midPics)
                                setActiveButton('midHairButton')
                                document.getElementById('swiperScroll').scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="btn btn-lg btn-link min-w-auto  text-uppercase border-dark p-2 m-2 rounded"
                        >
                            Mid-Length Hair
                        </button>

                        <button
                            id='longHairButton'
                            onClick={() => {
                                setCurrentPicArray(longPics)
                                setActiveButton('longHairButton')
                                document.getElementById('swiperScroll').scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="btn btn-lg btn-link min-w-auto  text-uppercase border-dark p-2 m-2 rounded"
                        >
                            Long Hair
                        </button>
                        <button
                            id='smoothingButton'
                            onClick={() => {
                                setCurrentPicArray(smoothingPics)
                                setActiveButton('smoothingButton')
                                document.getElementById('swiperScroll').scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="btn btn-lg btn-link min-w-auto  text-uppercase border-dark p-2 m-2 rounded"
                        >
                            Smoothing Treatments
                        </button>
                        <button
                            id='menHairButton'
                            onClick={() => {
                                setCurrentPicArray(menPics)
                                setActiveButton('menHairButton')
                                document.getElementById('swiperScroll').scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="btn btn-lg btn-link min-w-auto  text-uppercase border-dark p-2 m-2 rounded"
                        >
                            Men's Haircuts
                        </button>


                    </div>
                    <div
                        id='swiperScroll'
                        className='flex-row d-flex justify-content-center align-items-center'
                    >
                        <img src='assets/img/svg/four-arrows.svg' alt='swipe arrows' style={{ width: '3em', margin: '1em' }} />
                        <h5 >Swipe Up, Down, Left, or Right to View Photos</h5>
                    </div>


                    <Swiper

                        className="mySwiper swiper-v border rounded"
                        direction='vertical'
                        spaceBetween={50}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Mousewheel, Pagination]}
                        mousewheel={true}
                    >
                        {currentPicArray.map((pic, index) => (
                            <SwiperSlide>
                                <Swiper
                                    className="mySwiper2 swiper-h"
                                    direction='horizontal'
                                    spaceBetween={10}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    slidesPerView={'auto'}
                                    modules={[EffectCoverflow, Pagination]}
                                    grabCursor={true}
                                    effect={'coverflow'}
                                    coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                    }}
                                >
                                    <SwiperSlide>
                                        <img
                                            src={pic.pic1}
                                            alt={pic.pic1alt}
                                        />
                                    </SwiperSlide>
                                    {pic.pic2 && (
                                        <SwiperSlide>
                                            <img
                                                src={pic.pic2}
                                                alt={pic.pic2alt}
                                            />
                                        </SwiperSlide>
                                    )}
                                    {pic.pic3 && (
                                        <SwiperSlide>
                                            <img
                                                src={pic.pic3}
                                                alt={pic.pic3alt}
                                            />
                                        </SwiperSlide>
                                    )}

                                </Swiper>
                            </SwiperSlide>
                        ))}

                    </Swiper>

                </section>

                <GalleryHome />

            </main>

            <Footer />
        </Fragment>
    );
};

export default Gallery;
