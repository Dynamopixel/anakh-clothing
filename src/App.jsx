import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MyNavbar from './components/navbar/MyNavbar';
import Footer from "./components/footer/Footer"
import Approutes from './routes/Approutes';

const App = () => {

  return (
    <Router>
      <MyNavbar/>
      <Approutes/>
      <Footer/>
    </Router>

  )
}

export default App