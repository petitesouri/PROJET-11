import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Header from './Components/Header';
import Footer from './Components/Footer';

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers/index";

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>  
    <Provider store={store}>  
    <BrowserRouter>  
      <Header />          
      <Routes>          
          <Route path="/" element={ <Home />} />
          <Route path="/login" element={ <Login />} />
          <Route path='/profile' element={ <Profile />} />
      </Routes> 
      <Footer />    
    </BrowserRouter>
    </Provider>    
  </React.StrictMode> 
);
