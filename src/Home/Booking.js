import React from 'react';
import bg from '../image/background/bg.png'
import './Booking.css'
import { AiFillCalendar } from 'react-icons/ai';


const Booking = () => {
    return (
        <div>
            <div className='bg'
                style={{
                    backgroundImage: `url(${bg})`
                }}
            ></div>
            <div className="booking-field">
                <div className="form">
                    <div className='booking'>
                        <div className="booking-title">
                            <h2>Choose Your Plan</h2>
                        </div>
                    </div>
                    <div className='booking-form'>
                        <form>
                            <div className="booking-form-field">
                                <div className="location gap-2">
                                    <div className="picup-location">
                                        <h2>FROM</h2>
                                        <select class="select-bordered">
                                            <option disabled selected>Select a city</option>
                                            <option>Star Wars</option>
                                            <option>Harry Potter</option>
                                            <option>Lord of the Rings</option>
                                            <option>Planet of the Apes</option>
                                            <option>Star Trek</option>
                                        </select>
                                        <p>Click to choose your Location</p>
                                    </div>
                                    <div className="drop-location">
                                        <h2>TO</h2>
                                        <select class="select-bordered">
                                            <option disabled selected>Select a city</option>
                                            <option>Star Wars</option>
                                            <option>Harry Potter</option>
                                            <option>Lord of the Rings</option>
                                            <option>Planet of the Apes</option>
                                            <option>Star Trek</option>
                                        </select>
                                        <p>Click to choose your Location</p>
                                    </div>
                                </div>
                                <div className="date gap-2">
                                    <div className='date'>
                                        <div className="journey-date">
                                            <h2>Journey Date</h2>
                                            <div className='calender'>
                                                <input type="text" name="journey-date" id="" placeholder='Journey Date' />
                                                <div className="calender-icon">
                                                    <AiFillCalendar></AiFillCalendar>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="return-date">
                                            <h2>Return Date</h2>
                                            <div className="calender">
                                                <input type="text" name="return-date" id="" placeholder='Return-Date' />
                                                <div className="calender-icon">
                                                    <AiFillCalendar></AiFillCalendar>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='time'>

                                    </div>
                                </div>
                            </div>
                            <div className="search-btn">
                                <input type="submit" value="Search" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;