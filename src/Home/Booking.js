import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../image/background/bg.png'
import './Booking.css'


const Booking = () => {
    const [booking, setBooking] = useState([])
    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const navigate = useNavigate()

    const handelTripDetails = event => {
        event.preventDefault()
        const go = event.target.go.value
        const back = event.target.back.value
        const tripcatagory = event.target.tripcatagory.value

        const booking = { from, to, go, back, tripcatagory }
        setBooking(booking)
        // console.log(booking);

        fetch('http://localhost:5000/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then((data) => {
                navigate(`/managebookings/${data.insertedId}`)
                event.target.reset()
            })

        if (setBooking) {
            
        }

    }
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
                        <form onSubmit={handelTripDetails} >
                            <div required className="form-control">
                                <div className="one-way">
                                    <label for="one-way">One Way</label><br />
                                    <input type="radio" id="one-way" name="tripcatagory" value="One-Way" />
                                </div>
                                <div className="round-way">
                                    <label for="round-way   ">Round Way</label><br />
                                    <input type="radio" id="round-way" name="tripcatagory" value="Round-Way" />
                                </div>

                            </div>
                            <div className="booking-form-field">
                                <div className="location gap-2">
                                    <div className="picup-location">
                                        <h2>FROM</h2>
                                        <select value={from} onChange={event => setFrom(event.target.value)} required>
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
                                        <select value={to} onChange={event => setTo(event.target.value)} >
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
                                                <input type="datetime-local" name="go" id="" required />
                                                <p>Click to choose your Journey Date</p>
                                            </div>
                                        </div>
                                        <div className="return-date">
                                            <h2>Return Date</h2>
                                            <div className="calender-field">
                                                <input type="datetime-local" name="back" id="" />
                                                <p>Click to choose your Journey Date</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="search-btn">

                                <input  from={from} className='submit-btn' type="submit" value="Search" />

                            </div>

                        </form>
                    </div>
                </div>
            </div >


        </div >
    );
};

export default Booking;