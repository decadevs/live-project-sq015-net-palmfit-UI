import React from "react";
import "../styles/error.css";
import {useNavigate} from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()
    return(
        <div className="tab">
        <div className="text-overlay">
        <div className="slanted-text"><span style={{ color: "gray"}}>404 <br/>ERROR</span>
        <p className="para">Want to lose more calories<br/>
         become a developer<br/> or<br/> click <button onClick={()=>navigate(-1)} className="link">here</button> to go back</p>
        </div>
        </div>

        <div className="error">
        <img alt="errorimg" src="./ErrorPage1.png" className="full-screen-image" />
        </div>
        </div>
    );
}

export default ErrorPage;