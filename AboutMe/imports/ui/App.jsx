import React from 'react';
import Home from './Home.jsx';
import {Tracker} from 'meteor/tracker'; //implement this to refresh the video component after x time


//let navigate = useNavigate();

const App = () => {
  return (
    <div className="content">
      <Home />
    </div>
  );
};

export default App;


