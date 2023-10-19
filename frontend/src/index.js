import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>            
      <Routes>          
          <Route path="/" element={ <Home />} />
          <Route path="/login" element={ <Login />} />
          <Route path='/profile' element={ <Profile />} />
      </Routes>     
    </BrowserRouter>
  </React.StrictMode>
);
