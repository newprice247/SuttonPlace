import React from 'react';

const ServicesContact = () => {
    return (
        <div id="contact" className="block spacer p-top-md">
            <div className="text-center">
                <a href={ process.env.PUBLIC_URL + "/contacts" } className="btn btn-outline-secondary rounded">Book an Appointment</a>
            </div>
        </div>
    );
};

export default ServicesContact;
