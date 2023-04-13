import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./css/utilis.css"
import App from './App';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import About from './About';
import Admissions from './Admissions';
import Calender from './Calender';
import Careers from './Careers';
import Contact from './Contact';
import Gallary from './Gallary';
import Pcpa_Blog from './Pcpa_Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/about",
    element:  <About />,
  },
  {
    path: "/admissions",
    element:  <Admissions />,
  },
  {
    path: "/calender",
    element:  <Calender />,
  },
  {
    path: "/careers",
    element:  <Careers />,
  },
  {
    path: "/contact",
    element:  <Contact />,
  },
  {
    path: "/gallary",
    element:  <Gallary />,
  },
  {
    path: "/Pcpa_Blog",
    element:  <Pcpa_Blog />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

