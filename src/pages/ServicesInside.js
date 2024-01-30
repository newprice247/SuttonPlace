import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import PageTitleServicesInside from '../blocks/page-title/PageTitleServicesInside'
import Footer from '../blocks/footer/Footer';

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

                                            <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                        
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span 
                                                            className="list-group-title"
                                                            ><h4> - Consultation</h4></span>
                                                            <span className="list-group-price">Fee waived if service is booked, OR 25 $</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>Haircut and hair styling</h3>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                        <h4
                                                            className="spacer p-top-xs"
                                                        > - Women</h4>
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Haircut</span>
                                                            <span className="list-group-price">40 $</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Haircut w/ Blowdry</span>
                                                            <span className="list-group-price">50 $</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Shampoo w/ Blowdry</span>
                                                            <span className="list-group-price">From 35 $</span>
                                                        </li>
                                                    </ul>
                                                    <ul className="price-list-item-list-group list-group">
                                                        <h4> - Men</h4>
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Haircut</span>
                                                            <span className="list-group-price">35 $</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>Hair coloring</h3>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">One step color</span>
                                                            <span className="list-group-price">85 $</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Color w/ haircut & style</span>
                                                            <span className="list-group-price">120 $</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Highlights ( Foiling )</span>
                                                            <span className="list-group-price">From 125 $</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>Smoothing Treatments</h3>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Keratin treatment</span>
                                                            <span className="list-group-price">350 $</span>
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Agave Smoothing treatment</span>
                                                            <span className="list-group-price">From 175 $</span>
                                                        </li>
                                                    </ul>

                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>Perms</h3>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">Perm</span>
                                                            <span className="list-group-price"> From 150 $</span>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
