import React from 'react';

const HeaderLogo = ( {  } ) => {
    return (
        <div className="header-logo">
            <a className="logo logo-secondary transform-scale-h" title="Logo" href={ process.env.PUBLIC_URL + "/" }>
                <img src={ "assets/img/logo/dark-logo.png" } alt="Logo" className='rounded'  />
            </a>
        </div>
    );
};

export default HeaderLogo;
