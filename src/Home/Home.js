import React, { useEffect } from 'react';
import Booking from './Booking';
import Timeline from './Timeline/Timeline';

const Home = ({setBooking}) => {
    useEffect(() => {
        setBooking([])
   }, [])
    return (
        <div>
            <Booking></Booking>
            <Timeline></Timeline>
        </div>
    );
};

export default Home;