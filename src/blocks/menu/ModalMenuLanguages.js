import React from 'react';

const ModalMenuLanguages = () => {
    return (
        <nav className="languages">
            <ul className="nav">
                <li className="lang-item current-lang">
                    <a title="en" href={ process.env.PUBLIC_URL + "/" }>en</a>
                </li>
            </ul>
        </nav>
    );
};

export default ModalMenuLanguages;
