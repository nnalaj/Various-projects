import React from 'react';
import Heading from './NNALAJ.jsx';
import Video  from './Video.jsx';
 
import {useNavigate} from 'react-router-dom'

//let navigate = useNavigate();

const App = () => {
  return (
    <div className="content">
      <Video/>  {/*the video component- also has the main content div */}
      <Heading />
    </div>
  );
};

export default App;


