import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg  bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Palmfit</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Calorie Counter</a>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link">Sign-in</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/sign-up" className="btn text-white" style={{backgroundColor: 'teal'}}>Get Started</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    )
}
export default Header;