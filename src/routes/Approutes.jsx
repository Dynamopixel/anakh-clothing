import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/home/Home"
import Men from "../pages/menspage/Men"
import Women from "../pages/womenpage/Women"
// import NewArrivals from "../components/new-arrival/NewArrivals"
import Contact from "../pages/contact/Contact"
import Shop from "../pages/shop/Shop"
import ArrivalPage from '../pages/arrival-menu-page/ArrivalPage';
import Pagenotfound from '../pages/Pagenotfound';
import Cart from '../pages/cartpage/Cart';


const Approutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/new-arrival' element={<ArrivalPage/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/contact' element={<Contact/>} />
        

        <Route path="*" element={<Pagenotfound/>} />
    </Routes>
  )
}

export default Approutes