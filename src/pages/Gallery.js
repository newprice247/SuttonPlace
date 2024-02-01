import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import galleryPics from '../data/gallery/galleryPics';
import { Swiper, SwiperSlide } from 'swiper/react';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleGallery from '../blocks/page-title/PageTitleGallery';
import GalleryHome from '../blocks/gallery/GalleryHome';

import { Mousewheel, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';

import '../styles.css';


const Gallery = () => {
    document.body.classList.add('page');


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

                <section id="page-content" className="spacer p-top-xl text-center"
                    style={{ height: '100vh', width: '80%', margin: '0em auto' }}
                >
                    <h5>Swipe Up, Down, Left, or Right to View Photos</h5>
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
                        {galleryPics.map((pic, index) => (
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
