import React from "react";
import NNALAJ from "./NNALAJ";

export default Nav = () => {

   //simple grid for now need to find a way to animate the secontions or something
   
    return (
        <div className = "homeGrid">
            <section >
                <div className = "cell" >Sounds</div>
            </section>
            <section>
                <div className = "cell">Resume</div>
            </section>
            <section>
                <div className = "cell">GitHub</div>
            </section>
            <section>
                <div className = "cell">Video Works</div>
            </section>
            <section>
                <NNALAJ />
            </section>
            <section>
                <div className = "cell">rename</div>
            </section>
            <section>
                <div className = "cell">rename</div>
            </section> 
        </div>
    );
};