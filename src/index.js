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
  <React.StrictMode>
   <BrowserRouter>
       <Routes>
            <Route path="/" element={<App />} />
            <Route path="location" element={<Location />} />
            <Route path="times" element={<Times />} />
            <Route path="details" element={<Details />} />
            <Route path="confirm" element={<Confirm />} />
       </Routes>
   </BrowserRouter>
  </React.StrictMode>
);
