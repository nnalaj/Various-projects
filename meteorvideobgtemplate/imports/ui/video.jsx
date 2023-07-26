import React from "react";


export default Video = () =>{

    return(
        <div className='content'>
            <div className="video-background">
                <video src="/ollie.mp4" type='video/mp4' autoPlay loop muted/>

            </div>
        </div>
    );
};