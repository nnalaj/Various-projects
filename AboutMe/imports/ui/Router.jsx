import React from 'react'
import Resume from "./Resume";
import Installs from "./Installs";
import Home from "./Home";
import ErrorPage from "./ErrorPage"
import { createBrowserRouter } from "react-router-dom";


export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
        children: [
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
              {
                path: "/resume",
                element: <Resume />,
                errorElement: <ErrorPage />
              }, 
        ],
      errorElement: <ErrorPage />    
    }
  ]);
