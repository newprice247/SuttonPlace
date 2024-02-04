import React from 'react';

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contacts-items">
                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <p><u>
                            <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>{process.env.REACT_APP_EMAIL}</a>
                      </u>  </p>
                    </div>

                    <div className="contacts-item-title">
                        <h6>Email</h6>
                    </div>
                </div>

                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <p>{process.env.REACT_APP_ADDRESS}</p>
                    </div>

                    <div className="contacts-item-title">
                        <h6>Address</h6>
                    </div>
                </div>

                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <p><u>
                            <a href={`tel:${process.env.REACT_APP_PHONE_HREF}`}>{process.env.REACT_APP_PHONE_PRETTY}</a>
                      </u>  </p>
                    </div>

                    <div className="contacts-item-title">
                        <h6>Phone</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
