import React, { Component, Fragment } from 'react';
// import SwipeBox from 'fslightbox-react';

class SwipeBoxComponent extends Component {
    state = {
        isVisible: false,
        slide: 0,
    };
    showSlide = (slide, event) => {
        event.preventDefault();
        this.setState({
            isVisible: !this.state.isVisible,
            slide: slide
        });
    };

    render() {
        return (
            <Fragment>
                {/* <SwipeBox
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
                </div> */}
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src="assets/img/gallery/vikki1.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />

                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                        />

                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Waves at Sea"
                        />

                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SwipeBoxComponent;
