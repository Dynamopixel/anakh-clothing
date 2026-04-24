import React from 'react'
import { Route, HashRouter } from 'react-router-dom';
import MyNavbar from './components/navbar/MyNavbar';
import Footer from "./components/footer/Footer"
import Approutes from './routes/Approutes';

const App = () => {

  return (
    <HashRouter>
      <MyNavbar/>
      <Approutes/>
      <Footer/>
    </HashRouter>

  )
}

export default App