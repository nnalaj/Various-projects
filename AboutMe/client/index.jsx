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
import {Router} from '../imports/ui/Router.jsx'; // 

//TODO: implement error landing page (done)
//TODO: impoment router ( finally done)

Meteor.startup(() => {

  reactDom.createRoot(document.getElementById('react-target')).render(   //have react-dom connect to react-target
  <RouterProvider router = {Router} />  //render the app by taking the router to the app route
   )
  
  
   // const container = document.getElementById('react-target');
  // const root = createRoot(container);
  // <BrowserRouter>      
  //   <App />        no longer needed but good to have just in case router falls through
  // </BrowserRouter>

});
