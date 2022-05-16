import React from 'react';
import TopBanner from './TopBanner';
import './Timeline.css'
import Offers from './Offers';
import FooterBanners from './FooterBanners';

const Timeline = () => {
    return (
        <div className='timeline-bg'>
            <TopBanner></TopBanner>
            <Offers></Offers>
            <FooterBanners></FooterBanners>
        </div>
    );
};

export default Timeline;