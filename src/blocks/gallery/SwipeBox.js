import React, { Component, Fragment } from 'react';
import SwipeBox from 'fslightbox-react';

class SwipeBoxComponent extends Component {
    state = {
        isVisible: false,
        slide: 0,
    };
    showSlide = ( slide, event ) => {
        event.preventDefault();
        this.setState( {
            isVisible: !this.state.isVisible,
            slide: slide
        } );
    };

    render() {
        return (
            <Fragment>
                <SwipeBox
                    toggler={ this.state.isVisible }
                    slide={ this.state.slide }
                    urls={ [
                        'assets/img/placeholder/780x500.jpg',
                        'assets/img/placeholder/780x500.jpg',
                        'assets/img/placeholder/780x500.jpg',
                        'assets/img/placeholder/780x500.jpg',
                        'assets/img/placeholder/780x500.jpg',
                        'assets/img/placeholder/780x500.jpg'
                    ] }
                />

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <a onClick={ ( event ) => this.showSlide( 1, event ) } title="Face & Body | Image 1" ref={ this.swipeImg } className="gallery-item swipebox" href="assets/img/placeholder/780x500.jpg" rel="gallery">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <img src="assets/img/placeholder/780x500.jpg" alt="Face & Body" />
                            </div>
                        </div>

                        <div className="img-bg-color"></div>
                    </a>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <a onClick={ ( event ) => this.showSlide( 2, event ) } title="Hair Treatments | Image 2" className="gallery-item swipebox" href="assets/img/placeholder/780x500.jpg" rel="gallery">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <img src="assets/img/placeholder/780x500.jpg" alt="Hair Treatments" />
                            </div>
                        </div>

                        <div className="img-bg-color"></div>
                    </a>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <a onClick={ ( event ) => this.showSlide( 3, event ) } title="Hands & Feets | Image 3" className="gallery-item swipebox" href="assets/img/placeholder/780x500.jpg" rel="gallery">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <img src="assets/img/placeholder/780x500.jpg" alt="Hands & Feets" />
                            </div>
                        </div>

                        <div className="img-bg-color"></div>
                    </a>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <a onClick={ ( event ) => this.showSlide( 4, event ) } title="Haircuts for Men | Image 4" className="gallery-item swipebox" href="assets/img/placeholder/780x500.jpg" rel="gallery">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <img src="assets/img/placeholder/780x500.jpg" alt="Haircuts for Men" />
                            </div>
                        </div>

                        <div className="img-bg-color"></div>
                    </a>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <a onClick={ ( event ) => this.showSlide( 5, event ) } title="Hair | Image 5" className="gallery-item swipebox" href="assets/img/placeholder/780x500.jpg" rel="gallery">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <img src="assets/img/placeholder/780x500.jpg" alt="Hair" />
                            </div>
                        </div>

                        <div className="img-bg-color"></div>
                    </a>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <a onClick={ ( event ) => this.showSlide( 6, event ) } title="Manicure | Image 6" className="gallery-item swipebox" href="assets/img/placeholder/780x500.jpg" rel="gallery">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <img src="assets/img/placeholder/780x500.jpg" alt="Manicure" />
                            </div>
                        </div>

                        <div className="img-bg-color"></div>
                    </a>
                </div>
            </Fragment>
        );
    }
}

export default SwipeBoxComponent;
