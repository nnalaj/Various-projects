import React from 'react';
import ReactPlayer from 'react-player';

let vid_url = "https://drive.google.com/file/d/1c0kJkJzk66YrZsmxqURMV3xyieIi2fat/preview"


export default VideoBackground = () => {
  return (
    <div className="video-background">
      <ReactPlayer
       
        url={vid_url}
        playing={true}
        loop={true}
        muted={true}
        controls={false}
        width="100%"
        height="100%"
      />
      <div className="content">
        <h1>NNALAJ</h1>
      </div>
    </div>
  );
};

