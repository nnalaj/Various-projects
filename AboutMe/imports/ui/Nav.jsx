import React from "react";
import NNALAJ from "./NNALAJ";

export default Nav = () => {

   //simple grid for now need to find a way to animate the secontions or something
   //TODO: link resume or add resume component somehow
   //TODO: link video installation works
   //TODO: link soundcould (but clean it first)
   //TODO: link youtube (also maybe clean this or make more videos first)
   
    return (
        <div className = "homeGrid">
            <section >
                <div className = "cell" ></div>
            </section>
            <section>
                <div className = "cell">Resume</div>
            </section>
            <section>
                <div className = "cell">
                    <a href ="https://github.com/nnalaj">GitHub</a> </div>
            </section>
            <section>
                <div className = "cell"></div>
            </section>
            <section>
                <NNALAJ />
            </section>
            <section>
                <div className = "cell"></div>
            </section>
            <section>
                <div className = "cell"></div>
            </section> 
        </div>
    );
};