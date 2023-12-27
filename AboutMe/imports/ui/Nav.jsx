import React from "react";
import NNALAJ from "./NNALAJ";

export default Nav = () => {

   //simple grid for now need to find a way to animate the secontions or something(Done, could use more work)
   //TODO: link resume or add resume component somehow (working on)
   //TODO: link video installation works
   //TODO: link soundcould (but clean it first)
   //TODO: link youtube (also maybe clean this or make more videos first)
   //TODO: implement router
   
    return (
        <div className = "homeGrid">
            <section >
                <div className = "cell" ></div>
            </section>
            <section>
            <div className = "cell"><a href = "./"></a></div>
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