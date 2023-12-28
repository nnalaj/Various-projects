import React from 'react';
import './main.scss'
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import  App  from '../imports/ui/App';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../imports/ui/Home';
import ErrorPage from '../imports/ui/ErrorPage';
import reactDom from 'react-dom/client';
import Installs from '../imports/ui/Installs';

//TODO: implement error landing page (done)

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/installs",
    element: <Installs />,
    errorElement: <ErrorPage />
  }, 
  
]);

Meteor.startup(() => {

  reactDom.createRoot(document.getElementById('react-target')).render(   //have react-dom connect to react-target

      <RouterProvider router = {Router} /> 
    
                                   //render the router instead of the app?
  )
  // const container = document.getElementById('react-target');
  // const root = createRoot(container);
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>

});
