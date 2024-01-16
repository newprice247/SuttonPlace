import React from 'react';

const NewsTags = () => {
    return (
        <div className="tags">
            <p>
                <a title="Beauty" href={ process.env.PUBLIC_URL + "/news" }>Beauty</a>
                <a title="Cosmetic" href={ process.env.PUBLIC_URL + "/news" }>Cosmetic</a>
                <a title="Health" href={ process.env.PUBLIC_URL + "/news" }>Health</a>
            </p>
        </div>
    );
};

export default NewsTags;
