import React from 'react';

const AppIntranetLeftGallery = () => {
    let sec = new Date().getSeconds(); //Current Seconds.
    return (
        <div className='bg-white-60 br2 grow pa3 ma2 bw2 shadow-5'>
            <h1>Image Gallery</h1>
            <img alt='robots' src={`https://robohash.org/${sec}?size=200x200`} />
        </div>
    )
};

export default AppIntranetLeftGallery