import React from 'react';
import { PrismCode } from '../../../../components/prsimjs/Prismjs';

const ScrollBar = () => {
    return (
        <div id="scrollbar" className="spacer m-top-xl">
            <h3>Scrollbar</h3>
            <p>Custom scrollbar jQuery plugin, featuring vertical/horizontal scrollbars, scrolling momentum, mouse-wheel, keyboard and touch support etc.</p>

            <div className="bd-example d-md-flex">
                <div className="bg-light scrollbar-light mr-md-3" style={ { "maxWidth": "260px", "maxHeight": "100px", "overflow" : "auto" } }>
                    <p className="p-3">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>

                <div className="bg-light scrollbar-dark" style={ { "maxWidth": "260px", "maxHeight": "100px", "overflow" : "auto" } }>
                    <p className="p-3">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
            </div>

            <PrismCode
                code={ '' +
                '<div className="bg-light scrollbar-light mr-md-3" style="max-width: 260px; max-height: 100px;">\n' +
                '  <p className="p-3">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>\n' +
                '</div>\n' +
                '\n' +
                '<div className="bg-light scrollbar-dark" style="max-width: 260px; max-height: 100px;">\n' +
                '  <p className="p-3">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

        </div>
    );
};

export default ScrollBar;
