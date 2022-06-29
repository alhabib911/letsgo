import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import './Cars.css'
import { VscArrowSwap } from 'react-icons/vsc';
import useOrder from '../hooks/useOrder';
import { toast, ToastContainer } from 'react-toastify';


const Cars = ({ allcars  }) => {
    const navigate = useNavigate()
        const { id } = useParams()


    const handelConfirmOrder = event => {
        event.preventDefault()
        const from = event.target.from.value
        const to = event.target.to.value
        const go = event.target.go.value
        const back = event.target.back.value
        const name = event.target.name.value
        const bodyType = event.target.bodyType.value
        const seatCapacity = event.target.seatCapacity.value
        const manufactureYear = event.target.manufactureYear.value

        const confirmOrderDetails = { from, to, go, back, name, bodyType, seatCapacity, manufactureYear }

        fetch('http://localhost:5000/confirmbooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(confirmOrderDetails)
            
        })
        
        .then(res => res.json())
        .then((data) => {
            toast('Order Confirm');
            // navigate(`/confirmbooking/${data.insertedId}`)
            event.target.reset()
        })
        
    }
    
    // 
    const { _id } = allcars
    const [order] = useOrder()
    
    
    
    return (
        <div className="booking-info">
            <div className='booking-details'>
                <div className="trip-catagory-info">
                    
                </div>
                <div className="vehicle-details">
                    <div className="car-img">
                    <p>{order.tripcatagory}</p>
                        <img src={allcars.img} alt="" />
                        <h2>{allcars.name}</h2>
                    </div>
                    <div className="car-details">
                        <p>Body Type: {allcars.bodyType}</p>
                        <p>Seat Capacity: {allcars.seatCapacity}</p>
                        <p>Manufacture Year: {allcars.manufactureYear}</p>
                    </div>
                </div>
                <div className="location-info">
                    <p>{order.from}</p>
                    <VscArrowSwap></VscArrowSwap>
                    <p>{order.to}</p>

                </div>
                <div className="date-time">
                    <p>Journey Date & Time: {order.go}</p> <br />
                    <p>Return Date & Time: {order.back}</p>
                    <form onSubmit={handelConfirmOrder} className='add-field'>
                        <input type="hidden" value={order.from} name="from" placeholder='User Name' required  />
                        <input type="hidden" value={order.to} name="to" placeholder='User Name' required  />
                        <input type="hidden" value={order.go} name="go" placeholder='User Name' required  />
                        <input type="hidden" value={order.back} name="back" placeholder='User Name' required  />
                        <input type="hidden" value={allcars.name} name="name" placeholder='User Name' required  />
                        <input type="hidden" value={allcars.bodyType} name="bodyType" placeholder='User Name' required  />
                        <input type="hidden" value={allcars.seatCapacity} name="seatCapacity" placeholder='User Name' required  />
                        <input type="hidden" value={allcars.manufactureYear} name="manufactureYear" placeholder='User Name' required  />
                            <input  className='submit-btn' type="submit" value="Select"  />
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Cars;