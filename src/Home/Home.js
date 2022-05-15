import React from 'react';
import Booking from './Booking';
import Footer from './Footer';
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