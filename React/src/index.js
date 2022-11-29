import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Location from "./Pages/Location";
import Details from "./Pages/Details";
import Confirm from "./Pages/Confirm";
import Times from "./Pages/Times";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <BrowserRouter>
       <Routes>
            <Route path="/" element={<App />} />
            <Route path="location" element={<Location />} />
            <Route path="location/times" element={<Times />} />
            <Route path="location/times/details" element={<Details />} />
            <Route path="location/times/details/confirm" element={<Confirm />} />
       </Routes>
   </BrowserRouter>

);
