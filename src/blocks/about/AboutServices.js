import React from 'react';

const AboutServices = () => {
    return (
        <div id="services" className="block spacer p-top-xl">
            <div className="text-center">
                <a href={ process.env.PUBLIC_URL + "/services" } className="btn btn-outline-secondary rounded">Services & Pricing</a>
            </div>
        </div>
    );
};

export default AboutServices;
