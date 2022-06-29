import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Home/AboutUs';
import CarAlbum from './Home/CarAlbum';
import ContactUs from './Home/ContactUs';
import Home from './Home/Home';
import NotFoundPage from './Home/NotFoundPage';
import Login from './Authentication/Login';
import Register from './Authentication/Register'
import Navbar from './Home/Navbar';
import Footer from './Shared/Footer'
import ManageBookings from './Home/ManageBookings';
import { useState } from 'react';
import Cars from './Home/Cars';
import ConfirmBooking from './Home/ConfirmBooking';
import Dashboard from './Dashboard/Dashboard';
import MyProfile from './Dashboard/MyProfile';
import RequereAuth from './Authentication/RequereAuth/RequereAuth';
import MyProfileEdit from './Dashboard/MyProfileEdit';
import MyBooking from './Dashboard/MyBooking';
import RequereCustomer from './Authentication/RequereAuth/RequereCustomer';
import AddNewCar from './Dashboard/AddNewCar';

function App() {
  const [booking, setBooking] = useState({})

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home setBooking={setBooking}></Home>}></Route>
        <Route path='/home' element={<Home setBooking={setBooking}></Home>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/managebookings/:id' element={<ManageBookings></ManageBookings>}></Route>
        <Route path='/confirmbooking/:selectid' element={<ConfirmBooking></ConfirmBooking>}></Route>
        <Route path='/cars' element={<Cars></Cars>}></Route>
        <Route path='/album' element={<CarAlbum></CarAlbum>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/dashboard' element={<RequereAuth>
          <Dashboard></Dashboard>
        </RequereAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='profile/edit' element={<MyProfileEdit></MyProfileEdit>}></Route>
          <Route path='mybooking' element={<MyBooking></MyBooking>}></Route>
          <Route path='addcar' element={<AddNewCar></AddNewCar>}></Route>
          
        </Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
