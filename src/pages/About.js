import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleAbout from '../blocks/page-title/PageTitleAbout';
import AboutReviews from '../blocks/about/AboutReviews';
import AboutImg from '../blocks/about/AboutImg';
import AboutsUs from '../blocks/about/AboutUs';
import AboutOurTeam from '../blocks/about/AboutOurTeam';
import AboutServices from '../blocks/about/AboutServices';
import AboutClients from '../blocks/about/AboutClients';

const About = () => {
    document.body.classList.add( 'page' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>About us | Mykery - Beauty Salon React JS Template</title>

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
                <PageTitleAbout />

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div className="clearfix">
                                <AboutImg />

                                <AboutsUs />

                                <AboutOurTeam />

                                <AboutReviews />

                                <AboutServices />

                                <AboutClients />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default About;
