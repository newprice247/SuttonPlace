import React from 'react';
import dataFooterMenu from '../../data/footer/footerMenu';

const FooterMenu = () => {
    return (
        <nav className="menu-secondary">
            <ul className="nav">
                { dataFooterMenu && dataFooterMenu.map( ( item, key ) => {
                    return (
                        <li key={ key } className="nav-item">
                            <a title={ item.title } href={ item.link } target="_blank">
                                <img src={ item.icon } alt={ item.title } 
                                style={ { width: '3em', height: '3em' } }
                                />
                            </a>
                        </li>
                    );
                } ) }
            </ul>
        </nav>
    );
};

export default FooterMenu;