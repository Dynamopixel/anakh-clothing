import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/home/Home"
import Men from "../pages/menspage/Men"
import Women from "../pages/womenpage/Women"
import NewArrivals from "../components/new-arrival/NewArrivals"
import Contact from "../pages/contact/Contact"
import Shop from "../pages/shop/Shop"


const Approutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/new-arrival' element={<NewArrivals/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/contact-us' element={<Contact/>} />

        <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} />
    </Routes>
  )
}

export default Approutes