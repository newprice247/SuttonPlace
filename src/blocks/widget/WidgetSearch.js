import React from 'react';

const WidgetSearch = () => {
    return (
        <div className="widget widget_search">
            <form className="search-form" role="search" method="get" action={ process.env.PUBLIC_URL + "/search-results" }>
                <div className="search input-group">
                    <input className="form-control" type="text" placeholder="Type here to search" name="s" />

                    <div className="input-group-append">
                        <button type="submit" className="btn btn-sm btn-before-dot btn-link border-0 p-0 min-w-auto text-uppercase">Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default WidgetSearch;
