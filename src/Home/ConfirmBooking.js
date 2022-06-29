import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';



const ConfirmBooking = () => {
    const [user] = useAuthState(auth)
    const [orderConfirm, setOrderConfirm] = useState([])
    console.log(orderConfirm);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/confirmbooking/${id}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])


    
    // useEffect(() => {
    //     const getConfirmOrder = async () => {

    //         const email = user.email
    //         const url = `http://localhost:5000/confirmbooking?email=${email}`
    //         const { data } = await axios.get(url, {
    //             headers: {
    //                 'content-type': 'application/json'
    //             }
    //         })

    //         setOrderConfirm(data)
    //     }
    //     getConfirmOrder()
    // }, [user])

    // const [user] = useAuthState(auth)
    // console.log(user);

    
    const { id } = useParams()
    // console.log(id);
    // const [product] = useProducts()
    const singleOrderConfirm = orderConfirm.find((orderConfirm) => orderConfirm._id == id)
    console.log(singleOrderConfirm);

    return (

        <div>
            <div class="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <td>Booking Id</td>
                            <td>Car Name</td>
                            <td>Price</td>
                            <td>Payable `Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            orderConfirm.map(orderConfirm => <tr>
                                <td>{orderConfirm._id}</td>
                                <td>{orderConfirm.name}</td>
                                <td>{orderConfirm.bodyType}</td>
                                <td>{orderConfirm.to}</td>
                                <td>{orderConfirm.from}</td>
                                <td>{orderConfirm.back}</td>
                                <td></td>
                            </tr>)
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ConfirmBooking;