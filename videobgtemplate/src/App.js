import React from 'react';
import ReactPlayer from 'react-player';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <ReactPlayer
        url="./public/tercel ollie.mp4"
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
      />
      <div className="content">
        <h1>Weclome</h1>
        <p>proof</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <VideoBackground />
    </div>
  );
}

export default App;

