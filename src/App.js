import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import "./index.css";
import Header from './Components/header/Header';
import Home from './Components/Layout/Home';
import Footer from './Components/Layout/Footer';


function App () {
  return (
   <>
   <Router>
   <Header spacing={"16"} />
    <Routes>
      <Route  path="/" element={<Home/>}/>

    </Routes>
    <Footer/>
   </Router>
   </>
  )
}

export default App
