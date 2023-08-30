import React, { useState, useEffect } from 'react';
import '../../styles/validateOTP.css';
import SignUpBanner from '../../images/SignUpBanner.svg';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
//import jwtDecode from 'jwt-decode';

function OTPValidationPage() {
    const navigate = useNavigate()
    const [otpValues, setOTPValues] = useState(["", "", "", "", "", ""]);
    const [validationResult, setValidationResult] = useState(null);
    const [email, setEmail] = useState('');

    useEffect(() => {
       const email = localStorage.getItem('email')
        setEmail(email)
        // const decodedJwt = jwtDecode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ2aWN0b3JvY2hlekBnbWFpbC5jb20iLCJlbWFpbCI6InZpY3Rvcm9jaGV6QGdtYWlsLmNvbSIsImp0aSI6IjFhMDY5MDBiLTg1MTUtNGZmNy05MThhLTA5NzJkZmIwZGVlYiIsImV4cCI6MTY5MzE2OTg2MH0.L-e7ihzuRKWxIwcoFbGGtjWuuB_HFY2ySZyuSnYNL5U');
        // if (decodedJwt.email) {
        //   setEmail(decodedJwt.email);
        // }
    }, []);

    const handleOTPChange = (index, value) => { 
        if (!isNaN(value) && value.length <= 1) {
            const newOTPValues = [...otpValues];
            newOTPValues[index] = value;
            setOTPValues(newOTPValues);

            if (value === "" && index > 0) {
                const prevInput = document.getElementById(`otp-input-${index - 1}`);
                if (prevInput) {
                    prevInput.focus();
                }
            }

            if (index < otpValues.length - 1 && value !== "") {
                const nextInput = document.getElementById(`otp-input-${index + 1}`);
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    };

    const handlePaste = (event) => {
        event.preventDefault();
        const pastedData = event.clipboardData.getData('text');
        
        if (/^\d{6}$/.test(pastedData)) {
            const newOTPValues = Array.from(pastedData);
            setOTPValues(newOTPValues);

            newOTPValues.forEach((value, index) => {
                if (index < otpValues.length - 1 && value !== "") {
                    const nextInput = document.getElementById(`otp-input-${index + 1}`);
                    if (nextInput) {
                        nextInput.focus();
                    }
                }
            });
        }
    };

    const handle = () => {
        const otpV = otpValues.join('');
        const requestData = { otp: otpV }
        axios
            .post('https://palmfit-test.onrender.com/api/Auth/Validate-OTP', requestData)
            .then(response => {
                if (response.data.succeeded) {
                    setValidationResult(response.data.message);
                    //Redirect should come in here
                    navigate("/onboarding");
                } else {
                    setValidationResult(response.data.message);
                }
            })
            .catch(error => {
                console.error('Error sending OTP:', error);
            });
    }

    const sendOTP = () => {
    axios
        .post('https://palmfit-test.onrender.com/api/Auth/sendotp', { email: email })
        .then(response => {
        console.log('OTP Sent:', response.data);
        })
        .catch(error => {
        console.error('Error sending OTP:', error);
        });
    };


    return (
        <div className="wrapper col-md-12">
            <form action="" id="signup-form">
                <section>
                    <div className="inner">
                        <div className="image-holder">
                            <img src={SignUpBanner} alt="" height="600vh" width="100%" />
                        </div>
                        <div className="form-content">
                            <div className="form-header">
                                <h3 id="SignUp-H3">Verify your email</h3>
                                <small>A verification code was sent to "{email}". Please enter the code here.</small>
                            </div>

                            <div className="form-row otp-row">
                                <div className="form-holder">
                                    {otpValues.map((value, index) => (
                                        <input key={index} id={`otp-input-${index}`}
                                            type="text" className="otpInput"
                                            value={value} maxLength="1"
                                            onChange={(event) => handleOTPChange(index, event.target.value)}
                                            onPaste={handlePaste}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="take">
                                    <small>Didn't get a code? </small>
                                    <span>
                                        <a href='#' className="resend-link" onClick={sendOTP}>Resend OTP</a>
                                    </span>
                                </div>
                                <div className="form-holder">
                                    <button
                                        className="btn btn-success" type="submit"
                                        style={{ backgroundColor: "rgb(26,141,141)", color: "white", marginTop: "8vh", marginLeft: "12vw" }}
                                        onClick={handle}
                                    >
                                        Submit
                                    </button>
                                    {validationResult && (
                                        <div className="mt-2">
                                            <span>Validation Result: {validationResult}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    );
}

export default OTPValidationPage;
