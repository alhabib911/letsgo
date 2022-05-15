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
                                    <select class="select select-bordered">
                                        <option disabled selected>FROM</option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                        <option>Planet of the Apes</option>
                                        <option>Star Trek</option>
                                    </select>
                                    <select class="select select-bordered">
                                        <option disabled selected>TO</option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                        <option>Planet of the Apes</option>
                                        <option>Star Trek</option>
                                    </select>
                                </div>
                                <div className="date-time gap-2">
                                    <div className='date'>
                                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                        <AiFillCalendar></AiFillCalendar>
                                    </div>

                                    <div className='time'>
                                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
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