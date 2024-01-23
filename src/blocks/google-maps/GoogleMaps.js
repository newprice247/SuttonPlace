
import React from 'react';

const SimpleMarkerMap = () => {

return (
    <div
    style={{ height: '70vh' }}
    >
     <iframe
      src={`https://storage.googleapis.com/maps-solutions-${process.env.REACT_APP_MAPS_API_KEY}/locator-plus/3beg/locator-plus.html`}
      className='h-100 w-100 border-0'
      loading="lazy"
      title="Locator Plus Map"
    ></iframe>
    </div>
    
);
};

export default SimpleMarkerMap;
