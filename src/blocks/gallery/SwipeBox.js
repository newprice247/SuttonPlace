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
