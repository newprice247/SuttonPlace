import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleContacts from '../blocks/page-title/PageTitleContacts';
// import ContactForm from '../components/form/ContactForm';
import FormspreeForm from '../blocks/contacts/FormspreeForm';

import GoogleMaps from '../blocks/google-maps/GoogleMaps';
import ContactsInside from '../blocks/contacts/Contacts';
import GalleryHome from '../blocks/gallery/GalleryHome';

const Contacts = () => {
    document.body.classList.add( 'page' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Contact | Sutton Place Hair Salon</title>

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
                <PageTitleContacts />
                <div id="page-content" className="spacer p-top-lg">
                    <div className="wrapper">
                        <div className="content">
                            <div className="clearfix">
                                

                                <div className="spacer p-top-lg p-bottom-lg">
                                    <div className="title">
                                        <h2>Let's get in touch</h2>
                                    </div>

                                    <div className="row gutter-width-sm with-pb-xl spacer p-top-lg">
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mt-5">
                                            <ContactsInside />
                                        </div>

 
                                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                                            <div className="contact-form-shortcode">
                                                <FormspreeForm />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <GoogleMaps />
                            </div>
                        </div>
                    </div>
                </div>
                <GalleryHome />
            </main>

            <Footer />
        </Fragment>
    );
};

export default Contacts;
