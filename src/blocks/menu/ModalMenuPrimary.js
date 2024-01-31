import React from 'react';

const ModalMenuPrimary = () => {
    return (
        <nav className="menu-primary">
            <ul className="nav">

                <li className={"nav-item" + (window.location.pathname === '/' ? " current-nav-item" : "")}>
                    <a title="Home" href={process.env.PUBLIC_URL + "/"}>Home</a>
                </li>

                <li className={"nav-item" + (window.location.pathname === '/about' ? " current-nav-item" : "")}>
                    <a title="About us" href={process.env.PUBLIC_URL + "/about"}>About</a>
                </li>

                <li className={"nav-item" + (window.location.pathname === '/services' ? " current-nav-item" : "")}>
                    <a title="Services" href={process.env.PUBLIC_URL + "/services"}>Services</a>
                </li>

                <li className={"nav-item" + (window.location.pathname === '/gallery' ? " current-nav-item" : "")}>
                    <a title="Gallery" href={process.env.PUBLIC_URL + "/gallery"}>Gallery</a>
                </li>



                <li className={"nav-item" + (window.location.pathname === '/contacts' ? " current-nav-item" : "")}>
                    <a title="Contacts" href={process.env.PUBLIC_URL + "/contacts"}>Contact</a>
                </li>
                <li className={"nav-item" + (window.location.pathname === '/testimonials' ? " current-nav-item" : "")}>
                    <a title="Testimonials" href={process.env.PUBLIC_URL + "/testimonials"}>Testimonials</a>
                </li>
            </ul>
        </nav>
    );
};

export default ModalMenuPrimary;
