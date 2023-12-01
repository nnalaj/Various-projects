import React from "react";
import Heading from "./NNALAJ";

// setup a way to make videos suffle in the background

export default Video = () =>{

    const playlist = []
    var i = 0
    playlist.push ("./ollie.mp4")
    playlist.push ("./00530.mp4")
    playlist.push ("./20210109 big tree fire.mp4")

    //random num gen soon
    
    return(
            <div className="video-background">
                <video src= {playlist[2]} type='video/mp4' autoPlay loop muted/>
            </div>
    );
};