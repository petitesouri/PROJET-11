import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Header from './Components/Header';
import Footer from './Components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <BrowserRouter>  
      <Header />          
      <Routes>          
          <Route path="/" element={ <Home />} />
          <Route path="/login" element={ <Login />} />
          <Route path='/profile' element={ <Profile />} />
      </Routes> 
      <Footer />    
    </BrowserRouter>    
  </React.StrictMode>
);
