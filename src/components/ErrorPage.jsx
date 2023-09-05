import React from "react";
import "../styles/error.css";

const ErrorPage = () => {
    return(
        <div className="tab">
        <div className="text-overlay">
        <div className="slanted-text"><span style={{ color: "gray"}}>404 <br/>ERROR</span>
        <p className="para">Want to lose more calories<br/>
         beacome a developer<br/> or<br/> click <a className="link">here</a> to go back</p>
        </div>
        </div>


        <div className="vertical-line"></div>


        <div className="error">
        <img alt="errorimg" src="./ErrorPage1.png" className="full-screen-image" />
        </div>
        </div>
    );
}

export default ErrorPage;