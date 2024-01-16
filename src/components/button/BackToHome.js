import React from 'react';

const BackToHome = () => {
    return (
        <div className="button">
            <a title="Back to homepage" className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space" href={ process.env.PUBLIC_URL + "/" }>Back to Home</a>
        </div>
    );
};

export default BackToHome;
