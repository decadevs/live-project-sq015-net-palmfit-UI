import React from 'react';
import '../styles/SignUpPage1.css';
import SignUpBanner from '../images/SignUpBanner.svg';


function SignUpPage1() {
    return (
        <div className="wrapper">
            <form action="" id="signup-form">
                <section>
                    <div className="inner">
                        <div className="image-holder">
                            <img src={SignUpBanner} alt="" height="600vh" width="100%" />
                        </div>
                        <div className="form-content">
                            <div className="form-header">
                                <h3 id="SignUp-H3">Register for Palmfit</h3>
                            </div>

                            <div className="form-row">
                                <div className="form-holder">
                                    <label><b>First name</b></label>
                                    <input type="text" placeholder="Enter your first name" className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-holder">
                                    <label><b>Last name</b></label>
                                    <input type="text" placeholder="Enter your last name" className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-holder">
                                    <label><b>Email address</b></label>
                                    <input type="text" placeholder="Enter your email" className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-holder">
                                    <label><b>Password</b></label>
                                    <input type="password" placeholder="Enter your password" className="form-control" />
                                    <small> Must have uppercase, lowercase, number, special character.</small>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-holder">
                                    <label><b>Verify password</b></label>
                                    <input type="password" placeholder="Verify your password" className="form-control" />
                                </div>
                            </div>

                            <div className="checkbox-circle">
                                <label>
                                    <input type="checkbox" />
                                    <small>I have read and understand the <a href="#">privacy policy</a> and <a href="#">terms and conditions</a></small>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="form-row">
                                <div className="form-holder">
                                    <button className="btn btn-success form-control" type="submit" style={{ backgroundColor: 'rgb(26,141,141)', color: 'white', marginTop: '2vh' }}>Register</button>
                                </div>
                            </div>
                            <div className="form-holder" style={{ textAlign: 'center' }}>
                                <label>
                                    <small><b> Already have an account? <a href="#">Login</a></b></small>
                                </label>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    );
}

export default SignUpPage1;
