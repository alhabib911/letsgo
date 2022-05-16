import React, { useState } from 'react';
import bg from '../image/background/bg.png'
import './Booking.css'
import DatePicker from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
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
                            <div class="form-control">
                                <select class="select select-ghost w-full max-w-xs">
                                    <option disabled selected>Trip Catagory</option>
                                    <option>One Way</option>
                                    <option>Round Way</option>
                                </select>
                            </div>
                            <div className="booking-form-field">
                                <div className="location gap-2">
                                    <div className="picup-location">
                                        <h2>FROM</h2>
                                        <select class="select-bordered">
                                            <option disabled selected>Select a city</option>
                                            <option>Dhaka</option>
                                            <option>Barisal</option>
                                            <option>Chittagong</option>
                                            <option>Khulna </option>
                                            <option>Mymensingh </option>
                                            <option>Rajshahi  </option>
                                            <option>Sylhet  </option>
                                        </select>
                                        <p>Click to choose your Location</p>
                                    </div>
                                    <div className="drop-location">
                                        <h2>TO</h2>
                                        <select class="select-bordered">
                                            <option disabled selected>Select a city</option>
                                            <option>Dhaka</option>
                                            <option>Barisal</option>
                                            <option>Chittagong</option>
                                            <option>Khulna </option>
                                            <option>Mymensingh </option>
                                            <option>Rajshahi  </option>
                                            <option>Sylhet  </option>
                                        </select>
                                        <p>Click to choose your Location</p>
                                    </div>
                                </div>
                                <div className="date gap-2">
                                    <div className='date'>
                                        <div className="journey-date">
                                            <h2>Journey Date</h2>
                                            <div className="calender-field">
                                                <div className="calender">
                                                    <DatePicker placeholder='Select Date'
                                                        inputClass="custom-input"
                                                    />
                                                </div>
                                                <p>Click to choose your Journey Date</p>
                                            </div>
                                        </div>
                                        <div className="return-date">
                                            <h2>Return Date</h2>
                                            <div className="calender-field">
                                                <div className="calender">
                                                    <DatePicker placeholder='Select Date'
                                                        inputClass="custom-input"
                                                    />
                                                </div>
                                                <p>Click to choose your Journey Date</p>
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
            </div >
        </div >
    );
};

export default Booking;