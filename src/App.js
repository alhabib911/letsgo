import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Home/AboutUs';
import CarAlbum from './Home/CarAlbum';
import ContactUs from './Home/ContactUs';
import Home from './Home/Home';
import NotFoundPage from './Home/NotFoundPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/album' element={<CarAlbum></CarAlbum>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
