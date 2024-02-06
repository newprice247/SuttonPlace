import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
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


import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';

import '../styles.css';

function SwiperContent(props) {
    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={{
            true: true,
        }}
        grabCursor={true}
        modules={[Navigation]}
        className="mySwiper swiper-h spacer m-bottom-md rounded border shadow-lg"
        style={{
            width: '100%',
            height: '38rem',
            "--swiper-pagination-color": "#ffffff",
            "--swiper-navigation-color": "#ffffff",
            "--swiper-navigation-size": "3rem",
            "--swiper-pagination-size": "1.5rem",
            "--swiper-pagination-bullet-size": ".8rem",
        }}
        breakpoints={{

            700: {
                slidesPerView: 4,
            },
        }}
    >
        {props.children}
    </Swiper>
    );
}

function SwiperSlideContent({ img, text }) {
    return (
        <div
            className='h-100 w-100 d-flex align-items-end justify-content-center text-white'

            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <h4
            className='p-5 w-100 text-center'
            >{text}</h4>
        </div>
    );
}


const Gallery = () => {

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


                <section id="page-content" className="text-center"
                    style={{ height: '100%', width: '80%', margin: '0em auto' }}
                >
                    <h3
                    className='spacer m-top-lg'
                    >-- Short Hair --</h3>
                    
                    <SwiperContent
                    children={
                        shortPics.map((pic, index) => (
                            <SwiperSlide>
                              <SwiperSlideContent
                                img={pic.pic1}
                            />  
                            </SwiperSlide>
                            
                        ))
                    }
                />
                    <h3>-- Mid-Length Hair --</h3>
                    <SwiperContent
                    children={
                        midPics.map((pic, index) => (
                            <SwiperSlide>
                                <SwiperSlideContent
                                    img={pic.pic1}
                                />
                            </SwiperSlide>
                        ))
                    }
                />

                    <h3>-- Long Hair --</h3>
                    <SwiperContent
                    children={
                        longPics.map((pic, index) => (
                            <SwiperSlide>
                                <SwiperSlideContent
                                    img={pic.pic1}
                                />
                            </SwiperSlide>
                        ))
                    }
                />
                
                    <h3>--Smoothing Treatments--</h3>
                    <SwiperContent
                    children={
                        smoothingPics.map((pic, index) => (
                            <SwiperSlide>
                                <SwiperSlideContent
                                    img={pic.pic1}
                                    text={pic.pic1alt}
                                />
                            </SwiperSlide>
                        ))
                    }
                />
                    <h3>-- Men's Hair --</h3>
                    <SwiperContent
                    children={
                        menPics.map((pic, index) => (
                            <SwiperSlide>
                                <SwiperSlideContent
                                    img={pic.pic1}
                                />
                            </SwiperSlide>
                        ))
                    }
                />




                    {/* <h4>Filter by Hair Category:</h4> */}
                    {/* <div
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


                    </div> */}
                    {/* <div
                        id='swiperScroll'
                        className='flex-row d-flex justify-content-center align-items-center'
                    >
                        <img src='assets/img/svg/four-arrows.svg' alt='swipe arrows' style={{ width: '3em', margin: '1em' }} />
                        <h5 >Swipe Up, Down, Left, or Right to View Photos</h5>
                    </div> */}


                    {/* <Swiper

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

                    </Swiper> */}

                </section>

                <GalleryHome />

            </main>

            <Footer />
        </Fragment>
    );
};

export default Gallery;
