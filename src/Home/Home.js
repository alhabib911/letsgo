import React from 'react';
import Footer from '../Shared/Footer';
import Booking from './Booking';
import Navbar from './Navbar';
import Timeline from './Timeline/Timeline';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Booking></Booking>
            <Timeline></Timeline>
            <Footer></Footer>
        </div>
    );
};

export default Home;