import React from 'react';
import ReactPlayer from 'react-player';

let vid_url = "/public/ollie.mp4"

//reactplayer version of the video player. couldn't quite figure this out but the video tag is easier

export default VideoBackground = () => {
  return (
    
      <div className="content">
      {/* <div className="video-background">
      <ReactPlayer
       
        url={vid_url}
        playing={true}
        loop={true}
        muted={true}
        controls={false}
        width="100%"
        height="100%"
        src= {vid_url}
      />
    </div> */}
    </div>
  );
};

