import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import PageTitleServicesInside from '../blocks/page-title/PageTitleServicesInside'
import Footer from '../blocks/footer/Footer';
import BackToServices from '../components/button/BackToServices';

const ServicesInside = () => {
    document.body.classList.add( 'single' );
    document.body.classList.add( 'single-adveits_services' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Services | Sutton Place Hair Salon</title>

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
                <PageTitleServicesInside />


                <div id="page-content" className="spacer p-top-lg">
                    <div className="wrapper">
                        <div className="content">
                            <div id="single">
                                <div id="single-content">
                                    {/* <div id="img" className="block">
                                        <div className="img-no-wrap-1">
                                            <div className="img object-fit">
                                                <div className="object-fit-cover">
                                                    <img src="assets/img/placeholder/1600x700.jpg" alt="Hair Treatments" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="description" className="block spacer p-top-xl">
                                        <div className="description">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                                        </div>
                                    </div> */}

                                    <div id="price-list" className="block spacer p-top-lg">
                                        <div className="title">
                                            <h2 className="hr">Price list</h2>
                                        </div>

                                        <div className="price-list">
                                            <div className="price-list-items">
                                                {/* <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>Special in-salon treatments</h3>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Unique hair restoring treatment with Lorem Ipsum</span>
                                                            <span className="list-group-price">From 35 $</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Scalp renewing treatment with Lorem Ipsum</span>
                                                            <span className="list-group-price">From 35 $</span>
                                                        </li>
                                                    </ul>
                                                </div> */}

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>Haircut and hair styling</h3>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Haircut</span>
                                                            <span className="list-group-price">From 35 $</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Bangs</span>
                                                            <span className="list-group-price">From 35 $</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Hair styling</span>
                                                            <span className="list-group-price">From 35 $</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Hair styling for occasion</span>
                                                            <span className="list-group-price">From 35 $</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Consulting</span>
                                                            <span className="list-group-price">From 35 $</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Trial hairstyling for occasion</span>
                                                            <span className="list-group-price">From 35 $</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>Hair coloring</h3>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">All hair color</span>
                                                            <span className="list-group-price">From 35 $</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Root color</span>
                                                            <span className="list-group-price">From 35 $</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Highlights</span>
                                                            <span className="list-group-price">From 35 $</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Hair toning</span>
                                                            <span className="list-group-price">From 35 $</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <BackToServices />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default ServicesInside;
