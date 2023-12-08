import React from "react";

//add resume details and have them output in a form


export default Resume =() =>{
    
    const resumeData = {
        summary:" ",
        skills: " ",
        work: " ",
        workDetails: " ",
        github: "https://github.com/nnalaj",
        ig: "https://instagram.com/nnnalaj", 
        email: "jalannlittle923@gmail.com ", 

    }

    return(
        <div className='ResumeBlock'>
            <div className='ResumeContent'>
                <h2 className="ResumeHeader">Jalann</h2>
                
            </div>
        </div>
    )
}