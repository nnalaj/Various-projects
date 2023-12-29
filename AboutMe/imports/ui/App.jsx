import React from 'react';
import Home from './Home.jsx';
import {Tracker} from 'meteor/tracker'; //implement this to refresh the video component after x time
import { Route, Routes } from 'react-router-dom';

//TODO: determine if i still need this (not sure)

const App = () => {
  
  return (

    <Routes>
      <Route path='/home' element={<Home />} />
    </Routes>

  // <div className="content">
  //     <Home />
  //   </div>
  );
};

export default App;


