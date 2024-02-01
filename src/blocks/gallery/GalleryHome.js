import React from 'react';

const GalleryHome = () => {
    return (
        <div id="contact" className="block spacer p-top-xl">
            <div className="text-center">
                <a href={ process.env.PUBLIC_URL + "/" } className="btn btn-outline-secondary rounded">Back to Homepage</a>
            </div>
        </div>
    );
};

export default GalleryHome;
