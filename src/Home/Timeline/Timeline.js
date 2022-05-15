import React from 'react';
import TopBanner from './TopBanner';
import './Timeline.css'
import Offers from './Offers';

const Timeline = () => {
    return (
        <div className='timeline-bg'>
            <TopBanner></TopBanner>
            <Offers></Offers>
            
        </div>
    );
};

export default Timeline;