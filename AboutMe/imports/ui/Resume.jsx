import React from "react";

//add resume details and have them output in a block on the screen
//add headshot or something
//maybe add icons to social links


export default Resume =() =>{
    
    const resumeData = {
        summary:"Current Winthrop student studying Digital Information and Web Application Design looking to start a career in web application development.",
        summary2: "Winthrop University has provided me with strong foundational knowledge of web design concepts and my time at York Technical College yielded an intermediate understanding of object oriented languages (Java and C#).",
        summary3: "I am looking to apply and sharpen these skills  to start my career developing exciting software. Expected to graduate in Spring 2024. ",
        skills:  "<div>???</div>",
        work: " ",
        github: "https://github.com/nnalaj",
        ig: "https://instagram.com/nnnalaj", 
        email: "jalannlittle923@gmail.com ", 

    }

    return(
        <div className='ResumeBlock'>
            <div className='ResumeContent'>
                <h2 className="ResumeHeader">Jalann Little</h2>
                <img className="ResumeImage" />
                <h2>Skills:</h2>
                <table>
                    <tr>
                        <span>{resumeData.skills} </span>
                    </tr>
                </table>
                <a href = {resumeData.ig}>Insta</a>|<a href = {resumeData.github}>github </a>|<a href = {resumeData.email}>email me</a>
            </div>
        </div>
    )
}