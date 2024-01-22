import React from 'react';

const Copyright = () => {
    return (
        <div className="copyright">
            <p>© 2024 Nathaniel Price/ Template provided by <a className="text-link" href="https://www.adveits.com">Adveits</a> / <a className="secondary-regular" href={ process.env.PUBLIC_URL + "/contacts" }>CONTACTS</a></p>
        </div>
    );
};

export default Copyright;
