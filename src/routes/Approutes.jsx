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
import ProductDetails from '../pages/product-info/ProductDetails';


const Approutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />

      {/* 👇 dynamic route for filtering */}
      <Route path='/shop/:category' element={<Shop />} />

      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/product' element={<ProductDetails />} />
      <Route path='/:name' element={<ProductDetails />} />
      

      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  )
}

export default Approutes