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

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/album' element={<CarAlbum></CarAlbum>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
