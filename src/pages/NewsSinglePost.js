import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleNewsSingle from '../blocks/page-title/PageTitleNewsSingle';
import NewsMeta from '../blocks/news/NewsMeta';
import NewsTitle from '../blocks/news/NewsTitle';
import NewsDescription from '../blocks/news/NewsDescription';
import NewsTags from '../blocks/news/NewsTags';
import NewsComments from '../blocks/news/NewsComments';
import Widget from '../blocks/widget/Widget';

const NewsSinglePost = () => {
    document.body.classList.add( 'single-post' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>News single post | Sutton Place Hair Salon</title>

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
                <PageTitleNewsSingle />

                <div id="page-content" className="spacer m-top-xl">
                    <div className="wrapper">
                        <div id="single">
                            <div className="row gutter-width-lg">
                                <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0 order-xl-0">
                                    <Widget />
                                </div>

                                <div className="col-xl-8 col-lg-8 col-md-12 order-0 order-lg-1 order-xl-1 single-content">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src="assets/img/placeholder/1054x620.jpg" alt="Best Cosmetics for Your Body and Soul" />
                                        </div>
                                    </div>

                                    <NewsMeta />

                                    <NewsTitle />

                                    <NewsDescription />

                                    <NewsTags />

                                    <NewsComments />
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

export default NewsSinglePost;
