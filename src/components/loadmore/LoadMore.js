import React from 'react';
import { Link } from 'react-scroll';

const LoadMoreButton = () => {
    return (
        <div className="loadmore spacer m-top-lg">
            <Link to="header"
                  title="Loadmore"
                  spy={ true }
                  smooth={ true }
                  duration={ 0 }
                  className="btn btn-outline-secondary"
                  href="#header"
            >
                Loadmore
            </Link>
        </div>
    );
};

export default LoadMoreButton;
