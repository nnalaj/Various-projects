import React from 'react';
import Video  from './Video.jsx';
import NNALAJ from './NNALAJ.jsx'; 
import {Tracker} from 'meteor/tracker'; //implement this to refresh the video component after x time


//let navigate = useNavigate();

const App = () => {
  return (
    <div className="content">
      <Video/>  {/*background video */}
      <NNALAJ />
    </div>
  );
};

export default App;


