import React from 'react';

const ModalMenuSecondary = () => {
    return (
        <nav className="menu-secondary">
            <ul className="nav">
                <li className="nav-item">
                    <a title="Terms & Conditions" href={ process.env.PUBLIC_URL + "/" }>Terms & Conditions</a>
                </li>

                <li className="nav-item">
                    <a title="Privacy Policy" href={ process.env.PUBLIC_URL + "/" }>Privacy Policy</a>
                </li>
            </ul>
        </nav>
    );
};

export default ModalMenuSecondary;
