import React from 'react';

const NewsMeta = () => {
    return (
        <div className="meta">
            <p>
                <span><a href={ process.env.PUBLIC_URL + "/news" }>By admin</a></span>
                <span>Comments (1)</span>
                <span className="category">
                    <a title="Cosmetic" href={ process.env.PUBLIC_URL + "/news" }>Cosmetic</a>
                </span>
            </p>
        </div>
    );
};

export default NewsMeta;
