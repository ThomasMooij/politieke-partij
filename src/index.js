import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, Juridisch, Seconomisch, Scultureel} from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App/> } />
      <Route path='/Jur' element={ <Juridisch/> } />
      <Route path='/Eco' element={ <Seconomisch/> } />
      <Route path='/Cult' element={ <Scultureel/> } />
    </Routes>
  </BrowserRouter>
)