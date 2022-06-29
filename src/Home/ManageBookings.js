import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cars from './Cars';
import './ManageBooking.css'
import useAllCar from '../hooks/useAllCar';

const ManageBookings = () => {

    const [booking, setBooking] = useState({})


    const [allcar] = useAllCar()
    console.log();
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/cars/${id}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [id])



    return (
        <div className='cars-info-component'>
            {
                   allcar.map(allcars=><Cars
                    allcars={allcars} 
                   ></Cars>
                   )
            }
        </div>
    );
};

export default ManageBookings;