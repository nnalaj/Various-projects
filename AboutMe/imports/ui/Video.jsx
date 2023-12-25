import React from "react";
import Heading from "./NNALAJ";

// setup a way to make videos suffle in the background
// TODO: locate that video you made for video 2 and put it in the background (it was cool)
// TODO: locate that 3d scene you made for video 2 and put it in the background too (it was also cool)
// TODO: add the video installations from video 2 (those were cool)


export default Video = () =>{

    const playlist = []
   
    playlist.push ("./videos/ollie.mp4")
    playlist.push ("./videos/00530.mp4")
    playlist.push ("./videos/20210109 big tree fire.mp4")
    playlist.push ("./videos/bs polejam.mp4")
    playlist.push ("./videos/half-cab heel.mp4")

    // playlist.push ("https://photos.app.goo.gl/urxPduhixi66LG159") need to figure this out to get size down
    // playlist.push ("https://photos.app.goo.gl/fEmdwuzGhLvnmcLW6") this gave me access restricted when loaded on the page
    // playlist.push ("https://photos.app.goo.gl/LQmrxey7HnNTGMBs6") shared link from google. might need to be careful

    function randomInt() {    //random num gen
        var i = 0
        var max = 5
        i = Math.floor(Math.random() * max);
        
        return i;
    }
    
    
    return(
            <div className="video-background">
                <video src= {playlist[randomInt()]} type='video/mp4' autoPlay loop muted/> {/*need to find a way to loop on video end */}
            </div>
    );
};