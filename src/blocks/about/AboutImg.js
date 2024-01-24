import React from 'react';

const AboutImg = () => {
    return (
        <div id="about-us-img" className="block">
            <div className="about-img">
                <div style={{ height: '70%', width: '70%' }}
                className='m-auto border border-dark rounded'
                >
                    <div className="object-fit-cover">
                        <img src="assets/img/gallery/suttonWorking.jpg" alt="About us" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutImg;
