import React from "react";
import NNALAJ from "./NNALAJ";
import {Outlet , Link} from "react-router-dom";
import Installs from "./Installs.jsx"

export default Nav = () => {

   //simple grid for now need to find a way to animate the secontions or something(Done, could use more work)
   //TODO: link resume or add resume component somehow (working on)
   //TODO: link video installation works (working on)
   //TODO: link soundcould (but clean it first)
   //TODO: link youtube (also maybe clean this or make more videos first)
   //TODO: implement router OR use useState to render components on button/link click (working on)
   
    return (
        <div className = "homeGrid">
            <section >
                <div className = "cell" ></div>
            </section>
            <section>
                <div className = "cell">
                    <Link to="/">Home</Link>
                    {/* <a href = "./">Resume</a> */}
                </div>
            </section>
            <section>
                <div className = "cell">
                    <a href ="https://github.com/nnalaj">GitHub</a>
                </div>
            </section>
            <section>
                <div className = "cell">
                    <Link to="./">Installs</Link>    
                </div>
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
        
         <Outlet />
        </div>

       
    );
};