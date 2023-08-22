import React, { useState } from 'react';
import '../styles/SignUpPage2.css';
import SignUpBanner from '../images/SignUpBanner.svg';
 


function OTPValidationPage() {
    const [otpValues, setOTPValues] = useState(["", "", "", "", "", ""]);

    const handleOTPChange = (index, value) => {
        // Allow only numeric input
        if (!isNaN(value) && value.length <= 1) {
            const newOTPValues = [...otpValues];
            newOTPValues[index] = value;
            setOTPValues(newOTPValues);

            // Move focus to the next input if there's a value
            if (index < otpValues.length - 1 && value !== "") {
                const nextInput = document.getElementById(`otp-input-${index + 1}`);
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    };

    const handleOTPSubmit = (event) => {
        event.preventDefault();
        const otp = otpValues.join("");
        // Here you can implement the logic to verify the OTP
        // For example, you can send the OTP to a server for validation
        // If the OTP is valid, you can proceed with the registration process
    };

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
                                
                                <h3 id="SignUp-H3">Verify your email</h3>
                                <small> A verification code was sent to your email. Please enter the code here.</small>
                            </div>

                            <div className="form-row otp-row">
                                <div className="form-holder">
                                    {otpValues.map((value, index) => (
                                        <input
                                            key={index}
                                            id={`otp-input-${index}`}
                                            type="text"
                                            className="otpInput"
                                            value={value}
                                            maxLength="1"
                                            onChange={(event) => handleOTPChange(index, event.target.value)}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="form-row">
                                <small>Didnt get a code?</small><span><a href="#">Resend</a></span>
                                <div className="form-holder">
                                   
                                    <button
                                        className="btn btn-success "
                                        type="submit"
                                        style={{ backgroundColor: "rgb(26,141,141)", color: "white", marginTop: "8vh",marginLeft:"10vw" }}
                                        onClick={handleOTPSubmit}
                                    >
                                        Submit
                                    </button>
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