import React from 'react';
import topbanner from '../../image/banner/top-banner.jpg'
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className='firstbanner'>
            <div className='topbanner'>
                <img src={topbanner} alt="" />
            </div>
        </div>
    );
};

export default TopBanner;