import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleHome from '../blocks/page-title/PageTitleHome';
import GoogleMaps from '../blocks/google-maps/GoogleMaps';
import ServicesHome from '../blocks/services/ServicesHome';
import ContactsInside from '../blocks/contacts/Contacts';



const Home = () => {
    document.body.classList.add('home');
    document.body.classList.add('header-absolute-true');

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Home | Sutton Place Hair Salon</title>

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

            <Header logoColor="light" />

            <main id="main" className="site-main content-no-spacing">
                <div className="content">
                    <div className="clearfix">
                        <PageTitleHome />

                        {/* <ContactsUs /> */}

                        <ServicesHome />
                        <div
                            // style={{ height: '70vh', width: '70%', margin: '5em auto' }}
                        >
                            <GoogleMaps />
                        </div>
                        <div className="spacer p-top-lg p-bottom-lg text-center">
                            <h2 className="mb-4 mt-5">Contact Sutton</h2>
                            <ContactsInside />
                        </div>

                        {/* <AboutsUs /> */}

                        {/* <div id="img" className="block spacer p-top-xl">
                            <div className="img-no-wrap-1 img-gray">
                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src="assets/img/bg/blackTools.jpg" alt="Beauty Salon" />
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <News />

                        <Newsletter /> */}
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default Home;
