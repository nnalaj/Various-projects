import React from 'react';
import './main.scss'
import { Meteor } from 'meteor/meteor';
import {RouterProvider} from 'react-router-dom';
import reactDom from 'react-dom/client';
import {Router} from './imports/ui/Router.jsx'; 

//TODO: implement error landing page (done)
//TODO: impoment router ( possibly done)

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
