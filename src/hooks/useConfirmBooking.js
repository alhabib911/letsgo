// import { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../firebase.init';
// import axios from 'axios';

// const useConfirmBooking = () => {
//     const [user] = useAuthState(auth)
//     const [orderConfirm, setOrderConfirm] = useState([])
//     useEffect(() => {
//         const getConfirmOrder = async () => {

//             const email = user.email
//             const url = `http://localhost:5000/confirmbooking?email=${email}`
//             const { data } = await axios.get(url, {
//                 headers: {
//                     'content-type': 'application/json'
//                 }
//             })
//             setOrderConfirm(data)
//         }
//         getConfirmOrder()
//     }, [user])
//     return [orderConfirm, setOrderConfirm];
// };

// export default useConfirmBooking;