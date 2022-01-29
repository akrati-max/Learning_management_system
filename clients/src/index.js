import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import PageNotFound from './components/PageNotFound';
import Learn from './components/Learn';



ReactDOM.render(
   <BrowserRouter>
   
   <Routes>
         <Route path='/' element={<App />}>
          <Route path='home' element={<Home />}/>
          <Route path='SignIn' element={<SignIn />}/>          
          <Route path='SignUp' element={<SignUp />}/> 
          <Route path='learn' element={<Learn />}/>          
          <Route path='*' element={<PageNotFound />}/>          

          </Route>
          
         
       </Routes>
   </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

